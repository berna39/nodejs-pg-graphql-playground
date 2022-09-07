const { GraphQLObjectType, GraphQLList, GraphQLString, GraphQLInt, GraphQLSchema } = require('graphql');
const db = require('../database/db');

const countryObjectType = new GraphQLObjectType({
    name: "country",
    description: "All countries in the world !",
    fields:{
        id: {
            type : GraphQLInt
        },
        iso: {
            type : GraphQLString
        },
        name: {
            type : GraphQLString
        },
        nicename: {
            type : GraphQLString
        },
        iso3: {
            type : GraphQLString
        },
        phonecode: {
            type : GraphQLString
        },
    }
});

const rootQuery = new GraphQLObjectType({
    name: "root",
    description: "The root query of the graph",
    fields:{
        countries: {
            type: new GraphQLList(countryObjectType),
            resolve: () => db.findAllCountries()
        }
    }
});

exports.rootSchema = new GraphQLSchema({
    query: rootQuery
});