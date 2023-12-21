import Header from "./Components/Header";
import Product from './Components/Product';

function App() {
  return (
    <>
      <Header />
      <h1>Hammaga Salom!</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis,
        nostrum exercitationem tenetur saepe earum eaque sed recusandae
        possimus! Reiciendis illo doloribus temporibus iure ex incidunt quas
        perferendis quisquam ea suscipit.
      </p>
      <div className="products">
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    </>
  );
}

export default App;
