import express from 'express';
import router from './routes/router.js';
const app = express();
const PORT = 8000;


app.use('/api', router);





app.listen(PORT, () => {
    console.log(`Server running on http://localhost:8000/api`)
})







