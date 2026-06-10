import React, { useState } from 'react';
import Hero3D from './components/Hero3D';
import FadeInScroll from './components/FadeInScroll';

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 2; // Số lượng Slide (Cập nhật số này khi bạn thêm/bớt dự án)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };
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
                      Cử nhân ứng dụng phần mềm - (FPoly)<br />
                      Google AI Essentials<br />
                      Foundations of Digital Marketing and E-commerce<br />
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
                id="btn-download-cv"
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

      {/* --- CASE STUDIES SECTION (P-A-R FORMAT) --- */}
      <section id="projects" className="py-24 bg-[#0b0f19] relative border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Dự Án Thực Chiến</h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Tư duy giải quyết bài toán doanh nghiệp thông qua mô hình Problem - Action - Result.
            </p>
          </div>

          <div className="space-y-10">

            {/* Project 1: Performance Ads */}
            <div className="bg-gray-800/30 rounded-2xl border border-gray-700 overflow-hidden hover:border-teal-500 transition-all duration-300 group">
              <div className="p-6 md:p-8">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">Tối Ưu Hóa Phễu Chuyển Đổi Ngành Y Tế</h3>
                    <div className="flex gap-2">
                      <span className="text-xs font-semibold bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full">Facebook Ads</span>
                      <span className="text-xs font-semibold bg-pink-500/20 text-pink-400 px-3 py-1 rounded-full">TikTok Ads</span>
                    </div>
                  </div>
                  <div className="text-right hidden md:block">
                    <span className="text-4xl">🏥</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Problem */}
                  <div className="bg-orange-500/5 border border-orange-500/20 rounded-xl p-5">
                    <div className="flex items-center gap-2 text-orange-400 font-bold mb-3">
                      <span>⚠️</span> Vấn đề (Problem)
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      CPL (Chi phí/Lead) tăng đột biến do tệp đối tượng cũ bị bão hòa. Tỷ lệ khách hàng để lại thông tin nhưng không chốt lịch khám cao, gây lãng phí ngân sách lớn.
                    </p>
                  </div>
                  {/* Action */}
                  <div className="bg-blue-500/5 border border-blue-500/20 rounded-xl p-5">
                    <div className="flex items-center gap-2 text-blue-400 font-bold mb-3">
                      <span>⚡</span> Hành động (Action)
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      Tái cấu trúc tệp Lookalike. Triển khai chiến dịch A/B testing cường độ cao với định dạng Video ngắn. Thiết lập phễu Retargeting bám đuổi cá nhân hóa theo từng loại bệnh lý.
                    </p>
                  </div>
                  {/* Result */}
                  <div className="bg-teal-500/5 border border-teal-500/20 rounded-xl p-5 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-16 h-16 bg-teal-500/10 rounded-bl-full"></div>
                    <div className="flex items-center gap-2 text-teal-400 font-bold mb-3 relative z-10">
                      <span>🏆</span> Kết quả (Result)
                    </div>
                    <ul className="text-gray-300 text-sm space-y-2 relative z-10 font-medium">
                      <li>• Giảm <strong className="text-teal-400 text-base">40%</strong> CPL tổng thể.</li>
                      <li>• Duy trì ROAS ở mức <strong className="text-teal-400 text-base">2.5</strong>.</li>
                      <li>• Quản lý hiệu quả ngân sách <strong className="text-white">1.2 Tỷ VNĐ/tháng</strong>.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Project 2: Data Dashboard */}
            <div className="bg-gray-800/30 rounded-2xl border border-gray-700 overflow-hidden hover:border-blue-500 transition-all duration-300 group">
              <div className="p-6 md:p-8">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">Hệ Thống Tracking Dashboard Real-time</h3>
                    <div className="flex gap-2">
                      <span className="text-xs font-semibold bg-emerald-500/20 text-emerald-400 px-3 py-1 rounded-full">Google Sheets</span>
                      <span className="text-xs font-semibold bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full">Looker Studio</span>
                    </div>
                  </div>
                  <div className="text-right hidden md:block">
                    <span className="text-4xl">📊</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-orange-500/5 border border-orange-500/20 rounded-xl p-5">
                    <div className="flex items-center gap-2 text-orange-400 font-bold mb-3">
                      <span>⚠️</span> Vấn đề (Problem)
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      Dữ liệu quảng cáo bị phân mảnh trên nhiều nền tảng. Team tốn 2-3 tiếng mỗi ngày để làm báo cáo thủ công bằng Excel, dẫn đến việc ra quyết định tối ưu ngân sách bị chậm trễ.
                    </p>
                  </div>
                  <div className="bg-blue-500/5 border border-blue-500/20 rounded-xl p-5">
                    <div className="flex items-center gap-2 text-blue-400 font-bold mb-3">
                      <span>⚡</span> Hành động (Action)
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      Thiết lập kết nối API tự động kéo dữ liệu chi phí từ Ads Manager về Google Sheets. Chuẩn hóa Data Model và trực quan hóa toàn bộ chỉ số KPI lên Looker Studio.
                    </p>
                  </div>
                  <div className="bg-blue-500/5 border border-blue-500/20 rounded-xl p-5 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-16 h-16 bg-blue-500/10 rounded-bl-full"></div>
                    <div className="flex items-center gap-2 text-blue-400 font-bold mb-3 relative z-10">
                      <span>🏆</span> Kết quả (Result)
                    </div>
                    <ul className="text-gray-300 text-sm space-y-2 relative z-10 font-medium">
                      <li>• Tự động hóa <strong className="text-blue-400 text-base">100%</strong> luồng báo cáo.</li>
                      <li>• Tiết kiệm <strong className="text-blue-400 text-base">15 giờ</strong> làm việc/tuần.</li>
                      <li>• Phát hiện & cắt giảm <strong className="text-white">10%</strong> ngân sách lãng phí.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Project 3: Automation */}
            <div className="bg-gray-800/30 rounded-2xl border border-gray-700 overflow-hidden hover:border-red-500 transition-all duration-300 group">
              <div className="p-6 md:p-8">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">Quy Trình Marketing Automation (n8n)</h3>
                    <div className="flex gap-2">
                      <span className="text-xs font-semibold bg-red-500/20 text-red-400 px-3 py-1 rounded-full">n8n Workflow</span>
                      <span className="text-xs font-semibold bg-yellow-500/20 text-yellow-400 px-3 py-1 rounded-full">Python Script</span>
                    </div>
                  </div>
                  <div className="text-right hidden md:block">
                    <span className="text-4xl">🤖</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-orange-500/5 border border-orange-500/20 rounded-xl p-5">
                    <div className="flex items-center gap-2 text-orange-400 font-bold mb-3">
                      <span>⚠️</span> Vấn đề (Problem)
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      Lead đổ về từ quảng cáo Form không được chia đều cho Sale kịp thời. Khách hàng phải chờ lâu mới được phản hồi, khiến tỷ lệ rớt số (Drop-off rate) lên tới 30%.
                    </p>
                  </div>
                  <div className="bg-blue-500/5 border border-blue-500/20 rounded-xl p-5">
                    <div className="flex items-center gap-2 text-blue-400 font-bold mb-3">
                      <span>⚡</span> Hành động (Action)
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      Xây dựng luồng tự động hóa bằng n8n. Khi có Lead mới, hệ thống tự động lọc data, định tuyến luân phiên cho từng nhân viên Sale và bắn thông báo ngay lập tức qua Telegram.
                    </p>
                  </div>
                  <div className="bg-red-500/5 border border-red-500/20 rounded-xl p-5 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-16 h-16 bg-red-500/10 rounded-bl-full"></div>
                    <div className="flex items-center gap-2 text-red-400 font-bold mb-3 relative z-10">
                      <span>🏆</span> Kết quả (Result)
                    </div>
                    <ul className="text-gray-300 text-sm space-y-2 relative z-10 font-medium">
                      <li>• Thời gian chia Lead giảm từ 30p xuống <strong className="text-red-400 text-base">&lt; 1 phút</strong>.</li>
                      <li>• Tỷ lệ chuyển đổi Lead - Sale tăng <strong className="text-red-400 text-base">25%</strong>.</li>
                      <li>• Lead Data được đồng bộ <strong className="text-white">Real-time</strong>.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- FREELANCE & SIDE PROJECTS SECTION --- */}
      <section className="py-24 bg-[#0b0f19] relative">
        <div className="max-w-5xl mx-auto px-6">

          <div className="flex items-center justify-between mb-16 border-b border-gray-800 pb-4">
            <h3 className="text-3xl font-bold text-white">Dự Án Freelance & Khác</h3>
            <span className="text-gray-500 text-sm">Tech & Operations</span>
          </div>

          {/* === KHU VỰC 1: CÁC DỰ ÁN FREELANCE CHI TIẾT (DẠNG SLIDE) === */}
          <div className="relative w-full max-w-4xl mx-auto mb-24 group">
            
            {/* Khung chứa các Slide */}
            <div className="overflow-hidden rounded-2xl bg-gray-900 border border-gray-800 shadow-[0_10px_40px_rgba(0,0,0,0.5)]">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                
                {/* SLIDE 1: LÊ ĐA CLINIC */}
                <div className="w-full flex-shrink-0 p-8 md:p-10">
                  <div className="flex items-center gap-5 mb-8 border-b border-gray-800 pb-6">
                    <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-3xl shadow-[0_0_15px_rgba(16,185,129,0.2)]">🏥</div>
                    <div>
                      <span className="text-emerald-400 font-semibold text-sm">Online - Active</span>
                      <h3 className="text-2xl md:text-3xl font-bold text-white mt-1">Performance Marketing Executive</h3>
                      <span className="text-gray-400">Leda Clinic (Phòng Khám Thẩm Mỹ & Da Liễu)</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-white font-semibold flex items-center gap-2 mb-4 text-base">
                        <span className="text-emerald-500 text-lg">🎯</span> Quản lý Ngân sách & Media Buying
                      </h4>
                      <ul className="text-gray-300 text-sm space-y-3 list-disc ml-5 leading-relaxed">
                        <li>Phân bổ và quản lý ngân sách Performance đa kênh (<strong className="text-emerald-400">Facebook, TikTok Ads</strong>), tối ưu mục tiêu thu thập Lead & Tin nhắn.</li>
                        <li>Am hiểu chính sách quảng cáo ngành Thẩm mỹ; liên tục A/B Testing Video ngắn để lách kiểm duyệt an toàn nhưng vẫn duy trì CVR cao.</li>
                        <li>Xây dựng phễu <strong className="text-white">Retargeting đa lớp</strong> bám đuổi khách hàng tiềm năng, giảm thiểu tối đa lãng phí traffic.</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-white font-semibold flex items-center gap-2 mb-4 text-base">
                        <span className="text-emerald-500 text-lg">🔄</span> Tối ưu Phễu O2O
                      </h4>
                      <ul className="text-gray-300 text-sm space-y-3 list-disc ml-5 leading-relaxed">
                        <li>Phân tích hành vi từ điểm chạm Click Ads đến khi đến phòng khám, trực tiếp tối ưu hóa tỷ lệ <strong className="text-emerald-400">Show-up Rate</strong>.</li>
                        <li>Phối hợp cùng Bác sĩ/Telesale tinh chỉnh kịch bản Chatbot, tăng tỷ lệ <strong className="text-emerald-400">Booking Rate</strong> chốt lịch trực tiếp.</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* SLIDE 2: ĐỒNG PHỤC KHỞI NGUYÊN */}
                <div className="w-full flex-shrink-0 p-8 md:p-10 flex flex-col justify-center">
                  <div className="flex items-center gap-5 mb-6 border-b border-gray-800 pb-5">
                    {/* Icon Áo đồng phục với tông màu Xanh dương */}
                    <div className="w-16 h-16 rounded-full bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-3xl shadow-[0_0_15px_rgba(59,130,246,0.2)]">👕</div>
                    <div>
                      <span className="text-blue-400 font-semibold text-sm">Dự án Hiện tại</span>
                      <h3 className="text-2xl md:text-3xl font-bold text-white mt-1">Facebook Ads Freelancer</h3>
                      <span className="text-gray-400">Đồng Phục Khởi Nguyên</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    {/* Phần 1: Media Buying B2B */}
                    <div>
                      <h4 className="text-white font-semibold flex items-center gap-2 mb-3 text-base">
                        <span className="text-blue-500 text-lg">🎯</span> Chiến dịch Quảng cáo B2B
                      </h4>
                      <ul className="text-gray-300 text-sm space-y-2 list-disc ml-5 leading-relaxed">
                        <li>Trực tiếp thiết lập và tối ưu ngân sách <strong className="text-blue-400">Facebook Ads</strong> chuyên biệt cho mảng đồng phục doanh nghiệp, trường học.</li>
                        <li>Nghiên cứu và Target chính xác tệp khách hàng B2B (HR, Chủ doanh nghiệp, Quản lý mua hàng).</li>
                      </ul>
                    </div>

                    {/* Phần 2: Testing & Retargeting */}
                    <div>
                      <h4 className="text-white font-semibold flex items-center gap-2 mb-3 text-base">
                        <span className="text-blue-500 text-lg">📈</span> Tối ưu Content & Retargeting
                      </h4>
                      <ul className="text-gray-300 text-sm space-y-2 list-disc ml-5 leading-relaxed">
                        <li>Liên tục <strong className="text-blue-400">A/B Testing</strong> các định dạng hình ảnh mẫu áo, chương trình khuyến mãi và Video xưởng may.</li>
                        <li>Xây dựng phễu <strong className="text-blue-400">Retargeting</strong> bám đuổi các khách hàng đã nhắn tin hỏi giá nhưng chưa chốt đơn.</li>
                      </ul>
                    </div>
                  </div>

                  {/* Phần 3: HIỂN THỊ CHỈ SỐ THỰC TẾ (HÀNG THÁNG) */}
                  <div className="bg-blue-900/20 border border-blue-800/50 rounded-xl p-4 mt-auto">
                    <div className="text-blue-400 text-xs font-bold uppercase tracking-wider mb-3 text-center">
                      Hiệu suất trung bình hàng tháng
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 divide-y md:divide-y-0 md:divide-x divide-gray-700/50 text-center">
                      <div className="pt-2 md:pt-0">
                        <div className="text-2xl font-bold text-white mb-0.5">500K+</div>
                        <div className="text-[11px] text-gray-400 uppercase">Lượt tiếp cận</div>
                      </div>
                      <div className="pt-2 md:pt-0">
                        <div className="text-2xl font-bold text-white mb-0.5">15,000+</div>
                        <div className="text-[11px] text-gray-400 uppercase">Lượt Click</div>
                      </div>
                      <div className="pt-2 md:pt-0">
                        <div className="text-2xl font-bold text-emerald-400 mb-0.5">800+</div>
                        <div className="text-[11px] text-gray-400 uppercase">Tin nhắn (Mess)</div>
                      </div>
                      <div className="pt-2 md:pt-0">
                        <div className="text-2xl font-bold text-white mb-0.5">-</div>
                        <div className="text-[11px] text-gray-400 uppercase">Chi phí / Mess</div>
                      </div>
                    </div>
                  </div>
                  
                </div>

              </div>
            </div>

            {/* Nút Điều Hướng Trái */}
            <button 
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-5 md:-translate-x-6 w-12 h-12 bg-gray-800 hover:bg-emerald-500 border border-gray-700 text-white rounded-full flex items-center justify-center transition-all shadow-lg opacity-0 group-hover:opacity-100 focus:outline-none z-10 text-xl font-bold"
            >
              ❮
            </button>
            
            {/* Nút Điều Hướng Phải */}
            <button 
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-5 md:translate-x-6 w-12 h-12 bg-gray-800 hover:bg-emerald-500 border border-gray-700 text-white rounded-full flex items-center justify-center transition-all shadow-lg opacity-0 group-hover:opacity-100 focus:outline-none z-10 text-xl font-bold"
            >
              ❯
            </button>

            {/* Chấm tròn chỉ thị Slide (Dots) */}
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
              {[...Array(totalSlides)].map((_, index) => (
                <button 
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${currentSlide === index ? 'bg-emerald-500 w-8' : 'bg-gray-700 hover:bg-gray-500 w-2.5'}`}
                  aria-label={`Đi tới slide ${index + 1}`}
                />
              ))}
            </div>

          </div>

          {/* === KHU VỰC 2: CÁC DỰ ÁN VẬN HÀNH NHỎ (MINI-CARDS) === */}
          <h4 className="text-xl font-bold text-gray-300 mb-8 border-b border-gray-800 inline-block pb-2">Các Dự Án Vận Hành & Khác</h4>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            {/* Side Project 1: Web E-commerce */}
            <div className="bg-gray-800/20 p-6 rounded-xl border border-gray-800 hover:border-gray-600 transition-colors group flex flex-col">
              <div className="text-3xl mb-4 opacity-80 group-hover:opacity-100 transition-opacity">🛒</div>
              <h4 className="text-lg font-bold text-white mb-2">Setup Web E-commerce Sức Khỏe</h4>
              <p className="text-gray-400 text-sm mb-4 flex-grow">
                Xây dựng và cấu hình website bán hàng bằng WordPress. Tùy biến giao diện bằng Custom CSS (Flatsome) để đồng bộ nhận diện thương hiệu.
              </p>
              <div className="flex flex-wrap gap-2 mt-auto">
                <span className="text-[10px] uppercase tracking-wider font-semibold bg-gray-800 text-gray-300 px-2 py-1 rounded">WordPress</span>
                <span className="text-[10px] uppercase tracking-wider font-semibold bg-gray-800 text-gray-300 px-2 py-1 rounded">Flatsome</span>
              </div>
            </div>

            {/* Side Project 2: Quản lý Giải đấu */}
            <div className="bg-gray-800/20 p-6 rounded-xl border border-gray-800 hover:border-gray-600 transition-colors group flex flex-col">
              <div className="text-3xl mb-4 opacity-80 group-hover:opacity-100 transition-opacity">🏆</div>
              <h4 className="text-lg font-bold text-white mb-2">Vận Hành Giải Đấu Thể Thao</h4>
              <p className="text-gray-400 text-sm mb-4 flex-grow">
                Ứng dụng nền tảng MyLeague vào việc số hóa quy trình tổ chức. Quản lý lịch thi đấu, cập nhật kết quả tự động cho sự kiện.
              </p>
              <div className="flex flex-wrap gap-2 mt-auto">
                <span className="text-[10px] uppercase tracking-wider font-semibold bg-gray-800 text-gray-300 px-2 py-1 rounded">MyLeague</span>
                <span className="text-[10px] uppercase tracking-wider font-semibold bg-gray-800 text-gray-300 px-2 py-1 rounded">Event Mgt</span>
              </div>
            </div>

            {/* Side Project 3: Viết Script Tool */}
            <div className="bg-gray-800/20 p-6 rounded-xl border border-gray-800 hover:border-gray-600 transition-colors group flex flex-col">
              <div className="text-3xl mb-4 opacity-80 group-hover:opacity-100 transition-opacity">⚙️</div>
              <h4 className="text-lg font-bold text-white mb-2">Tool Auto Báo Cáo Nội Bộ</h4>
              <p className="text-gray-400 text-sm mb-4 flex-grow">
                Sử dụng n8n kết hợp với RapidAPI để tự động thu thập số liệu biến động thị trường, tổng hợp thành báo cáo và gửi trực tiếp qua email.
              </p>
              <div className="flex flex-wrap gap-2 mt-auto">
                <span className="text-[10px] uppercase tracking-wider font-semibold bg-gray-800 text-gray-300 px-2 py-1 rounded">n8n</span>
                <span className="text-[10px] uppercase tracking-wider font-semibold bg-gray-800 text-gray-300 px-2 py-1 rounded">RapidAPI</span>
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
              id="btn-contact-email"
              href="mailto:hungallinone.pd@gmail.com"
              className="flex items-center justify-center gap-3 px-8 py-4 w-full sm:w-auto bg-teal-500 hover:bg-teal-400 text-gray-900 font-bold rounded-full transition-all duration-300 shadow-[0_0_20px_rgba(20,184,166,0.3)] hover:shadow-[0_0_30px_rgba(20,184,166,0.5)] transform hover:-translate-y-1"
            >
              <span className="text-2xl">✉️</span> Gửi Email Cho Tôi
            </a>

            {/* Nút Zalo */}
            <a
              id="btn-contact-zalo"
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