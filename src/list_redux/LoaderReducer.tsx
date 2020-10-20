import React from 'react'
import Table from './Table'

interface Props {}

const initialState = { loaded: false }

function reducer(state, action) {
  const new_state: any = {}
  switch (action.type) {
    case 'LOADED':
      new_state.loaded = true
      new_state.data = action.data
      new_state.sort = state.sort
      break
    case 'UNLOADED':
      new_state.loaded = false
      new_state.data = state.data // avoid flicker...
      new_state.sort = action.sort
      break
    case 'ERROR':
      new_state.loaded = false
      new_state.error = action.error
      new_state.sort = state.sort
  }
  return new_state
}

const LoaderReducer: React.FC<Props> = (props: Props) => {
  const [state, dispatch] = React.useReducer(reducer, initialState)
  React.useEffect(() => {
    fetch(`/api?sort=${state.sort}`)
      .then((resp) => resp.json())
      .then((data) => {
        dispatch({ type: 'LOADED', data })
      })
      .catch((error) => {
        console.error(error)
        dispatch({ type: 'ERROR', error })
      })
  }, [state.loaded, state.data, state.sort, state.error])

  const setSort = (sort) => {
    dispatch({ type: 'UNLOADED', sort })
  }
  return state.data ? (
    <Table data={state.data} sort={state.sort} setSort={setSort} />
  ) : (
    <div>Loading...</div>
  )
}

export default LoaderReducer
