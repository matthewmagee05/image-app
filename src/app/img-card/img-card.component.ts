import { Component, Input, OnInit } from '@angular/core';
import { ImageService } from '../image.service';

@Component({
  selector: 'app-img-card',
  templateUrl: './img-card.component.html',
  styleUrls: ['./img-card.component.css'],
})
export class ImgCardComponent implements OnInit {
  @Input() image;
  constructor(private imageService: ImageService) {}

  ngOnInit(): void {}

  handleDownload(id: number) {
    this.imageService.downloadSingleFile(this.image.img_src, id);
  }
}
