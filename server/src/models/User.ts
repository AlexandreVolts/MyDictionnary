import Model from "./Model";

export default interface User extends Model
{
	email:string;
	password:string;
}