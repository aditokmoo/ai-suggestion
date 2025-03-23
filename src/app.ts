import express from 'express';
import cors from 'cors';
import ShoppingRoutes from './routes/ShoppingRoutes.js';

export const app = express();

app.use(cors({
    origin: process.env.FRONTEND_BASE_URL,
    credentials: true,
}));
app.use(express.json());

app.use('/api/v1/shopping', ShoppingRoutes);

app.all("*", (req, res, next) => {
    res.status(404).json({
        status: "error",
        message: `Can't find ${req.originalUrl} on this server!`,
    });
    next();
});

export default app;