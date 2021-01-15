const router = require('express').Router();
let Bookmark = require('../models/bookmark.model');

router.route('/').get(async(req, res) => {
  try{
    await Bookmark.find()
      .then(bookmarks => res.json(bookmarks))
      .catch(err => res.status(400).json('Error: ' + err));
  }catch(err){
    console.log('Error requesting bookmarks' + err);
  }
});

router.route('/add').post(async(req, res) => {
  try{
    const title = req.body.title;
    const url = req.body.url;
    const tag = req.body.tag;

    const newBookmark = new Bookmark({
      title,
      url,
      tag
    });

    await newBookmark.save()
      .then(bookmarks => res.json(bookmarks))
      .catch(err => res.status(400).json('Error: ' + err));
  }catch(err){
    console.log('Error adding bookmark' + err);
  }
});

router.route('/:id').delete(async(req, res) => {
  try{
     await Bookmark.findByIdAndDelete(req.params.id)
      .then(bookmarks => res.json(bookmarks))
      .catch(err => res.status(400).json('Error: ' + err));
  }catch(err){
    console.log('Error deleting bookmark' + err);
  }
});

router.route('/:id').get(async(req, res) => {
  try{
    await Bookmark.findById(req.params.id)
      .then(bookmark => res.json(bookmark))
      .catch(err => res.status(400).json('Error: ' + err));
  }catch(err){
    console.log('Error fetching bookmark' + req.params.id +' '+ err);
  }
});


router.route('/edit/:id').post(async(req, res) => {
  try{
    await Bookmark.findByIdAndUpdate(req.params.id)
      .then(bookmark => {
        bookmark.title = req.body.title; 
        bookmark.url = req.body.url; 
        bookmark.tag = req.body.tag; 
        //bookmark.date = Date(req.body.date); 

        bookmark.save()
          .then(() => res.json('Bookmark updated.'))
          .catch(err => res.status(400).json('Error: ' + err));
      })
      .catch(err => res.status(400).json('Error: ' + err));
    }catch(err){
      console.log('Error updating bookmark' + err);
    }
});

module.exports = router;