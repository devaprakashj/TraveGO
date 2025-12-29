import Hero from '../components/Hero';
import FeaturedTrips from '../components/FeaturedTrips';
import { motion } from 'framer-motion';
import { Palmtree, Mountain, Building2, Map, Quote, Star, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { db } from '../firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

const Home = () => {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState('');
    const navigate = useNavigate();

    const handleSubscribe = async (e) => {
        e.preventDefault();
        if (!email) return;
        setStatus('submitting');
        try {
            await addDoc(collection(db, "newsletter"), {
                email,
                subscribedAt: serverTimestamp()
            });
            setEmail('');
            setStatus('success');
            setTimeout(() => setStatus(''), 5000);
        } catch (error) {
            console.error("Newsletter error:", error);
            setStatus('error');
        }
    };

    const categories = [
        { id: 'beaches', icon: <Palmtree className="w-7 h-7" />, name: "Beaches", count: "5+ Trips", color: "bg-blue-100 text-blue-600" },
        { id: 'mountains', icon: <Mountain className="w-7 h-7" />, name: "Mountains", count: "6+ Trips", color: "bg-emerald-100 text-emerald-600" },
        { id: 'cities', icon: <Building2 className="w-7 h-7" />, name: "Cities", count: "8+ Trips", color: "bg-purple-100 text-purple-600" },
        { id: 'adventure', icon: <Map className="w-7 h-7" />, name: "Adventure", count: "5+ Trips", color: "bg-orange-100 text-orange-600" },
    ];

    const handleCategoryClick = (categoryId) => {
        navigate(`/trips?category=${categoryId}`);
    };

    const stats = [
        { label: "Happy Travelers", value: "100k+" },
        { label: "Destinations", value: "500+" },
        { label: "Years Experience", value: "12+" },
        { label: "Expert Guides", value: "250+" },
    ];

    const testimonials = [
        {
            name: "Sarah Johnson",
            role: "Adventure Enthusiast",
            text: "TraveGo made our Bali trip absolutely seamless. The attention to detail in the itinerary was impressive!",
            image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80"
        },
        {
            name: "Michael Chen",
            role: "Family Traveler",
            text: "Best booking experience I've ever had. Their 24/7 support really helped us when our flight was delayed.",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80"
        },
        {
            name: "Emma Wilson",
            role: "Solo Backpacker",
            text: "I found the most unique hidden gems through their curated lists. Highly recommend for solo travelers!",
            image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80"
        }
    ];

    return (
        <div className="bg-slate-50">
            <Hero />

            {/* Popular Categories */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center mb-14">
                        <span className="text-primary-600 font-bold tracking-widest uppercase text-sm">Categories</span>
                        <h2 className="text-3xl md:text-4xl font-black text-slate-900 mt-3">Explore by Interest</h2>
                    </div>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                        {categories.map((cat, i) => (
                            <motion.div
                                key={cat.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                onClick={() => handleCategoryClick(cat.id)}
                                className="group bg-slate-50 p-6 md:p-8 rounded-2xl hover:bg-white hover:shadow-xl transition-all border border-slate-100 text-center cursor-pointer"
                            >
                                <div className={`w-16 h-16 ${cat.color} rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform`}>
                                    {cat.icon}
                                </div>
                                <h3 className="text-lg font-bold text-slate-900 mb-1">{cat.name}</h3>
                                <p className="text-slate-400 text-sm font-medium">{cat.count}</p>
                                <div className="mt-4 flex items-center justify-center gap-2 text-primary-600 opacity-0 group-hover:opacity-100 transition-opacity font-semibold text-sm">
                                    Explore <ArrowRight size={16} />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured Trips */}
            <section className="py-20 bg-slate-50">
                <FeaturedTrips />
            </section>

            {/* Stats Experience Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
                        <div className="lg:w-1/2">
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                            >
                                <span className="text-primary-600 font-bold tracking-widest uppercase text-sm">Our Success</span>
                                <h2 className="text-3xl md:text-5xl font-black text-slate-900 mt-3 mb-6 leading-tight">
                                    We Provide Best <br />
                                    <span className="text-primary-600">Travel Experience</span>
                                </h2>
                                <p className="text-slate-500 text-lg mb-10 leading-relaxed">
                                    With over a decade of experience, we've helped thousands of travelers find their perfect getaway. Our mission is to make travel accessible, safe, and unforgettable for everyone.
                                </p>
                                <div className="grid grid-cols-2 gap-6">
                                    {stats.map((stat, i) => (
                                        <div key={i} className="bg-slate-50 p-5 rounded-2xl">
                                            <p className="text-3xl font-black text-slate-900 mb-1">{stat.value}</p>
                                            <p className="text-slate-500 text-sm font-medium">{stat.label}</p>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        </div>
                        <div className="lg:w-1/2 grid grid-cols-2 gap-4">
                            <motion.img
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=400&q=80"
                                alt="Travel"
                                className="w-full h-64 md:h-80 object-cover rounded-2xl shadow-lg"
                            />
                            <motion.img
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4 }}
                                src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=400&q=80"
                                alt="Travel"
                                className="w-full h-64 md:h-80 object-cover rounded-2xl shadow-lg mt-6"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-20 bg-slate-900 text-white">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center mb-14">
                        <span className="text-primary-400 font-bold tracking-widest uppercase text-sm">Testimonials</span>
                        <h2 className="text-3xl md:text-4xl font-black mt-3">What Our Clients Say</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {testimonials.map((t, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-slate-800 p-6 md:p-8 rounded-2xl relative"
                            >
                                <Quote className="absolute top-6 right-6 text-slate-700 w-10 h-10" />
                                <div className="flex gap-1 text-yellow-400 mb-5">
                                    {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                                </div>
                                <p className="text-slate-300 mb-6 leading-relaxed">"{t.text}"</p>
                                <div className="flex items-center gap-4">
                                    <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full object-cover border-2 border-primary-500" />
                                    <div>
                                        <h4 className="font-bold text-white">{t.name}</h4>
                                        <p className="text-slate-400 text-sm">{t.role}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Newsletter Section */}
            <section className="py-20 bg-slate-50">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="bg-primary-600 rounded-3xl p-8 md:p-14 relative overflow-hidden">
                        {/* Decorative */}
                        <div className="absolute -top-20 -right-20 w-56 h-56 bg-white/10 rounded-full blur-3xl"></div>
                        <div className="absolute -bottom-20 -left-20 w-56 h-56 bg-white/10 rounded-full blur-3xl"></div>

                        <div className="max-w-3xl mx-auto text-center relative z-10">
                            <h2 className="text-3xl md:text-5xl font-black text-white mb-5">Ready for your next adventure?</h2>
                            <p className="text-primary-100 mb-8 text-lg">Subscribe and get <span className="text-white font-bold">15% off</span> your first booking!</p>
                            <form onSubmit={handleSubscribe} className="bg-white p-2 rounded-full flex flex-col sm:flex-row gap-2 shadow-xl max-w-xl mx-auto">
                                <input
                                    required
                                    type="email"
                                    placeholder="Enter your email address"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="flex-1 bg-transparent border-none px-6 py-3 text-slate-900 placeholder:text-slate-400 focus:outline-none font-medium"
                                />
                                <button
                                    disabled={status === 'submitting'}
                                    className="bg-primary-600 text-white px-8 py-3 rounded-full font-bold hover:bg-primary-700 transition-all disabled:opacity-50"
                                >
                                    {status === 'submitting' ? 'Joining...' : 'Join Now'}
                                </button>
                            </form>
                            {status === 'success' && (
                                <p className="mt-5 text-white font-bold bg-white/20 py-3 px-5 rounded-full inline-block">
                                    🎉 Welcome to the family!
                                </p>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            {/* Partners / Trusted Brands - Auto Sliding */}
            <section className="py-16 bg-slate-50 overflow-hidden border-t border-slate-100">
                <div className="container mx-auto px-4 md:px-6 mb-12">
                    <div className="text-center">
                        <span className="text-primary-600 font-bold tracking-widest uppercase text-sm">Our Partners</span>
                        <h2 className="text-2xl md:text-3xl font-black text-slate-900 mt-2">Trusted by Top Brands</h2>
                    </div>
                </div>

                {/* Marquee Slider */}
                <div className="relative">
                    {/* Gradient Fade Left */}
                    <div className="absolute left-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-r from-slate-50 to-transparent z-10"></div>
                    {/* Gradient Fade Right */}
                    <div className="absolute right-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-l from-slate-50 to-transparent z-10"></div>

                    <div className="flex animate-marquee whitespace-nowrap">
                        {/* First set of brands */}
                        {[...Array(2)].map((_, setIndex) => (
                            <div key={setIndex} className="flex items-center gap-12 md:gap-20 px-6 md:px-10">
                                <div className="flex items-center gap-2 text-slate-400 hover:text-slate-700 transition-colors cursor-pointer">
                                    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor"><path d="M12.001 2C6.486 2 2.001 6.485 2.001 12s4.485 10 9.999 10c5.515 0 10-4.485 10-10S17.516 2 12.001 2zm-.877 14.707l-3.536-3.536 1.414-1.414 2.122 2.122 4.243-4.243 1.414 1.414-5.657 5.657z" /></svg>
                                    <span className="text-xl md:text-2xl font-black tracking-tight">Airbnb</span>
                                </div>
                                <div className="flex items-center gap-2 text-slate-400 hover:text-blue-600 transition-colors cursor-pointer">
                                    <span className="text-xl md:text-2xl font-black tracking-tight">Booking.com</span>
                                </div>
                                <div className="flex items-center gap-2 text-slate-400 hover:text-yellow-500 transition-colors cursor-pointer">
                                    <span className="text-xl md:text-2xl font-black tracking-tight">Expedia</span>
                                </div>
                                <div className="flex items-center gap-2 text-slate-400 hover:text-green-500 transition-colors cursor-pointer">
                                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="10" /></svg>
                                    <span className="text-xl md:text-2xl font-black tracking-tight">TripAdvisor</span>
                                </div>
                                <div className="flex items-center gap-2 text-slate-400 hover:text-orange-500 transition-colors cursor-pointer">
                                    <span className="text-xl md:text-2xl font-black tracking-tight">KAYAK</span>
                                </div>
                                <div className="flex items-center gap-2 text-slate-400 hover:text-cyan-500 transition-colors cursor-pointer">
                                    <span className="text-xl md:text-2xl font-black tracking-tight">Skyscanner</span>
                                </div>
                                <div className="flex items-center gap-2 text-slate-400 hover:text-red-600 transition-colors cursor-pointer">
                                    <span className="text-xl md:text-2xl font-black tracking-tight">Emirates</span>
                                </div>
                                <div className="flex items-center gap-2 text-slate-400 hover:text-purple-700 transition-colors cursor-pointer">
                                    <span className="text-xl md:text-2xl font-black tracking-tight">Qatar Airways</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
