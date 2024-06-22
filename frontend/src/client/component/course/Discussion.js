import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDiscussions, addDiscussion } from '../../store/discussionSlice';

const Discussion = ({ courseId }) => {
  const dispatch = useDispatch();
  const { discussions } = useSelector((state) => state.discussion);
  const [newDiscussion, setNewDiscussion] = useState('');

  useEffect(() => {
    dispatch(fetchDiscussions(courseId));
  }, [dispatch, courseId]);

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(addDiscussion({ courseId, content: newDiscussion }));
    setNewDiscussion('');
  };

  return (
    <div className="discussion">
      <h2>Discussion</h2>
      <ul>
        {discussions.map((discussion) => (
          <li key={discussion._id}>{discussion.content}</li>
        ))}
      </ul>
      <form onSubmit={onSubmit}>
        <textarea value={newDiscussion} onChange={(e) => setNewDiscussion(e.target.value)}></textarea>
        <button type="submit">Add Discussion</button>
      </form>
    </div>
  );
};

export default Discussion;
