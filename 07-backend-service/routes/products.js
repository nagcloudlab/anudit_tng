var express = require('express');
var router = express.Router();

const products = [
  {
    id: 1,
    name: "laptop",
    price: 10000.00,
    description: "good laptop",
    image: "images/Laptop.png",
    reviews: [
      { stars: 5, author: 'user-1', body: 'sample review-1' },
      { stars: 3, author: 'user-2', body: 'sample review-2' }
    ]
  },
  {
    id: 2,
    name: "mobile",
    price: 10000.00,
    description: "good mobile",
    image: "images/Mobile.png",
    reviews: [
      { stars: 5, author: 'user-1', body: 'sample review-1' },
      { stars: 3, author: 'user-2', body: 'sample review-2' },
      { stars: 5, author: 'user-1', body: 'sample review-11' },
      { stars: 3, author: 'user-2', body: 'sample review-22' }
    ]
  }]

router.get('/', function (req, res, next) {
  res.json(products);
});
router.post('/:id/reviews', function (req, res, next) {
  const id = req.params.id;
  const review = req.body;
  const product = products.find(p => p.id == id);
  product.reviews.unshift(review);
  res.json(review);
})

module.exports = router;
