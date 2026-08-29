import { useState } from 'react';
import { Search } from 'lucide-react';

const Faculty = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const facultyMembers = [
        {
            name: "Mrs. Manjula Mathad",
            qualification: "M.Sc., B.Ed.",
            designation: "Principal",
            achievements: "Dedicated Principal committed to academic excellence, student welfare, and holistic development. Provides strong leadership, promotes innovative teaching practices, and encourages a positive learning environment. Recipient of the Best Principal Award.",
            image: "/teachers/principal.jpeg"
        },
        {
            name: "Mrs. Soujanya",
            qualification: "M.Com., B.Ed.",
            designation: "Assistant Teacher",
            achievements: "Experienced English and EVS teacher with over 3 years of teaching experience. Passionate about building strong academic foundations and creating engaging classroom activities.",
            image: "/teachers/fact-18.jpeg"
        },
        {
            name: "Mrs. Shilpa",
            qualification: "M.A., B.Ed.",
            designation: "Assistant Teacher",
            achievements: "Experienced English teacher dedicated to interactive learning. Focuses on improving communication skills and overall student development.",
            image: "/teachers/fact-12.jpeg"
        },
        {
            name: "Mrs. Kumudha M.H.",
            qualification: "B.Sc. (NTT)",
            designation: "Assistant Teacher",
            achievements: "Dedicated teacher with 25 years of experience in early childhood education. Committed to creating a caring, safe, and motivating classroom environment.",
            image: "/teachers/fact-3.jpeg"
        },
        {
            name: "Mrs. Aarthi G. Patil",
            qualification: "B.Com., B.Ed. (Hindi)",
            designation: "Assistant Teacher",
            achievements: "Passionate Hindi teacher with 16 years of teaching experience. Encourages language proficiency through creative and student-centered learning methods.",
            image: "/teachers/fact-13.jpeg"
        },
        {
            name: "Mrs. Meeradevi",
            qualification: "M.Sc., B.Ed.",
            designation: "Assistant Teacher",
            achievements: "Science teacher with 15 years of experience. Promotes scientific thinking, practical learning, and active classroom participation.",
            image: "/teachers/fact-14.jpeg"
        },
        {
            name: "Mrs. Madhu",
            qualification: "B.Sc., B.Ed.",
            designation: "Assistant Teacher",
            achievements: "Experienced teacher with 7 years of service. Dedicated to creating an engaging learning environment and supporting every child's academic growth.",
            image: "/teachers/fact-15.jpeg"
        },
        {
            name: "Mrs. Sudha",
            qualification: "B.A., B.Ed.",
            designation: "Assistant Teacher",
            achievements: "Bachelor of Arts graduate with B.Ed. qualification and 3 years of teaching experience. Focuses on discipline, creativity, and student engagement.",
            image: "/teachers/fact-4.jpeg"
        },
        {
            name: "Mrs. Kalavathi",
            qualification: "M.A., B.Ed.",
            designation: "Assistant Teacher",
            achievements: "Dedicated Hindi teacher with over 15 years of experience. Committed to developing students' communication skills and confidence.",
            image: "/teachers/fact-7.jpeg"
        },
        {
            name: "Mrs. Vani K.S.",
            qualification: "M.A. (Political Science)",
            designation: "Assistant Teacher",
            achievements: "Experienced teacher with 5 years of teaching experience. Passionate about nurturing critical thinking, discipline, and academic excellence.",
            image: "/teachers/fact-8.jpeg"
        },
        {
            name: "Mrs. Saraswathi K.V.",
            qualification: "M.A., B.Ed.",
            designation: "Assistant Teacher",
            achievements: "Dedicated educator with over 27 years of teaching experience. Committed to holistic learning, moral values, and academic excellence.",
            image: "/teachers/fact-9.jpeg"
        },
        {
            name: "Mrs. Divyashree K.P.",
            qualification: "B.Com., MFM",
            designation: "Assistant Teacher",
            achievements: "Experienced teacher with over 12 years of service. Skilled in coordinating co-curricular activities and motivating students to achieve success. Awarded Best Coordinator by SOF and ITO.",
            image: "/teachers/fact-10.jpeg"
        },
        {
            name: "Mrs. Harshini",
            qualification: "B.A., NTT",
            designation: "Assistant Teacher",
            achievements: "Dedicated nursery teacher with over 4 years of experience. Skilled in classroom coordination, child-friendly activities, and holistic development.",
            image: "/teachers/fact-5.jpeg"
        },
        {
            name: "Mrs. Divya A.B.",
            qualification: "MBA (HR), NTT",
            designation: "Assistant Teacher",
            achievements: "Qualified teacher with MBA (HR) and NTT qualifications. Possesses HR experience and teaching expertise while effectively coordinating the nursery section.",
            image: "/teachers/fact-6.jpeg"
        },
        {
            name: "Mrs. Surabhi",
            qualification: "B.A., NTT",
            designation: "Assistant Teacher",
            achievements: "Assistant teacher with 9 years of nursery teaching experience and 1 year in primary education. Dedicated to creating a joyful learning environment.",
            image: "/teachers/fact-11.jpeg"
        },
        {
            name: "Mrs. Suvarna",
            qualification: "BCA, NTT",
            designation: "Assistant Teacher",
            achievements: "Qualified teacher with experience in nursery education and computer applications. Encourages technology-assisted learning and creativity.",
            image: "/teachers/fact-16.jpeg"
        },
        {
            name: "Mrs. Leela P.N.",
            qualification: "M.A., B.Ed.",
            designation: "Assistant Teacher",
            achievements: "Experienced Kannada teacher committed to instilling patriotism, discipline, and strong language skills among students.",
            image: "/teachers/fact-17.jpeg"
        },
        {
            name: "Mrs. Neela",
            qualification: "C.P.Ed.",
            designation: "Physical Education Teacher",
            achievements: "Physical Education teacher with 12 years of experience. Promotes fitness, teamwork, discipline, and healthy lifestyles.",
            image: "/teachers/fact-1.jpeg"
        },
        {
            name: "Mrs. Soni",
            qualification: "M.Sc. (Mathematics), B.Ed.",
            designation: "Assistant Teacher",
            achievements: "Mathematics teacher with 7 years of experience. Makes mathematics enjoyable through practical examples and interactive teaching.",
            image: "/teachers/fact-19.jpeg"
        },
        {
            name: "Mrs. Manjula K.B.",
            qualification: "M.Sc. (Zoology), B.Ed.",
            designation: "Assistant Teacher",
            achievements: "Experienced Science teacher with over 10 years of teaching experience. Dedicated to inspiring curiosity, scientific thinking, and academic excellence.",
            image: "/teachers/fact-2.jpeg"
        }
    ];

    const filteredFaculty = facultyMembers.filter(f =>
        f.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="flex flex-col">
            {/* Header */}
            <section className="bg-brand-navy text-white py-24 px-4 overflow-hidden relative">
                <div className="container mx-auto text-center space-y-6 relative z-10">
                    <h1 className="text-4xl md:text-5xl lg:text-7xl font-black font-display tracking-tight text-white">Our Faculty</h1>
                    <p className="text-xl text-brand-gold max-w-2xl mx-auto font-bold uppercase tracking-widest text-sm font-display">
                        Meet the exceptional educators and industry experts dedication to building the leaders of tomorrow.
                    </p>
                </div>
            </section>

            {/* Filters & Directory */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    {/* Controls */}
                    <div className="flex justify-center mb-16">
                        <div className="relative w-full max-w-xl mx-auto">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                            <input
                                type="text"
                                placeholder="Search faculty by name..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full h-14 pl-12 pr-4 rounded-2xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-gold/50 shadow-sm transition-all font-bold text-lg"
                            />
                        </div>
                    </div>

                    {/* Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredFaculty.map((f, i) => (
                            <div key={i} className="group bg-white rounded-3xl border border-slate-100 overflow-hidden hover:shadow-2xl transition-all duration-500 flex flex-col">

                                {/* IMAGE */}
                                <div className="aspect-[4/5] bg-slate-200 relative overflow-hidden">
                                    <img
                                        src={f.image}
                                        alt={f.name}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                    />

                                    {/* Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/90 via-brand-navy/40 to-transparent" />

                                    {/* NAME + ROLE */}
                                    <div className="absolute bottom-6 left-6 right-6 space-y-1">
                                        <div className="text-white text-xl font-black font-display tracking-tight">
                                            {f.name}
                                        </div>
                                        <div className="text-brand-gold text-xs font-black uppercase tracking-[0.2em]">
                                            {f.designation}
                                        </div>
                                    </div>
                                </div>

                                {/* DETAILS BELOW */}
                                <div className="p-6 space-y-5 flex-grow">

                                    {/* QUALIFICATION */}
                                    <div>
                                        <p className="text-[10px] uppercase tracking-widest text-brand-gold font-black mb-1">
                                            Qualification
                                        </p>
                                        <p className="text-sm font-bold text-brand-navy">
                                            {f.qualification}
                                        </p>
                                    </div>

                                    {/* ACHIEVEMENTS */}
                                    <div>
                                        <p className="text-[10px] uppercase tracking-widest text-brand-gold font-black mb-1">
                                            Highlights
                                        </p>
                                        <p className="text-sm text-slate-600 leading-relaxed italic">
                                            {f.achievements}
                                        </p>
                                    </div>

                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Faculty;
