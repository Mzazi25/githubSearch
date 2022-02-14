import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gitpipe'
})
export class GitpipePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
