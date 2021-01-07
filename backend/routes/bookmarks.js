const router = require('express').Router();
let Bookmark = require('../models/bookmark.model');

router.route('/').get((req, res) => {
  Bookmark.find()
    .then(bookmarks => res.json(bookmarks))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const title = req.body.title;
  const url = req.body.url;
  const tag = req.body.tag;
  const date = Date.parse(req.body.date);

  const newBookmark = new Bookmark({
    title,
    url,
    tag,
    date
  });

  newBookmark.save()
  .then(() => res.json('Bookmark added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

/* router.route('/:id').get((req, res) => {
  Bookmark.findById(req.params.id)
    .then(bookmark => res.json(bookmark))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Bookmark.findByIdAndDelete(req.params.id)
    .then(() => res.json('Exercise deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  Bookmark.findByIdAndUpdate(req.params.id)
    .then(bookmark => {
      bookmark.title = req.body.title; 
      bookmark.url = req.body.url; 
      bookmark.tag = req.body.tag; 
      bookmark.date = Date(req.body.date); 

      bookmark.save()
            .then(() => res.json('Exercise updated.'))
            .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
}); */

module.exports = router;