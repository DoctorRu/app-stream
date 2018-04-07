import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component ({
    selector: 'page-vimeo',
    template: `
    
    <ion-header>
    
    <ion-navbar>
    
    <ion-title>Vimeo Video</ion-title>

    </ion-navbar>
    
    
    </ion-header>


    <ion-content>
    
    <iframe src="https://player.vimeo.com/video/127879233?byline=0&portrait=0" width="100%" height="100%" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
    
    </ion-content>
    
    
    
    `


})

export class VimeoVideo {

    constructor(public navCtrl: NavController) {
        
    }

}
