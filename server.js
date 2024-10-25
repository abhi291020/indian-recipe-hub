const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
const multer = require('multer');
const path = require('path');
const app = express();

// Body Parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Set static folder for images
app.use('/uploads', express.static('uploads'));

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/recipeHubDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

// Multer setup for file uploads
const storage = multer.diskStorage({
    destination: './uploads/',
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ storage: storage });

// User Schema
const UserSchema = new mongoose.Schema({
    username: String,
    password: String
});

// Recipe Schema
const RecipeSchema = new mongoose.Schema({
    title: String,
    image: String,
    instructions: String
});

const User = mongoose.model('User', UserSchema);
const Recipe = mongoose.model('Recipe', RecipeSchema);

// Register user
app.post('/api/signup', (req, res) => {
    const { username, password } = req.body;
    User.findOne({ username }, (err, user) => {
        if (user) {
            return res.json({ message: 'User already exists' });
        }
        const newUser = new User({
            username,
            password: bcrypt.hashSync(password, 10),
        });
        newUser.save()
            .then(() => res.json({ message: 'User registered successfully' }))
            .catch(err => res.status(400).json({ error: err.message }));
    });
});

// Login user
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    User.findOne({ username }, (err, user) => {
        if (!user) {
            return res.json({ message: 'Incorrect username or password' });
        }
        if (!bcrypt.compareSync(password, user.password)) {
            return res.json({ message: 'Incorrect username or password' });
        }
        res.json({ message: 'Login successful' });
    });
});

// Add a new recipe
app.post('/api/recipes', upload.single('recipeImage'), (req, res) => {
    const newRecipe = new Recipe({
        title: req.body.recipeTitle,
        image: `/uploads/${req.file.filename}`,
        instructions: req.body.recipeInstructions,
    });

    newRecipe.save()
        .then(() => res.json({ message: 'Recipe added successfully' }))
        .catch(err => res.status(400).json({ error: err.message }));
});

// Get all recipes
app.get('/api/recipes', (req, res) => {
    Recipe.find()
        .then(recipes => res.json(recipes))
        .catch(err => res.status(400).json({ error: err.message }));
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
