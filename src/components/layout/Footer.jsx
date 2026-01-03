import { Link } from 'react-router-dom';
import { services } from '../../data/services';
import { BarChart2, Linkedin, Twitter, Mail } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-slate-900 text-white py-16 border-t border-slate-800">
            <div className="container mx-auto px-6 md:px-12 grid md:grid-cols-4 gap-12">
                <div className="col-span-1 md:col-span-2">
                    {/* Brand section remains the same */}
                    <div className="text-2xl font-bold mb-6 flex items-center gap-2">
                        <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white">
                            <BarChart2 className="w-5 h-5" />
                        </div>
                        DataNexus
                    </div>
                    <p className="text-slate-400 max-w-sm mb-6 leading-relaxed">
                        Empowering businesses with actionable insights, advanced data engineering, and cutting-edge AI solutions. We turn data into your most valuable asset.
                    </p>
                    <div className="flex gap-4">
                        <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white transition-colors">
                            <Linkedin size={20} />
                        </a>
                        <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white transition-colors">
                            <Twitter size={20} />
                        </a>
                        <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white transition-colors">
                            <Mail size={20} />
                        </a>
                    </div>
                </div>

                <div>
                    <h4 className="font-bold text-lg mb-6 text-white">Services</h4>
                    <ul className="space-y-3 text-slate-400">
                        {services.map((service) => (
                            <li key={service.id}>
                                <Link to={`/services/${service.id}`} className="hover:text-blue-400 transition-colors">
                                    {service.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h4 className="font-bold text-lg mb-6 text-white">Company</h4>
                    <ul className="space-y-3 text-slate-400">
                        <li><a href="#" className="hover:text-blue-400 transition-colors">About Us</a></li>
                        <li><a href="#" className="hover:text-blue-400 transition-colors">Our Process</a></li>
                        <li><a href="#" className="hover:text-blue-400 transition-colors">Case Studies</a></li>
                        <li><a href="#" className="hover:text-blue-400 transition-colors">Careers</a></li>
                        <li><a href="#" className="hover:text-blue-400 transition-colors">Contact</a></li>
                    </ul>
                </div>
            </div>
            <div className="container mx-auto px-6 md:px-12 mt-16 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-sm">
                <p>© {new Date().getFullYear()} DataNexus Consultancy. All rights reserved.</p>
                <div className="flex gap-6">
                    <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                    <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
