import TripCard from './TripCard';
import { tripsData } from '../data/tripsData';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const FeaturedTrips = () => {
    // Just show 3 trips for featured section
    const featured = tripsData.slice(0, 3);

    return (
        <section className="py-20 bg-slate-50">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
                    <div>
                        <span className="text-primary-600 font-bold tracking-wider text-sm">POPULAR DESTINATIONS</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">
                            Featured Adventures
                        </h2>
                    </div>
                    <Link
                        to="/trips"
                        className="group flex items-center gap-2 font-semibold text-slate-600 hover:text-primary-600 transition-colors"
                    >
                        Explore all trips
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {featured.map((trip, index) => (
                        <motion.div
                            key={trip.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <TripCard trip={trip} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturedTrips;
