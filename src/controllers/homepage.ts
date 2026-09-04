import { type RequestHandler } from "express";
import { query } from "../db.js";

export const getHomepage: RequestHandler = async (req, res) => {
    console.log('Homepage hit!')
    const result = await query(`SELECT * FROM users ORDER BY user_id`)
    
}
