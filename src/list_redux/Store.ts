import { createStore } from 'redux'

type ActionType = 'ERROR' | 'LOADED' | 'UNLOADED'

interface Action {
  data?: any
  error?: string
  sort?: string
  sort_desc?: boolean
  type: ActionType
}

export interface State {
  data?: any
  error?: string
  loaded: boolean
  sort?: string
  sort_desc?: boolean
}

const initialState: State = {
  loaded: false,
  data: null,
}

export const listReducer = (state: State = initialState, action: Action) => {
  const new_state: any = {}
  switch (action.type) {
    case 'LOADED':
      new_state.loaded = true
      new_state.data = action.data
      new_state.sort = state.sort
      new_state.sort_desc = state.sort_desc
      break
    case 'UNLOADED':
      new_state.loaded = false
      new_state.data = state.data // avoid flicker...
      new_state.sort = action.sort
      new_state.sort_desc = action.sort_desc
      break
    case 'ERROR':
      new_state.loaded = false
      new_state.error = action.error
      new_state.sort = state.sort
      new_state.sort_desc = state.sort_desc
  }
  return new_state as State
}

export const store = createStore(listReducer)

export const boundError = (error: string) => {
  console.log(`Store: boundError()`)
  store.dispatch({
    type: 'ERROR',
    error,
  })
}

export const boundLoaded = (data: any) => {
  console.log(`Store: boundLoaded()`)
  store.dispatch({
    type: 'LOADED',
    data,
  })
}

export const boundUnloaded = (sort: string, sort_desc: boolean) => {
  console.log(`Store: boundUnloaded() ${sort} ${sort_desc}`)
  store.dispatch({
    type: 'UNLOADED',
    sort,
    sort_desc,
  })
}

const reload = (sort: string, sort_desc: boolean) => {
  console.log(`reload`)
  fetch(`/api?sort=${sort}&sort_desc=${sort_desc}`)
    .then((resp) => resp.json())
    .then((resp_data) => {
      console.log(`reload(): then`)
      boundLoaded(resp_data)
    })
    .catch((error) => {
      console.error(error)
      boundError(error)
    })
}
