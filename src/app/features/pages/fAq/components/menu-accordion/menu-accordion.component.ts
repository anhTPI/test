import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Tabs } from '@app/core/models/components/tab-faq.model';

@Component({
  selector: 'app-menu-accordion',
  templateUrl: './menu-accordion.component.html',
  styleUrls: ['./menu-accordion.component.scss'],
  animations: [
    trigger('dropdownAnimation', [
      // Trạng thái đóng
      state(
        'closed',
        style({
          opacity: 0,
          transform: 'scaleY(0)',
          height: '0px',
          overflow: 'hidden',
        })
      ),
      // Trạng thái mở
      state(
        'open',
        style({
          opacity: 1,
          transform: 'scaleY(1)',
          height: '*', // Tự động mở rộng theo nội dung
        })
      ),
      // Khi thay đổi trạng thái
      transition('closed <=> open', animate('300ms ease-in-out')),
      transition(':enter', [
        // Khi dropdown xuất hiện
        style({ opacity: 0, transform: 'scaleY(0)', height: '0px' }),
        animate(
          '300ms ease-out',
          style({ opacity: 1, transform: 'scaleY(1)', height: '*' })
        ),
      ]),
      transition(':leave', [
        // Khi dropdown biến mất
        animate(
          '200ms ease-in',
          style({ opacity: 0, transform: 'scaleY(0)', height: '0px' })
        ),
      ]),
    ]),
  ],
})
export class MenuAccordion {
  @Input() tabs!: Tabs[];
  @Input() activeIndex!: number;
  @Output() buttonClicked = new EventEmitter<number>(); // Tạo sự kiện truyền lên cha

  showOptions: boolean = false;

  constructor() {}

  toggleSelect(): void {
    this.showOptions = !this.showOptions;
  }
  selectTab(i: number) {
    this.buttonClicked.emit(i);
    this.toggleSelect()
  }
}
