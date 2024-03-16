const signup = async (req, res) => {
  try {
    req.reading=true;
    const { fullName, username, password, confirmPassword, gender } = req.body;
    res.json({ success: true, data: fullName, username });
  } catch (error) {
    console.log(error);
  }
};
const login = async (req, res) => {
  res.send("Login");
};
const logout = async (req, res) => {
  res.send("Logout");
};

module.exports = { login, logout, signup };
