const postsData = require("../data/postsData");

//index
const index = (req, res) => {
  let postsFiltered = postsData;
  const { tag } = req.query;
  if (tag) { 
    postsFiltered = postsFiltered.filter((post) => 
        post.tags.includes(tag));
  }
  res.json(postsFiltered);
};

//show

const show = (req, res) => {
  const { id } = req.params;

  const post = postData.find((post) => post.id === id);

  if (!post) {
    return res.sendStatus(404);
  }
  res.json(post);
};

//destroy

const destroy = (req, res) => {
  const { id } = req.params;

  const postIndex = postData.findIndex((post) => post.id === id);

  if (postIndex < 0) {
    return res.sendStatus(404);
  }

  postData.splice(postIndex, 1);

  console.log(postData);

  res.sendStatus(204);
};

module.exports = {
  index,
  show,
  destroy,
};
