const express = require('express');
const mongoose = require('mongoose');
const Recipe = require('./models/recipeModel');

const path = require('path');
const bcrypt = require('bcrypt');
const collection = require('./models/userModels');

const app = express();
const Joi = require('joi');
app.use(express.json());
app.use(express.urlencoded({extended: false}));


//Register User
app.post('/user/signup', async(req, res) => {
        const data = {
            email: req.body.email,
            password: req.body.password
        }    
        
        const existingUser = await collection.findOne({email: data.email})
        if(existingUser) {
            res.status(404).json('Email already exist, choose another one.');
        } else {
            const hash = 10;
            const hashedPassword = await bcrypt.hash(data.password, hash)

            data.password = hashedPassword;

            await collection.insertMany(data);
            res.status(200).json(data);
        }
});

//Login User
app.get('/user/login', async(req, res) => {
    try {
        const check = await collection.findOne({email: req.body.email});
        if(!check){
            res.status(400).json('No user found');
        }

        const isPasswordMatch = await bcrypt.compare(req.body.password, check.password);
        if(isPasswordMatch){
            const data = check.email; // Only include the email string
            return res.status(200).json(`Sucessfully logged in: ${data}`);
        } else {
            res.status(400).json('Password does not match.');
        }
    } catch (error) {
        
    }
})


//POST Recipe
app.post('/recipe/add', async(req, res) => {
    try {
        const existingRecipe = await Recipe.findOne({ name: req.body.name });
        if (existingRecipe) {
            // If a recipe with the same name already exists, throw an error
            return res.status(400).json('Recipe name already exists');
        }

        const recipe = await Recipe.create(req.body)
        res.status(200).json(recipe);
    } catch (error) {
        res.status(500).json({"message": 'An error occured'});
    }
});

//GET Recipe
app.get('/recipe', async(req, res) => {
    try {
        const recipes = await Recipe.find({});
        res.status(200).json(recipes);
    } catch (error) {
        res.status(500).json({"message": 'Recipe not found'});
    }
});

//GET Recipe by ID
app.get('/recipe/:id', async(req, res) => {
    try {
        const { id } = (req.params);
        const recipe = await Recipe.findById(id);
        res.status(200).json(recipe);
    } catch (error) {
        res.status(500).json({"message": 'Recipe not found'});
    }
});

//GET Recipe by Tags
app.get('/recipe/tag/:tag', async(req, res) => {

    const tag = req.params.tag.replace(/\s/g, "");
    const regex = new RegExp("^" + tag.split("").join("\\s*") + "$", "i");
    const recipes = await Recipe.find({ tag: { $regex: regex } });

    if (recipes.length === 0) {
        res.status(404).json('No recipe found in the provided tag')
    } else {
        res.json(recipes);
    }
});

//GET Recipe by name
app.get('/recipe/name/:name', async(req, res) => {

    try {
        const name = req.params.name.trim().replace(/\s/g, "").toLowerCase();
        const regex = new RegExp("^" + name.split("").join("\\s*") + "$", "i");
        const recipe = await Recipe.findOne({ name: { $regex: regex } });
        if (recipe == null) {
          return res
            .status(404)
            .json({ message: `Cannot find recipe for ${name}` });
        }
        res.json(recipe);
      } catch (error) {
        res.status(500);
        throw new Error(error.message);
      }
      
});

//PUT or Update Recipe
app.put('/recipe/update/:id', async(req, res) => {
    try {
        const { id } = req.params;
        const recipe = await Recipe.findByIdAndUpdate(id, req.body);
        if (!recipe) {
            return res.status(404).send({ message: `Cannot update Recipe with the given ID ${id}` });
        }
        const updatedRecipe = await Recipe.findById(id);
        res.status(200).json(updatedRecipe);
    } catch (error) {
        res.status(500).json({"message": 'an error occured'});
    }
});


//DELETE Recipe
app.delete('/recipe/delete/:id', async(req, res) => {
    try {
        const { id } = req.params;
        const recipe = await Recipe.findByIdAndDelete(id);
        if (!recipe) {
            return res.status(404).send({ message: `Cannot update Recipe with the given ID ${id}` });
        }

        const deleteRecipe = recipe.name;
        res.status(200).json(`The recipe "${deleteRecipe}" has been deleted`);

    } catch (error) {
        res.status(500).json("Server Error");
    }
});


mongoose.connect('mongodb+srv://admin:12345@api-sharing.wwdxcbn.mongodb.net/api-sharing?retryWrites=true&w=majority')
.then(() => {
    const port = process.env.port || 3000;
    app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}...`);
    });

}).catch(() => {
    console.log(error);
});
