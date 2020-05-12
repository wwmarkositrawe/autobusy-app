const express = require('express');
const router = express.Router()
router.post('/track-data', (req, res) => {
    console.log('Stored data!', req.body.data)
    res.status(200).json({message: "success"});
});

const app = express()
router.use((req, res, next) => {
  Object.setPrototypeOf(req, app.request)
  Object.setPrototypeOf(res, app.response)
  req.res = res
  res.req = req
  next()
})

module.exports = {
    path: '/api',
    handler: router
}