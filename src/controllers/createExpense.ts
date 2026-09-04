import { type RequestHandler } from "express";

export const addExpensePage:RequestHandler = async(req, res) => {
    console.log('Add Expense page hit!!')

    res.json({message: "Add expense page. backendside meessage."})
}
export const createExpense:RequestHandler = async(req, res) => {

}