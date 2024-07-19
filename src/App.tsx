import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const downloadCV = () => {
    const link = document.createElement('a');
    link.href = 'CV.pdf';
    link.download = 'Samee_Arif_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <div className='App'>
      <div className='profile'>
        <div className='info'>
          <span className='name'>Samee Arif</span>
          <span className='role'>Research Associate</span>
          <span className='role'>Lahore University of Management Sciences</span>
          <a className='contact' href="mailto:samee.arif@lums.edu.pk">samee.arif@lums.edu.pk</a>
          <div className='social-media-icons'>
              <div className='CV' onClick={downloadCV}>CV</div>
              <a href="https://github.com/sameearif" target="_blank" rel="noopener noreferrer"><img src="github.png" /></a>
              <a href="https://scholar.google.com/citations?hl=en&user=Jjf8EVoAAAAJ" target="_blank" rel="noopener noreferrer"><img src="google-scholar.png" /></a>
              <a href="https://huggingface.co/sameearif" target="_blank" rel="noopener noreferrer"><img src="huggingface.png" /></a>
            </div>
        </div>
        <img className='image' src={'Samee.jpeg'}></img>
      </div>

      <div className='bio'>
        <span>I am a Research Associate at <a className='inplace' href="https://www.lums.edu.pk/" target="_blank">Lahore University of Management Sciences (LUMS)</a>. I completed my Bachelor of Science in Computer Science in 2023 from LUMS. My research focuses on Information & Communication Technologies for Development, Human-Computer Interaction, and Speech and Natural Language Processing. I am committed to leveraging these fields to create meaningful social impacts, particularly by enhancing accessibility and usability of technology.</span>
        <br></br>
        <span>During my undergraduate I worked under the supervision of <a className='inplace' href="https://aghaaliraza.com/" target="_blank">Dr. Agha Ali Raza</a>. Currently I am working with Dr. Raza, <a className='inplace' href="https://www.ihsanqazi.com/" target="_blank">Dr. Ihsan Ayyub Qazi</a>, and <a className='inplace' href="https://web.lums.edu.pk/~zafar/" target="_blank">Dr. Zafar Ayyub Qazi</a>. In addition, I have the privilege of collaborating with <a className='inplace' href="https://cl.awaisathar.com/" target="_blank">Dr. Awais Athar</a> (<a className='inplace' href="https://www.ebi.ac.uk/" target="_blank">EMBL-EBI</a>, University of Cambridge). I am also an active member of the <a className='inplace' href="https://www.c-salt.org/" target="_blank">Center for Speech and Language Technologies</a> (LUMS) and <a className='inplace' href="https://www.actualaiz.com/" target="_blank">ActualAIz</a>, contributing to innovative research in the field.</span>
      </div>

      <div className='research'>
        <div className='heading'>Research</div>
        <span>My current projects include:</span>
        <ol>
          <li><b>Multi-Agent Workflows</b> for synthetic preference optimization dataset generation and Large Language Model (LLM) self-improvement.</li>
          <li><b>Multimodal and Multilingual Graduate Assistant Tool</b> leveraging LLMs to provide educational counseling.</li>
          <li><b>Kahaani</b>, an Urdu story generation chatbot for children to help them learn Urdu through engaging and interactive storytelling.</li>
        </ol>
        <span>Research projects I have worked on:</span>
        <ol>
          <li><b>Generalists vs Specialists: Evaluating Large Language Models for Urdu.</b> We compared the performance of general-purpose and special-purpose models on various Urdu NLP tasks. The paper for this project was submitted to ARR in June 2024.</li>
          <li><b>UQA: Corpus for Urdu Question Answering.</b> We introduced a novel dataset for question answering and text comprehension in Urdu using EATs technique. The paper for this project appeared at LREC-Coling 2024.</li>
          <li><b>Multimodal Language Models</b> to make technology accessible to diverse communities. I worked on developing text-to-speech and automatic speech recognition systems for Urdu.</li>
          <li><b>Urdu Optical Recognition System</b> to make information accessible to low-literacy and visually impaired communities.</li>
        </ol>
      </div>

      <div className='teaching'>
        <div className='heading'>Teaching</div>
        <span>Undergraduate Teaching Assistant:</span>
        <ol>
          <li>CS 535: Machine Learning (Fall 2022)</li>
          <li>CS 100: Computational Problem Solving (Fall 2021)</li>
        </ol>
      </div>

      <div className='publications'>
        <div className='heading'>Publications</div>
          <div className='paper-heading'>
            <span>UQA: Corpus for Urdu Question Answering</span>
            <span className='conf'><em>LREC-Coling 2024</em></span>
          </div>
          <div className='paper-material'>
            <a className='btn' href="https://aclanthology.org/2024.lrec-main.1497/" target="_blank">Paper</a>
            <a className='btn' href="https://github.com/sameearif/uqa" target="_blank">Code</a>
            <a className='btn' href="https://huggingface.co/uqa" target="_blank">Huggingface</a>
          </div>
          <br></br>
          <div className='paper-heading'>
            <span>Generalists vs Specialists: Evaluating Large Language Models for Urdu</span>
            <span className='conf'><em>Submitted to ARR (June 2024)</em></span>
          </div>
          <div className='paper-material'>
            <a className='btn' href="https://arxiv.org/abs/2407.04459v1" target="_blank">Paper</a>
            <a className='btn' href="https://github.com/ulrs0/Generalists-vs-Specialists" target="_blank">Code</a>
            <a className='btn' href="https://huggingface.co/ULRs" target="_blank">Huggingface</a>
          </div>
      </div>

      <div className='news'>
      <div className='heading'>News</div>
      <div className='news-content'><b>July 2024:</b> The  project <em>Multi-Agent Workflows for Preference Optimization Dataset Creation and LLM Self-Improvement</em> has received funding from the OpenAI Research Access Program.</div>
      <br></br>
      <div className='news-content'><b>May 2024:</b> The project <em>Generalists vs Specialists: Evaluating Large Language Models for Urdu</em> has received funding from the OpenAI Research Access Program.</div>
      </div>
    </div>
  );
}

export default App;
