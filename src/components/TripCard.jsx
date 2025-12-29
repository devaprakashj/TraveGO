import { Link } from 'react-router-dom';
import { MapPin, Clock, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const TripCard = ({ trip }) => {
    return (
        <motion.div
            whileHover={{ y: -10 }}
            className="card flex flex-col h-full group"
        >
            <div className="relative h-64 overflow-hidden">
                <img
                    src={trip.image}
                    alt={trip.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-primary-600 shadow-sm">
                    ₹{trip.price.toLocaleString('en-IN')} / person
                </div>
            </div>

            <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-1 text-slate-400 text-xs mb-2">
                    <MapPin className="w-3 h-3" />
                    <span>{trip.destination}</span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-primary-600 transition-colors">
                    {trip.name}
                </h3>

                <div className="flex items-center gap-4 text-sm text-slate-500 mb-6">
                    <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{trip.duration}</span>
                    </div>
                </div>

                <div className="mt-auto flex items-center justify-between">
                    <Link
                        to={`/trip/${trip.id}`}
                        className="flex items-center gap-2 text-primary-600 font-semibold hover:gap-3 transition-all"
                    >
                        Details
                        <ArrowRight className="w-4 h-4" />
                    </Link>
                    <button className="text-slate-300 hover:text-red-500 transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" /></svg>
                    </button>
                </div>
            </div>
        </motion.div>
    );
};

export default TripCard;
