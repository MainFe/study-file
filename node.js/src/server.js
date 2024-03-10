// 구현
// Server 사용자가 요청을 할 수 있는 서버
// View 서버의 응답을 표시
// Routers 사용자가 어떤 URL에 따라 다른 요청을 처리
// Request Handlers 라우터를 사용하여 라우팅된 요청을 이행하기 위한 요청 핸들러

// let http = require('http')

// http.createServer(function(request, response) {
//   console.log('Request received')
//   response.writeHead(200, {"Content-Type": "text/plain"})
//   response.write("Hello from our application")
//   response.end()
// }).listen(8888)

// console.log('Server started on localhost port 8888')


const http = require('http')

/**
 * 서버 시작하고, 8888포트에서 리슨함
 * @param {function} route 
 */
function startServer(route, handle) {
  /**
   * 
   * @param {http.IncomingMessage} request 
   * @param {http.ServerResponse} response 
   */
  function onRequest(request, response) {
    let reviewData = ''
    let myURL = new URL('http://localhost:8888' + request.url);
    let pathname = myURL.pathname;
    request.setEncoding('utf-8')
    request.addListener('data', function(chunk) {
      reviewData += chunk
    })

    request.addListener('end', function() {
      route(handle, pathname, response, reviewData)
    })
  }
  
  http.createServer(onRequest).listen(8888)
  
  console.log('Server started on localhost port 8888')
}

module.exports.startServer = startServer