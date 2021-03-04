import * as React from 'react';
// components
import Card from './UI/Card';
import List from './UI/List';
import ListItem from './UI/ListItem';

const Skills: React.FC = () => (
  <Card palette="secondary" column title="Skills">
    <List>
      <ListItem>JavaScript</ListItem>
      <ListItem>React, Redux, Router</ListItem>
      <ListItem>HTML, CSS, SASS</ListItem>
    </List>
    <br />
    <List subheader="Also basic knowledge of" noBoldSubheader>
      <ListItem>TypeScript</ListItem>
      <ListItem>jQuery</ListItem>
      <ListItem>Styled components</ListItem>
      <ListItem>Material-UI</ListItem>
      <ListItem>Unit Testing: Jest, Enzyme</ListItem>
      <ListItem>SQL</ListItem>
    </List>
    <br />
    <List subheader="Tools used for development" noBoldSubheader>
      <ListItem>Webpack</ListItem>
      <ListItem>GIT</ListItem>
      <ListItem>NPM, YARN</ListItem>
      <ListItem>Docker</ListItem>
      <ListItem>ESLint, Prettier</ListItem>
      <ListItem>VS Code</ListItem>
      <ListItem>OS Linux (Ubuntu)</ListItem>
    </List>
  </Card>
);

export default Skills;
