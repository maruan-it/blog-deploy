const faker = require("faker");
const tr = require("transliter");

const models = require("./models");

const owner = "5f18217ac9a4be2b54351552";

module.exports = async () => {
  try {
    await models.Post.remove();

    Array.from({ length: 20 }).forEach(async (_, i) => {
      const title = faker.lorem.words(5);
      const url = `${tr.slugify(title)}--${Date.now().toString(36)}`;
      const post = await models.Post.create({
        title,
        body: faker.lorem.words(100),
        url,
        owner,
      });
      console.log(post);
    });
  } catch (error) {
    console.log(error);
  }

  // models.Post.remove()
  //   .then(() => {
  //     Array.from({ length: 20 }).forEach((_, i) => {
  //       models.Post.create({
  //         title: faker.lorem.words(5),
  //         body: faker.lorem.words(100),
  //         owner,
  //       })
  //         .then(console.log)
  //         .catch(console.log);
  //     });
  //   })
  //   .catch(console.log);
};
