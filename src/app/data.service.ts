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
    wikipediaEntry: Observable<any>;

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
                console.log('response pictures: ', data);
                return data['result'];
            });


        const url1 = 'https://images.pexels.com/photos/240040/pexels-photo-240040.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500';
        const url2 = 'https://upload.wikimedia.org/wikipedia/commons/e/ea/Ice_cream_cone_%28cropped%29.jpg';
        const response = [url1, url2];
        return response;
    }

    getWikipediaContentByPicture(pictureUrl: string) {
        // returns wikiepdia text
        return new Promise((resolve, reject) => {
            const body = {
                photo_url: pictureUrl
            };

            resolve({
                wikipediaText: 'Auf diesem Bild ist leider nichts zu sehen'
            });

            this.wikipediaEntry = this.httpClient.post(this.backendUrl + '/api/photo', body);
            this.wikipediaEntry
                .subscribe(
                    res => {
                        console.log('response wikipedia: ', res);
                        resolve(res);
                    },
                    err => {
                        console.log('error wikipedia: ', err);
                        reject(err);
                    }
                );
        });


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

    persistData(key: string, data: Array<string>) {
        this.storage.set(key, data);
    }

    reaData(key: string) {
        return this.storage.get(key);

    }
}
