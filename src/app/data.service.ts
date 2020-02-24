import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class DataService {
    backendUrl: string;
    pictureArray: Observable<any>;
    wikipediaEntry: Observable<any>;

    constructor(
        private toastCtrl: ToastController,
        private storage: Storage,
        private httpClient: HttpClient
    ) {
        this.backendUrl = 'http://gsq.ro:3000';
    }

    /*
   Communication Handling with Backend
    */
    getPicturesByInstagramUsername(name: string) {
        return new Promise((resolve, reject) => {
            this.httpClient.get(this.backendUrl + '/api/search/' + name).subscribe(
                (response) => {
                    console.log('response pictures: ', response);
                    resolve(response['result']);
                },
                (error) => {
                    console.log('error picture: ', error);
                    reject(error);
                }
            );
        });
    }

    getWikipediaContentByPicture(pictureUrl: string) {
        return new Promise((resolve, reject) => {
            const bodyPart = {
                photo_url: pictureUrl
            };

            const httpOptions = {
                headers: new HttpHeaders({
                    'Content-Type': 'application/json'
                }),
                body: bodyPart
            };


            this.httpClient.post(this.backendUrl + '/api/photo', bodyPart, httpOptions).subscribe(
                (response) => {
                    console.log('response wikipedia: ', response);
                    resolve(response['wikipedia']);
                },
                (error) => {
                    console.log('error wikipedia: ', error);
                    reject(error);
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
