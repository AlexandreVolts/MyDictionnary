export default abstract class HttpRequest
{
	private static SERVER_URL:string = "http://192.168.1.25:8080";
	
	public static async request(url:string, method:string, params?:any)
	{
		const OPT = {
			method: method,
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json"
			},
			body: params ? JSON.stringify(params) : undefined
		};

		try {
			const RES = await fetch(HttpRequest.SERVER_URL + url, OPT);
			let output = await RES.json();

			return (output);
		}
		catch (err) {
			console.error(err);
		}
	}
};