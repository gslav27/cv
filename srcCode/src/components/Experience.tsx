import * as React from 'react';
// constants
import { MY_PROJECTS_LINK, JOBS_EXPERIENCE } from '../utils/constants';
// components
import Card from './UI/Card';
import Text from './UI/Text';
import List from './UI/List';
import ListItem from './UI/ListItem';
import Link from './UI/Link';
import ExperienceItem from './ExperienceItem';

const Experience: React.FC = () => (
  <Card column title="Experience">
    <ExperienceItem
      title={JOBS_EXPERIENCE.TE.title}
      period={JOBS_EXPERIENCE.TE.period}
      company={JOBS_EXPERIENCE.TE.company}
    >
      <List
        subheader="remote work in e-commerce. Main responsibilities"
        noBoldSubheader
      >
        <ListItem>
          order proccessing redesign using React.js (implementing new order
          version);
        </ListItem>
        <ListItem>
          migrating jQuery code to React.js (search filters page, product
          reviews page);
        </ListItem>
        <ListItem>maintaining and implementing new features;</ListItem>
        <ListItem>bug-fixing;</ListItem>
      </List>
      <Text>
        Tech stack: React.js, Redux, jQuery, Less on Client-side; PHP (Symphony)
        on Server-side;
      </Text>
    </ExperienceItem>
    <ExperienceItem
      title={JOBS_EXPERIENCE.SELF_EDU.title}
      period={JOBS_EXPERIENCE.SELF_EDU.period}
    >
      <Text>
        learning web development from scratch using next resources:
        <Link href="https://github.com/getify/You-Dont-Know-JS" target="_blank">
          {' '}
          YDKJS
        </Link>
        {', '}
        <Link href="https://developer.mozilla.org/" target="_blank">
          MDN
        </Link>
        {', '}
        <Link href="https://codecademy.com" target="_blank">
          codecademy
        </Link>
        {', '}
        <Link href="https://egghead.io/" target="_blank">
          egghead
        </Link>
        , help from my friends, and so on.
      </Text>
      <List subheader="Some of my projects for study&practice" noBoldSubheader>
        <ListItem>
          <Link href={`${MY_PROJECTS_LINK}/findpicture`}>
            Search images by text and filters, with user account;
          </Link>
        </ListItem>
        <ListItem>
          <Link href={`${MY_PROJECTS_LINK}/simpleblog`} target="_blank">
            Blog App with comments;
          </Link>
        </ListItem>
        <ListItem>
          <Link href={`${MY_PROJECTS_LINK}/reactcalendar`} target="_blank">
            Week Schedule App;
          </Link>
        </ListItem>
      </List>
      <Text>
        All projects are located here:{' '}
        <Link href={MY_PROJECTS_LINK} target="_blank">
          gslav27.github.io
        </Link>
      </Text>
    </ExperienceItem>
    <ExperienceItem
      title={JOBS_EXPERIENCE.SELF_EMPL.title}
      period={JOBS_EXPERIENCE.SELF_EMPL.period}
    >
      <Text>just failed in starting own business;</Text>
    </ExperienceItem>
    <ExperienceItem
      title={JOBS_EXPERIENCE.AVON.title}
      period={JOBS_EXPERIENCE.AVON.period}
      company={JOBS_EXPERIENCE.AVON.company}
    >
      <List>
        <ListItem>
          creating and analyzing distribution network scenarios;
        </ListItem>
        <ListItem>
          providing and analyzing data concerning with Supply Chain;
        </ListItem>
      </List>
    </ExperienceItem>
    <ExperienceItem
      title={JOBS_EXPERIENCE.ALLIANZ.title}
      period={JOBS_EXPERIENCE.ALLIANZ.period}
      company={JOBS_EXPERIENCE.ALLIANZ.company}
    >
      <List>
        <ListItem>
          building and updating potential customers database, cold calls;
        </ListItem>
      </List>
    </ExperienceItem>
  </Card>
);

export default Experience;
