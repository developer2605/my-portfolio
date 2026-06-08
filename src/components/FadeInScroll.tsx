import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface FadeInScrollProps {
  children: ReactNode;
  delay?: number;
}

export default function FadeInScroll({ children, delay = 0 }: FadeInScrollProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }} // Trạng thái ban đầu: mờ và nằm dưới 50px
      whileInView={{ opacity: 1, y: 0 }} // Trạng thái khi cuộn tới: rõ và về đúng vị trí
      viewport={{ once: true, margin: "-50px" }} // once: true giúp hiệu ứng chỉ chạy 1 lần. margin để trigger sớm/muộn
      transition={{ duration: 0.6, delay: delay, ease: "easeOut" }} // Thời gian chuyển động
    >
      {children}
    </motion.div>
  );
}