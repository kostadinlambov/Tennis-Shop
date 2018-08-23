import { Component, OnInit } from '@angular/core';
import { DetailsUserModel } from '../models/details-user.model';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../users.service';
import { Observable } from 'rxjs';
import { DataSharingService } from '../../../core/services/app.data-sharing.service';

@Component({
  selector: 'app-details-user',
  templateUrl: './details-user.component.html',
  styleUrls: ['./details-user.component.css']
})
export class DetailsUserComponent implements OnInit {
  currentItem: Observable<DetailsUserModel>;
  id: string
  rerender: string
  constructor(
    private route: ActivatedRoute,
    private userService: UsersService,
    private dataSharingService: DataSharingService

  ) {
    this.id = this.route.snapshot.params['id'];
  }

  ngOnInit() {
    debugger;
    this.dataSharingService.reloadComponent.subscribe(value => {
      debugger;
      if (value !== '') {
        const testId = value;
        this.currentItem = this.userService.getUserDetails(testId);
      }
      // debugger;
    });

    console.log('Details User id: ', this.id);
    this.currentItem = this.userService.getUserDetails(this.id);
    // this.rerender = true;
    // this.userservice.getUserDetails(this.id)
    //   .subscribe(
    //     (item) => {
    //       this.currentItem = item;
    //       console.log('currentUser ', item);
    //     },
    //     (err) => console.log(err)
    //   );
  }
}
