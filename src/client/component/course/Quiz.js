import React, { useState } from 'react';

const Quiz = ({ quiz }) => {
  const [answers, setAnswers] = useState({});
  const [result, setResult] = useState(null);

  const onChange = (e, questionId) => {
    setAnswers({ ...answers, [questionId]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const score = quiz.questions.reduce((acc, question) => {
      return question.correctAnswer === answers[question._id] ? acc + 1 : acc;
    }, 0);
    setResult(`You scored ${score} out of ${quiz.questions.length}`);
  };

  return (
    <div className="quiz">
      <h2>{quiz.title}</h2>
      <form onSubmit={onSubmit}>
        {quiz.questions.map((question) => (
          <div key={question._id}>
            <p>{question.text}</p>
            {question.answers.map((answer) => (
              <label key={answer}>
                <input
                  type="radio"
                  name={question._id}
                  value={answer}
                  onChange={(e) => onChange(e, question._id)}
                />
                {answer}
              </label>
            ))}
          </div>
        ))}
        <button type="submit">Submit</button>
      </form>
      {result && <p>{result}</p>}
    </div>
  );
};

export default Quiz;
