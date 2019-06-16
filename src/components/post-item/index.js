import React from 'react';
// TODO  -- 1 => add imports for creating post meta and for writing mutation strings.

// TODO -- 2 => create mutation string using gql
const VOTE_MUTATION = ``;

const PostItem = ({ post, refetch }) => {
  // TODO -- 4 =>  complete upvote event handler to achieve upvoting posts
  const upVotePost = async (vote, post) => {};

  return (
    <article className="post">
      <section className="upvote">
        {/* TODO -- 3 
          Wrap the button with the Mutation component to allow upvoting posts
        */}
        <button onClick={upVotePost}>▲</button>
      </section>
      <section className="body">
        <div className="title">
          <a href={post.url}>{post.description}</a>
        </div>
        {/*TODO -- 5 
          Add post metadata to display number of votes for a post
        */}
      </section>
    </article>
  );
};

export default PostItem;
