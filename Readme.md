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

## 2. Which Packages I Used
- `express`: Web framework for Node.js.
- `mongoose`: ODM (Object Data Modeling) library for MongoDB and Node.js.
- `dotenv`: Module to load environment variables from a `.env` file.
## 3. How to Run the Project
1. Clone the repository.
2. Navigate to the project directory.
3. Install the dependencies using `npm install`.
4. Create a `.env` file in the root directory and add the following environment variables:
```
PORT=8000
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.pdzfsbd.mongodb.net
```