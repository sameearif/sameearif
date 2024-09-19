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
              <a className='blog-img' href="https://huggingface.co/sameearif" target="_blank" rel="noopener noreferrer"><img src="huggingface.png" /></a>
          </div>
          <div className='blog-icons'>
            <a className='blog' href="https://dumplings.sameearif.com" target="_blank" rel="noopener noreferrer"><img src="dumplings.png" /></a>
            <div>Dumplings—My NLP Blog</div>
          </div>
        </div>
        <img className='image' src={'Samee.jpeg'}></img>
      </div>

      <div className='bio'>
        <span>I am a Research Associate at <a className='inplace' href="https://www.lums.edu.pk/" target="_blank">Lahore University of Management Sciences (LUMS)</a>. I completed my Bachelor of Science in Computer Science in 2023 from LUMS. My research focuses on and Natural Language Processing (NLP), Educational Technologies, Human-Centered AI and Synthetic Data Generation.</span>
        <br></br>
        <span>During my undergraduate I worked under the supervision of <a className='inplace' href="https://aghaaliraza.com/" target="_blank">Dr. Agha Ali Raza</a>. Currently I am working with Dr. Raza, <a className='inplace' href="https://www.ihsanqazi.com/" target="_blank">Dr. Ihsan Ayyub Qazi</a>, and <a className='inplace' href="https://web.lums.edu.pk/~zafar/" target="_blank">Dr. Zafar Ayyub Qazi</a>. In addition, I have the privilege of collaborating with <a className='inplace' href="https://cl.awaisathar.com/" target="_blank">Dr. Awais Athar</a> (<a className='inplace' href="https://www.ebi.ac.uk/" target="_blank">EMBL-EBI</a>, University of Cambridge). I am also an active member of the <a className='inplace' href="https://www.c-salt.org/" target="_blank">Center for Speech and Language Technologies</a> (LUMS) and wroked at <a className='inplace' href="https://www.actualaiz.com/" target="_blank">ActualAIz</a>, contributing to innovative research in the field.</span>
      </div>

      <div className='research'>
        <div className='heading'>Research</div>
        <span>My current projects include:</span>
        <ol>
          <li><b>Multi-Agent Workflows</b> for iterative preference optimization dataset generation and iterative LLM self-improvement.</li>
        </ol>
        <span>Research projects I have worked on:</span>
        <ol>
          <li><b>The Fellowship of the LLMs: Multi-Agent Workflows for Synthetic Preference Optimization Dataset Generation.</b> We evaluated multi-agent workflows for LLM-as-evaluators and LLM-as-generators modules to generate synthetic preference optimisation datasets using Llama-3.1, Gemma-2, and GPT-4 families. The <a className='inplace' href="https://arxiv.org/abs/2408.08688" target="_blank">Paper</a> for this project is in submission at AAAI.</li>
          <br></br>
          <li><b>The Art of Storytelling: Multi-Agent Generative AI for Dynamic Multimodal Narratives.</b> We developed an education tool using Generative AI to enhance storytelling for children. It integrates narrative co-creation, text-to-speech, text-to-music, and text-to-video generation for an engaging learning experience. The <a className='inplace' href="https://arxiv.org/abs/2409.11261" target="_blank">Paper</a> is in submission at Coling.</li>
          <br></br>
          <li><b>Generalists vs Specialists: Evaluating Large Language Models for Urdu.</b> We compared the performance of general-purpose and special-purpose models on various Urdu NLP tasks. The <a className='inplace' href="https://arxiv.org/abs/2407.04459v1" target="_blank">Paper</a> for this project is in submission at EMNLP.</li>
          <br></br>
          <li><b>WER We Stand: Benchmarking Urdu ASR Models.</b> We evaluated Whisper, Seameless-M4T and MMS ASR. We developed and presented the first conversational speech datadataset for Urdu. The <a className='inplace' href="https://arxiv.org/abs/2409.11252" target="_blank">Paper</a> for this project is in submission at Coling.</li>
          <br></br>
          <li><b>UQA: Corpus for Urdu Question Answering.</b> We introduced a novel dataset for question answering and text comprehension in Urdu using EATs technique. The <a className='inplace' href="https://aclanthology.org/2024.lrec-main.1497/" target="_blank">Paper</a> for this project appeared at LREC-Coling 2024.</li>
          <br></br>
          <li><b>Image to Speech Pipeline</b> to make information accessible to low-literacy and visually impaired communities. We fine-tuned Tesseract OCR for Urdu Nastaliq font and fine-tuned text-to-speech models.</li>
        </ol>
      </div>

      <div className='teaching'>
        <div className='heading'>Teaching Experience</div>
        <span>Undergraduate Teaching Assistant:</span>
        <ol>
          <li>CS 535: Machine Learning (Fall 2022)</li>
          <li>CS 100: Computational Problem Solving (Fall 2021)</li>
        </ol>
      </div>

      <div className='work'>
        <div className='heading'>Work Experience</div>
        <ol className='work-list'>
          <li>
            <div className='work-item'>
              <span className='position'>Research Associate at <a className='inplace' href="https://www.c-salt.org/" target="_blank">CSaLT</a></span>
              <span className='date'>June 2024 - Present</span>
            </div>
          </li>
          <li>
            <div className='work-item'>
                <span className='position'>Research Associate at <a className='inplace' href="https://www.actualaiz.com/" target="_blank">ActualAIz</a></span>
                <span className='date'>August 2023 - June 2024</span>
            </div>
          </li>
          <li>
            <div className='work-item'>
                <span className='position'>Research Assistant at CSaLT</span>
                <span className='date'>August 2021 - May 2023</span>
            </div>
          </li>
        </ol>
      </div>

      <div className='publications'>
        <div className='heading'>Publications</div>
        <div className='paper-heading'>
          <span className='paper-name'>The Art of Storytelling: Multi-Agent Generative AI for Dynamic Multimodal Narratives</span>
          <span className='authors'><b>Samee Arf</b>, Taimoor Arif, Muhammad Saad Haroon, Aamina Jamal Khan, Agha Ali Raza, Awais Athar</span>
          <span className='conf'><em>In Submission at Coling</em></span>
        </div>
        <div className='paper-material'>
          <a className='btn' href="https://arxiv.org/abs/2409.11261" target="_blank">Paper</a>
          <a className='btn' href="https://github.com/ulrs0/The-Art-of-Story-Telling" target="_blank">Code</a>
        </div>
        <br></br>
        <div className='paper-heading'>
          <span className='paper-name'>WER We Stand: Benchmarking Urdu ASR Models</span>
          <span className='authors'><b>Samee Arf</b>, Aamina Jamal Khan, Mustafa Abbas, Agha Ali Raza, Awais Athar</span>
          <span className='conf'><em>In Submission at Coling</em></span>
        </div>
        <div className='paper-material'>
          <a className='btn' href="https://arxiv.org/abs/2409.11252" target="_blank">Paper</a>
          <a className='btn' href="https://github.com/ulrs0/Urdu-ASR-Today" target="_blank">Code</a>
          <a className='btn' href="https://huggingface.co/urdu-asr" target="_blank">Huggingface</a>
        </div>
        <br></br>
        <div className='paper-heading'>
          <span className='paper-name'>The Fellowship of the LLMs: Multi-Agent Workflows for Synthetic Preference Optimization Dataset Generation</span>
          <span className='authors'><b>Samee Arf</b>, Sualeha Farid, Abdul Hameed Azeemi, Awais Athar, Agha Ali Raza</span>
          <span className='conf'><em>In Submission at AAAI</em></span>
        </div>
        <div className='paper-material'>
          <a className='btn' href="https://arxiv.org/abs/2408.08688" target="_blank">Paper</a>
          <a className='btn' href="https://github.com/ulrs0/MA-PO" target="_blank">Code</a>
          <a className='btn' href="https://huggingface.co/ma-eval" target="_blank">Huggingface</a>
        </div>
        <br></br>
        <div className='paper-heading'>
            <span className='paper-name'>Generalists vs Specialists: Evaluating Large Language Models for Urdu</span>
            <span className='authors'><b>Samee Arf</b>, Abdul Hameed Azeemi, Agha Ali Raza, Awais Athar</span>
            <span className='conf'><em>In Submission at EMNLP</em></span>
          </div>
          <div className='paper-material'>
            <a className='btn' href="https://arxiv.org/abs/2407.04459v1" target="_blank">Paper</a>
            <a className='btn' href="https://github.com/ulrs0/Generalists-vs-Specialists" target="_blank">Code</a>
            <a className='btn' href="https://huggingface.co/ULRs" target="_blank">Huggingface</a>
          </div>
          <br></br>
          <div className='paper-heading'>
            <span className='paper-name'>UQA: Corpus for Urdu Question Answering</span>
            <span className='authors'><b>Samee Arf</b>, Sualeha Farid, Awais Athar, Agha Ali Raza</span>
            <span className='conf'><em>LREC-Coling 2024</em></span>
          </div>
          <div className='paper-material'>
            <a className='btn' href="https://aclanthology.org/2024.lrec-main.1497/" target="_blank">Paper</a>
            <a className='btn' href="https://github.com/sameearif/uqa" target="_blank">Code</a>
            <a className='btn' href="https://huggingface.co/uqa" target="_blank">Huggingface</a>
          </div>
          <br></br>
      </div>

      <div className='news'>
      <div className='heading'>News</div>
      <div className='news-content'><b>July 2024:</b> The  project <em>The Fellowship of the LLMs: Multi-Agent Workflows for Synthetic Preference Optimization Dataset Generation</em> has received funding from the OpenAI Research Access Program.</div>
      <br></br>
      <div className='news-content'><b>May 2024:</b> The project <em>Generalists vs Specialists: Evaluating Large Language Models for Urdu</em> has received funding from the OpenAI Research Access Program.</div>
      </div>
    </div>
  );
}

export default App;
