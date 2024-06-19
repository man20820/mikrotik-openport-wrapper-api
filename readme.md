# DotENV 

```bash
MT_ADDRESS=MikroTik Host / IP
MT_PORT=MikroTik REST API Port
MT_USER=MikroTik User
MT_PASSWORD=MikroTik Password
APP_USER=User for basic auth
APP_PASSWORD=User for basic auth
```

# Usage
Request
```bash
curl -k http://test:ting@localhost:3000/
```
Response
```bash
{
    "architecture-name": "x86_64",
    "board-name": "CHR",
    "build-time": "May/30/2023 13:49:00",
    "cpu": "Intel",
    "cpu-count": "1",
    "cpu-frequency": "2399",
    "cpu-load": "10",
    "factory-software": "7.1",
    "free-hdd-space": "26626113536",
    "free-memory": "591990784",
    "platform": "MikroTik",
    "total-hdd-space": "26647932928",
    "total-memory": "1006632960",
    "uptime": "41w6d18h4m22s",
    "version": "7.9.2 (stable)",
    "write-sect-since-reboot": "138115328",
    "write-sect-total": "138115328"
}
```
Request
```bash
curl -k http://test:ting@localhost:3000/open-port
```
Response
```bash
{
    ".id": "*C69D",
    "address": "127.0.0.1",
    "comment": "GithubActions",
    "creation-time": "jun/19/2024 18:13:17",
    "disabled": "false",
    "dynamic": "true",
    "list": "GithubActions",
    "timeout": "30m"
}
```


# Express.js Hello World API
The Express.js Hello World API is a simple REST API that responds to a GET request on the root endpoint with the text "Hello World!".

# Getting Started
To use the API, you'll need to have Node.js and npm installed on your system. Once you have those installed, follow these steps:

1. Clone the repository or download the source code
2. Run npm install to install the necessary dependencies
3. Run npm start to start the server

By default, the server will listen on port 3000 and will listen on all available network interfaces.

# API Endpoints
## \`GET /\`
Returns the text "Hello World!".

Example Request
```
GET http://localhost:3000/
```

Example Response
```
HTTP/1.1 200 OK
Content-Type: text/plain

Hello World!
```
# Authentication
This API does not require authentication.

# License
This code is licensed under the MIT License. See the LICENSE file for more information.

# Conclusion
This documentation should help users and developers understand how to use and work with the Express.js Hello World API. If you have any questions or issues, please feel free to contact the author or submit an issue on GitHub.