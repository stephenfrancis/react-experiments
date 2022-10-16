import React from 'react'

interface Props {
  data: any[]
  setSort: (sort: string, sort_desc: boolean) => void
  sort: string | undefined
  sort_desc: boolean | undefined
}

interface HeadingProps {
  column: string
  setSort: (sort: string, sort_desc: boolean) => void
  sort: string | undefined
  sort_desc: boolean | undefined
}

const Heading: React.FC<HeadingProps> = (props) => {
  const sort_arrow = props.sort_desc ? '▼' : '▲'
  return (
    <th
      className="clickable"
      style={{
        minWidth: 100,
        textAlign: 'left',
      }}
      onClick={props.setSort.bind(
        undefined,
        props.column,
        props.sort === props.column && !props.sort_desc
      )}
    >
      Head {props.column.toUpperCase()} {props.sort === props.column ? sort_arrow : ''}
    </th>
  )
}

export const Table: React.FC<Props> = (props: Props) => {
  return (
    <table>
      <thead>
        <tr>
          <Heading
            column="a"
            sort={props.sort}
            sort_desc={props.sort_desc}
            setSort={props.setSort}
          />
          <Heading
            column="b"
            sort={props.sort}
            sort_desc={props.sort_desc}
            setSort={props.setSort}
          />
          <Heading
            column="c"
            sort={props.sort}
            sort_desc={props.sort_desc}
            setSort={props.setSort}
          />
          <Heading
            column="d"
            sort={props.sort}
            sort_desc={props.sort_desc}
            setSort={props.setSort}
          />
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
