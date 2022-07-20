const express = require("express");
const bodyParser = require("body-parser");
const proxy = require("express-http-proxy");
const fs = require("fs");

const server = express();
server.use(bodyParser.urlencoded({ extended: false }));
server.disable("x-powered-by");
server.use(bodyParser.json());

var layoutServer = "http://localhost:8080",
  catalogServer = "http://localhost:8081",
  cartServer = "http://localhost:8082",
  productServer = "http://localhost:8083";

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

server.use("/layout", matchPost(layoutServer, ""));
server.use("/layout/*", matchPost(layoutServer, "/layout/*"));

server.use("/cart", matchPost(cartServer, ""));
server.use("/cart/*", matchPost(cartServer, "/cart/*"));

server.use("/catalog", matchPost(catalogServer, ""));
server.use("/catalog/*", matchPost(catalogServer, "/catalog/*"));

server.use("/product", matchPost(productServer, ""));
server.use("/product/*", matchPost(productServer, "/product/*"));
server.get("/product/:slug", function(req, res) {
  res.render("user", userdata);
});

server.listen(3000, (err) => {
  if (err) throw err;
  console.log(`> Ready on http://localhost:3000`);
});