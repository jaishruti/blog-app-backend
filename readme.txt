npm init -y
npm i express mongooose dotenv nodemon

.env
confif - db.js
models
    User.js
    Blog.js
    Comments.js

/my-express-app
│── /config        → Configuration files (DB setup, environment variables)
│── /controllers   → Handles API logic (business logic)
│── /models        → Mongoose models (database schemas)
│── /routes        → API endpoints (Express routing)
│── /middleware    → Custom middleware (auth, validation, logging)
│── /utils         → Utility functions (helpers, error handling)
│── /public        → Static files (images, CSS, client assets)
│── /views         → Frontend templates (if using a templating engine like EJS/Pug)
│── server.js      → Entry point (initializes Express)
│── package.json   → Dependencies & scripts
│── .env           → Environment variables
│── .gitignore     → Files to ignore in Git