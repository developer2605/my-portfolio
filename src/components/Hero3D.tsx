import React from 'react';

export default function Hero3D() {
  // Quỹ đạo 1 (Vòng trong)
  const skillsRing1 = [
    { id: 1, name: 'Facebook Ads', color: 'text-blue-400', border: 'border-blue-400/50', bg: 'bg-blue-400/10' },
    { id: 2, name: 'TikTok Ads', color: 'text-pink-400', border: 'border-pink-400/50', bg: 'bg-pink-400/10' },
    { id: 3, name: 'Looker Studio', color: 'text-teal-400', border: 'border-teal-400/50', bg: 'bg-teal-400/10' },
  ];

  // Quỹ đạo 2 (Vòng ngoài)
  const skillsRing2 = [
    { id: 4, name: 'n8n Automate', color: 'text-red-400', border: 'border-red-400/50', bg: 'bg-red-400/10' },
    { id: 5, name: 'Python', color: 'text-yellow-400', border: 'border-yellow-400/50', bg: 'bg-yellow-400/10' },
    { id: 6, name: 'GTM Tracking', color: 'text-emerald-400', border: 'border-emerald-400/50', bg: 'bg-emerald-400/10' },
    { id: 7, name: 'Data Analysis', color: 'text-purple-400', border: 'border-purple-400/50', bg: 'bg-purple-400/10' },
    { id: 8, name: 'A/B Testing', color: 'text-orange-400', border: 'border-orange-400/50', bg: 'bg-orange-400/10' },
  ];

  return (
    // Tăng chiều cao lên 600px để thoải mái không gian lượn
    <div className="relative w-full h-[450px] md:h-[600px] flex items-center justify-center perspective-[1200px] -mt-10 md:-mt-46">
      
      <style>{`
        .preserve-3d { transform-style: preserve-3d; }
        
        .ring-1 { animation: spin-ring-1 15s linear infinite; }
        @keyframes spin-ring-1 {
          0% { transform: translate(-50%, -50%) rotateX(65deg) rotateY(-15deg) rotateZ(0deg); }
          100% { transform: translate(-50%, -50%) rotateX(65deg) rotateY(-15deg) rotateZ(360deg); }
        }
        .item-1 { animation: counter-spin-1 15s linear infinite; }
        @keyframes counter-spin-1 {
          0% { transform: rotateZ(0deg) rotateY(15deg) rotateX(-65deg); }
          100% { transform: rotateZ(-360deg) rotateY(15deg) rotateX(-65deg); }
        }

        .ring-2 { animation: spin-ring-2 25s linear infinite; }
        @keyframes spin-ring-2 {
          0% { transform: translate(-50%, -50%) rotateX(60deg) rotateY(20deg) rotateZ(0deg); }
          100% { transform: translate(-50%, -50%) rotateX(60deg) rotateY(20deg) rotateZ(-360deg); }
        }
        .item-2 { animation: counter-spin-2 25s linear infinite; }
        @keyframes counter-spin-2 {
          0% { transform: rotateZ(0deg) rotateY(-20deg) rotateX(-60deg); }
          100% { transform: rotateZ(360deg) rotateY(-20deg) rotateX(-60deg); }
        }
      `}</style>

      <div className="absolute top-1/2 left-1/2 preserve-3d" style={{ transform: 'translate(-50%, -50%)' }}>

        {/* Vòng ngoài (Ring 2) - Tăng kích thước lên 600px, đẩy xa 300px */}
        <div className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full border border-blue-500/10 preserve-3d ring-2">
          {skillsRing2.map((skill, index) => {
            const angle = (index / skillsRing2.length) * 360;
            return (
              <div
                key={skill.id}
                className="absolute top-1/2 left-1/2 preserve-3d"
                style={{ transform: `translate(-50%, -50%) rotate(${angle}deg) translateY(-300px) rotate(-${angle}deg)` }}
              >
                {/* Tăng nhẹ padding và font size */}
                <div className={`item-2 px-6 py-2.5 rounded-full border ${skill.border} ${skill.bg} ${skill.color} font-bold text-[16px] whitespace-nowrap backdrop-blur-md shadow-lg`}>
                  {skill.name}
                </div>
              </div>
            );
          })}
        </div>

        {/* Vòng trong (Ring 1) - Tăng kích thước lên 400px, đẩy xa 200px */}
        <div className="absolute top-0 left-0 w-[400px] h-[400px] rounded-full border border-teal-500/20 preserve-3d ring-1">
          {skillsRing1.map((skill, index) => {
            const angle = (index / skillsRing1.length) * 360;
            return (
              <div
                key={skill.id}
                className="absolute top-1/2 left-1/2 preserve-3d"
                style={{ transform: `translate(-50%, -50%) rotate(${angle}deg) translateY(-200px) rotate(-${angle}deg)` }}
              >
                <div className={`item-1 px-5 py-2 rounded-full border ${skill.border} ${skill.bg} ${skill.color} font-bold text-[15px] whitespace-nowrap backdrop-blur-md shadow-lg`}>
                  {skill.name}
                </div>
              </div>
            );
          })}
        </div>

        {/* Lõi trung tâm: Tên của bạn (Tăng lên 36x36, tương đương 144px) */}
        <div className="absolute top-0 left-0 flex items-center justify-center w-36 h-36 rounded-full bg-gray-900 border-2 border-teal-500 shadow-[0_0_80px_rgba(20,184,166,0.6)] preserve-3d" 
             style={{ transform: 'translate(-50%, -50%) translateZ(10px)' }}>
          <span className="font-black text-transparent bg-clip-text bg-gradient-to-br from-teal-300 to-blue-500 text-4xl tracking-wider">
            HUNG
          </span>
        </div>

      </div>
    </div>
  );
}