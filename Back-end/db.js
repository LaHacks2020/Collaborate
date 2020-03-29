var mongo = require('mongodb');
var monk = require('monk');
const connectionString =  "mongodb+srv://cluster0-de7rl.mongodb.net/test" ;
var db = monk(connectionString);
db.then(() =>{
  console.log("connection success");
}).catch((e)=>{
  console.error("Error !",e);
});

module.exports = db;

const Agenda = require('agenda');
const { MongoClient } = require('mongodb');

async function run() {
  const db = connectionString

  // Agenda will use the given mongodb connection to persist data, so jobs
  // will go in the "agendatest" database's "jobs" collection.
  const agenda = new Agenda().mongo(db, 'jobs');

  // Define a "job", an arbitrary function that agenda can execute
  agenda.define('hello', () => {
    console.log('Hello, World!');
    process.exit(0);
  });

  // Wait for agenda to connect. Should never fail since connection failures
  // should happen in the `await MongoClient.connect()` call.
  await new Promise(resolve => agenda.once('ready', resolve));

  // Schedule a job for 1 second from now and persist it to mongodb.
  // Jobs are uniquely defined by their name, in this case "hello"
  agenda.schedule(new Date(Date.now() + 1000), 'hello');
  agenda.start();
}

run().catch(error => {
  console.error(error);
  process.exit(-1);
});