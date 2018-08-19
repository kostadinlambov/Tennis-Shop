import { Component, OnInit } from '@angular/core';
import { DetailsRacketModel } from '../models/deatils-racket.model';
import { ActivatedRoute } from '@angular/router';
import { RacketService } from '../racket.service';
import { CreateRacketModel } from '../models/create-racket.model';

@Component({
  selector: 'app-edit-racket',
  templateUrl: './edit-racket.component.html',
  styleUrls: ['./edit-racket.component.css']
})
export class EditRacketComponent implements OnInit {
  bindingModel: CreateRacketModel;
  id: string
  constructor(
    private route: ActivatedRoute,
    private racketService: RacketService
  ) { }

  ngOnInit() {
    this.racketService
      .getRacketDeatails(this.route.snapshot.params['id'])
      .subscribe(data => {
        console.log('bindingModel: ', data);
        this.bindingModel = data;
      });
  }

  edit() {
    this.racketService.editRacket(this.bindingModel['id'], this.bindingModel)
      .subscribe(data => {
        console.log('editRacketById: ', data);
      });
  }
}
