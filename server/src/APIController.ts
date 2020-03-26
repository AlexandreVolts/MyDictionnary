import express = require("express");

export default abstract class APIController
{
	constructor(app:express.Express, route:string)
	{
		app.get(`${route}/:id`, this.get);
		app.get(route, this.getAll);
		app.post(route, this.post);
		app.put(route, this.put);
		app.delete(route, this.delete);
	}
	
	protected abstract get(req:express.Request, res:express.Response):void;
	protected abstract getAll(req:express.Request, res:express.Response):void;
	protected abstract post(req:express.Request, res:express.Response):void;
	protected abstract put(req:express.Request, res:express.Response):void;
	protected abstract delete(req:express.Request, res:express.Response):void;
}