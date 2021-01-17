const router = require('express').Router();
let Tag = require('../models/tag.model');

router.route('/').get((req, res) => {
    Tag.find()
        .then(tags => res.json(tags))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const name = req.body.name;
    const newTags = new Tag({ name });

    newTags.save()
        .then(() => res.json('Tags added.'))
        .catch(err => res.status(400).json('Error:' + err));
});

module.exports = router;