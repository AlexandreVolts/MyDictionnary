import express = require("express");
import http = require("http");
import fs = require("fs");
import firebase = require("firebase");
import Database from "./Database";
import APIController from "./APIController";
import UsersController from "./UsersController";

class Server
{
	private readonly PORT:number;
	private app = express();
	private server:http.Server;
	private config:any = JSON.parse(fs.readFileSync("config.json", "utf8"));

	constructor(port:number)
	{
		this.PORT = port;
		this.server = this.app.listen(this.PORT, this.initialise);
		firebase.initializeApp(this.config.firebase);
	}

	private initialise = (err:string):void =>
	{
		let controllers:Array<APIController>;

		if (err) {
			console.error(err);
			return;
		}
		console.log(`Server is running on port ${this.PORT}.`);
		controllers = [
			new UsersController(this.app, firebase.database())
		];
		this.app.get("/", (req:express.Request, res:express.Response) => {
			req;
			res;
		});
	}
}

export default Server;