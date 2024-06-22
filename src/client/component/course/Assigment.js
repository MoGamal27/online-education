import React, { useState } from 'react';

const Assignment = ({ assignment }) => {
  const [submission, setSubmission] = useState('');
  const [feedback, setFeedback] = useState(null);

  const onSubmit = (e) => {
    e.preventDefault();
    // Mock feedback
    setFeedback('Assignment submitted. Awaiting feedback.');
  };

  return (
    <div className="assignment">
      <h2>{assignment.title}</h2>
      <p>{assignment.description}</p>
      <form onSubmit={onSubmit}>
        <textarea value={submission} onChange={(e) => setSubmission(e.target.value)}></textarea>
        <button type="submit">Submit Assignment</button>
      </form>
      {feedback && <p>{feedback}</p>}
    </div>
  );
};

export default Assignment;
