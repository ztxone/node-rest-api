import express from "express"
const router =  express.Router()

router.get('/', (req, res) => {
  res.render('index', { title: "Demo Backend"})
})

export default router