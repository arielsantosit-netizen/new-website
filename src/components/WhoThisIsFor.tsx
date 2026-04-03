'use client';

import { motion, Variants } from 'framer-motion';

const WhoThisIsFor: React.FC = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <section
      id="who-this-is-for"
      className="bg-white py-24 lg:py-32 relative overflow-hidden"
    >
      {/* Decorative Accents */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-50/50 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-pink-50/50 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start"
        >
          {/* Left: Target Audience */}
          <div className="space-y-12">
            <motion.div variants={itemVariants}>
              <h2 className="text-4xl md:text-6xl font-serif-elegant text-[#111111] leading-tight mb-6">
                Target <span className="text-gradient-elegant italic">Audience</span> & Focus
              </h2>
              <div className="h-[2px] w-24 bg-gradient-to-r from-gray-300 to-transparent mb-8"></div>
            </motion.div>

            <div className="space-y-8">
              {[
                "Career changers seeking digital clarity",
                "Veterans transitioning to tech roles",
                "Entry-level tech professionals",
                "Lifelong learners and growth seekers"
              ].map((text, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className="flex items-center gap-6 group"
                >
                  <div className="w-12 h-12 rounded-full bg-gray-50 border border-gray-200 flex items-center justify-center text-gray-500 font-serif-elegant group-hover:border-gray-400 group-hover:text-gray-800 transition-colors shadow-sm">
                    0{i + 1}
                  </div>
                  <p className="text-xl md:text-2xl text-gray-600 font-serif-elegant tracking-wide">
                    {text}
                  </p>
                </motion.div>
              ))}
            </div>

            <motion.div
              variants={itemVariants}
              className="p-8 rounded-3xl bg-gray-50/80 border border-gray-100 shadow-sm border-l-4 border-l-gray-300"
            >
              <p className="text-gray-400 text-xs font-serif-elegant uppercase tracking-[0.2em] mb-4">The Philosophy</p>
              <p className="text-2xl text-[#111111] font-serif-elegant italic leading-tight">
                "Making technology and career growth accessible to all, regardless of background."
              </p>
            </motion.div>
          </div>

          {/* Right: The Strategist */}
          <div className="space-y-12">
            <motion.div variants={itemVariants}>
              <h2 className="text-4xl md:text-6xl font-serif-elegant text-[#111111] leading-tight mb-6">
                The <span className="text-gradient-elegant italic">Strategist</span>
              </h2>
              <div className="h-[2px] w-24 bg-gradient-to-r from-gray-300 to-transparent mb-8"></div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="space-y-8 text-gray-600 text-lg leading-relaxed font-serif-elegant"
            >
              <p>
                Air Force veteran and active Navy Reservist with <span className="text-[#111] font-semibold">10+ years</span> of precision-driven IT leadership. I bring military-grade discipline to modern technology management.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { label: "Credentials", items: ["MA IT Project Management", "BS IS Security"] },
                  { label: "Strategic Focus", items: ["Infrastructure", "Digital Transformation"] }
                ].map((group, i) => (
                  <div key={i} className="p-6 rounded-2xl bg-white border border-gray-100 shadow-sm">
                    <p className="text-[#111] font-serif-elegant font-medium text-xs uppercase tracking-widest mb-4">{group.label}</p>
                    <ul className="space-y-2">
                      {group.items.map((item, j) => (
                        <li key={j} className="text-sm text-gray-600 flex items-center gap-2 font-serif-elegant">
                          <span className="w-1 h-1 rounded-full bg-gray-400" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div className="p-8 rounded-3xl bg-white border border-gray-100 shadow-md relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                  <svg className="w-12 h-12 text-[#111111]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <p className="text-gray-400 text-xs font-serif-elegant uppercase tracking-[0.2em] mb-4">Core Mission</p>
                <p className="italic text-[#111] text-lg font-serif-elegant leading-relaxed">
                  "My mission is to make technology, career advancement, and lifelong learning accessible to all, regardless of background. I believe in sharing expertise with clarity, empathy, and actionable guidance. Across platforms, I strive to help others unlock their potential in tech and professional growth while maintaining privacy and digital safety. Whether speaking publicly or creating faceless content, I advocate for every learner's journey."
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhoThisIsFor;

