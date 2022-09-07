const express = require('express');
const app = express();
const dotenv = require('dotenv');
const schema = require('./graphql/schemas');
const { graphqlHTTP } = require('express-graphql');

dotenv.config();
app.use(express.json());
app.use('/graphql', new graphqlHTTP({
    schema: schema.rootSchema,
    graphiql: true
}));

const port = process.env.APP_PORT;

app.listen(port, (err) => {
    if(!err) console.log(`Server up and running`);
    else console.error(err);
});