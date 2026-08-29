import { motion } from "framer-motion";
import {
    Rocket,
    Award,
    Lightbulb
} from "lucide-react";
import { Link } from "react-router-dom";
import PageWrapper from "@/components/layout/PageWrapper";
import { containerVariants, itemVariants, viewportConfig } from "@/lib/motion";

const BcomDataAnalytics = () => {
    const missionPoints = [
        "Deliver quality secondary education through engaging and student-centered learning.",
        "Prepare students for academic success in board examinations.",
        "Encourage analytical thinking, creativity, and problem-solving.",
        "Foster discipline, confidence, leadership, and ethical values.",
        "Promote holistic development through academics, sports, cultural, and co-curricular activities."
    ];

    const objectives = [
        "Strengthen conceptual understanding across all core subjects.",
        "Develop analytical thinking and independent learning skills.",
        "Prepare students confidently for board examinations.",
        "Enhance communication, leadership, teamwork, and decision-making abilities.",
        "Encourage responsible citizenship, discipline, and moral values.",
        "Build confidence for higher secondary education and future career aspirations."
    ];

    const careers = [
        "Academic Excellence", "Board Exam Readiness", "Critical Thinking", "Leadership",
        "Communication", "Creativity", "Discipline", "Holistic Development"
    ];

    return (
        <PageWrapper>
            <div className="space-y-12 py-6 max-w-6xl mx-auto">
                {/* Standardized Hero Section */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportConfig}
                    variants={containerVariants}
                    className="relative group"
                >
                    <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-400/5 rounded-full blur-3xl opacity-50 group-hover:opacity-100 transition-opacity" />
                    <div className="space-y-6 relative z-10">
                        <motion.div variants={itemVariants} className="flex items-center gap-3">
                            <div className="h-1 lg:h-1.5 w-12 bg-brand-gold rounded-full" />
                            <p className="text-brand-navy font-black text-xs tracking-[0.4em] uppercase font-display italic">Secondary Education</p>
                        </motion.div>
                        <motion.h1 variants={itemVariants} className="text-3xl lg:text-5xl font-black font-display text-brand-navy leading-tight tracking-tight italic">
                            High <span className="text-brand-gold">School</span>
                        </motion.h1>
                        <motion.div variants={itemVariants} className="flex flex-wrap gap-3">
                            <span className="px-4 py-1.5 bg-blue-50 text-blue-700 text-[10px] font-black uppercase tracking-widest rounded-full border border-blue-100 italic">Academic Excellence</span>
                            <span className="px-4 py-1.5 bg-gray-50 text-gray-600 text-[10px] font-black uppercase tracking-widest rounded-full border border-gray-100 italic">Classes VIII – X</span>
                        </motion.div>
                        <motion.p variants={itemVariants} className="text-slate-600 text-sm lg:text-base leading-relaxed max-w-5xl font-medium font-display">
                            The High School at SRI SAI VIDYALAYA prepares students for academic excellence through a balanced curriculum that strengthens knowledge, critical thinking, leadership, discipline, and confidence. We focus on helping students excel in board examinations while developing the skills and values needed for lifelong success.
                        </motion.p>
                    </div>
                </motion.div>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportConfig}
                    variants={itemVariants}
                    className="bg-gray-50 border border-gray-100 p-6 lg:p-10 rounded-[2rem] italic text-brand-navy text-sm lg:text-base max-w-4xl mx-auto font-black text-center font-display shadow-xl shadow-blue-900/5 transition-all hover:bg-white hover:border-brand-gold"
                >
                    "Our High School program empowers students with knowledge, confidence, discipline, and leadership qualities, preparing them to excel academically while becoming responsible citizens and lifelong learners."
                </motion.div>

                {/* Vision & Mission: Standardized Split Layout */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportConfig}
                    variants={containerVariants}
                    className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch"
                >
                    <motion.div
                        variants={itemVariants}
                        className="lg:col-span-12 xl:col-span-5 relative bg-brand-navy text-white p-6 lg:p-10 rounded-[2rem] shadow-2xl flex flex-col justify-center overflow-hidden border-b-[12px] border-brand-gold"
                    >
                        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                        <div className="relative z-10 space-y-6">
                            <div className="h-10 w-10 bg-white/10 backdrop-blur-md rounded-xl flex items-center justify-center border border-white/20">
                                <Lightbulb className="h-5 w-5 text-brand-gold" />
                            </div>
                            <h2 className="text-xl lg:text-2xl font-black font-display tracking-tight uppercase italic text-blue-100">Department <br /><span className="text-brand-gold">Vision</span></h2>
                            <p className="text-blue-100 text-xs lg:text-sm leading-relaxed font-bold italic font-display">
                                To inspire students to achieve academic excellence while developing integrity, leadership, critical thinking, creativity, and social responsibility for a successful future.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        variants={itemVariants}
                        className="lg:col-span-12 xl:col-span-7 bg-white border border-gray-100 p-6 lg:p-10 rounded-[2rem] shadow-2xl shadow-blue-900/5 space-y-8 relative overflow-hidden group hover:border-brand-gold transition-colors"
                    >
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-gold/5 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3" />
                        <div className="relative z-10 space-y-6">
                            <div className="flex items-center gap-4">
                                <div className="h-10 w-10 bg-gray-50 rounded-xl flex items-center justify-center border border-gray-100 text-brand-gold shadow-sm group-hover:bg-brand-navy transition-colors">
                                    <Rocket className="h-5 w-5" />
                                </div>
                                <h2 className="text-xl lg:text-2xl font-black font-display text-brand-navy tracking-tight uppercase italic">Our <span className="text-brand-gold">Mission</span></h2>
                            </div>
                            <div className="grid gap-4">
                                {missionPoints.map((item, idx) => (
                                    <div key={idx} className="flex gap-4 group/item">
                                        <div className="mt-1.5 flex-shrink-0 h-2 w-2 rounded-full bg-brand-gold group-hover/item:scale-150 transition-transform" />
                                        <motion.p className="text-slate-600 text-xs lg:text-sm font-bold leading-relaxed group-hover/item:text-brand-navy transition-colors font-display ">
                                            {item}
                                        </motion.p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </motion.div>

                {/* Program Objectives: Standardized Grid */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportConfig}
                    variants={containerVariants}
                    className="space-y-12"
                >
                    <div className="flex items-center gap-6">
                        <h2 className="text-xl lg:text-3xl font-black font-display text-brand-navy tracking-tight whitespace-nowrap uppercase italic">Program <span className="text-brand-gold">Objectives</span></h2>
                        <div className="flex-1 h-px bg-gradient-to-r from-gray-200 to-transparent" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 p-6 lg:p-10 bg-gray-50/50 backdrop-blur-sm border border-gray-100 rounded-[2rem]">
                        {objectives.map((obj, idx) => (
                            <div key={idx} className="flex gap-5 group">
                                <div className="mt-1 flex-shrink-0 h-8 w-8 bg-white rounded-lg shadow-sm border border-gray-100 flex items-center justify-center group-hover:bg-brand-navy group-hover:border-brand-navy transition-all duration-300">
                                    <Lightbulb className="h-4 w-4 text-brand-gold group-hover:text-brand-gold transition-all duration-300" />
                                </div>
                                <p className="text-gray-700 text-sm lg:text-base font-bold leading-relaxed group-hover:text-brand-navy transition-colors font-display italic">
                                    {obj}
                                </p>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Career Opportunities: Horizon Section (Uniformity) */}
                <motion.section
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportConfig}
                    variants={containerVariants}
                    className="relative"
                >
                    <div className="bg-brand-navy text-white rounded-[2rem] p-8 lg:p-12 overflow-hidden relative border-b-[12px] border-brand-gold shadow-2xl">
                        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_50%,rgba(234,179,8,0.05),transparent)] pointer-events-none" />
                        <div className="relative z-10 flex flex-col items-center text-center space-y-10">
                            <div className="space-y-4">
                                <motion.div variants={itemVariants} className="flex justify-center">
                                    <div className="h-12 w-12 bg-white/5 backdrop-blur-xl rounded-full flex items-center justify-center border border-white/10">
                                        <Award className="h-6 w-6 text-brand-gold" />
                                    </div>
                                </motion.div>
                                <motion.h2 variants={itemVariants} className="text-2xl lg:text-4xl font-black font-display tracking-tight uppercase italic text-center text-blue-100">Student <span className="text-brand-gold">Achievements</span></motion.h2>
                                <motion.p variants={itemVariants} className="text-slate-400 text-sm lg:text-base font-black italic max-w-4xl mx-auto font-display">
                                    Our High School program equips students with the academic knowledge, leadership qualities, confidence, and life skills necessary to succeed in higher secondary education and beyond.
                                </motion.p>
                            </div>

                            <div className="flex flex-wrap justify-center gap-3">
                                {careers.map((role, idx) => (
                                    <motion.span
                                        key={idx}
                                        variants={itemVariants}
                                        className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-[10px] lg:text-xs font-black tracking-[0.2em] uppercase hover:bg-brand-gold hover:text-brand-navy hover:border-brand-gold hover:scale-105 transition-all cursor-default font-display italic"
                                    >
                                        {role}
                                    </motion.span>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.section>

                {/* Standardized CTA Section */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportConfig}
                    variants={containerVariants}
                    className="flex flex-col items-center gap-6 p-8 lg:p-10 bg-gray-50 rounded-[2rem] border border-gray-100 shadow-xl"
                >

                    {/* Text Content */}
                    <div className="space-y-4 text-center max-w-2xl">
                        <motion.h3
                            variants={itemVariants}
                            className="text-xl lg:text-2xl font-black font-display text-brand-navy uppercase italic"
                        >
                            Shape Your <span className="text-brand-gold">Bright Future</span>
                        </motion.h3>

                        <motion.p
                            variants={itemVariants}
                            className="text-slate-600 text-sm lg:text-base font-bold italic font-display"
                        >
                            Join the High School at SRI SAI VIDYALAYA and prepare for academic excellence, leadership, and lifelong success in a supportive learning environment.
                        </motion.p>
                    </div>

                    {/* Buttons */}
                    <motion.div
                        variants={itemVariants}
                        className="flex gap-4 flex-wrap justify-center"
                    >
                        <Link
                            to="/admissions"
                            className="px-10 py-5 bg-brand-navy text-white rounded-2xl font-black text-[10px] tracking-[0.3em] uppercase hover:bg-brand-gold hover:text-brand-navy transition-all shadow-2xl shadow-blue-900/20 active:scale-95 text-center"
                        >
                            Apply for Admission
                        </Link>

                        <Link
                            to="/contact"
                            className="px-10 py-5 bg-white border border-gray-200 text-brand-navy rounded-2xl font-black text-[10px] tracking-[0.3em] uppercase hover:bg-brand-gold hover:text-brand-navy transition-all shadow-sm active:scale-95 text-center"
                        >
                            Contact Us
                        </Link>
                    </motion.div>

                </motion.div>
            </div>
        </PageWrapper>
    );
};

export default BcomDataAnalytics;
