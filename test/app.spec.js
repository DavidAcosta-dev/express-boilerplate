const app = require('../src/app');

describe('TestSuite: App', ()=>{
  it('GET "/" responds with status200 containing "Hello, world!" ', ()=>{
    return supertest(app).get('/').expect(200, "Hello, world!")
  })

})