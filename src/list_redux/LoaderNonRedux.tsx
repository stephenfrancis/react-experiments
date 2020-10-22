import React from 'react'
import Table from './Table'

interface Props {}

const Default: React.FC<Props> = (props: Props) => {
  const [data, setData] = React.useState<any[] | null>(null)
  const [sort, setSort] = React.useState<string>('a')
  const [sort_desc, setSortDesc] = React.useState<boolean>(false)
  React.useEffect(() => {
    // setData(null)
    fetch(`/api?sort=${sort}&sort_desc=${sort_desc}`)
      .then((resp) => resp.json())
      .then((resp_data) => {
        setData(resp_data)
      })
      .catch((error) => {
        console.error(error)
        setData(null)
      })
  }, [sort, sort_desc])
  const setSortClick = (sort_arg: string, sort_desc_arg: boolean) => {
    if (sort !== sort_arg) {
      setSort(sort_arg)
    }
    if (sort_desc !== sort_desc_arg) {
      setSortDesc(sort_desc_arg)
    }
  }
  return data ? (
    <Table data={data} sort={sort} sort_desc={sort_desc} setSort={setSortClick} />
  ) : (
    <div>Loading...</div>
  )
}

export default Default
