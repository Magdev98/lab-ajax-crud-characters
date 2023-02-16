const router = require('express').Router()
const Character = require('../models/Character.model')
/**
 * !All the routes here are prefixed with /api/characters
 */

/**
 * ? This route should respond with all the characters
 */
router.get('/', async (req, res, next) => {
	/**Your code goes here */
		try {
		  const allCharacters = await Character.find()
		  res.status(200).json(allCharacters)
		} catch (error) {
		  next(error)
		}
	  })

/**
 * ? This route should create one character and respond with
 * ? the created character
 */
router.post('/', (req, res, next) => {
	/**Your code goes here */
})

/**
 * ? This route should respond with one character
 */
router.get('/:id', (req, res, next) => {
	/**Your code goes here */
})

/**
 * ? This route should update a character and respond with
 * ? the updated character
 */
router.patch('/:id', (req, res, next) => {
	/**Your code goes here */
})

/**
 * ? Should delete a character and respond with a success or
 * ? error message
 */
router.delete('/:id', (req, res, next) => {
	/**Your code goes here */
})

module.exports = router
