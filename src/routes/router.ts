import { Router } from "express";
import { getHomepage } from "../controllers/homepage.js";
const router = Router();

router.get('/', getHomepage)
router.get('/status', getHomepage)



export default router;