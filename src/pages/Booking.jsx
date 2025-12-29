import { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { tripsData } from '../data/tripsData';
import { motion } from 'framer-motion';
import { User, Phone, Users, ArrowRight, ShieldCheck } from 'lucide-react';
import { db } from '../firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

const Booking = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const trip = tripsData.find(t => t.id === parseInt(id));

    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        persons: 1
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    if (!trip) return <div>Trip not found</div>;

    const totalPrice = trip.price * formData.persons;

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            // Logic to save to firebase could go here, for now we pass state to payment
            // but let's prepare the object
            const bookingInfo = {
                tripId: trip.id,
                tripName: trip.name,
                tripImage: trip.image,
                tripDestination: trip.destination,
                ...formData,
                totalPrice,
                createdAt: serverTimestamp(),
                status: 'pending'
            };

            // Navigate to payment with booking data
            navigate('/payment', { state: bookingInfo });
        } catch (error) {
            console.error("Error preparing booking:", error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="pt-32 pb-20">
            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-5xl mx-auto">
                    <h1 className="text-3xl font-bold mb-10 text-slate-900 text-center">Complete Your Booking</h1>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Trip Summary (Left) */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="bg-white rounded-3xl overflow-hidden shadow-card border border-slate-100 h-fit"
                        >
                            <img src={trip.image} alt={trip.name} className="w-full h-64 object-cover" />
                            <div className="p-8">
                                <span className="text-primary-600 font-bold text-sm tracking-wider">SELECTED TRIP</span>
                                <h2 className="text-2xl font-bold mt-2 mb-4 text-slate-900">{trip.name}</h2>
                                <div className="space-y-4 text-slate-600 mb-8 pb-8 border-b border-slate-100">
                                    <div className="flex justify-between items-center">
                                        <span>Price per person</span>
                                        <span className="font-bold text-slate-900">₹{trip.price.toLocaleString('en-IN')}</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span>Duration</span>
                                        <span className="font-bold text-slate-900">{trip.duration}</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span>Number of travelers</span>
                                        <span className="font-bold text-slate-900">x {formData.persons}</span>
                                    </div>
                                </div>

                                <div className="flex justify-between items-center mb-6">
                                    <span className="text-lg font-medium text-slate-500">Total Price</span>
                                    <span className="text-4xl font-black text-primary-600">₹{totalPrice.toLocaleString('en-IN')}</span>
                                </div>

                                <div className="bg-slate-50 p-4 rounded-2xl flex items-center gap-3 text-slate-500 text-sm">
                                    <ShieldCheck className="w-6 h-6 text-green-500" />
                                    <p>Secure checkout and instant confirmation after payment.</p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Booking Form (Right) */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="bg-white p-8 md:p-10 rounded-3xl shadow-card border border-slate-100"
                        >
                            <h3 className="text-2xl font-bold mb-8 text-slate-900">Traveler Details</h3>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-2">Full Name</label>
                                    <div className="relative">
                                        <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                                        <input
                                            required
                                            type="text"
                                            className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-primary-500 outline-none transition-all"
                                            placeholder="John Doe"
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-2">Phone Number</label>
                                    <div className="relative">
                                        <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                                        <input
                                            required
                                            type="tel"
                                            className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-primary-500 outline-none transition-all"
                                            placeholder="+1 234 567 890"
                                            value={formData.phone}
                                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-2">Number of Persons</label>
                                    <div className="relative">
                                        <Users className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                                        <input
                                            required
                                            type="number"
                                            min="1"
                                            className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-primary-500 outline-none transition-all"
                                            value={formData.persons}
                                            onChange={(e) => setFormData({ ...formData, persons: parseInt(e.target.value) || 1 })}
                                        />
                                    </div>
                                </div>

                                <div className="pt-6">
                                    <button type="submit" className="w-full btn-primary py-4 flex items-center justify-center gap-3 text-lg">
                                        Proceed to Payment
                                        <ArrowRight className="w-6 h-6" />
                                    </button>
                                </div>
                            </form>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Booking;
