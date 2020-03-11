import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convMileToKM'
})
export class ConvMileToKMPipe implements PipeTransform {

  transform(value: any, unit: string): any {
    if (!value) {
      return 0;
    }
    switch (unit) {
      case 'km':
        return value * 1.60934;
      case 'm':
        return value * 1.60934 * 1000;
      default:
        throw new Error('Target unit not supported!');
    }
    // return value ? value * 1.60934 : 0;
  }

}
