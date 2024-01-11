const http = require('http') 
const port = 8080 

// Create a server object: 
const server = http.createServer(function (req, res) { 

	// Write a response to the client 
	res.writeHeader(200, {"Content-Type": "text/html"})
	res.write(`<H1>Test successfull</H1>`)

	// End the response 
	res.end() 
}) 

// Set up our server so it will listen on the port 
server.listen(port, function (error) { 

	// Checking any error occur while listening on port 
	if (error) { 
		console.log('Error', error); 
	} 
	// Else sent message of listening 
	else { 
		console.log('Server is listening on port' + port); 
	} 
})
