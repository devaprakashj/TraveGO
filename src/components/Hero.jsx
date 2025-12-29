import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, MapPin, Calendar, Users, Star, Play } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Hero = () => {
    const [query, setQuery] = useState('');
    const [showSuggestions, setShowSuggestions] = useState(false);
    const navigate = useNavigate();

    const popularDestinations = ["Bali", "Tokyo", "Paris", "Switzerland", "Dubai", "Iceland"];
    const avatars = [
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=64&q=80",
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=64&q=80",
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=64&q=80",
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=64&q=80"
    ];

    const handleSearch = (e) => {
        if (e) e.preventDefault();
        if (query.trim()) {
            navigate(`/trips?search=${encodeURIComponent(query.trim())}`);
        } else {
            navigate('/trips');
        }
    };

    const handleSuggestionClick = (city) => {
        setQuery(city);
        setShowSuggestions(false);
        navigate(`/trips?search=${encodeURIComponent(city)}`);
    };

    return (
        <div className="relative min-h-[90vh] flex flex-col justify-center overflow-hidden py-32">
            {/* Background Image with Layered Overlays */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=2000&q=80"
                    alt="Travel background"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/30"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-50 via-transparent to-transparent"></div>
            </div>

            {/* Content Container */}
            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="max-w-6xl mx-auto">
                    {/* Top Text Content */}
                    <div className="text-center lg:text-left mb-16">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <span className="inline-flex items-center gap-2 py-2 px-5 rounded-full bg-white/10 backdrop-blur-md text-white border border-white/20 text-xs md:text-sm font-bold mb-8">
                                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                                TRUSTED BY 100K+ TRAVELERS
                            </span>
                            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight">
                                Escape to your <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-blue-300">Perfect Hideaway</span>
                            </h1>
                            <p className="text-lg md:text-xl text-slate-200 mb-10 max-w-2xl lg:mx-0 mx-auto leading-relaxed">
                                Discover hand-picked boutique hotels, unique experiences, and hidden gems across the globe.
                            </p>

                            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6">
                                <div className="flex -space-x-3">
                                    {avatars.map((url, i) => (
                                        <img key={i} src={url} alt="User" className="w-10 h-10 md:w-12 md:h-12 rounded-full border-4 border-slate-900 object-cover shadow-xl" />
                                    ))}
                                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border-4 border-slate-900 bg-primary-600 flex items-center justify-center text-white text-[10px] font-black shadow-xl">
                                        +5K
                                    </div>
                                </div>
                                <div className="text-left">
                                    <div className="flex text-yellow-400 gap-0.5 mb-1">
                                        {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                                    </div>
                                    <p className="text-xs md:text-sm font-bold text-white">4.9/5 Average Rating</p>
                                </div>

                                <button className="flex items-center gap-3 text-white font-bold group bg-white/10 hover:bg-white/20 px-5 py-3 rounded-full transition-all border border-white/20 backdrop-blur-sm">
                                    <div className="w-10 h-10 rounded-full bg-primary-600 flex items-center justify-center group-hover:scale-110 transition-all">
                                        <Play fill="white" size={16} className="ml-0.5" />
                                    </div>
                                    <span className="text-sm">WATCH STORY</span>
                                </button>
                            </div>
                        </motion.div>
                    </div>

                    {/* Integrated Search Bar Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="w-full"
                    >
                        <div className="relative">
                            <form
                                onSubmit={handleSearch}
                                className="bg-white p-4 rounded-3xl lg:rounded-full shadow-2xl flex flex-col lg:flex-row items-stretch gap-3 border border-slate-100"
                            >
                                {/* Location Section */}
                                <div className="flex-[2] flex items-center gap-4 px-5 py-3 w-full lg:border-r border-slate-200 group">
                                    <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center text-primary-600 flex-shrink-0">
                                        <MapPin size={22} />
                                    </div>
                                    <div className="flex-1 text-left min-w-0">
                                        <label className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1">Destination</label>
                                        <input
                                            type="text"
                                            placeholder="Where are you going?"
                                            value={query}
                                            onFocus={() => setShowSuggestions(true)}
                                            onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
                                            onChange={(e) => setQuery(e.target.value)}
                                            className="bg-transparent border-none focus:outline-none w-full text-slate-900 text-base placeholder:text-slate-400 font-semibold"
                                        />
                                    </div>
                                </div>

                                {/* Date Section */}
                                <div className="hidden lg:flex flex-1 items-center gap-4 px-5 py-3 w-full lg:border-r border-slate-200 group cursor-pointer hover:bg-slate-50 transition-colors rounded-xl">
                                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 flex-shrink-0">
                                        <Calendar size={22} />
                                    </div>
                                    <div className="text-left">
                                        <label className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1">Date</label>
                                        <p className="text-slate-900 text-sm font-semibold whitespace-nowrap">Jan / Feb 2025</p>
                                    </div>
                                </div>

                                {/* Guests Section */}
                                <div className="hidden lg:flex flex-1 items-center gap-4 px-5 py-3 w-full group cursor-pointer hover:bg-slate-50 transition-colors rounded-xl">
                                    <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center text-purple-600 flex-shrink-0">
                                        <Users size={22} />
                                    </div>
                                    <div className="text-left">
                                        <label className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1">Guests</label>
                                        <p className="text-slate-900 text-sm font-semibold whitespace-nowrap">2 Adults</p>
                                    </div>
                                </div>

                                {/* Search Button */}
                                <button
                                    type="submit"
                                    className="w-full lg:w-auto bg-primary-600 hover:bg-primary-700 text-white rounded-2xl lg:rounded-full flex items-center justify-center gap-3 px-8 py-4 shadow-lg transition-all font-bold text-base"
                                >
                                    <Search className="w-5 h-5" />
                                    <span>Search</span>
                                </button>
                            </form>

                            {/* Suggestions Dropdown */}
                            <AnimatePresence>
                                {showSuggestions && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 10 }}
                                        className="absolute left-0 right-0 top-full mt-4 lg:left-4 lg:w-80 bg-white rounded-2xl shadow-2xl p-5 z-50 border border-slate-100"
                                    >
                                        <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">Popular Destinations</h4>
                                        <div className="grid grid-cols-2 gap-2">
                                            {popularDestinations.map(city => (
                                                <button
                                                    key={city}
                                                    type="button"
                                                    onClick={() => handleSuggestionClick(city)}
                                                    className="flex items-center gap-2 px-4 py-3 hover:bg-primary-50 rounded-xl text-slate-700 font-semibold transition-all text-sm text-left"
                                                >
                                                    <MapPin size={14} className="text-primary-500" />
                                                    {city}
                                                </button>
                                            ))}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
