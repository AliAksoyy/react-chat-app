const sendMessage = async (req, res) => {
  try {
    const { userId } = req.params;
    const { message } = req.body;
  } catch (error) {
    console.log("Error in sendMessages controller", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }

  return;
};

module.exports = { sendMessage };
