"use strict";

const functions = require("firebase-functions");
const { expressServer } = require("./__sapper__/build/server/server");

exports.__name__ = functions.https.onRequest(expressServer);
