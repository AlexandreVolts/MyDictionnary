# MyDictionnary

## Install dependencies:

``cd server && npm install && cd ../app && npm install && cd ..``


## Run the server:

### Prepare the config:

**``cd server/``**
You will need a config.json file in the server folder, without this file server can't run.
The format of the config.json file must be the following:

``
{
	"firebase": {
	    "apiKey":"<API_KEY>",
	    "authDomain":"<AUTH_DOMAIN>",
	    "databaseURL":"<DATABASE_URL>",
	    "projectId":"<PROJECT_ID>",
	    "storageBucket":"<PROJECT_BUCKET>",
	    "messagingSenderId":"<ID>",
	    "appId":"<APP_ID>",
	    "measurementId":"<MEASUREMENT_ID>"
	}
}
``

### Run the server (for real this time)

Then, you can run the following command to compile and run the server:

``cd src && tsc && cd .. && npm start``

To use tsc command, you must install typescript globally:

``npm install -g typescript``


## Run the mobile app:

**``cd app/``**
``expo start``

Then scan the QR Code in the console or in the navigator with your phone and the expo app .