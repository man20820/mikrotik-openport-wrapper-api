require("dotenv").config();
const express = require('express');
const app = express();
const axios = require('axios');
const https = require('https');
const port = 3000;
const address = '0.0.0.0'; 
const instance = axios.create({
  httpsAgent: new https.Agent({  
    rejectUnauthorized: false
  })
});

const MT_ADDRESS=process.env.MT_ADDRESS
const MT_PORT=process.env.MT_PORT
const MT_USER=process.env.MT_USER
const MT_PASSWORD=process.env.MT_PASSWORD
const APP_USER=process.env.APP_USER
const APP_PASSWORD=process.env.APP_PASSWORD

app.get('/', basicAuthMiddleware, (req, res) => {
  console.log(res);
  instance.get(systemResource, { auth: { username: MT_USER, password: MT_PASSWORD } })
    .then(response => {
        console.log(response.data); // Handle successful response
        res.send(response.data);
    })
    .catch(error => {
        console.error(error); // Handle errors
    });
});

app.get('/open-port', basicAuthMiddleware, (req, res) => {
  var ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress 
  console.log(ip);
  // console.log(res);
  instance.put(addressList, {list: "GithubActions", address: ip, comment: "GithubActions", timeout: "00:30:00"}, { auth: { username: MT_USER, password: MT_PASSWORD } } )
  .then(response => {
    console.log(response.data); // Handle successful response
    res.send(response.data);
  })
  .catch(error => {
    console.error(error); // Handle errors
  });
  // res.send(`my ip is: ${ip}`);
});

const systemResource = `https://${MT_ADDRESS}:${MT_PORT}/rest/system/resource`;
const addressList = `https://${MT_ADDRESS}:${MT_PORT}/rest/ip/firewall/address-list`;

function validateCredentials(username, password) {
  return username === `${APP_USER}` && password === `${APP_PASSWORD}`;
}

function basicAuthMiddleware(req, res, next) {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Basic ')) {
      return res.status(401).json({ message: 'Unauthorized: Missing Basic auth header' });
  }

  const [username, password] = Buffer.from(authHeader.split(' ')[1], 'base64').toString().split(':');

  if (validateCredentials(username, password)) {
      next();
  } else {
      return res.status(401).json({ message: 'Unauthorized: Invalid credentials' });
  }
}



app.listen(port, address, () => {
  console.log(`Server running at http://${address}:${port}`);
});

module.exports = app
