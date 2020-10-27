import React from 'react'
import LoaderNonRedux from './LoaderNonRedux'
import LoaderReducer from './LoaderReducer'
import LoaderRedux from './LoaderRedux'

interface Props {}

const Main: React.FC<Props> = (props: Props) => {
  return (
    <div>
      <h2>Comparison of Redux and Non-Redux List Management Techniques</h2>
      <p>
        Typical loading/ready/error three-way state machine for Ajax data loading; column headings
        are clickable to re-sort the list accordingly, re-triggering the sequence.
      </p>
      <h3>Non-Redux Loader</h3>
      <LoaderNonRedux fetch={window.fetch.bind(window)} />
      <h3>Reducer Loader</h3>
      <LoaderReducer />
      <h3>Redux Loader</h3>
      <LoaderRedux />
    </div>
  )
}

export default Main
