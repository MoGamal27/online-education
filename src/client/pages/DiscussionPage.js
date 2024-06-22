import React from 'react';
import Discussion from '../components/course/Discussion';

const DiscussionPage = ({ match }) => {
  return (
    <div className="discussion-page">
      <Discussion courseId={match.params.courseId} />
    </div>
  );
};

export default DiscussionPage;
