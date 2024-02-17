const http = require('http')
const querystring = require('querystring')

const request = function (param) {
  return new Promise((resolve, reject) => {
    const parameters = {
      menu: param,
    }
    const get_request_args = querystring.stringify(parameters)

    const options = {
      hostname: 'localhost',
      port: 3000,
      path: '/request?' + get_request_args,
      method: 'GET',
    }
    console.log(printTime() + ' > Request : ', get_request_args)
    const req = http.request(options, res => {
      res.on('data', d => {
        process.stdout.write(d)
        resolve(d)
      });
    });
    req.on('error', error => {
      console.error(error)
      reject(error)
    });
    req.end()
  })

}

function printTime() {
  var time = new Date()
  return time
}

for (let i = 1; i <= 5; i++) {
  request('req' + i) // http://localhost:3000/request?menu=req[number]
}