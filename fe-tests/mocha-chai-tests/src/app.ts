const app2 = () => console.log('Hello')
module.exports = { app2 }
if (!module.parent) {
  app2()
}