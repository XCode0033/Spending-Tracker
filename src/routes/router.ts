import { Router } from "express";
import { getHomepage } from "../controllers/homepage.js";
import { addExpensePage } from "../controllers/createExpense.js";
const router = Router();

router.get('/', getHomepage)
router.get('/status', getHomepage)
router.get('/add-expense', addExpensePage)


export default router;