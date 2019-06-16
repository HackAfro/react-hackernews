import React, { useState } from 'react';

// TODO -- 1 => add imports for creating mutations string and the Mutation component

const inputStyles = {
  width: '400px',
  padding: '5px',
};
const divStyles = {
  marginBottom: '15px',
  display: 'flex',
  alignItems: 'center',
};
const labelStyles = {
  color: '#828282',
  fontSize: '13px',
  fontWeight: 'bold',
  marginRight: '7px',
};

// TODO -- 2 => Create mutation string using gql
const POST_MUTATION = ``;

const PostForm = ({ history }) => {
  const [post, setPost] = useState({
    url: '',
    description: '',
  });

  // TODO -- 4 => complete the form submission event handler to create posts.
  const onFormSubmit = async (createPost) => {};

  return (
    // TODO -- 3 => wrap component with Mutation component
    <form onSubmit={onFormSubmit}>
      <div style={{ backgroundColor: '#f6f6ef', padding: '10px 8px 15px' }}>
        <div style={divStyles}>
          <label htmlFor="url" style={labelStyles}>
            url
          </label>
          <input
            className="mb2"
            value={post.url}
            onChange={(e) => setPost({ ...post, url: e.target.value })}
            type="text"
            id="url"
            placeholder="The URL for the link"
            style={inputStyles}
          />
        </div>
        <div style={divStyles}>
          <label htmlFor="description" style={labelStyles}>
            text
          </label>
          <textarea
            className="mb2"
            value={post.description}
            onChange={(e) => setPost({ ...post, description: e.target.value })}
            placeholder="A description for the link"
            rows={4}
            id="description"
            style={inputStyles}
          />
        </div>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default PostForm;
