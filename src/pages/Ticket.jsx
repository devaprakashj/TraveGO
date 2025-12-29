import { useLocation, useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Plane, Calendar, MapPin, User, Hash, CheckCircle2, QrCode, ArrowLeft, Download } from 'lucide-react';

const Ticket = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const data = location.state;

    if (!data) {
        return (
            <div className="pt-40 text-center">
                <h2 className="text-2xl font-bold">No ticket found.</h2>
                <Link to="/trips" className="text-primary-600 mt-4 block">Browse Trips</Link>
            </div>
        );
    }

    return (
        <div className="pt-40 pb-20 bg-slate-50 min-h-screen">
            <div className="container mx-auto px-4">
                <div className="max-w-3xl mx-auto">
                    {/* Success Message */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="flex flex-col items-center text-center mb-10"
                    >
                        <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4 shadow-lg shadow-green-100">
                            <CheckCircle2 size={40} />
                        </div>
                        <h1 className="text-3xl font-black text-slate-900 mb-2">Booking Confirmed!</h1>
                        <p className="text-slate-500">Your adventure to {data.tripDestination} is ready.</p>
                    </motion.div>

                    {/* Ticket Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="bg-white rounded-[2rem] shadow-2xl overflow-hidden flex flex-col md:flex-row relative"
                    >
                        {/* Perforation Effect (Circles) */}
                        <div className="hidden md:block absolute left-1/3 top-0 bottom-0 w-px border-l-2 border-dashed border-slate-100 z-10"></div>
                        <div className="hidden md:block absolute left-1/3 -top-4 w-8 h-8 bg-slate-50 rounded-full -translate-x-1/2"></div>
                        <div className="hidden md:block absolute left-1/3 -bottom-4 w-8 h-8 bg-slate-50 rounded-full -translate-x-1/2"></div>

                        {/* Left Section (Main Details) */}
                        <div className="md:w-2/3 p-8 md:p-12">
                            <div className="flex items-center gap-3 mb-10">
                                <Plane className="text-primary-600 w-8 h-8" />
                                <span className="text-2xl font-black italic tracking-tighter">
                                    Trave<span className="text-primary-500">Go</span>
                                </span>
                            </div>

                            <div className="grid grid-cols-2 gap-y-10">
                                <div className="col-span-2">
                                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Trip Name</p>
                                    <p className="text-2xl font-bold text-slate-900">{data.tripName}</p>
                                </div>

                                <div>
                                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Traveler</p>
                                    <div className="flex items-center gap-2 font-bold text-slate-800">
                                        <User className="w-4 h-4 text-primary-500" />
                                        {data.name}
                                    </div>
                                </div>

                                <div>
                                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Booking ID</p>
                                    <div className="flex items-center gap-2 font-bold text-slate-800">
                                        <Hash className="w-4 h-4 text-primary-500" />
                                        {data.bookingId}
                                    </div>
                                </div>

                                <div>
                                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Travelers</p>
                                    <div className="flex items-center gap-2 font-bold text-slate-800">
                                        <Calendar className="w-4 h-4 text-primary-500" />
                                        {data.persons} Person(s)
                                    </div>
                                </div>

                                <div>
                                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Destination</p>
                                    <div className="flex items-center gap-2 font-bold text-slate-800">
                                        <MapPin className="w-4 h-4 text-primary-500" />
                                        {data.tripDestination}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Section (QR & Price) */}
                        <div className="md:w-1/3 bg-slate-900 p-8 md:p-12 flex flex-col items-center justify-center text-center">
                            <div className="bg-white p-4 rounded-3xl mb-8">
                                <QrCode size={120} className="text-slate-900" />
                            </div>
                            <p className="text-slate-400 text-sm uppercase tracking-widest font-bold mb-1">Total Paid</p>
                            <p className="text-3xl font-black text-white mb-2">₹{data.totalPrice.toLocaleString('en-IN')}</p>
                            <div className="w-full h-px bg-white/10 my-6"></div>
                            <p className="text-primary-400 text-xs font-bold mb-4">Boarding Pass Ready</p>
                            <button className="flex items-center justify-center gap-2 text-white/50 hover:text-white transition-colors text-sm font-bold">
                                <Download size={16} />
                                Download PDF
                            </button>
                        </div>
                    </motion.div>

                    <div className="flex flex-col md:flex-row gap-4 justify-center mt-12">
                        <Link to="/" className="btn-secondary px-10 text-center">
                            Go to Homepage
                        </Link>
                        <button className="btn-primary px-10">
                            Share Ticket
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Ticket;
