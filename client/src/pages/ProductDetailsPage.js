import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../store/actions/index';
import { useParams } from 'react-router-dom';
import ProductVariant from '../components/product/ProductVariant';

function ProductDetailsPage(props) {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.webShop.product);
  const error = useSelector((state) => state.webShop.errorFetchProduct);
  let { productId } = useParams();
  console.log('Product', product);
  useEffect(() => {
    console.log('params.productId', productId);
    dispatch(actions.fetchProduct(productId));
  }, []);

  if (!product) {
    return null;
  }

  const { name, image, brand, details, reviews, variants, ingredients } = product;

  return (
    <div className="product-details">
      <div className="product-details-head">
        <img src={brand.imageUrl} alt={brand.name}></img>
        <div className="product-details-head-title">
          <h1>
            {name} ({variants[0].name})
          </h1>
        </div>
      </div>
      <div className="product-details-body">
        <div className="product-details-body-left">
          <div className="product-details-body-left-image">
            <img src={image} alt={name}></img>
          </div>
          <div className="product-details-body-left-gift">
            <button>POKLON +</button>
            Uz kupnju Libre EDP i bilo kojeg YSL makeup proizvoda za lice Full Size POKLON Full Matte Eyeshadow u
            nijansi 03 Tantalizing Taupe - 4.5 ml - FULL SIZE
            <p>*ponuda vrijedi do isteka zaliha</p>
          </div>
          <div className="product-details-body-left-description">
            <div className="product-details-body-left-description-item">
              <div className="product-details-body-left-description-item-title">DETALJI PROIZVODA</div>
              <div className="product-details-body-left-description-item-text">{details}</div>
            </div>
            <div className="product-details-body-left-description-item">
              <div className="product-details-body-left-description-item-title">SASTOJCI</div>
              <div className="product-details-body-left-description-item-text">{ingredients}</div>
            </div>
          </div>
        </div>
        <div className="product-details-body-right">
          <div className="product-details-body-right-pink">BEAUTY SPOT BODOVI: +25</div>
          <div>
            {variants.map((v, i) => (
              <ProductVariant key={`productVariant-${i}`} image={image} name={v.name} price={v.price} />
            ))}
          </div>
          <div className="product-details-body-right-availability">
            {variants[0].unitValue > 0 ? 'Dostupno' : 'Nije dostupno'}
          </div>
          <div className="product-details-body-right-notes">
            <span class="material-icons product-details-body-right-notes-icon">airport_shuttle</span>
            <p>
              Cijena se odnosi na prodaju putem Interneta. Fotografija proizvoda ne mora u potpunosti odgovarati
              stvarnom izgledu i sadržaju proizvoda. U slučaju tehničkih pogrešaka Douglas ne preuzima odgovornost za
              točnost prikazanih cijena i fotografija.
            </p>
          </div>

          <div className="product-details-body-right-buy">
            <button> Dodajte u košaricu</button>
          </div>
          <div className="product-details-body-right-wishlist">
            <div class="material-icons product-details-body-right-wishlist-icon">favorite_border</div>
            <div>
              <a href="#">Stavite na popis želja</a>
            </div>
          </div>
          <div className="product-details-body-right-delivery">
            <div className="material-icons product-details-body-right-delivery-icon">help_outline</div>
            <div>Besplatna dostava</div>
          </div>

          <div className="product-details-body-right-advantages">
            <div className="product-details-body-right-advantages-title">Prednosti</div>
            <div className="product-details-body-right-advantages-items">
              <div className="product-details-body-right-advantages-item">
                <span className="material-icons product-details-body-right-advantages-item-icon">done</span>
                <span> Dostava 2-5 radnih dana</span>
              </div>
              <div className="product-details-body-right-advantages-item">
                <span className="material-icons product-details-body-right-advantages-item-icon">done</span>
                <span>Besplatno zamotavanje</span>
              </div>
              <div className="product-details-body-right-advantages-item">
                <span className="material-icons product-details-body-right-advantages-item-icon">done</span>
                <span> 1 besplatan uzorak</span>
              </div>
              <div className="product-details-body-right-advantages-item">
                <span className="material-icons product-details-body-right-advantages-item-icon">done</span>
                <span> Besplatna dostava za narudžbe iznad 360 kn</span>
              </div>
              <div className="product-details-body-right-advantages-item">
                <span className="material-icons product-details-body-right-advantages-item-icon">done</span>
                <span> Sigurno praćenje SSL enkripcijom</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="product-details-footer">
        <h1>Recenzije</h1>
      </div>
    </div>
  );
}

export default ProductDetailsPage;
