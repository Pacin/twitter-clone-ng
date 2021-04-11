import { Component, OnInit } from '@angular/core';
import {faJediOrder} from '@fortawesome/free-brands-svg-icons';


@Component({
  selector: 'app-feed-page',
  templateUrl: './feed-page.component.html',
  styleUrls: ['./feed-page.component.scss']
})
export class FeedPageComponent implements OnInit {
faJediOrder = faJediOrder;
tweets:any[] = [
  {
    id:1, 
    text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid repudiandae eius consectetur mollitia sed impedit, voluptatem harum debitis amet ullam adipisci soluta nesciunt, optio temporibus incidunt? Obcaecati laboriosam doloremque iur.',
    created_at: '18h',
    user: {
      id:1,
      name: 'Jake',
      username: '@jakeuser',
      imgUrl: 'https://unsplash.it/51/50'
    }
  },
  {
    id:2, 
    text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid repudiandae eius consectetur mollitia sed impedit, voluptatem harum debitis amet ullam adipisci soluta nesciunt, optio temporibus incidunt? Obcaecati laboriosam doloremque iur.',
    created_at: '15h',
    user: {
      id:2,
      name: 'Jane',
      username: '@janeuser',
      imgUrl: 'https://unsplash.it/50/51'
    }
  },
  {
    id:3, 
    text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid repudiandae eius consectetur mollitia sed impedit, voluptatem harum debitis amet ullam adipisci soluta nesciunt, optio temporibus incidunt? Obcaecati laboriosam doloremque iur.',
    created_at: '12h',
    user: {
      id:3,
      name: 'Bob',
      username: '@bobuser',
      imgUrl: 'https://unsplash.it/50/52'
    }
  },
]

  constructor() { }

  ngOnInit(): void {
  }

}
