const data = [
  { a: 'Ay', b: 3434, c: 'Click', d: 'Dundee' },
  { a: 'Bee', b: 2323, c: 'Clack', d: 'Devon' },
  { a: 'Cee', b: 39405734, c: 'Clock', d: 'Dumbarton' },
]

const sortFunct = (sort, sort_desc) => {
  return (a, b) => {
    if (a[sort] < b[sort]) {
      return sort_desc ? 1 : -1
    }
    if (a[sort] > b[sort]) {
      return sort_desc ? -1 : 1
    }
    return 0
  }
}

module.exports = async (ctx, next) => {
  if (ctx.path !== '/api') {
    console.log(`list_redux/Server.js ignoring ${ctx.path}`)
    return await next()
  }
  console.log(`list_redux/Server.js serving ${ctx.query.sort} desc? ${ctx.query.sort_desc}`)
  ctx.body = data.sort(sortFunct(ctx.query.sort || 'a', ctx.query.sort_desc === 'true'))
}
