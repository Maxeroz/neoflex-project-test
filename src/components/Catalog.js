import data from "../data/data";
import Product from "./Product";

function Catalog({ dispatch }) {
  return (
    <main className="container">
      <div className="category-title">
        <h2>Наушники</h2>
      </div>
      <section className="products headphones-container">
        {data.headphones.map((product) => (
          <Product key={product.id} data={product} dispatch={dispatch} />
        ))}
      </section>
      <div className="category-title">
        <h2>Беспроводные наушники</h2>
      </div>
      <section className="products wirelessHeadphones-container">
        {data.wirelessHeadphones.map((product) => (
          <Product key={product.id} data={product} dispatch={dispatch} />
        ))}
      </section>
    </main>
  );
}

export default Catalog;
