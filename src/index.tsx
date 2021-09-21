import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Route, Switch } from 'react-router'
import { BrowserRouter, Link } from 'react-router-dom'
import ComplexProps from './complex_props'
import DynamicJSX from './dynamic_jsx'
import KeyboardListener from './keyboard_listener'
import ListRedux from './list_redux'
import ModalManager from './modal_manager'
import RadioGroup from './radio_group'
import StateEngine from './state_engine'
import StateVsData from './state_vs_data'
import VisualLayout from './visual_layout'

const App: React.FC<{}> = () => {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>
      </nav>
      <Switch>
        <Route path="/complex_props">
          <ComplexProps />
        </Route>
        <Route path="/dynamic_jsx">
          <DynamicJSX />
        </Route>
        <Route path="/keyboard_listener">
          <KeyboardListener />
        </Route>
        <Route path="/list_redux">
          <ListRedux />
        </Route>
        <Route path="/modal_manager">
          <ModalManager />
        </Route>
        <Route path="/radio_group">
          <RadioGroup />
        </Route>
        <Route path="/state_engine">
          <StateEngine />
        </Route>
        <Route path="/state_vs_data">
          <StateVsData />
        </Route>
        <Route path="/visual_layout">
          <VisualLayout />
        </Route>
        <Route>
          <ul>
            <li>
              <Link to="/complex_props">Complex Props</Link>
            </li>
            <li>
              <Link to="/dynamic_jsx">Dynamic JSX</Link>
            </li>
            <li>
              <Link to="/keyboard_listener">Keyboard Listener</Link>
            </li>
            <li>
              <Link to="/list_redux">List Redux</Link>
            </li>
            <li>
              <Link to="/modal_manager">Modal Manager</Link>
            </li>
            <li>
              <Link to="/radio_group">Radio Group</Link>
            </li>
            <li>
              <Link to="/state_engine">State Engine</Link>
            </li>
            <li>
              <Link to="/state_vs_data">State vs Data</Link>
            </li>
            <li>
              <Link to="/visual_layout">Visual Layout</Link>
            </li>
          </ul>
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
