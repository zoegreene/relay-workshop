import React from 'react';
import { useLazyLoadQuery, graphql } from 'react-relay/hooks';

import { Flex, Text } from 'rebass';
import { Card, Content } from '@workshop/ui';

import { AppQuery } from './__generated__/AppQuery.graphql';

const App = () => {
  const response = useLazyLoadQuery<AppQuery>(
    graphql`
      query AppQuery($numPosts: Number!) {
        posts(first: $numPosts) {
          edges {
            node {
              id
              content
            }
          }
        }
      }
    `,
    { numPosts: 1 },
    { fetchPolicy: 'network-only' },
  );

  const { posts } = response;

  return (
    <Content>
      <Flex flexDirection='column'>
        <Text>Posts</Text>
        <Flex flexDirection='column'>
          {posts.edges.map(({ node }) => (
            <Card key={node.id} mt='10px' flexDirection='column' p='10px'>
              <Text>id: {node.id}</Text>
              <Text>content: {node.content}</Text>
            </Card>
          ))}
        </Flex>
      </Flex>
    </Content>
  );
};

export default App;
