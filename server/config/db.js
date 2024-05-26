const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const connectDB = async () => {
	await mongoose
		.connect(process.env.MONGO_URL, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		})
		.then(() => {
			console.log('Connected to MongoDB');
		})
		.catch((error) => {
			console.error('Error connecting to MongoDB:', error);
		});
};

module.exports = connectDB;
