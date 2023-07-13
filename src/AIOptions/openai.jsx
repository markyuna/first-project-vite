import { Configuration, OpenAIApi } from 'openai';
import { useState } from 'react';

const apiKey = process.env.VITE_Open_AI_Key; // Store the API key securely

const configuration = new Configuration({
  apiKey: apiKey,
});
const openai = new OpenAIApi(configuration);

export default function OpenAI() {
  const [text, setText] = useState('');
  const [textResume, setTextResume] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await openai.createCompletion({
        model: 'davinci',
        prompt: `Summarize this ${text}. and break them into separate lines`,
        temperature: 0.6,
        max_tokens: 100,
      });

      if (res.status === 200) {
        setLoading(false);
        setTextResume(res.data.choices[0].text);
      } else {
        setError('Failed to generate summary');
      }
    } catch (err) {
      setError('An error occurred');
      console.log(err);
    }
  };

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div>
      <h2 className="header_summary">
        Summarize your text into a shorter length.
      </h2>

      <div className="container">
        <div className="text_form">
          <form>
            <label>Enter your text</label>
            <textarea
              rows={10}
              cols={80}
              placeholder="Enter your text here"
              value={text}
              onChange={handleTextChange}
            />
          </form>
        </div>
        <div>
          <button type="button" onClick={handleSubmit}>
            {loading ? 'Loading...' : 'Summarize'}
          </button>
        </div>
        {error && <div className="error">{error}</div>}
        <div>
          <label>Summary of the text</label>
          <textarea
            placeholder="Summary of the text"
            cols={80}
            rows={10}
            value={textResume}
            onChange={(e) => setTextResume(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}
