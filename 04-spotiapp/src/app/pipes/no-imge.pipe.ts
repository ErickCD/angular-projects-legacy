import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noImge',
})
export class NoImgePipe implements PipeTransform {
  transform(images: any[], ...args: unknown[]): unknown {
    if (!images) {
      return 'assets/img/noimage.png';
    }

    if (images.length > 0) return images[0].url;

    return 'assets/img/noimage.png';
  }
}
