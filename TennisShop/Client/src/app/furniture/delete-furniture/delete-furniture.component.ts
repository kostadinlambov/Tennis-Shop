import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FurnitureService } from '../furniture.service';
import { DetailsFurnitureModel } from '../models/details.model';
import { Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-delete-furniture',
  templateUrl: './delete-furniture.component.html',
  styleUrls: ['./delete-furniture.component.css']
})
export class DeleteFurnitureComponent implements OnInit {
  currentItem: Observable<DetailsFurnitureModel>;
  id: string
  constructor(
    private route: ActivatedRoute,
    private furnitureService: FurnitureService,
    private toastrService: ToastrService,
    private router: Router
  ) {
    this.id = this.route.snapshot.params['id'];
  }

  ngOnInit() {
    this.currentItem = this.furnitureService.getDeatails(this.id);
  }

  delete(id: number) {
    console.log('id: ', id);
    this.furnitureService.delete(id)
      .subscribe(
        res => {
          this.toastrService.info(res['message']);
          this.router.navigate(['/furniture/my']);
          console.log('Delete res:', res);
        },
        err => {
          this.toastrService.error(err['error']['message'], 'Error!');
          console.log('Delete err:', err);
        }
      );
  }
}
