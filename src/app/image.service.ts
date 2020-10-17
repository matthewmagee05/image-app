import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as FileSaver from 'file-saver';
import * as JSZipUtils from 'jszip-utils';
import * as JSZip from 'jszip';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ImageService {
  private dataSource = new BehaviorSubject<boolean>(false);
  loading$ = this.dataSource.asObservable();

  updateLoading(loading: boolean) {
    this.dataSource.next(loading);
  }

  constructor(private http: HttpClient) {}

  getImageByDate(date: string) {
    return this.http.get(`http://localhost:3000/images?date=${date}`);
  }

  public getFile(path: string) {
    return this.http.get(path, { observe: 'response', responseType: 'blob' });
  }

  downloadSingleFile(url: string, id: number) {
    FileSaver.saveAs(url, `${id}.jpg`);
  }

  downloadFiles(images, dateRange) {
    let zip = new JSZip();
    let count = 0;
    if (images.length > 0) {
      images.forEach((image) => {
        JSZipUtils.getBinaryContent(image.img_src, (err, data) => {
          if (err) {
            this.updateLoading(false);
          }
          zip.file(`${image.id}.jpg`, data, { binary: true });
          count++;
          if (count === images.length - 1) {
            zip.generateAsync({ type: 'blob' }).then((content) => {
              saveAs(content, `${dateRange}.zip`);
              this.updateLoading(false);
            });
          }
        });
      });
    }
  }
}
