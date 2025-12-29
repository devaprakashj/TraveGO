import { useParams, Link } from 'react-router-dom';
import { tripsData } from '../data/tripsData';
import { motion } from 'framer-motion';
import { Clock, MapPin, CheckCircle2, Navigation, ArrowLeft } from 'lucide-react';

const TripDetails = () => {
    const { id } = useParams();
    const trip = tripsData.find(t => t.id === parseInt(id));

    if (!trip) return (
        <div className="pt-40 text-center">
            <h2 className="text-2xl font-bold">Trip not found</h2>
            <Link to="/trips" className="text-primary-600">Back to all trips</Link>
        </div>
    );

    return (
        <div className="pb-32">
            {/* Banner */}
            <div className="relative h-[60vh] min-h-[400px]">
                <img
                    src={trip.bannerImage}
                    alt={trip.name}
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-black/20"></div>
                <div className="absolute inset-0 flex items-center justify-center pt-20">
                    <Link
                        to="/trips"
                        className="absolute top-32 left-8 md:left-12 flex items-center gap-2 text-white bg-white/10 backdrop-blur-md px-4 py-2 rounded-full hover:bg-white/20 transition-all border border-white/20"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Back to Trips
                    </Link>
                    <div className="text-center px-4">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-4xl md:text-6xl font-bold text-white mb-4"
                        >
                            {trip.name}
                        </motion.h1>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="flex items-center justify-center gap-2 text-white/90 text-lg"
                        >
                            <MapPin className="w-5 h-5 text-primary-400" />
                            <span>{trip.destination}</span>
                        </motion.div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 md:px-6 mt-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Main Info */}
                    <div className="lg:col-span-2">
                        <div className="flex flex-wrap gap-8 mb-10 pb-10 border-b border-slate-200">
                            <div className="flex items-center gap-3">
                                <div className="p-3 bg-primary-50 rounded-2xl text-primary-600">
                                    <Clock className="w-6 h-6" />
                                </div>
                                <div>
                                    <p className="text-xs text-slate-500 uppercase tracking-wider font-bold">Duration</p>
                                    <p className="text-lg font-bold text-slate-900">{trip.duration}</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="p-3 bg-green-50 rounded-2xl text-green-600">
                                    <Navigation className="w-6 h-6" />
                                </div>
                                <div>
                                    <p className="text-xs text-slate-500 uppercase tracking-wider font-bold">Tour Type</p>
                                    <p className="text-lg font-bold text-slate-900">Guided Tour</p>
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <p className="text-xs text-slate-500 uppercase tracking-wider font-bold">Price per person</p>
                                <p className="text-3xl font-black text-primary-600">₹{trip.price.toLocaleString('en-IN')}</p>
                            </div>
                        </div>

                        <section className="mb-12">
                            <h2 className="text-2xl font-bold mb-6">About this trip</h2>
                            <p className="text-slate-600 leading-relaxed text-lg mb-8">
                                {trip.description}
                            </p>
                        </section>

                        <section className="mb-12">
                            <h2 className="text-2xl font-bold mb-6">Trip Highlights</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {trip.highlights.map((item, i) => (
                                    <div key={i} className="flex items-start gap-3 p-4 bg-white border border-slate-100 rounded-2xl shadow-sm">
                                        <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                        <span className="text-slate-700">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-6">Itinerary</h2>
                            <div className="space-y-6">
                                {trip.itinerary.map((day, i) => (
                                    <div key={i} className="flex gap-4">
                                        <div className="flex flex-col items-center">
                                            <div className="w-10 h-10 rounded-full bg-primary-600 text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
                                                {day.day}
                                            </div>
                                            {i !== trip.itinerary.length - 1 && <div className="w-0.5 h-full bg-slate-200 my-1"></div>}
                                        </div>
                                        <div className="pb-8">
                                            <h4 className="text-lg font-bold text-slate-900 mb-2">{day.title}</h4>
                                            <p className="text-slate-600">{day.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>

                    {/* Sidebar Info */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-28 bg-white p-8 rounded-3xl shadow-card border border-slate-100">
                            <h3 className="text-xl font-bold mb-6">Experience the magic</h3>
                            <ul className="space-y-4 mb-8">
                                <li className="flex items-center gap-3 text-slate-600">
                                    <CheckCircle2 className="w-5 h-5 text-primary-500" /> Professional Guide
                                </li>
                                <li className="flex items-center gap-3 text-slate-600">
                                    <CheckCircle2 className="w-5 h-5 text-primary-500" /> Luxury Accommodation
                                </li>
                                <li className="flex items-center gap-3 text-slate-600">
                                    <CheckCircle2 className="w-5 h-5 text-primary-500" /> Breakfast & Dinner
                                </li>
                                <li className="flex items-center gap-3 text-slate-600">
                                    <CheckCircle2 className="w-5 h-5 text-primary-500" /> All Entrance Fees
                                </li>
                            </ul>

                            <Link to={`/booking/${trip.id}`} className="w-full btn-primary block text-center py-4">
                                Book This Trip
                            </Link>

                            <p className="text-center text-slate-400 text-sm mt-4">No risk, cancellation available</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Floating Action Button for Mobile */}
            <div className="fixed bottom-6 right-6 lg:hidden z-40">
                <Link
                    to={`/booking/${trip.id}`}
                    className="btn-primary shadow-2xl px-8 flex items-center gap-2"
                >
                    Book Tickets
                </Link>
            </div>
        </div>
    );
};

export default TripDetails;
