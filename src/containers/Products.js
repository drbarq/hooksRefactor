
// custom store
import React, {useContext} from 'react';
import ProductItem from '../components/Products/ProductItem';
import { useStore } from '../hooks-store/store'
import './Products.css';

const Products = props => {
  const [ state, dispatch ] = useStore()
  return (
    <ul className="products-list">
      {state.products.map(prod => (
        <ProductItem
          key={prod.id}
          id={prod.id}
          title={prod.title}
          description={prod.description}
          isFav={prod.isFavorite}
        />
      ))}
    </ul>
  );
};

export default Products;




// Hooks Example 
// import React, {useContext} from 'react';
// import ProductItem from '../components/Products/ProductItem';
// import { ProductsContext} from '../context/products-context';
// import './Products.css';

// const Products = props => {
//   const productList = useContext(ProductsContext).products
//   return (
//     <ul className="products-list">
//       {productList.map(prod => (
//         <ProductItem
//           key={prod.id}
//           id={prod.id}
//           title={prod.title}
//           description={prod.description}
//           isFav={prod.isFavorite}
//         />
//       ))}
//     </ul>
//   );
// };

// export default Products;






// import React from 'react';
// import { useSelector } from 'react-redux';
// import ProductItem from '../components/Products/ProductItem';

// import './Products.css';

// const Products = props => {
//   const productList = useSelector(state => state.shop.products);
//   return (
//     <ul className="products-list">
//       {productList.map(prod => (
//         <ProductItem
//           key={prod.id}
//           id={prod.id}
//           title={prod.title}
//           description={prod.description}
//           isFav={prod.isFavorite}
//         />
//       ))}
//     </ul>
//   );
// };

// export default Products;