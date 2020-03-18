import express = require("express");
import APIController from "./APIController";
import Database from "./Database";
import User from "./models/User";

export default class UsersController extends APIController
{
	private db:Database<User>;
	
	constructor(app:express.Express, db:firebase.database.Database)
	{
		super(app, "users");
		this.db = new Database(db, "users");
	}
	
	protected get(req:express.Request, res:express.Response):void
	{
		console.log("get controller reached");
	}
	protected getAll(req:express.Request, res:express.Response):void
	{

	}
	protected post(req:express.Request, res:express.Response):void
	{

	}
	protected put(req:express.Request, res:express.Response):void
	{

	}
	protected delete(req:express.Request, res:express.Response):void
	{

	}
}