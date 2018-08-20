import { Component, OnInit } from '@angular/core';
import { DetailsRacketModel } from '../models/deatils-racket.model';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { RacketService } from '../racket.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-delete-racket',
  templateUrl: './delete-racket.component.html',
  styleUrls: ['./delete-racket.component.css']
})
export class DeleteRacketComponent implements OnInit {
  currentItem: Observable<DetailsRacketModel>;
  id: string
  constructor(
    private route: ActivatedRoute,
    private racketService: RacketService,
    private toastrService: ToastrService,
    private router: Router
  ) {
    this.id = this.route.snapshot.params['id'];
  }

  ngOnInit() {
    this.currentItem = this.racketService.getRacketDeatails(this.id);
  }

  delete(id: number) {
    console.log('id: ', id);
    debugger;
    this.racketService.deleteRacket(id)
      .subscribe(
        // res => {
        //   debugger;
        //   this.toastrService.info(res['message']);
        //   this.router.navigate(['/racket/all']);
        //   console.log('Delete res:', res);
        // },
        // err => {
        //   debugger;
        //   this.toastrService.error(err['error']['message'], 'Error!');
        //   console.log('Delete err:', err);
        // }
      );
  }
}