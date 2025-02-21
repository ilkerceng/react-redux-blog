# React Redux CRUD App

## What i want to change in existing code
### client
- update dependencies
- add parcel instead of webpack
- use lerna for client and server
- convert all components to hook api
- replace redux-form with antd library
- integrate eslint for ui.
- lastly but not sure i may use unstated-next library instead of redux, after solving all other issues and more important feature implementations

### server
- enable working with sql and nosql db

<img src='https://david-dm.org/rajaraodv/react-redux-blog.svg' />

#Blogs
🎉 If you like any of the posts, please share it on Twitter (<a href="https://twitter.com/rajaraodv">@rajaraodv</a>)🎉

1. <a href="https://medium.com/@rajaraodv/step-by-step-guide-to-building-react-redux-apps-using-mocks-48ca0f47f9a#.s7zsgq3u1" target="_blank">Step by Step Guide To Building React Redux Apps</a>
2.  <a href="https://medium.com/@rajaraodv/a-guide-for-building-a-react-redux-crud-app-7fe0b8943d0f#.g99gruhdz" target="_blank">A Guide For Building A React Redux CRUD App (3-page app)</a>
3.  <a href="https://medium.com/@rajaraodv/using-middlewares-in-react-redux-apps-f7c9652610c6#.oentrjqpj" target="_blank">Using Middlewares In React Redux Apps</a>
4.  <a href="https://medium.com/@rajaraodv/adding-a-robust-form-validation-to-react-redux-apps-616ca240c124#.jq013tkr1" target="_blank">Adding A Robust Form Validation To React Redux Apps</a> (Note: There has been significant change in redux-form lib and the latest code only reflects half of what's in the blog)
5.  <a href="https://medium.com/@rajaraodv/securing-react-redux-apps-with-jwt-tokens-fcfe81356ea0#.xci6o9s6w" target="_blank">Securing React Redux Apps With JWT Tokens</a>
6.  <a href="https://medium.com/@rajaraodv/handling-transactional-emails-in-react-redux-apps-8b1134748f76#.a24nenmnt" target="_blank">Handling Transactional Emails In React Redux Apps</a>
7.  <a href="https://medium.com/@rajaraodv/the-anatomy-of-a-react-redux-app-759282368c5a#.xufq689g0" target="_blank">The Anatomy Of A React Redux App</a>


#Local Installation
1. Install <a href="https://nodejs.org" target="_blank">Node.js</a> 
2. Install <a target="_blank" href="https://docs.mongodb.org/manual/tutorial/install-mongodb-on-os-x/#install-mongodb-community-edition-with-homebrew">MongoDB</a>
3. `git clone https://github.com/ilkerceng/react-redux-blog.git`
5. `npm install`
6. Create a free <a href="https://postmarkapp.com" target="_blank">PostMark</a> account for sending (confirm email, forgot pwd) emails.
  * Export Postmark credentials to environment
  * `export POSTMARK_API_TOKEN=<getApiTokenFromWInPostmark>`
  * Alternatively, you can run the app on Heroku, add Postmark addon (which adds a free account and sets `POSTMARK_API_TOKEN` to the app running on Heroku). You can then get that `POSTMARK_API_TOKEN` by running: `heroku config:get POSTMARK_API_TOKEN` and then export the token to the terminal. This will now allow you to send email from localhost.

####Preventing Emails From Getting Blocked by GMail, Yahoo etc.
NOTE: In order to send email via PostMark or Sendgrid, you need to verify sender's email(from address). In PostMark you can do that by setting your company or other private email(e.g. raja@rao.com) and verifying that. Then you can use **THAT** company or private email(e.g. raja@rao.com) in the FROM address.

#Running Locally
*You need two terminal windows open*, one for client and the other for server.

####Development
1. In terminal 1, 
	1. `export JWT_SECRET=somesecretstring` <-- This is used to generate JWT tokens.
	2. `export POSTMARK_API_TOKEN=<getApiTokenFromWInPostmark>` <-- Email
	3. `export FROM_EMAIL=<yourFromEmailThatIsRegisteredInPostMark> <-- "From"-Email Address that you verified w/ PostMark
	4. run `npm start`. This runs the app server (Express). 
2. In terminal 2, run: `npm run dev`. This runs the development server(webpack-dev-server).
3. Open browser and go to: `localhost:8080`

```
export JWT_SECRET=somesecret
export POSTMARK_API_TOKEN=bla-bla-bla-9619-a6d1185548cd
export FROM_EMAIL=yourcompanyemail@company.com
export NODE_ENV=development
```


####Note: If you open `localhost:3000` in browser, you'll see a "stale" production app, so while in development, **always go to `localhost:8080`**

####Production
In production, we need to compile the **latest** client js and place it to `public` folder. This allows the main app server(Express) to also show the final app.

1. Generate latest React app: `npm run build`.
2. In terminal 1, run `npm start`. It will be running both the server and the client.
3. Open browser and go to : `localhost:3000`.



#Cloning Locally And Pushing To Heroku
- TODO

###Making changes to your app and pushing it to Heroku
