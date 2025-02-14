import { Component, OnInit, OnChanges, SimpleChanges, Input } from '@angular/core';
@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss'],
})
export class AlertComponent implements OnInit, OnChanges {
  fillColor = '';
  @Input() size!: 'L' | 'M' | 'S';
  @Input() direction: 'left' | 'right' = 'right';
  @Input() disabled!: boolean;
  @Input() enableFooter: boolean = true;
  @Input() enableBg: boolean = false;
  @Input() icon = 'assets/image/icon/alert-bell.svg';
  @Input() title = 'Alert.Title';
  @Input() contentText = 'Ngân hàng sẽ không yêu cầu Quý khách hàng đăng nhập vào Ngân hàng Trực tuyến để ràng buộc thông tin người dùng của Quý khách hàng. Ngân hàng sẽ không yêu cầu Quý khách hàng đăng nhập vào';
  show: boolean = true;
  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.disabled) {
      this.fillColor = this.disabled ? '#888c8f' : '#1a1a1a';
    }
  }

  showAlert() {
    this.show = true;
  }
  
  closeAlert() {
    this.show = false;
  }

}
