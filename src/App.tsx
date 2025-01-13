import './App.css';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate, useLocation } from 'react-router-dom';

function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const [page, setPage] = useState("home");

  useEffect(() => {
    const currentPath = location.pathname.slice(1) || "home";
    setPage(currentPath);
  }, [location]);

  const openCV = () => {
    window.open('CV.pdf', '_blank');
  };

  const handleNavigation = (newPage : string) => {
    navigate(`/${newPage}`);
  };

  const handleNavigationHome = () => {
    navigate(`/`);
  };

  const isTopLayout = page !== "home";

  return (
    <div className={`App ${isTopLayout ? "top" : ""}`}>
      <div className='app-container'>
        <div className={`transition-container ${isTopLayout ? "top" : ""}`}>
          <div className={`me-container ${isTopLayout ? "shrink" : ""}`}>
            <img className={`me ${isTopLayout ? "shrink" : ""}`} src="me.png" alt="Profile" />
          </div>
          <div className={`nav-bar ${isTopLayout ? "top" : ""}`}>
            <div 
              className={`nav-item ${page === "home" ? "active" : ""}`} 
              onClick={() => handleNavigationHome()}
            >
              Home
            </div>
            <div 
              className={`nav-item ${page === "about" ? "active" : ""}`} 
              onClick={() => handleNavigation("about")}
            >
              About
            </div>
            <div 
              className={`nav-item ${page === "experience" ? "active" : ""}`} 
              onClick={() => handleNavigation("experience")}
            >
              Experience
            </div>
            <div 
              className={`nav-item ${page === "publications" ? "active" : ""}`} 
              onClick={() => handleNavigation("publications")}
            >
              Publications
            </div>
            <div 
              className={`nav-item ${page === "grants" ? "active" : ""}`} 
              onClick={() => handleNavigation("grants")}
            >
              Grants
            </div>
            <div 
              className='nav-item' 
            >
              <a href="https://dumplings.sameearif.com" target="_blank" rel="noopener noreferrer">Blog</a>
            </div>


            <a href="https://dumplings.sameearif.com" target="_blank" rel="noopener noreferrer"></a>
          </div>
        </div>

        {page === "home" && (
          <div className='social-media-icons'>
          <a onClick={openCV}><img src="cv.png" alt='CV' /></a>
          <a href="https://github.com/sameearif" target="_blank" rel="noopener noreferrer"><img src="github.png" alt='GitHub' /></a>
          <a href="https://scholar.google.com/citations?hl=en&user=Jjf8EVoAAAAJ" target="_blank" rel="noopener noreferrer"><img src="google-scholar.png" alt='Google Scholar' /></a>
          <a className='blog-img' href="https://huggingface.co/sameearif" target="_blank" rel="noopener noreferrer"><img src="huggingface.png" alt='Hugging Face' /></a>
        </div>
        )}

        {page === "about" && (
          <div className="about-page">
            <p>I am Samee Arif, a researcher and a computer scientist.</p>
            <p>My work spans across a diverse set of domains in <b>Natural Language Processing</b> and <b>Generative AI</b> including (1) Multilingual NLP, (2) Biases and Fairness, (3) Human-Centered AI, and (3) Language Model Optimization. I completed my Bachelor of Science in Computer Science degree in 2023 from  <a className='inplace' href="https://www.lums.edu.pk/" target="_blank">Lahore University of Management Sciences</a> (LUMS). I have worked under the supervision of <a className='inplace' href="https://aghaaliraza.com/" target="_blank">Dr. Agha Ali Raza</a> (LUMS) and <a className='inplace' href="https://cl.awaisathar.com/" target="_blank">Dr. Awais Athar</a> (<a className='inplace' href="https://www.ebi.ac.uk/" target="_blank">EMBL-EBI</a>). In addition, I also have the privilege of collaborating with <a className='inplace' href="https://www.ihsanqazi.com/" target="_blank">Dr. Ihsan Ayyub Qazi</a> and <a className='inplace' href="https://web.lums.edu.pk/~zafar/" target="_blank">Dr. Zafar Ayyub Qazi</a></p>
            <p>When free, I paint using watercolors, create digital art, listen to Urdu music, write NLP blog, work on my <a className='inplace' href="https://www.stardewvalley.net/" target="_blank">Stardew Valley</a>-inspired game, and play <a className='inplace' href="https://zelda.nintendo.com/breath-of-the-wild/" target="_blank">The Legend of Zelda: Breath of The Wild</a>.</p>
          </div>
        )}

        {page === "experience" && (
          <div className="about-page">
            <p style={{ fontSize: '1.25em' }}>Research</p>
            <hr style={{ marginTop: '-15px' }} ></hr>
            <ul style={{ listStyleType: 'square', marginTop: '0px', fontSize: '1em' }}>
              <li>Research Associate (CSaLT)</li>
              <li>Research Assistant (CSaLT)</li>
            </ul>
            <p style={{ marginTop: '-15px', fontSize: '1em' }}>I mentored and led 30+ students at <a className='inplace' href="https://www.c-salt.org/" target="_blank">Center for Speech and Language Technologies</a> (CSaLT), a research lab at LUMS. I first authored six research papers, including three published at leading venues like EMNLP, COLING, and LREC, with an additional three currently under review.</p>

            <p style={{ fontSize: '1.25em' }}>Teaching</p>
            <hr style={{ marginTop: '-15px' }} ></hr>
            <ul style={{ listStyleType: 'square', marginTop: '0px', fontSize: '1em' }}>
              <li>CS 535: Machine Learning (LUMS)</li>
              <li>CS 100: Computational Problem Solving (LUMS)</li>
            </ul>
            <p style={{ marginTop: '-15px', fontSize: '1em' }}>I mentored 200+ students and taught topics including linear regression, unsupervised learning, and deep learning as a teaching assistant.</p>

            <p style={{ fontSize: '1.25em' }}>Professional</p>
            <hr style={{ marginTop: '-15px' }} ></hr>
            <ul style={{ listStyleType: 'square', marginTop: '0px', fontSize: '1em' }}>
              <li>Software and AI Engineer (<a className='inplace' href="https://www.actualaiz.com/" target="_blank">ActualAI</a>)</li>
            </ul>
            <p style={{ marginTop: '-15px', fontSize: '1em' }}>I worked on a multimodal and multilingual <a className='inplace' href="https://gradassist.actualaiz.com/" target="_blank">AI Assistant</a> for personalized educational counseling, delivering tailored guidance on Statements of Purpose and university selection to enhance student decision-making.</p>
        </div>
        )}

        {page === "publications" && (
          <div className="about-page">
            <p>Artificial Intelligence / Machine Learning / Natural Language Processing</p>
            <hr></hr>
            <ul style={{ listStyleType: 'square', padding: 0, fontSize: '1em' }}>
              <li style={{ marginLeft: '15px' }}><b>Samee Arif</b>, Aamina Jamal Khan, Mustafa Abbas, Agha Ali Raza, Awais Athar, "<a className='inplace' href="https://arxiv.org/abs/2409.11252" target="_blank">WER We Stand: Benchmarking Urdu ASR Models</a>", in <em>The 31st International Conference on Computational Linguistics (COLING 2025)</em>, January 19-24, Abu Dhabi, UAE. 2025.</li>
              <li style={{ marginLeft: '15px', marginTop: '15px' }}><b>Samee Arif</b>, Abdul Hameed Azeemi, Agha Ali Raza, Awais Athar, "<a className='inplace' href="https://aclanthology.org/2024.findings-emnlp.426/" target="_blank">Generalists vs. Specialists: Evaluating Large Language Models for Urdu</a>", in <em>The Findings of the Association for Computational Linguistics: Empirical Methods in Natural Language Processing 2024 (EMNLP 2024)</em>, November 11-15, Miami, US. 2024.</li>
              <li style={{ marginLeft: '15px', marginTop: '15px' }}><b>Samee Arif</b>, Sualeha Farid, Awais Athar, Agha Ali Raza "<a className='inplace' href="https://aclanthology.org/2024.lrec-main.1497/" target="_blank">UQA: Corpus for Urdu Question Answering</a>", in <em>The 2024 Joint International Conference on Computational Linguistics, Language Resources and Evaluation (LREC-COLING 2024)</em>, May 20-25, Torino, Italy. 2024.</li>
            </ul>
            <p>Preprints</p>
            <ul style={{ listStyleType: 'square', padding: 0, fontSize: '1em' }}>
            <li style={{ marginLeft: '15px', marginTop: '15px' }}><b>Samee Arif</b>, Zohaib Khan, Agha Ali Raza, Awais Athar "<a className='inplace' href="https://www.arxiv.org/abs/2410.12499" target="_blank">With a Grain of SALT: Are LLMs Fair Across Social Dimensions?</a>". 2024.</li>
            <li style={{ marginLeft: '15px', marginTop: '15px' }}><b>Samee Arif</b>, Sualeha Farid, Abdul Hameed Azeemi, Awais Athar, Agha Ali Raza "<a className='inplace' href="https://arxiv.org/abs/2408.08688" target="_blank">The Fellowship of the LLMs: Multi-Agent Workflows for Synthetic Preference Optimization Dataset Generation</a>". 2024.</li>
            <li style={{ marginLeft: '15px', marginTop: '15px', marginBottom: '50px' }}><b>Samee Arif</b>, Taimoor Arif, Muhammad Saad Haroon, Aamina Jamal Khan, Agha Ali Raza, Awais Athar "<a className='inplace' href="https://arxiv.org/abs/2409.11261" target="_blank">The Art of Storytelling: Multi-Agent Generative AI for Dynamic Multimodal Narratives</a>". 2024.</li>
            </ul>
          </div>
        )}

        {page === "grants" && (
          <div className="about-page">
            <p>Research Grants</p>
            <hr></hr>
            <ul style={{ listStyleType: 'square', padding: 0, fontSize: '1em' }}>
              <li style={{ marginLeft: '15px' }}><b>OpenAI Research Access</b>, for <em>The Fellowship of the LLMs: Multi-Agent Workflows for Synthetic Preference Optimization Dataset Generation. July 2024.</em></li>
              <li style={{ marginLeft: '15px', marginTop: '15px' }}><b>OpenAI Research Access</b>, for <em>Generalists vs Specialists: Evaluating Large Language Models for Urdu. May 2024.</em></li>
            </ul>
          </div>
      )}
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
