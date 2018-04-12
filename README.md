# nytreact-  React-based rendition of the New York Times Article Search application

A MongoDB, Express, ReactJS and NodeJS application where users can query, display, and save articles from the New York Times Article Search API. 
Users can remove saved articles and add/deletes notes to it

Please check out the deployed version in Heroku here!
https://mighty-cove-52173.herokuapp.com/


Click on the 'Link to Articles' to be re-directed to the full New York Times articles.

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

Scrennshots
-------------------------
<img width="852" alt="screen shot 2018-04-10 at 5 07 16 pm" src="https://user-images.githubusercontent.com/32559323/38653558-3bd125fe-3dc0-11e8-9a88-97d6de4429d4.png">

Enter Subject, Start and End year & 'Search' button will be enabled.
Select 'Search' button to search Newyorktimes API
<img width="853" alt="screen shot 2018-04-10 at 8 48 57 pm" src="https://user-images.githubusercontent.com/32559323/38653594-67325a92-3dc0-11e8-9742-e12d85203dd9.png">

Search Results
<img width="853" alt="screen shot 2018-04-10 at 8 49 19 pm" src="https://user-images.githubusercontent.com/32559323/38653663-aa919438-3dc0-11e8-9adc-2c27901d586f.png">

Select' Save Articles' to save the articles in Mongo DB & Display in 'Save Artciles' section in UI as below
<img width="846" alt="screen shot 2018-04-11 at 7 44 52 pm" src="https://user-images.githubusercontent.com/32559323/38653723-f3210684-3dc0-11e8-972e-11f9ba650dfa.png">

Select 'Delete' Article' to delete from Mongo DB & remove display in 'Save Artciles' section in UI.
Select 'View/Add Note' to View or Add or Delete Note. Only one note is allowed to be associated with each article.
<img width="771" alt="screen shot 2018-04-11 at 7 49 20 pm" src="https://user-images.githubusercontent.com/32559323/38653835-7b74101c-3dc1-11e8-8796-365e938338d3.png">



