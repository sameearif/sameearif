import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className='App'>
      <div className='profile'>
        <div className='info'>
          <span className='name'>Samee Arif</span>
          <span className='role'>Research Associate</span>
          <span className='role'>Lahore University of Management Sciences</span>
          <a className='contact' href="mailto:samee.arif@lums.edu.pk">samee.arif@lums.edu.pk</a>
          <div className='social-media-icons'>
              <a href="https://github.com/sameearif" target="_blank" rel="noopener noreferrer"><img src="github.png" /></a>
              <a href="" target="_blank" rel="noopener noreferrer"><img src="google-scholar.png" /></a>
              <a href="https://huggingface.co/sameearif" target="_blank" rel="noopener noreferrer"><img src="huggingface.png" /></a>
            </div>
        </div>
        <img className='image' src={'Samee.jpeg'}></img>
      </div>

      <div className='bio'>
        <span>I am a Research Associate at <a className='inplace' href="https://www.lums.edu.pk/" target="_blank">Lahore University of Management Sciences (LUMS)</a>, working under the supervision of <a className='inplace' href="https://aghaaliraza.com/" target="_blank">Dr. Agha Ali Raza</a>, <a className='inplace' href="https://www.ihsanqazi.com/" target="_blank">Dr. Ihsan Ayyub Qazi</a>, and <a className='inplace' href="https://web.lums.edu.pk/~zafar/" target="_blank">Dr. Zafar Ayyub Qazi</a>. In addition, I have the privilege of collaborating with <a className='inplace' href="https://cl.awaisathar.com/" target="_blank">Dr. Awais Athar</a> at  <a className='inplace' href="https://www.ebi.ac.uk/" target="_blank">EMBL-EBI</a> University of Cambridge. I am also an active member of the <a className='inplace' href="https://www.c-salt.org/" target="_blank">Center for Speech and Language Technologies</a> (LUMS) and <a className='inplace' href="https://www.actualaiz.com/" target="_blank">ActualAIz</a>, contributing to innovative research in the field. I completed my Bachelor of Science in Computer Science from LUMS, graduating in 2023.</span>
      </div>

      <div className='research'>
        <div className='heading'>Research</div>
        <span>My research focusses on Information & Communication Technologies for Development, Human-Computer Interaction, and Speech and Natural Language Processing. I am committed to leveraging these fields to create meaningful social impacts, particularly by enhancing accessibility and usability of technology.</span>
        <br></br>
        <span>During my undergraduate, I worked on:</span>
        <ol>
          <li><b>Urdu Question-Answering System</b> to make healthcare and educational resources accessible to Urdu-speaking communities. The research paper for this project will appear at LREC-Coling 2024.</li>
          <li><b>Multimodal Language Models</b> to make technology accessible to diverse communities. I worked on developing text-to-speech and automatic speech recognition systems for Urdu.</li>
          <li><b>Urdu Optical Recognition System</b> to make information accessible to low-literacy and visually impaired communities.</li>
        </ol>
        <span>Currently, I am working on developing a multimodal and multilingual graduate assistant tool leveraging Large Language Models to provide educational counselling.</span>
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
            <a className='btn' href="https://arxiv.org/abs/2405.01458" target="_blank">Paper</a>
            <a className='btn' href="https://github.com/sameearif/uqa" target="_blank">Code</a>
            <a className='btn' href="https://huggingface.co/uqa" target="_blank">Huggingface</a>
          </div>
      </div>
    </div>
  );
}

export default App;
