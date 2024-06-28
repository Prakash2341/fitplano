import './App.css';
import './feedback.css';
import { useState } from 'react';
import axios from 'axios';

function App() {
  const [feedbackClicked, setFeedbackClicked] = useState(false);
  const [feedbackText, setFeedbackText] = useState('');

  const handleFeedbackClick = () => {
    setFeedbackClicked(true);
  };

  const handleFeedbackChange = (event) => {
    setFeedbackText(event.target.value);
  };

  const handleSubmitFeedback = async () => {
    try {
      await axios.post('http://localhost:3001/submit-feedback', { feedback: feedbackText });
      alert('Feedback submitted successfully!');
    } catch (error) {
      console.error('Error submitting feedback:', error);
      alert('Failed to submit feedback. Please try again.');
    }
  };
  // const handlegetstarted= () => {
  //   // Open a new tab with the form.html
  //   window.open('form.html', '_self');
  // }

  if (feedbackClicked) {
    return (
      <div className="App">
        <h3 className='log'>Fitplano</h3>
        <header className="App-header">
          <h1 className='heading'>Feedback</h1>
          <div className="feedback-form">
            <p className='feed'>Thank you for using Fitplano!</p>
            <textarea
              className="feedback-input"
              placeholder="Your feedback..."
              rows="5"
              value={feedbackText}
              onChange={handleFeedbackChange}
            ></textarea>
            <button className="submit-feedback" onClick={handleSubmitFeedback}>Submit</button>
          </div>
        </header>
      </div>
    );
  } else {
    return (
      <div className="App">
        <h3 className='log'>Fitplano</h3>
        <header className="App-header">
          <h1 className='heading'>Generate Your Goal Based Health Plans (Diet+Workout)</h1>
          <button className='get_started' >GET STARTED</button>
          <button className='feedback' onClick={handleFeedbackClick}>Provide Your Feedback</button>
          <br></br><p className='or'>OR</p>
          <a className="App-link" href='https://mail.google.com/mail/u/0/#inbox?compose=new'>contact@fitplano.com</a>
        </header>
      </div>
    );
  }
}

export default App;
