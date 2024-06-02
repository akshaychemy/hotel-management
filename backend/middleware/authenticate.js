// middleware/authenticate.js
import jwt from 'jsonwebtoken';

const authenticate = (req, res, next) => {
  // Get token from headers, query parameters, or cookies
  const token = req.headers['authorization']?.split(' ')[1] || req.query.token || req.cookies.token;

  // Check if token exists
  if (!token) {
    return res.status(401).json({ message: 'Unauthorized: Token missing' });
  }

  try {
    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded.user; // Set the decoded user object on the request
    next(); // Move to the next middleware or route handler
  } catch (err) {
    return res.status(401).json({ message: 'Unauthorized: Invalid token' });
  }
};

export default authenticate;
