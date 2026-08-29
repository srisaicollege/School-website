import { Link } from "react-router-dom";
import {
    Instagram,
    Facebook,
    MessageCircle,
    Mail,
    MapPin,
    Phone
} from "lucide-react";

const Footer = () => {

    return (
        <footer className="bg-brand-navy text-white pt-14 pb-8 border-t border-white/5">

            {/* TOP GRID */}
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

                {/* BRAND */}
                <div className="space-y-5">
                    <div className="flex items-center gap-3">
                        <div className="h-12 w-12 bg-white rounded-lg p-1 overflow-hidden">
                            <img src="/logo.png" alt="SRI SAI VIDYALAYA Logo" className="w-full h-full object-contain" />
                        </div>

                        <div>
                            <h2 className="text-base text-white font-bold">
                                SRI SAI VIDYALAYA
                            </h2>
                            <p className="text-brand-gold text-[10px] tracking-wider uppercase">
                                Quality Education Since 2003
                            </p>
                        </div>
                    </div>

                    <p className="text-white/60 text-xs leading-relaxed">
                        SRI SAI VIDYALAYA is committed to providing quality education in a safe, disciplined, and nurturing environment that encourages academic excellence, character building, and holistic development.
                    </p>

                    {/* SOCIALS */}
                    <div className="flex gap-3">
                        {[
                            { Icon: MessageCircle, href: "https://wa.me/919986408779?text=Hello,%20I%20would%20like%20to%20know%20more%20about%20admissions%20at%20Sri%20Sai%20Vidyalaya." },
                            { Icon: Instagram, href: "#" },
                            { Icon: Facebook, href: "https://www.facebook.com/people/Sri-Sai-Vidyalaya/pfbid02DzuzUihva4wENuQmS8z3gVcVLspjcsHs3Sxzfy6EE8hEJTB8ya2dH8wTZtqLwwUrl/" }
                        ].map((social, i) => (
                            <a
                                key={i}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="h-8 w-8 flex items-center text-white justify-center rounded-full bg-white/5 hover:bg-brand-gold hover:text-brand-navy transition"
                            >
                                <social.Icon className="h-4 w-4" />
                            </a>
                        ))}
                    </div>
                </div>

                {/* QUICK LINKS */}
                <div>
                    <h3 className="text-[11px] font-semibold text-brand-gold uppercase mb-5">
                        Quick Links
                    </h3>

                    <ul className="space-y-3 text-white/70 text-sm">
                        {[
                            { name: "About Us", path: "/about" },
                            { name: "Admissions", path: "/admissions" },
                            { name: "Infrastructure", path: "/infrastructure" },
                            { name: "Academics", path: "/academics" }
                        ].map((item) => (
                            <li key={item.name}>
                                <Link to={item.path} className="hover:text-brand-gold transition">
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* STUDENT RESOURCES */}
                <div>
                    <h3 className="text-[11px] font-semibold text-brand-gold uppercase mb-5">
                        Resources
                    </h3>

                    <ul className="space-y-3 text-white/70 text-sm">
                        {[
                            { name: "Vision & Mission", path: "/about/vision-mission" },
                            { name: "Chairman's Message", path: "/about/chairman-message" },
                            { name: "Director's Message", path: "/about/director-of-studies" },
                            { name: "Campus Gallery", path: "/infrastructure" },
                            { name: "Infrastructure", path: "/infrastructure" },
                            { name: "Contact", path: "/contact" }
                        ].map((item) => (
                            <li key={item.name}>
                                <Link to={item.path} className="hover:text-brand-gold transition">
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* CONTACT */}
                <div>
                    <h3 className="text-[11px] font-semibold text-brand-gold uppercase mb-5">
                        Contact
                    </h3>

                    <div className="space-y-4 text-white/70 text-xs">

                        <div className="flex gap-3 items-start">
                            <MapPin className="h-4 w-4 text-brand-gold mt-1" />
                            <p className="leading-relaxed text-white">
                                No. 1839, Sri Sai Mandir Road <br />3rd Cross 'D' Block, 2nd Stage <br />Rajajinagar, Bengaluru - 560010
                            </p>
                        </div>

                        <div className="flex gap-3 items-center">
                            <Phone className="h-4 w-4 text-brand-gold" />
                            <div>
                                <a href="tel:+919986408779" className="block hover:text-brand-gold text-white">
                                    +91 9986408779
                                </a>
                                <a href="tel:+919886771063" className="block hover:text-brand-gold text-white">
                                    +91 9886771063
                                </a>
                            </div>
                        </div>

                        <div className="flex gap-3 items-center">
                            <Mail className="h-4 w-4 text-brand-gold" />
                            <a
                                href="mailto:srisaividyalaya2017@gmail.com"
                                className="hover:text-brand-gold break-all text-white"
                            >
                                srisaividyalaya2017@gmail.com
                            </a>
                        </div>

                    </div>
                </div>
            </div>

            {/* MAP */}
            <div className="max-w-7xl mx-auto px-6 mt-12">
                <div className="rounded-xl overflow-hidden border border-white/10">
                    <iframe
                        title="School Location"
                        src="https://www.google.com/maps?q=No.+1839,+Sri+Sai+Mandir+Road,+3rd+Cross+D+Block,+2nd+Stage,+Rajajinagar,+Bengaluru+560010&output=embed"
                        height="220"
                        className="w-full opacity-80 hover:opacity-100 transition"
                    ></iframe>
                </div>
            </div>

            <div className="mt-10 pt-6 border-t border-white/10">
                <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-[10px] text-white/50 tracking-wider">

                    <p className="text-center md:text-left">
                        © {new Date().getFullYear()} SRI SAI VIDYALAYA. All rights reserved.
                    </p>


                </div>
            </div>

        </footer>
    );
};

export default Footer;
