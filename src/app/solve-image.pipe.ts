import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'solveImage'
})
export class SolveImagePipe implements PipeTransform {

  transform(value1:any,value2:any): string {
    if(value1!=null)
    {
      return value1;
    }
    else if(value2!=null)
    {

      return value2;
    }
    return "";
  }

}
