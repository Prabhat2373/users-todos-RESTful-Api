const superagent = require("superagent");

exports.getUserTodo = async (req, res) => {
  try {
    const resultRes = await superagent.get(
      "https://jsonplaceholder.typicode.com/todos"
    );
    res.status(200).json({
      status: "Success",
      Data: resultRes.body,
    });
  } catch (err) {
    res.status(404).json({
      status: "Bad Request",
      message: err.message,
    });
  }
};

exports.getUserById = async (req, res) => {
  try {
    const id = req.params.id * 1
    const resultRes = await superagent.get(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );
    res.status(200).json({
        status:"Success",
        Data:resultRes.body
    })
  } catch (err) {
    res.status(404).json({
      status: "Bad Request",
      message: err.message,
    });
  }
};
