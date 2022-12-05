
There are 7 tasks (160 points) and a bonus exercise (10 points):

- [Task 1: Warm up (25 points)](#task-1-warm-up-total-30-points)
- [Task 2:  API Documentation (20 points)](#task-2-api-documentation-total-20-points)
- [Task 3: works-on-my-machine syndrome (35 points)](#task-3-works-on-my-machine-syndrome-total-30-points)
- [Task 4: Explain basic code snippets (20 points)](#task-4-explain-basic-code-snippets-total-20-points)
- [Task 5: JWT (20 points)](#task-5-jwt-total-20-points)
- [Task 6: Optimize code (20 points)](#task-6-optimize-code-total-20-points)
- [Task 7: Mongoose (20 points)](#task-7-mongoose-total-20-points)
- [Bonus:  Deployment (10 points)](#bonus-deployment-total-10-points)

## Task 1: Warm up (total: 25 points)

Follow this [guideline](https://www.freecodecamp.org/news/build-a-restful-api-using-node-express-and-mongodb/) to build a RESTful API Using Node, Express and Mongoose.

> Please:
- Use your own database
DONE
- Test the end points using the REST extension. You can use the starter file in `/actions/part-1.rest`
  - Note that the article uses **Postman**, instead of the vscode extension 

I connected database ang got till the end of tasks, but I failed to get back the ID after trying to submit name and age. Tried with VScode and postman, both failed for some reason.

## Task 2:  API Documentation (total: 20 points)

- Step 0 
 Rename `dotenv` to `.env`

 DONE

- Step 1 **(2 points)**:

Inside the `/src/part-2/server` folder run the following commands:

```bash
cd ./part-2/server
npm install
npm start
```
DONE

- Step 2 **(3 points)**: Test the different endpoints using the vs code REST extension. 
  - You can use the starter file in `/actions/part-2.rest`
  - Remember to update the value of `@token`

DONE

- Step 3 **(15 points)**

API documentation is a technical manual about the services offered by an API and how to use its different endpoints, to name a few.

Your task is to document all operations tested in step 2. 

> Please use the following template i.e. Request components, Response components:

**Request components**:
### Signup
- Method: POST

- URL: {{baseurl}}/user/signup

- Headers: 
      Content-Type: application/json; charset=utf-8

- Body: 
{
    "email": "youremailhere",
    "password": "yourpasswordhere"
}


### login
- Method: POST
 URL: {{baseurl}}/user/signup

- Headers: 
      Content-Type: application/json; charset=utf-8
- Body:
{
    "email": "youremailhere",
    "password": "yourpasswordhere"
}

### POST Request
- Method: POST
 URL: {{baseurl}}/workouts/

- Headers: 
      Content-Type: application/json; charset=utf-8
      Authorization: bearer {{token}}
- Body:
{
    "title":"string",
    "reps":number,
    "load":number
}

### DELETE Request
- Method: DELETE
 URL: {{baseurl}}/workouts/"_id"

- Headers: 
      Content-Type: application/json; charset=utf-8
      Authorization: bearer {{token}}
- Body: none



### PUT  Request
- Method: PATCH
- URL: {{baseurl}}/workouts/"_id"
- Headers: 
      Content-Type: application/json; charset=utf-8
      Authorization: bearer {{token}}
- Body:
{
    "reps":number,
    "load":number
}

### GET  Request for all
- Method: GET
- URL: {{baseurl}}/workouts
- Headers: 
      Content-Type: application/json; charset=utf-8
      Authorization: bearer {{token}}
- Body: none

### GET  Request for one entry
- Method: GET
- URL: {{baseurl}}/workouts/"_id"
- Headers: 
      Content-Type: application/json; charset=utf-8
      Authorization: bearer {{token}}
- Body: none



**Response components**:

- Status code: 200 OK
- Headers:
    - Content-Type: application/json
- Body: information about all the workouts


- Status code: 400 Bad Request
- Headers:
    - Content-Type: application/json
- Body: "error": "No such workout"


- Status code: 404 Not Found
- Headers:
    - Content-Type: application/json
- Body: 
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>Error</title>
</head>
<body>
<pre>Cannot GET /api/workoutsss/15</pre>
</body>
</html>


- Status code: 401 Unauthorized
- Headers:
    - Content-Type: application/json
- Body: "error": "Authorization token required"


```json
[
{
    "_id": "638c7c6871ca4260fa9f492b",
    "title": "Workout ..",
    "reps": 40,
    "load": 10,
    "user_id": "638c7c3e71ca4260fa9f4925",
    "createdAt": "2022-12-04T10:54:32.103Z",
    "updatedAt": "2022-12-04T10:54:32.103Z",
    "__v": 0
  },
  {
    
  }
]

HTTP/1.1 404 Not Found
X-Powered-By: Express
Access-Control-Allow-Origin: *
Content-Security-Policy: default-src 'none'
X-Content-Type-Options: nosniff
Content-Type: text/html; charset=utf-8
Content-Length: 156
Date: Mon, 05 Dec 2022 13:49:37 GMT
Connection: close

<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>Error</title>
</head>
<body>
<pre>Cannot GET /api/workoutsss/15</pre>
</body>
</html>     


```

## Task 3: works-on-my-machine syndrome (total: 35 points)

1. **(10 points)**

- Explain the [works-on-my-machine](#links) phenomenon.
The works-on-my-machine problem is one of the leading causes of developer stress and lost time. The main cause of the works-on-my-machine problem is differences in configuration across development, test, and production environments.

- Is there a way to identify and fix the problem?
Avoid configuration differences and automate testing. It's better to use new enviroment for all projects and update frequently to avoid collition and do fixes while remembering what has been written.

2. **(10 points)**

- State the hard [skills](#links) essential for Full-Stack developers.

GitHub Experience,Web Architecture,Design Skills,Databases,Back-End Languages,JavaScript,HTML/CSS.


- State the soft skills essential for Full-Stack developers.
Communication Skills,Problem-Solving Skills,Creativity,Time Management,Attention to Detail,

- How can someone improves her/his skills?

Devote plenty of time to coding,Communicate with your team,Stay on-trend,Know your weaknesses,Teach others

3. **(15 points)**

- Clone the following [repo](https://github.com/kentcdodds/testing-workshop)
- According to the author: "After you've made sure to have the correct things (and versions) installed, you should be able to just run a few commands to get set up:"

```shell
git clone https://github.com/kentcdodds/testing-workshop.git
cd testing-workshop
npm run setup --silent
```

- Run: `npm run dev`

- If you get any errors, please read through them and see if you can find out what the problem is. You may also want to look at [Troubleshooting](https://github.com/kentcdodds/testing-workshop#troubleshooting).

- Report whether you managed to get the app running or not.

I got it cloned but server and client both are faulty and the troubleshooter was not helpful.




## Task 4: Explain basic code snippets (total: 20 points)

 > Refer to the code in `/src/part-2/server`

1. (4 points)

In `index.js`, explain the following snippet:

```js
app.use(express.json())
app.use(cors())
app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})
```

2. (4 points)

In `models/userModel.js`, explain the following snippet:

```js
userSchema.statics.login = async function(email, password) {

  const user = await this.findOne({ email })
  const match = await bcrypt.compare(password, user.password)
  if (!match) {
    throw Error('Incorrect password')
  }

  return user
}
```

3. (4 points)

In `middleware/requireAuth.js`, explain the following snippet:

```js
  try {
    const { _id } = jwt.verify(token, process.env.SECRET)
    req.user = await User.findOne({ _id }).select('_id')
    next()

  } catch (error) {
    console.log(error)
    res.status(401).json({error: 'Request is not authorized'})
  }
```

4. (4 points)

In `controllers/workoutController.js`, explain the following snippet:

```js
const deleteWorkout = async (req, res) => {
  const { id } = req.params
  const workout = await Workout.findOneAndDelete({_id: id})

  if (!workout) {
    return res.status(400).json({error: 'No such workout'})
  }
  res.status(200).json(workout)
}
```
5. (4 points)

In `routes/workouts.js`, explain the following snippet:

```js
router.use(requireAuth)
router.get('/', getWorkouts)
router.get('/:id', getWorkout)
router.post('/', createWorkout)
router.delete('/:id', deleteWorkout)
router.patch('/:id', updateWorkout)
```

## Task 5: JWT (total: 20 points) 

When you use JWTs in your user authorization flow, it is best practice to use
Node packages to generate your secret token and take care of encoding and
decoding, and hashing and verification for you.

> Begin by running `npm install` in `/src/part-5`.

#### Generate a Secret Token with `crypto`

The first thing you will need when implementing JWTs is to generate a strong
secret, or private token. It is important that this secret token is not easily guessable by a human or a computer running an algorithm trying to uncover secrets by brute force.

Use the `crypto` cryptographic library to generate a random secret by executing the following command in your **node** terminal:

```shell
require('crypto').randomBytes(64).toString('hex')

# Example output: "dc1783e61ab05a9fa1b64d892f4b8edab51c159c7091d57feb955ad5ae8ce9191dbe3a50f95086a018654e6f3c7dbffd6215d656d63a2da811843fc746a664b2"
```

Store this token in your __.env__ file with your environment variables. Make
sure this file is added to your __.gitignore__ file, and never pushed to a
public repository.

```bash
SECRET_KEY=dc1783e61ab05a9fa1b64d892f4b8edab51c159c7091d57feb955ad5ae8ce9191dbe3a50f95086a018654e6f3c7dbffd6215d656d63a2da811843fc746a664b2
```

#### Use `jsonwebtoken` to Manage JWTs

The [`jsonwebtoken`] package helps you to manage JWTs by allowing you to easily sign, decode, and verify JWTs.

First, install the package via the terminal:

```shell
npm install jsonwebtoken
```

And import the package into your file:

```javascript
const jwt = require('jsonwebtoken');
```

Next, use the notes below as well as the [`jsonwebtoken`] documentation to
sign, decode, and verify JWTs in your application.

1. Sign (create) a JWT

Use the `sign()` function to create a JWT with a required payload and the secret you generated using `crypto`. This method can take an optional `options` argument, which is an object with additional properties and values to define the JWT. The header will be defined by default, but can also be customized by defining the `header` property in the `options` object.

```javascript
const jwt = require('jsonwebtoken');
const token = jwt.sign(payload, secret, options);
```

For example, if you wanted to create a token for Johnny's invite for the party, your implementation might look like this:

```javascript
const jwt = require('jsonwebtoken');

const token = jwt.sign( 
    { email: "johnny@gmail.com" }, // payload object
    process.env.SECRET_KEY,        // secret token from .env file
    { expiresIn: '1h' }            // options (example: Token expires in 1 hour)
);
```
Check out the `jsonwebtoken` documentation to learn more about how you can
customize your token using the `options` object.

2. Decode a JWT Payload

To decode a token, use the `decode()` function. This will decode the payload of the JWT and return it.

Continuing the example from above, with `token` representing the signed
(created) JWT:

```javascript
const jwt = require('jsonwebtoken');

const payload = jwt.decode(token); 
// returns the decoded payload: {"email":"johnny@gmail.com"}
```

3. Verify a JWT

Finally, the `jsonwebtoken` package will allow you to verify that the payload
information has not been tampered with during transmission by verifying the
signature. Verification involves decrypting the signature, and checking to make sure that the secret is correct. If the secret is valid, the payload will be decoded and returned. If the secret is not valid, an error will be thrown.

To verify the signature, use the `verify()` function with two arguments. The
token is the JWT itself, and the secret is the secret key stored in the __.env__ file.

Continuing the example from above, with `token` representing the signed JWT:

```javascript
const jwt = require('jsonwebtoken');

const payload = jwt.verify(token, secret);
// if the secret is verified, the payload is decoded and returned
// if the secret is not valid, a JsonWebTokenError is thrown
// if the token is expired, a TokenExpiredError is thrown
```

When using the JWT for user authorization, you will need to determine how you
will handle successful and unsuccessful verification.

> Wrapping Up

Remember these best practices for working with JWTs in NodeJS:

* Use the `crypto` module to generate a secret token for your JWTs, and store it 
securely in your __.env__ file
* Use the `jsonwebtoken` package to manage signing and verifying JWTs in your
application
  * Use `jwt.encode()` for encoding
  * Use `jwt.verify()` for decoding because it will detect errors
    * If the secret doesn't match (meaning the JWT has been tampered with)
    * If the JWT has expired (meaning it should no longer be used)

When transmitting information with a JWT, always remember that the signature is the only section that is hashed. The payload is only encoded, and can easily be decoded by anyone if they have access to it. For that reason, sensitive information should never be transmitted in a JWT.


## Task 6: Optimize code (total: 20 points)

- Modify the file `part-6/config.js` so that it can be used in `/src/part-2/server`.
- Modify the file `part-6/seeder.js` so that you can populate the database used in `/src/part-2/server`. 
- Add some data to `data/workouts` and `data/users`


## Task 7: Mongoose (total: 20 points)

> The source code of the net ninja course might be helpful for this task!

Inside the `/src/part-7` folder run the following command:

```shell
npm install
```

### Step 1 - Recipe Schema

Create a `Recipe` model inside of the file `/src/part-7/models/Recipe.model.js`. The schema should have the following fields:

- **title** - Type `String`. It should be required and unique.
- **level** - Type `String`. Can be one of the following values: _Easy Peasy_ - _Amateur Chef_ - _UltraPro Chef_ (remember the `enum` validator :wink:).
- **ingredients** - Type `Array` of `String`s (represented as `[ String ]`).
- **cuisine** - Type `String`. Should be required.
- **dishType** - Type `String`. Possible values: _breakfast_, _main_course_, _soup_, _snack_, _drink_, _dessert_ or _other_.
- **image** - Type `String`. Default value: _"https://images.media-allrecipes.com/images/75131.jpg"_.
- **duration** - Type `Number`. The minimum value should be 0.
- **creator** - Type `String`.
- **created** - Type `Date`. By default, today.

### Step 2 - Create a recipe

In the `index.js`, we first connect to the database using `mongoose.connect()` and following the connection we call the method `Recipe.deleteMany()` to remove any existing documents from the recipes collection:

```js
// ...

mongoose
  .connect(MONGODB_URI)
  .then(x => {
    console.log(`Connected to the database: "${x.connection.name}"`);
    // Before adding any recipes to the database, let's remove all existing ones
    return Recipe.deleteMany();
  })
// ...
```

Then, you should add a new recipe document to the database by calling the [`Model.create`](https://mongoosejs.com/docs/api.html#model_Model.create) method and passing it the recipe details as an object. After inserting the recipe, you should `console.log` the `title` of the recipe.


**To run your code, remember you should use:**

```shell
node index.js
```

### Step 3 - Insert multiple recipes

We are importing an array of recipes from the `data.json` file. Using the [`Model.insertMany`](https://mongoosejs.com/docs/api.html#model_Model.insertMany) method, you should add the entire array to the database. After inserting the documents, print the title of each recipe to the console.

Tip: Follow the same tip as in the previous step.

### Step 4 - Update recipe

Now you should have six different recipes in the database, but there was a mistake in one of them. The **Rigatoni alla Genovese** does not take that long. You should update the `duration` field and set it to **100**. You might want to use the [`Model.findOneAndUpdate`](https://mongoosejs.com/docs/api.html#model_Model.findOneAndUpdate) method. After updating it, print a success message!

### Step 5 - Remove a recipe

Oh oh! The `Carrot Cake` is no longer available, so we need to remove it from the database. Using the [`Model.deleteOne`](https://mongoosejs.com/docs/api.html#model_Model.deleteOne) method, remove that recipe from the database and display a success message after doing it!

### Step 6 - Close the Database

As the last step, you need to close the database. Otherwise, the connection will stay open until the Node.js process dies. Pay attention to the asynchronicity of the operation. You should only close the connection after everything is done! 

## Bonus:  Deployment (total: 10 points)

- Deploy the backend in `/src/bonus` folder e.g Render (5 points)
- Deploy the frontend in `/src/bonus` folder e.g GitHub pages or Render (5 points)

> You can test the backend using `/actions/part-bonus.rest`


## Links
- [works-on-my-machine1](https://dzone.com/articles/works-on-my-machine)
- [works-on-my-machine2](https://www.pythonforengineers.com/stop-the-works-on-my-machine-syndrome/)
- [works-on-my-machine3](https://builtin.com/software-engineering-perspectives/it-works-on-my-machine-bug)
- [skills](https://www.thinkful.com/blog/full-stack-developer-skills/)
- [jwt1](https://github.com/appacademy/practice-for-week-12-jwt-exploration-short-practice)
- [jwt2](https://www.npmjs.com/package/jsonwebtoken)
- [mongoose](https://github.com/ironhack-labs/lab-mongoose-recipes)
