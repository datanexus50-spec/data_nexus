import React from 'react';
import { BarChart3, Database, BrainCircuit, Target, Lightbulb, Banknote } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
    {
        icon: <BarChart3 className="w-6 h-6" />,
        title: "Advanced Analytics",
        description: "Transform raw data into strategic insights with custom dashboards, forecasting models, and KPI tracking systems tailored to your diverse business needs."
    },
    {
        icon: <Database className="w-6 h-6" />,
        title: "Data Engineering",
        description: "Build robust, scalable data pipelines and warehouses. We ensure your data infrastructure is reliable, secure, and ready for high-performance analysis."
    },
    {
        icon: <BrainCircuit className="w-6 h-6" />,
        title: "AI & Machine Learning",
        description: "Leverage predictive algorithms and generative AI to automate processes, personalize customer experiences, and uncover hidden opportunities."
    },
    {
        icon: <Banknote className="w-6 h-6" />,
        title: "Financial Modeling",
        description: "Sophisticated financial data analysis, risk assessment models, and investment scenario planning for CFOs and finance teams."
    },
    {
        icon: <Target className="w-6 h-6" />,
        title: "Business Intelligence",
        description: "End-to-end BI implementation using PowerBI, Tableau, or Looker. We democratize data access across your organization."
    },
    {
        icon: <Lightbulb className="w-6 h-6" />,
        title: "Data Strategy",
        description: "Defined roadmaps for data maturity. We help you align technology investments with business goals for maximum ROI."
    }
];

const Services = () => {
    return (
        <section id="services" className="py-24 bg-slate-50">
            <div className="container mx-auto px-6 md:px-12">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Our Expertise</h2>
                    <p className="text-lg text-slate-600">
                        Comprehensive data solutions designed to solve complex business challenges.
                        We bridge the gap between technical complexity and business value.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-shadow border border-slate-100 group"
                        >
                            <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                            <p className="text-slate-500 leading-relaxed">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
