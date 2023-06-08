const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  try{
    Tag.findAll({
      // be sure to include its associated Product data
      include: {
        model: Product,
        attributes: ["id", "product_name", "price", "stock", "category_id"]
      }
    }).then(dbTagData => res.json(dbTagData))
  } 
  catch (err)  {
      console.log(err);
      res.status(500).json(err);
    }
});

router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  try{
    Tag.findOne({
      where: {
        id: req.params.id,
      },
      // be sure to include its associated Product data
      include: {
        model: Product,
        attributes: ["id", "product_name", "price", "stock", "category_id"]
      }
    }).then(dbTagData => {
      if(!dbTagData) {
        res.status(404).json({message: "The tag you are trying to find does not exists!"});
        return;
      }
      res.json(dbTagData);
    })
  } 
  catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  // create a new tag
  try{
    Tag.create({
      tag_name: req.body.tag_name,
    }).then(dbTagData => res.json(dbTagData))
  }
  catch (err) {
      console.log(err);
      res.status(500).json(err);
  }
});

router.put('/:id', async (req, res) => {
  // update a tag's name by its `id` value
  try{
    Tag.update(
      {
        tag_name: req.body.tag_name,
      },
      {
        where: {
          id: req.params.id
        }
      }
    ).then(dbTagData => {
      if(!dbTagData) {
        res.status(404).json({message: "The tag you are trying to update does not exists!"});
        return;
      }
      res.json(dbTagData);
    })
  }
  catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  // delete on tag by its `id` value
  try{
    Tag.destroy({
      where: {
        id: req.params.id
      }
    }).then(dbTagData => {
      if(!dbTagData) {
        res.status(404).json({message: "The tag you are trying to delete does not exists!"});
        return;
      }
      res.json(dbTagData);
    })
  }
  catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
