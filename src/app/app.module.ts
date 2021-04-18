import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonComponent } from './components/ui/button/button.component';
import { InputComponent } from './components/ui/input/input.component';
import { CardComponent } from './components/ui/card/card.component';
import { ImgComponent } from './components/ui/img/img.component';
import { TextComponent } from './components/ui/text/text.component';
import { NavLinkComponent } from './components/ui/nav-link/nav-link.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DividerComponent } from './components/ui/divider/divider.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { FeedPageComponent } from './pages/feed-page/feed-page.component';
import { ListWrapperComponent } from './components/list-wrapper/list-wrapper.component';
import { ListItemComponent } from './components/list-item/list-item.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { TrendItemComponent } from './components/trend-item/trend-item.component';
import { TweetCardComponent } from './components/tweet-card/tweet-card.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { ModalComponent } from './components/modal/modal.component';
import { TextAreaComponent } from './components/ui/text-area/text-area.component';
import { TweetInputComponent } from './components/tweet-input/tweet-input.component';
import { SignUpFormComponent } from './pages/sign-up-form/sign-up-form.component';
import { LogInFormComponent } from './pages/log-in-form/log-in-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    InputComponent,
    CardComponent,
    ImgComponent,
    TextComponent,
    NavLinkComponent,
    DividerComponent,
    LandingPageComponent,
    HomePageComponent,
    ProfilePageComponent,
    FeedPageComponent,
    ListWrapperComponent,
    ListItemComponent,
    SideMenuComponent,
    TrendItemComponent,
    TweetCardComponent,
    TabsComponent,
    ModalComponent,
    TextAreaComponent,
    TweetInputComponent,
    SignUpFormComponent,
    LogInFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
