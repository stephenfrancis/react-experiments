import React from 'react'
import { Table } from './Table'
import { listReducer } from './Store'

interface Props {}

const initialState = {
  data: null,
  loaded: false,
  sort: 'a',
  sort_desc: false,
}

export const LoaderReducer: React.FC<Props> = (props: Props) => {
  const [state, dispatch] = React.useReducer(listReducer, initialState)
  React.useEffect(() => {
    fetch(`/api?sort=${state.sort}&sort_desc=${state.sort_desc}`)
      .then((resp) => resp.json())
      .then((data) => {
        dispatch({ type: 'LOADED', data })
      })
      .catch((error) => {
        console.error(error)
        dispatch({ type: 'ERROR', error })
      })
  }, [state.loaded, state.sort, state.sort_desc, state.error])

  const setSort = (sort: string, sort_desc: boolean) => {
    console.log(`LoaderReducer.setSort() ${sort} ${sort_desc}`)
    dispatch({ type: 'UNLOADED', sort, sort_desc })
  }
  return state.data ? (
    <Table data={state.data} sort={state.sort} sort_desc={state.sort_desc} setSort={setSort} />
  ) : (
    <div>Loading...</div>
  )
}
