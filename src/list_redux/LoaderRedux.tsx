import React from 'react'
import { boundError, boundLoaded, boundUnloaded, store } from './Store'
import Table from './Table'

interface Props {}

const LoaderRedux: React.FC<Props> = (props: Props) => {
  const [data, setData] = React.useState<any[] | null>(null)
  const [sort, setSort] = React.useState<string>('a')
  React.useEffect(() => {
    store.subscribe(() => {
      store.getState()
    })

    // setData(null)
    fetch(`/api?sort=${sort}`)
      .then((resp) => resp.json())
      .then((resp_data) => {
        setData(resp_data)
      })
      .catch((error) => {
        console.error(error)
        setData(null)
      })
  }, [sort])

  return data ? <Table data={data} sort={sort} setSort={setSort} /> : <div>Loading...</div>
}

export default LoaderRedux
