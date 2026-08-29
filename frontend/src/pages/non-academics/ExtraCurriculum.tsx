import { CheckCircle2 } from "lucide-react";
import PageWrapper from "@/components/layout/PageWrapper";

const ExtraCurriculum = () => {
    return (
        <PageWrapper>
            <div className="space-y-24 py-10">

                {/* HERO SECTION */}
                <section className="relative h-[65vh] rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white">
                    <img
                        src="/computer_lab/bha-2.jpeg"
                        alt="Extra-Curricular Activities"
                        className="w-full h-full object-cover"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

                    <div className="absolute bottom-10 left-10 text-white space-y-4">
                        <p className="text-[10px] uppercase tracking-[0.4em] text-brand-gold font-black italic">
                            Beyond the Classroom
                        </p>

                        <h1 className="text-3xl md:text-5xl lg:text-7xl font-black italic uppercase text-white">
                            Extra-Curricular <span className="text-brand-gold">Activities</span>
                        </h1>

                        <p className="max-w-xl text-blue-100/80 text-sm md:text-lg">
                            Discover, express, learn, and grow through enriching activities beyond academics.
                        </p>
                    </div>
                </section>

                {/* INTRODUCTION SECTION */}
                <section className="container mx-auto px-6 max-w-4xl text-center space-y-6">
                    <h2 className="text-3xl md:text-5xl font-black text-brand-navy italic uppercase leading-tight">
                        Learn Beyond <span className="text-brand-gold">Academics.</span>
                    </h2>

                    <p className="text-slate-600 text-base md:text-lg leading-relaxed font-medium">
                        At SRI SAI VIDYALAYA, we believe that education extends beyond textbooks and classrooms. Extra-curricular activities provide students with opportunities to discover their interests, develop confidence, build discipline, and express themselves creatively.
                    </p>

                    <p className="text-slate-500 text-sm md:text-base leading-relaxed">
                        Through active participation in cultural, leadership, and service-oriented activities, students learn important life skills such as teamwork, responsibility, communication, perseverance, and self-confidence.
                    </p>

                    <div className="pt-2">
                        <span className="inline-block px-6 py-2.5 bg-brand-gold/10 border border-brand-gold/30 rounded-full text-brand-navy font-black text-xs md:text-sm uppercase tracking-widest font-display italic">
                            Every experience outside the classroom is an opportunity to learn, grow, and become a better version of oneself.
                        </span>
                    </div>
                </section>

                {/* BHARATANATYAM SECTION */}
                <section className="container mx-auto px-6 space-y-12">
                    <div className="text-center space-y-4">
                        <p className="text-xs uppercase tracking-[0.4em] text-brand-gold font-black italic">
                            Classical Dance & Cultural Heritage
                        </p>

                        <h2 className="text-3xl md:text-5xl font-black text-brand-navy italic uppercase">
                            Bharatanatyam — <span className="text-brand-gold">Rhythm, Expression & Tradition</span>
                        </h2>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Text & Feature List */}
                        <div className="space-y-6">
                            <p className="text-slate-600 text-base md:text-lg leading-relaxed font-medium">
                                Bharatanatyam is a classical Indian dance form that combines rhythm, expression, music, and storytelling. Learning Bharatanatyam helps students develop discipline, concentration, confidence, creativity, and appreciation for Indian culture and heritage. Through regular practice and performances, students get an opportunity to express themselves while preserving our rich cultural traditions.
                            </p>

                            <p className="text-slate-500 text-sm md:text-base leading-relaxed">
                                Regular practice encourages patience, dedication, body coordination, and attention to detail. Performances provide students with a platform to overcome stage fear, express emotions, and showcase their creativity with confidence.
                            </p>

                            <div className="grid sm:grid-cols-2 gap-4 pt-4">
                                {[
                                    "Discipline & Concentration",
                                    "Confidence & Expression",
                                    "Creativity & Coordination",
                                    "Cultural Awareness",
                                    "Stage Performance",
                                    "Appreciation of Heritage"
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-3 items-center bg-white p-4 rounded-xl border border-slate-100 shadow-sm hover:border-brand-gold/30 transition">
                                        <CheckCircle2 className="h-5 w-5 text-brand-gold flex-shrink-0" />
                                        <span className="text-xs font-bold text-brand-navy uppercase tracking-wider">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Two Images Showcase (Stacked Vertically, Landscape) */}
                        <div className="flex flex-col gap-6">
                            <div className="relative aspect-[16/9] rounded-[2rem] overflow-hidden shadow-xl border-4 border-white group">
                                <img
                                    src="/computer_lab/bha-1.jpeg"
                                    alt="Bharatanatyam Performance"
                                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                                />
                            </div>
                            <div className="relative aspect-[16/9] rounded-[2rem] overflow-hidden shadow-xl border-4 border-white group">
                                <img
                                    src="/computer_lab/bha-2.jpeg"
                                    alt="Bharatanatyam Practice"
                                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Bharatanatyam Highlight Card */}
                    <div className="bg-slate-50 p-8 rounded-[2.5rem] border border-slate-100 text-center space-y-3 max-w-4xl mx-auto shadow-sm">
                        <h3 className="text-xl font-black text-brand-navy uppercase italic">
                            Grace in Every Movement
                        </h3>
                        <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                            Bharatanatyam gives students a beautiful platform to connect with culture, express themselves through movement, and develop confidence through dedicated practice.
                        </p>
                    </div>
                </section>

                {/* SCOUTS & GUIDES SECTION */}
                <section className="container mx-auto px-6 space-y-12">
                    <div className="text-center space-y-4">
                        <p className="text-xs uppercase tracking-[0.4em] text-brand-gold font-black italic">
                            Leadership & Service
                        </p>

                        <h2 className="text-3xl md:text-5xl font-black text-brand-navy italic uppercase">
                            Scouts & Guides — <span className="text-brand-gold">Learning Through Service</span>
                        </h2>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Two Images Showcase (Stacked Vertically, Landscape) */}
                        <div className="flex flex-col gap-6 order-2 lg:order-1">
                            <div className="relative aspect-[16/9] rounded-[2rem] overflow-hidden shadow-xl border-4 border-white group">
                                <img
                                    src="/computer_lab/scout-2.jpeg"
                                    alt="Scouts and Guides Activity"
                                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                                />
                            </div>
                            <div className="relative aspect-[16/9] rounded-[2rem] overflow-hidden shadow-xl border-4 border-white group">
                                <img
                                    src="/computer_lab/scout-1.jpeg"
                                    alt="Students Participating in Scouts and Guides"
                                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                                />
                            </div>
                        </div>

                        {/* Text & Feature List */}
                        <div className="space-y-6 order-1 lg:order-2">
                            <p className="text-slate-600 text-base md:text-lg leading-relaxed font-medium">
                                Scouts and Guides is a youth development programme that encourages students to become responsible, disciplined, confident, and service-minded individuals. Through various activities, students learn teamwork, leadership, self-reliance, first aid, basic survival skills, and the importance of helping others.
                            </p>

                            <p className="text-slate-500 text-sm md:text-base leading-relaxed">
                                Participation in Scouts and Guides encourages students to take responsibility, work together, face challenges with confidence, and develop a strong spirit of service. These experiences help students become more independent, dependable, and prepared for real-life situations.
                            </p>

                            <p className="text-slate-500 text-sm md:text-base leading-relaxed">
                                Through practical activities, teamwork, outdoor learning, and community-oriented experiences, students develop qualities that support both personal growth and responsible citizenship.
                            </p>

                            <div className="grid sm:grid-cols-2 gap-4 pt-4">
                                {[
                                    "Leadership Skills",
                                    "Teamwork",
                                    "Self-Reliance",
                                    "First Aid Awareness",
                                    "Basic Survival Skills",
                                    "Discipline",
                                    "Service Mindset",
                                    "Responsibility"
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-3 items-center bg-white p-4 rounded-xl border border-slate-100 shadow-sm hover:border-brand-gold/30 transition">
                                        <CheckCircle2 className="h-5 w-5 text-brand-gold flex-shrink-0" />
                                        <span className="text-xs font-bold text-brand-navy uppercase tracking-wider">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Scouts & Guides Dark Highlight Card */}
                    <div className="bg-brand-navy text-white p-10 rounded-[2.5rem] relative overflow-hidden shadow-xl border-b-4 border-brand-gold max-w-4xl mx-auto text-center space-y-4">
                        <div className="absolute top-0 right-0 w-48 h-48 bg-brand-gold/10 blur-[60px] rounded-full" />
                        <h3 className="text-2xl font-black text-brand-gold uppercase italic">
                            Lead. Serve. Grow.
                        </h3>
                        <p className="text-blue-100/90 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
                            Scouts and Guides helps students develop the confidence to lead, the discipline to take responsibility, and the spirit to serve others.
                        </p>
                    </div>
                </section>

                {/* STUDENT DEVELOPMENT SECTION */}
                <section className="container mx-auto px-6 max-w-5xl">
                    <div className="bg-slate-50 rounded-[2.5rem] p-10 lg:p-14 space-y-10 border border-slate-100 shadow-inner">
                        <div className="text-center space-y-3">
                            <h2 className="text-3xl md:text-5xl font-black text-brand-navy italic uppercase">
                                Building Skills <span className="text-brand-gold">for Life</span>
                            </h2>
                            <p className="text-slate-500 text-sm md:text-base max-w-xl mx-auto">
                                Every activity contributes to a student's growth beyond the classroom.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                            {[
                                "Confidence",
                                "Discipline",
                                "Leadership",
                                "Creativity",
                                "Teamwork",
                                "Responsibility",
                                "Communication",
                                "Self-Reliance"
                            ].map((skill, i) => (
                                <div key={i} className="flex flex-col items-center justify-center p-6 bg-white rounded-2xl shadow-sm border border-slate-100 text-center gap-3 hover:border-brand-gold/40 hover:shadow-md transition">
                                    <CheckCircle2 className="text-brand-gold h-7 w-7" />
                                    <p className="text-sm font-black text-brand-navy uppercase tracking-wider">{skill}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* FINAL STATEMENT SECTION */}
                <section className="container mx-auto px-6 pb-10">
                    <div className="bg-brand-navy text-white rounded-[2.5rem] p-10 lg:p-16 relative overflow-hidden border-b-[6px] border-brand-gold shadow-xl">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold/10 blur-[80px] rounded-full" />

                        <div className="text-center space-y-6 max-w-4xl mx-auto">
                            <h2 className="text-3xl md:text-5xl font-black italic text-blue-100 uppercase">
                                Discover Your <span className="text-brand-gold">Potential</span>
                            </h2>

                            <p className="text-blue-100/80 text-sm md:text-base leading-relaxed">
                                At SRI SAI VIDYALAYA, extra-curricular activities are an important part of holistic education. Through dance, service, leadership, and creative experiences, students are encouraged to discover their strengths, develop life skills, and grow into confident and responsible individuals.
                            </p>

                            <div className="pt-4">
                                <span className="inline-block px-8 py-3 bg-brand-gold text-brand-navy font-black text-sm uppercase tracking-[0.3em] font-display italic rounded-full shadow-lg">
                                    Learn. Participate. Grow.
                                </span>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        </PageWrapper>
    );
};

export default ExtraCurriculum;
