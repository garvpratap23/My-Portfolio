import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Sparkles } from 'lucide-react';
import useMagneticHover from '../hooks/useMagneticHover';
import useTextScramble from '../hooks/useTextScramble';
import useTypewriter from '../hooks/useTypewriter';
import { SplineScene } from './ui/splite';

const Hero = () => {
  const magneticBtn1 = useMagneticHover(0.3);
  const magneticBtn2 = useMagneticHover(0.3);
  const { displayText: scrambledName } = useTextScramble('Garv Pratap Singh', { delay: 500, scrambleDuration: 2000 });
  const typedRole = useTypewriter(
    ['Full Stack Developer', 'React Enthusiast', 'Problem Solver', 'UI/UX Tinkerer', 'Open Source Contributor'],
    { delay: 2500, typeSpeed: 70, deleteSpeed: 35, pauseTime: 2500 }
  );

  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden pt-20">
      {/* Animated gradient meshes */}
      <div
        className="absolute top-10 left-0 w-[500px] h-[500px] rounded-full blur-[150px] opacity-20 animate-pulse-slow"
        style={{ background: 'radial-gradient(circle, #00d4ff, transparent)', willChange: 'opacity' }}
      />
      <div
        className="absolute bottom-10 right-0 w-[600px] h-[600px] rounded-full blur-[160px] opacity-15 animate-pulse-slow"
        style={{ background: 'radial-gradient(circle, #7b2ff7, transparent)', willChange: 'opacity', animationDelay: '2s' }}
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full blur-[120px] opacity-10 animate-pulse-slow"
        style={{ background: 'radial-gradient(circle, #ff2d9b, transparent)', willChange: 'opacity', animationDelay: '4s' }}
      />

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10 flex items-center gap-4">

        {/* Left: text content */}
        <motion.div
          className="flex-1 text-left"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* Badge */}
          <motion.div
            className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-white/[0.03] border border-primary/20 text-sm text-primary/80 mb-8 backdrop-blur-sm"
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <Sparkles size={14} className="text-neon" />
            <span className="font-mono text-xs tracking-wider uppercase">Available for opportunities</span>
          </motion.div>

          {/* Name with scramble effect */}
          <motion.h1
            className="text-5xl md:text-7xl font-black mb-4 tracking-tighter"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="text-white/90">Hi, I'm </span>
            <br />
            <span className="neon-text font-mono">{scrambledName}</span>
          </motion.h1>

          {/* Typewriter role */}
          <motion.div
            className="text-xl md:text-2xl font-mono text-gray-400 mb-6 h-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.5 }}
          >
            <span className="text-primary/60">{'> '}</span>
            <span className="text-gray-300">{typedRole}</span>
            <span className="typewriter-cursor" />
          </motion.div>

          {/* Description */}
          <motion.p
            className="text-lg text-gray-500 max-w-xl mb-12 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            I build exceptional digital experiences. Specialized in Full Stack Development
            with a focus on modern web technologies like React, Tailwind, and Node.js.
          </motion.p>

          {/* Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row items-start gap-5"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            <div {...magneticBtn1}>
              <a
                href="#projects"
                className="px-8 py-3.5 bg-gradient-to-r from-primary to-secondary text-white rounded-full font-semibold flex items-center gap-2 group btn-cyber hover:shadow-[0_0_30px_rgba(0,212,255,0.3)] transition-all"
              >
                View Work
                <ArrowRight size={18} className="group-hover:translate-x-1.5 transition-transform duration-300" />
              </a>
            </div>
            <div {...magneticBtn2}>
              <a
                href="/garvgeneralcv.pdf"
                target="_blank"
                className="px-8 py-3.5 bg-white/[0.03] border border-white/10 hover:border-primary/30 text-white rounded-full font-semibold flex items-center gap-2 btn-cyber backdrop-blur-sm hover:shadow-[0_0_20px_rgba(0,212,255,0.1)] transition-all"
              >
                Download CV
                <Download size={18} />
              </a>
            </div>
          </motion.div>
        </motion.div>

        {/* Right: Spline robot — no wrapper box, just the scene */}
        <motion.div
          className="flex-1 h-[600px] hidden md:block"
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <SplineScene
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="w-full h-full"
          />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.5 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-white/10 rounded-full flex justify-center pt-2"
          animate={{ borderColor: ['rgba(255,255,255,0.1)', 'rgba(0,212,255,0.3)', 'rgba(255,255,255,0.1)'] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div
            className="w-1 h-2 bg-primary rounded-full"
            animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
