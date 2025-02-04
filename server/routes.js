import express from 'express';

import noteRoutes from './src/routes/noteRoutes.js';

const router = express.Router();

router.use('/server/', noteRoutes);

export default router;