import React from 'react'
import { boundError, boundLoaded, boundUnloaded, State, store } from './Store'
import Table from './Table'

interface Props {}

const reload = (sort) => {
  fetch(`/api?sort=${sort}`)
    .then((resp) => resp.json())
    .then((resp_data) => {
      boundLoaded(resp_data)
    })
    .catch((error) => {
      console.error(error)
      boundError(error)
    })
}

const LoaderRedux: React.FC<Props> = (props: Props) => {
  const [tick, setTick] = React.useState<number>(0)
  const ref = React.useRef<State>({
    data: null,
    error: null,
    loaded: false,
    sort: 'a',
  })
  reload('a')
  React.useEffect(() => {
    store.subscribe(() => {
      ref.current = store.getState()
      console.log(`redux state change -> ${JSON.stringify(ref.current)}`)
      if (!ref.current.loaded && ref.current.sort) {
        reload(ref.current.sort)
      }
      setTick(tick + 1)
    })
  }, [])

  return ref.current.data ? (
    <Table data={ref.current.data} sort={ref.current.sort} setSort={boundUnloaded} />
  ) : (
    <div>Loading...</div>
  )
}

export default LoaderRedux
