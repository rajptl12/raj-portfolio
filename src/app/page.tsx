"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./page.module.css";
import { 
  ArrowRight, 
  Terminal, 
  Smartphone, 
  Mail, 
  MapPin, 
  Phone, 
  GraduationCap, 
  Briefcase, 
  ChevronRight, 
  Globe,
  Github,
  Linkedin,
  FileText,
  ArrowUp,
  ExternalLink,
  Code
} from "lucide-react";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'internships' | 'education'>('internships');
  const [terminalTab, setTerminalTab] = useState<'profile' | 'skills' | 'contact'>('profile');
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      cardsRef.current.forEach((card) => {
        if (!card) return;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty("--mouse-x", `${x}px`);
        card.style.setProperty("--mouse-y", `${y}px`);
      });
    };

    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }

      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((window.scrollY / totalHeight) * 100);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);



  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const getTerminalContent = () => {
    if (terminalTab === 'profile') {
      return [
        '{',
        '  "developer": {',
        '    "name": "Raj Patel",',
        '    "title": "Software & Frontend Developer",',
        '    "location": "Montclair, NJ, USA",',
        '    "education": {',
        '      "degree": "MS in Computer Science",',
        '      "university": "Montclair State University",',
        '      "expected": 2026',
        '    },',
        '    "currentFocus": "React, Next.js, & Mobile Dev"',
        '  }',
        '}'
      ];
    } else if (terminalTab === 'skills') {
      return [
        '{',
        '  "skills": {',
        '    "frontend": ["React.js", "Next.js", "Tailwind CSS"],',
        '    "languages": ["JavaScript", "Java", "C++", "C", "SQL"],',
        '    "mobile": ["Flutter", "Android (Java)"],',
        '    "databases": ["MongoDB", "MySQL", "Supabase"],',
        '    "tools": ["Git", "GitHub", "Figma"]',
        '  }',
        '}'
      ];
    } else {
      return [
        '{',
        '  "contact": {',
        '    "email": "patelrj539@gmail.com",',
        '    "phone": "+1 (732) 690-2765",',
        '    "github": "github.com/rajptl12",',
        '    "linkedin": "linkedin.com/in/raj-patel-profile",',
        '    "status": "Open to Internships"',
        '  }',
        '}'
      ];
    }
  };

  return (
    <div className={styles.main}>
      {/* Scroll Progress Bar */}
      <div className={styles.scrollProgress} style={{ width: `${scrollProgress}%` }} />

      {/* Ambient glowing blobs */}
      <div className={styles.ambientBloom} />
      <div className={styles.ambientBloomSecondary} />

      {/* Floating Social Icons Sidebar */}
      <div className={styles.socialSidebar}>
        <a href="https://github.com/rajptl12" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <Github size={20} />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <Linkedin size={20} />
        </a>
        <a href="mailto:patelrj539@gmail.com" aria-label="Email">
          <Mail size={20} />
        </a>
        <div className={styles.sidebarLine}></div>
      </div>

      {/* Navigation */}
      <nav className={styles.nav}>
        <div className={styles.logo}>
          <span className="text-gradient">Raj</span> Patel
        </div>
        
        <ul className={`${styles.navLinks} ${mobileMenuOpen ? styles.navOpen : ''}`}>
          <li><a href="#about" className={styles.navLink} onClick={() => setMobileMenuOpen(false)}>About</a></li>
          <li><a href="#experience" className={styles.navLink} onClick={() => setMobileMenuOpen(false)}>Experience</a></li>
          <li><a href="#projects" className={styles.navLink} onClick={() => setMobileMenuOpen(false)}>Projects</a></li>
          <li><a href="#skills" className={styles.navLink} onClick={() => setMobileMenuOpen(false)}>Skills</a></li>
          <li><a href="#contact" className={styles.navLink} onClick={() => setMobileMenuOpen(false)}>Contact</a></li>
          
          <li className={styles.mobileNavOnly}>
            <div className={styles.navActionsMobile}>
              <a href="https://github.com/rajptl12" target="_blank" rel="noopener noreferrer">
                <Github size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <Linkedin size={20} />
              </a>
            </div>
          </li>
        </ul>

        <div className={styles.navActions}>
          <a href="https://github.com/rajptl12" target="_blank" rel="noopener noreferrer" className={styles.iconBtn} aria-label="GitHub">
            <Github size={20} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className={styles.iconBtn} aria-label="LinkedIn">
            <Linkedin size={20} />
          </a>
        </div>

        <div className={styles.mobileMenuBtn} onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
           <div className={`${styles.hamburger} ${mobileMenuOpen ? styles.hamburgerActive : ''}`}></div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="about" className={styles.hero}>
        <div className={styles.heroGrid}>
          {/* Hero Left Content */}
          <div className={styles.heroContent}>
            <div className={styles.heroBadge}>
              <span className={styles.badgePulse}></span> Available for Internships
            </div>
            
            <h1 className={`${styles.heroTitle} animate-fade-in-up delay-100`}>
              Software & Frontend <br />
              <span className="text-gradient">Developer.</span>
            </h1>
            
            <p className={`${styles.heroSubtitle} animate-fade-in-up delay-200`}>
              I'm a frontend developer with hands-on experience building responsive, scalable web applications using React.js and Next.js. Currently pursuing an MS in Computer Science at Montclair State University.
            </p>
            
            <div className={`${styles.heroActions} animate-fade-in-up delay-300`}>
              <a href="#projects" className={styles.primaryBtn}>
                View My Work <ArrowRight size={18} />
              </a>
              <a href="#contact" className={styles.secondaryBtn}>
                Contact Me
              </a>
            </div>
          </div>

          {/* Hero Right: Interactive Code Terminal */}
          <div className={`${styles.terminalWrapper} animate-fade-in-up delay-200`}>
            <div className={styles.terminalWindow}>
              {/* Window Header */}
              <div className={styles.terminalHeader}>
                <div className={styles.terminalControls}>
                  <span className={`${styles.dot} ${styles.close}`}></span>
                  <span className={`${styles.dot} ${styles.minimize}`}></span>
                  <span className={`${styles.dot} ${styles.maximize}`}></span>
                </div>
                <div className={styles.terminalTitle}>raj_patel.json</div>
              </div>
              
              {/* Tab Selector */}
              <div className={styles.terminalTabs}>
                <button 
                  className={`${styles.terminalTab} ${terminalTab === 'profile' ? styles.terminalTabActive : ''}`}
                  onClick={() => setTerminalTab('profile')}
                >
                  profile.json
                </button>
                <button 
                  className={`${styles.terminalTab} ${terminalTab === 'skills' ? styles.terminalTabActive : ''}`}
                  onClick={() => setTerminalTab('skills')}
                >
                  skills.json
                </button>
                <button 
                  className={`${styles.terminalTab} ${terminalTab === 'contact' ? styles.terminalTabActive : ''}`}
                  onClick={() => setTerminalTab('contact')}
                >
                  contact.json
                </button>
              </div>

              {/* Terminal Code Body */}
              <div className={styles.terminalBody}>
                <pre>
                  <code>
                    {getTerminalContent().map((line, idx) => (
                      <div key={idx} className={styles.codeLine}>
                        <span className={styles.lineNumber}>{idx + 1}</span>
                        <span className={styles.lineText}>
                          {/* Basic code highlighting simulation */}
                          {line.split(/("[a-zA-Z0-9_]+")\s*:/).map((part, pIdx) => {
                            if (part.startsWith('"') && part.endsWith('"') && pIdx === 1) {
                              return <span key={pIdx} className={styles.syntaxKey}>{part}</span>;
                            }
                            // Highlight values
                            if (part.includes('"') && !part.endsWith(':')) {
                              return part.split(/("[^"]*")/).map((subPart, sIdx) => {
                                if (subPart.startsWith('"') && subPart.endsWith('"')) {
                                  return <span key={sIdx} className={styles.syntaxValue}>{subPart}</span>;
                                }
                                return subPart;
                              });
                            }
                            return part;
                          })}
                        </span>
                      </div>
                    ))}
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Experience & Education</h2>
          <div className={styles.titleDivider}></div>
          <p className={styles.sectionSub}>My professional and academic journey.</p>
        </div>

        <div className={styles.tabsWrapper}>
          <button 
            className={`${styles.tabBtn} ${activeTab === 'internships' ? styles.activeTab : ''}`}
            onClick={() => setActiveTab('internships')}
          >
            <Briefcase size={16} /> Internships
          </button>
          <button 
            className={`${styles.tabBtn} ${activeTab === 'education' ? styles.activeTab : ''}`}
            onClick={() => setActiveTab('education')}
          >
            <GraduationCap size={16} /> Education
          </button>
        </div>

        <div className={styles.timelineContainer}>
          {activeTab === 'internships' && (
            <>
              <div className={styles.timelineItem}>
                <div className={styles.timelineDiamond}><Briefcase size={14} /></div>
                <div className={styles.timelineCard}>
                  <div className={styles.timelineHeaderRow}>
                    <h3 className={styles.timelineRole}>Frontend Development Intern</h3>
                    <span className={styles.timelineDuration}>Jan 2024 – Jun 2024</span>
                  </div>
                  <p className={styles.timelineCompany}>Apple Tech Pvt. Ltd. — India</p>
                  <ul className={styles.timelineList}>
                    <li><ChevronRight size={14}/> Developed and enhanced reusable frontend UI components using React.js.</li>
                    <li><ChevronRight size={14}/> Integrated REST APIs with frontend applications, enabling dynamic data rendering.</li>
                    <li><ChevronRight size={14}/> Improved cross-browser compatibility and mobile responsiveness.</li>
                  </ul>
                </div>
              </div>
              <div className={styles.timelineItem}>
                <div className={styles.timelineDiamond}><Briefcase size={14} /></div>
                <div className={styles.timelineCard}>
                  <div className={styles.timelineHeaderRow}>
                    <h3 className={styles.timelineRole}>Web Development Intern</h3>
                    <span className={styles.timelineDuration}>May 2023</span>
                  </div>
                  <p className={styles.timelineCompany}>Tech Elecon Pvt. Ltd. — India</p>
                  <ul className={styles.timelineList}>
                    <li><ChevronRight size={14}/> Designed responsive user interfaces using HTML5, CSS3, Bootstrap, and React.</li>
                    <li><ChevronRight size={14}/> Created UI wireframes and interactive prototypes in Figma for seamless handoff.</li>
                  </ul>
                </div>
              </div>
            </>
          )}

          {activeTab === 'education' && (
            <>
              <div className={styles.timelineItem}>
                <div className={styles.timelineDiamond}><GraduationCap size={14} /></div>
                <div className={styles.timelineCard}>
                  <div className={styles.timelineHeaderRow}>
                    <h3 className={styles.timelineRole}>Master of Science in Computer Science</h3>
                    <span className={styles.timelineDuration}>Expected 2026</span>
                  </div>
                  <p className={styles.timelineCompany}>Montclair State University — New Jersey, USA</p>
                  <p className={styles.timelineStatus}>Currently pursuing a Master's degree to deepen expertise in Software Engineering and Advanced Web Technologies.</p>
                </div>
              </div>
              <div className={styles.timelineItem}>
                <div className={styles.timelineDiamond}><GraduationCap size={14} /></div>
                <div className={styles.timelineCard}>
                  <div className={styles.timelineHeaderRow}>
                    <h3 className={styles.timelineRole}>B.E. in Information Technology</h3>
                    <span className={styles.timelineDuration}>Graduated May 2024</span>
                  </div>
                  <p className={styles.timelineCompany}>A.D. Patel Institute of Technology — India</p>
                  <p className={styles.timelineStatus}>CGPA: 7.94 / 10 | Foundation in Algorithms, Systems Design, and Web Applications.</p>
                </div>
              </div>
            </>
          )}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Featured Projects</h2>
          <div className={styles.titleDivider}></div>
          <p className={styles.sectionSub}>Applications I've built and designed.</p>
        </div>

        <div className={styles.grid}>
          {/* Project 1 */}
          <div 
            className={styles.card}
            ref={(el) => { cardsRef.current[0] = el; }}
          >
            <div className={styles.cardGlow}></div>
            <div className={styles.cardHeader}>
              <div className={styles.cardIcon}>
                <Terminal size={22} />
              </div>
              <div className={styles.projectLinks}>
                <a href="https://github.com/rajptl12" target="_blank" rel="noopener noreferrer" className={styles.projLinkBtn} aria-label="GitHub Repository">
                  <Github size={16} />
                </a>
              </div>
            </div>
            <h3 className={styles.cardTitle}>Khareedo – E-Commerce</h3>
            <p className={styles.cardDesc}>
              Built a modern, full-featured e-commerce frontend using Next.js with server-side rendering (SSR) for improved SEO and performance. Designed reusable UI components.
            </p>
            <div className={styles.tags}>
              <span className={styles.tag}>Next.js</span>
              <span className={styles.tag}>React</span>
              <span className={styles.tag}>Tailwind CSS</span>
            </div>
          </div>

          {/* Project 2 */}
          <div 
            className={styles.card}
            ref={(el) => { cardsRef.current[1] = el; }}
          >
            <div className={styles.cardGlow}></div>
            <div className={styles.cardHeader}>
              <div className={styles.cardIcon}>
                <Smartphone size={22} />
              </div>
              <div className={styles.projectLinks}>
                <a href="https://github.com/rajptl12" target="_blank" rel="noopener noreferrer" className={styles.projLinkBtn} aria-label="GitHub Repository">
                  <Github size={16} />
                </a>
              </div>
            </div>
            <h3 className={styles.cardTitle}>Zip Food – Mobile App</h3>
            <p className={styles.cardDesc}>
              Designed and implemented mobile UI using Flutter, focusing on smooth navigation and an intuitive user experience. Integrated Firebase for real-time live order tracking.
            </p>
            <div className={styles.tags}>
              <span className={styles.tag}>Flutter</span>
              <span className={styles.tag}>Firebase</span>
              <span className={styles.tag}>UI/UX</span>
            </div>
          </div>

          {/* Project 3 */}
          <div 
            className={styles.card}
            ref={(el) => { cardsRef.current[2] = el; }}
          >
            <div className={styles.cardGlow}></div>
            <div className={styles.cardHeader}>
              <div className={styles.cardIcon}>
                <Globe size={22} />
              </div>
              <div className={styles.projectLinks}>
                <a href="https://github.com/rajptl12" target="_blank" rel="noopener noreferrer" className={styles.projLinkBtn} aria-label="GitHub Repository">
                  <Github size={16} />
                </a>
                <a href="https://translator-app-psi-henna.vercel.app/" target="_blank" rel="noopener noreferrer" className={styles.projLinkBtn} aria-label="Live Demo">
                  <ExternalLink size={16} />
                </a>
              </div>
            </div>
            <h3 className={styles.cardTitle}>Translator App</h3>
            <p className={styles.cardDesc}>
              A real-time language translation web application built with React.js. Features a clean, responsive UI and connects to translation APIs for fast, accurate results.
            </p>
            <div className={styles.tags}>
              <span className={styles.tag}>React.js</span>
              <span className={styles.tag}>Vercel</span>
              <span className={styles.tag}>REST API</span>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Technical Skills</h2>
          <div className={styles.titleDivider}></div>
          <p className={styles.sectionSub}>Technologies and tools I work with.</p>
        </div>
        
        <div className={styles.skillsWrapper}>
          <div className={styles.skillCategory}>
            <div className={styles.skillCategoryHeader}>
              <Code size={18} />
              <h3>Languages</h3>
            </div>
            <div className={styles.tags}>
              <span className={styles.skillBadge}>JavaScript (ES6+)</span>
              <span className={styles.skillBadge}>Java</span>
              <span className={styles.skillBadge}>C++</span>
              <span className={styles.skillBadge}>C</span>
              <span className={styles.skillBadge}>SQL</span>
            </div>
          </div>
          
          <div className={styles.skillCategory}>
            <div className={styles.skillCategoryHeader}>
              <Globe size={18} />
              <h3>Frontend & Mobile</h3>
            </div>
            <div className={styles.tags}>
              <span className={styles.skillBadge}>React.js</span>
              <span className={styles.skillBadge}>Next.js</span>
              <span className={styles.skillBadge}>Tailwind CSS</span>
              <span className={styles.skillBadge}>Bootstrap</span>
              <span className={styles.skillBadge}>Flutter</span>
              <span className={styles.skillBadge}>Android (Java)</span>
            </div>
          </div>
          
          <div className={styles.skillCategory}>
            <div className={styles.skillCategoryHeader}>
              <Terminal size={18} />
              <h3>Tools & Databases</h3>
            </div>
            <div className={styles.tags}>
              <span className={styles.skillBadge}>MongoDB</span>
              <span className={styles.skillBadge}>MySQL</span>
              <span className={styles.skillBadge}>Supabase</span>
              <span className={styles.skillBadge}>Git / GitHub</span>
              <span className={styles.skillBadge}>Figma</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={styles.section}>
        <div className={styles.contactWrapper}>
          <div className={styles.titleDivider} style={{ margin: "0 auto 1.5rem auto" }}></div>
          <h2 className={styles.sectionTitle}>Get In Touch</h2>
          <p className={styles.contactDesc}>
            I'm currently looking for new opportunities as a frontend or software development intern. 
            Whether you have a question or just want to connect, feel free to reach out!
          </p>
          
          <div className={styles.contactInfoCentered}>
            <div className={styles.contactItemCentered}>
              <div className={styles.contactIconWrap}><Mail size={22} /></div>
              <div className={styles.contactText}>
                <span className={styles.contactLabel}>Email</span>
                <a href="mailto:patelrj539@gmail.com" className={styles.contactValue}>patelrj539@gmail.com</a>
              </div>
            </div>
            
            <div className={styles.contactItemCentered}>
              <div className={styles.contactIconWrap}><Phone size={22} /></div>
              <div className={styles.contactText}>
                <span className={styles.contactLabel}>Phone</span>
                <span className={styles.contactValue}>+1 (732) 690-2765</span>
              </div>
            </div>
            
            <div className={styles.contactItemCentered}>
              <div className={styles.contactIconWrap}><MapPin size={22} /></div>
              <div className={styles.contactText}>
                <span className={styles.contactLabel}>Location</span>
                <span className={styles.contactValue}>Montclair, NJ, USA</span>
              </div>
            </div>
          </div>
          
          <a href="mailto:patelrj539@gmail.com" className={styles.primaryBtn} style={{ marginTop: "3rem" }}>
            Say Hello <ArrowRight size={18} />
          </a>
        </div>
      </section>
      
      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.footerTop}>
          <div className={styles.footerBrand}>
            <div className={styles.footerLogo}>
              <span className="text-gradient">Raj</span> Patel
            </div>
            <p className={styles.footerTagline}>
              Frontend developer specializing in building responsive, interactive, and user-centric web applications.
            </p>
          </div>
          <div className={styles.footerLinksGrid}>
            <div className={styles.footerLinksCol}>
              <h4>Navigation</h4>
              <ul>
                <li><a href="#about">About</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
            <div className={styles.footerLinksCol}>
              <h4>Connect</h4>
              <ul>
                <li><a href="https://github.com/rajptl12" target="_blank" rel="noopener noreferrer">GitHub</a></li>
                <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                <li><a href="mailto:patelrj539@gmail.com">Email</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className={styles.footerDivider}></div>
        <div className={styles.footerBottom}>
          <p className={styles.footerCopy}>© {new Date().getFullYear()} Raj Patel. All rights reserved.</p>
          <p className={styles.footerCredit}>Designed & Built by Raj Patel</p>
        </div>
      </footer>

      {/* Floating Scroll to Top Button */}
      <button 
        className={`${styles.scrollTopBtn} ${showScrollTop ? styles.scrollTopVisible : ''}`}
        onClick={scrollToTop}
        aria-label="Scroll to top"
      >
        <ArrowUp size={20} />
      </button>


    </div>
  );
}
