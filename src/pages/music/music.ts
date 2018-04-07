import { Component } from '@angular/core';
import { NavController, PopoverController } from 'ionic-angular';
import { MusicPop } from './music-popOver/popover';

@Component({
  selector: 'page-about',
  templateUrl: 'music.html'
})
export class MusicPage {

  constructor(public navCtrl: NavController, public popoverCtrl: PopoverController) {

  }

onShowOptions(event: MouseEvent) {
  const popover = this.popoverCtrl.create(MusicPop);
  popover.present({ev: event});
}

}

