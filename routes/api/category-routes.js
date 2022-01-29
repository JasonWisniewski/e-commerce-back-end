const router = require("express").Router();
const { RENDER } = require("ci-info");
const { userInfo } = require("os");
const { Category, Product } = require("../../models");

// The `/api/categories` endpoint

router.get("/", (req, res) => {
  Category.findAll({
    include:
      {
        model: Product
      }
  })
    .then((dbApiData) => res.json(dbApiData))
    .catch((err) => {
      console.log(err);
      // if we
      res.status(500).json(err);
    });
  // be sure to include its associated Products
});

router.get("/:id", (req, res) => {
  // find one category by its `id` value
  Category.findOne({
    where: {
      id: req.params.id,
    },
    include: {
      model: Product,
    },
  })
    .then((dbIdData) => res.json(dbIdData))
    .catch((err) => {
      console.log(err);
      // if we
      res.status(500).json(err);
    });
  // be sure to include its associated Products
});

router.post("/", (req, res) => {
  Category.create({
    category_name: req.body.category_name
  })
  .then((dbNewCat) => res.json(dbNewCat))
    .catch((err) => {
      console.log(err);
      // if we
      res.status(500).json(err);
    });
  // create a new category
});

router.put("/:id", (req, res) => {
  Category.update(req.body.category_name, {
    where: {
      id: req.params.id
    }
  }).then((dbUpdateCat) => res.json(dbUpdateCat))
  .catch((err) => {
    console.log(err);
    // if we
    res.status(500).json(err);
  });
  // update a category by its `id` value
});

router.delete("/:id", (req, res) => {
  Category.destroy({
    where: {
      id: req.params.id
    }
  })
  .then(dbCatData => {
    if (!dbCatData) {
      res.status(404).json({ message: 'No category found with this id' });
      return;
    }
    res.json(dbCatData);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
  // delete a category by its `id` value
});

module.exports = router;
