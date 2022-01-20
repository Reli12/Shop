import jwt from "jsonwebtoken";
export const generateToken = (user) => {
  //first parametar is user object, second is json token secret
  //how it be secure put it in .env file
  //last is options token will be expired in 30 days
  return jwt.sign(
    {
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    },
    process.env.JWT_SECRET || "somethingsecret",
    {
      expiresIn: "30d",
    }
  );
};
