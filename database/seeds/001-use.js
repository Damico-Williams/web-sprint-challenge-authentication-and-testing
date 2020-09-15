
exports.seed = async function(knex) {
  await knex("users").truncate()
  await knex("users").insert([
    {username: "Goku", password: "abc"},
    {username: "Vegeta", password: "abc1"},
    {username: "Trunks", password: "abc2"},
    {username: "Gohan", password: "abc3"}
  ]);
};
