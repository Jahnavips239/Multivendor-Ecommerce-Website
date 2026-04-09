const authMiddleware = (req, res, next) => {
  console.log("Auth middleware working");
  next();
};

module.exports = authMiddleware;
