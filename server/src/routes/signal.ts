import express from "express"
import { isValid } from "../../midlleware/middleware"
import controller from "../controllers/signal"

const router = express.Router()

router.get("/", controller.getAll)
router.get("/:id", controller.getOne)
router.post("/", controller.create)

export default router