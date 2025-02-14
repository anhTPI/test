import { Injectable } from '@angular/core';
import { EventCard } from '@core/models/events-card.model';

@Injectable({
  providedIn: 'root',
})
export class EventsCardService {
  getSlides(): EventCard[] {
    return [
      {
        image: 'assets/image/events/Event1/1_1_M.png',
        title: 'Cathay United Bank ra mắt ứng dụng CUB Vietnam',
        description:
          'CUB Vietnam cung cấp sản phẩm vay tiêu dùng trực tuyến, tăng tiện ích cho người dùng, chính thức ra mắt ngày 28/3.',
        active: false,
      },
      {
        image: 'assets/image/events/Event2/2_1_M.png',
        title: 'Vay tiền mặt an toàn, tiện lợi cùng ứng dụng CUB Vietnam',
        description:
          'Ngày 28-3, Ngân hàng Cathay United Bank Chi nhánh TP.HCM (CUB HCM) ra mắt ứng dụng cho vay tiêu dùng cá nhân CUB Vietnam, với ba tiêu chí linh hoạt, nhanh chóng, dễ dàng.',
        active: false,
      },
      {
        image: 'assets/image/events/Event3/3_1_M.png',
        title:
          'CUB định hướng trở thành ngân hàng chuẩn mực tài chính tiêu dùng kỹ thuật số',
        description:
          'Ngân hàng Cathay United Bank công bố ứng dụng cho vay tiêu dùng trên di động theo mục tiêu hướng đến khách hàng cá nhân.',
        active: false,
      },
      {
        image: 'assets/image/events/Event4/4_1_M.png',
        title:
          'Ngân hàng Cathay United Bank hướng đến tài chính tiêu dùng tại Việt Nam',
        description:
          'Sau 18 năm hoạt động tại Việt Nam, mới đây Ngân hàng Cathay United Bank một tổ chức tài chính tập trung vào công nghệ, dữ liệu và số hóa từ Đài Loan, đã tổ chức sự kiện định vị lại hoạt động kinh doanh mang tính chiến lược, mở rộng quy mô tài chính sang tài chính tiêu dùng thị trường Việt Nam.',
        active: false,
      },
      {
        image: 'assets/image/events/Event5/5_1_M.png',
        title:
          'Các trụ cột trong chiến lược tái định vị của Cathay United Bank',
        description:
          'CUB công bố mở rộng quy mô thêm mảng tài chính tiêu dùng, coi Việt Nam là ngôi nhà thứ hai khi thị trường này có vị thế ngày càng cao trên chuỗi cung ứng toàn cầu.',
        active: false,
      },
      {
        image: 'assets/image/events/Event6/6_1_M.png',
        title: 'Cathay United Bank mở rộng quy mô tại thị trường Việt Nam',
        description:
          'Ngân hàng Cathay United Bank (CUB) vừa thông báo sẽ định vị lại hoạt động kinh doanh mang tính chiến lược, mở rộng quy mô tài chính sang tài chính tiêu dùng, đánh dấu một bước chuyển mình quan trọng sau 18 năm hoạt động tại thị trường Việt Nam.',
        active: false,
      },
      {
        image: 'assets/image/events/Event7/7_1_M.png',
        title: 'Ngân hàng Cathay United Bank – Chi nhánh TP. Hồ Chí Minh hợp tác với Thế Giới Di Động để triển khai ứng dụng CUB Vietnam',
        description:
          'Ứng dụng CUB Vietnam được triển khai tại Thế Giới Di Động từ ngày 14/10/2024, hỗ trợ khách hàng đơn giản hóa quy trình vay, giải ngân 24/7, thuận tiện khi mua sắm.',
        active: false,
      },
    ];
  }
}
