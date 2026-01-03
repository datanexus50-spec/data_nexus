import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { services } from '../data/services';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';

const ServiceDetail = () => {
    const { id } = useParams();
    const service = services.find(s => s.id === id);

    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!service) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-slate-50">
                <div className="text-center">
                    <h2 className="text-2xl font-bold text-slate-800">Service not found</h2>
                    <Link to="/" className="text-blue-600 hover:underline mt-4 inline-block">Return Home</Link>
                </div>
            </div>
        );
    }

    const Icon = service.icon;

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <div className="min-h-screen bg-slate-950 text-slate-50 pt-32 pb-24">
            <div className="container mx-auto px-6 md:px-12 max-w-6xl">
                <Link to="/" className="inline-flex items-center text-slate-400 hover:text-white transition-colors mb-12 group">
                    <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
                    Back to Services
                </Link>

                {/* Header Section */}
                <div className="mb-20">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="bg-blue-500/10 p-6 rounded-2xl border border-blue-500/20 inline-block mb-8"
                    >
                        <Icon className="w-12 h-12 text-blue-400" strokeWidth={1.5} />
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-4xl md:text-6xl font-bold mb-8 text-white tracking-tight"
                    >
                        {service.title}
                    </motion.h1>

                    <div className="grid lg:grid-cols-3 gap-12 items-start">
                        {/* Short Description */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="lg:col-span-1"
                        >
                            <h3 className="text-sm font-bold tracking-widest text-slate-500 uppercase mb-4">Overview</h3>
                            <p className="text-xl text-slate-200 leading-relaxed font-medium">
                                {service.description}
                            </p>
                        </motion.div>

                        {/* Implementation Approach (New Paragraph) */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="lg:col-span-2 bg-slate-900/50 p-8 rounded-2xl border border-slate-800"
                        >
                            <h3 className="text-sm font-bold tracking-widest text-blue-400 uppercase mb-4">Our Approach</h3>
                            <p className="text-slate-300 leading-relaxed text-lg">
                                {service.solutionOverview}
                            </p>
                        </motion.div>
                    </div>
                </div>

                {/* Pain vs Value Bifurcation */}
                <div className="grid md:grid-cols-2 gap-8 md:gap-16">
                    {/* PAIN Column */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        className="relative"
                    >
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-500/50 to-transparent"></div>
                        <h3 className="text-xl font-bold text-white mt-8 mb-8 flex items-center">
                            <span className="w-8 h-8 rounded-full bg-red-500/10 text-red-500 flex items-center justify-center text-sm mr-3 border border-red-500/20">!</span>
                            The Challenge
                        </h3>
                        <ul className="space-y-6">
                            {service.pain.map((point, idx) => (
                                <motion.li key={idx} variants={itemVariants} className="flex items-start group">
                                    <div className="mt-1.5 mr-4 min-w-[6px]">
                                        <div className="w-1.5 h-1.5 rounded-full bg-red-500 group-hover:shadow-[0_0_8px_rgba(239,68,68,0.8)] transition-shadow"></div>
                                    </div>
                                    <span className="text-slate-400 group-hover:text-slate-200 transition-colors leading-relaxed">
                                        {point}
                                    </span>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* VALUE Column */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        className="relative"
                    >
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500/50 to-transparent"></div>
                        <h3 className="text-xl font-bold text-white mt-8 mb-8 flex items-center">
                            <span className="w-8 h-8 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center text-sm mr-3 border border-emerald-500/20">✓</span>
                            The Solution
                        </h3>
                        <ul className="space-y-6">
                            {service.value.map((point, idx) => (
                                <motion.li key={idx} variants={itemVariants} className="flex items-start group">
                                    <div className="mt-1.5 mr-4 min-w-[6px]">
                                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 group-hover:shadow-[0_0_8px_rgba(16,185,129,0.8)] transition-shadow"></div>
                                    </div>
                                    <span className="text-slate-400 group-hover:text-slate-200 transition-colors leading-relaxed">
                                        {point}
                                    </span>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetail;
