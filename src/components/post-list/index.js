import React from 'react';
 
//  TODO -- 1
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

import './index.css';
import PostItem from '../post-item';

const PostList = ({ posts, loading, refetch }) =>
  posts.map((post) => <PostItem key={post.id} post={post} refetch={refetch} />);

// TODO -- 2  
const POST_QUERY = gql`
  query {
    postsList {
      items {
        id
        createdAt
        url
        description
        votes
      }
    }
  }
`;

// TODO -- 3
export default graphql(POST_QUERY, {
  props(result) {
    const { data } = result;
    const { loading, refetch } = data;
    let posts = [];
    if (data && data.postsList) posts = data.postsList.items;
    return {
      loading,
      posts,
      refetch,
    };
  },
})(PostList);
