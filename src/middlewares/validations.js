const isEmptyObject = (object) => (Object.values(object).length <= 0);

const validateEmail = (req, res, next) => {
  const { email } = req.body;
	const { data } = req;
  const regex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g;
	const supporter = data.find((fan) => fan.email === email);

  if (!email || email === '') {
    return res.status(400).json({
      message: 'O campo "email" é obrigatório',
    });
  }

	if (supporter) {
		return res.status(400).json({
      message: 'Supporter já registrado',
    });
	}

  if (!regex.test(email)) {
    return res.status(400).json({
      message: 'O "email" deve ter o formato "email@email.com"',
    });
  }

  next();
};

const validateName = (req, res, next) => {
  const { name, nick } = req.body;
  if (!name || name === '') {
    return res.status(400).json({
      message: 'O campo "name" é obrigatório',
    });
  }

  if (!nick || nick === '') {
    return res.status(400).json({
      message: 'O campo "nick" é obrigatório',
    });
  }

  if (name.length < 2) {
    return res.status(400).json({
      message: 'O "name" deve ter pelo menos 3 caracteres',
    });
  }

  next();
};

const validateAge = (req, res, next) => {
  const { age } = req.body;
  if (!age) {
    return res.status(400).json({
      message: 'O campo "age" é obrigatório',
    });
  }

  next();
};

const validateState = (req, res, next) => {
  const { state } = req.body;
  if (!state || state === '') {
    return res.status(400).json({
      message: 'O campo "state" é obrigatório',
    });
  }

  if (state.length < 4) {
    return res.status(400).json({
      message: 'O "state" deve ter pelo menos 4 caracteres',
    });
  }

  next();
};

const validateCity = (req, res, next) => {
  const { city } = req.body;
  if (!city || city === '') {
    return res.status(400).json({
      message: 'O campo "city" é obrigatório',
    });
  }

  next();
};

module.exports = {
	validateAge,
	validateCity,
	validateEmail,
	validateName,
	validateState,
}