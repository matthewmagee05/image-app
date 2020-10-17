import { DatePipe } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, Validators, Validator, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { ImageService } from './image.service';
import * as moment from 'moment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  dateForm: FormGroup;
  images: any[] = new Array();
  loading$: Observable<boolean> = this.imageService.loading$;

  constructor(public datepipe: DatePipe, private imageService: ImageService) {}

  ngOnInit() {
    this.dateForm = new FormGroup({
      date: new FormControl([
        new Date(),
        [Validators.required]
      ]),
    });
  }
  ngOnDestroy(): void {
    this.imageService.loading$.subscribe((res) => {
      console.log(res);
    });
  }

  updatedDate() {
    if (this.dateForm.valid) {

      const formattedDate = this.datepipe.transform(
        this.dateForm.get('date').value,
        'yyyy-MM-dd'
      );
      if(!moment(formattedDate).isAfter()){
        this.imageService.updateLoading(true);
      this.imageService.getImageByDate(formattedDate).subscribe((res: any) => {
        this.imageService.updateLoading(false);
        this.images = res.photos;
      });
    }else{
      alert('Date should not be in the future!')
    }
    }
  }

  downloadAllFiles() {
    this.imageService.updateLoading(true);
    this.imageService.downloadFiles(
      this.images,
      this.dateForm.get('date').value
    );
  }
}
