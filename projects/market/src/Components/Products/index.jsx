import React, { useState } from 'react';
import '../../styles/products.css';
import apple from '../../assets/apple.svg';
import banana from '../../assets/banana.svg';
import grape from '../../assets/grape.svg';
import orange from '../../assets/orange.svg';

const Products = () => {
    const [products, setProducts] = useState({
        apple: { name: 'Maçã', price: 4, qtd: 4 },
        banana: { name: 'Banana', price: 3, qtd: 5 },
        grape: { name: 'Bolo Saboroso', price: 10, qtd: 10 },
        orange: { name: 'Laranja', price: 5, qtd: 3 }
    });

    const [cartItems, setCartItems] = useState({});
    const [total, setTotal] = useState(0)
    const [valueReceived, setValueReceived] = useState(0)

    const addToCart = (productId) => {
        setCartItems(prevItems => {
            const currentQuantity = parseInt(prevItems[productId] || 0, 10);
            const newQuantity = isNaN(currentQuantity) ? 1 : currentQuantity + 1;
            return {
                ...prevItems,
                [productId]: newQuantity
            };
        });
    };

    // const calculateTotal = () => {
    //     return Object.values(cartItems).reduce((total, quantity) => {
    //         const product = products[Object.keys(cartItems).find(key => cartItems[key] === quantity)];
    //         const result = total + quantity * product.price;
    //         return result;
    //         setTotal(result)
    //     }, 0);
    // };

    return (
        <div className='container'>
            <main>
                <h1>mercadinho sESI </h1>
                <div className="container-products">
                    {Object.entries(products).map(([productId, product]) => (
                        <div key={productId} className="product">
                            <div className="container-img-product">
                                <img src={productId === 'banana' ? banana : productId === 'grape' ? grape : productId === 'orange' ? orange : apple} alt={product.name} />
                            </div>
                            <div className="container-info-product">
                                <label htmlFor=""><b>Produto:</b>{product.name}</label>
                                <label htmlFor=""><b>Preço:</b>R$ {product.price.toFixed(2)}</label>
                                <select value={(cartItems[productId] || 0)} onChange={(e) => {
                                    const newQuantity = parseInt(e.target.value, 10);
                                    setCartItems(prevItems => ({
                                        ...prevItems,
                                        [productId]: newQuantity
                                    }));
                                    console.log(`Total para ${product.name}: R$ ${(newQuantity * product.price).toFixed(2)}`);
                                }}>
                                    {[...Array(product.qtd)].map((_, index) => (
                                        <option key={index} value={index}>{index} unidade(s)</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="line"></div>
                </main>


                <div className="container-cart">
                    <h1>Carrinho</h1>
                    <div className="container-product-cart">
                        {Object.keys(cartItems).length > 0 ? (
                            <>
                                {Object.entries(cartItems).map(([productId, quantity]) => (
                                    <div key={productId} className="product-cart">
                                        <label htmlFor=""><b>Produto:</b>{products[productId].name}</label>
                                        <label htmlFor=""><b>Quantidade:</b>{quantity}</label>
                                        <label htmlFor=""><b>Preço:</b>R$ {(quantity * products[productId].price).toFixed(2)}</label>
                                    </div>
                                ))}
                            </>
                        ) : (
                            <p>O carrinho está vazio.</p>
                        )}
                        
                    </div>
{/*                     <div className="container-bills">
                                    <label htmlFor=""><b>Total:</b>R$ {calculateTotal().toFixed(2)}</label>
                                    <label htmlFor="">
                    <b>Valor recebido:</b>
                    <input 
                        id="received-value-input"
                        value={valueReceived}
                        onChange={(e) => setValueReceived(e.target.value)}
                    />
                </label>
                {valueReceived && valueReceived !== '' && parseFloat(valueReceived) > calculateTotal() ? (
    <>
        <label id='change'><b>Troco:</b>R$ {(parseFloat(valueReceived) - calculateTotal()).toFixed(2)}</label>
    </>
) : valueReceived && valueReceived === calculateTotal().toFixed(2) ? (
    <label id='correct'>Valor pago correto!</label>
) : (
    <label id='missing'>Está faltando R$ {(calculateTotal() - parseFloat(valueReceived)).toFixed(2)}</label>
)}
                                </div>
 */}
                </div>
        </div>
    );
};

export default Products;
