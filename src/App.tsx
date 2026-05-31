import './App.css';
import { useState, useEffect, useCallback } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate, useLocation } from 'react-router-dom';

type TabId = 'home' | 'about' | 'experience' | 'publications' | 'grants';

const TABS: { id: TabId; label: string }[] = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'publications', label: 'Publications' },
  { id: 'grants', label: 'Grants' },
];

type Publication = {
  id: string;
  title: string;
  href: string;
  year: React.ReactNode;
  authors: React.ReactNode;
  venue?: string;
  figure: string;
};

const PEER_REVIEWED: Publication[] = [
  {
    id: 'salt',
    title: 'With a Grain of SALT: Are LLMs Fair Across Social Dimensions?',
    href: 'https://arxiv.org/abs/2410.12499',
    year: 'TrustNLP ACL 2026',
    authors: (<><b>S. Arif</b>*, Z. Khan*, A. A. Raza, A. Athar</>),
    figure: 'with_a_grain_of_salt.png',
  },
  {
    id: 'every-pixel',
    title: 'Every Pixel Tells a Story: End-to-End Urdu Newspaper OCR',
    href: 'https://lrec.elra.info/lrec2026-main-235',
    year: 'LREC 2026',
    authors: (<><b>S. Arif</b>*, S. Farid*</>),
    figure: 'press_to_pixels.png',
  },
  {
    id: 'kahaani',
    title: 'Kahaani: A Multimodal Co-Creative Storytelling System',
    href: 'https://aclanthology.org/2026.eacl-srw.25/',
    year: 'EACL SRW 2026',
    authors: (<><b>S. Arif</b>, M. S. Haroon*, A. J. Khan*, T. Arif, A. A. Raza, A. Athar</>),
    figure: 'kahaani.png',
  },
  {
    id: 'fellowship',
    title: 'The Fellowship of the LLMs: Multi-Agent Workflows for Synthetic Preference Optimization Dataset Generation',
    href: 'https://aclanthology.org/2025.gem-1.4/',
    year: (<>GEM<sup>2</sup> ACL 2025</>),
    authors: (<><b>S. Arif</b>*, S. Farid*, A. H. Azeemi, A. Athar, A. A. Raza</>),
    figure: 'fellowship.png',
  },
  {
    id: 'wer',
    title: 'WER We Stand: Benchmarking Urdu ASR Models',
    href: 'https://aclanthology.org/2025.coling-main.397/',
    year: 'COLING 2025',
    authors: (<><b>S. Arif</b>, A. J. Khan*, M. Abbas*, A. A. Raza, A. Athar</>),
    figure: 'wer_we_stand.png',
  },
  {
    id: 'generalists',
    title: 'Generalists vs. Specialists: Evaluating Large Language Models for Urdu',
    href: 'https://aclanthology.org/2024.findings-emnlp.426/',
    year: 'EMNLP 2024',
    authors: (<><b>S. Arif</b>, A. H. Azeemi, A. A. Raza, A. Athar</>),
    figure: 'generalist_vs_specialist.png',
  },
  {
    id: 'uqa',
    title: 'UQA: Corpus for Urdu Question Answering',
    href: 'https://aclanthology.org/2024.lrec-main.1497/',
    year: 'LREC-COLING 2024',
    authors: (<><b>S. Arif</b>, S. Farid, A. Athar, A. A. Raza</>),
    figure: 'uqa.png',
  },
];

const PREPRINTS: Publication[] = [
  {
    id: 'one-word',
    title: 'One Word at a Time: Incremental Completion Decomposition Breaks LLM Safety',
    href: 'https://drive.google.com/file/d/1BS_0GyaHv6hJsD3kQvENG8rGpu7CSjWM/view',
    year: '2026',
    authors: (<><b>S. Arif</b>, N. Deng, Z. Jin, R. Mihalcea</>),
    figure: 'incremental_completion_decomposition.png',
  },
  {
    id: 'age-of-curiosity',
    title: 'The Age of Curiosity Meets the Age of AI: Benchmarking Child Safety in Large Language Models',
    href: 'https://arxiv.org/abs/2605.25510',
    year: '2026',
    authors: (<><b>S. Arif</b>, A. Borah, R. Mihalcea</>),
    figure: 'age_of_curiosity.png',
  },
];

function PublicationItem({
  pub,
  isOpen,
  onToggle,
  onImageClick,
}: {
  pub: Publication;
  isOpen: boolean;
  onToggle: () => void;
  onImageClick: (src: string) => void;
}) {
  return (
    <div className={`pubitem${isOpen ? ' fig-open' : ''}`}>
      <div className="pt">
        <a href={pub.href} target="_blank" rel="noopener noreferrer">{pub.title}</a>
      </div>
      <div className="yr2">{pub.year}</div>
      <div className="au">
        <span className="aunames">{pub.authors}</span>
        <button className="figtoggle" onClick={onToggle} type="button">
          <span className="lbl">{isOpen ? 'Hide figure' : 'Show figure'}</span>
          <span className="chev">▾</span>
        </button>
      </div>
      {pub.venue ? <div className="vn">{pub.venue}</div> : null}
      <div className="pubfig">
        <img
          src={pub.figure}
          alt=""
          loading="lazy"
          onClick={() => onImageClick(pub.figure)}
        />
        <span className="hint">⤢ Click to enlarge</span>
      </div>
    </div>
  );
}

function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeTab, setActiveTab] = useState<TabId>('home');
  const [openFig, setOpenFig] = useState<string | null>(null);
  const [lightbox, setLightbox] = useState<string | null>(null);

  useEffect(() => {
    const path = location.pathname.slice(1) || 'home';
    if (TABS.some(t => t.id === path)) {
      setActiveTab(path as TabId);
    } else {
      setActiveTab('home');
    }
  }, [location]);

  const handleTab = (id: TabId) => {
    navigate(id === 'home' ? '/' : `/${id}`);
  };

  const toggleFig = (id: string) => {
    setOpenFig(prev => (prev === id ? null : id));
  };

  const closeLightbox = useCallback(() => setLightbox(null), []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [closeLightbox]);

  return (
    <div className="wrap">
      <div className="topline">
        <span lang="ur" dir="rtl" style={{ fontSize: 19 }}>سمیع عارف</span>
        <span className="loc"><span className="dot"></span> Ann Arbor, Michigan</span>
      </div>

      <header>
        <div className="eyebrow">Ph.D. Student · University of Michigan · Computer Science &amp; Engineering</div>
        <h1>Samee Arif</h1>
        <a className="topmail" href="mailto:asamee@umich.edu">asamee@umich.edu</a>
        <p className="tagline">On the <em>safety</em>, <em>explainability</em>, and <em>reasoning</em> of large language models.</p>
      </header>

      <div className="tabs" role="tablist">
        {TABS.map(t => (
          <button
            key={t.id}
            className="tab"
            role="tab"
            aria-selected={activeTab === t.id}
            onClick={() => handleTab(t.id)}
            type="button"
          >
            {t.label}
          </button>
        ))}
      </div>

      <div className="panels">
        <section className={`panel${activeTab === 'home' ? ' active' : ''}`} id="home" role="tabpanel">
          <div className="home">
            <div className="portrait">
              <img src="me.png" alt="Samee Arif" />
            </div>
            <div className="homebio">
              <p className="welcome">I'm a Ph.D. student working on <em>natural language processing</em>, with a focus on AI safety, explainability, and LLM reasoning.</p>
              <p className="small">Find me here:</p>
              <div className="social">
                <a href="CV.pdf" target="_blank" rel="noopener noreferrer" title="CV" aria-label="CV">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M7 3h7l5 5v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z"/><path d="M14 3v5h5"/><path d="M9 13h6M9 17h6"/></svg>
                </a>
                <a href="https://github.com/sameearif" target="_blank" rel="noopener noreferrer" title="GitHub" aria-label="GitHub">
                  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5C5.37.5 0 5.78 0 12.29c0 5.2 3.44 9.6 8.21 11.16.6.11.82-.25.82-.56 0-.28-.01-1.02-.02-2-3.34.72-4.04-1.6-4.04-1.6-.55-1.37-1.33-1.74-1.33-1.74-1.09-.74.08-.73.08-.73 1.2.08 1.84 1.22 1.84 1.22 1.07 1.8 2.81 1.28 3.5.98.11-.77.42-1.28.76-1.58-2.67-.3-5.47-1.31-5.47-5.84 0-1.29.47-2.34 1.24-3.17-.12-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.21.96-.26 1.98-.39 3-.4 1.02.01 2.04.14 3 .4 2.28-1.53 3.29-1.21 3.29-1.21.66 1.65.24 2.87.12 3.17.77.83 1.24 1.88 1.24 3.17 0 4.54-2.81 5.54-5.48 5.83.43.36.81 1.09.81 2.19 0 1.58-.01 2.85-.01 3.24 0 .31.22.68.83.56C20.56 21.88 24 17.48 24 12.29 24 5.78 18.63.5 12 .5z"/></svg>
                </a>
                <a href="https://scholar.google.com/citations?hl=en&user=Jjf8EVoAAAAJ" target="_blank" rel="noopener noreferrer" title="Google Scholar" aria-label="Google Scholar">
                  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2 1 8l11 6 9-4.91V17h2V8L12 2z"/><path d="M5 12.27V16c0 1.66 3.13 3 7 3s7-1.34 7-3v-3.73l-7 3.82-7-3.82z"/></svg>
                </a>
                <a className="hf" href="https://huggingface.co/sameearif" target="_blank" rel="noopener noreferrer" title="Hugging Face" aria-label="Hugging Face">
                  <img src="huggingface_icon.png" alt="Hugging Face" />
                </a>
                <a href="https://dumplings.sameearif.com" target="_blank" rel="noopener noreferrer" title="NLP Blog — Dumplings" aria-label="NLP Blog">
                  <img src="dumplings_icon.png" alt="NLP Blog" />
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className={`panel${activeTab === 'about' ? ' active' : ''}`} id="about" role="tabpanel">
          <p className="lead">I am Samee Arif, a first-year Computer Science &amp; Engineering Ph.D. student at the <a href="https://cse.engin.umich.edu/academics/graduate/graduate-programs/phd-in-cse/" target="_blank" rel="noopener noreferrer">University of Michigan, Ann Arbor</a>, advised by <a href="https://web.eecs.umich.edu/~mihalcea/" target="_blank" rel="noopener noreferrer">Prof. Rada Mihalcea</a>. My research is in <strong style={{ fontWeight: 500 }}>natural language processing</strong> — specifically <em>AI safety</em>, <em>explainability</em>, and <em>LLM reasoning</em>.</p>
          <p>I completed my B.S. in Computer Science in 2023 from the <a href="https://www.lums.edu.pk/" target="_blank" rel="noopener noreferrer">Lahore University of Management Sciences</a> (LUMS). I have worked under the supervision of <a href="https://aghaaliraza.com/" target="_blank" rel="noopener noreferrer">Dr. Agha Ali Raza</a> and <a href="https://cl.awaisathar.com/" target="_blank" rel="noopener noreferrer">Dr. Awais Athar</a>. I also have the privilege of collaborating with <a href="https://www.ihsanqazi.com/" target="_blank" rel="noopener noreferrer">Dr. Ihsan Ayyub Qazi</a> and <a href="https://web.lums.edu.pk/~zafar/" target="_blank" rel="noopener noreferrer">Dr. Zafar Ayyub Qazi</a>.</p>
          <p>When free, I paint using watercolors, create digital art, listen to Urdu music, write a <a href="https://dumplings.sameearif.com/" target="_blank" rel="noopener noreferrer">blog</a>, and play <a href="https://zelda.nintendo.com/breath-of-the-wild/" target="_blank" rel="noopener noreferrer">The Legend of Zelda: Breath of the Wild</a>.</p>
        </section>

        <section className={`panel${activeTab === 'experience' ? ' active' : ''}`} id="experience" role="tabpanel">
          <div className="block">
            <h3>Research</h3>
            <div className="bar"></div>
            <div className="entry">
              <div className="r">Graduate Research &amp; Research Assistant — <span className="org"><a href="https://lit.eecs.umich.edu/index.html" target="_blank" rel="noopener noreferrer" style={{ fontStyle: 'italic' }}>LIT @ University of Michigan</a></span></div>
              <div className="d">AI safety research — LLM jailbreaking vulnerabilities, child-oriented safety evaluation, cultural reasoning via structured Cultural Tree representations, and human-in-the-loop therapeutic LLM systems.</div>
            </div>
            <div className="entry">
              <div className="r">Research Associate &amp; Research Assistant — <span className="org"><a href="https://www.c-salt.org/" target="_blank" rel="noopener noreferrer" style={{ fontStyle: 'italic' }}>CSaLT @ LUMS</a></span></div>
              <div className="d">Mentored and led 30+ students at the Center for Speech and Language Technologies. First-authored six research papers, including three published at EMNLP, COLING, and LREC.</div>
            </div>
          </div>

          <div className="block">
            <h3>Teaching</h3>
            <div className="bar"></div>
            <ul className="courses">
              <li><span className="cname">CS 1210 · Computer Science I Fundamentals</span><span className="where">University of Iowa</span></li>
              <li><span className="cname">CS 535 · Machine Learning</span><span className="where">LUMS</span></li>
              <li><span className="cname">CS 100 · Computational Problem Solving</span><span className="where">LUMS</span></li>
            </ul>
            <div className="entry"><div className="d">Mentored 250+ students and taught topics including linear regression, unsupervised learning, and deep learning as a teaching assistant.</div></div>
          </div>

          <div className="block">
            <h3>Professional</h3>
            <div className="bar"></div>
            <div className="entry">
              <div className="r">Software &amp; AI Engineer — <span className="org"><a href="https://www.actualaiz.com/" target="_blank" rel="noopener noreferrer" style={{ fontStyle: 'italic' }}>ActualAIz</a></span></div>
              <div className="d">Built a multimodal <a href="https://gradassist.actualaiz.com/" target="_blank" rel="noopener noreferrer">AI assistant</a> for personalized educational counseling.</div>
            </div>
          </div>
        </section>

        <section className={`panel${activeTab === 'publications' ? ' active' : ''}`} id="publications" role="tabpanel">
          <div className="block">
            <h3>Peer-Reviewed</h3>
            <div className="bar"></div>
            {PEER_REVIEWED.map(pub => (
              <PublicationItem
                key={pub.id}
                pub={pub}
                isOpen={openFig === pub.id}
                onToggle={() => toggleFig(pub.id)}
                onImageClick={setLightbox}
              />
            ))}
            <p className="cofirst">* Equal contribution.</p>
          </div>

          <div className="block">
            <h3>Preprints</h3>
            <div className="bar"></div>
            {PREPRINTS.map(pub => (
              <PublicationItem
                key={pub.id}
                pub={pub}
                isOpen={openFig === pub.id}
                onToggle={() => toggleFig(pub.id)}
                onImageClick={setLightbox}
              />
            ))}
          </div>
        </section>

        <section className={`panel${activeTab === 'grants' ? ' active' : ''}`} id="grants" role="tabpanel">
          <div className="block">
            <h3>Research Grants</h3>
            <div className="bar"></div>
            <div className="row"><div className="main"><div className="title">VESSL AI Compute Grant</div><div className="sub">For <em>The Age of Curiosity Meets the Age of AI: Benchmarking Child Safety in Large Language Models</em></div></div><div className="when">May 2026</div></div>
            <div className="row"><div className="main"><div className="title">OpenAI Research Access</div><div className="sub">For <em>The Fellowship of the LLMs: Multi-Agent Workflows for Synthetic Preference Optimization Dataset Generation</em></div></div><div className="when">July 2024</div></div>
            <div className="row"><div className="main"><div className="title">OpenAI Research Access</div><div className="sub">For <em>Generalists vs. Specialists: Evaluating Large Language Models for Urdu</em></div></div><div className="when">May 2024</div></div>
          </div>
        </section>
      </div>

      <footer>
        <span>© 2026 Samee Arif</span>
        <span>University of Michigan</span>
      </footer>

      <div id="lightbox" className={lightbox ? 'open' : ''} onClick={closeLightbox}>
        <button className="lb-close" aria-label="Close" type="button" onClick={closeLightbox}>✕</button>
        {lightbox ? <img src={lightbox} alt="" /> : <img alt="" />}
      </div>
    </div>
  );
}

function AppWrapper() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<App />} />
        <Route path="/experience" element={<App />} />
        <Route path="/publications" element={<App />} />
        <Route path="/grants" element={<App />} />
      </Routes>
    </Router>
  );
}

export default AppWrapper;
