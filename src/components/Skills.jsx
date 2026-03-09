import React from 'react';
import { motion } from 'framer-motion';
import TiltCard from './TiltCard';

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      icon: "⚡",
      color: "from-cyan-400 to-blue-500",
      borderColor: "border-cyan-500/20",
      glowColor: "shadow-cyan-500/10",
      skills: ["C++", "C", "JavaScript", "Java", "Python", "Kotlin", "XML"]
    },
    {
      title: "Frameworks & Web",
      icon: "🌐",
      color: "from-purple-400 to-violet-500",
      borderColor: "border-purple-500/20",
      glowColor: "shadow-purple-500/10",
      skills: ["HTML", "CSS", "Tailwind CSS", "React", "Node.js"]
    },
    {
      title: "Tools & Platforms",
      icon: "🛠️",
      color: "from-pink-400 to-rose-500",
      borderColor: "border-pink-500/20",
      glowColor: "shadow-pink-500/10",
      skills: ["MySQL", "MongoDB", "Firebase", "Vercel", "Git", "GitHub", "Power BI"]
    },
    {
      title: "Core CS",
      icon: "🧠",
      color: "from-emerald-400 to-green-500",
      borderColor: "border-emerald-500/20",
      glowColor: "shadow-emerald-500/10",
      skills: ["DSA", "OOPs", "DBMS", "OS", "Computer Networks", "System Design"]
    }
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.15 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <section id="skills" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="font-mono text-primary text-sm tracking-widest uppercase">
            {'// what i know'}
          </span>
          <h2 className="text-4xl md:text-6xl font-black mt-3 tracking-tight">
            Technical <span className="neon-text">Skills</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto mt-4 text-sm leading-relaxed">
            Technologies and methodologies mastered through academic study and hands-on experience.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {skillCategories.map((category, index) => (
            <motion.div key={index} variants={cardVariants}>
              <TiltCard className={`cyber-card p-6 rounded-2xl h-full ${category.borderColor} hover:${category.glowColor}`}>
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-5">
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center text-lg shadow-lg`}>
                      {category.icon}
                    </div>
                    <h3 className="text-lg font-bold text-white/90">
                      {category.title}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1.5 bg-white/[0.03] text-xs font-mono text-gray-400 rounded-lg border border-white/5 pill-glow cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
