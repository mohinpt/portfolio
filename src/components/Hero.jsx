import { ArrowRight, ChevronDown } from 'lucide-react';

const Hero = () => {
    return (
        <section id="home" className="min-h-screen flex flex-col justify-center pt-16 relative">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto">
                    <p className="text-black-600 font-medium mb-4 animate-on-scroll animated">
                        Hello, I'm a
                    </p>
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-900 mb-6 animate-on-scroll animated" style={{ animationDelay: '0.1s' }}>
                        Full Stack Developer
                    </h1>
                    <p className="text-lg text-slate-600 mb-8 animate-on-scroll animated" style={{ animationDelay: '0.2s' }}>
                        I build modern web applications with JavaScript, React, Node.js, and more.
                        Passionate about creating clean, efficient, and user-friendly solutions.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center animate-on-scroll animated" style={{ animationDelay: '0.3s' }}>
                        <button
                            className="bg-black text-white hover:bg-black/90 transition-colors px-6 py-2 rounded"
                        >
                            <a href="#projects" className="inline-flex items-center justify-center">View My Work  <ArrowRight size={16} className="ml-2" /> </a>
                        </button>
                        <button
                            className="border-slate-300 text-black hover:bg-slate-100 px-6 py-2 border rounded"
                        >
                            <a href="/resume.pdf" download>Resume</a>
                        </button>
                    </div>

                </div>
            </div>
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
                <a href="#about" className="text-slate-400 hover:text-black transition-colors">
                    <ChevronDown size={24} />
                </a>
            </div>
        </section>
    );
};

export default Hero;
