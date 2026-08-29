import { BookOpen, School, ShieldCheck, Users, ClipboardCheck, Award, CheckCircle2, Clock, Bell, FileText, Sparkles, GraduationCap } from 'lucide-react';
import { motion, type Variants } from 'framer-motion';

const AntiRagging = () => {
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: "easeOut" }
        }
    };

    return (
        <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="space-y-16 pb-20"
        >
            {/* Hero Section */}
            <motion.div variants={itemVariants} className="space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-100 rounded-full">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-navy"></span>
                    </span>
                    <p className="text-brand-navy font-bold text-[10px] tracking-[0.2em] uppercase">DISCIPLINE • RESPONSIBILITY • RESPECT</p>
                </div>
                <h1 className="text-5xl lg:text-7xl font-black text-brand-navy leading-[1.1] tracking-tight italic uppercase">
                    Discipline & <br />
                    <span className="text-brand-gold">Code of Conduct</span>
                </h1>
                <p className="text-gray-500 text-lg lg:text-xl max-w-3xl leading-relaxed font-medium">
                    Sri Sai Vidyalaya believes that discipline, punctuality, respect, and good character are essential for academic excellence and holistic development. Every student is expected to maintain high standards of conduct both inside and outside the school campus.
                </p>
            </motion.div>

            {/* Attendance Policy */}
            <motion.div variants={itemVariants} className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-brand-navy to-brand-gold rounded-[2.5rem] blur opacity-10 group-hover:opacity-20 transition duration-1000"></div>
                <div className="relative p-8 lg:p-12 bg-white rounded-[2.5rem] border border-gray-100 shadow-sm space-y-6">
                    <h2 className="text-2xl font-black text-brand-navy flex items-center gap-3 italic uppercase">
                        <FileText className="text-brand-gold h-8 w-8" />
                        Attendance Policy
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                        {[
                            "Attendance for all class tests and terminal examinations is compulsory.",
                            "Performance in examinations may be considered for promotion.",
                            "Students should attend classes regularly.",
                            "Any unavoidable absence must be informed to the Class Teacher or Principal through a leave letter.",
                            "Long absence due to illness must be supported by a Medical Certificate submitted within one week.",
                            "Scholarship benefits may be withheld if attendance, progress, or conduct is unsatisfactory."
                        ].map((item, i) => (
                            <div key={i} className="flex gap-4 p-4 bg-gray-50 rounded-2xl border border-gray-100 shadow-sm">
                                <div className="mt-1 h-2 w-2 rounded-full bg-brand-gold shrink-0" />
                                <p className="text-slate-600 text-sm font-bold font-display leading-relaxed italic">{item}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </motion.div>

            {/* Classroom Discipline & Assembly */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Classroom Discipline */}
                <motion.div variants={itemVariants} className="p-10 bg-brand-navy text-white rounded-[2.5rem] flex flex-col justify-between space-y-8">
                    <div className="space-y-4">
                        <div className="h-16 w-16 bg-brand-gold rounded-2xl flex items-center justify-center shadow-lg shadow-yellow-500/20">
                            <BookOpen className="h-8 w-8 text-brand-navy" />
                        </div>
                        <h2 className="text-3xl font-black tracking-tight text-blue-200 italic uppercase">Classroom Discipline</h2>
                        <p className="text-gray-300 text-base font-medium leading-relaxed">
                            Maintaining decorum inside the classroom is essential for a productive learning environment.
                        </p>
                    </div>
                    <ul className="space-y-4">
                        {[
                            "Students must remain inside classrooms except during the interval.",
                            "During emergencies, permission must be obtained from the teacher or Principal before leaving.",
                            "Students should not leave the classroom before the end of the session.",
                            "Students must maintain silence and discipline during classes.",
                            "Students should move quietly between classrooms without disturbing others.",
                            "Class Prefects are responsible for cleanliness and order during the teacher's temporary absence."
                        ].map((item, i) => (
                            <li key={i} className="flex items-start gap-3 text-sm font-bold text-gray-200 leading-snug">
                                <span className="h-1.5 w-1.5 bg-brand-gold rounded-full mt-1.5 shrink-0" />
                                {item}
                            </li>
                        ))}
                    </ul>
                </motion.div>

                {/* Morning Assembly & Uniform */}
                <motion.div variants={itemVariants} className="p-10 bg-white border border-gray-100 rounded-[2.5rem] flex flex-col justify-between space-y-8 shadow-sm">
                    <div className="space-y-4">
                        <div className="h-16 w-16 bg-blue-50 text-brand-navy rounded-2xl flex items-center justify-center border border-blue-100">
                            <Bell className="h-8 w-8 text-brand-gold" />
                        </div>
                        <h2 className="text-3xl font-black tracking-tight text-brand-navy italic uppercase">Morning Assembly & Uniform</h2>
                        <p className="text-slate-500 text-base font-medium leading-relaxed">
                            Assembly serves as the spiritual and communal start of the school day.
                        </p>
                    </div>
                    <ul className="space-y-4">
                        {[
                            "Students should assemble promptly when the bell rings.",
                            "Discipline and reverence must be maintained during prayer.",
                            "Students should wear the prescribed school uniform every day.",
                            "Any exemption requires prior permission from the Principal.",
                            "Students should proceed to classrooms in an orderly manner after assembly."
                        ].map((item, i) => (
                            <li key={i} className="flex items-start gap-3 text-sm font-bold text-slate-600 leading-snug">
                                <span className="h-1.5 w-1.5 bg-brand-navy rounded-full mt-1.5 shrink-0" />
                                {item}
                            </li>
                        ))}
                    </ul>
                </motion.div>
            </div>

            {/* Student Conduct Grid */}
            <motion.div variants={itemVariants} className="space-y-8">
                <div className="text-center space-y-4">
                    <h2 className="text-3xl font-black text-brand-navy italic uppercase">Student <span className='text-brand-gold'>Conduct</span></h2>
                    <p className="text-gray-500 font-medium max-w-2xl mx-auto">We expect our students to represent the values and standards of Sri Sai Vidyalaya.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                        { icon: Users, title: "Respect", desc: "Respect teachers, staff and fellow students." },
                        { icon: Sparkles, title: "Cleanliness", desc: "Maintain cleanliness throughout the campus." },
                        { icon: Clock, title: "Punctuality", desc: "Be punctual." },
                        { icon: BookOpen, title: "Politeness", desc: "Speak politely." },
                        { icon: ShieldCheck, title: "Hygiene", desc: "Maintain personal hygiene." },
                        { icon: School, title: "Care for Property", desc: "Protect school property." },
                        { icon: ClipboardCheck, title: "Compliance", desc: "Follow school rules at all times." },
                        { icon: Award, title: "Integrity", desc: "Show honesty, responsibility and integrity." }
                    ].map((item, i) => (
                        <div key={i} className="p-6 bg-white border border-gray-100 rounded-3xl space-y-4 hover:shadow-md transition-shadow">
                            <div className="h-12 w-12 bg-blue-50 rounded-2xl flex items-center justify-center border border-blue-100 text-brand-gold">
                                <item.icon className="h-6 w-6" />
                            </div>
                            <h3 className="font-black text-brand-navy text-base leading-none uppercase italic">{item.title}</h3>
                            <p className="text-sm font-bold text-slate-500 leading-snug italic font-display">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </motion.div>

            {/* Care for School Property & Expected Behaviour */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* School Property */}
                <motion.div variants={itemVariants} className="p-10 bg-white border border-gray-100 rounded-[2.5rem] flex flex-col justify-between space-y-6 shadow-sm">
                    <div className="space-y-4">
                        <div className="h-16 w-16 bg-blue-50 text-brand-navy rounded-2xl flex items-center justify-center border border-blue-100">
                            <School className="h-8 w-8 text-brand-gold" />
                        </div>
                        <h2 className="text-3xl font-black tracking-tight text-brand-navy italic uppercase">Care for School Property</h2>
                        <p className="text-slate-600 text-base font-bold leading-relaxed italic font-display">
                            Students are expected to use all school facilities responsibly. Any damage caused intentionally or through negligence must be compensated by the student responsible.
                        </p>
                    </div>
                </motion.div>

                {/* General Behaviour */}
                <motion.div variants={itemVariants} className="p-10 bg-brand-navy text-white rounded-[2.5rem] flex flex-col justify-between space-y-6">
                    <div className="space-y-4">
                        <div className="h-16 w-16 bg-brand-gold rounded-2xl flex items-center justify-center shadow-lg shadow-yellow-500/20">
                            <CheckCircle2 className="h-8 w-8 text-brand-navy" />
                        </div>
                        <h2 className="text-3xl font-black tracking-tight text-blue-200 italic uppercase">Expected Behaviour</h2>
                        <ul className="space-y-2">
                            {[
                                "No running in corridors.",
                                "No shouting during class hours.",
                                "No littering.",
                                "No bullying.",
                                "Respect everyone.",
                                "Maintain discipline during school activities.",
                                "Follow instructions from teachers immediately."
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-sm font-bold text-gray-200">
                                    <span className="h-1.5 w-1.5 bg-brand-gold rounded-full shrink-0" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </motion.div>
            </div>

            {/* Disciplinary Action Section */}
            <motion.div variants={itemVariants} className="bg-brand-navy rounded-[3rem] p-8 lg:p-16 text-white relative overflow-hidden shadow-2xl shadow-blue-950/40">
                <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                <div className="relative z-10 space-y-12">
                    <div className="space-y-6 max-w-4xl">
                        <div className="inline-flex items-center gap-3 px-4 py-2 bg-white/10 rounded-full backdrop-blur-md">
                            <ShieldCheck className="h-5 w-5 text-brand-gold" />
                            <span className="text-xs font-black uppercase tracking-widest text-brand-gold">Disciplinary Measures</span>
                        </div>
                        <h2 className="text-4xl lg:text-6xl font-black tracking-tight leading-[1.1] italic uppercase">Disciplinary Measures</h2>
                        <div className="h-1 w-32 bg-brand-gold rounded-full opacity-30" />
                        <p className="text-xl lg:text-2xl font-black text-blue-200 leading-relaxed italic">
                            Serious misconduct inside or outside the school premises that affects the reputation or discipline of the institution may invite appropriate disciplinary action depending on the severity of the offence.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                        {[
                            { icon: Clock, label: "Verbal warning" },
                            { icon: ClipboardCheck, label: "Written warning" },
                            { icon: Users, label: "Parent meeting" },
                            { icon: GraduationCap, label: "Suspension" },
                            { icon: School, label: "Other disciplinary action as decided by the school authorities" },
                        ].map((action, i) => (
                            <div key={i} className="bg-white/5 backdrop-blur-md p-6 rounded-[2rem] border border-white/10 hover:bg-white/10 transition-colors flex flex-col justify-between">
                                <action.icon className="h-8 w-8 mb-4 text-brand-gold opacity-80" />
                                <p className="font-bold text-sm text-blue-100 leading-tight italic">{action.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </motion.div>

            {/* Closing Section */}
            <motion.div variants={itemVariants} className="bg-brand-navy text-white p-12 lg:p-20 rounded-[4rem] relative overflow-hidden text-center space-y-10 group border-b-[8px] border-brand-gold">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-navy via-brand-navy to-black opacity-50" />
                <div className="absolute -top-24 -left-24 w-96 h-96 bg-brand-gold/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />

                <div className="relative z-10 space-y-6 max-w-3xl mx-auto">
                    <h2 className="text-3xl lg:text-5xl text-blue-100 italic uppercase">Our <span className='text-brand-gold'>Commitment</span></h2>
                    <p className="text-gray-300 text-lg leading-relaxed font-bold italic font-display">
                        Sri Sai Vidyalaya is committed to nurturing disciplined, responsible, respectful, and confident students in a safe, positive, and value-based learning environment. Every student shares the responsibility of maintaining the dignity and reputation of the institution.
                    </p>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default AntiRagging;
