# ProShop eCommerce Platform

Here's is the source code for the [MERN eCommerce](https://metropolia.finna.fi/Record/nelli15.4100000011702223) video course.

![screenshot](./uploads/screenshot.png)

## Usage

### Install Dependencies (frontend & backend)

```
npm install
cd frontend
npm install
```

### Env Variables

Edit the  `.env` file : 

```
MONGO_URI = your mongodb uri
```

### Seed Database

From the **root folder**, you can use the following commands to seed the database with some sample users and products as well as destroy all data

```
# Import data
npm run data:import

# Destroy data
npm run data:destroy
```

```
Sample User Logins

admin@example.com (Admin)
123456

john@example.com (Customer)
123456

jane@example.com (Customer)
123456
```

### Run

```
# Run frontend (:3000) & backend (:5000)
npm run dev

# Run backend only
npm run server
```

### ES Modules in Node

We use ECMAScript Modules in the backend in this project. Be sure to have at least Node v14.6+ or you will need to add the "--experimental-modules" flag.

Also, when importing a file (not a package), be sure to add .js at the end or you will get a "module not found" error

You can also install and setup Babel if you would like


## Features

- Full featured shopping cart
- Product reviews and ratings
- Top products carousel
- Product pagination
- Product search feature
- User profile with orders
- Admin product management
- Admin user management
- Admin Order details page
- Mark orders as delivered option
- Checkout process (shipping, payment method, etc)
- PayPal / credit card integration
- Database seeder (products & users)


## License

MIT License Copyright (c) 2020 Traversy Media