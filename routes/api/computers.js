// routes/api/computers.js

const express = require('express');
const router = express.Router();

// Load Book model
const Computer = require('../../models/Computer');

// @route GET api/computers/test
// @description tests computers route
// @access Public
router.get('/test', (req, res) => res.send('computer route testing!'));

// @route GET api/computers
// @description Get all computers
// @access Public
router.get('/', (req, res) => {
  Computer.find()
    .then(computers => res.json(computers))
    .catch(err => res.status(404).json({ nocomputerfound: 'No computer has been found' }));
});

// @route GET api/computers/:id
// @description Get single computer by id
// @access Public
router.get('/:id', (req,res2) => {
  Computer.findById(req.params.id)
    .then(computer => res2.json(computer))
    .catch(err => res2.status(404).json({ nocomputerfound: 'No computer has been found' }) )
});

// @route GET api/computer
// @description add/save computers
// @access Public
router.post('/',(req,res) => {
  Computer.create(req.body)
    .then( computer => res.json({msg: 'computer added successfully'}))
    .catch(err => res.status(400).json({ error: 'Unable to add this computer'}))
});

// @route GET api/computers/:id
// @description Update computers
// @access Public
router.put('/:id', (req, res) => {
  Computer.findByIdAndUpdate(req.params.id, req.body)
    .then(computer => res.json({ msg: 'Updated successfully' }))
    .catch(err => res.status(400).json({ error: 'Unable to update the Database' })
    );
});

// @route GET api/computers/:id
// @description Delete computer by id
// @access Public
router.delete('/:id', (req, res) => {
  Computer.findByIdAndRemove(req.params.id, req.body)
    .then(book => res.json({ mgs: 'Computer entry deleted successfully' }))
    .catch(err => res.status(404).json({ error: 'No such a computer' }));
});

module.exports = router;
