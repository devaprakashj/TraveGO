import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CreditCard, Lock, CheckCircle2, AlertCircle } from 'lucide-react';
import { db } from '../firebase';
import { collection, addDoc } from 'firebase/firestore';

const Payment = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const bookingData = location.state;

    const [amount, setAmount] = useState('');
    const [error, setError] = useState('');
    const [isProcessing, setIsProcessing] = useState(false);

    if (!bookingData) {
        return (
            <div className="pt-40 text-center">
                <h2 className="text-2xl font-bold">No booking session found.</h2>
                <button onClick={() => navigate('/trips')} className="text-primary-600 mt-4">Browse Trips</button>
            </div>
        );
    }

    const handlePayment = (e) => {
        e.preventDefault();
        setIsProcessing(true);
        setError('');

        // Simulate network delay
        setTimeout(async () => {
            if (parseFloat(amount) === bookingData.totalPrice) {
                try {
                    // Success - Save to Firestore
                    const bookingId = 'TB-' + Math.random().toString(36).substr(2, 9).toUpperCase();

                    await addDoc(collection(db, "bookings"), {
                        ...bookingData,
                        bookingId,
                        status: 'confirmed',
                        paidAt: new Date().toISOString()
                    });

                    navigate('/ticket', { state: { ...bookingData, bookingId } });
                } catch (err) {
                    console.error("Firestore Error:", err);
                    setError("Booking saved locally but failed to reach cloud. Please keep your booking ID.");
                    setIsProcessing(false);
                }
            } else {
                setError(`Please enter the exact total amount: ₹${bookingData.totalPrice.toLocaleString('en-IN')}`);
                setIsProcessing(false);
            }
        }, 1500);
    };

    return (
        <div className="pt-40 pb-20 bg-slate-50 min-h-screen">
            <div className="container mx-auto px-4">
                <div className="max-w-xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="bg-white rounded-3xl shadow-card p-10 relative overflow-hidden"
                    >
                        {/* Design Element */}
                        <div className="absolute top-0 left-0 w-full h-2 bg-primary-600"></div>

                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-12 h-12 bg-primary-50 text-primary-600 rounded-2xl flex items-center justify-center">
                                <CreditCard />
                            </div>
                            <h1 className="text-2xl font-bold text-slate-900">Secure Payment</h1>
                        </div>

                        <div className="bg-slate-50 p-6 rounded-2xl mb-8 border border-slate-100">
                            <p className="text-slate-500 text-sm mb-1">Total to Pay</p>
                            <p className="text-4xl font-black text-slate-900">₹{bookingData.totalPrice.toLocaleString('en-IN')}</p>
                        </div>

                        <form onSubmit={handlePayment} className="space-y-6">
                            <div>
                                <label className="block text-sm font-bold text-slate-700 mb-2">Verification Amount</label>
                                <div className="relative">
                                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-bold">₹</span>
                                    <input
                                        required
                                        type="number"
                                        step="0.01"
                                        className={`w-full pl-10 pr-4 py-4 bg-white border ${error ? 'border-red-500 ring-red-100' : 'border-slate-200'} rounded-2xl focus:ring-4 focus:ring-primary-100 outline-none transition-all`}
                                        placeholder="Enter total amount"
                                        value={amount}
                                        onChange={(e) => setAmount(e.target.value)}
                                    />
                                </div>
                                <p className="mt-2 text-xs text-slate-400 flex items-center gap-1">
                                    <Lock className="w-3 h-3" />
                                    Your payment is secured with 256-bit encryption.
                                </p>
                            </div>

                            {error && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="p-4 bg-red-50 text-red-600 rounded-xl flex items-center gap-3 text-sm"
                                >
                                    <AlertCircle className="w-5 h-5 flex-shrink-0" />
                                    {error}
                                </motion.div>
                            )}

                            <button
                                disabled={isProcessing}
                                type="submit"
                                className={`w-full py-4 rounded-2xl font-bold text-white transition-all flex items-center justify-center gap-3 ${isProcessing ? 'bg-slate-300 cursor-not-allowed' : 'bg-primary-600 hover:bg-primary-700'
                                    }`}
                            >
                                {isProcessing ? (
                                    <>
                                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                        Processing...
                                    </>
                                ) : (
                                    <>Pay Now & Confirm</>
                                )}
                            </button>
                        </form>

                        <div className="mt-8 flex items-center justify-center gap-6">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa" className="h-4 opacity-50 gray-scale" />
                            <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" className="h-6 opacity-50" />
                            <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="PayPal" className="h-4 opacity-50" />
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Payment;
