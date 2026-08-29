import { motion } from "framer-motion";
import {
    FlaskConical,
    Calculator,
    Microscope,
    Cpu,
    Target,
    Zap,
    Rocket,
    CheckCircle2,
    ArrowRight,
    Landmark,
    BarChart3
} from "lucide-react";
import { Link } from "react-router-dom";
import PageWrapper from "@/components/layout/PageWrapper";
import { containerVariants, itemVariants, viewportConfig } from "@/lib/motion";

const Puc = () => {
    const scienceOverview = {
        title: "Montessori Education",
        description: "Our Montessori program is designed to encourage independent learning, exploration, creativity, and holistic development. We believe every child learns differently and deserves an environment that supports their natural curiosity and individual growth."
    };

    const scienceCombinations = [
        {
            id: "early-years",
            title: "Early Years",
            subtitle: "Ages 3–5 Years",
            icon: Microscope,
            vision: "To create a joyful and caring learning environment where every child develops confidence, curiosity, creativity, and a strong foundation for lifelong learning.",
            mission: [
                "Provide activity-based and child-centered education.",
                "Encourage creativity, imagination, and exploration.",
                "Develop communication and social interaction skills.",
                "Foster emotional, physical, and intellectual growth."
            ],
            objectives: [
                "Develop foundational literacy and numeracy skills.",
                "Encourage independent learning.",
                "Improve fine and gross motor skills.",
                "Build confidence through interactive activities."
            ]
        },
        {
            id: "kindergarten",
            title: "Kindergarten",
            subtitle: "UKG Preparation",
            icon: Cpu,
            vision: "To prepare children for primary education through joyful learning experiences that build confidence, discipline, communication, and academic readiness.",
            mission: [
                "Strengthen language and numeracy skills.",
                "Encourage curiosity and observation.",
                "Promote teamwork and positive values.",
                "Prepare children for formal schooling."
            ],
            objectives: [
                "Build school readiness.",
                "Develop communication skills.",
                "Improve logical thinking.",
                "Encourage creativity and confidence."
            ]
        }
    ];

    const commerceOverview = {
        title: "Preparatory Learning",
        description: "Our preparatory program focuses on building school readiness, confidence, and essential skills that help children transition smoothly into formal primary education.",
        vision: "To provide a supportive and engaging learning environment that prepares young children for successful academic journeys ahead.",
        mission: [
            "To build foundational literacy and numeracy skills.",
            "To develop social interaction and communication abilities.",
            "To encourage creativity and self-expression.",
            "To foster discipline, values, and love for learning."
        ]
    };

    const commerceCombinations = [
        {
            id: "nursery",
            title: "Nursery",
            subtitle: "Foundation Stage",
            icon: Cpu,
            vision: "To provide a warm and stimulating environment where young children develop essential social, emotional, and cognitive skills through play-based learning.",
            mission: [
                "Introduce basic literacy and numeracy concepts through play.",
                "Develop fine motor skills and hand-eye coordination.",
                "Encourage social interaction and sharing.",
                "Build a love for learning through creative activities."
            ],
            objectives: [
                "Recognize letters, numbers, and shapes.",
                "Develop listening and speaking skills.",
                "Build confidence in group settings.",
                "Encourage curiosity and exploration."
            ]
        },
        {
            id: "lkg",
            title: "LKG",
            subtitle: "Lower Kindergarten",
            icon: BarChart3,
            vision: "To strengthen foundational learning and prepare children for upper kindergarten through structured and engaging activities.",
            mission: [
                "Strengthen language and early reading skills.",
                "Develop basic mathematical understanding.",
                "Encourage creative expression through art and music.",
                "Build discipline and classroom readiness."
            ],
            objectives: [
                "Improve reading and writing readiness.",
                "Develop number sense and counting skills.",
                "Enhance communication and vocabulary.",
                "Foster independence and self-help skills."
            ]
        }
    ];

    return (
        <PageWrapper>
            <div className="space-y-24 py-12 max-w-6xl mx-auto">
                {/* Hero Section */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportConfig}
                    variants={containerVariants}
                    className="relative group lg:mb-12"
                >
                    <div className="absolute -top-10 -left-10 w-40 h-40 bg-brand-gold/5 rounded-full blur-3xl opacity-50 group-hover:opacity-100 transition-opacity" />
                    <div className="space-y-6 relative z-10 text-center lg:text-left">
                        <motion.div variants={itemVariants} className="flex items-center justify-center lg:justify-start gap-3">
                            <div className="h-1 lg:h-1.5 w-12 bg-brand-gold rounded-full" />
                            <p className="text-brand-navy font-black text-[10px] lg:text-xs tracking-[0.4em] uppercase font-display italic">Early Childhood Education</p>
                        </motion.div>
                        <motion.h1 variants={itemVariants} className="text-3xl lg:text-6xl font-black font-display text-brand-navy leading-tight tracking-tight italic uppercase">
                            Montessori <span className="text-brand-gold">School</span>
                        </motion.h1>
                        <motion.p variants={itemVariants} className="text-slate-500 text-sm lg:text-base leading-relaxed max-w-4xl font-medium font-display mx-auto lg:mx-0">
                            Our Montessori School provides a joyful, safe, and nurturing environment where young learners develop curiosity, creativity, confidence, communication skills, and a lifelong love for learning through activity-based education.
                        </motion.p>
                    </div>
                </motion.div>

                {/* Science Stream Section */}
                <div id="science-stream" className="scroll-mt-32 space-y-16">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={viewportConfig}
                        variants={containerVariants}
                        className="relative bg-brand-navy text-white rounded-[2.5rem] p-8 lg:p-12 overflow-hidden shadow-xl"
                    >
                        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-gold/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
                        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                            <motion.div variants={itemVariants} className="space-y-6">
                                <div className="inline-flex items-center gap-3 px-4 py-2 bg-white/5 backdrop-blur-md rounded-xl border border-white/10 uppercase tracking-widest text-[9px] lg:text-[10px] font-black italic">
                                    <FlaskConical className="h-4 w-4 text-brand-gold" />
                                    Early childhood
                                </div>
                                <h2 className="text-2xl lg:text-4xl font-black font-display italic leading-tight text-blue-100">{scienceOverview.title}</h2>
                                <p className="text-blue-100/70 text-sm lg:text-base font-medium font-display leading-relaxed">
                                    {scienceOverview.description}
                                </p>
                            </motion.div>
                            <motion.div variants={itemVariants} className="relative aspect-square lg:aspect-auto h-full min-h-[200px] bg-white/5 rounded-3xl border border-white/10 overflow-hidden p-6 flex flex-col justify-center gap-4 shadow-inner italic">
                                <div className="flex items-center gap-4 p-4 bg-white/10 rounded-2xl border border-white/20 transition-all hover:bg-white/20">
                                    <div className="h-10 w-10 bg-brand-gold rounded-xl flex items-center justify-center">
                                        <Target className="h-5 w-5 text-brand-navy" />
                                    </div>
                                    <p className="text-xs font-black text-brand-gold uppercase tracking-[0.2em]">
                                        Activity Based Learning
                                    </p>
                                </div>

                                <div className="flex items-center gap-4 p-4 bg-white/10 rounded-2xl border border-white/20 transition-all hover:bg-white/20">
                                    <div className="h-10 w-10 bg-brand-gold rounded-xl flex items-center justify-center">
                                        <Zap className="h-5 w-5 text-brand-navy" />
                                    </div>
                                    <p className="text-xs font-black text-brand-gold uppercase tracking-[0.2em]">
                                        Creative Exploration
                                    </p>
                                </div>

                                <div className="flex items-center gap-4 p-4 bg-white/10 rounded-2xl border border-white/20 transition-all hover:bg-white/20">
                                    <div className="h-10 w-10 bg-brand-gold rounded-xl flex items-center justify-center">
                                        <Rocket className="h-5 w-5 text-brand-navy" />
                                    </div>
                                    <p className="text-xs font-black text-brand-gold uppercase tracking-[0.2em]">
                                        Holistic Development
                                    </p>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>

                    <div className="grid grid-cols-1 gap-16 lg:gap-24">
                        {scienceCombinations.map((comb, index) => (
                            <motion.section
                                key={comb.id}
                                initial="hidden"
                                whileInView="visible"
                                viewport={viewportConfig}
                                variants={containerVariants}
                                className={`flex flex-col lg:flex-row gap-10 lg:gap-16 items-start ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
                            >
                                <div className="lg:w-1/2 space-y-8">
                                    <motion.div variants={itemVariants} className="space-y-3">
                                        <div className="flex items-center gap-4">
                                            <div className="h-12 w-12 bg-gray-50 rounded-xl flex items-center justify-center border border-gray-100 text-brand-gold shadow-sm">
                                                <comb.icon className="h-6 w-6" />
                                            </div>
                                            <div>
                                                <h3 className="text-2xl lg:text-4xl font-black font-display text-brand-navy tracking-tight italic leading-none">{comb.title}</h3>
                                                <p className="text-brand-gold font-black text-[9px] lg:text-[10px] tracking-[0.3em] uppercase italic mt-1">{comb.subtitle}</p>
                                            </div>
                                        </div>
                                    </motion.div>

                                    <motion.div variants={itemVariants} className="p-6 lg:p-8 bg-gray-50 rounded-3xl border border-gray-100 space-y-4 relative overflow-hidden group">
                                        <h4 className="flex items-center gap-2 text-[10px] font-black text-brand-navy uppercase tracking-[0.3em] italic">
                                            <Target className="h-3 w-3 text-brand-gold" />
                                            Vision
                                        </h4>
                                        <p className="text-slate-600 text-sm lg:text-base font-bold leading-relaxed italic font-display">
                                            {comb.vision}
                                        </p>
                                    </motion.div>

                                    <motion.div variants={itemVariants} className="space-y-6">
                                        <h4 className="flex items-center gap-2 text-[10px] font-black text-brand-navy uppercase tracking-[0.3em] italic px-1">
                                            <CheckCircle2 className="h-3 w-3 text-brand-gold" />
                                            Mission
                                        </h4>
                                        <div className="grid gap-3">
                                            {comb.mission.map((item, idx) => (
                                                <div key={idx} className="flex gap-4 p-4 bg-white border border-gray-50 rounded-2xl shadow-sm">
                                                    <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-brand-gold shrink-0" />
                                                    <p className="text-slate-500 text-[13px] lg:text-sm font-bold  font-display">{item}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </motion.div>
                                </div>
                                <motion.div
                                    variants={itemVariants}
                                    className="lg:w-1/2 w-full relative bg-gradient-to-br from-brand-navy to-[#1c2c47] text-white p-8 lg:p-10 rounded-[2rem] shadow-2xl flex flex-col justify-center space-y-8 overflow-hidden border-b-[12px] border-brand-gold"
                                >
                                    {/* Glow background */}
                                    <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl translate-y-1/3 translate-x-1/3" />

                                    <div className="relative z-10 space-y-8">

                                        <div className="space-y-1">
                                            <p className="text-brand-gold font-black text-[9px] tracking-[0.4em] uppercase italic">
                                                Learning Outcomes
                                            </p>

                                            <h3 className="text-xl lg:text-2xl font-black font-display tracking-tight italic uppercase text-blue-200">
                                                Key Focus Areas
                                            </h3>
                                        </div>

                                        <div className="space-y-5">
                                            {comb.objectives.map((obj, idx) => (
                                                <div key={idx} className="flex gap-4 items-start group">

                                                    <div className="mt-0.5 flex-shrink-0 h-8 w-8 bg-white/10 backdrop-blur-md rounded-lg border border-white/20 flex items-center justify-center">
                                                        <Calculator className="h-4 w-4 text-brand-gold" />
                                                    </div>

                                                    <p className="text-white text-sm lg:text-base font-bold leading-relaxed italic font-display">
                                                        {obj}
                                                    </p>

                                                </div>
                                            ))}
                                        </div>

                                    </div>
                                </motion.div>
                            </motion.section>
                        ))}
                    </div>
                </div>

                {/* Commerce Stream Section */}
                <div id="commerce-stream" className="scroll-mt-32 space-y-16">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={viewportConfig}
                        variants={containerVariants}
                        className="relative bg-brand-navy text-white rounded-[2.5rem] p-8 lg:p-12 overflow-hidden shadow-xl"
                    >
                        <div className="absolute top-0 right-0 w-[200px] h-[200px] lg:w-[400px] lg:h-[400px] bg-brand-gold/10 rounded-full blur-[80px] lg:blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
                        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <motion.div variants={itemVariants} className="space-y-6">
                                <div className="inline-flex items-center gap-3 px-4 py-2 bg-white/5 backdrop-blur-md rounded-xl border border-white/10 uppercase tracking-widest text-[9px] lg:text-[10px] font-black italic">
                                    <Landmark className="h-4 w-4 text-brand-gold" />
                                    Preparatory stage
                                </div>
                                <h2 className="text-2xl lg:text-4xl font-black font-display italic text-blue-100 leading-tight">{commerceOverview.title}</h2>
                                <p className="text-blue-100/70 text-sm lg:text-base font-medium font-display leading-relaxed">
                                    {commerceOverview.description}
                                </p>
                            </motion.div>
                            <motion.div variants={itemVariants} className="relative w-full min-h-[180px] lg:min-h-[220px] bg-white/5 rounded-3xl border border-white/10 overflow-hidden p-6 flex flex-col justify-center gap-4 shadow-inner italic">
                                <div className="space-y-4">
                                    <h4 className="flex items-center gap-2 text-[10px] font-black text-brand-gold uppercase tracking-[0.3em] italic">
                                        <Target className="h-3 w-3 text-white" />
                                        Vision
                                    </h4>
                                    <p className="text-white text-[13px] lg:text-sm font-bold italic font-display leading-relaxed">
                                        {commerceOverview.vision}
                                    </p>
                                    <div className="h-px bg-white/10 w-full" />
                                    <h4 className="flex items-center gap-2 text-[10px] font-black text-brand-gold uppercase tracking-[0.3em] italic">
                                        <CheckCircle2 className="h-3 w-3 text-white" />
                                        Our Mission
                                    </h4>
                                    <div className="space-y-2">
                                        {commerceOverview.mission.map((item, idx) => (
                                            <div key={idx} className="flex gap-3 items-center">
                                                <div className="h-1 w-1 rounded-full bg-brand-gold" />
                                                <p className="text-blue-100/80 text-[10px] font-bold font-display  uppercase tracking-wider">{item}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>

                    <div className="grid grid-cols-1 gap-16 lg:gap-24">
                        {commerceCombinations.map((comb, index) => (
                            <motion.section
                                key={comb.id}
                                initial="hidden"
                                whileInView="visible"
                                viewport={viewportConfig}
                                variants={containerVariants}
                                className={`flex flex-col lg:flex-row gap-10 lg:gap-16 items-start ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
                            >
                                <div className="lg:w-1/2 space-y-8">
                                    <motion.div variants={itemVariants} className="space-y-3">
                                        <div className="flex items-center gap-4">
                                            <div className="h-12 w-12 bg-gray-50 rounded-xl flex items-center justify-center border border-gray-100 text-brand-gold shadow-sm">
                                                <comb.icon className="h-6 w-6" />
                                            </div>
                                            <div>
                                                <h3 className="text-2xl lg:text-4xl font-black font-display text-brand-navy tracking-tight italic leading-none">{comb.title}</h3>
                                                <p className="text-brand-gold font-black text-[9px] lg:text-[10px] tracking-[0.3em] uppercase italic  mt-1">{comb.subtitle}</p>
                                            </div>
                                        </div>
                                    </motion.div>

                                    <motion.div variants={itemVariants} className="p-6 lg:p-8 bg-gray-50 rounded-3xl border border-gray-100 space-y-4 relative overflow-hidden group">
                                        <h4 className="flex items-center gap-2 text-[10px] font-black text-brand-navy uppercase tracking-[0.3em] italic">
                                            <Target className="h-3 w-3 text-brand-gold" />
                                            Vision
                                        </h4>
                                        <p className="text-slate-600 text-sm lg:text-base font-bold leading-relaxed italic font-display">
                                            {comb.vision}
                                        </p>
                                    </motion.div>

                                    <motion.div variants={itemVariants} className="space-y-6">
                                        <h4 className="flex items-center gap-2 text-[10px] font-black text-brand-navy uppercase tracking-[0.3em] italic px-1">
                                            <CheckCircle2 className="h-3 w-3 text-brand-gold" />
                                            Mission
                                        </h4>
                                        <div className="grid gap-3">
                                            {comb.mission.map((item, idx) => (
                                                <div key={idx} className="flex gap-4 p-4 bg-white border border-gray-50 rounded-2xl shadow-sm">
                                                    <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-brand-gold shrink-0" />
                                                    <p className="text-slate-500 text-[13px] lg:text-sm font-bold  font-display">{item}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </motion.div>
                                </div>

                                <motion.div
                                    variants={itemVariants}
                                    className="lg:w-1/2 w-full relative bg-gradient-to-br from-brand-navy to-[#1c2c47] text-white p-8 lg:p-10 rounded-[2rem] shadow-2xl flex flex-col justify-center space-y-8 overflow-hidden border-b-[12px] border-brand-gold"
                                >
                                    {/* Glow Background */}
                                    <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl translate-y-1/3 translate-x-1/3" />

                                    <div className="relative z-10 space-y-8">

                                        <div className="space-y-1">
                                            <p className="text-brand-gold font-black text-[9px] tracking-[0.4em] uppercase italic">
                                                Learning Outcomes
                                            </p>

                                            <h3 className="text-xl lg:text-2xl font-black font-display tracking-tight italic uppercase text-blue-200">
                                                Key Focus Areas
                                            </h3>
                                        </div>

                                        <div className="space-y-5">
                                            {comb.objectives.map((obj, idx) => (
                                                <div key={idx} className="flex gap-4 items-start group">

                                                    <div className="mt-0.5 flex-shrink-0 h-8 w-8 bg-white/10 backdrop-blur-md rounded-lg border border-white/20 flex items-center justify-center">
                                                        <BarChart3 className="h-4 w-4 text-brand-gold" />
                                                    </div>

                                                    <p className="text-white text-sm lg:text-base font-bold leading-relaxed italic font-display">
                                                        {obj}
                                                    </p>

                                                </div>
                                            ))}
                                        </div>

                                    </div>
                                </motion.div>
                            </motion.section>
                        ))}
                    </div>
                </div>

                {/* Admissions CTA Section */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportConfig}
                    variants={containerVariants}
                    className="bg-brand-navy text-white rounded-[2.5rem] p-10 lg:p-16 overflow-hidden relative border-b-[8px] border-brand-gold shadow-xl"
                >
                    <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
                    <div className="relative z-10 text-center lg:text-left space-y-10">
                        <div className="space-y-4">
                            <motion.h3 variants={itemVariants} className="text-2xl lg:text-5xl font-black font-display tracking-tight uppercase italic leading-none text-blue-100">Admissions <br /><span className="text-brand-gold">Open</span></motion.h3>
                            <motion.p variants={itemVariants} className="text-blue-100/80 text-sm lg:text-lg font-bold max-w-2xl italic font-display">
                                Begin your child's educational journey at SRI SAI VIDYALAYA. Our Montessori program provides a caring environment where children learn, explore, and grow with confidence.
                            </motion.p>
                        </div>
                        <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                            <motion.div variants={itemVariants}>
                                <Link
                                    to="/admissions"
                                    className="px-8 py-4 bg-brand-gold text-brand-navy rounded-xl font-black text-[10px] tracking-[0.3em] uppercase flex items-center gap-3 transition-all font-display active:scale-95 shadow-xl shadow-yellow-900/40 hover:bg-white"
                                >
                                    Apply Now <ArrowRight className="h-4 w-4" />
                                </Link>
                            </motion.div>
                            <motion.div variants={itemVariants}>
                                <Link
                                    to="/contact"
                                    className="px-8 py-4 bg-white/5 border border-white/10 rounded-xl font-black text-[10px] tracking-[0.3em] uppercase flex items-center gap-3 transition-all font-display active:scale-95 hover:bg-white hover:text-brand-navy shadow-lg shadow-black/20"
                                >
                                    Contact Us <ArrowRight className="h-4 w-4" />
                                </Link>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </PageWrapper>
    );
};

export default Puc;
