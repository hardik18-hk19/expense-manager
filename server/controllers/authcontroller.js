import usermodel from "../models/usermodel.js";
import bcrypt from "bcrypt";
import JWT from "jsonwebtoken";
//import usermodel from "../models/usermodel.js";

export const registerController = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    if (!username || !email || !password)
      return res.status(500).send({
        success: false,
        message: "fill all the requirements",
      });

    const existing = await usermodel.findOne({ email });
    if (existing)
      return res.status(400).send({
        success: false,
        message: "email already registered please login",
      });

    var salt = bcrypt.genSaltSync(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = await usermodel.create({
      name: username,
      email,
      password: hashedPassword,
    });

    return res.status(201).send({
      success: true,
      message: "successfully registered",
    });
  } catch (error) {
    console.log(error);
    return res.status(404).send({
      success: false,
      message: "something went wrong",
    });
  }
};

//login
export const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check for required fields
    if (!email || !password) {
      return res.status(400).send({
        success: false,
        message: "Email and password are required",
      });
    }

    // Find user by email
    const user = await usermodel.findOne({ email });
    if (!user) {
      return res.status(404).send({
        success: false,
        message: "User does not exist. Please register.",
      });
    }

    // Compare password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).send({
        success: false,
        message: "Invalid password",
      });
    }

    // Create JWT token
    const token = JWT.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    // Hide password before sending user data
    user.password = undefined;

    res.status(200).send({
      success: true,
      message: "Login successful",
      token,
      user,
    });
  } catch (error) {
    console.error("Login error:", error);
    return res.status(500).send({
      success: false,
      message: "Login failed",
    });
  }
};
