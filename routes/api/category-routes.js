const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  try{
  const category = await Category.findAll({
    attributes: ["id", "category_name"],
    // be sure to include its associated Products
    include: [{
      model: Product, 
      attributes: ["id", "product_name"],
      },
    ],
  });  
    res.json(category);
  } 
  catch (err) {
      console.log(err);
      res.status(500).json(err);
  } 
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  try{
      Category.findOne({
      where: {
        id: req.params.id,
      },
      attributes: ["id", "category_name"],
      // be sure to include its associated Products
      include: [
        {
          model: Product,
          attributes: ["id", "product_name", "price", "stock", "category_id"],
        },
      ],
    }).then((dbCategoryData) => {
      if (!dbCategoryData) {
        res.status(404).json({
          message: "The category you are trying to find does not exists!",
        });
        return;
      }
      res.json(dbCategoryData);
    })
  } 
  catch (err)  {
    console.log(err);
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  // create a new category
  try{
  Category.create({
    category_name: req.body.category_name,
  }).then((dbCategoryData) => res.json(dbCategoryData))
  }
  catch(err)  {
      console.log(err);
      res.status(500).json(err);
  }
});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  try{
    Category.update(
      {
        category_name: req.body.category_name,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    ).then((dbCategoryData) => {
      if(!dbCategoryData) {
        res.status(404).json({message: "The category you are trying to update does not exists!",});
        return;
      }
      res.json(dbCategoryData);
    })
  }
  catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  try{
  Category.destroy({
    where: {
      id: req.params.id,
    },
  }).then((dbCategoryData) => {
    if (!dbCategoryData) {
      res.status(404).json({message: "The category you are trying to delete does not exists!"});
      return;
    }
    res.json(dbCategoryData);
  })
  } 
  catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
