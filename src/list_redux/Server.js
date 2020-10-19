
const data = [
  { a: "Ay", b: 3434, c: "Click", d: "Dundee" },
  { a: "Bee", b: 2323, c: "Clack", d: "Devon" },
  { a: "Cee", b: 39405734, c: "Clock", d: "Dumbarton" },
];

const sortFunct = (sort) => {
  return (a, b) => {
    if (a[sort] < b[sort]) {
      return -1;
    }
    if (a[sort] > b[sort]) {
      return 1;
    }
    return 0
  }
}

module.exports = async ctx => {
  ctx.body = data.sort(sortFunct(ctx.query.sort || "a"))
}
