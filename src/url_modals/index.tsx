import React from 'react'
import { Link, Outlet, Routes, Route, useLocation } from 'react-router-dom'

import { Page1 } from './page1'
import { Page2 } from './page2'
import { Page3 } from './page3'
import { Modal1 } from './modal1'
import { Modal2 } from './modal2'

const MODAL_MAP: Record<string, React.ReactNode> = {
  modal1: <Modal1 />,
  modal2: <Modal2 />,
}

const PageFrame: React.FC<{}> = () => {
  const location = useLocation()
  const params: Record<string, string> = {}
  ;(
    (location.search && location.search.length > 1 && location.search.substring(1).split('&')) ||
    []
  ).forEach((pair) => {
    const parts = pair.split('=')
    params[decodeURIComponent(parts[0])] = parts[1] ? decodeURIComponent(parts[1]) : ''
  })
  console.log(`show modal? ${params.modal} maps to ${typeof MODAL_MAP[params.modal]}`)
  return (
    <div>
      <h2>URL Modals</h2>
      <nav>
        <Link to="page1">Page 1</Link>&nbsp;
        <Link to="page2">Page 2</Link>&nbsp;
        <Link to="page3">Page 3</Link>&nbsp;
      </nav>
      <Outlet />

      {params.modal && !!MODAL_MAP[params.modal] && MODAL_MAP[params.modal]}
    </div>
  )
}

interface Props {}

export const URLModals: React.FC<Props> = (props: Props) => {
  console.log(`inside URLModals`)
  return (
    <Routes>
      <Route path="/*" element={<PageFrame />}>
        <Route path="page1/*" element={<Page1 />} />
        <Route path="page2/*" element={<Page2 />} />
        <Route path="page3/*" element={<Page3 />} />
      </Route>
    </Routes>
  )
}
