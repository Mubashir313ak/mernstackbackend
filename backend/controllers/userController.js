const registerUser = async (req, res) => {
  const { name, email, password, pic } = req.body;
  res.json({ name, email, password, pic });
};

module.exports = { registerUser };
