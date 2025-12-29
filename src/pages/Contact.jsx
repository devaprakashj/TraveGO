import { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { db } from '../firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [status, setStatus] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('submitting');
        try {
            await addDoc(collection(db, "contacts"), {
                ...formData,
                createdAt: serverTimestamp()
            });
            setFormData({ name: '', email: '', subject: '', message: '' });
            setStatus('success');
            setTimeout(() => setStatus(''), 5000);
        } catch (error) {
            console.error("Contact form error:", error);
            setStatus('error');
        }
    };

    return (
        <div className="pt-32 pb-20 bg-slate-50 min-h-screen">
            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-16">
                        <h1 className="text-4xl font-black text-slate-900 mb-4">Get in Touch</h1>
                        <p className="text-slate-500 max-w-2xl mx-auto">
                            Have questions about our trips or need help planning your next adventure? Our team is available 24/7 to assist you.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        {/* Contact Info */}
                        <div className="lg:col-span-1 space-y-8">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                className="bg-white p-8 rounded-3xl shadow-card border border-slate-100"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-primary-50 text-primary-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                                        <Mail />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-slate-900">Email Us</h3>
                                        <p className="text-slate-500 text-sm">hello@travego.com</p>
                                        <p className="text-slate-500 text-sm">support@travego.com</p>
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.1 }}
                                className="bg-white p-8 rounded-3xl shadow-card border border-slate-100"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-green-50 text-green-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                                        <Phone />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-slate-900">Call Us</h3>
                                        <p className="text-slate-500 text-sm">+1 (234) 567-890</p>
                                        <p className="text-slate-500 text-sm">Mon-Fri 9am to 6pm</p>
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.2 }}
                                className="bg-white p-8 rounded-3xl shadow-card border border-slate-100"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-purple-50 text-purple-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                                        <MapPin />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-slate-900">Visit Us</h3>
                                        <p className="text-slate-500 text-sm">123 Travel Street</p>
                                        <p className="text-slate-500 text-sm">Adventure City, World 4567</p>
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                        {/* Form */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="lg:col-span-2 bg-white p-8 md:p-12 rounded-[2.5rem] shadow-card border border-slate-100"
                        >
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-bold text-slate-700 mb-2">Your Name</label>
                                        <input
                                            required
                                            type="text"
                                            className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-primary-500 outline-none transition-all"
                                            placeholder="John Doe"
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold text-slate-700 mb-2">Email Address</label>
                                        <input
                                            required
                                            type="email"
                                            className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-primary-500 outline-none transition-all"
                                            placeholder="john@example.com"
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-2">Subject</label>
                                    <input
                                        required
                                        type="text"
                                        className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-primary-500 outline-none transition-all"
                                        placeholder="Inquiry about Bali trip"
                                        value={formData.subject}
                                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-2">Message</label>
                                    <textarea
                                        required
                                        rows="5"
                                        className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-primary-500 outline-none transition-all resize-none"
                                        placeholder="How can we help you?"
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    ></textarea>
                                </div>

                                <button
                                    disabled={status === 'submitting'}
                                    type="submit"
                                    className="w-full btn-primary py-4 flex items-center justify-center gap-2 text-lg disabled:opacity-50"
                                >
                                    {status === 'submitting' ? 'Sending...' : (
                                        <>
                                            <Send className="w-5 h-5" />
                                            Send Message
                                        </>
                                    )}
                                </button>

                                {status === 'success' && (
                                    <p className="text-center text-green-600 font-bold bg-green-50 py-3 rounded-2xl border border-green-100">
                                        Message sent successfully! We'll get back to you soon.
                                    </p>
                                )}
                                {status === 'error' && (
                                    <p className="text-center text-red-600 font-bold bg-red-50 py-3 rounded-2xl border border-red-100">
                                        Something went wrong. Please try again later.
                                    </p>
                                )}
                            </form>
                        </motion.div>
                    </div>

                    {/* Developer Section - SEO Optimized */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mt-20 bg-gradient-to-br from-slate-900 to-slate-800 rounded-[2.5rem] p-8 md:p-12 text-center relative overflow-hidden"
                    >
                        {/* Decorative */}
                        <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary-500/10 rounded-full blur-3xl"></div>
                        <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-primary-500/10 rounded-full blur-3xl"></div>

                        <div className="relative z-10">
                            <span className="text-primary-400 font-bold tracking-widest uppercase text-sm">About the Developer</span>
                            <h2 className="text-2xl md:text-3xl font-black text-white mt-3 mb-6">
                                Who is Devaprakash J?
                            </h2>
                            <p className="text-slate-300 max-w-3xl mx-auto mb-6 leading-relaxed">
                                <strong className="text-white">Devaprakash J</strong> is a skilled <strong className="text-primary-400">AI & ML Engineer</strong> and <strong className="text-primary-400">Full Stack Developer</strong> from India. He specializes in building modern, scalable web applications using React, Node.js, Python, and AI-powered systems. This travel booking platform (TraveGo) showcases his expertise in creating real-world, production-ready software solutions.
                            </p>
                            <p className="text-slate-400 max-w-2xl mx-auto mb-8 text-sm">
                                Looking for a freelance developer for your travel website, booking platform, or any web/AI project? Hire Devaprakash J for professional, high-quality development work.
                            </p>

                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                <a
                                    href="https://www.linkedin.com/in/devaprakashj/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-bold transition-all"
                                >
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                                    Connect on LinkedIn
                                </a>
                                <a
                                    href="mailto:devaprakashofficial@gmail.com"
                                    className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-8 py-3 rounded-full font-bold transition-all border border-white/20"
                                >
                                    <Mail className="w-5 h-5" />
                                    Hire for Projects
                                </a>
                            </div>

                            <div className="mt-10 pt-8 border-t border-white/10">
                                <p className="text-slate-500 text-xs uppercase tracking-wider mb-3">Skills & Expertise</p>
                                <div className="flex flex-wrap justify-center gap-2">
                                    {['React.js', 'Node.js', 'Python', 'AI & ML', 'Full Stack', 'Firebase', 'JavaScript', 'Tailwind CSS', 'Web Apps'].map((skill) => (
                                        <span key={skill} className="bg-white/5 text-slate-300 px-4 py-2 rounded-full text-sm font-medium border border-white/10">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
