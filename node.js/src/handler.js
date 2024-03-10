const fs = require('fs')
const querystring = require('querystring')

function home(response) {
  console.log("Executing 'home' handler")
  const html = fs.readFileSync("./src/home.html")
  response.writeHead(200, {"Content-Type": "text/html"})
  response.write(html)
  response.end()
}
function review(response, reviewData) {
  console.log("Executing 'review' handler")
  response.writeHead(200, {"Content-Type": "text/plain"})
  response.write('Your review is ' + querystring.parse(reviewData).text)
  response.end()
}

module.exports = { home, review }