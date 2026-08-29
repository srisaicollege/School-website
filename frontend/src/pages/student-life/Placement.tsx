import { motion, type Variants } from 'framer-motion';
import { Award, BookOpen, Star, GraduationCap } from 'lucide-react';

const placements = [
    { year: "2006-07", topper: "NANDA KUMAR B", percentageValue: 89, percentage: "89.00%" },
    { year: "2007-08", topper: "ARPITHA R", percentageValue: 85, percentage: "85.00%" },
    { year: "2008-09", topper: "VINAY RAJU B.V", percentageValue: 91, percentage: "91.00%" },
    { year: "2009-10", topper: "GEETHA H.R", percentageValue: 83, percentage: "83.00%" },
    { year: "2010-11", topper: "SRINIDHI B.R", percentageValue: 93, percentage: "93.00%" },
    { year: "2011-12", topper: "RANJINI S NAYAK", percentageValue: 83, percentage: "83.00%" },
    { year: "2012-13", topper: "PRAGATHI NAYAK", percentageValue: 95, percentage: "95.00%" },
    { year: "2013-14", topper: "SUHAS MANGADI", percentageValue: 93, percentage: "93.00%" },
    { year: "2014-15", topper: "MEDINI V.A", percentageValue: 96, percentage: "96.00%" },
    { year: "2015-16", topper: "BRINDA YADAV K.S", percentageValue: 96, percentage: "96.00%" },
    { year: "2016-17", topper: "SUJITHA S", percentageValue: 96, percentage: "96.00%" },
    { year: "2017-18", topper: "PREETHI S NAYAK", percentageValue: 97, percentage: "97.00%" },
    { year: "2018-19", topper: "NAMISHA K", percentageValue: 97.42, percentage: "97.42%" },
    { year: "2019-20", topper: "KEERTHANA A", percentageValue: 95.84, percentage: "95.84%" },
    { year: "2020-21", topper: "SRIPRIYA M", percentageValue: 97.12, percentage: "97.12%" },
    { year: "2021-22", topper: "PAVAN C", percentageValue: 99.04, percentage: "99.04%" },
    { year: "2022-23", topper: "JAHNAVI R", percentageValue: 96.32, percentage: "96.32%" },
    { year: "2023-24", topper: "ARJUN G KANCHAN", percentageValue: 96.00, percentage: "96.00%" },
    { year: "2024-25", topper: "MADEVI B", percentageValue: 90.56, percentage: "90.56%" },
    { year: "2025-26", topper: "GAGAN GOWDA Y", percentageValue: 96.00, percentage: "96.00%" }
];

const stats = [
    { label: "Highest Score", value: "99.04%", icon: Award, color: "brand-navy" },
    { label: "Academic Years", value: "20+", icon: BookOpen, color: "brand-gold" },
    { label: "Top Performers", value: "20", icon: Star, color: "brand-navy" },
    { label: "Consistent Excellence", value: "Since 2006", icon: GraduationCap, color: "brand-gold" }
];

const toppers = [
    "NANDA KUMAR B",
    "ARPITHA R",
    "VINAY RAJU B.V",
    "GEETHA H.R",
    "SRINIDHI B.R",
    "RANJINI S NAYAK",
    "PRAGATHI NAYAK",
    "SUHAS MANGADI",
    "MEDINI V.A",
    "BRINDA YADAV K.S",
    "SUJITHA S",
    "PREETHI S NAYAK",
    "NAMISHA K",
    "KEERTHANA A",
    "SRIPRIYA M",
    "PAVAN C",
    "JAHNAVI R",
    "ARJUN G KANCHAN",
    "MADEVI B",
    "GAGAN GOWDA Y"
];

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.05
        }
    }
};

const itemVariants: Variants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1] as const
        }
    }
};

const Placement = () => {
    return (
        <section className="relative overflow-hidden rounded-[3.5rem] py-24 lg:py-32">
            {/* Background with Blur & Gradient */}
            <div className="absolute inset-0 z-0 text-[0px]">
                <img
                    src="/background/bg1.jpeg"
                    alt="Background"
                    className="h-full w-full object-cover blur-sm scale-110 opacity-30"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-white/20 to-white/50" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6">
                {/* Header Section */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16 space-y-3"
                >
                    <span className="text-xs font-black tracking-[0.4em] uppercase text-brand-navy/60">
                        Academic Excellence
                    </span>
                    <h1 className="text-4xl lg:text-5xl font-display font-black uppercase italic tracking-tighter text-brand-navy leading-none">
                        SSLC <span className="text-brand-gold">Results</span>
                    </h1>
                    <p className="text-lg text-brand-slate max-w-2xl mx-auto font-medium">
                        Sri Sai Vidyalaya has consistently produced outstanding SSLC results over the years. Our students continue to achieve academic excellence through dedication, disciplined learning, and the guidance of experienced teachers.
                    </p>
                </motion.div>

                {/* Highlights Section */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
                >
                    {stats.map((stat, i) => (
                        <motion.div
                            key={i}
                            variants={itemVariants}
                            whileHover={{ y: -10 }}
                            className="bg-white/95 backdrop-blur-md border border-white/50 p-6 rounded-[2.5rem] shadow-xl relative overflow-hidden group"
                        >
                            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                                <stat.icon size={60} />
                            </div>
                            <stat.icon className={`h-6 w-6 mb-4 ${stat.color === 'brand-gold' ? 'text-brand-gold' : 'text-brand-navy'}`} />
                            <h3 className="text-2xl font-display font-black text-brand-navy mb-1">{stat.value}</h3>
                            <p className="text-[10px] font-black uppercase tracking-widest text-brand-slate/60">{stat.label}</p>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Placement Trend Visual - Bar Graph */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="relative overflow-hidden mb-24 rounded-[3rem]"
                >
                    {/* Background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/80 via-white/70 to-white/90 backdrop-blur-xl" />
                    <div className="absolute -top-32 right-0 w-80 h-80 bg-blue-400/10 rounded-full blur-[120px]" />
                    <div className="absolute -bottom-32 left-0 w-80 h-80 bg-blue-200/20 rounded-full blur-[120px]" />

                    {/* Container */}
                    <div className="relative z-10 p-10 lg:p-14 border border-white/50 rounded-[3rem] shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
                        <div className="flex flex-col lg:flex-row gap-10 lg:items-end">
                            {/* LEFT SIDE */}
                            <div className="lg:w-1/4 space-y-4">
                                <h2 className="text-3xl lg:text-3xl font-black font-display text-brand-navy uppercase">
                                    SSLC <span className="text-brand-gold">Performance Trends</span>
                                </h2>
                                <p className="text-xs font-bold text-slate-500 uppercase tracking-[0.25em]">
                                    Top scorer percentage by academic year
                                </p>
                                <div className="h-1 w-16 bg-gradient-to-r from-brand-gold to-yellow-400 rounded-full" />
                            </div>

                            {/* CHART */}
                            <div className="flex-1 flex relative overflow-x-auto lg:overflow-x-visible pb-4 lg:pb-0 custom-scrollbar">
                                <div className="flex-1 flex min-w-[700px] lg:min-w-0 relative">
                                    {/* Y AXIS */}
                                    <div className="flex flex-col justify-between mr-4 h-72 text-[11px] font-bold text-brand-navy/60">
                                        <span>100%</span>
                                        <span>80%</span>
                                        <span>60%</span>
                                        <span>40%</span>
                                        <span>20%</span>
                                        <span>0%</span>
                                    </div>

                                    {/* GRAPH AREA */}
                                    <div className="flex-1 relative border-l-2 border-b-2 border-brand-navy/10 flex items-end justify-around px-2 lg:px-8 h-72">
                                        {/* GRID LINES */}
                                        {[100, 80, 60, 40, 20, 0].map((_, i) => (
                                            <div
                                                key={i}
                                                className="absolute left-0 right-0 border-t border-brand-navy/[0.05]"
                                                style={{ bottom: `${(i / 5) * 100}%` }}
                                            />
                                        ))}

                                        {/* BARS */}
                                        {placements.map((p, idx) => (
                                            <div
                                                key={idx}
                                                className="relative flex-1 flex flex-col items-center justify-end h-full px-1 lg:px-2 group max-w-[80px]"
                                            >
                                                {/* BAR */}
                                                <div className="relative w-full flex items-end justify-center h-full">
                                                    <motion.div
                                                        initial={{ height: 0, opacity: 0 }}
                                                        whileInView={{
                                                            height: `${(p.percentageValue / 100) * 100}%`,
                                                            opacity: 1
                                                        }}
                                                        transition={{
                                                            duration: 1,
                                                            delay: idx * 0.05,
                                                            ease: [0.22, 1, 0.36, 1]
                                                        }}
                                                        className="w-full relative rounded-t-2xl shadow-lg shadow-brand-gold/10 group-hover:shadow-brand-gold/30 transition-all duration-500 overflow-hidden"
                                                    >
                                                        {/* BAR GRADIENT */}
                                                        <div className="absolute inset-0 bg-gradient-to-b from-brand-gold via-brand-gold/90 to-brand-navy/80" />

                                                        {/* SHINE EFFECT */}
                                                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-[100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                                                    </motion.div>
                                                </div>

                                                {/* X AXIS LABEL */}
                                                <div className="absolute -bottom-10 flex flex-col items-center">
                                                    <div className="h-2 w-0.5 bg-brand-navy/20 mb-1" />
                                                    <span className="text-[9px] lg:text-[11px] font-black uppercase tracking-wider text-brand-navy whitespace-nowrap">
                                                        <span className="md:hidden">{p.year.split('-')[1]}</span>
                                                        <span className="hidden md:inline">{p.year}</span>
                                                    </span>
                                                </div>
                                            </div>
                                        ))}

                                        {/* X AXIS TITLE */}
                                        <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 hidden md:block">
                                            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-navy/60">
                                                Academic Year
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Year Cards Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24"
                >
                    {placements.map((yearPlac, idx) => (
                        <motion.div
                            key={idx}
                            variants={itemVariants}
                            whileHover={{ y: -10 }}
                            className="bg-white/95 backdrop-blur-md border border-white/50 p-8 rounded-[2.5rem] shadow-xl hover:shadow-2xl transition-all duration-500 relative group"
                        >
                            {/* Top-right glow effect */}
                            <div className="absolute -top-10 -right-10 w-32 h-32 bg-brand-gold/10 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                            <div className="relative z-10 space-y-6">
                                <div className="flex justify-between items-start">
                                    <div className="space-y-1">
                                        <span className="inline-block px-4 py-1.5 rounded-full bg-brand-navy text-white text-[9px] font-black tracking-widest uppercase mb-2">
                                            Academic Year {yearPlac.year}
                                        </span>
                                        <div className="flex items-baseline gap-2">
                                            <span className="text-3xl font-display font-black text-brand-navy">{yearPlac.percentage}</span>
                                            <span className="text-[10px] font-bold text-brand-slate uppercase tracking-tighter">Percentage</span>
                                        </div>
                                    </div>
                                    <div className="p-2.5 rounded-2xl bg-brand-gold/10 text-brand-gold text-sm">
                                        <GraduationCap size={18} />
                                    </div>
                                </div>

                                <div className="space-y-3">
                                    <h4 className="text-[10px] font-black uppercase tracking-widest text-brand-navy border-b border-brand-navy/5 pb-2">
                                        Topper
                                    </h4>
                                    <p className="text-sm font-black text-brand-navy uppercase tracking-tight">{yearPlac.topper}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* All Toppers Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center space-y-12 mb-12"
                >
                    <div className="space-y-4">
                        <h2 className="text-3xl lg:text-4xl font-display font-black uppercase italic tracking-tighter text-brand-navy leading-none">
                            Our SSLC <span className="text-brand-gold">Achievers</span>
                        </h2>
                        <p className="text-sm text-brand-slate max-w-xl mx-auto font-medium">
                            We are proud of our students who have consistently brought laurels to Sri Sai Vidyalaya through exceptional SSLC performance.
                        </p>
                    </div>

                    <div className="relative overflow-hidden bg-white/50 backdrop-blur-sm rounded-[3rem] p-10 border border-white/50">
                        <div className="flex flex-wrap justify-center gap-4 lg:gap-6">
                            {toppers.map((topperName, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: i * 0.03 }}
                                    whileHover={{ y: -5, scale: 1.05 }}
                                    className="px-6 py-4 rounded-2xl bg-white shadow-md border border-brand-navy/5 text-sm font-black text-brand-navy hover:text-brand-gold transition-all cursor-default"
                                >
                                    {topperName}
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Placement;
