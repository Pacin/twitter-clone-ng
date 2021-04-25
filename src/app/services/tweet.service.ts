import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {environment as env } from 'src/environments/environment';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class TweetService {
  feed:any[] = [];

  constructor(
    private http: HttpClient,
    private authService: AuthService
  ) { }

  fetchTweets() {
    this.http.get(`${env.baseURL}/tweets?_sort=created_at:desc`)
       .subscribe((data:any) => this.feed = data);
  }

  sendTweet(text:string) {
    const {user, jwt} = this.authService;
    const newTweet = {
      text,
      user: user.id
    }
    

    return this.http.post(`${env.baseURL}/tweets`, newTweet, {
      headers:{
        'Authorization': `Bearer ${jwt}`
      }
    })
  }

  
  replyTweet(text:string, parentTweetId) {
    const {user, jwt} = this.authService;
    const newReply = {
      text,
      user: user.id,
      tweet: parentTweetId
    }
    

    return this.http.post(`${env.baseURL}/replies`, newReply, {
      headers:{
        'Authorization': `Bearer ${jwt}`
      }
    })
  }

  likeTweet(tweetId:number) {
    const {user, jwt} = this.authService;
    const newLike = {
      user: user.id,
      tweet: tweetId
    }

    return this.http.post(`${env.baseURL}/likes`, newLike, {
      headers:{
        'Authorization': `Bearer ${jwt}`
      }
    }).subscribe (data => this.fetchTweets());
  }

  disLikeTweet(likeId:number) {
    const {jwt} = this.authService;

    this.http.delete(`${env.baseURL}/likes/${likeId}`, {
      headers: {
        'Authorization': `Bearer ${jwt}`
      }
    }).subscribe(data => this.fetchTweets());
  }
}
