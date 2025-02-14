import { Component, OnInit, OnChanges, SimpleChanges, Input } from '@angular/core';
@Component({
  selector: 'app-arrow-button',
  templateUrl: './arrow-button.component.html',
  styleUrls: ['./arrow-button.component.scss'],
})
export class ArrowButtonComponent implements OnInit, OnChanges {
  fillColor = '';
  @Input() size!: 'L' | 'M' | 'S';
  @Input() direction: 'left' | 'right' = 'left';
  @Input() disabled!: boolean;
  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.disabled) {
      this.fillColor = this.disabled ? '#888c8f' : '#1a1a1a';
    }
  }

}
