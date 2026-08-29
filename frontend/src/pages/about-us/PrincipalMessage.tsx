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
                  Education is the sacred means through which knowledge, character, and culture are passed from one generation to the next. At Sri Sai Vidyalaya, we strive to impart holistic education that nurtures the intellect, discipline, values, and moral strength of every student.
                </p>
                <p>
                  This school magazine is a commendable effort that showcases the literary skills, creativity, and thoughtful expressions of our students. It serves as a mirror of the institution's academic spirit and cultural ethos. I appreciate the sincere efforts of the students, teachers, and the editorial committee who have contributed diligently to bring out this publication.
                </p>
                <p>
                  In keeping with our tradition, we aim to mould our students into responsible, respectful, and service-minded individuals who will uphold the values of our nation and society. May this magazine inspire young minds to pursue knowledge with humility and dedication.
                </p>
                <p>
                  I extend my best wishes to all our students for success in their educational journey and congratulate the team behind this noble endeavour.
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
