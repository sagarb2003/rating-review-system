const express = require('express');
const cors = require('cors');
const { PrismaClient } = require('@prisma/client');

const app = express();
const prisma = new PrismaClient();
const PORT = 8000;

app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}));

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Backend is running');
});

app.get('/reviews/:product_id', async (req, res) => {
    try {
        const product_id = Number(req.params.product_id);
        const reviews = await prisma.review.findMany({
            where: {
                product_id: product_id
            },
            orderBy: {
                createdAt: 'desc'
            }
        });
        return res.json({
            success: true,
            data: reviews
        });
    } catch (error) {
        console.error('Error fetching reviews:', error);
        return res.status(500).json({
            success: false,
            error: 'Failed to fetch reviews'
        });
    }
});

app.post('/reviews', async (req, res) => {
    try {
        const { user_id, product_id, rating, review } = req.body;
        const checkUser = await prisma.review.findUnique({
            where: {
              user_id_product_id: {
                user_id,
                product_id: product_id
              }
            }
          });          

        if (checkUser) {
            return res.status(400).json({
                success: false,
                error: 'User already exist, Review with another user'
            });
        }
        const newReview = await prisma.review.create({
            data: {
                user_id,
                product_id,
                rating: rating || null,
                review: review || null
            }
        });

        return res.status(201).json({
            success: true,
            data: newReview
        });
    } catch (error) {
        console.error('Error creating review:', error);
        return res.status(500).json({
            success: false,
            error: 'Failed to create review'
        });
    }
});

app.listen(PORT, () => {
    console.log(`BACKEND IS RUNNING AT PORT ${PORT}`);
});