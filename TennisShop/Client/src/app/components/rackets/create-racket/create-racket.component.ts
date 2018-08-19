import { Component, OnInit } from '@angular/core';
import { CreateRacketModel } from '../models/create-racket.model';
import { RacketService } from '../racket.service';

@Component({
  selector: 'app-create-racket',
  templateUrl: './create-racket.component.html',
  styleUrls: ['./create-racket.component.css']
})
export class CreateRacketComponent implements OnInit {
  bindingModel: CreateRacketModel;
  constructor(private racketService: RacketService) {
    this.bindingModel = new CreateRacketModel('', '', '', 0, 0, 0, '', '', '', '');
  }

  ngOnInit() {
  }

  createRacket(formData) {
    console.log(formData);
    this.racketService
      .createRacket(this.bindingModel)
      .subscribe(
        res => console.log('create Res: ', res),
        err => console.log('create Err: ', err),
      );
  }

}
