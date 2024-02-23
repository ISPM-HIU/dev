import express from "express"
import { isValid } from "../../midlleware/middleware"
import controller from "../controllers/fako"

const router = express.Router()

router.get("/", controller.getAll)
router.get("/:id", controller.getOne)
router.post("/", controller.create)
router.put("/", controller.update)

export default router