const { Router } = require("express");
const getInfos = require("../constroller/constroller");

const router = Router()
router.get("/",getInfos)
module.exports = router