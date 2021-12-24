import { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'

import './App.css';

import MyContextProvider from './context/Context'

const Header = lazy(() => import('./components/Header'))
const Content = lazy(() => import('./components/Content'))
const CategoryLink = lazy(() => import('./components/Navigation'))
const CategoryImages = lazy(() => import('./components/Category'))

function App() {
  return (
    <MyContextProvider>
      <Router>
        <Suspense fallback={<div>loading...</div>}>
          <Route
            render={() => (
              <Header />
            )}
          />
          <Route
            render={() => (
              <CategoryLink />
            )}
          />

          <Switch>
            <Route
              exact
              path="/"
              render={() => (
                <Redirect to="/cats" />
              )} />
            <Route exact path="/cats" component={Content} />
            <Route
              exact
              path={`/cats/category/:category`}
              component={CategoryImages}
            />
          </Switch>
        </Suspense>
      </Router>
    </MyContextProvider>
  )
}

export default App;
