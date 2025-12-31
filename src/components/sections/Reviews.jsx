import React from 'react';
import { Star, Quote } from 'lucide-react';
import { motion } from 'framer-motion';

const reviews = [
    {
        name: "Sarah Johnson",
        role: "CTO @ TechFlow",
        text: "DataNexus transformed our erratic data streams into a single source of truth. Their engineering quality is top-tier.",
        stars: 5
    },
    {
        name: "Michael Chen",
        role: "Director of Analytics @ FinCorp",
        text: "The financial modeling delivered was precise and scalable. It saved us hundreds of hours in manual reporting.",
        stars: 5
    },
    {
        name: "Emily Davis",
        role: "Founder @ GrowthAI",
        text: "Professional, timely, and incredibly knowledgeable about the latest AI trends. Highly recommend for enterprise solutions.",
        stars: 5
    }
];

const Reviews = () => {
    return (
        <section id="reviews" className="py-24 bg-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-slate-50 rounded-bl-full -z-10" />

            <div className="container mx-auto px-6 md:px-12">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Client Success Stories</h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        See what our partners say about working with us. We take pride in delivering measurable impact.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {reviews.map((review, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-slate-50 p-8 rounded-2xl border border-slate-100 relative"
                        >
                            <Quote className="absolute top-8 right-8 text-blue-100 w-10 h-10" />
                            <div className="flex gap-1 mb-4">
                                {[...Array(review.stars)].map((_, i) => (
                                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                                ))}
                            </div>
                            <p className="text-slate-700 italic mb-6 leading-relaxed">"{review.text}"</p>
                            <div>
                                <div className="font-bold text-slate-900">{review.name}</div>
                                <div className="text-sm text-slate-500">{review.role}</div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Placeholder for future integrations */}
                <div className="mt-12 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 text-green-700 rounded-full text-sm font-medium border border-green-100">
                        <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                        Top Rated on Upwork
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Reviews;
