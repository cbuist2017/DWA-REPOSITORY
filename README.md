# DWA-REPOSITORY

INSTALLATION INSTRUCTIONS:

One should be able to download the files from github and store in a folder on his or her desktop

Once that is done then one is advised to open terminal and change his or her directory to that folder containing the files.

The main packages to install are express and body-parser which can be done as follows:

npm install express --save-dev

and

npm install body-parser  --save-dev

don't forget to have node installed if you haven't done so already and preferably nodemon.

One can activate the server by typing in the command line either:

node src/server.js

or

nodemon src/server.js

for continuous uploading.

ENDPOINTS BEING USED:

The port is set in the code to default to port 3000.

If one types into the browser localhost:3000 into the url then they should most likely get a:

CAN NOT GET Error.

or 

healthy: true

POSTMAN:

One must use a service such as POSTMAN so they can see the POST routes that are in the files.

Once postman is installed and running then type this route/url into the browser once one has selected:

POST

Body

Raw Data

Then Enter:

http://localhost:3000/api/v1/urls

Then hit send to receive the shortened url.
