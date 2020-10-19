import { createStore } from 'redux'

type ActionType = 'ERROR' | 'LOADED' | 'UNLOADED'

interface Action {
  data?: any
  error?: string
  sort?: string
  type: ActionType
}

interface State {
  data?: any
  error?: string
  loaded: boolean
  sort?: string
}

const initialState: State = {
  loaded: false,
  data: null,
}

const listStateChange = (state: State = initialState, action: Action) => {
  const new_state: any = {}
  switch (action.type) {
    case 'LOADED':
      new_state.loaded = true
      new_state.data = action.data
      new_state.sort = state.sort
      break
    case 'UNLOADED':
      new_state.loaded = false
      new_state.sort = action.sort
      break
    case 'ERROR':
      new_state.loaded = false
      new_state.error = action.error
      new_state.sort = state.sort
  }
  return new_state as State
}

export const store = createStore(listStateChange)

export const boundError = (error: string) => {
  store.dispatch({
    type: 'LOADED',
    error,
  })
}

export const boundLoaded = (data: any) => {
  store.dispatch({
    type: 'LOADED',
    data,
  })
}

export const boundUnloaded = (sort?: string) => {
  store.dispatch({
    type: 'UNLOADED',
    sort,
  })
}
