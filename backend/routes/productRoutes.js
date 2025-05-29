const express = require('express');
const Product = require('../models/Product');
const router = express.Router();

// Get all products (fresh chicken products)
router.get('/products', async (req, res) => {
    try {
        const products = await Product.find({ category: 'product' });
        res.json(products);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Get all prepared dishes
router.get('/prepared-dishes', async (req, res) => {
    try {
        const preparedDishes = await Product.find({ category: 'prepared-dish' });
        res.json(preparedDishes);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Get all promotional products
router.get('/promotions', async (req, res) => {
    try {
        const promotions = await Product.find({ category: 'promotion' });
        res.json(promotions);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});


// Optional: Route to seed initial data (for development/testing)
router.post('/seed-data', async (req, res) => {
    try {
        await Product.deleteMany({}); // Clear existing data

        const initialProducts = [
            {
                name: "Poulet Entier Fermier",
                description: "Poulet entier frais, élevé en plein air, idéal pour rôtir.",
                price: 7500,
                images: [
                    "https://placehold.co/300x220/e74c3c/ffffff?text=Poulet+Entier+1",
                    "https://placehold.co/300x220/c0392b/ffffff?text=Poulet+Entier+2",
                    "https://placehold.co/300x220/f39c12/ffffff?text=Poulet+Entier+3"
                ],
                category: 'product'
            },
            {
                name: "Cuisses de Poulet",
                description: "Tendres cuisses de poulet, parfaites pour le grill ou en sauce.",
                price: 3500,
                images: [
                    "https://placehold.co/300x220/27ae60/ffffff?text=Cuisses+1",
                    "https://placehold.co/300x220/2ecc71/ffffff?text=Cuisses+2",
                    "https://placehold.co/300x220/1abc9c/ffffff?text=Cuisses+3"
                ],
                category: 'product'
            },
            {
                name: "Poitrines de Poulet",
                description: "Poitrines de poulet désossées et sans peau, très polyvalentes.",
                price: 4000,
                images: [
                    "https://placehold.co/300x220/3498db/ffffff?text=Poitrines+1",
                    "https://placehold.co/300x220/2980b9/ffffff?text=Poitrines+2",
                    "https://placehold.co/300x220/34495e/ffffff?text=Poitrines+3"
                ],
                category: 'product'
            },
            {
                name: "Ailes de Poulet",
                description: "Ailes de poulet savoureuses, idéales pour les apéritifs.",
                price: 2800,
                images: [
                    "https://placehold.co/300x220/9b59b6/ffffff?text=Ailes+1",
                    "https://placehold.co/300x220/8e44ad/ffffff?text=Ailes+2",
                    "https://placehold.co/300x220/6b4e7e/ffffff?text=Ailes+3"
                ],
                category: 'product'
            },
            {
                name: "Poulet Haché",
                description: "Viande de poulet hachée, parfaite pour les boulettes ou les sauces.",
                price: 3000,
                images: [
                    "https://placehold.co/300x220/f1c40f/ffffff?text=Hach%C3%A9+1",
                    "https://placehold.co/300x220/f39c12/ffffff?text=Hach%C3%A9+2",
                    "https://placehold.co/300x220/d35400/ffffff?text=Hach%C3%A9+3"
                ],
                category: 'product'
            },
            {
                name: "Poulet Fumé",
                description: "Poulet fumé artisanalement, pour une saveur unique.",
                price: 8000,
                images: [
                    "https://placehold.co/300x220/556B2F/FFFFFF?text=Poulet+Fum%C3%A9+1",
                    "https://placehold.co/300x220/6B8E23/FFFFFF?text=Poulet+Fum%C3%A9+2"
                ],
                category: 'product'
            },
            {
                name: "Abats de Poulet",
                description: "Gésiers, foies et cœurs, parfaits pour les sauces et ragoûts.",
                price: 1800,
                images: [
                    "https://placehold.co/300x220/A52A2A/FFFFFF?text=Abats+1",
                    "https://placehold.co/300x220/CD853F/FFFFFF?text=Abats+2"
                ],
                category: 'product'
            },
            {
                name: "Filet de Poulet",
                description: "Filets de poulet maigres et tendres, prêts à cuisiner.",
                price: 4200,
                images: [
                    "https://placehold.co/300x220/4682B4/FFFFFF?text=Filet+Poulet+1",
                    "https://placehold.co/300x220/5F9EA0/FFFFFF?text=Filet+Poulet+2"
                ],
                category: 'product'
            }
        ];

        const initialPreparedDishes = [
            {
                name: "Poulet Pané (Camerounais)",
                description: "Morceaux de poulet croustillants, panés et frits à la perfection.",
                price: 4500,
                images: [
                    "https://placehold.co/300x220/FFD700/000000?text=Poulet+Pan%C3%A9+1",
                    "https://placehold.co/300x220/DAA520/000000?text=Poulet+Pan%C3%A9+2"
                ],
                category: 'prepared-dish'
            },
            {
                name: "Poulet DG (Directeur Général)",
                description: "Plat emblématique camerounais avec poulet, plantains et légumes.",
                price: 6000,
                images: [
                    "https://placehold.co/300x220/8B4513/FFFFFF?text=Poulet+DG+1",
                    "https://placehold.co/300x220/A0522D/FFFFFF?text=Poulet+DG+2"
                ],
                category: 'prepared-dish'
            },
            {
                name: "Poulet Braisé",
                description: "Poulet mariné et grillé, servi avec des frites ou du riz.",
                price: 5500,
                images: [
                    "https://placehold.co/300x220/CD5C5C/FFFFFF?text=Poulet+Brais%C3%A9+1",
                    "https://placehold.co/300x220/DC143C/FFFFFF?text=Poulet+Brais%C3%A9+2"
                ],
                category: 'prepared-dish'
            },
            {
                name: "Ndolè au Poulet",
                description: "Plat traditionnel Bamiléké, feuilles de ndolè avec poulet et arachides.",
                price: 7000,
                images: [
                    "https://placehold.co/300x220/228B22/FFFFFF?text=Ndol%C3%A8+Poulet+1",
                    "https://placehold.co/300x220/3CB371/FFFFFF?text=Ndol%C3%A8+Poulet+2"
                ],
                category: 'prepared-dish'
            },
            {
                name: "Koki au Poulet",
                description: "Gâteau de haricots avec morceaux de poulet, cuit à la vapeur.",
                price: 5000,
                images: [
                    "https://placehold.co/300x220/D2B48C/000000?text=Koki+Poulet+1",
                    "https://placehold.co/300x220/B8860B/000000?text=Koki+Poulet+2"
                ],
                category: 'prepared-dish'
            },
            {
                name: "Poulet Yassa (Sénégalais)",
                description: "Poulet mariné au citron et oignons, plat savoureux d'Afrique de l'Ouest.",
                price: 6500,
                images: [
                    "https://placehold.co/300x220/F0E68C/000000?text=Poulet+Yassa+1",
                    "https://placehold.co/300x220/DAA520/000000?text=Poulet+Yassa+2"
                ],
                category: 'prepared-dish'
            }
        ];

        const initialPromotionalProducts = [
            {
                name: "Pack Famille (Poulet Entier)",
                description: "Idéal pour les grands repas, -20% !",
                oldPrice: 9000,
                price: 7200,
                images: ["https://placehold.co/150x100/FF6347/FFFFFF?text=Promo+Pack+1"],
                category: 'promotion'
            },
            {
                name: "Duo Cuisses & Poitrines",
                description: "Le meilleur des deux mondes, -15% !",
                oldPrice: 7500,
                price: 6375,
                images: ["https://placehold.co/150x100/FFD700/000000?text=Promo+Duo+1"],
                category: 'promotion'
            },
            {
                name: "Offre Ailes Party",
                description: "Parfait pour vos soirées, -25% !",
                oldPrice: 3500,
                price: 2625,
                images: ["https://placehold.co/150x100/ADFF2F/000000?text=Promo+Ailes+1"],
                category: 'promotion'
            }
        ];


        await Product.insertMany([...initialProducts, ...initialPreparedDishes, ...initialPromotionalProducts]);
        res.status(200).json({ message: 'Database seeded successfully!' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});


module.exports = router;