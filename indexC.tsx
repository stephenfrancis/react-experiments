import * as React from "react";
import * as ReactDOM from "react-dom";

/*
Experiment C: using a complex object as state and prop
*/
interface Complex {
  a: string;
  b: number;
  c: {
    d: string;
    e: number;
  };
}

const changeComplex = (complex: Complex) => {
  console.log(`changeComplex: ${JSON.stringify(complex)}`);
  const new_complex: Complex = Object.assign({}, complex);
  new_complex.c = Object.assign({}, complex.c);
  if (complex.a === "A") {
    new_complex.a = "AA";
  } else if (complex.b === 1) {
    new_complex.b = 2;
  } else if (complex.c.d === "D") {
    new_complex.c.d = "DD";
  } else if ((complex.c.e = 12)) {
    new_complex.c.e = 15;
  }
  return new_complex;
};

const App: React.FC<{}> = () => {
  const [complex, setComplex] = React.useState<Complex>({
    a: "A",
    b: 1,
    c: {
      d: "D",
      e: 12,
    },
  });
  React.useEffect(() => {
    setTimeout(() => {
      setComplex(changeComplex(complex));
    }, 2000);
  }, [complex]);
  return (
    <div>
      Component C: <Display complex={complex} />
    </div>
  );
};

const Display: React.FC<{ complex: Complex }> = (props) => {
  return <div>Display: {JSON.stringify(props.complex)}</div>;
};

ReactDOM.render(<App />, document.getElementById("rootC"));
