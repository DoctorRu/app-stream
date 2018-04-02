import { Component } from '@angular/core';

import { MusicPage } from '../music/music';
import { NewsPage } from '../news/news';
import { VideoPage } from '../video/video';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = VideoPage;
  tab2Root = MusicPage;
  tab3Root = NewsPage;

  constructor() {

  }
}
