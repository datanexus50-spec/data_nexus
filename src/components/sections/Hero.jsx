import React from 'react';
import { ArrowRight, ChevronRight, BarChart, Database, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section className="relative pt-20 pb-32 overflow-hidden bg-white">
            {/* Background Elements */}
            <div className="absolute top-0 inset-0 z-0 opacity-30 select-none pointer-events-none">
                <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-blue-100 blur-3xl mix-blend-multiply filter" />
                <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-indigo-100 blur-3xl mix-blend-multiply filter" />
            </div>

            <div className="container mx-auto px-6 md:px-12 relative z-10">
                <div className="max-w-4xl mx-auto text-center flex flex-col items-center">

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-blue-700 text-sm font-semibold mb-8 border border-blue-100"
                    >
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                        </span>
                        Accepting New Clients for Q1 2026
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 mb-6 leading-tight"
                    >
                        Transforming Data into <br className="hidden md:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                            Digital Intelligence
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="text-xl text-slate-500 mb-10 max-w-2xl leading-relaxed"
                    >
                        We help forward-thinking companies build scalable data infrastructure,
                        unlock actionable insights, and implement AI solutions that drive real business growth.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
                    >
                        <a href="#contact" className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-semibold transition-all shadow-lg hover:shadow-blue-600/25">
                            Book a Consultation
                            <ArrowRight size={18} />
                        </a>
                        <a href="#services" className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 px-8 py-4 rounded-full font-semibold transition-all hover:border-slate-300">
                            Explore Services
                            <ChevronRight size={18} />
                        </a>
                    </motion.div>

                    {/* Stats / Trust Badges */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="mt-20 pt-10 border-t border-slate-100 grid grid-cols-2 md:grid-cols-4 gap-8 w-full"
                    >
                        <div className="text-center">
                            <div className="text-3xl font-bold text-slate-900 mb-1">50+</div>
                            <div className="text-slate-500 text-sm font-medium">Enterprise Clients</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-slate-900 mb-1">$500M+</div>
                            <div className="text-slate-500 text-sm font-medium">Revenue Optimized</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-slate-900 mb-1">98%</div>
                            <div className="text-slate-500 text-sm font-medium">Client Retention</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-slate-900 mb-1">24/7</div>
                            <div className="text-slate-500 text-sm font-medium">Support Coverage</div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Hero;
