const fs = require('fs');

const SUPPORTERS = 'src/supporters.json';

const getSupportersMiddleware = (req, res, next) => {
  const data = JSON.parse(fs.readFileSync(SUPPORTERS, 'utf8'));
  req.data = data;
  next();
};

module.exports = getSupportersMiddleware