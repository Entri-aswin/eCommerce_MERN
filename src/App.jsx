import "./App.css";
import { Header } from "./componets/Header/Header";
import { Home } from "./pages/Home/Home";
import { ProductDetails } from "./pages/productDetails/ProductDetails";
import { Products } from "./pages/Products/Products";

function App() {
    return (
        <>
            <Header />
            {/* <ProductDetails /> */}
            <Products />
            {/* <Home /> */}
        </>
    );
}

export default App;
