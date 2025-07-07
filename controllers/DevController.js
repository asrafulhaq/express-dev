const students = [
  {
    id: 1,
    name: "Ashraful Haque",
    age: 40,
    skill: "IOS",
  },
  {
    id: 2,
    name: "Shahin Alam",
    age: 30,
    skill: "MERN",
  },
  {
    id: 3,
    name: "Abdul Kader",
    age: 80,
    skill: "BlockChain",
  },
];

/**
 * Get all Developers
 * @param {*} req
 * @param {*} res
 */
export const getHomePage = (req, res) => {
  res.render("home", {
    title: "Prothom Pata",
    desc: "Hello Page, How are you dd",
    isUser: true,
  });
};

export const getContactPage = (req, res) => {
  res.render("contact", {
    students,
  });
};

export const loadAboutPage = (req, res) => {
  res.render("about", {
    title: "This is About Page",
    foods: ["Alo", "Potol", "lao", "Kumra"],
  });
};
