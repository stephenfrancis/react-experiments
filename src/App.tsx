import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { BrowserRouter, Link, Outlet, Routes, Route } from 'react-router-dom'
import { ComplexProps } from './complex_props'
import { DynamicJSX } from './dynamic_jsx'
import { KeyboardListener } from './keyboard_listener'
import { ListRedux } from './list_redux'
import { ModalManager } from './modal_manager'
import { RadioGroup } from './radio_group'
import { StateEngine } from './state_engine'
import { StateVsData } from './state_vs_data'
import { ScrollingAndSticky } from './scrolling_and_sticky'
import { URLModals } from './url_modals'

import './public/main.css'

const Four04: React.FC<{}> = () => <p>404</p>

const App: React.FC<{}> = () => {
  return (
    <BrowserRouter>
      <h1>React Experiments</h1>
      <nav>
        <Link to="/">Home</Link>&nbsp;
        <Link to="/complex_props">Complex Props</Link>&nbsp;
        <Link to="/dynamic_jsx">Dynamic JSX</Link>&nbsp;
        <Link to="/keyboard_listener">Keyboard Listener</Link>&nbsp;
        <Link to="/list_redux">List Redux</Link>&nbsp;
        <Link to="/modal_manager">Modal Manager</Link>&nbsp;
        <Link to="/radio_group">Radio Group</Link>&nbsp;
        <Link to="/state_engine">State Engine</Link>&nbsp;
        <Link to="/state_vs_data">State vs Data</Link>&nbsp;
        <Link to="/scrolling_and_sticky">Scrolling and Sticky</Link>&nbsp;
        <Link to="/url_modals">URL Modals</Link>&nbsp;
      </nav>
      <Routes>
        <Route path="/complex_props" element={<ComplexProps />}></Route>
        <Route path="/dynamic_jsx" element={<DynamicJSX />}></Route>
        <Route path="/keyboard_listener" element={<KeyboardListener />}></Route>
        <Route path="/list_redux" element={<ListRedux />}></Route>
        <Route path="/modal_manager" element={<ModalManager />}></Route>
        <Route path="/radio_group" element={<RadioGroup />}></Route>
        <Route path="/state_engine" element={<StateEngine />}></Route>
        <Route path="/state_vs_data" element={<StateVsData />}></Route>
        <Route path="/scrolling_and_sticky" element={<ScrollingAndSticky />}></Route>
        <Route path="/url_modals/*" element={<URLModals />} />
        <Route path="*" element={<Four04 />} />
      </Routes>
    </BrowserRouter>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
