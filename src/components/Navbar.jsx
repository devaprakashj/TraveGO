import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Compass, Menu, X, Plane } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { title: 'Home', path: '/' },
        { title: 'Explore', path: '/trips' },
        { title: 'Deals', path: '/deals' },
        { title: 'Contact', path: '/contact' },
    ];

    const isHome = location.pathname === '/';

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled || !isHome ? 'bg-white/80 backdrop-blur-md py-3 shadow-sm' : 'bg-transparent py-5'
            }`}>
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex justify-between items-center">
                    <Link to="/" className="flex items-center gap-2 group">
                        <div className="bg-primary-600 p-2 rounded-xl group-hover:rotate-12 transition-transform">
                            <Plane className="text-white w-5 h-5" />
                        </div>
                        <div className="flex flex-col">
                            <span className={`text-xl font-bold tracking-tight leading-tight ${scrolled || !isHome ? 'text-slate-900' : 'text-white'
                                }`}>
                                Trave<span className="text-primary-500">Go</span>
                            </span>
                            <span className={`text-[9px] font-medium tracking-wide ${scrolled || !isHome ? 'text-slate-400' : 'text-white/60'
                                }`}>
                                Design by Deva
                            </span>
                        </div>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.title}
                                to={link.path}
                                className={`text-sm font-medium transition-colors hover:text-primary-500 ${scrolled || !isHome ? 'text-slate-600' : 'text-slate-100'
                                    }`}
                            >
                                {link.title}
                            </Link>
                        ))}
                        <Link to="/trips" className="btn-primary py-2 px-5 text-sm">
                            Book Now
                        </Link>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="md:hidden p-2 rounded-lg"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? (
                            <X className={scrolled || !isHome ? 'text-slate-900' : 'text-white'} />
                        ) : (
                            <Menu className={scrolled || !isHome ? 'text-slate-900' : 'text-white'} />
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Nav */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white border-t border-slate-100 overflow-hidden"
                    >
                        <div className="flex flex-col gap-4 p-6">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.title}
                                    to={link.path}
                                    className="text-lg font-medium text-slate-600"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.title}
                                </Link>
                            ))}
                            <Link
                                to="/trips"
                                className="btn-primary text-center"
                                onClick={() => setIsOpen(false)}
                            >
                                Book Now
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
