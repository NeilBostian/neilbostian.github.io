import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import Home from './pages/home';
import DoomPhone from './pages/doomphone';

const AppStyle = styled.div`
  & {
    @media screen and (min-width: 1050px) {
      width: 1000px;
    }
    @media screen and (max-width: 1049px) {
      width: 100%;
    }
  }
`;

function App() {
  return (
    <AppStyle>
      <Router>
        <Switch>
          <Route exact path="/doomphone">
            <DoomPhone />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </AppStyle>
  );
}

export default App;
