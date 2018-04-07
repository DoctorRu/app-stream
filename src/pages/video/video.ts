import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { VimeoVideo } from '../videos/vimeo';
import { YoutubeVideo } from '../videos/youtube';

@Component({
  selector: 'page-home',
  templateUrl: 'video.html'
})
export class VideoPage {

  constructor(public navCtrl: NavController) {

  }

  playVimeo() {
    this.navCtrl.push(VimeoVideo);
  }

  playYoutube() {
    this.navCtrl.push(YoutubeVideo);
  }

}
