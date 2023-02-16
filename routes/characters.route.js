const router = require("express").Router();
const Character = require("../models/Character.model");
/**
 * !All the routes here are prefixed with /api/characters
 */

/**
 * ? This route should respond with all the characters
 */
router.get("/", async (req, res, next) => {
  /**Your code goes here */
  try {
    const allCharacters = await Character.find();
    res.status(200).json(allCharacters);
  } catch (error) {
    next(error);
  }
});

/**
 * ? This route should create one character and respond with
 * ? the created character
 * ? It receives an object as a parameter, with the following format:
 * `{ name: string, occupation: string, cartoon: boolean, weapon: string }`
 * ? It returns the created character if there are no errors
 * ? It returns the wrong fields if there is some error
 * ? It returns JSON
 */
router.post("/", async (req, res, next) => {
  /**Your code goes here */
  try {
    const {name, occupation, cartoon, weapon} = req.body;
    if (!name || !occupation || !cartoon || !weapon) {
      return res.status(400).json({errorMessage: "Wrong fields"})
    }
    const createOneCharacter = await Character.create({name, occupation, cartoon, weapon});
    res.status(201).json(createOneCharacter);
  } catch (error) {
    next(error);
  }
});

/**
 * ? This route should respond with one character
 * ? It receives the character ID as a parameter (route).
 * ? It returns the character with the indicated `id`
 * ? It returns JSON
 */
router.get("/:id", async (req, res, next) => {
  /**Your code goes here */
  try {
    const oneCharacter = await Character.findById(req.params.id);
    res.json(oneCharacter);
  } catch (error) {
    next(error);
  }
});

/**
 * ? This route should update a character and respond with
 * ? the updated character
 * ? It receives the character `id` as a parameter (route)
 * ? It receives an object as a parameter, with the following format:
 * ? `{ name: string, occupation: string, cartoon: boolean, weapon: string }`
 * ? All the fields are optional
 * ? It returns the updated character if there are no errors
 * ? It returns "Character not found" if there is no character with the indicated `id`
 * ? It returns JSON / text
 */
router.patch("/:id", async (req, res, next) => {
  /**Your code goes here */
  try {
	const characterToUpdate = {... req.body}
	const updatedCharacter = await Character.findByIdAndUpdate(req.params.id, characterToUpdate)
	
	res.json(updatedCharacter)
	} catch (error) {
	  next(error)
	}
});
	
/**
 * ? Should delete a character and respond with a success or
 * ? error message
 * ? It receives the character `id` as a parameter (route)
 * ? It returns "Character has been successfully deleted" if there are no errors
 * ? It returns "Character not found" if there is no character with the indicated id
 * ? It returns text
 */
router.delete("/:id", (req, res, next) => {
  /**Your code goes here */

});

module.exports = router;
