import jwt from 'jsonwebtoken'
import { User } from '../models/user.models.js';

export const protectRoute = async (req, res, next) => {
    try {

        console.log("user req cookies in protect route :", req.cookies);
        const accessToken = req.cookies.accessToken;

        if (!accessToken) {
            return res.status(400).json({ error: "Unauthorized : no token provided" });
        }
        // accessToken expired
        const decode = jwt.verify(accessToken, process.env.ACCESS_TOKEN);
        console.log("decode when token expired :",decode);
        if (!decode) {
            return res.status(400).json({ error: "Unauthorized : token expired" });
        }

        const user = await User.findOne({ _id: decode.userID }).select("-password")

        req.user = user;
        next();

    } catch (error) {
        console.log("Error in protet middleware : ", error);
        return res.status(500).json({ error: "Internal server error" });
    }
}