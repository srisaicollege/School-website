import { motion } from 'framer-motion';
import { 
    PenTool, 
    Sparkles, 
    Award, 
    Shield, 
    Activity, 
    BookOpen, 
    Users, 
    ClipboardCheck, 
    Layers, 
    GraduationCap, 
    CheckCircle2, 
    School 
} from "lucide-react";
import PageWrapper from "@/components/layout/PageWrapper";
import { containerVariants, itemVariants, viewportConfig } from "@/lib/motion";

const committees = [
    {
        name: "Editorial Committee",
        icon: PenTool,
        color: "text-blue-600 bg-blue-50 border-blue-100",
        desc: "Responsible for publications, editorial activities, newsletters, and institutional documentation.",
        members: ["Smt. Manjula Mathad", "Smt. Divyashree", "Smt. Suvarna", "Miss. Nandhini", "Smt. K. V. Saraswathi", "Smt. Kalavathi"]
    },
    {
        name: "Spiritual Activities Committee",
        icon: Sparkles,
        color: "text-amber-600 bg-amber-50 border-amber-100",
        desc: "Organizes spiritual programs, value education activities, and cultural harmony initiatives.",
        members: ["Smt. Surabhi V", "Smt. Manjula K B", "Smt. A. Meeradevi", "Smt. P. N. Leelavathi", "Smt. Vani K S", "Smt. Soujanya D V"]
    },
    {
        name: "Cultural Committee",
        icon: Award,
        color: "text-pink-600 bg-pink-50 border-pink-100",
        desc: "Coordinates cultural festivals, competitions, celebrations, and student talent programs.",
        members: ["Smt. Divya", "Smt. A. Meeradevi", "Smt. Arthi G Patil", "Smt. Divya", "Smt. Shilpa S Sullad", "Smt. M. H. Kumudha"]
    },
    {
        name: "Discipline Committee",
        icon: Shield,
        color: "text-indigo-600 bg-indigo-50 border-indigo-100",
        desc: "Maintains discipline, student conduct, and a safe academic environment.",
        members: ["Smt. P. N. Leelavathi", "Smt. Divyashree", "Smt. Vani K S", "Smt. Manjula K B", "Smt. B. Neelamma", "Smt. M. H. Kumudha"]
    },
    {
        name: "Yoga & Sports Committee",
        icon: Activity,
        color: "text-emerald-600 bg-emerald-50 border-emerald-100",
        desc: "Promotes physical fitness, yoga, sports events, and student wellness.",
        members: ["Sri. Govindraj", "Smt. B. Neelamma", "Smt. Shilpa S Sullad", "Smt. Soni", "Smt. Soujanya D V", "Smt. Vani K S"]
    },
    {
        name: "Library & Reading Room Committee",
        icon: BookOpen,
        color: "text-teal-600 bg-teal-50 border-teal-100",
        desc: "Oversees library management, reading facilities, and academic resources.",
        members: ["Smt. Soni", "Smt. Arthi G Patil", "Smt. Suvarna", "Smt. M. Kalavathi", "Smt. Harshini", "Smt. P. N. Leelavathi"]
    },
    {
        name: "Students Welfare Committee",
        icon: Users,
        color: "text-rose-600 bg-rose-50 border-rose-100",
        desc: "Supports student wellbeing, counseling, welfare initiatives, and overall development.",
        members: ["Smt. K. V. Saraswathi", "Smt. Soni", "Smt. Shilpa S Sullad", "Smt. M. H. Kumudha", "Smt. Surabhi V", "Smt. B. Neelamma"]
    },
    {
        name: "Tests & Examinations Committee",
        icon: ClipboardCheck,
        color: "text-cyan-600 bg-cyan-50 border-cyan-100",
        desc: "Plans examinations, internal assessments, and academic evaluation activities.",
        members: ["Smt. M. Kalavathi", "Smt. Manjula K B", "Smt. Arthi G Patil", "Smt. Soujanya D V", "Smt. B. Neelamma", "Miss. Sudha"]
    },
    {
        name: "Wall Magazines & Publications Committee",
        icon: Layers,
        color: "text-violet-600 bg-violet-50 border-violet-100",
        desc: "Encourages student creativity through wall magazines, publications, and literary activities.",
        members: ["Smt. Surabhi V", "Smt. Harshini", "Smt. Suvarna", "Miss. Sudha", "Smt. Divya", "Miss. Nandhini"]
    },
    {
        name: "Seminar & Workshop Committee",
        icon: GraduationCap,
        color: "text-sky-600 bg-sky-50 border-sky-100",
        desc: "Organizes seminars, guest lectures, FDPs, workshops, and academic enrichment programs.",
        members: ["Smt. K. V. Saraswathi", "Smt. Manjula K B", "Miss. Nandhini", "Smt. A. Meeradevi", "Smt. Divyashree", "Smt. Harshini"]
    }
];

const responsibilities = [
    { title: "Academic Administration", icon: GraduationCap },
    { title: "Student Welfare", icon: Users },
    { title: "Discipline & Ethics", icon: Shield },
    { title: "Library Services", icon: BookOpen },
    { title: "Cultural Development", icon: Award },
    { title: "Sports & Yoga", icon: Activity },
    { title: "Publications", icon: PenTool },
    { title: "Workshops & Seminars", icon: Sparkles },
    { title: "Examination Management", icon: ClipboardCheck },
    { title: "Institutional Development", icon: School }
];

const Nss = () => {
    return (
        <PageWrapper>
            <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-20 lg:space-y-24 py-8 sm:py-10 lg:py-12">
                
                {/* HERO SECTION */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportConfig}
                    variants={containerVariants}
                    className="relative"
                >
                    <div className="absolute -top-10 -left-10 w-32 sm:w-40 h-32 sm:h-40 bg-brand-gold/5 rounded-full blur-3xl opacity-50" />

                    <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16 relative z-10">
                        {/* TEXT */}
                        <div className="flex-1 space-y-6 text-center lg:text-left">
                            <motion.div
                                variants={itemVariants}
                                className="flex items-center justify-center lg:justify-start gap-3"
                            >
                                <div className="h-1 w-10 bg-brand-gold rounded-full" />
                                <p className="text-brand-navy font-black text-[10px] sm:text-xs tracking-[0.3em] uppercase font-display italic">
                                    Academic Administration
                                </p>
                            </motion.div>

                            <motion.h1
                                variants={itemVariants}
                                className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black font-display text-brand-navy leading-tight tracking-tight italic uppercase"
                            >
                                College <span className="text-brand-gold">Committees</span>
                            </motion.h1>

                            <motion.p
                                variants={itemVariants}
                                className="text-slate-600 text-base sm:text-lg leading-relaxed font-display max-w-xl mx-auto lg:mx-0 font-medium"
                            >
                                Our committees play a vital role in maintaining academic excellence, discipline, student welfare, and holistic institutional development. Every committee is dedicated to ensuring the smooth functioning of college activities while fostering an enriching learning environment.
                            </motion.p>
                        </div>

                        {/* ILLUSTRATION CARD */}
                        <motion.div
                            variants={itemVariants}
                            className="w-full max-w-md lg:max-w-xl mx-auto"
                        >
                            <div className="aspect-[4/3] sm:aspect-[3/2] lg:aspect-[4/3] rounded-[2rem] lg:rounded-[3rem] bg-brand-navy p-10 flex flex-col justify-center items-center text-center border-4 sm:border-6 lg:border-8 border-white shadow-2xl relative group overflow-hidden">
                                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(234,179,8,0.1),transparent)] pointer-events-none" />
                                <GraduationCap className="h-24 w-24 text-brand-gold mb-6 group-hover:scale-110 transition-transform duration-500" />
                                <p className="text-white/60 text-xs font-black tracking-widest uppercase mb-2">Sri Sai Vidyalaya</p>
                                <p className="text-blue-100 font-display font-black text-xl italic uppercase">Academic Governance</p>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>

                {/* ABOUT COMMITTEES INFO CARD */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportConfig}
                    variants={containerVariants}
                    className="relative group"
                >
                    <div className="absolute -inset-1 bg-gradient-to-r from-brand-navy to-brand-gold rounded-[2.5rem] blur opacity-10 group-hover:opacity-20 transition duration-1000"></div>
                    <div className="relative p-8 lg:p-12 bg-white rounded-[2.5rem] border border-gray-100 shadow-sm space-y-8">
                        <div className="space-y-4">
                            <h2 className="text-2xl font-black text-brand-navy uppercase italic flex items-center gap-3">
                                <School className="h-8 w-8 text-brand-gold" />
                                Institutional Responsibilities
                            </h2>
                            <p className="text-gray-600 text-base sm:text-lg leading-relaxed font-medium font-display">
                                Various committees are constituted every academic year to oversee different institutional responsibilities including academics, student welfare, discipline, cultural development, library services, examinations, workshops, publications, and extracurricular activities.
                            </p>
                        </div>

                        {/* Feature Chips */}
                        <div className="flex flex-wrap gap-3 pt-2">
                            {[
                                "Academic Excellence",
                                "Student Development",
                                "Institutional Governance",
                                "Holistic Growth"
                            ].map((chip, i) => (
                                <span
                                    key={i}
                                    className="px-5 py-2.5 bg-brand-navy/5 border border-brand-navy/10 rounded-full text-xs font-bold text-brand-navy uppercase tracking-wider"
                                >
                                    {chip}
                                </span>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* School COMMITTEES GRID */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportConfig}
                    variants={containerVariants}
                    className="space-y-10"
                >
                    <motion.div variants={itemVariants} className="text-center space-y-4">
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black font-display text-brand-navy uppercase italic">
                            Committees & <span className="text-brand-gold">Members</span>
                        </h2>
                        <p className="text-slate-500 max-w-xl mx-auto">
                            Committed faculty members leading different areas of governance.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {committees.map((c, i) => {
                            const IconComp = c.icon;
                            return (
                                <motion.div
                                    key={i}
                                    variants={itemVariants}
                                    whileHover={{ y: -8 }}
                                    className="bg-white p-8 rounded-[2.5rem] border border-gray-100 hover:border-brand-gold/30 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between"
                                >
                                    <div className="space-y-6">
                                        <div className={`h-14 w-14 rounded-2xl flex items-center justify-center border shadow-sm ${c.color}`}>
                                            <IconComp className="h-6 w-6" />
                                        </div>

                                        <div className="space-y-3">
                                            <h3 className="font-black text-brand-navy text-lg uppercase italic font-display leading-tight">
                                                {c.name}
                                            </h3>
                                            <p className="text-slate-500 text-xs leading-relaxed font-display">
                                                {c.desc}
                                            </p>
                                        </div>

                                        <div className="space-y-3 pt-2">
                                            <h4 className="text-[10px] font-black uppercase tracking-widest text-brand-navy border-b border-brand-navy/5 pb-2">
                                                Committee Members
                                            </h4>
                                            <ul className="space-y-1.5">
                                                {c.members.map((member, mIdx) => (
                                                    <li key={mIdx} className="flex items-center gap-2.5 text-slate-600">
                                                        <span className="text-xs font-black text-brand-gold font-display">{mIdx + 1}.</span>
                                                        <span className="text-xs font-semibold font-display">{member}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </motion.div>

                {/* COMMITTEE RESPONSIBILITIES */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportConfig}
                    variants={containerVariants}
                    className="space-y-10"
                >
                    <motion.div variants={itemVariants} className="text-center space-y-4">
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black font-display text-brand-navy uppercase italic">
                            Committee <span className="text-brand-gold">Responsibilities</span>
                        </h2>
                        <p className="text-slate-500 max-w-xl mx-auto">
                            Key domains managed through systematic committee governance.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
                        {responsibilities.map((resp, i) => {
                            const RespIcon = resp.icon;
                            return (
                                <motion.div
                                    key={i}
                                    variants={itemVariants}
                                    className="p-6 bg-white border border-gray-100 rounded-3xl flex flex-col items-center text-center space-y-4 hover:shadow-md transition-shadow"
                                >
                                    <div className="h-12 w-12 bg-blue-50 text-brand-gold rounded-2xl flex items-center justify-center border border-blue-100">
                                        <RespIcon className="h-5 w-5" />
                                    </div>
                                    <h4 className="font-black text-xs text-brand-navy uppercase font-display leading-tight">{resp.title}</h4>
                                </motion.div>
                            );
                        })}
                    </div>
                </motion.div>

                {/* OUR COMMITMENT SECTION */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportConfig}
                    variants={containerVariants}
                    className="bg-brand-navy text-white rounded-[2.5rem] p-10 lg:p-16 overflow-hidden relative border-b-[8px] border-brand-gold shadow-xl group"
                >
                    {/* Background decorations */}
                    <div className="absolute top-0 right-0 w-96 h-96 bg-brand-gold/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 group-hover:translate-x-1/3 transition-transform duration-1000 pointer-events-none" />
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-600/10 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2 pointer-events-none" />

                    <div className="relative z-10 flex flex-col lg:flex-row gap-10 items-center">
                        <div className="flex-1 space-y-8 text-center lg:text-left">
                            <div className="inline-flex items-center gap-3 px-4 py-2 bg-white/5 rounded-full border border-white/10">
                                <CheckCircle2 className="h-4 w-4 text-brand-gold" />
                                <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">Institutional Governance</span>
                            </div>
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl text-blue-100 font-black font-display tracking-tight leading-[1.1] uppercase italic">
                                Working Together for <br />
                                <span className="text-brand-gold italic">Academic Excellence</span>
                            </h2>
                            <p className="text-gray-300 text-base sm:text-lg leading-relaxed max-w-2xl font-medium font-display">
                                Our committees work collaboratively to ensure quality education, student development, institutional discipline, and continuous improvement. Through collective leadership and dedicated faculty members, the college strives to create an inspiring academic environment.
                            </p>
                        </div>
                    </div>
                </motion.div>

            </div>
        </PageWrapper>
    );
};

export default Nss;
