const express = require("express");
const bodyParser = require("body-parser");
const proxy = require("express-http-proxy");
const fs = require("fs");

const server = express();
server.use(bodyParser.urlencoded({ extended: false }));
server.disable("x-powered-by");
server.use(bodyParser.json());

var catalogServer = "http://localhost:8081",
  cartServer = "http://localhost:8082",
  containerServer = "http://localhost:8080";

function proxyReqOptDecorator(proxyReqOpts) {
  return proxyReqOpts;
}

function match(domain, proxyRoute) {
  return proxy(domain, {
    proxyReqPathResolver(req, res) {
      console.log(`${domain}${proxyRoute}${req.url}`);
      return `${proxyRoute}${req.url}`;
    },
    proxyReqOptDecorator(proxyReqOpts) {
      return proxyReqOpts;
    },
    proxyReqOptDecorator,
  });
}

function matchPost(domain, proxyRoute) {
  return proxy(domain, {
    proxyReqPathResolver(req, res) {
      console.log(`${domain}${proxyRoute}${req.url}`);
      return `${proxyRoute}${req.url}`;
    },
    proxyReqBodyDecorator: function (bodyContent, srcReq) {
      return bodyContent;
    },
    proxyReqOptDecorator,
  });
}

server.use("/cart", matchPost(cartServer, ""));
server.use("/cart/*", matchPost(cartServer, "/cart/*"));

server.use("/catalog", matchPost(catalogServer, ""));
server.use("/catalog/*", matchPost(catalogServer, "/catalog/*"));



server.listen(3000, (err) => {
  if (err) throw err;
  console.log(`> Ready on http://localhost:3000`);
});