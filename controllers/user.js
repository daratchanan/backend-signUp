const db = require("../models");


const signUp = async (req, res) => {
   try {
      const {name, surname, address, phone_number, email } = req.body;
      await db.User.create({
         name,
         surname,
         address,
         email,
         phone_number,
      });
      res.status(201).send({ message: "User create." });

   } catch (error) {
      console.log(error);
      res.status(500).send({ message: error.message });
   };
   
};

module.exports = { signUp };