import React, { useEffect } from 'react';
import ProductCard from '../components/product/ProductCard';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import * as actions from '../store/actions';

function CategoryFilterPage() {
  const dispatch = useDispatch();
  let products = useSelector((state) => state.webShop.products);
  let categories = useSelector((state) => state.webShop.categories);
  const error = useSelector((state) => state.webShop.errorFetchProducts);
  let logme = useSelector((state) => state.webShop);
  let { categoryId } = useParams();

  useEffect(() => {
    console.log('hereeee');
    dispatch(actions.fetchCategories());
  }, []);

  useEffect(() => {
    console.log('hereeee');
    dispatch(actions.fetchProducts());
  }, []);

  const renderProducts = () => {
    console.log(logme);
    if (products && !error) {
      console.log(logme);
      console.log(categoryId);
      if (categoryId != undefined) {
        console.log(categoryId);
        categories = categories.filter((category) => category.productCategory == categoryId);
        console.log(categories);
        console.log(products);
        products = products.filter((product) =>
          product.productSubCategory != undefined
            ? categories.find((category) => category._id === product.productSubCategory) != undefined
            : false,
        );

        return products.map((p) => (
          <ProductCard
            key={p._id}
            productId={p._id}
            name={p.name}
            image={p.image}
            brandName={p.brand.name}
            brandImage={p.brand.imageUrl}
          />
        ));
      }
    }

    return <div>No products</div>;
  };

  return <div className="home">{renderProducts()}</div>;
}

export default CategoryFilterPage;
