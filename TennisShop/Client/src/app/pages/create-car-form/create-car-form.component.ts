import { Component, OnInit } from '@angular/core';
import { CarModel } from './car.model';
import { UsersService } from './../../users/users.service';

@Component({
  selector: 'app-create-car-form',
  templateUrl: './create-car-form.component.html',
  styleUrls: ['./create-car-form.component.css']
})
export class CreateCarFormComponent implements OnInit {
  car: CarModel = new CarModel();
  constructor(
    private usersService: UsersService
  ) { }


  createCar() {
    console.log(this.car);
    this.usersService.createCar(this.car)
    .subscribe(
      res => console.log(res),
      err => console.log(err)
    );
  }


  ngOnInit() {
  }



}
