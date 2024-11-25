import { Pipe, PipeTransform } from '@angular/core';

type FlyOptionsI = 'vuela' | 'no vuela';

@Pipe({
  name: 'canFly',
  standalone: false,
})
export class CanFlyPipe implements PipeTransform {
  transform(value: boolean): FlyOptionsI {
    return value ? 'vuela' : 'no vuela';
  }
}
