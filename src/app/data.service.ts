import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class DataService {
    backendUrl: 'http://localhost:8080';
    pictureArray: Observable<any>;

    constructor(
        private toastCtrl: ToastController,
        private storage: Storage,
        private httpClient: HttpClient
    ) { }

    /*
   Communication Handling with Backend
    */
    getPicturesByInstagramUsername(name: string) {
        this.pictureArray = this.httpClient.get(this.backendUrl + '/api/' + name);
        this.pictureArray
            .subscribe(data => {
                console.log('response: ', data);
                return data;
            });


        const url1 = 'https://images.pexels.com/photos/240040/pexels-photo-240040.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500';
        const url2 = 'https://upload.wikimedia.org/wikipedia/commons/e/ea/Ice_cream_cone_%28cropped%29.jpg';
        const response = [url1, url2];
        return response;
    }

    getWikipediaContentByPicture(pictureUrl: string) {
        // returns wikiepdia text
        return "Beschreibung";
    }

    /*
    Utility functions, e.g. provide visual feedback on UI or store data in cache
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

    persistData(key: string, data: Array<String>) {
        this.storage.set(key, data);
    }

    reaData(key: string) {
        return this.storage.get(key);

    }
}
