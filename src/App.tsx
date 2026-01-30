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
    window.open('CV.pdf', '_blank', 'noopener,noreferrer');
  };

  const handleNavigation = (newPage: string) => {
    navigate(`/${newPage}`);
  };

  const handleNavigationHome = () => {
    navigate(`/`);
  };

  const isTopLayout = page !== "home";

  return (
    <div className={`App ${isTopLayout ? "top" : ""}`}>
      <div className="app-container">
        <div className={`transition-container ${isTopLayout ? "top" : ""}`}>
          <div className={`me-container ${isTopLayout ? "shrink" : ""}`}>
            <img className={`me ${isTopLayout ? "shrink" : ""}`} src="me.png" alt="Profile" />
          </div>

          <div className={`nav-bar ${isTopLayout ? "top" : ""}`}>
            <div className={`nav-item ${page === "home" ? "active" : ""}`} onClick={handleNavigationHome}>Home</div>
            <div className={`nav-item ${page === "about" ? "active" : ""}`} onClick={() => handleNavigation("about")}>About</div>
            <div className={`nav-item ${page === "experience" ? "active" : ""}`} onClick={() => handleNavigation("experience")}>Experience</div>
            <div className={`nav-item ${page === "publications" ? "active" : ""}`} onClick={() => handleNavigation("publications")}>Publications</div>
            <div className={`nav-item ${page === "grants" ? "active" : ""}`} onClick={() => handleNavigation("grants")}>Grants</div>
          </div>
        </div>

        {page === "home" && (
          <div className="social-media-icons">
            <button className="icon-button" onClick={openCV} aria-label="Open CV">
              <img src="cv.png" alt="CV" />
            </button>
            <a href="https://github.com/sameearif" target="_blank" rel="noopener noreferrer"><img src="github.png" alt="GitHub" /></a>
            <a href="https://scholar.google.com/citations?hl=en&user=Jjf8EVoAAAAJ" target="_blank" rel="noopener noreferrer"><img src="google-scholar.png" alt="Google Scholar" /></a>
            <a href="https://huggingface.co/sameearif" target="_blank" rel="noopener noreferrer"><img src="huggingface.png" alt="Hugging Face" /></a>
            <a href="https://dumplings.sameearif.com" target="_blank" rel="noopener noreferrer"><img src="dumplings.png" alt="Dumplings" /></a>
          </div>
        )}

        {page === "about" && (
          <div className={`about-page ${isTopLayout ? "visible" : ""}`}>
            <p>
              I am Samee Arif, a first-year Computer Science and Engineering Ph.D. student at the
              <a className="inplace" href="https://cse.engin.umich.edu/academics/graduate/graduate-programs/phd-in-cse/" target="_blank" rel="noopener noreferrer">
                {' '}University of Michigan, Ann-Arbor
              </a>{' '}
              advised by
              <a className="inplace" href="https://web.eecs.umich.edu/~mihalcea/" target="_blank" rel="noopener noreferrer">
                {' '}Prof. Rada Mihalcea
              </a>.
              My research focuses on adversarial robustness, societal alignment, and explainability of large language models.
            </p>

            <p>
              I completed my Bachelor of Science in Computer Science degree in 2023 from
              <a className="inplace" href="https://www.lums.edu.pk/" target="_blank" rel="noopener noreferrer">
                {' '}Lahore University of Management Sciences
              </a>{' '}
              (LUMS). I have worked under the supervision of
              <a className="inplace" href="https://aghaaliraza.com/" target="_blank" rel="noopener noreferrer">
                {' '}Dr. Agha Ali Raza
              </a>{' '}
              (LUMS) and
              <a className="inplace" href="https://cl.awaisathar.com/" target="_blank" rel="noopener noreferrer">
                {' '}Dr. Awais Athar
              </a>{' '}
              (
              <a className="inplace" href="https://www.ebi.ac.uk/" target="_blank" rel="noopener noreferrer">
                EMBL-EBI
              </a>
              ). In addition, I also have the privilege of collaborating with
              <a className="inplace" href="https://www.ihsanqazi.com/" target="_blank" rel="noopener noreferrer">
                {' '}Dr. Ihsan Ayyub Qazi
              </a>{' '}
              and
              <a className="inplace" href="https://web.lums.edu.pk/~zafar/" target="_blank" rel="noopener noreferrer">
                {' '}Dr. Zafar Ayyub Qazi
              </a>.
            </p>

            <p>
              When free, I paint using watercolors, create digital art, listen to Urdu music, read books, and play
              <a className="inplace" href="https://zelda.nintendo.com/breath-of-the-wild/" target="_blank" rel="noopener noreferrer">
                {' '}The Legend of Zelda: Breath of The Wild
              </a>.
            </p>
          </div>
        )}

        {page === "experience" && (
          <div className={`about-page ${isTopLayout ? "visible" : ""}`}>
            <p style={{ fontSize: '1.25em' }}>Research</p>
            <hr style={{ marginTop: '-15px' }} />
            <ul style={{ listStyleType: 'square', marginTop: '0px', fontSize: '1em' }}>
              <li>Research Associate (CSaLT)</li>
              <li>Research Assistant (CSaLT)</li>
            </ul>
            <p style={{ marginTop: '-15px', fontSize: '1em' }}>
              I mentored and led 30+ students at
              <a className="inplace" href="https://www.c-salt.org/" target="_blank" rel="noopener noreferrer">
                {' '}Center for Speech and Language Technologies
              </a>
              (CSaLT), a research lab at Lahore University of Management Sciences.
            </p>

            <p style={{ fontSize: '1.25em' }}>Teaching</p>
            <hr style={{ marginTop: '-15px' }} />
            <ul style={{ listStyleType: 'square', marginTop: '0px', fontSize: '1em' }}>
              <li>CS 1210: Computer Science I Fundamentals (<em>University of Iowa</em>)</li>
              <li>CS 535: Machine Learning (<em>Lahore University of Management Sciences</em>)</li>
              <li>CS 100: Computational Problem Solving (<em>Lahore University of Management Sciences</em>)</li>
            </ul>
            <p style={{ marginTop: '-15px', fontSize: '1em' }}>
              I mentored 250+ students and taught topics including linear regression,
              unsupervised learning, and deep learning as a teaching assistant.
            </p>
          </div>
        )}

        {page === "publications" && (
          <div className={`about-page ${isTopLayout ? "visible" : ""}`}>
            <p>Artificial Intelligence / Machine Learning / Natural Language Processing</p>
            <hr />
            <ul style={{ listStyleType: 'square', padding: 0, fontSize: '1em' }}>
              <li style={{ marginLeft: '15px' }}><b>Samee Arif</b>*, Sualeha Farid*, Abdul Hameed Azeemi, Awais Athar, Agha Ali Raza, "<a className="inplace" href="https://aclanthology.org/2025.gem-1.4/" target="_blank" rel="noopener noreferrer">The Fellowship of the LLMs: Multi-Agent Workflows for Synthetic Preference Optimization Dataset Generation</a>" in <em>GEM2 Workshop at the Association for Computational Linguistics (ACL)</em>, 2025.</li>
            </ul>
          </div>
        )}

        {page === "grants" && (
          <div className={`about-page ${isTopLayout ? "visible" : ""}`}>
            <p>Research Grants</p>
            <hr />
            <ul style={{ listStyleType: 'square', padding: 0, fontSize: '1em' }}>
              <li style={{ marginLeft: '15px' }}><b>OpenAI Research Access</b>, July 2024.</li>
              <li style={{ marginLeft: '15px', marginTop: '15px' }}><b>OpenAI Research Access</b>, May 2024.</li>
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
