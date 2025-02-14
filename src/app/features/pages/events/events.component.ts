import { Location } from '@angular/common';
import { ChangeDetectorRef, Component, HostListener } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject, debounceTime } from 'rxjs';

interface Content {
  name: string;
  title: string;
  content: string;
  subContents: Array<SubContent>;
  date: string;
  imgL: string;
  imgM: string;
  imgPostion: boolean;
}

interface SubContent {
  img?: string;
  imgDesc?: string;
  content: string;
}

@Component({
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss'],
})
export class EventsComponent {
  name: string | null = '';
  isMobile: boolean = false;
  windowResize$ = new Subject<number>();
  innerWidth!: number;
  contents: Array<Content> = [
    {
      name: '0',
      title: 'Cathay United Bank ra mắt ứng dụng CUB Vietnam',
      content:
        'CUB Vietnam cung cấp sản phẩm vay tiêu dùng trực tuyến, tăng tiện ích cho người dùng, chính thức ra mắt ngày 28/3.',
      subContents: [
        {
          content:
            'Theo lãnh đạo Cathay United Bank (CUB), ứng dụng CUB Vietnam đóng vai trò như một nền tảng tài chính số toàn diện, hỗ trợ khách hàng vay thuận tiện và an toàn. Điểm mới là dịch vụ và quy trình đăng ký cho vay được tối ưu hóa để giảm bớt thủ tục và tiết kiệm thời gian, chỉ với căn cước công dân, khách hàng có thể dễ dàng đăng ký các dịch vụ tài chính trên ứng dụng trực tuyến mọi lúc mọi nơi mà không cần phải đến tận văn phòng Cathay United Bank.',
        },
        {
          img: 'assets/image/events/Event1/1_2.jpg',
          imgDesc:
            'Lãnh đạo ngân hàng cùng khách mời trải nghiệm thao tác đăng ký trên ứng dụng CUB Vietnam.',
          content:
            'Đặc biệt, ứng dụng CUB Vietnam cấp hạn mức tín dụng với thời hạn lên đến 5 năm. Nghĩa là trong thời gian này, khách hàng có thể đề nghị rút vốn vay và được giải ngân nhiều lần (trong phạm hạn mức tín dụng đã được cấp) mà không cần thực hiện lại toàn bộ thủ tục cho vay theo yêu cầu. Hình thức này giúp người dùng tối ưu trải nghiệm, giảm thao tác lặp đi lặp lại. <br><br>' +
            'Ông Benny Miao, Phó tổng giám đốc phụ trách khu vực Đông Nam Á của Cathay United Bank (CUB) cho biết, việc ra mắt ứng dụng nằm trong chiến lược tái định vị thương hiệu năm 2024. Điều này còn thể hiện cam kết về sự đổi mới và nâng cao trải nghiệm khách hàng. <br><br>' +
            '"Ứng dụng mới ra mắt đánh dấu sự chuyển đổi mạnh mẽ tại thị trường Việt Nam, mở rộng phạm vi dịch vụ sang lĩnh vực tài chính tiêu dùng", ông Benny Miao nhấn mạnh. <br><br>' +
            'Cũng theo ông, suốt 18 năm tại Việt Nam, đơn vị không ngừng nâng cao sản phẩm và dịch vụ nhằm mang lại lợi ích tối đa cho khách hàng, bổ sung chuẩn mực về tài chính tiêu dùng kỹ thuật số trong hệ sinh thái ngân hàng Đài Loan ở Đông Nam Á. <br><br>',
        },
        {
          img: 'assets/image/events/Event1/1_3.jpg',
          imgDesc: 'Ông Benny Miao nêu tầm nhìn của đơn vị.',
          content:
            'Bổ sung, ông Joe Liang, Phó tổng giám đốc CUB nêu chiến lược của đơn vị hiện nay tập trung vào việc: thiết lập hệ sinh thái tài chính số an toàn, minh bạch và thân thiện với người dùng. Ông nói, việc ra mắt ứng dụng CUB Vietnam và sản phẩm vay tiêu dùng trực tuyến là cột mốc quan trọng đầu tiên trong năm nay. <br><br>' +
            '"Ngân hàng cam kết duy trì sự hiện diện lâu dài tại thị trường Việt Nam và sẽ tiếp tục cải tiến sản phẩm của mình dựa trên nhu cầu, thị hiếu của khách hàng", ông Joe Liang khẳng định. <br><br>' +
            'Cũng tại sự kiện, ông Đan Nguyễn, Giám đốc phát triển sản phẩm Khách hàng cá nhân của CUBHCM cho biết, cùng với việc giới thiệu ứng dụng mới, ngân hàng chia sẻ tầm nhìn trở thành đối tác tài chính tin cậy cho người Việt. Theo ông, ngân hàng đề ra chiến lược tiếp tục hỗ trợ mục tiêu phát triển bền vững cho cộng đồng tại Việt Nam trong thời gian tới. <br><br>',
        },
        {
          img: 'assets/image/events/Event1/1_4.jpg',
          imgDesc:
            'Lãnh đạo ngân hàng giới thiệu thông điệp mới trong năm nay: "Có Cathay cân cả thảy"',
          content:
            'Trước đó, ngày 4/1, CUB đã công bố mở rộng quy mô tại Việt Nam bằng cách mở thêm mảng tài chính tiêu dùng. Đi cùng, lãnh đạo đơn vị tuyên bố "Việt Nam là ngôi nhà thứ hai" khi thị trường này có vị thế ngày càng cao trên chuỗi cung ứng toàn cầu. Chiến lược tái định vị xoay quanh ba trụ cột: cơ sở hạ tầng kỹ thuật số, dịch vụ kỹ thuật số và phát triển - duy trì nhân tài. <br><br>',
        },
        {
          img: 'assets/image/events/Event1/1_5.jpg',
          imgDesc:
            'Các lãnh đạo của ngân hàng chia sẻ về chiến lược, tầm nhìn cho năm 2024',
          content:
            'Cathay United Bank thành lập vào năm 1975, là công ty con của Tập đoàn tài chính Cathay Financial Holdings (CFH). Với tầm nhìn trở thành tổ chức tài chính hàng đầu ở khu vực châu Á - Thái Bình Dương, CUB hiện có 232 chi nhánh và văn phòng tại nhiều quốc gia và vùng lãnh thổ. Số lượng nhân viên trên toàn mạng lưới trên 10.000 người. <br><br>',
        },
      ],
      date: '28/03/2024',
      imgL: 'assets/image/events/Event1/1_1_L.png',
      imgM: 'assets/image/events/Event1/1_1_M.png',
      imgPostion: false,
    },
    {
      name: '1',
      title: 'Vay tiền mặt an toàn, tiện lợi cùng ứng dụng CUB Vietnam',
      content:
        'Ngày 28-3, Ngân hàng Cathay United Bank Chi nhánh TP.HCM (CUB HCM) ra mắt ứng dụng cho vay tiêu dùng cá nhân CUB Vietnam, với ba tiêu chí linh hoạt, nhanh chóng, dễ dàng.',
      subContents: [
        {
          content:
            'CUB Vietnam là một nền tảng tài chính số toàn diện, hỗ trợ khách hàng vay tiền thuận tiện và an toàn, tối ưu hóa để giảm bớt thủ tục nhằm tiết kiệm thời gian. Theo đó, chỉ với căn cước công dân hợp lệ, khách hàng có thể đăng ký các dịch vụ tài chính trên ứng dụng để vay tối đa 40 triệu đồng với lãi suất 40%/năm. <br><br>' +
            'Ông Đan Nguyễn, Giám Đốc Phát triển Sản phẩm Khách hàng cá nhân CUB HCM cho biết, thay vì cung cấp khoản vay cho mỗi lần đăng ký và phải thực hiện lại quy trình đăng ký nếu muốn vay lần thứ hai, ứng dụng CUB Vietnam sẽ cấp cho khách hàng hạn mức tín dụng lên tới 5 năm. <br><br>' +
            'Trong thời gian này, khách hàng có thể đề nghị rút vốn vay và được giải ngân nhiều lần trong phạm hạn mức tín dụng đã được cấp mà không cần thực hiện lại thủ tục cho vay. <br><br>',
        },
        {
          img: 'assets/image/events/Event2/2_2.jpg',
          imgDesc:
            'Chỉ với căn cước công dân hợp lệ, khách hàng có thể đăng ký các dịch vụ tài chính trên ứng dụng',
          content:
            'Đồng thời, để tránh rủi ro và tránh gây phiền toái cho khách hàng trong việc thu hồi nợ, CUB Vietnam có một cơ sở dữ liệu đầu vào đầy đủ và hiện đại nên sẽ lựa chọn khách hàng tốt để cho vay và tin tưởng không có chuyện khách hàng “xù nợ”.<br><br>' +
            'Tại buổi ra mắt ông Benny Miao, Phó Tổng Giám đốc phụ trách khu vực Đông Nam Á của Ngân hàng Cathay United Bank, cho biết sản phẩm này đánh dấu sự chuyển đổi mạnh mẽ của CUB tại thị trường Việt Nam, mở rộng phạm vi dịch vụ sang lĩnh vực tài chính tiêu dùng.<br><br>' +
            'Ngoài ra CUB là đơn vị luôn ưu tiên hỗ trợ tín dụng cho các doanh nghiệp chuyển đổi xanh theo hướng thân thiện với môi trường Zero carbon.<br><br>',
        },
      ],
      date: '28/03/2024',
      imgL: 'assets/image/events/Event2/2_1_L.png',
      imgM: 'assets/image/events/Event2/2_1_M.png',
      imgPostion: true,
    },
    {
      name: '2',
      title:
        'CUB định hướng trở thành ngân hàng chuẩn mực tài chính tiêu dùng kỹ thuật số',
      content:
        'Ngân hàng Cathay United Bank công bố ứng dụng cho vay tiêu dùng trên di động theo mục tiêu hướng đến khách hàng cá nhân.',
      subContents: [
        {
          content:
            'Ngày 28.3, Ngân hàng Cathay United Bank - Chi nhánh TP.HCM (CUBHCM) ra mắt ứng dụng di động CUB Vietnam để cung cấp sản phẩm vay tiêu dùng trực tuyến đến thị trường Việt Nam. Đây là sản phẩm mới hướng đến khách hàng cá nhân của ngân hàng thay vì chủ yếu tập trung vào kinh doanh tài chính doanh nghiệp tại Việt Nam trước đây.<br><br>',
        },
        {
          img: 'assets/image/events/Event3/3_2.jpg',
          imgDesc:
            'Trải nghiệm sản phẩm cho vay tiêu dùng trực tuyến trên ứng dụng di động CUB Vietnam',
          content:
            'Việc ra mắt ứng dụng nằm trong chiến lược tái định vị thương hiệu của ngân hàng trong năm 2024, đồng thời là lời cam kết về sự đổi mới và nâng cao trải nghiệm khách hàng trên ứng dụng CUB Vietnam. Theo ông Benny Miao, Phó tổng giám đốc phụ trách khu vực Đông Nam Á của Cathay United Bank, ứng dụng mới ra mắt của ngân hàng đánh dấu sự chuyển đổi mạnh mẽ tại thị trường Việt Nam, mở rộng phạm vi dịch vụ sang lĩnh vực tài chính tiêu dùng. Ông Benny cho biết: “CUB cam kết tiếp tục nỗ lực không ngừng nâng cao sản phẩm và dịch vụ của mình, đồng thời mang lại lợi ích tối đa cho khách hàng và trở thành chuẩn mực về tài chính tiêu dùng kỹ thuật số trong số các ngân hàng Đài Loan ở Đông Nam Á”.<br><br>' +
            'Theo đó, chỉ với căn cước công dân hợp lệ, khách hàng có thể hoàn tất quy trình đăng ký các dịch vụ tài chính trên ứng dụng. Điều này giúp khách hàng tiết kiệm thời gian và nâng cao trải nghiệm dịch vụ tiện lợi.<br><br>' +
            'Đáng chú ý, thay vì cung cấp khoản vay từng lần cho mỗi lần đăng ký và khách hàng phải thực hiện lại quy trình đăng ký nếu muốn vay lần thứ 2 như nhiều ứng dụng khác, sản phẩm cho vay tiêu dùng trực tuyến CUB Vietnam sẽ cấp cho khách hàng hạn mức tín dụng với thời hạn lên tới đến 5 năm. Trong thời gian này, khách hàng có thể đề nghị rút vốn vay và được giải ngân nhiều lần (trong phạm hạn mức tín dụng đã được cấp) mà không cần thực hiện lại toàn bộ thủ tục cho vay.<br><br>' +
            'Ông Joe Liang, Phó tổng giám đốc của Ngân hàng Cathay United Bank nhấn mạnh: Việc ra mắt ứng dụng CUB Vietnam và sản phẩm vay tiêu dùng trực tuyến là cột mốc quan trọng đầu tiên của chúng tôi trong năm 2024. Ngân hàng Cathay United Bank cam kết duy trì sự hiện diện lâu dài tại thị trường Việt Nam và sẽ tiếp tục cải tiến sản phẩm của mình dựa trên nhu cầu và thị hiếu của khách hàng.',
        },
      ],
      date: '28/03/2024',
      imgL: 'assets/image/events/Event3/3_1_L.png',
      imgM: 'assets/image/events/Event3/3_1_M.png',
      imgPostion: true,
    },
    {
      name: '3',
      title:
        'Ngân hàng Cathay United Bank hướng đến tài chính tiêu dùng tại Việt Nam',
      content:
        'Sau 18 năm hoạt động tại Việt Nam, mới đây Ngân hàng Cathay United Bank một tổ chức tài chính tập trung vào công nghệ, dữ liệu và số hóa từ Đài Loan, đã tổ chức sự kiện định vị lại hoạt động kinh doanh mang tính chiến lược, mở rộng quy mô tài chính sang tài chính tiêu dùng thị trường Việt Nam.',
      subContents: [
        {
          img: 'assets/image/events/Event4/4_2.jpg',
          imgDesc:
            'Đại diện CUB chia sẻ về hướng đi và chiến lược của ngân hàng tại thị trường Việt Nam',
          content:
            'Ngân hàng Cathay United Bank (CUB) luôn không ngừng mở rộng thị trường tại Châu Á - Thái Bình Dương, trong đó, từ năm 2005 CUB luôn xem Việt Nam Việt Nam là thị trường tiềm năng bởi không chỉ có hơn 100 triệu dân mà Việt Nam đang là một nước có nền kinh tế phát triển vượt bậc trong khu vực Đông Nam Á và châu Á. ',
        },
        {
          content:
            'Ông Benny Miao, Phó Tổng giám đốc phụ trách khu vực Đông Nam Á của CUB chia sẻ, hiện CUB đã có mặt tại 11 quốc gia và khu vực. Đặc biệt, Việt Nam là một trong những thị trường được CUB ưu tiên phát triển hàng đầu ở khu vực Đông Nam Á. Theo đó, Việt Nam có lợi thế là thị trường có dân số trẻ, hơn 100 triệu người, độ tuổi trung bình 30 và ngày càng quen thuộc với việc sử dụng các công cụ thanh toán số. <br><br>' +
            'Ông Benny nhấn mạnh rằng không giống như các ngân hàng Đài Loan khác ở Đông Nam Á, Ngân hàng CUB lựa chọn lối đi riêng ngay từ đầu trong định hướng phát triển của mình. CUB đã, đang và sẽ tập trung xây dựng nền tảng và hệ thống tài chính tiêu dùng kỹ thuật số, và với cam kết không ngừng cải tiến, sáng tạo, đặt mục tiêu ra mắt nhiều sản phẩm và dịch vụ kỹ thuật số tại Việt Nam trong thời gian tới, trở thành chuẩn mực về tài chính tiêu dùng kỹ thuật số trong số các ngân hàng Đài Loan ở Đông Nam Á.<br><br>' +
            'Trong 3 năm vừa qua, lợi nhuận ròng của CUB tại Việt Nam tăng trưởng ổn định, song hành cùng tăng trưởng GDP của Việt Nam. CUB có nhiều kinh nghiệm trong việc khởi tạo và thực hiện nhiều khoản vay hợp vốn quốc tế. Trong 5 năm qua, CUB đã thành công trong việc thu xếp, đồng thu xếp hơn 50 khoản vay hợp vốn trong nhiều lĩnh vực ở khắp các quốc gia. Bên cạnh việc phục vụ khách hàng doanh nghiệp, trong 3 năm tiếp theo, CUB sẽ mở rộng việc phát triển kinh doanh ở lĩnh vực tài chính tiêu dùng kỹ thuật số. Cùng với những thành tựu đã đạt được tại Việt Nam, CUB tin rằng việc thực hiện chiến lược định vị thương hiệu này là một bước đi đúng đắn.<br><br>' +
            'Đánh dấu 18 năm hoạt động tại Việt Nam, ngoài cung cấp dịch vụ tài chính cho khách hàng doanh nghiệp Việt Nam và doanh nghiệp có vốn đầu tư Đài Loan, bao gồm tài trợ thương mại, quản lý tiền mặt, thanh toán xuyên biên giới, v.v., thì hiện nay Ngân hàng CUB đã mở rộng dịch vụ cung cấp giải pháp tài chính cho khách hàng cá nhân tại Việt Nam. <br><br>' +
            'Sự phát triển,mở rộng này đánh dấu một bước chuyển mình quan trọng của CUB, cung cấp các hoạt động ngân hàng toàn diện và đa dạng giải pháp tài chính được thiết kế dành cho mọi đối tượng khách hàng. <br><br>' +
            'Ông Lu Wei Chieh, Tổng Giám đốc Chi nhánh CUB TPHCM cũng cho biết, không chỉ cung cấp các dịch vụ tài chính, CUB còn cam kết tăng cường tham gia vào phát triển cộng đồng địa phương thông qua một loạt sáng kiến, đặc biệt tập trung vào hỗ trợ giáo dục cho học sinh góp phần tăng thêm cơ hội phát triển của của thế hệ tương lai. Cùng với những thành tựu và đầu tư của tập đoàn vào thị trường Việt Nam trong những năm vừa qua, CUB vững tin, nỗ lực không ngừng để hiện thực hóa chiến lược định vị lại thương hiệu.<br><br>' +
            '“Trong một thị trường đầy tiềm năng với hơn 100 triệu dân cùng tốc độ phát triển mạng Internet nhanh chóng, CUB đặt mục tiêu định vị mình là một ngân hàng công nghệ số đa năng, chuyên cung cấp các sản phẩm và trải nghiệm tối ưu cho người dùng tại Việt Nam” - Ông Lu Wei Chieh chia sẻ.<br><br>' +
            'Bằng cam kết mang lại trải nghiệm ưu việt cho người dùng và sự tận tâm trong việc xây dựng nên một ngân hàng có nền móng vững chắc về công nghệ, CUB sẽ sớm giới thiệu các sản phẩm kỹ thuật số đến khách hàng cá nhân vào năm 2024. Với hoạt động này, CUB mong muốn có thể trao quyền đến khách hàng để họ có thể khám phá các tiềm năng và chinh phục hành trình tài chính một cách suôn sẻ nhất.<br><br>',
        },
      ],
      date: '05/01/2024',
      imgL: 'assets/image/events/Event4/4_1_L.png',
      imgM: 'assets/image/events/Event4/4_1_M.png',
      imgPostion: false,
    },
    {
      name: '4',
      title: 'Các trụ cột trong chiến lược tái định vị của Cathay United Bank',
      content:
        'CUB công bố mở rộng quy mô thêm mảng tài chính tiêu dùng, coi Việt Nam là ngôi nhà thứ hai khi thị trường này có vị thế ngày càng cao trên chuỗi cung ứng toàn cầu.',
      subContents: [
        {
          content:
            'Thông tin trên được chia sẻ bởi ông Benny Miao - Phó tổng giám đốc Cathay United Bank (CUB) phụ trách khu vực Đông Nam Á tại sự kiện công bố chiến lược và định vị thương hiệu vào ngày 4/1 vừa qua.',
        },
        {
          img: 'assets/image/events/Event5/5_2.jpg',
          imgDesc:
            'Ông Benny Miao nêu các chiến lược tái định vị thương hiệu của CUB. Ảnh: CUB',
          content:
            'Chiến lược tái định vị của CUB tại Việt Nam xoay quanh ba trụ cột: cơ sở hạ tầng kỹ thuật số, dịch vụ kỹ thuật số và phát triển - duy trì nhân tài. Ở nhóm đầu tiên, ngân hàng hướng đến cải thiện, ổn định cơ sở hạ tầng dữ liệu nước ngoài cũng như tính ổn định của hệ thống kỹ thuật số. Với trụ cột thứ hai, CUB thiết lập mối quan hệ đối tác lâu dài và ổn định thông qua dịch vụ kỹ thuật số, cung cấp chất lượng dịch vụ tốt hơn cho người dùng. Cuối cùng, nhân sự luôn là yếu tố then chốt trong quá trình hoạt động của CUB ở mọi thị trường. Ngân hàng đặc biệt chú trọng vào việc tìm kiếm, đào tạo và phát triển nhân tài địa phương.<br><br>' +
            'Bước đi đầu tiên trong chiến lược này, CUB mở rộng dịch vụ cung cấp giải pháp tài chính cho khách hàng cá nhân, sau 18 năm hoạt động tại Việt Nam. Trước đó, đơn vị hoạt động trong nhiều lĩnh vực như tài trợ thương mại, quản lý tiền mặt, thanh toán xuyên biên giới... Việc mở rộng quy mô đánh dấu bước chuyển mình của đơn vị, hướng tới mục tiêu cung cấp hoạt động ngân hàng toàn diện và đa dạng giải pháp tài chính cho nhiều phân khúc. Lĩnh vực cốt lõi của ngân hàng vẫn xoay quanh tài chính doanh nghiệp, tức cấp vốn cho các nhà đầu tư Đài Loan và hỗ trợ khách hàng địa phương tham gia tài chính quốc tế.<br><br>' +
            'Bên cạnh dịch vụ tài chính, CUB cam kết tăng cường tham gia vào phát triển cộng đồng địa phương thông qua loạt sáng kiến, đặc biệt tập trung vào hỗ trợ giáo dục cho học sinh, thế hệ tương lai. Ngân hàng cũng giới thiệu không gian văn phòng mới tại TP HCM với thiết kế mở, đội ngũ nhân sự hơn 120 người trên toàn quốc.<br><br>',
        },
        {
          img: 'assets/image/events/Event5/5_3.jpg',
          imgDesc: 'Mô hình văn phòng không vách ngăn. Ảnh: CUB',
          content:
            'Lãnh đạo CUB tự tin với chiến lược tái định vị khi có nền tảng và hệ thống tài chính tiêu dùng kỹ thuật số xây dựng suốt 50 năm tại 233 chi nhánh, văn phòng toàn cầu. Đây là hệ thống và nền tảng phức hợp, cần kết nối các mô hình cho vay, dịch vụ khách hàng cũng như thu hồi nợ. Ngoài việc quản lý rủi ro hiệu quả, mô hình này còn phải có tính linh hoạt cao.<br><br>' +
            'Ngân hàng còn có sự thấu hiểu với từng thị trường. Đơn vị đi theo xu hướng dịch chuyển chuỗi cung ứng, xây dựng và củng cố đội ngũ dịch vụ xuyên biên giới phù hợp với đa nhu cầu. Ngoài ra, để có được khách hàng thông qua kênh kỹ thuật số, tập đoàn đã thành lập Trung tâm Phát triển Cathay (CDC), hỗ trợ các chi nhánh và công ty con của Cathay tại Đông Nam Á. Nói về chiến lược thời gian tới, CUB sẽ giới thiệu các dịch vụ kỹ thuật số nhằm tăng tiện ích cho người dùng.<br><br>',
        },
        {
          img: 'assets/image/events/Event5/5_4.jpg',
          imgDesc:
            'Ông Lu Wei Chieh chia sẻ về tiềm năng của thị trường Việt Nam. Ảnh: CUB',
          content:
            'Trong một thị trường có tiềm năng lớn và dân số sắp vượt quá 100 triệu người với sự thâm nhập mạnh mẽ của Internet, CUB đặt mục tiêu trở thành ngân hàng công nghệ kỹ thuật số linh hoạt, tạo trải nghiệm mới cho người dùng cuối. Lợi thế cạnh tranh của đơn vị nằm ở tài chính tiêu dùng kỹ thuật số - nền tảng xây dựng và phát huy hiệu quả trong nhiều thập kỷ qua.<br><br>' +
            '"Việt Nam như ngôi nhà thứ hai đối với tập đoàn Cathay Financial Holdings. Chúng tôi nỗ lực cung cấp các sản phẩm và dịch vụ đa dạng, toàn diện như một ngân hàng đa năng", ông Lu Wei Chieh nhấn mạnh.<br><br>',
        },
        {
          img: 'assets/image/events/Event5/5_5.jpg',
          imgDesc: 'Bà Lana Shih khái quát bức tranh hoạt động của tập đoàn.',
          content:
            'Để tăng cường cam kết với cộng đồng Việt Nam, CUB đã triển khai chương trình "Kế hoạch ươm mầm đại thụ Việt Nam" (The Elevated Tree) cùng với các doanh nghiệp Đài Loan để hỗ trợ và chăm sóc cho những học sinh Việt Nam có hoàn cảnh khó khăn. Đơn vị cũng đang hỗ trợ các sinh viên theo học thạc sĩ tại Đài Loan với các khoản học bổng, hỗ trợ chỗ thực tập. Sau khi tốt nghiệp và trở về Việt Nam, sinh viên có thể làm việc tại CUB, thúc đẩy kinh tế địa phương.<br><br>' +
            'Ở một khía cạnh khác, bà Lana Shih - Phó tổng giám đốc phụ trách Truyền thông tiếp thị chiến lược cho biết CUB đón đầu xu hướng phát triển bền vững. Đơn vị áp dụng ESG vào hoạt động, đầu tư và cho vay có trách nhiệm. Ngân hàng cũng tích cực tham gia vào các sáng kiến quốc tế để đồng bộ với xu hướng bền vững.<br><br>',
        },
      ],
      date: '05/01/2024',
      imgL: 'assets/image/events/Event5/5_1_L.png',
      imgM: 'assets/image/events/Event5/5_1_M.png',
      imgPostion: false,
    },
    {
      name: '5',
      title: 'Cathay United Bank mở rộng quy mô tại thị trường Việt Nam',
      content:
        'Ngân hàng Cathay United Bank (CUB) vừa thông báo sẽ định vị lại hoạt động kinh doanh mang tính chiến lược, mở rộng quy mô tài chính sang tài chính tiêu dùng, đánh dấu một bước chuyển mình quan trọng sau 18 năm hoạt động tại thị trường Việt Nam.',
      subContents: [
        {
          content:
            'Ngân hàng Cathay United Bank (CUB) luôn không ngừng mở rộng thị trường tại châu Á - Thái Bình Dương, trong đó, CUB tham gia thị trường Việt Nam từ năm 2005. Hiện CUB đã có mặt tại 11 quốc gia và khu vực. Đặc biệt, Việt Nam là một trong những thị trường được CUB ưu tiên phát triển hàng đầu ở khu vực Đông Nam Á.<br><br>' +
            '“Việt Nam có lợi thế là thị trường có dân số trẻ, hơn 100 triệu người, độ tuổi trung bình 30 và ngày càng quen thuộc với việc sử dụng các công cụ thanh toán số”, ông Benny Miao, Phó tổng giám đốc phụ trách khu vực Đông Nam Á của CUB chia sẻ.<br><br>' +
            'Ông Benny nhấn mạnh, CUB đã, đang và sẽ tập trung xây dựng nền tảng và hệ thống tài chính tiêu dùng kỹ thuật số, và với cam kết không ngừng cải tiến, sáng tạo, đặt mục tiêu ra mắt nhiều sản phẩm và dịch vụ kỹ thuật số tại Việt Nam trong thời gian tới, trở thành chuẩn mực về tài chính tiêu dùng kỹ thuật số trong số các ngân hàng Đài Loan ở Đông Nam Á.<br><br>' +
            'Ông Lu Wei Chieh, Tổng giám đốc Chi nhánh CUB TP.HCM chia sẻ, trong 3 năm vừa qua, lợi nhuận ròng của CUB tại Việt Nam tăng trưởng ổn định, song hành cùng tăng trưởng GDP của Việt Nam. Trong 5 năm qua, CUB đã thành công trong việc thu xếp, đồng thu xếp hơn 50 khoản vay hợp vốn trong nhiều lĩnh vực ở khắp các quốc gia. Bên cạnh việc phục vụ khách hàng doanh nghiệp, trong 3 năm tiếp theo, CUB sẽ mở rộng việc phát triển kinh doanh ở lĩnh vực tài chính tiêu dùng kỹ thuật số. Cùng với những thành tựu đã đạt được tại Việt Nam, CUB tin rằng việc thực hiện chiến lược định vị thương hiệu này là một bước đi đúng đắn.<br><br>' +
            'Được biết, ngoài cung cấp dịch vụ tài chính cho khách hàng doanh nghiệp Việt Nam và doanh nghiệp có vốn đầu tư Đài Loan, bao gồm tài trợ thương mại, quản lý tiền mặt, thanh toán xuyên biên giới… thì hiện nay Ngân hàng CUB đã mở rộng dịch vụ cung cấp giải pháp tài chính cho khách hàng cá nhân tại Việt Nam.<br><br>',
        },
      ],
      date: '08/01/2024',
      imgL: 'assets/image/events/Event6/6_1_L.png',
      imgM: 'assets/image/events/Event6/6_1_M.png',
      imgPostion: false,
    },
    {
      name: '6',
      title: 'Ngân hàng Cathay United Bank – Chi nhánh TP. Hồ Chí Minh hợp tác với Thế Giới Di Động để triển khai ứng dụng CUB Vietnam',
      content:
        'Ứng dụng CUB Vietnam được triển khai tại Thế Giới Di Động từ ngày 14/10/2024, hỗ trợ khách hàng đơn giản hóa quy trình vay, giải ngân 24/7, thuận tiện khi mua sắm.',
      subContents: [
        {
          content:
            'Lễ ký kết hợp tác được diễn ra vào ngày 14/10/2024 tại trụ sở của Ngân hàng Cathay United Bank – Chi nhánh TP. Hồ Chí Minh (“CUBHCM”). Thông qua việc triển khai cho vay tài chính trên ứng dụng CUB Vietnam, hai đơn vị cùng nhau thúc đẩy hoạt động kinh doanh, khai thác tối đa các thế mạnh, tiềm năng của mỗi bên.<br><br>'+
            'CUB Vietnam là nền tảng tài chính số, ra mắt tại Việt Nam vào tháng 3/2024. Thông qua ứng dụng, mọi giao dịch tài chính đều có thể được thực hiện 100% trực tuyến. Nhờ đó, người dùng được trải nghiệm giải pháp tài chính cá nhân an toàn, tinh gọn quy trình, giảm thời gian thực hiện thủ tục vay tiêu dùng, thuận tiện theo dõi khoản vay.<br><br>' +
            'Về phía Thế Giới Di Động, việc hợp tác với CUBHCM giúp giới thiệu thêm 01 sản phẩm tài chính và góp phần nâng cao trải nghiệm mua sắm của khách hàng. Theo hãng bán lẻ, việc tích hợp ứng dụng CUB Vietnam vào hệ sinh thái thanh toán của đơn vị này sẽ giúp khách hàng dễ tiếp cận với dịch vụ tài chính linh hoạt, đặc biệt là khi mua sắm các sản phẩm công nghệ và điện tử.<br><br>' +
            '“Chúng tôi đánh giá cao sự an toàn, tiện lợi của ứng dụng CUB Vietnam và rất tin tưởng sản phẩm sẽ được đón nhận rộng rãi”, ông Trương Hồng Hoàng, Giám đốc phát triển kinh doanh ngành hàng dịch vụ của Thế Giới Di Động chia sẻ.<br><br>',
        },
        {
          img: 'assets/image/events/Event7/7_1.png',
          imgDesc:
            'Đại diện CUBHCM (trái) và Thế Giới Di Động trao thoả thuận hợp tác. Ảnh: CUB',
          content:
            'Ông Lu Wei Chieh, Tổng Giám đốc Ngân hàng Cathay United Bank – Chi nhánh TP. Hồ Chí Minh cho biết: “Với những thành tựu đã đạt được tại Việt Nam tính đến thời điểm hiện tại, CUBHCM tin rằng việc hợp tác cùng một đối tác lớn như Thế Giới Di Động là một bước đi mang tính chiến lược. Trong 03 năm tiếp theo, CUBHCM sẽ mở rộng hơn nữa việc phát triển kinh doanh ở lĩnh vực tài chính tiêu dùng kỹ thuật số”.<br><br>' +
            'Ông Nguyễn Võ Hoàng Đan, Giám đốc phát triển sản phẩm khách hàng cá nhân CUBHCM chia sẻ thêm, sự kiện này là cột mốc quan trọng cho giai đoạn phát triển kinh doanh tiếp theo và ở tầm cao hơn của CUBHCM. Theo đó, trong năm 2025, CUBHCM sẽ tiếp tục đa dạng hóa danh mục sản phẩm và tung ra thị trường các loại sản phẩm mới, nhắm đến các phân khúc khách hàng khác nhau. <br><br>'
        },
        {
          img: 'assets/image/events/Event7/7_2.png',
          imgDesc:
            'Đại diện hai bên tại sự kiện. Ảnh: CUB',
          content:
            'Mới đây, với ứng dụng CUB Vietnam, Ngân hàng Cathay United Bank – Chi nhánh TP. Hồ Chí Minh vừa được vinh danh tại Lễ trao Giải thưởng Chuyển đổi số Việt Nam (Vietnam Digital Awards) năm 2024 ở hạng mục “Doanh nghiệp, đơn vị sự nghiệp chuyển đổi số xuất sắc”. Đây là giải thưởng thường niên, được Bộ Thông tin và Truyền thông bảo trợ, nhằm tôn vinh những thành tựu chuyển đổi số xuất sắc, góp phần thúc đẩy công cuộc chuyển đổi số quốc gia.<br><br>' +
            'Ngân hàng Cathay United Bank thành lập vào năm 1975 tại Đài Loan, mở chi nhánh đầu tiên tại Việt Nam từ năm 2005, cung cấp đa dạng dịch vụ tài chính doanh nghiệp. Tháng 3 năm nay, đơn vị mở rộng sang phân khúc tiêu dùng cá nhân. CUB có 232 chi nhánh và văn phòng tại nhiều quốc gia và vùng lãnh thổ như Trung Quốc, Việt Nam, Hong Kong, Thái Lan, Singapore, Malaysia, Philippines, Lào, Campuchia, Myanmar, Indonesia,… <br><br>' +
            'Thế Giới Di Động vận hành các chuỗi bán lẻ thegioididong.com, Điện máy xanh, TopZone, An Khang, Avakids và chuỗi Erablue tại Indonesia. Qua 20 năm phát triển, đơn vị có hơn 3.000 cửa hàng trải khắp cả nước.'
        },

      ],
      date: '14/10/2024',
      imgL: 'assets/image/events/Event7/7_1_L.png',
      imgM: 'assets/image/events/Event7/7_1_M.png',
      imgPostion: false,
    },
  ];
  currentContent!: Content;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.name = this.route.snapshot.paramMap.get('name');
    this.currentContent = this.contents.find(
      (item) => item.name === this.name
    ) || {
      name: '',
      title: '',
      content: '',
      subContents: [],
      date: '',
      imgL: '',
      imgM: '',
      imgPostion: false,
    };
    this.innerWidth = window.innerWidth;
    this.isMobile = window.innerWidth < 768;
    this.windowResize$.pipe(debounceTime(100)).subscribe((width) => {
      this.innerWidth = width;
      this.isMobile = this.innerWidth < 768;
    });
    this.cdr.detectChanges();
  }

  formatDate(input: string = '', isDay = false) {
    const months = [
      'JAN',
      'FEB',
      'MAR',
      'APR',
      'MAY',
      'JUN',
      'JUL',
      'AUG',
      'SEP',
      'OCT',
      'NOV',
      'DEC',
    ];
    const [day, month, year] = input.split('/');
    return !isDay ? months[parseInt(month, 10) - 1] : day;
  }

  goBack(): void {
    this.location.back();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.windowResize$.next((event.target as Window)?.innerWidth);
  }
}
