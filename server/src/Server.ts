import http = require("http");
import fs = require("fs");
import express = require("express");
import bodyParser = require("body-parser");
import firebase from "firebase/app";
import Database from "./Database";
import APIController from "./APIController";
import FirebaseUserService from "./FirebaseUserService";

export default class Server
{
	private readonly PORT:number;
	private app = express();
	private server:http.Server;
	private config:any = JSON.parse(fs.readFileSync("config.json", "utf8"));
	private firebaseApp = firebase.initializeApp(this.config.firebase);
	private fus?:FirebaseUserService;

	constructor(port:number)
	{
		this.PORT = port;
		this.app.use(bodyParser.json());
		this.server = this.app.listen(this.PORT, this.initialise);
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
			
		];
		this.app.get("/", (req:express.Request, res:express.Response) => {
			req;
			res.json({response: "ok it works"});
		});
		this.fus = new FirebaseUserService(this.app, this.firebaseApp);
	}
}