import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  email: string
  constructor(private toastr: ToastrService) { }

  ngOnInit() {
    const currentUser = localStorage.getItem('currentUser');
    console.log('currentUser-Before: ', currentUser);
    if (currentUser) {
      this.email = JSON.parse(localStorage.getItem('currentUser')).user.email;
      console.log('email: ', this.email);
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
