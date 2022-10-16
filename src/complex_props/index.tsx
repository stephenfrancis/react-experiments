import * as React from 'react'

/*
Experiment C: using a complex object as state and prop
*/
interface Complex {
  a: string
  b: number
  c: {
    d: string
    e: number
  }
}

const changeComplex = (complex: Complex) => {
  console.log(`changeComplex: ${JSON.stringify(complex)}`)
  const new_complex: Complex = Object.assign({}, complex)
  new_complex.c = Object.assign({}, complex.c)
  if (complex.a === 'A') {
    new_complex.a = 'AA'
  } else if (complex.b === 1) {
    new_complex.b = 2
  } else if (complex.c.d === 'D') {
    new_complex.c.d = 'DD'
  } else if ((complex.c.e = 12)) {
    new_complex.c.e = 15
  }
  return new_complex
}

export const ComplexProps: React.FC<{}> = () => {
  const [complex, setComplex] = React.useState<Complex>({
    a: 'A',
    b: 1,
    c: {
      d: 'D',
      e: 12,
    },
  })
  React.useEffect(() => {
    setTimeout(() => {
      setComplex(changeComplex(complex))
    }, 2000)
  }, [complex])
  return (
    <div style={{ border: '1px solid blue', padding: 10 }}>
      <h2>Complex Props</h2>
      <p>
        A complex object (containing various values, including another object) is the state of an
        outer component (blue) and is passed as props to an inner one (green)
      </p>
      <Display complex={complex} />
    </div>
  )
}

const Display: React.FC<{ complex: Complex }> = (props) => {
  return (
    <div style={{ border: '1px solid green', padding: 10 }}>
      <p>
        The object is changed automatically in various ways at 2-second intervals, demonstrating
        that React's state-change and prop-change algorithm does deep-comparison of these objects.
      </p>
      {JSON.stringify(props.complex)}
    </div>
  )
}
