import express = require("express");

export default abstract class APIController
{
	constructor(protected app:express.Express, route:string)
	{
		this.app.get(`${route}/:id`, this.get);
		this.app.get(route, this.getAll);
		this.app.post(route, this.post);
		this.app.put(route, this.put);
		this.app.delete(route, this.delete);
	}
	
	protected abstract get(req:express.Request, res:express.Response):void;
	protected abstract getAll(req:express.Request, res:express.Response):void;
	protected abstract post(req:express.Request, res:express.Response):void;
	protected abstract put(req:express.Request, res:express.Response):void;
	protected abstract delete(req:express.Request, res:express.Response):void;
}