const app = require('./app');
const { PORT } = require('./config');

app.listen(PORT, ()=>{
  console.log(`Server is listening to PORT ${PORT}`)
});