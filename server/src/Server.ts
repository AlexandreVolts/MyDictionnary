import express = require("express");
import http = require("http");

class Server
{
	private readonly PORT:number;
	private app = express();
	private server:http.Server;

	constructor(port:number)
	{
		this.PORT = port;
		this.server = this.app.listen(this.PORT, this.initialise);
	}

	private initialise = (err:string):void =>
	{
		if (err) {
			console.error(err);
			return;
		}
		console.log(`Server is running on port ${this.PORT}.`);
		this.app.get("/", (req:express.Request, res:express.Response) => {
			req;
			res;
		});
	}
}

export default Server;