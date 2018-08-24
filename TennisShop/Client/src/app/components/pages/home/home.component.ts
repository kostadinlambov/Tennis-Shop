import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { UsersService } from './../../users/users.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  username;
  constructor(
    private toastr: ToastrService,
  private userService: UsersService,
  private router: Router
) { }

  ngOnInit() {
    debugger;
    const token = localStorage.getItem('token');
    if (token) {
      this.username = this.userService.getUsername();
      // console.log('username: ', this.username);
    }
  }

  searchFnc(inputObj: Object) {
    // console.log('inputString: ', inputObj['search']);
    // const inputString = inputObj['search'];
    // if(inputString !== undefined && inputString.length > 0){
    //   this.moviesService.findAMovie(inputString)
    //   .subscribe(data => {
    //     if (!this.isSeachButtonClicked) {
    //       this.isSeachButtonClicked = !this.isSeachButtonClicked;
    //     }
    //     this.foundMovies = data;
    //     console.log('foundMovies: ', data.results);
    //   });
    // }
  }
}
