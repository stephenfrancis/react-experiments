import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Route, Switch } from 'react-router'
import { BrowserRouter, Link } from 'react-router-dom'
import ComplexProps from './complex_props'
import ListRedux from './list_redux'
import ModalManager from './modal_manager'
import StateEngine from './state_engine'
import StateVsData from './state_vs_data'

const App: React.FC<{}> = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/complex_props">
          <ComplexProps />
        </Route>
        <Route path="/list_redux">
          <ListRedux />
        </Route>
        <Route path="/modal_manager">
          <ModalManager />
        </Route>
        <Route path="/state_engine">
          <StateEngine />
        </Route>
        <Route path="/state_vs_data">
          <StateVsData />
        </Route>
        <Route>
          <ul>
            <li>
              <Link to="/complex_props">Complex Props</Link>
            </li>
            <li>
              <Link to="/modal_manager">Modal Manager</Link>
            </li>
            <li>
              <Link to="/list_redux">List Redux</Link>
            </li>
            <li>
              <Link to="/state_engine">State Engine</Link>
            </li>
            <li>
              <Link to="/state_vs_data">State vs Data</Link>
            </li>
          </ul>
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
