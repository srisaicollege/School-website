import { Beaker, Library as LibraryIcon, Trophy, Utensils, Laptop, ChevronLeft, ChevronRight, CheckCircle2, Heart, Sparkles, ArrowRight, Volume2, VolumeX, Award, GraduationCap, Quote } from 'lucide-react';
import useEmblaCarousel from "embla-carousel-react";
import { useEffect, useCallback, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import PageWrapper from "@/components/layout/PageWrapper";
import DomeGallery from '@/components/animations/DomeGallery';
import BlurText from '@/components/animations/BlurTextProps';
import { containerVariants, itemVariants, viewportConfig } from "@/lib/motion";
import { useRef } from "react";

const heroImages = [
    {
        url: "/campus/campus-hero-2.jpeg",
        title: "SRI SAI VIDYALAYA",
        subtitle: "A Safe and Inspiring Learning Environment"
    },
    {
        url: "/campus/campus-hero-1.jpeg",
        title: "Smart Classrooms",
        subtitle: "Learning Through Innovation and Technology"
    },
    {
        url: "/campus/campus-hero-4.jpeg",
        title: "Knowledge Centre",
        subtitle: "Building Curious Minds Every Day"
    },
    {
        url: "/campus/campus-hero-3.jpeg",
        title: "Sports & Activities",
        subtitle: "Learning Beyond the Classroom"
    }
];

const Infrastructure = () => {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, duration: 40 });
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [isMobile, setIsMobile] = useState(false);

    const videoRef = useRef<HTMLVideoElement | null>(null);
    const [isMuted, setIsMuted] = useState(true);

    const toggleSound = () => {
        if (videoRef.current) {
            videoRef.current.muted = !videoRef.current.muted;
            setIsMuted(videoRef.current.muted);
        }
    };


    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
    const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

    const onSelect = useCallback(() => {
        if (!emblaApi) return;
        setSelectedIndex(emblaApi.selectedScrollSnap());
    }, [emblaApi]);

    useEffect(() => {
        if (!emblaApi) return;
        emblaApi.on("select", onSelect);
        onSelect();

        const interval = setInterval(() => {
            emblaApi.scrollNext();
        }, 6000);

        return () => clearInterval(interval);
    }, [emblaApi, onSelect]);



    return (
        <PageWrapper>
            <div className="flex flex-col space-y-16 md:space-y-24 pb-16 md:pb-24">
                {/* Standardized Hero Section */}
                <section className="relative h-screen w-full overflow-hidden group shadow-2xl">
                    <div className="absolute inset-0" ref={emblaRef}>
                        <div className="flex h-full">
                            {heroImages.map((slide, index) => (
                                <div key={index} className="min-w-full h-full relative">
                                    <img
                                        src={slide.url}
                                        alt={slide.title}
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-brand-navy/60" />
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6 text-white pointer-events-none">
                        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-3 mb-6 md:mb-8">
                            <div className="h-1 lg:h-1.5 w-12 bg-brand-gold rounded-full" />
                            <p className="text-brand-gold font-black text-[10px] md:text-xs tracking-[0.4em] uppercase font-display italic">Campus Excellence</p>
                        </motion.div>
                        <motion.h1
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="text-3xl md:text-6xl lg:text-8xl font-black font-display mb-6 md:mb-8 leading-tight tracking-tight italic text-white"
                        >
                            {heroImages[selectedIndex].title}
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0.8 }}
                            className="max-w-xl text-blue-100/60 text-[10px] md:text-xl font-bold uppercase tracking-[0.2em] font-display italic"
                        >
                            {heroImages[selectedIndex].subtitle}
                        </motion.p>
                    </div>

                    <div className="absolute bottom-6 left-0 right-0 md:bottom-12 md:right-12 md:left-auto z-20 flex flex-col md:flex-row items-center justify-center md:justify-end gap-6 md:gap-8 px-6 md:px-0">
                        <div className="flex gap-2">
                            {heroImages.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => emblaApi?.scrollTo(index)}
                                    className={`h-1 rounded-full transition-all duration-300 ${selectedIndex === index
                                        ? "w-10 bg-blue-500"
                                        : "w-4 bg-white/40 hover:bg-white/70"
                                        }`}
                                />
                            ))}
                        </div>
                        <div className="flex gap-2.5 md:ml-4">
                            <button onClick={scrollPrev} className="h-10 w-10 md:h-14 md:w-14 rounded-xl md:rounded-2xl border border-white/10 flex items-center justify-center hover:bg-white hover:text-brand-navy transition-all duration-500 backdrop-blur-md">
                                <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
                            </button>
                            <button onClick={scrollNext} className="h-10 w-10 md:h-14 md:w-14 rounded-xl md:rounded-2xl border border-white/10 flex items-center justify-center hover:bg-white hover:text-brand-navy transition-all duration-500 backdrop-blur-md">
                                <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
                            </button>
                        </div>
                    </div>
                </section>

                {/* Simplified Intro */}
                <motion.section
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportConfig}
                    variants={containerVariants}
                    className="container mx-auto px-6 max-w-5xl"
                >
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-8">
                            <motion.div variants={itemVariants} className="flex items-center gap-3">
                                <Sparkles className="h-5 w-5 text-brand-gold" />
                                <p className="text-brand-navy font-black text-xs tracking-[0.4em] uppercase font-display italic">
                                    Our Campus
                                </p>
                            </motion.div>

                            <motion.h2 className="text-4xl md:text-5xl lg:text-7xl font-black font-display text-brand-navy leading-tight italic uppercase">
                                A Campus Designed <span className="text-brand-gold">for Learning</span>
                            </motion.h2>

                            <motion.p className="text-slate-600 text-lg md:text-xl font-medium leading-relaxed font-display">
                                SRI SAI VIDYALAYA provides a safe, spacious, and student-friendly campus designed to encourage academic excellence, creativity, discipline, and holistic development. Every facility is created to support students in both learning and personal growth.
                            </motion.p>
                        </div>

                        <motion.div
                            variants={itemVariants}
                            className="relative aspect-video rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-xl border-4 border-white"
                        >
                            {/* VIDEO */}
                            <video
                                ref={videoRef}
                                className="w-full h-full object-cover"
                                autoPlay
                                loop
                                muted
                                playsInline
                            >
                                <source src="/video/college-video.mp4" type="video/mp4" />
                            </video>

                            {/* SOUND BUTTON */}
                            <button
                                onClick={toggleSound}
                                className="absolute bottom-4 right-4 bg-white/80 backdrop-blur-md p-3 rounded-xl shadow-lg border border-white/50 hover:scale-105 active:scale-95 transition"
                            >
                                {isMuted ? (
                                    <VolumeX className="h-5 w-5 text-brand-navy" />
                                ) : (
                                    <Volume2 className="h-5 w-5 text-brand-navy" />
                                )}
                            </button>
                        </motion.div>
                    </div>
                </motion.section>
                {/* Dome Gallery Section */}
                <section className="w-full relative py-12 md:py-24 bg-brand-navy overflow-hidden">
                    <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

                    <div className="container mx-auto px-6 text-center mb-12 md:mb-16 relative z-10 space-y-4 md:space-y-6">
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            className="text-brand-gold font-black text-[10px] md:text-xs tracking-[0.4em] uppercase font-display italic"
                        >
                            Campus Gallery
                        </motion.p>

                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-black font-display text-white italic uppercase">
                            <BlurText text="Campus Gallery" delay={150} animateBy="words" />
                        </h2>
                    </div>

                    <div className="w-full h-[400px] md:h-[600px] relative z-10">
                        <DomeGallery
                            images={[
                                "/gallery/g1.jpeg",
                                "/gallery/g2.jpeg",
                                "/gallery/g3.jpeg",
                                "/gallery/g4.jpeg",
                                "/gallery/g5.jpeg",
                                "/gallery/g6.jpeg",
                                "/gallery/g7.jpeg",
                                "/gallery/g8.jpeg",
                                "/gallery/g9.jpeg",
                                "/gallery/g10.jpeg",
                                "/gallery/g11.jpeg",
                                "/gallery/g12.jpeg",
                                "/gallery/g13.jpeg",
                                "/gallery/g14.jpeg",
                                "/gallery/g15.jpeg",
                                "/gallery/g16.jpeg",
                                "/gallery/g17.jpeg",
                                "/gallery/g18.jpeg",
                                "/gallery/g19.jpeg",
                                "/gallery/g20.jpeg",
                                "/gallery/g21.jpeg",
                                "/gallery/g22.jpeg",
                            ]}
                            fit={isMobile ? 0.9 : 0.7}
                            minRadius={isMobile ? 450 : 550}
                            maxVerticalRotationDeg={5}
                            segments={26}
                            dragDampening={1.2}
                            grayscale={false}
                            overlayBlurColor="var(--color-brand-navy)"
                        />
                    </div>
                </section>

                {/* Feature Sections - Immersive & Detailed */}
                <div className="text-center space-y-6 mb-16 md:mb-24 relative">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-brand-gold/5 rounded-full blur-[100px] pointer-events-none" />
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={viewportConfig}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-gold/10 text-brand-gold border border-brand-gold/20"
                    >
                        <Sparkles className="h-4 w-4" />
                        <span className="text-[10px] font-black uppercase tracking-[0.3em] font-display italic">Infrastructure Excellence</span>
                    </motion.div>
                    <h2 className="text-4xl md:text-6xl font-black font-display text-brand-navy italic uppercase text-center leading-none">
                        Our <span className="text-brand-gold">Facilities</span>
                    </h2>
                    <div className="h-1.5 w-24 bg-brand-gold mx-auto rounded-full mt-8" />
                </div>

                <section className="container mx-auto px-6 py-14 lg:py-20 relative overflow-hidden">

                    {/* Background Glow */}
                    <div className="absolute top-20 left-1/3 w-72 h-72 bg-brand-gold/10 rounded-full blur-[120px] pointer-events-none" />

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">

                        {/* LEFT CONTENT */}
                        <div className="space-y-10">

                            {/* Label */}
                            <div className="flex items-center gap-3">
                                <LibraryIcon className="h-5 w-5 text-brand-gold" />
                                <p className="text-brand-gold font-black text-xs tracking-[0.4em] uppercase font-display italic">
                                    Knowledge Hub
                                </p>
                            </div>

                            {/* Title */}
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black font-display text-brand-navy leading-[0.9] italic uppercase">
                                The <span className="text-brand-gold">Library</span>
                            </h2>

                            {/* Description */}
                            <div className="space-y-6">
                                <p className="text-slate-600 text-lg leading-relaxed font-display">
                                    Our school library provides students with a rich collection of textbooks, storybooks, reference materials, magazines, and educational resources that encourage reading habits and independent learning.
                                </p>

                                <p className="text-slate-500 text-base leading-relaxed font-display">
                                    The library offers a peaceful environment where students can improve their knowledge, develop research skills, and cultivate a lifelong love for reading.
                                </p>

                                <p className="text-slate-500 text-base leading-relaxed font-display">
                                    Students are encouraged to regularly utilize the library as an important part of their academic journey.
                                </p>

                            </div>

                            {/* Feature Pills */}
                            <div className="flex flex-wrap gap-3 pt-4">
                                {[
                                    "Story Books",
                                    "Reference Books",
                                    "Reading Corner",
                                    "Digital Learning",
                                ].map((item, i) => (
                                    <span
                                        key={i}
                                        className="px-4 py-2 bg-brand-gold/10 text-brand-gold text-xs font-bold uppercase tracking-widest rounded-full border border-brand-gold/20"
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* RIGHT VISUAL */}
                        <div className="space-y-6">

                            {/* Main Image */}
                            <div className="relative aspect-[4/3] rounded-[2rem] lg:rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white group">
                                <img
                                    src="/library/lib-1.jpeg"
                                    alt="Library"
                                    className="w-full h-full object-cover group-hover:scale-105 transition duration-[2s]"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                            </div>

                            {/* Secondary Row */}
                            <div className="grid grid-cols-2 gap-4">
                                <div className="aspect-[4/3] rounded-2xl overflow-hidden border-4 border-white shadow-lg">
                                    <img
                                        src="/library/lib-2.jpeg"
                                        alt="Library Interior"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="aspect-[4/3] rounded-2xl overflow-hidden border-4 border-white shadow-lg">
                                    <img
                                        src="/library/lib-3.jpeg"
                                        alt="Library Digital Section"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* BOTTOM FEATURE STRIP */}
                    <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

                        {[
                            "Extensive Book Collection",
                            "Reading Environment",
                            "Knowledge Resources",
                            "Student Learning",
                        ].map((item, i) => (
                            <div
                                key={i}
                                className="p-6 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition"
                            >
                                <div className="flex items-center gap-3">
                                    <CheckCircle2 className="h-5 w-5 text-brand-gold" />
                                    <p className="text-sm font-bold text-brand-navy font-display">
                                        {item}
                                    </p>
                                </div>
                            </div>
                        ))}

                    </div>

                </section>

                <section className="container mx-auto px-6 py-14 lg:py-20 relative overflow-hidden">

                    {/* Background Glow */}
                    <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-brand-gold/10 rounded-full blur-[120px] pointer-events-none" />

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">

                        {/* LEFT VISUAL (Dominant) */}
                        {/* LEFT VISUAL (Enhanced 5 Image Layout) */}
                        <div className="space-y-6">

                            {/* MAIN HERO IMAGE */}
                            <div className="relative aspect-[4/3] rounded-[2rem] lg:rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white group">
                                <img
                                    src="/computer_lab/computer-1.jpeg"
                                    alt="Laboratory Main"
                                    className="w-full h-full object-cover group-hover:scale-105 transition duration-[2s]"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                            </div>

                            {/* MIDDLE ROW (2 IMAGES) */}
                            <div className="grid grid-cols-2 gap-4">
                                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border-4 border-white shadow-lg group">
                                    <img
                                        src="/labs/lab-chem.jpeg"
                                        alt="Chem Lab"
                                        className="w-full h-full object-cover group-hover:scale-105 transition duration-[1.5s]"
                                    />
                                </div>

                                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border-4 border-white shadow-lg group">
                                    <img
                                        src="/labs/lab-phy.jpeg"
                                        alt="Physics Lab"
                                        className="w-full h-full object-cover group-hover:scale-105 transition duration-[1.5s]"
                                    />
                                </div>
                            </div>

                            {/* BOTTOM STRIP (2 SMALL IMAGES) */}
                            <div className="grid grid-cols-2 gap-4">
                                <div className="relative aspect-[4/3] rounded-xl overflow-hidden border-2 border-white shadow-md group">
                                    <img
                                        src="/labs/lab-bio.jpeg"
                                        alt="Bio Lab"
                                        className="w-full h-full object-cover group-hover:scale-110 transition duration-[1.2s]"
                                    />
                                </div>

                                <div className="relative aspect-[4/3] rounded-xl overflow-hidden border-2 border-white shadow-md group">
                                    <img
                                        src="/computer_lab/computer-2.jpeg"
                                        alt="Comp Lab"
                                        className="w-full h-full object-cover group-hover:scale-110 transition duration-[1.2s]"
                                    />
                                </div>
                            </div>

                        </div>

                        {/* RIGHT CONTENT */}
                        <div className="space-y-10">

                            {/* Label */}
                            <div className="flex items-center gap-3">
                                <Beaker className="h-5 w-5 text-brand-gold" />
                                <p className="text-brand-gold font-black text-xs tracking-[0.4em] uppercase font-display italic">
                                    Practical Learning
                                </p>
                            </div>

                            {/* Title */}
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black font-display text-brand-navy leading-[0.9] italic uppercase">
                                Modern <span className="text-brand-gold">Laboratories</span>
                            </h2>

                            {/* Description */}
                            <div className="space-y-6">
                                <p className="text-slate-600 text-lg leading-relaxed font-display">
                                    Our school provides well-equipped Science and Computer Laboratories that help students understand concepts through practical learning and experimentation.
                                </p>

                                <p className="text-slate-500 text-base leading-relaxed font-display">
                                    The Science Laboratories encourage curiosity, observation, and scientific thinking through hands-on activities conducted under teacher supervision.
                                </p>

                                <p className="text-slate-500 text-base leading-relaxed font-display">
                                    The Computer Laboratory introduces students to digital learning, programming fundamentals, internet awareness, and technology-based education.
                                </p>
                            </div>

                            {/* Departments Grid */}
                            <div className="grid grid-cols-2 gap-4 pt-4">
                                {["Physics Lab", "Chemistry Lab", "Biology Lab", "Computer Lab"].map((item, i) => (
                                    <div
                                        key={i}
                                        className="p-4 rounded-xl bg-slate-50 border border-slate-100 flex items-center gap-3 hover:border-brand-gold/30 transition"
                                    >
                                        <CheckCircle2 className="h-4 w-4 text-brand-gold" />
                                        <span className="text-xs font-black text-brand-navy uppercase tracking-widest font-display italic">
                                            {item}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* BOTTOM FEATURE STRIP */}
                    <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

                        {[
                            "Practical Learning",
                            "Science Experiments",
                            "Computer Education",
                            "Interactive Teaching",
                        ].map((item, i) => (
                            <div
                                key={i}
                                className="p-6 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition"
                            >
                                <div className="flex items-center gap-3">
                                    <CheckCircle2 className="h-5 w-5 text-brand-gold" />
                                    <p className="text-sm font-bold text-brand-navy font-display">
                                        {item}
                                    </p>
                                </div>
                            </div>
                        ))}

                    </div>

                </section>

                {/* VALUE ADDED COURSES (VAC) SECTION */}
                <section className="container mx-auto px-6 py-14 lg:py-20 relative overflow-hidden space-y-16">

                    {/* Background Glow */}
                    <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-brand-gold/10 rounded-full blur-[140px] pointer-events-none" />
                    <div className="absolute bottom-10 right-10 w-72 h-72 bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />

                    {/* 1. SECTION HEADER */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={viewportConfig}
                        variants={containerVariants}
                        className="text-center space-y-4 max-w-4xl mx-auto"
                    >
                        <motion.div variants={itemVariants} className="flex items-center justify-center gap-3">
                            <Sparkles className="h-5 w-5 text-brand-gold" />
                            <p className="text-brand-gold font-black text-xs tracking-[0.4em] uppercase font-display italic">
                                Beyond the Curriculum
                            </p>
                        </motion.div>

                        <motion.h2 variants={itemVariants} className="text-3xl md:text-5xl lg:text-6xl font-black font-display text-brand-navy leading-tight italic uppercase">
                            Value Added <span className="text-brand-gold">Courses</span>
                        </motion.h2>

                        <motion.p variants={itemVariants} className="text-slate-600 text-base md:text-lg leading-relaxed font-display max-w-3xl mx-auto">
                            At SRI SAI VIDYALAYA, learning goes beyond textbooks and classrooms. Our Value Added Courses give students opportunities to build practical skills, confidence, communication abilities, and awareness of the real-world requirements of tomorrow.
                        </motion.p>

                        <motion.div variants={itemVariants} className="pt-2 inline-block">
                            <span className="px-6 py-2.5 bg-brand-gold/10 border border-brand-gold/30 rounded-full text-brand-navy font-black text-xs md:text-sm uppercase tracking-[0.25em] font-display italic inline-flex items-center gap-2 shadow-sm">
                                <Award className="h-4 w-4 text-brand-gold" />
                                Skills Today, Success Tomorrow
                            </span>
                        </motion.div>
                    </motion.div>

                    {/* 2. INTRODUCTION CARD */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={viewportConfig}
                        variants={containerVariants}
                        className="max-w-4xl mx-auto"
                    >
                        <motion.div
                            variants={itemVariants}
                            className="bg-white p-8 md:p-10 rounded-[2.5rem] border border-slate-100 shadow-md relative overflow-hidden group hover:shadow-xl transition-all duration-500"
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-gold/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:bg-brand-gold/10 transition-colors" />
                            <div className="flex flex-col md:flex-row items-center gap-6 relative z-10">
                                <div className="h-16 w-16 bg-brand-navy/5 rounded-2xl flex items-center justify-center border border-brand-navy/10 text-brand-gold shrink-0">
                                    <GraduationCap className="h-8 w-8 text-brand-gold" />
                                </div>
                                <div className="space-y-2 text-center md:text-left">
                                    <h3 className="text-xl font-black font-display text-brand-navy italic uppercase tracking-tight">
                                        Understanding Value Added Courses (VAC)
                                    </h3>
                                    <p className="text-slate-600 text-sm md:text-base leading-relaxed font-display font-medium">
                                        A Value Added Course (VAC) is designed to provide students with knowledge and skills beyond their regular academic curriculum. It helps learners develop practical abilities, communication skills, confidence, and awareness of real-world requirements.
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* 3 & 4. INFOSYS SPRINGBOARD & EDUVATE FEATURE CARDS */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={viewportConfig}
                        variants={containerVariants}
                        className="space-y-12"
                    >
                        {/* INFOSYS SPRINGBOARD */}
                        <motion.div
                            variants={itemVariants}
                            className="bg-slate-50 rounded-[2.5rem] border border-slate-200/80 p-8 md:p-12 shadow-sm hover:shadow-md transition-all overflow-hidden"
                        >
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                                <div className="space-y-6">
                                    <div className="flex items-center gap-3">
                                        <div className="h-1 w-10 bg-brand-gold rounded-full" />
                                        <span className="text-xs font-black text-brand-navy uppercase tracking-widest font-display italic">
                                            Digital Reskilling Partner
                                        </span>
                                    </div>
                                    <h3 className="text-2xl md:text-4xl font-black font-display text-brand-navy italic uppercase">
                                        Infosys <span className="text-brand-gold">Springboard</span>
                                    </h3>
                                    <p className="text-slate-600 text-sm md:text-base leading-relaxed font-display">
                                        Infosys Springboard is a digital learning and reskilling platform from Infosys that provides learners with access to digital, emerging technology, professional, soft, and life-skills learning. In India, the platform supports learners from school students to lifelong learners and provides learning opportunities designed to develop future-ready skills.
                                    </p>
                                    <div className="flex flex-wrap gap-3 pt-2">
                                        {["Digital Learning", "Emerging Tech", "Life-Skills", "Future Ready"].map((tag, idx) => (
                                            <span key={idx} className="px-4 py-1.5 bg-white border border-slate-200 rounded-full text-xs font-bold text-brand-navy font-display">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border-4 border-white shadow-xl group">
                                    <img
                                        src="/computer_lab/spring.jpeg"
                                        alt="Infosys Springboard Certificate"
                                        className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                                        onError={(e) => {
                                            (e.currentTarget as HTMLElement).style.display = 'none';
                                            const parent = e.currentTarget.parentElement as HTMLElement;
                                            if (parent && !parent.querySelector('.placeholder-text')) {
                                                parent.classList.add('bg-brand-navy', 'flex', 'items-center', 'justify-center', 'p-6', 'text-center');
                                                const txt = document.createElement('p');
                                                txt.className = 'placeholder-text text-white font-bold font-display text-sm';
                                                txt.innerText = 'Infosys Springboard Certificate';
                                                parent.appendChild(txt);
                                            }
                                        }}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                </div>
                            </div>
                        </motion.div>

                        {/* EDUVATE */}
                        <motion.div
                            variants={itemVariants}
                            className="bg-white rounded-[2.5rem] border border-slate-200/80 p-8 md:p-12 shadow-sm hover:shadow-md transition-all overflow-hidden"
                        >
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border-4 border-white shadow-xl group order-2 lg:order-1">
                                    <img
                                        src="/computer_lab/eduvate.jpeg"
                                        alt="Eduvate Group Activity"
                                        className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                                        onError={(e) => {
                                            (e.currentTarget as HTMLElement).style.display = 'none';
                                            const parent = e.currentTarget.parentElement as HTMLElement;
                                            if (parent && !parent.querySelector('.placeholder-text')) {
                                                parent.classList.add('bg-brand-navy', 'flex', 'items-center', 'justify-center', 'p-6', 'text-center');
                                                const txt = document.createElement('p');
                                                txt.className = 'placeholder-text text-white font-bold font-display text-sm';
                                                txt.innerText = 'Eduvate Group Activity';
                                                parent.appendChild(txt);
                                            }
                                        }}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                </div>

                                <div className="space-y-6 order-1 lg:order-2">
                                    <div className="flex items-center gap-3">
                                        <div className="h-1 w-10 bg-brand-gold rounded-full" />
                                        <span className="text-xs font-black text-brand-navy uppercase tracking-widest font-display italic">
                                            Educational Support & Learning
                                        </span>
                                    </div>
                                    <h3 className="text-2xl md:text-4xl font-black font-display text-brand-navy italic uppercase">
                                        Edu<span className="text-brand-gold">vate</span>
                                    </h3>
                                    <p className="text-slate-600 text-sm md:text-base leading-relaxed font-display">
                                        Eduvate is an education-focused organization that works with schools and educational institutions to support structured learning and student development. Its programs include integrated school learning and preparation-oriented educational support, with an emphasis on strengthening students' foundations and developing their academic capabilities.
                                    </p>
                                    <div className="flex flex-wrap gap-3 pt-2">
                                        {["Structured Learning", "Academic Capability", "Foundation Building", "Integrated Support"].map((tag, idx) => (
                                            <span key={idx} className="px-4 py-1.5 bg-slate-50 border border-slate-200 rounded-full text-xs font-bold text-brand-navy font-display">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* 5. CERTIFICATE SHOWCASE */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={viewportConfig}
                        variants={containerVariants}
                        className="space-y-8"
                    >
                        <div className="text-center space-y-3">
                            <h3 className="text-2xl md:text-3xl font-black font-display text-brand-navy italic uppercase">
                                Course <span className="text-brand-gold">Certifications</span>
                            </h3>
                            <p className="text-slate-500 text-sm md:text-base max-w-2xl mx-auto font-display">
                                Recognized certifications earned by our students for completing value added courses.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                            {[
                                { path: "/computer_lab/certi-1.jpeg", alt: "Certificate 1" },
                                { path: "/computer_lab/certi-2.jpeg", alt: "Certificate 2" },
                                { path: "/computer_lab/certi-3.jpeg", alt: "Certificate 3" },
                            ].map((cert, idx) => (
                                <motion.div
                                    key={idx}
                                    variants={itemVariants}
                                    className="bg-white rounded-2xl md:rounded-3xl border border-slate-200/80 p-4 shadow-sm hover:shadow-xl transition-all duration-500 group overflow-hidden"
                                >
                                    <div className="relative aspect-[4/3] rounded-xl md:rounded-2xl overflow-hidden border-2 border-slate-100 bg-slate-50">
                                        <img
                                            src={cert.path}
                                            alt={cert.alt}
                                            className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                                            onError={(e) => {
                                                (e.currentTarget as HTMLElement).style.display = 'none';
                                                const parent = e.currentTarget.parentElement as HTMLElement;
                                                if (parent && !parent.querySelector('.placeholder-text')) {
                                                    parent.classList.add('bg-brand-navy', 'flex', 'items-center', 'justify-center', 'p-6', 'text-center');
                                                    const txt = document.createElement('p');
                                                    txt.className = 'placeholder-text text-white font-bold font-display text-xs';
                                                    txt.innerText = `${cert.alt} Showcase`;
                                                    parent.appendChild(txt);
                                                }
                                            }}
                                        />
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* 6. STUDENT LEARNING EXPERIENCES */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={viewportConfig}
                        variants={containerVariants}
                        className="space-y-10"
                    >
                        <div className="text-center space-y-3">
                            <h3 className="text-2xl md:text-4xl font-black font-display text-brand-navy italic uppercase">
                                Student <span className="text-brand-gold">Learning Experiences</span>
                            </h3>
                            <p className="text-slate-500 text-sm md:text-base max-w-2xl mx-auto font-display">
                                Hear how additional learning opportunities helped our students grow in knowledge, confidence, skills, and future readiness.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                            {[
                                {
                                    quote: "“Pursuing the course through Infosys Springboard was a valuable learning experience for me. It helped me improve my knowledge beyond the regular classroom curriculum. The course content was easy to understand and allowed me to learn at my own pace. Completing the course and receiving the certificate gave me a sense of achievement and encouraged me to continue learning new skills.”",
                                    label: " Learning Experience"
                                },
                                {
                                    quote: "“The course helped me understand the importance of developing skills along with academic knowledge. I gained useful insights and became more confident in expressing my thoughts and learning independently. The online learning experience also taught me how to manage my time and complete learning activities responsibly. I am grateful for the opportunity to pursue this course.”",
                                    label: " Confidence & Skill Development"
                                },
                                {
                                    quote: "“This course was a wonderful opportunity to explore a new area of learning. It helped me understand how additional skills can support my academic journey and future career. The certification motivated me to participate in more learning programs and improve myself continuously. I believe such courses help students become more confident, skilled, and future-ready.”",
                                    label: " Future Readiness"
                                }
                            ].map((item, idx) => (
                                <motion.div
                                    key={idx}
                                    variants={itemVariants}
                                    className="bg-white p-8 rounded-[2rem] border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col justify-between group"
                                >
                                    <div className="space-y-6">
                                        <Quote className="h-8 w-8 text-brand-gold/60 group-hover:text-brand-gold transition-colors" />
                                        <p className="text-slate-600 text-sm leading-relaxed font-display italic">
                                            {item.quote}
                                        </p>
                                    </div>
                                    <div className="pt-6 mt-6 border-t border-slate-100">
                                        <p className="text-xs font-black text-brand-gold font-display uppercase tracking-wider italic">
                                            {item.label}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </section>

                {/* AUDIO-VISUAL (AV) ROOM SECTION */}
                <section className="container mx-auto px-6 py-14 lg:py-20 relative overflow-hidden space-y-16">

                    {/* Background Glow */}
                    <div className="absolute top-1/4 left-10 w-72 h-72 bg-brand-gold/10 rounded-full blur-[120px] pointer-events-none" />
                    <div className="absolute bottom-0 right-10 w-80 h-80 bg-blue-500/5 rounded-full blur-[140px] pointer-events-none" />

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">

                        {/* LEFT VISUAL (2 Image Layout) */}
                        <div className="space-y-6">

                            {/* MAIN HERO IMAGE */}
                            <div className="relative aspect-[4/3] rounded-[2rem] lg:rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white group">
                                <img
                                    src="/computer_lab/av-1.jpeg"
                                    alt="Audio-Visual Room"
                                    className="w-full h-full object-cover group-hover:scale-105 transition duration-[2s]"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                            </div>

                            {/* SECONDARY IMAGE */}
                            <div className="relative aspect-[16/9] rounded-2xl overflow-hidden border-4 border-white shadow-lg group">
                                <img
                                    src="/computer_lab/av-2.jpeg"
                                    alt="Students Learning in the Audio-Visual Room"
                                    className="w-full h-full object-cover group-hover:scale-105 transition duration-[1.5s]"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                            </div>

                        </div>

                        {/* RIGHT CONTENT */}
                        <div className="space-y-8">

                            {/* Eyebrow Label */}
                            <div className="flex items-center gap-3">
                                <Volume2 className="h-5 w-5 text-brand-gold" />
                                <p className="text-brand-gold font-black text-xs tracking-[0.4em] uppercase font-display italic">
                                    Interactive Learning
                                </p>
                            </div>

                            {/* Title */}
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black font-display text-brand-navy leading-[0.95] italic uppercase">
                                Learning Through <span className="text-brand-gold">Vision & Sound</span>
                            </h2>

                            {/* Catchy Highlight Banner */}
                            <div className="p-4 bg-brand-navy/5 border-l-4 border-brand-gold rounded-r-xl">
                                <p className="text-brand-navy font-black text-xs md:text-sm uppercase tracking-wider font-display italic">
                                    "See It. Hear It. Understand It. Experience Learning Differently."
                                </p>
                            </div>

                            {/* Description Paragraphs */}
                            <div className="space-y-4 text-slate-600 text-sm md:text-base leading-relaxed font-display">
                                <p className="font-medium">
                                    Our Audio-Visual (AV) Room provides students with an engaging and interactive learning environment. Through educational videos, presentations, animations, and digital resources, students gain a better understanding of complex concepts. The AV room encourages visual learning, creativity, curiosity, and active participation, making classroom learning more interesting and effective.
                                </p>

                                <p className="text-slate-500">
                                    By combining visual, auditory, and digital learning resources, the AV Room helps teachers present concepts in a clear and engaging way. It provides students with opportunities to observe, explore, discuss, and connect classroom knowledge with real-world examples.
                                </p>

                                <p className="text-slate-500">
                                    From multimedia presentations and educational films to animated explanations and interactive digital content, the AV Room supports different learning styles and makes lessons more memorable.
                                </p>
                            </div>

                            {/* Feature Grid */}
                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                                {[
                                    "Educational Videos",
                                    "Digital Presentations",
                                    "Animated Learning",
                                    "Interactive Lessons",
                                    "Visual Learning",
                                    "Student Engagement"
                                ].map((item, i) => (
                                    <div
                                        key={i}
                                        className="p-3 rounded-xl bg-slate-50 border border-slate-100 flex items-center gap-2.5 hover:border-brand-gold/30 transition"
                                    >
                                        <CheckCircle2 className="h-4 w-4 text-brand-gold shrink-0" />
                                        <span className="text-[11px] font-black text-brand-navy uppercase tracking-wider font-display italic leading-tight">
                                            {item}
                                        </span>
                                    </div>
                                ))}
                            </div>

                        </div>
                    </div>

                    {/* LEARNING BENEFITS SECTION */}
                    <div className="mt-16 space-y-6">
                        <div className="text-center space-y-2">
                            <h3 className="text-xl md:text-2xl font-black font-display text-brand-navy italic uppercase">
                                Why <span className="text-brand-gold">AV-Based Learning?</span>
                            </h3>
                        </div>

                        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
                            {[
                                "Better Understanding",
                                "Visual & Interactive Learning",
                                "Improved Attention",
                                "Enhanced Creativity",
                                "Real-World Exposure",
                                "Active Participation"
                            ].map((benefit, i) => (
                                <div
                                    key={i}
                                    className="p-5 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:border-brand-gold/30 transition text-center flex flex-col items-center justify-center gap-2"
                                >
                                    <CheckCircle2 className="h-5 w-5 text-brand-gold" />
                                    <p className="text-xs font-bold text-brand-navy font-display leading-tight">
                                        {benefit}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                </section>
                <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={viewportConfig}
                        variants={containerVariants}
                        className="bg-brand-navy text-white rounded-[2.5rem] p-8 md:p-14 relative overflow-hidden border-b-[8px] border-brand-gold shadow-xl"
                    >
                        {/* Background Glow */}
                        <div className="absolute top-0 right-0 w-72 h-72 bg-brand-gold/10 rounded-full blur-[100px] pointer-events-none" />

                        <div className="relative z-10 text-center space-y-6 max-w-4xl mx-auto">
                            <p className="text-blue-100/90 text-base md:text-xl font-medium font-display leading-relaxed">
                                At Sri Sai Vidyalaya, we believe that education is not limited to academic achievement. By encouraging students to explore additional learning opportunities, we aim to nurture confident, skilled, responsible, and future-ready learners.
                            </p>

                            <div className="pt-2">
                                <span className="inline-block px-8 py-3 bg-brand-gold text-brand-navy font-black text-xs md:text-sm uppercase tracking-[0.3em] font-display italic rounded-full shadow-lg">
                                    Skills Today, Success Tomorrow
                                </span>
                            </div>
                        </div>
                    </motion.div>


                {/* Simplified Overview Grid */}
                <section className="bg-brand-navy py-16 md:py-24  relative overflow-hidden">
                    <div className="container mx-auto px-6 relative z-10">
                        <div className="text-center mb-12 md:mb-16 space-y-4">
                            <p className="text-brand-gold font-black text-xs tracking-[0.4em] uppercase font-display italic">Student Life</p>
                            <h2 className="text-4xl md:text-6xl font-black font-display text-white italic uppercase">Beyond <span className="text-brand-gold">Classrooms</span></h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {[
                                { title: 'Assembly Hall', icon: Trophy, desc: 'A spacious hall for school assemblies, cultural events, seminars, and celebrations.' },
                                { title: 'Smart Classrooms', icon: Laptop, desc: 'Technology-enabled classrooms that make learning engaging and interactive.' },
                                { title: 'Playground', icon: Utensils, desc: 'A safe outdoor space for sports, physical education, and recreation.' },
                                { title: 'Safe Campus', icon: Heart, desc: 'A secure campus with disciplined surroundings and student-friendly safety measures.' }
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={viewportConfig}
                                    variants={itemVariants}
                                    className="bg-white/5 p-8 rounded-[2rem] border border-white/10 hover:border-brand-gold/50 transition-all group"
                                >
                                    <div className="h-12 w-12 bg-white/10 text-brand-gold rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-gold group-hover:text-brand-navy transition-all">
                                        <item.icon className="h-5 w-5" />
                                    </div>
                                    <h4 className="font-black text-lg font-display text-white mb-2 uppercase italic tracking-tight">{item.title}</h4>
                                    <p className="text-blue-100/40 text-xs font-bold italic font-display leading-relaxed">{item.desc}</p>
                                </motion.div>
                            ))}
                        </div>

                        <div className="mt-16 text-center">
                            <Link to="/contact" className="inline-flex items-center gap-4 bg-brand-gold text-brand-navy font-black px-8 py-4 rounded-xl hover:bg-white transition-all text-xs tracking-widest uppercase italic shadow-xl">
                                Explore Our Campus <ArrowRight className="h-4 w-4" />
                            </Link>
                        </div>
                    </div>
                </section>
            </div>
        </PageWrapper>
    );
};

export default Infrastructure;
