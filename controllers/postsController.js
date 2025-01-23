const postData = require("../data/postsData");

//index
const index = (req, res) => {
  res.json(postData);
};

//show

const show = (req, res) => {
  const id = Number(req.params.id);

  const post = postData.find((post) => post.id === id);

  res.json(post);
};

//destroy

const destroy = (req, res) => {
  const id = Number(req.params.id);

  const postIndex = postData.findIndex((post) => post.id === id);

  postData.splice(postIndex, 1);

  console.log(postData);

  res.sendStatus(204);
};

module.exports = {
  index,
  show,
  destroy,
};
