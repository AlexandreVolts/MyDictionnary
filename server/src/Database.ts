import firebase = require("firebase");
import Model from "./models/Model";

export default class Database<T extends Model>
{
	private ref:firebase.database.Reference;

	constructor(db:firebase.database.Database, dbName:string)
	{
		this.ref = db.ref(dbName);
	}

	public get(callback:Function):void
	{
		let output:T|string;
		
		this.ref.on("value", (snapshot) => {
			output = snapshot.val();
			this.ref.off("value");
			callback(output);
		},
		(err:any) => {
			output = `The read failed: ${err.code}`;
			callback(output);
		});
	}
}