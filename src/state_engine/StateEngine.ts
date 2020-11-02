export type SetStateFunc = (arg: number) => void;

console.log(`real StateEngine invoked`)
const set_state_functs: SetStateFunc[] = [];

export const registerSetStateFunction = (f: SetStateFunc) => {
  set_state_functs.push(f);
};

setInterval(() => {
  const new_num = Math.ceil(Math.random() * 10000);
  set_state_functs.forEach((f: SetStateFunc) => {
    f(new_num);
  });
}, 5000);
