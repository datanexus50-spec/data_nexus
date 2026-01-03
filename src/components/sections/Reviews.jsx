import React from 'react';
import { Star, Quote } from 'lucide-react';
import { motion } from 'framer-motion';
import { reviews } from '../../data/reviews';

const Reviews = () => {
    return (
        <section id="reviews" className="py-24 bg-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-slate-50 rounded-bl-full -z-10" />

            <div className="container mx-auto px-6 md:px-12">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Client Success Stories</h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        Trusted by industry leaders worldwide. Here's what our partners say about delivering impact.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {reviews.map((review, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-slate-50 p-8 rounded-2xl border border-slate-100 relative flex flex-col h-full hover:shadow-lg transition-shadow"
                        >
                            <Quote className="absolute top-8 right-8 text-blue-100 w-10 h-10" />
                            <div className="flex gap-1 mb-4">
                                {[...Array(review.stars)].map((_, i) => (
                                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                                ))}
                            </div>
                            <p className="text-slate-700 italic mb-6 leading-relaxed flex-grow text-sm">"{review.text}"</p>
                            <div className="pt-4 border-t border-slate-200">
                                <div className="font-bold text-slate-900">{review.name}</div>
                                <div className="text-sm text-slate-500 font-medium">{review.role}</div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Badge */}
                <div className="mt-16 text-center">
                    <a
                        href="https://www.upwork.com/freelancers/~015c76dca1a5d05e3a?mp_source=share"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-[#14a800]/10 text-[#14a800] rounded-full text-sm font-bold border border-[#14a800]/20 hover:bg-[#14a800]/20 transition-colors"
                    >
                        <span className="w-2 h-2 bg-[#14a800] rounded-full animate-pulse"></span>
                        Top Rated Series on Upwork
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Reviews;
