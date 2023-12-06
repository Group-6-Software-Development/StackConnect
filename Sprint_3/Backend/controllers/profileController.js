const Profile = require("../models/profileModel");

const getProfile = async (req, res) => {
  const profile = await Profile.find({ user: req.user });
  res.json(profile);
};

const createProfile = async (req, res) => {
  const { name, email, phone, skills, experience, education } = req.body;

  try {
    const profile = await Profile.create({
      user: req.user,
      name,
      email,
      phone,
      skills,
      experience,
      education,
    });

    res.status(200).json(profile);
  } catch (error) {
    console.log(error.message);
    res.status(400).json({ message: error.message });
  }
};

const updateProfile = async (req, res) => {
  const { name, email, phone, skills, experience, education } = req.body;

  console.log(req.user);

  try {
    const profile = await Profile.findOne({ user: req.user });

    if (profile) {
      profile.name = name;
      profile.email = email;
      profile.phone = phone;
      profile.skills = skills;
      profile.experience = experience;
      profile.education = education;

      const updatedProfile = await profile.save();
    }

    res.status(200).json(profile);
  } catch (error) {
    console.log(error.message);
    res.status(400).json({ message: error.message });
  }
};

module.exports = { getProfile, createProfile, updateProfile };
