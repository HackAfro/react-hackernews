import React from 'react';
 
//  TODO -- 1 => add imports for creating post meta and for writing mutation strings.

import './index.css';
import PostItem from '../post-item';

const PostList = ({ posts, loading, refetch }) =>
  posts.map((post) => <PostItem key={post.id} post={post} refetch={refetch} />);

// TODO -- 2  =>  create query string using gql
const POST_QUERY = ``;

// TODO -- 3 => Wrap component with graphql HOC
export default PostList;
