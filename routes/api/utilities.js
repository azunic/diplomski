const express = require('express');

const router = express.Router();
const MainCategories = require('../../models/MainCategories');
const ProductCategories = require('../../models/ProductCategories');

// GET / - dohvati sve glavne kategorije
router.get('/getNavigation', async (req, res) => {
  try {
    const allMainCategories = await MainCategories.find({}).select('name');

    const response = [
      { name: 'Home', navItems: [] },
      { name: 'Brands', navItems: [] },
    ];

    for (let i = 0; i < allMainCategories.length; i++) {
      const productCategoriesForMainCategory = await ProductCategories.find({
        mainCategory: allMainCategories[i]._id,
      }).select('name');

      const navItemName = allMainCategories[i].name;
      const newNavItem = {
        name: navItemName,
        navItems: productCategoriesForMainCategory,
      };
      response.push(newNavItem);
    }

    res.send(response);
  } catch (err) {
    console.error('An error occurred on main categories get all', err);
    res.status(500).send(err);
  }
});

module.exports = router;
