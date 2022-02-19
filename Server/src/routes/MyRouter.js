const router = require('express').Router();
const apiRoutes = require('./index');

router.use('/api', apiRoutes);

router.get("/prueba", function (req, res) {
    res.json({
      "hola": "Anda",
      "token":process.env.ACCESS_TOKEN
  })
  });

router.use((_req, res) => {
  res.send("<h1>Wrong Route!</h1>")
});

module.exports = router;