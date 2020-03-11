import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convMileToKM'
})
export class ConvMileToKMPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return value ? value * 1.60934 : 0;
  }

}
