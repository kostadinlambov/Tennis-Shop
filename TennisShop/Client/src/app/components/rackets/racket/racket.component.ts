import { Component, OnInit, Input } from '@angular/core';
import { UsersService } from '../../users/services/users.service';

@Component({
  selector: 'app-racket',
  templateUrl: './racket.component.html',
  styleUrls: ['./racket.component.scss']
})
export class RacketComponent implements OnInit {
@Input('racket') racket: Object;
  constructor(
    private userService: UsersService
  ) { }

  ngOnInit() {
  }

}
