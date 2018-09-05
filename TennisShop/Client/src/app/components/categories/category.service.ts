import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { AllCategoryModel } from './all-category/models/all-category.model';

const baseUrl = 'http://localhost:8000/categories/';


@Injectable()
export class CategoryService {

    constructor(private http: HttpClient) { }

    createcategory(data) {
        return this.http.post(baseUrl + 'create' , data);
    }

    getAll(): Observable<AllCategoryModel[]> {
        return this.http.get<AllCategoryModel[]>(baseUrl + 'all');
    }

    getAllDeleted(): Observable<AllCategoryModel[]> {
        return this.http.get<AllCategoryModel[]>(baseUrl + 'allDeleted');
    }

    restoreCategory(categoryId){
        return this.http.post(baseUrl + 'restore?id=' + categoryId, categoryId);
    }

    deleteCategory(categoryId){
        return this.http.post(baseUrl + 'delete?id=' + categoryId, categoryId);
    }

    editCategory(id, data) {
        return this.http.put(baseUrl + `edit`, data);
    }

    // promote(id) {
    //     return this.http.post(baseUrl + 'promote?id=' + id, id);
    // }

    // getRacketDeatails(id) {
    //     return this.http.get<DetailsRacketModel>(baseUrl + `details/${id}`);
    // }

    // editRacket(id, data) {
    //     return this.http.put(baseUrl + `edit`, data);
    // }


    // deleteRacket(id) {
    //     return this.http.delete(baseUrl + `delete/${id}`);
    // }
}
