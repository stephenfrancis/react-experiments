import React from 'react'
import { setFlagsFromString } from 'v8'

interface Props {
  data: any[]
  setSort: (sort: string) => void
  sort: string
}

const Default: React.FC<Props> = (props: Props) => {
  return (
    <table>
      <thead>
        <tr>
          <th onClick={props.setSort.bind(this, 'a')}>Head 1 {props.sort === 'a' ? '↑' : ''}</th>
          <th onClick={props.setSort.bind(this, 'b')}>Head 2 {props.sort === 'b' ? '↑' : ''}</th>
          <th onClick={props.setSort.bind(this, 'c')}>Head 3 {props.sort === 'c' ? '↑' : ''}</th>
          <th onClick={props.setSort.bind(this, 'd')}>Head 4 {props.sort === 'd' ? '↑' : ''}</th>
        </tr>
      </thead>
      <tbody>
        {props.data.map((row: any) => (
          <tr key={row.a}>
            <td>{row.a}</td>
            <td>{row.b}</td>
            <td>{row.c}</td>
            <td>{row.d}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default Default
