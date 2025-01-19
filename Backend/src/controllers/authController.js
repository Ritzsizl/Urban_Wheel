import { generateToken } from "../../utils/generateToken.js";
import User from "../models/User.js";
import bcryptjs from "bcryptjs";

export const signup = async (req,res) => {
  const { email, password, username } = req.body;
  try {
    if (!password || !email || !username) {
      throw new error("All fields are required");
    }
    if (password.length < 6) {
      return res
        .status(400)
        .json({ message: "Password must be at least 6 characters" });
    }

    const userAlreadyExist = await User.findOne({ email });

    if (userAlreadyExist) {
      return;
      res.status(401).json({ success: false, messgae: "User Already Exists" });
    }

    const hashedpassword = await bcryptjs.hash(password, 10);

    const user = new User({
      username,
      email,
      password: hashedpassword,
    });

    generateToken(res, user._id);
    await user.save();

    res.status(201).json({
      success: true,
      message: "User Created Successfully",
      user: {
        ...user._doc,
        password: undefined,
      },
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};
