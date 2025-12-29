import { Link } from 'react-router-dom';
import { Plane, Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-slate-900 text-slate-300 pt-20 pb-10">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand */}
                    <div className="space-y-6">
                        <Link to="/" className="flex items-center gap-2">
                            <div className="bg-primary-600 p-2 rounded-xl">
                                <Plane className="text-white w-5 h-5" />
                            </div>
                            <span className="text-xl font-bold tracking-tight text-white">
                                Trave<span className="text-primary-500">Go</span>
                            </span>
                        </Link>
                        <p className="text-slate-400 leading-relaxed">
                            Making your travel dreams come true with curated experiences and unforgettable journeys across the globe.
                        </p>
                        <div className="flex bg-white/5 p-2 rounded-2xl">
                            <input
                                type="email"
                                placeholder="Email address"
                                className="bg-transparent border-none px-4 py-2 text-white placeholder:text-slate-500 focus:outline-none w-full"
                            />
                            <button className="bg-primary-600 p-2 rounded-xl text-white">
                                <Mail className="w-5 h-5" />
                            </button>
                        </div>
                    </div>

                    {/* Links */}
                    <div>
                        <h4 className="text-white font-bold mb-6">Quick Links</h4>
                        <ul className="space-y-4">
                            <li><Link to="/" className="hover:text-primary-400 transition-colors">Home</Link></li>
                            <li><Link to="/trips" className="hover:text-primary-400 transition-colors">Explore Trips</Link></li>
                            <li><Link to="/contact" className="hover:text-primary-400 transition-colors">About Us</Link></li>
                            <li><Link to="/contact" className="hover:text-primary-400 transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Social */}
                    <div>
                        <h4 className="text-white font-bold mb-6">Follow Us</h4>
                        <div className="grid grid-cols-2 gap-4">
                            <a href="#" className="flex items-center gap-2 hover:text-primary-400 transition-colors">
                                <Facebook className="w-4 h-4" /> Facebook
                            </a>
                            <a href="#" className="flex items-center gap-2 hover:text-primary-400 transition-colors">
                                <Twitter className="w-4 h-4" /> Twitter
                            </a>
                            <a href="#" className="flex items-center gap-2 hover:text-primary-400 transition-colors">
                                <Instagram className="w-4 h-4" /> Instagram
                            </a>
                            <a href="#" className="flex items-center gap-2 hover:text-primary-400 transition-colors">
                                <Youtube className="w-4 h-4" /> Youtube
                            </a>
                        </div>
                    </div>

                    {/* Contact */}
                    <div className="space-y-4">
                        <h4 className="text-white font-bold mb-6">Contact Info</h4>
                        <div className="flex items-start gap-3">
                            <MapPin className="w-5 h-5 text-primary-500 flex-shrink-0" />
                            <span>123 Travel Street, Adventure City, World 45678</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <Phone className="w-5 h-5 text-primary-500 flex-shrink-0" />
                            <span>+1 (234) 567-8901</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <Mail className="w-5 h-5 text-primary-500 flex-shrink-0" />
                            <span>hello@travego.com</span>
                        </div>
                    </div>
                </div>

                <div className="pt-10 border-t border-white/5">
                    {/* Developer Credits */}
                    <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-8">
                        <p className="text-slate-400 text-sm">
                            Developed by <span className="text-white font-bold">Devaprakash J</span>
                        </p>
                        <div className="flex items-center gap-4">
                            <a
                                href="https://www.linkedin.com/in/devaprakashj/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 text-primary-400 hover:text-primary-300 transition-colors text-sm font-medium"
                            >
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                                LinkedIn
                            </a>
                            <a
                                href="mailto:devaprakashofficial@gmail.com"
                                className="flex items-center gap-2 text-primary-400 hover:text-primary-300 transition-colors text-sm font-medium"
                            >
                                <Mail className="w-4 h-4" />
                                Email
                            </a>
                        </div>
                    </div>

                    {/* Copyright */}
                    <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-slate-500">
                        <p>© {new Date().getFullYear()} TraveGo. All rights reserved.</p>
                        <div className="flex gap-8">
                            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
