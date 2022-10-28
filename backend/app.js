const express = require("express");
const { TeamMember } = require("./model");

const app = express();
app.use(express.json());

app.get("/team", async (req, res, next) => {
  const team = await TeamMember.findAll();
  return res.json(team);
});

app.post("/team", async (req, res) => {
  console.log(req.body);
  const { firstName, lastName, title, story, favoriteColor, photoUrl } =
    req.body;
  try {
    const newTeamMemberToBeCreated = new TeamMember({
      firstName: firstName,
      lastName: lastName,
      title: title,
      story: story,
      favoriteColor: favoriteColor,
      photoUrl: photoUrl,
    });
    const savedMember = await newTeamMemberToBeCreated.save();
    res.status(201).json(savedMember);
  } catch (error) {
    console.error(error);
  }
});

module.exports = app;
