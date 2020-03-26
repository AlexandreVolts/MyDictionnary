import express = require("express");
import firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";
import User from "./models/User";

export default class FirebaseUserService
{

	constructor(app:express.Express, private firebaseApp:firebase.app.App)
	{
		app.post("/register", this.registerUser);
		app.post("/login", this.loginUser);
	}

	private prepareUserRequest = (req:express.Request, res:express.Response, callback:Function) =>
	{
		const USER:User = {
			id: 0,
			email: req.body.email,
			password: req.body.password
		};

		if (!USER.email || !USER.password)
			res.status(400).send("Email or password is invalid.");
		callback(USER);
	}
	private registerUser = (req:express.Request, res:express.Response) =>
	{
		this.prepareUserRequest(req, res, (user:User) => {
			this.firebaseApp.auth()
			.createUserWithEmailAndPassword(user.email, user.password)
			.catch((err:firebase.auth.Error) => {
				res.status(400).send(err.message);
			});
		});
		res.json({response: "OK"});
	}
	private loginUser = (req:express.Request, res:express.Response) =>
	{
		this.prepareUserRequest(req, res, (user:User) => {
			this.firebaseApp.auth()
			.signInWithEmailAndPassword(user.email, user.password)
			.catch((err:firebase.auth.Error) => {
				res.status(400).send(err.message);
			});
		});
		res.json({response: "OK"});
	}
	private logoutUser = (req:express.Request, res:express.Response) =>
	{
		req;
		this.firebaseApp.auth().signOut().then(() => {

		});
		res.json({response: "OK"});
	}
};