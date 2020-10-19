import * as React from 'react'

/*
Experiment B: state vs (ajax) data
*/

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

// need to experiment with storing the ajax data in a memo or something...

const Main: React.FC<{}> = () => {
  const [num, setNum] = React.useState<number>(0)
  React.useEffect(() => {
    setTimeout(() => {
      setNum(1)
      ajaxMock().then((data) => {
        setNum(2)
      })
    }, 3000)
  }, [])
  return <div>Component B: {load_state[num]}</div>
}

export default Main
