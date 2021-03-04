import * as React from 'react';
import { ThemeProvider } from 'styled-components';
// constants
import * as CONSTANTS from './utils/constants';
// styles
import { GlobalStyle } from './App.styles';
import { themes, ThemesType } from './utils/themes';
// components
import Grid from './components/UI/Grid';
import Card from './components/UI/Card';
import List from './components/UI/List';
import ListItem from './components/UI/ListItem';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Contacts from './components/Contacts';
import Experience from './components/Experience';
import Skills from './components/Skills';
import ExperienceItem from './components/ExperienceItem';
import SourceCode from './components/SourceCode';

function App(): JSX.Element {
  const [curTheme, setCurTheme] = React.useState<ThemesType>('light');

  return (
    <ThemeProvider theme={themes[curTheme]}>
      <Grid className="cvWrapper" container>
        <Grid xs={12}>
          <Header
            theme={curTheme}
            onToggleTheme={() => setCurTheme(curTheme === 'light' ? 'dark' : 'light')} /* eslint-disable-line prettier/prettier */
          />
        </Grid>
        <Grid xs={12} sm={9}>
          <AboutMe />
        </Grid>
        <Grid xs={12} sm={3}>
          <Contacts />
        </Grid>
        <Grid xs={12} sm={9}>
          <Experience />
        </Grid>
        <Grid xs={12} sm={3}>
          <Skills />
        </Grid>
        <Grid xs={12} sm={9}>
          <Card column title="Education">
            <ExperienceItem
              title={CONSTANTS.EDU_EXPERIENCE.KNEU.title}
              period={CONSTANTS.EDU_EXPERIENCE.KNEU.period}
              company={CONSTANTS.EDU_EXPERIENCE.KNEU.company}
            />
          </Card>
        </Grid>
        <Grid xs={12} sm={3}>
          <Card palette="secondary" column title="Languages">
            <List noListStyle>
              <ListItem>Ukrainian (native)</ListItem>
              <ListItem>Russian (free)</ListItem>
              <ListItem>English (intermediate)</ListItem>
            </List>
          </Card>
        </Grid>
        <Grid xs={12}>
          <SourceCode />
        </Grid>
      </Grid>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
