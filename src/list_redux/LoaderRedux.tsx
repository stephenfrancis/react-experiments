import React from 'react'
import { connect, Provider } from 'react-redux'
import { boundError, boundLoaded, boundUnloaded, State, store } from './Store'
import { Table } from './Table'

interface Props {}

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

const Inner: React.FC<any> = (props) => {
  const setSort = (sort: string, sort_desc: boolean) => {
    props.boundUnloaded(sort, sort_desc)
    reload(sort, sort_desc)
  }
  return props.data ? (
    <Table data={props.data} sort={props.sort} sort_desc={props.sort_desc} setSort={setSort} />
  ) : (
    <div>Loading...</div>
  )
}

const mapStateToProps = (state: State /*, ownProps*/) => {
  return state
}

const mapDispatchToProps = { boundError, boundLoaded, boundUnloaded }

const Middle = connect(mapStateToProps, mapDispatchToProps)(Inner)

export const LoaderRedux: React.FC<Props> = (props: Props) => {
  React.useEffect(() => {
    boundUnloaded('a', false)
    reload('a', false)
  }, [])
  return (
    <Provider store={store}>
      <Middle />
    </Provider>
  )
}
