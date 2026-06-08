import Hero3D from './components/Hero3D';
import FadeInScroll from './components/FadeInScroll';

export default function Portfolio() {
  return (
    <div className="bg-gray-950 min-h-screen text-white font-sans overflow-hidden">
      
      {/* --- NAVBAR --- */}
      <nav className="fixed top-0 w-full z-50 bg-gray-950/80 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="font-bold text-xl tracking-wider text-white">
            HUNG<span className="text-indigo-500">.NV</span>
          </div>
          <div className="hidden md:flex gap-8 text-sm font-medium text-gray-300">
            <a href="#about" className="hover:text-indigo-400 transition-colors">Giới thiệu</a>
            <a href="#metrics" className="hover:text-indigo-400 transition-colors">Chỉ số</a>
            <a href="#experience" className="hover:text-indigo-400 transition-colors">Thực chiến</a>
            <a href="#skills" className="hover:text-indigo-400 transition-colors">Kỹ năng</a>
          </div>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <section className="relative flex flex-col items-center justify-center min-h-screen px-6">
        <div className="absolute inset-0 z-0">
          <Hero3D />
        </div>
        
        <div className="relative z-10 text-center pointer-events-none mt-20">
          <h2 className="text-xl md:text-2xl text-emerald-400 font-bold mb-4 tracking-wider uppercase">
            Data-Driven Performance Marketer
          </h2>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-cyan-400">
            Nguyễn Văn Hùng
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Tôi không chỉ chạy Ads, tôi mua Data và tối ưu hóa lợi nhuận. Kết hợp tư duy hệ thống từ Kỹ sư Phần mềm và năng lực phân tích dữ liệu chuyên sâu để scale ngân sách lớn với tỷ lệ chuyển đổi cao nhất.
          </p>
        </div>
      </section>

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
      <section id="experience" className="py-24 px-6 max-w-5xl mx-auto">
        <FadeInScroll>
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center text-gray-100">
            Kinh Nghiệm Thực Chiến
          </h2>
        </FadeInScroll>

        <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-700 before:to-transparent">
          
          {/* Job 1: Y Tế */}
          <FadeInScroll>
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-gray-700 bg-gray-900 group-hover:border-emerald-500 group-hover:bg-emerald-500/20 text-emerald-400 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-sm transition-colors">
                🏥
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-8 rounded-2xl bg-gray-900 border border-gray-800 hover:border-emerald-500 transition-colors">
                <div className="flex flex-col mb-4">
                  <span className="text-emerald-400 font-semibold text-sm mb-1">10/2022 - Nay</span>
                  <h3 className="text-2xl font-bold text-white">Chuyên viên Digital Marketing</h3>
                  <span className="text-gray-400 text-sm">Bệnh viện Đa Khoa Phương Đông</span>
                </div>
                <ul className="text-gray-300 text-sm space-y-3 list-disc ml-4">
                  <li>Trực tiếp quản lý và phân bổ ngân sách Performance Marketing lên đến <strong className="text-emerald-400">1200 triệu VNĐ/tháng</strong> trên đa nền tảng (Facebook, TikTok).</li>
                  <li>Tối ưu hóa chiến dịch ngành Y tế: Giảm <strong className="text-emerald-400">40% CPL (Cost Per Lead)</strong> và đạt <strong className="text-emerald-400">60% tỷ lệ chuyển đổi</strong> đặt lịch khám qua phễu.</li>
                  <li>Phát triển hệ thống Dashboard Real-time bằng <strong className="text-white">Looker Studio & Google Sheets</strong>, tự động hóa báo cáo ROI, KPI hàng ngày thay vì xử lý thủ công.</li>
                  <li>Đạt danh hiệu "Cá nhân tiêu biểu Năm 2023" và "Ngôi Sao Phương Đông 2024" nhờ duy trì tăng trưởng số khách hàng ổn định.</li>
                </ul>
              </div>
            </div>
          </FadeInScroll>

          {/* Job 2: TMĐT / Thời trang */}
          <FadeInScroll delay={0.1}>
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-gray-700 bg-gray-900 group-hover:border-cyan-500 group-hover:bg-cyan-500/20 text-cyan-400 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-sm transition-colors">
                🛒
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-8 rounded-2xl bg-gray-900 border border-gray-800 hover:border-cyan-500 transition-colors">
                <div className="flex flex-col mb-4">
                  <span className="text-cyan-400 font-semibold text-sm mb-1">2022</span>
                  <h3 className="text-2xl font-bold text-white">Digital Marketing</h3>
                  <span className="text-gray-400 text-sm">Cty TNHH XNK & Thương Mại CDM GLOBAL</span>
                </div>
                <ul className="text-gray-300 text-sm space-y-3 list-disc ml-4">
                  <li>Thiết lập và scale các chiến dịch quảng cáo chuyển đổi trên Sàn TMĐT và Website riêng, đạt mức trung bình <strong className="text-cyan-400">ROAS 2.5</strong>.</li>
                  <li>Tăng trưởng <strong className="text-cyan-400">30% GMV (Tổng doanh thu hàng hóa)</strong> trong quý thông qua việc A/B Testing liên tục các mẫu quảng cáo và Target Audience.</li>
                  <li>Xây dựng phễu đa kênh: Nuôi dưỡng cộng đồng Group Facebook và hệ thống kênh TikTok kéo traffic tự nhiên (Organic) bù trừ chi phí Ads.</li>
                </ul>
              </div>
            </div>
          </FadeInScroll>

          {/* Job 3: BĐS */}
          <FadeInScroll delay={0.2}>
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-gray-700 bg-gray-900 group-hover:border-purple-500 group-hover:bg-purple-500/20 text-purple-400 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-sm transition-colors">
                🏢
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-8 rounded-2xl bg-gray-900 border border-gray-800 hover:border-purple-500 transition-colors">
                <div className="flex flex-col mb-4">
                  <span className="text-purple-400 font-semibold text-sm mb-1">2021</span>
                  <h3 className="text-2xl font-bold text-white">Nhân viên kinh doanh BĐS</h3>
                  <span className="text-gray-400 text-sm">Cty cổ phần BĐS S-Home Group</span>
                </div>
                <ul className="text-gray-300 text-sm space-y-3 list-disc ml-4">
                  <li>Trực tiếp thiết kế hình ảnh, edit video và chạy chiến dịch tìm kiếm khách hàng tiềm năng ngành BĐS giá trị cao.</li>
                  <li>Tạo ra đều đặn <strong className="text-purple-400">100 Qualified Leads/tháng</strong> từ Facebook Ads, lọc bỏ lead rác qua hệ thống kịch bản tư vấn.</li>
                </ul>
              </div>
            </div>
          </FadeInScroll>

        </div>
      </section>

      {/* --- SKILLS SECTION --- */}
      {/* ... (Giữ nguyên phần Kỹ Năng từ bản trước, hoặc có thể thêm các kỹ năng đo lường sâu hơn như GTM, Pixel) ... */}
    </div>
  );
}