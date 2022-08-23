import React from 'react';
import { Text } from 'rebass';
import { Card } from '@workshop/ui';
import { graphql, useFragment } from 'react-relay/hooks';

import { Post_post$data, Post_post$key } from './__generated__/Post_post.graphql';

const postFragment = graphql`
  fragment Post_post on Post {
    id
    content
    author {
      name
    }
  }
`;

type Props = {
  post: Post_post$data;
};

// eslint-disable-next-line
const Post = (props: Props) => {
  const data = useFragment<Post_post$key>(postFragment, props.post);

  return (
    <Card mt='10px' flexDirection='column' p='10px'>
      <Text>id: {data.id}</Text>
      <Text>content: {data.content}</Text>
      <Text>Author: {data.author.name}</Text>
    </Card>
  );
};

export default Post;
