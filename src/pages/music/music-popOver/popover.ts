import { Component } from '@angular/core'
import { ViewController } from 'ionic-angular';

@Component({
    selector: 'page-music-pop',
    template: `
        <ion-grid text-center>
            <ion-row>
            <ion-col>
                <h3>My Music Streams</h3>
            </ion-col>
            </ion-row>

            <ion-row>
            <ion-col>
                <button ion-button outline>My Albums</button>
            </ion-col>
            </ion-row>

            <ion-row>
            <ion-col>
                <button ion-button outline>My Singles</button>
            </ion-col>
            </ion-row>
        </ion-grid>
    `
})

export class MusicPop {
    
    constructor(private viewCtrl: ViewController) {}
    
    onAction(action: string) {
        this.viewCtrl.dismiss({action: action});

    }

}