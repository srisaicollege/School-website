import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import PageWrapper from "@/components/layout/PageWrapper";
import { containerVariants, itemVariants, viewportConfig } from "@/lib/motion";

const PrincipalMessage = () => {
  return (
    <PageWrapper>
      <div className="space-y-20 py-10 max-w-6xl mx-auto">
        {/* Hero Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={containerVariants}
          className="grid lg:grid-cols-12 gap-12 items-center px-4 lg:px-12"
        >
          {/* Portrait Column */}
          <motion.div variants={itemVariants} className="lg:col-span-12 xl:col-span-12 relative group">
            <div className="relative aspect-[4/5] lg:aspect-square xl:aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl z-10 border-[12px] border-white active:scale-95 transition-transform duration-500 max-w-md mx-auto">
              <img
                src="/teachers/principal.jpeg"
                alt="Principal"
                className="w-full h-full object-cover grayscale-0 group-hover:scale-105 transition-transform duration-[2s]"
              />
              <div className="absolute inset-x-0 bottom-0 p-8 bg-black/40 backdrop-blur-md">
                <h2 className="text-xl font-black text-white font-display italic uppercase leading-none">Manjula Mathad</h2>
                <p className="text-brand-gold font-bold text-[10px] tracking-[0.3em] uppercase font-display italic">Principal, Sri Sai Vidyalaya</p>
              </div>
            </div>
            <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-brand-gold/5 rounded-full blur-[80px] -z-0 pointer-events-none" />
          </motion.div>

          {/* Letter / Message Column */}
          <div className="lg:col-span-12 xl:col-span-12 space-y-8">
            <motion.div variants={itemVariants} className="flex items-center gap-3">
              <div className="h-0.5 w-8 bg-brand-gold rounded-full" />
              <p className="text-brand-navy font-bold text-[10px] tracking-[0.3em] uppercase font-display italic">From the Principal's Desk</p>
            </motion.div>
            <motion.h1 variants={itemVariants} className="text-3xl lg:text-5xl font-black font-display text-brand-navy leading-tight italic uppercase">
              Visionary <span className="text-brand-gold">Leadership</span> for Modern Success
            </motion.h1>

            <motion.div variants={itemVariants} className="relative mt-8">
              <Quote className="absolute -top-8 -left-8 h-16 w-16 text-gray-100 opacity-30 -z-10 animate-pulse" />
              <div className="space-y-6 text-sm lg:text-base text-slate-600 leading-loose font-medium font-display pr-4 lg:pr-8">
                <p>
                  Education is the foundation upon which knowledge, character, and values are built. At Sri Sai Vidyalaya, we believe that true education goes beyond academic achievement and aims to nurture the intellect, discipline, confidence, and moral strength of every student.
                </p>
                
                <p>
                  Our commitment is to provide a learning environment where students are encouraged to explore their potential, think independently, develop their talents, and grow with a strong sense of responsibility. We strive to create a balanced educational experience that combines academic excellence with values, creativity, discipline, and respect for others.
                </p>
                
                <p>
                  In keeping with our vision, we aim to nurture students into responsible, respectful, compassionate, and service-minded individuals who are prepared to contribute positively to society. With the dedicated efforts of our teachers and the support of parents, we continue to guide our students towards becoming confident and capable individuals.
                </p>
                
                <p>
                  I encourage every student to approach learning with curiosity, work with dedication, face challenges with courage, and always uphold strong values. May their journey at Sri Sai Vidyalaya be filled with meaningful learning, personal growth, and lasting success.
                </p>
                
                <p>
                  I wish all our students the very best in their educational journey and look forward to seeing them grow into individuals who make a positive difference in the world around them.
                </p>
                <div className="pt-6 mt-6 border-t border-gray-200">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-brand-gold/10 flex items-center justify-center font-bold text-brand-navy">
                      MM
                    </div>

                    <div>
                      <p className="text-lg font-bold text-brand-navy italic">
                        Manjula Mathad
                      </p>
                      <p className="text-xs text-brand-gold uppercase tracking-widest font-semibold">
                        Principal
                      </p>
                      <p className="text-xs text-slate-500">
                        SRI SAI VIDYALAYA
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>



        {/* Final Welcome Banner */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={containerVariants}
          className="bg-brand-navy rounded-[3rem] p-8 lg:p-12 overflow-hidden border-b-8 border-brand-gold shadow-xl text-center relative mx-4 lg:mx-12"
        >
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
          <div className="relative z-10 space-y-6 max-w-3xl mx-auto">
            <motion.h2 variants={itemVariants} className="text-2xl lg:text-3xl font-black font-display text-blue-100 italic uppercase leading-tight">
              Join a Community of <br /><span className="text-brand-gold">Empowered Achievers</span>
            </motion.h2>
            <motion.div variants={itemVariants} className="pt-2">
              <div className="h-1 w-24 bg-brand-gold mx-auto rounded-full" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </PageWrapper>
  );
};

export default PrincipalMessage;
