A MongoDB, Express, ReactJS and NodeJS application where users can query, display, and save articles from the New York Times Article Search API. 
Users can remove saved articles and add/deletes notes to it

Please check out the deployed version in Heroku here!

Click on the headlines to be re-directed to the full New York Times articles.

Functionality
On the backend, the app uses express to serve routes and mongoose to interact with a MongoDB database.

On the frontend, the app uses ReactJS for rendering components, axios for internal/external API calls, and bootstrap as a styling framework.

In order to transpile the JSX code, webpack and babel were utilized. All of the JSX code in the /app folder was transpiled into the bundle.js file located in the /public folder.

Cloning down the repo
If you wish to clone the app down to your local machine...

Ensure that you have MongoDB set up on your laptop

Once you are set up, cd into this repo and run 'yarn install' in root folder 
cd to 'client' folder & 'yarn install' again
cd.. back to root folder
Then open another bash or terminal window and run mongod
Run the script with 'yarn start' it will automaticall open
localhost:3000 in your browser.


