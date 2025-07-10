# I am following the Chai aur Code Tutorial of Backend Series
<!-- Make stylish note about to create a .env file -->

## 1. What I Learned from First Video
I learned how to set up Backend Project with `Node.js` and `Express` and How to connect to `MongoDB` using `Mongoose` and How to use `dotenv` for environment variables.

## File Structure:
```
public/
src/
    ├── db/
        ├── index.js
    ├── controllers/
    ├── routes/
    ├── models/
    ├── middlewares/
    ├── utils/
    ├── constants.js
    ├── index.js
    ├── app.js
.env
package.json
```

## 2. Which Packages we Used in this Project
- `express`: Web framework for Node.js.
- `mongoose`: ODM (Object Data Modeling) library for MongoDB and Node.js.
- `dotenv`: Module to load environment variables from a `.env` file.
- `nodemon`: Utility that monitors for changes in your source code and automatically restarts the server.
- `prettier`: Code formatter to ensure consistent code style.

After installing these packages we start to setup the Prettier
1. Create a `.prettierrc` file in the root directory of your project.
2. Add the following configuration to the `.prettierrc` file:
```
{
  "semi": true,
  "singleQuote": true,
  "tabWidth": 2,
  "trailingComma": "es5"
}
```
3. Create a `.prettierignore` file in the root directory of your project.
4. Add the following configuration to the `.prettierignore` file:
```
node_modules
dist
.env
```

## After That we Setup Database:
We use two approches to connect to the database:
1. Using `mongoose.connect()` method directly in the `index.js` file.
2. Creating a separate `db/index.js` file to handle the database connection.

The second approach is more modular and maintainable, especially for larger projects.
### While Connecting Database we should to remind the following things:
- Database is at Another Continent. So we should use Asynchronous Connection to prevent blocking and latency issues.
- Use `async/await` for better readability and error handling.
### Example of Database Connection:
```javascript
import mongoose from 'mongoose';
import { DB_NAME } from '../constants.js';

const connectDB = async() => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`)
        console.log(`Database connected successfully: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.error(`Database connection failed: ${error.message}`);
        process.exit(1);
    }
};
export default connectDB;
```

