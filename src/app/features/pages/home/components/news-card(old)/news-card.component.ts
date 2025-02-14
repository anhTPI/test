import { Component, OnInit, OnChanges, SimpleChanges, Input } from '@angular/core';
@Component({
  selector: 'app-news-card',
  templateUrl: './news-card.component.html',
  styleUrls: ['./news-card.component.scss'],
})
export class NewsCardComponent implements OnInit {
  fillColor = '';
  @Input() date: string= '2023.08.07';
  @Input() title: string = '';
  @Input() direction: 'left' | 'right' = 'left';
  @Input() disabled!: boolean;
  ngOnInit(): void {
  }

}
