const express = require('express');
const cors = require('cors');
const DashboardData = require('./modal/dashboard');
const connectDB = require('./config/db');

connectDB();
//  ok
const app = express();
app.use(cors());

app.get('/', async (req, res) => {
	try {
		const data = await DashboardData.find();
		res.json(data);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
});

app.listen(3000, () => console.log('Server running on port 3000'));
