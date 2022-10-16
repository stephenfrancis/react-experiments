import * as React from 'react'

const ajaxMock = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        a: 'A',
        b: 'B',
        c: 12,
        d: true,
      })
    }, 2000)
  })
}

const load_state = ['waiting', 'loading', 'loaded', 'error']

export const StateVsData: React.FC<{}> = () => {
  const [num, setNum] = React.useState<number>(0)
  const ref = React.useRef<any>(null)
  React.useEffect(() => {
    setTimeout(() => {
      setNum(1)
      ajaxMock().then((data) => {
        ref.current = data
        setNum(2)
      })
    }, 3000)
  }, [])
  return (
    <div>
      <h2>State vs Data</h2>
      <p>Looking for ways to store Ajax data separately from state</p>
      {load_state[num]}, data: {JSON.stringify(ref.current)}
    </div>
  )
}
