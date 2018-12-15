 // This file connects to the remote Prisma DB and gives us ability to query with JS
 const { Prisma } = require('prisma-binding');

 const db = new Prisma({
     typeDefs: './generated/prisma.graphql',
     endpoint: process.env.Prisma_ENDPOINT,
     secret: process.env.PRISMA_SECRET,
     debug: false,
 });

 module.exports = db;