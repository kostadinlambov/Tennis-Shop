import { Injectable } from "@angular/core";
import { HttpService } from '../../core/services/http.service';
import { HttpClient } from '@angular/common/http';
import { DetailsRacketModel } from './models/deatils-racket.model';
import { Observable } from "rxjs";
import { CreateRacketModel } from './models/create-racket.model';

// const createUrl = 'http://localhost:5000/furniture/create';
// const getAllUrl = 'http://localhost:8000/rackets/all';
// const myFurnitureUrl = 'http://localhost:5000/furniture/my';
// const springTestUrl = 'http://localhost:8000/rackets';

const baseUrl = 'http://localhost:8000/rackets/';


@Injectable()
export class RacketService {

    constructor(private http: HttpClient) { }

    createRacket(data: CreateRacketModel) {
        return this.http.post(baseUrl + 'create' , data);
    }

    getAll(): Observable<DetailsRacketModel[]> {
        return this.http.get<DetailsRacketModel[]>(baseUrl + 'all');
    }

    // getDeatails(id): Observable<DetailsFurnitureModel> {
    getRacketDeatails(id) {
        return this.http.get<DetailsRacketModel>(baseUrl + `details/${id}`);
    }

    getRacketById(id: string) {
        return this.http.get<CreateRacketModel>(baseUrl + id);
    }

    editRacket(id, data) {
        console.log('edit data: ', data);
        const editUrl = baseUrl + `edit`;
        // const editUrl = baseUrl + `edit/${id}`;
        // return this.http.put(editUrl, data);
        return this.http.put(editUrl, data);
    }

    test(id, data) {
        console.log('edit data: ', data);
        const editUrl = baseUrl + `test`;
        // const editUrl = baseUrl + `edit/${id}`;
        // return this.http.put(editUrl, data);
        return this.http.put(editUrl, data);
    }


    // myFurniture(): Observable<DetailsFurnitureModel[]> {
    //     return this.http.get<DetailsFurnitureModel[]>(myFurnitureUrl);
    // }

    // delete(id) {
    //     const deleteUrl = `http://localhost:5000/furniture/delete/${id}`;
    //     return this.http.delete(deleteUrl);
    // }

    

   

    // editFurnitureById(id: string, body: DetailsFurnitureModel) {
    //     const editfurnitureByIdUrl = `http://localhost:5000/furniture/edit/${id}`
    //     return this.http.post<DetailsFurnitureModel>(editfurnitureByIdUrl, body);
    // }

    // // editFurnitureById(id: string, body: DetailsFurnitureModel){
    // //     const editfurnitureByIdUrl = `http://localhost:5000/furniture/edit/${id}`
    // //     return this.http.put<DetailsFurnitureModel>(editfurnitureByIdUrl, body);
    // // }

    // getAllSpringTest(): Observable<DetailsFurnitureModel[]> {
    //     return this.http.get<DetailsFurnitureModel[]>(springTestUrl);
    // }

}
