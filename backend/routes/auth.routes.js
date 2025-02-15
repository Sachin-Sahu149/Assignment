import express from 'express';
import {login, logout, refreshToken, register,getProfile } from '../controllers/auth.controllers.js';
import { protectRoute } from '../middleware/protectRoute.js';


const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.post('/login01', (req,res)=>{
 
  console.log('Headers:', req.headers);
  console.log('Body:', req.body); // Should not be empty
  res.send('Login attempt received');

});

router.post('/logout', logout);
router.post('/refresh-token', refreshToken);
router.get('/',protectRoute,getProfile);

export default router;
