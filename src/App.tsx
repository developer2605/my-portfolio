import React from 'react';
import Hero3D from './components/Hero3D';
import FadeInScroll from './components/FadeInScroll';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0b0f19] text-white font-sans">

      {/* 1. THANH ĐIỀU HƯỚNG (NAVBAR) */}
      <nav className="flex justify-between items-center p-6 border-b border-gray-800">
        <div className="font-bold text-xl">
          HUNG.NV - <span className="font-normal text-gray-300">Digital Marketing Professional</span>
        </div>
        <div className="hidden md:flex space-x-8 text-sm font-medium">
          <a href="#about" className="hover:text-teal-400 transition-colors">Giới thiệu</a>
          <a href="#metrics" className="hover:text-teal-400 transition-colors">Chỉ số</a>
          <a href="#projects" className="hover:text-teal-400 transition-colors">Thực chiến</a>
          <a href="#skills" className="hover:text-teal-400 transition-colors">Kỹ năng</a>
        </div>
      </nav>

      {/* 2. HERO SECTION - BỐ CỤC 2 CỘT */}
      <main className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

          {/* ===== CỘT TRÁI: PROFILE CARD (Chiếm 4/12 phần màn hình) ===== */}
          <div className="col-span-1 lg:col-span-4 flex flex-col space-y-6">

            {/* Box 1: Ảnh Avatar */}
            <div className="w-full aspect-[3/4] bg-gray-800/50 rounded-2xl border-2 border-gray-700 overflow-hidden relative group">
              <img src="https://scontent.fhan19-1.fna.fbcdn.net/v/t39.30808-6/706028797_2223423981730674_4358569662801647110_n.jpg?stp=dst-jpg_tt6&cstp=mx1086x1086&ctp=s1086x1086&_nc_cat=102&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeF5u1XMDysYrUwD5sUH53SwaSkgGao5z-9pKSAZqjnP7wc1lWASN6LHxcSrxRijZ2npXkboZP3iRFHFRWf3fDqQ&_nc_ohc=XzgavMbFXVIQ7kNvwGGb1kv&_nc_oc=AdpO8G0qUIc3cAbS0YhNaenPkDP6zjA36kqB-gA1pbwvOd3L97ZUoF6Tv1TElTciAEw&_nc_zt=23&_nc_ht=scontent.fhan19-1.fna&_nc_gid=_ccord4mq2DZo6aibrvMyg&_nc_ss=7b2a8&oh=00_Af-3Bxo2TTH3rr5PPe9pdzyiQzR018UKEJgjubzM_tTAPA&oe=6A2DA15F" alt="Nguyễn Văn Hùng" className="w-full h-full object-cover" />
              <div className="absolute inset-0 flex items-center justify-center text-gray-500 font-bold text-2xl">
              </div>
            </div>

            {/* Box 2: Chức danh công việc */}
            <div className="bg-gray-800/40 p-4 rounded-xl border border-gray-700 text-center shadow-lg">
              <h2 className="text-xl font-bold text-teal-400">Professional Marketing</h2>
              <p className="text-sm text-gray-400 mt-1">Facebook & TikTok Ads</p>
            </div>

            {/* Box 3: Thông tin cá nhân & Nút tải CV */}
            <div className="bg-gray-800/40 p-6 rounded-xl border border-gray-700 shadow-lg flex flex-col space-y-5">
              <ul className="space-y-4 text-sm">
                
                {/* Họ và tên */}
                <li className="flex items-center gap-3 border-b border-gray-700/50 pb-3">
                  <span className="text-xl">👤</span>
                  <div className="flex-1 flex justify-between items-center">
                    <span className="text-gray-400">Họ và tên:</span>
                    <span className="font-semibold text-white">Nguyễn Văn Hùng</span>
                  </div>
                </li>

                {/* Năm sinh */}
                <li className="flex items-center gap-3 border-b border-gray-700/50 pb-3">
                  <span className="text-xl">📅</span>
                  <div className="flex-1 flex justify-between items-center">
                    <span className="text-gray-400">Năm sinh:</span>
                    <span className="font-semibold text-white">2000 (25 Tuổi)</span>
                  </div>
                </li>

                {/* Học vấn / Chứng chỉ */}
                <li className="flex items-start gap-3 border-b border-gray-700/50 pb-3">
                  <span className="text-xl mt-0.5">🎓</span>
                  <div className="flex-1 flex justify-between items-start">
                    <span className="text-gray-400">Chứng chỉ:</span>
                    <span className="font-semibold text-white text-right">
                      Cử nhân ứng dụng phần mềm - (FPoly)<br/>
                      Google AI Essentials<br/>
                      Foundations of Digital Marketing and E-commerce<br/>
                      Foundations: Data, Data, Everywhere
                    </span>
                  </div>
                </li>

                {/* Kinh nghiệm / Thế mạnh */}
                <li className="flex items-start gap-3 border-b border-gray-700/50 pb-3">
                  <span className="text-xl mt-0.5">💼</span>
                  <div className="flex-1 flex justify-between items-start">
                    <span className="text-gray-400">Kinh nghiệm:</span>
                    <span className="font-semibold text-white text-right">
                      4+ năm Performance Ads<br />
                      Tracking & Automation
                    </span>
                  </div>
                </li>

              </ul>

              <a
                href="/CV_NguyenVanHung.pdf"
                download
                className="w-full bg-teal-500 hover:bg-teal-400 text-gray-900 font-bold py-3 px-4 rounded-lg transition-all duration-300 text-center mt-2 shadow-[0_0_15px_rgba(20,184,166,0.3)] hover:shadow-[0_0_25px_rgba(20,184,166,0.5)] flex items-center justify-center gap-2"
              >
                <span>📥</span> TẢI CV CỦA TÔI
              </a>
            </div>

          </div> {/* <-- ĐÂY LÀ THẺ ĐÓNG CỘT TRÁI ĐÃ BỊ THIẾU Ở CODE CỦA BẠN */}

          {/* ===== CỘT PHẢI: 3D & THÔNG ĐIỆP CHÍNH (Chiếm 8/12 phần màn hình) ===== */}
          <div className="col-span-1 lg:col-span-8 flex flex-col items-center justify-center text-center lg:pl-10">

            {/* Box chứa hiệu ứng 3D */}
            <div className="w-full h-[400px] md:h-[600px] relative flex justify-center items-center">
              {/* Vầng sáng nền cũng được làm to ra để bao phủ tốt hơn */}
              <div className="absolute w-[400px] h-[400px] bg-teal-500/15 rounded-full blur-[120px]"></div>
              
              <div className="z-10 w-full h-full">
                <Hero3D />
              </div>
            </div>

            {/* Nội dung Text đã được bổ sung lại */}
            <div className="mt-2 md:mt-8 z-10">
                <h3 className="text-teal-400 font-bold tracking-[0.2em] uppercase text-sm md:text-base mb-3">
                  Data-Driven Performance Marketer
                </h3>
                
                <h1 className="text-5xl md:text-[5.5rem] font-black text-teal-400 mb-6 drop-shadow-lg tracking-tight">
                  Nguyễn Văn Hùng
                </h1>
                
                <p className="text-gray-300 max-w-2xl mx-auto leading-relaxed text-base md:text-lg">
                  Tôi không chỉ chạy Ads, tôi mua Data và tối ưu hóa lợi nhuận. Kết hợp tư duy hệ thống 
                  từ kỹ năng Automation và năng lực phân tích dữ liệu chuyên sâu để scale ngân sách lớn 
                  với tỷ lệ chuyển đổi cao nhất.
                </p>
             </div>

          </div> {/* Đóng Cột Phải */}
        </div> {/* Đóng thẻ Grid */}
      </main>

      {/* --- KEY METRICS BANNER (MỚI) --- */}
      <section id="metrics" className="py-12 bg-gray-900 border-t border-b border-gray-800 relative z-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-gray-800">
            <div className="text-center px-4">
              <div className="text-4xl font-bold text-white mb-2">40+ <span className="text-emerald-500 text-2xl">Tỷ VNĐ</span></div>
              <div className="text-gray-400 text-sm uppercase tracking-wider">Ngân sách đã quản lý</div>
            </div>
            <div className="text-center px-4">
              <div className="text-4xl font-bold text-white mb-2">25<span className="text-emerald-500">%</span></div>
              <div className="text-gray-400 text-sm uppercase tracking-wider">Giảm CPA Trung bình</div>
            </div>
            <div className="text-center px-4">
              <div className="text-4xl font-bold text-white mb-2">5+</div>
              <div className="text-gray-400 text-sm uppercase tracking-wider">Luồng Automation Tự động</div>
            </div>
            <div className="text-center px-4">
              <div className="text-4xl font-bold text-white mb-2">5</div>
              <div className="text-gray-400 text-sm uppercase tracking-wider">Ngành hàng Thực chiến</div>
            </div>
          </div>
        </div>
      </section>

      {/* --- EXPERIENCE TIMELINE (NÂNG CẤP CON SỐ) --- */}
      {/* --- CASE STUDIES SECTION --- */}
      <section id="projects" className="py-24 bg-[#0b0f19] relative border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Dự Án & Case Studies</h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Những chiến dịch và hệ thống tiêu biểu chứng minh năng lực kết hợp giữa 
              Performance Marketing và Data Automation.
            </p>
          </div>

          {/* Lưới 3 cột */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Case 1: Performance Ads */}
            <div className="bg-gray-800/40 rounded-2xl border border-gray-700 overflow-hidden hover:border-teal-500 transition-all duration-300 group hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(20,184,166,0.15)] flex flex-col">
              <div className="h-48 bg-gradient-to-br from-gray-900 to-gray-800 relative overflow-hidden flex items-center justify-center border-b border-gray-700">
                <span className="text-6xl group-hover:scale-110 transition-transform duration-300 drop-shadow-lg">📈</span>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex gap-2 mb-4">
                  <span className="text-xs font-semibold bg-blue-500/20 text-blue-400 px-2.5 py-1 rounded-md">Facebook Ads</span>
                  <span className="text-xs font-semibold bg-pink-500/20 text-pink-400 px-2.5 py-1 rounded-md">TikTok Ads</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Tối ưu Phễu Chuyển đổi Y Tế</h3>
                <p className="text-gray-400 text-sm mb-6 flex-grow leading-relaxed">
                  Quản lý ngân sách 1.2 tỷ VNĐ/tháng. Tái cấu trúc tệp đối tượng, A/B testing nội dung video ngắn cường độ cao, và thiết lập lại hệ thống retargeting bám đuổi đa kênh.
                </p>
                <div className="border-t border-gray-700/50 pt-4">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-500">Kết quả:</span>
                    <span className="text-teal-400 font-bold text-base">Giảm 40% CPL</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Case 2: Data Dashboard */}
            <div className="bg-gray-800/40 rounded-2xl border border-gray-700 overflow-hidden hover:border-blue-500 transition-all duration-300 group hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(59,130,246,0.15)] flex flex-col">
              <div className="h-48 bg-gradient-to-br from-gray-900 to-gray-800 relative overflow-hidden flex items-center justify-center border-b border-gray-700">
                <span className="text-6xl group-hover:scale-110 transition-transform duration-300 drop-shadow-lg">📊</span>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex gap-2 mb-4">
                  <span className="text-xs font-semibold bg-blue-500/20 text-blue-400 px-2.5 py-1 rounded-md">Looker Studio</span>
                  <span className="text-xs font-semibold bg-emerald-500/20 text-emerald-400 px-2.5 py-1 rounded-md">Google Sheets</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Real-time Tracking Dashboard</h3>
                <p className="text-gray-400 text-sm mb-6 flex-grow leading-relaxed">
                  Xây dựng hệ thống tự động kéo dữ liệu chi phí và chuyển đổi từ nền tảng quảng cáo về một Dashboard duy nhất. Giám sát các chỉ số ROAS, ROI, CPA theo thời gian thực.
                </p>
                <div className="border-t border-gray-700/50 pt-4">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-500">Tối ưu:</span>
                    <span className="text-blue-400 font-bold text-base">Tiết kiệm 10h/tuần</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Case 3: Automation */}
            <div className="bg-gray-800/40 rounded-2xl border border-gray-700 overflow-hidden hover:border-red-500 transition-all duration-300 group hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(239,68,68,0.15)] flex flex-col">
              <div className="h-48 bg-gradient-to-br from-gray-900 to-gray-800 relative overflow-hidden flex items-center justify-center border-b border-gray-700">
                <span className="text-6xl group-hover:scale-110 transition-transform duration-300 drop-shadow-lg">🤖</span>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex gap-2 mb-4">
                  <span className="text-xs font-semibold bg-red-500/20 text-red-400 px-2.5 py-1 rounded-md">n8n</span>
                  <span className="text-xs font-semibold bg-yellow-500/20 text-yellow-400 px-2.5 py-1 rounded-md">Python</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Marketing Automation System</h3>
                <p className="text-gray-400 text-sm mb-6 flex-grow leading-relaxed">
                  Thiết lập luồng tự động hóa bằng n8n kết hợp script Python (cào dữ liệu, xử lý ảnh). Tự động phân bổ luồng dữ liệu khách hàng mới và bắn thông báo biến động ngân sách về Telegram/Slack.
                </p>
                <div className="border-t border-gray-700/50 pt-4">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-500">Hiệu suất:</span>
                    <span className="text-red-400 font-bold text-base">Tự động hóa 100%</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
      {/* --- CONTACT & FOOTER SECTION --- */}
      <footer id="contact" className="py-20 bg-[#0b0f19] border-t border-gray-800 relative overflow-hidden">
        {/* Ánh sáng nền trang trí */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-full bg-teal-500/5 blur-[150px] pointer-events-none"></div>
        
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">
            Sẵn sàng bứt phá <span className="text-teal-400">doanh thu?</span>
          </h2>
          
          <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto">
            Nếu doanh nghiệp của bạn đang tìm kiếm một Marketer không chỉ biết chạy Ads mà còn làm chủ Data và hệ thống Automation. Hãy kết nối với tôi ngay hôm nay!
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-5 mb-16">
            {/* Nút Email */}
            <a 
              href="mailto:hungallinone.pd@gmail.com" 
              className="flex items-center justify-center gap-3 px-8 py-4 w-full sm:w-auto bg-teal-500 hover:bg-teal-400 text-gray-900 font-bold rounded-full transition-all duration-300 shadow-[0_0_20px_rgba(20,184,166,0.3)] hover:shadow-[0_0_30px_rgba(20,184,166,0.5)] transform hover:-translate-y-1"
            >
              <span className="text-2xl">✉️</span> Gửi Email Cho Tôi
            </a>
            
            {/* Nút Zalo */}
            <a 
              href="https://zalo.me/0866926056" 
              target="_blank" 
              rel="noreferrer" 
              className="flex items-center justify-center gap-3 px-8 py-4 w-full sm:w-auto bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-full transition-all duration-300 shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)] transform hover:-translate-y-1"
            >
              <span className="text-2xl">💬</span> Nhắn tin Zalo
            </a>
          </div>
          
          {/* Dòng Bản quyền & Mạng xã hội */}
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-500 text-sm">
              © 2026 Nguyen Van Hung. Đã đăng ký bản quyền.
            </div>
            <div className="flex gap-4">
              {/* Thay link facebook/linkedin của bạn vào href */}
              <a href="https://linkedin.com/in/hùng-nguyễn-ab8255247" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-gray-800 border border-gray-700 flex items-center justify-center text-gray-400 hover:bg-teal-500 hover:text-gray-900 hover:border-teal-500 transition-all">
                in
              </a>
              <a href="https://facebook.com/hugnguyen.agent" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-gray-800 border border-gray-700 flex items-center justify-center text-gray-400 hover:bg-blue-500 hover:text-white hover:border-blue-500 transition-all">
                fb
              </a>
            </div>
          </div>

        </div>
      </footer>
    </div>
  );
}