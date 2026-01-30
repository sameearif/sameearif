import './App.css';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate, useLocation } from 'react-router-dom';

function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const [page, setPage] = useState<string>("home");

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

            {/* CV BUTTON — FIXED FOR A11Y */}
            <button
              onClick={openCV}
              className="icon-button"
              aria-label="Open CV"
            >
              <img src="cv.png" alt="CV" />
            </button>

            <a href="https://github.com/sameearif" target="_blank" rel="noopener noreferrer">
              <img src="github.png" alt="GitHub" />
            </a>

            <a href="https://scholar.google.com/citations?hl=en&user=Jjf8EVoAAAAJ" target="_blank" rel="noopener noreferrer">
              <img src="google-scholar.png" alt="Google Scholar" />
            </a>

            <a className="blog-img" href="https://huggingface.co/sameearif" target="_blank" rel="noopener noreferrer">
              <img src="huggingface.png" alt="Hugging Face" />
            </a>

            <a className="blog-img" href="https://dumplings.sameearif.com" target="_blank" rel="noopener noreferrer">
              <img src="dumplings.png" alt="Hugging Face" />
            </a>
          </div>
        )}

        {page === "about" && (
          <div className="about-page">
            <p>
              I am Samee Arif, a first-year Computer Science and Engineering Ph.D. student at the
              <a className="inplace" href="https://cse.engin.umich.edu/academics/graduate/graduate-programs/phd-in-cse/" target="_blank" rel="noopener noreferrer"> University of Michigan, Ann-Arbor</a>
              advised by
              <a className="inplace" href="https://web.eecs.umich.edu/~mihalcea/" target="_blank" rel="noopener noreferrer"> Prof. Rada Mihalcea</a>.
              My research focuses on adversarial robustness, societal alignment, and explainability of large language models.
            </p>

            <p>
              I completed my Bachelor of Science in Computer Science degree in 2023 from
              <a className="inplace" href="https://www.lums.edu.pk/" target="_blank" rel="noopener noreferrer"> Lahore University of Management Sciences</a> (LUMS).
              I have worked under the supervision of
              <a className="inplace" href="https://aghaaliraza.com/" target="_blank" rel="noopener noreferrer"> Dr. Agha Ali Raza</a> (LUMS) and
              <a className="inplace" href="https://cl.awaisathar.com/" target="_blank" rel="noopener noreferrer"> Dr. Awais Athar</a>
              (<a className="inplace" href="https://www.ebi.ac.uk/" target="_blank" rel="noopener noreferrer">EMBL-EBI</a>).
              In addition, I also have the privilege of collaborating with
              <a className="inplace" href="https://www.ihsanqazi.com/" target="_blank" rel="noopener noreferrer"> Dr. Ihsan Ayyub Qazi</a> and
              <a className="inplace" href="https://web.lums.edu.pk/~zafar/" target="_blank" rel="noopener noreferrer"> Dr. Zafar Ayyub Qazi</a>.
            </p>

            <p>
              When free, I create digital art, listen to Urdu music, read books, and play
              <a className="inplace" href="https://zelda.nintendo.com/breath-of-the-wild/" target="_blank" rel="noopener noreferrer"> The Legend of Zelda: Breath of The Wild</a>.
            </p>
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
