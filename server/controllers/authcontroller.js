import usermodel from "../models/usermodel.js";
import bcrypt from "bcrypt";
import JWT from "jsonwebtoken";

export const registerController = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    if (!username || !email || !password)
      return res.status(500).send({
        success: false,
        message: "fill all the requirements",
      });
    const existing = await usermodel.findOne({ email });
    if (!existing)
      return res.status(200).send({
        success: true,
        message: "email registered please login",
      });

    var salt = bcrypt.genSaltSync(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = await usermodel.create({
      name: username,
      email,
      password,
    });

    const isMatch = await bcryprt.compare(password, user.password);
    if (!isMatch) {
      return res.status(500).send({
        success: false,
        message: "password doesnt match",
      });
    }
    return res.send(201).send({
      success: true,
      message: "successfully registered",
    });
  } catch (error) {
    console.log(error);
    res.status(404).send({
      success: false,
      message: "something went wrong",
    });
  }
};
