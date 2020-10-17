import { DatePipe } from '@angular/common';
import { Component, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { ImageService } from './image.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnDestroy {
  date = new FormControl(new Date());
  images: any[] = new Array();
  loading$: Observable<boolean> = this.imageService.loading$;

  constructor(public datepipe: DatePipe, private imageService: ImageService) {}

  ngOnDestroy(): void {
    this.imageService.loading$.subscribe((res) => {
      console.log(res);
    });
  }

  updatedDate() {
    this.imageService.updateLoading(true);
    const formattedDate = this.datepipe.transform(
      this.date.value,
      'yyyy-MM-dd'
    );
    this.imageService.getImageByDate(formattedDate).subscribe((res: any) => {
      this.imageService.updateLoading(false);
      this.images = res.photos;
    });
  }

  downloadAllFiles() {
    this.imageService.updateLoading(true);
    this.imageService.downloadFiles(this.images, this.date.value);
  }
}
