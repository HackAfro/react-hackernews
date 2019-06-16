import React from 'react';

// TODO  -- 1
import { Mutation } from 'react-apollo';
import distanceInWords from 'date-fns/distance_in_words_to_now';
import gql from 'graphql-tag';

// TODO -- 2
const VOTE_MUTATION = gql`
  mutation PostUpdate($data: PostUpdateInput!) {
    postUpdate(data: $data) {
      id
    }
  }
`;

// TODO -- 4

const PostItem = ({ post, refetch }) => {
  const upVotePost = async (vote, post) => {
    const data = {
      variables: {
        data: {
          id: post.id,
          url: post.url,
          description: post.description,
          votes: post.votes + 1,
        },
      },
    };
    await vote(data);
    refetch();
  };

  return (
    <article className="post">
      <section className="upvote">
        {/* TODO -- 3 */}
        <Mutation mutation={VOTE_MUTATION}>
          {(postUpdate) => (
            <button onClick={(e) => upVotePost(postUpdate, post)}>▲</button>
          )}
        </Mutation>
      </section>
      <section className="body">
        <div className="title">
          <a href={post.url}>{post.description}</a>
        </div>
        {/*TODO -- 5 */}
        <div className="meta">
          <span>
            {post.votes} vote{post.votes > 1 ? 's' : ''}
          </span>
          <span>{distanceInWords(post.createdAt)} ago</span>
        </div>
      </section>
    </article>
  );
};

export default PostItem;
