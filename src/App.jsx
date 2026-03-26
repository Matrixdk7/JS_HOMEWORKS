import {useEffect, useState} from 'react'
import ProductForm from "./components/ProductForm.jsx";
import ProductList from "./components/ProductList.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
    const [products, setProducts] = useState(() => {
        const stored = localStorage.getItem("products");
        return stored ? JSON.parse(stored) : [];
    });

    useEffect(() => {
        localStorage.setItem("products", JSON.stringify(products));
    }, [products]);

    const handleAddProduct = (product) => {
        setProducts(prev => [...prev, product]);
    };

    const handleDeleteProduct = (id) => {
        setProducts(prev => prev.filter(p => p.id !== id));
    };

    const handleToggleActive = (id) => {
        setProducts(prev => prev.map(p => p.id === id ? {...p, active: !p.active} : p));
    };

  return (
    <>
        <ProductForm onAddProduct={handleAddProduct} />
        <ProductList
            products={products}
            onDelete={handleDeleteProduct}
            onToggleActive={handleToggleActive}
        />
    </>
  )
}

export default App
