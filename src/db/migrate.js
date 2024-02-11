"use strict";
exports.__esModule = true;
var migrator_1 = require("drizzle-orm/node-postgres/migrator");
var _1 = require(".");
await (0, migrator_1.migrate)(_1["default"], { migrationsFolder: "./drizzle" });
