import express from 'express';

const router = express.Router();

router.get('/', (req, res, next) => {
  res.render('../components/pages/TopPage');
});

router.get('/about', (req, res, next) => {
  res.render('../components/pages/About');
});

router.get('/Link', (req, res, next) => {
  res.render('../components/pages/Link');
});

module.exports = router;
