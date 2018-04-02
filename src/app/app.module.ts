import {NgModule, ErrorHandler} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
import {MyApp} from './app.component';

import {MusicPage} from '../pages/music/music';
import {NewsPage} from '../pages/news/news';
import {VideoPage} from '../pages/video/video';
import {TabsPage} from '../pages/tabs/tabs';

import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {IntroPage} from "../pages/intro/intro";

@NgModule({
    declarations: [
        MyApp,
        MusicPage,
        NewsPage,
        VideoPage,
        TabsPage,
        IntroPage
    ],
    imports: [
        BrowserModule,
        IonicModule.forRoot(MyApp)
    ],
    bootstrap: [ IonicApp ],
    entryComponents: [
        MyApp,
        MusicPage,
        NewsPage,
        VideoPage,
        TabsPage,
        IntroPage
    ],
    providers: [
        StatusBar,
        SplashScreen,
        {provide: ErrorHandler, useClass: IonicErrorHandler}
    ]
})
export class AppModule {
}
