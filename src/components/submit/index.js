import React, { useState } from 'react';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';

// TODO -- 1 - Add withAuth import
import { withAuth } from '@8base/react-sdk';

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

const loginAreaStyles = {
  marginTop: '15px',
};

// TODO -- 2
const POST_MUTATION = gql`
  mutation PostCreate($data: PostCreateInput!) {
    postCreate(data: $data) {
      id
    }
  }
`;

// TODO -- 3 Utilise props provided by the withAuth enhancer
const PostForm = ({ history }) => {
  const [post, setPost] = useState({
    url: '',
    description: '',
  });

  // TODO -- 4
  const onFormSubmit = async (createPost) => {
    const data = {
      variables: {
        data: post,
      },
    };
    const response = await createPost(data);
    if (response.data.postCreate.id) {
      history.push('/');
    }
  };

  // TODO -- 3  Check if user is authenticated before showing Login
  return (
    <Mutation mutation={POST_MUTATION}>
      {(postCreate) => (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            onFormSubmit(postCreate);
          }}
        >
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
                onChange={(e) =>
                  setPost({ ...post, description: e.target.value })
                }
                placeholder="A description for the link"
                rows={4}
                id="description"
                style={inputStyles}
              />
            </div>
            <button type="submit">Submit</button>
          </div>
        </form>
      )}
    </Mutation>
  );
};

// TODO -- 2 Wrap component with withAuth enhancer
export default PostForm;
