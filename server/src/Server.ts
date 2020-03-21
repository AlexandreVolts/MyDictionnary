import http = require("http");
import fs = require("fs");
import express = require("express");
import bodyParser = require("body-parser");
import firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";
import Database from "./Database";
import APIController from "./APIController";
import UsersController from "./UsersController";

class Server
{
	private readonly PORT:number;
	private app = express();
	private server:http.Server;
	private config:any = JSON.parse(fs.readFileSync("config.json", "utf8"));
	private firebaseApp:firebase.app.App;

	constructor(port:number)
	{
		this.PORT = port;
		this.app.use(bodyParser.json());
		this.server = this.app.listen(this.PORT, this.initialise);
		this.firebaseApp = firebase.initializeApp(this.config.firebase);
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
			//new UsersController(this.app, firebase.database())
		];
		this.app.post("/register", (req:express.Request, res:express.Response) => {
			if (!req.body.email || !req.body.password)
				res.status(400).send("Email or password is invalid.");
			this.firebaseApp.auth()
			.createUserWithEmailAndPassword(req.body.email, req.body.password)
			.catch((err:firebase.auth.Error) => {
				res.status(400).send(err.message);
			});
		});
		this.app.post("/login", (req:express.Request, res:express.Response) => {
			if (!req.body.email || !req.body.password)
				res.status(400).send("Email or password is invalid.");
			this.firebaseApp.auth()
			.signInWithEmailAndPassword(req.body.email, req.body.password)
			.catch((err:firebase.auth.Error) => {
				res.status(400).send(err.message);
			});
		});
	}
}

export default Server;