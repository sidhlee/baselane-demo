import { Switch, Route, Redirect } from 'react-router-dom';
import Layout from './components/Layout';
import Page from './components/Page';
import Dashboard from './features/dashboard/Dashboard';

function App() {
  return (
    <div className="App">
      <Layout>
        <Switch>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/:path">
            <Page />
          </Route>
          <Redirect to="/dashboard" />
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
