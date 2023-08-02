const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

//cors
app.use(cors());

//connect to mongo db
mongoose.connect(
  'mongodb+srv://<username>:<password>@test-cluster.h2swtcn.mongodb.net/?retryWrites=true&w=majority'
);
mongoose.connection.once('open', () => {
  console.log('connected to database');
});

app.use('/graphql', graphqlHTTP({ schema, graphiql: true }));

app.listen(4000, () => {
  console.log('app listening on port 4000');
});
