import { Component} from '@angular/core';

@Component({
  templateUrl: './fAq.component.html',
  styleUrls: ['./fAq.component.scss'],
})
export class FAQComponent  {
  numbers: number[] = Array.from({ length: 3 }, (_, i) => i + 1);
  disabled = false;
}
