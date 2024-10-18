import './App.css';

function App() {
  const openCV = () => {
    window.open('CV.pdf', '_blank');
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
              <div className='CV' onClick={openCV}>CV</div>
              <a href="https://github.com/sameearif" target="_blank" rel="noopener noreferrer"><img src="github.png" /></a>
              <a href="https://scholar.google.com/citations?hl=en&user=Jjf8EVoAAAAJ" target="_blank" rel="noopener noreferrer"><img src="google-scholar.png" /></a>
              <a className='blog-img' href="https://huggingface.co/sameearif" target="_blank" rel="noopener noreferrer"><img src="huggingface.png" /></a>
              <a className='blog-img' href="https://dumplings.sameearif.com" target="_blank" rel="noopener noreferrer"><img src="dumplings.png" /></a>
          </div>
        </div>
        <img className='image' src={'Samee.jpeg'}></img>
      </div>

      <div className='bio'>
        <span>I am a Research Associate at <a className='inplace' href="https://www.lums.edu.pk/" target="_blank">Lahore University of Management Sciences (LUMS)</a>. I completed my Bachelor of Science in Computer Science in 2023 from LUMS. My research focuses on and Natural Language Processing (NLP), Educational Technologies, Human-Centered AI and Synthetic Data Generation.</span>
        <br></br>
        <span>During my undergraduate I worked under the supervision of <a className='inplace' href="https://aghaaliraza.com/" target="_blank">Dr. Agha Ali Raza</a>. Currently I am working with Dr. Ali and <a className='inplace' href="https://cl.awaisathar.com/" target="_blank">Dr. Awais Athar</a> (<a className='inplace' href="https://www.ebi.ac.uk/" target="_blank">EMBL-EBI</a>, University of Cambridge). In addition, I have the privilege of collaborating with <a className='inplace' href="https://www.ihsanqazi.com/" target="_blank">Dr. Ihsan Ayyub Qazi</a> and <a className='inplace' href="https://web.lums.edu.pk/~zafar/" target="_blank">Dr. Zafar Ayyub Qazi</a> at <a className='inplace' href="https://www.actualaiz.com/" target="_blank">ActualAIz</a>. I am an active member of the <a className='inplace' href="https://www.c-salt.org/" target="_blank">Center for Speech and Language Technologies</a> at LUMS.</span>
      </div>

      <div className='research'>
      <div className='heading'>Current Projects</div>
      <div className='project'>
          <span><b>Multi-Agent Workflow for Iterative Self-Improvement</b></span>
          <br></br>
          <span>I am working on using multi-agent feedback loop for iterative preference optimization dataset generation and iterative LLM self-improvement.</span>
        </div>

        <br></br>
      </div>

      <div className='research'>
        <div className='heading'>Projects and Publications</div>

        <div className='project'>
          <span><b>Generalists vs Specialists: Evaluating Large Language Models for Urdu</b></span>
          <br></br>
          <span className='conf'>Accepted at EMNLP Findings 2024</span>
          <br></br>
          <span className='authors'><b>Samee Arf</b>, Abdul Hameed Azeemi, Agha Ali Raza, Awais Athar</span>
          <div className='paper-material'>
            <a className='btn' href="https://arxiv.org/abs/2407.04459" target="_blank">Paper</a>
            <a className='btn' href="https://github.com/ulrs0/Generalists-vs-Specialists" target="_blank">Code</a>
            <a className='btn' href="https://huggingface.co/ULRs" target="_blank">Huggingface</a>
          </div>
          <span>We compare general-purpose models like GPT-4-Turbo with special-purpose models fine-tuned for specific tasks, such as XLM-Roberta-large and mT5-large, on seven classification and six generation tasks in Urdu. Our findings show that special-purpose models consistently outperform general-purpose ones, and GPT-4-Turbo's evaluation for generation tasks aligns more closely with human evaluations.</span>
        </div>

        <br></br>

        <div className='project'>
          <span><b>UQA: Corpus for Urdu Question Answering</b></span>
          <br></br>
          <span className='conf'>Accepted at LREC-Coling 2024</span>
          <br></br>
          <span className='authors'><b>Samee Arf</b>, Sualeha Farid, Awais Athar, Agha Ali Raza</span>
          <div className='paper-material'>
            <a className='btn' href="https://aclanthology.org/2024.lrec-main.1497/" target="_blank">Paper</a>
            <a className='btn' href="https://github.com/sameearif/uqa" target="_blank">Code</a>
            <a className='btn' href="https://huggingface.co/uqa" target="_blank">Huggingface</a>
          </div>
          <span>We introduce UQA, a new dataset for Urdu question answering and text comprehension, created using the EATS translation technique to preserve answer spans. UQA is benchmarked on state-of-the-art multilingual QA models, showing strong performance, including an F1 score of 85.99 with XLM-RoBERTa-XL.</span>
        </div>

        <br></br>

        <div className='project'>
          <span><b>The Fellowship of the LLMs: Multi-Agent Workflows for Synthetic Preference Optimization Dataset Generation</b></span>
          <br></br>
          <span className='conf'>In Submission</span>
          <br></br>
          <span className='authors'><b>Samee Arf</b>, Sualeha Farid, Abdul Hameed Azeemi, Awais Athar, Agha Ali Raza</span>
          <div className='paper-material'>
            <a className='btn' href="https://arxiv.org/abs/2408.08688" target="_blank">Paper</a>
            <a className='btn' href="https://github.com/ulrs0/MA-PO" target="_blank">Code</a>
            <a className='btn' href="https://huggingface.co/ma-eval" target="_blank">Huggingface</a>
          </div>
          <span>We generate a synthetic preference optimization datasets using multi-agent workflows, automating response evaluation and generation tasks traditionally done by humans. Our results show that GPT-4o is the most consistent LLM evaluator, while a feedback loop with Llama and Gemma models significantly outperforms single-agent approaches for dataset generation.</span>
        </div>

        <br></br>

        <div className='project'>
          <span><b>With a Grain of SALT: Are LLMs Fair Across Social Dimensions?</b></span>
          <br></br>
          <span className='conf'>In Submission</span>
          <br></br>
          <span className='authors'><b>Samee Arf</b>, Zohaib Khan, Agha Ali Raza, Awais Athar</span>
          <div className='paper-material'>
            <a className='btn' href="https://arxiv.org/abs/2410.12499" target="_blank">Paper</a>
            <a className='btn' href="https://github.com/ulrs0/Social-Appropriateness-in-LLM-Generated-Text" target="_blank">Code</a>
          </div>
          <span>We present an analysis of biases in LLMs across gender, religion, and race. We introduce a methodology for generating a bias detection dataset using seven bias triggers: General Debate, Positioned Debate, Career Advice, Story Generation, Problem-Solving, Cover-Letter Writing, and CV Generation. We anonymise the LLM-generated text associated with each group using GPT-4o-mini and did a pairwise comparison using GPT-4o-as-a-Judge. Our analysis spans three languages, English, German, and Arabic to explore how language influences bias manifestation.</span>
        </div>

        <br></br>

        <div className='project'>
          <span><b>The Art of Storytelling: Multi-Agent Generative AI for Dynamic Multimodal Narratives</b></span>
          <br></br>
          <span className='conf'>In Submission</span>
          <br></br>
          <span className='authors'><b>Samee Arf</b>, Taimoor Arif, Muhammad Saad Haroon, Aamina Jamal Khan, Agha Ali Raza, Awais Athar</span>
          <div className='paper-material'>
            <a className='btn' href="https://arxiv.org/abs/2409.11261" target="_blank">Paper</a>
            <a className='btn' href="https://github.com/ulrs0/The-Art-of-Story-Telling" target="_blank">Code</a>
          </div>
          <span>We introduce an AI-powered education storytelling tool for children by combining narrative co-creation, text-to-speech, text-to-music and text-to-video generation. We conduct thorough evaluation of LLMs for story generation, text-to-speech models and text-to-video model.</span>
        </div>

        <br></br>

        <div className='project'>
          <span><b>WER We Stand: Benchmarking Urdu ASR Models</b></span>
          <br></br>
          <span className='conf'>In Submission</span>
          <br></br>
          <span className='authors'><b>Samee Arf</b>, Aamina Jamal Khan, Mustafa Abbas, Agha Ali Raza, Awais Athar</span>
          <div className='paper-material'>
            <a className='btn' href="https://arxiv.org/abs/2409.11252" target="_blank">Paper</a>
            <a className='btn' href="https://github.com/ulrs0/Urdu-ASR-Today" target="_blank">Code</a>
            <a className='btn' href="https://huggingface.co/urdu-asr" target="_blank">Huggingface</a>
          </div>
          <span>We provide a comprehensive quantitative and qualitative evaluation of Urdu ASR models, analyzing Whisper, MMS, and Seamless-M4T. Our study introduces the first conversational speech dataset for Urdu ASR benchmarking and shows that seamless-large excels on read speech, while whisper-large leads on conversational speech.</span>
        </div>

        <br></br>

        <div className='project'>
          <span><b>GradAssist and SoPify</b></span>
          <br></br>
          <div className='paper-material'>
            <a className='btn' href="https://gradassist.actualaiz.com/" target="_blank">Website</a>
          </div>
          <span>I worked on the development of an LLM-powered graduate assistant tool to provide educational counselling. We Implemented multimodality by fine-tuning and integrating automatic speech recognition and text-to-speech models into the system.</span>
        </div>

        <br></br>

      </div>

      <div className='teaching'>
        <div className='heading'>Teaching Experience</div>
        <div className='teaching-item'>
          <span>Teaching Assistant for CS 535 Machine Learning (Graduate-level Course)</span>
          <br></br>
          <span className='date'>Fall 2022</span>
        </div>
        <div className='teaching-item'>
          <span>Teaching Assistant for CS 100 Computational Problem Solving</span>
          <br></br>
          <span className='date'>Fall 2021</span>
        </div>
      </div>

      <div className='work'>
        <div className='heading'>Work Experience</div>
          <div className='work-item'>
            <span className='position'>Research Associate at Center for Speech and Language Technologies</span>
            <br></br>
            <span className='date'>June 2024 - Present</span>
          </div>
          <div className='work-item'>
              <span className='position'>Research Associate at ActualAIz</span>
              <br></br>
              <span className='date'>August 2023 - June 2024</span>
          </div>
          <div className='work-item'>
              <span className='position'>Research Assistant at Center for Speech and Language Technologies</span>
              <br></br>
              <span className='date'>August 2021 - May 2023</span>
          </div>
      </div>

      <div className='news'>
      <div className='heading'>Grants and Fundings</div>
      <div className='news-content'><b>July 2024:</b> The  project <em>The Fellowship of the LLMs: Multi-Agent Workflows for Synthetic Preference Optimization Dataset Generation</em> has received funding from the OpenAI Research Access Program.</div>
      <br></br>
      <div className='news-content'><b>May 2024:</b> The project <em>Generalists vs Specialists: Evaluating Large Language Models for Urdu</em> has received funding from the OpenAI Research Access Program.</div>
      </div>
    </div>
  );
}

export default App;
