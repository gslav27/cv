import * as React from 'react';
// components
import Card from './UI/Card';
import Text from './UI/Text';
import List from './UI/List';
import ListItem from './UI/ListItem';

const AboutMe: React.FC = () => (
  <Card column>
    <Text>Highly motivated and self-educated javascript developer.</Text>
    <List subheader="Some facts about me">
      <ListItem>graduated from secondary school with honors;</ListItem>
      <ListItem>have an secondary musical education (guitar);</ListItem>
      <ListItem>was practicing martial arts (Muay Thai);</ListItem>
    </List>
    <Text>
      <Text bold>My strengths: </Text>
      <Text element="span">
        the ability to see different sides of an issue, self-control,
        responsibility for result, open-minded;
      </Text>
    </Text>
    <Text>
      <Text bold>My weaknesses: </Text>
      <Text element="span">no computer science degree;</Text>
    </Text>
    <Text>I like new challenges, working with professionals and do sport.</Text>
  </Card>
);

export default AboutMe;
