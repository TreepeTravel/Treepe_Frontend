import jwt from "jsonwebtoken";

export const dynamic = "force-dynamic";

const AuthUser = async (req) => {
  const token = req.headers.get("Authorization").split(" ")[1];

  if (!token) {
    return false;
  }
//   console.log(token);

  try {
    const extractAuthUser = jwt.verify(token, "default_secret_key");
    
    if (extractAuthUser) {return extractAuthUser}
  } catch (error) {
    console.log(error);
    return false;
  }
};

export default AuthUser;
