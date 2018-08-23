import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class DataSharingService {
    public isUserLoggedIn: BehaviorSubject<string> = new BehaviorSubject<string>('');
    public reloadComponent: BehaviorSubject<string> = new BehaviorSubject<string>('');
}