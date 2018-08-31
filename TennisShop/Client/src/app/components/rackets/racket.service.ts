import { Injectable } from "@angular/core";
import { HttpService } from '../../core/services/http.service';
import { HttpClient } from '@angular/common/http';
import { DetailsRacketModel } from './models/deatils-racket.model';
import { Observable } from "rxjs";
import { CreateRacketModel } from './models/create-racket.model';

const baseUrl = 'http://localhost:8000/rackets/';


@Injectable()
export class RacketService {

    constructor(private http: HttpClient) { }

    // createRacket(data, fileToUpload) {
    createRacket(data) {
        // const uploadData = {data, fileToUpload};
        return this.http.post(baseUrl + 'create' , data);
    }

    // createRacket(data: CreateRacketModel) {
    //     return this.http.post(baseUrl + 'create' , data);
    // }

    getAll(): Observable<DetailsRacketModel[]> {
        return this.http.get<DetailsRacketModel[]>(baseUrl + 'all');
    }

    getRacketDeatails(id) {
        return this.http.get<DetailsRacketModel>(baseUrl + `details/${id}`);
    }

    editRacket(id, data) {
        return this.http.put(baseUrl + `edit`, data);
    }

    deleteRacket(id) {
        return this.http.delete(baseUrl + `delete/${id}`);
    }

    loadCategories() {
        return this.http.get(baseUrl + 'categories');
    }

    uploadFile(fd){
      return this.http.post(baseUrl, fd);
    }
}
