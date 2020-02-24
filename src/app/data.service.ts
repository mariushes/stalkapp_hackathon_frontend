import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
    providedIn: 'root'
})
export class DataService {
    constructor(
        private toastCtrl: ToastController,
) { }

    /*
   Communication Handling with Backend
    */
    getPicturesByInstagramUsername(name: string) {
        // returns the picture urls
    }

    getWikipediaContentByPicture(pictureUrl: string) {
        // returns wikiepdia text
    }

    /*
    Utility functions, e.g. provide visual feedback on UI
    */
    presentFeedback(text: string, colorKind: string) {
        this.toastCtrl.create({
            message: text,
            duration: 3000,
            position: 'top',
            color: colorKind,
        }).then(toast => {
            toast.present();
        });
    }
}
