import { motion } from 'framer-motion';
import { Tag, Clock, ArrowRight, Sparkles, Percent } from 'lucide-react';
import { Link } from 'react-router-dom';
import { tripsData } from '../data/tripsData';

const Deals = () => {
    // Mock deals based on some trips
    const deals = tripsData.slice(0, 6).map((trip, idx) => ({
        ...trip,
        discount: idx % 2 === 0 ? "20% OFF" : "15% OFF",
        originalPrice: Math.round(trip.price / (idx % 2 === 0 ? 0.8 : 0.85)),
        expiry: "Ends in 3 days"
    }));

    return (
        <div className="pt-32 pb-20 bg-slate-50 min-h-screen">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col md:flex-row items-center justify-between mb-16 gap-6">
                    <div className="max-w-2xl text-center md:text-left">
                        <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-4 flex items-center justify-center md:justify-start gap-3">
                            Exclusive <span className="text-primary-600">Deals</span>
                            <Sparkles className="text-yellow-400 fill-yellow-400" />
                        </h1>
                        <p className="text-slate-500 text-lg">
                            Unlock the best travel experiences at unbeatable prices. These limited-time offers are updated daily.
                        </p>
                    </div>
                    <div className="bg-white p-4 rounded-3xl shadow-card flex items-center gap-4 border border-slate-100">
                        <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-2xl flex items-center justify-center">
                            <Clock className="w-6 h-6" />
                        </div>
                        <div>
                            <p className="text-xs text-slate-400 uppercase font-bold">Offer Refresh</p>
                            <p className="font-bold text-slate-900">Every 24 Hours</p>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {deals.map((deal, index) => (
                        <motion.div
                            key={deal.id}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 }}
                            className="group bg-white rounded-[2.5rem] overflow-hidden shadow-card hover:shadow-2xl transition-all border border-slate-100 relative"
                        >
                            {/* Discount Badge */}
                            <div className="absolute top-6 left-6 z-10 bg-red-500 text-white px-4 py-2 rounded-full font-black text-sm flex items-center gap-1 shadow-lg">
                                <Percent size={14} />
                                {deal.discount}
                            </div>

                            <div className="relative h-64 overflow-hidden">
                                <img
                                    src={deal.image}
                                    alt={deal.name}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                <div className="absolute bottom-6 left-6">
                                    <p className="text-white/80 text-sm font-medium flex items-center gap-1">
                                        <Tag size={14} />
                                        Limited Offer
                                    </p>
                                </div>
                            </div>

                            <div className="p-8">
                                <h3 className="text-2xl font-bold text-slate-900 mb-2">{deal.name}</h3>
                                <p className="text-slate-500 mb-6 line-clamp-2">{deal.description}</p>

                                <div className="flex items-center justify-between mb-8">
                                    <div>
                                        <span className="text-slate-400 line-through text-lg font-medium">₹{deal.originalPrice.toLocaleString('en-IN')}</span>
                                        <div className="text-3xl font-black text-primary-600">₹{deal.price.toLocaleString('en-IN')}</div>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-xs font-bold text-red-500 uppercase tracking-widest bg-red-50 px-3 py-1 rounded-full border border-red-100 mb-1">
                                            {deal.expiry}
                                        </p>
                                    </div>
                                </div>

                                <Link
                                    to={`/trip/${deal.id}`}
                                    className="w-full btn-primary flex items-center justify-center gap-2 group-hover:gap-3 transition-all py-4"
                                >
                                    Claim This Deal
                                    <ArrowRight size={20} />
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Deals;
