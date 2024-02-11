"use strict";
exports.__esModule = true;
var node_postgres_1 = require("drizzle-orm/node-postgres");
var pg_1 = require("pg");
var DB_URL = process.env.DB_URL || "";
var client = new pg_1.Client({
    connectionString: DB_URL
});
await client.connect();
var db = (0, node_postgres_1.drizzle)(client);
exports["default"] = db;
