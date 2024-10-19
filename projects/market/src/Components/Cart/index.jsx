import '../../styles/cart.css'

const Cart = () => {
    return (
        <div className="container-cart">
            <h1>carrinho</h1>

            <div className="container-product-cart">
                <div className="product-cart">
                    <label htmlFor=""><b>produto:</b>R$4,99</label>
                    <label htmlFor=""><b>preço:</b>R$4,99</label>
                    <label htmlFor=""><b>quantidade:</b>R$4,99</label>
                </div>


                <div className="product-cart">
                    <label htmlFor=""><b>produto:</b>R$4,99</label>
                    <label htmlFor=""><b>preço:</b>R$4,99</label>
                    <label htmlFor=""><b>quantidade:</b>R$4,99</label>
                </div>


                <div className="product-cart">
                    <label htmlFor=""><b>produto:</b>R$4,99</label>
                    <label htmlFor=""><b>preço:</b>R$4,99</label>
                    <label htmlFor=""><b>quantidade:</b>R$4,99</label>
                </div>


                <div className="product-cart">
                    <label htmlFor=""><b>produto:</b>R$4,99</label>
                    <label htmlFor=""><b>preço:</b>R$4,99</label>
                    <label htmlFor=""><b>quantidade:</b>R$4,99</label>
                </div>

            </div> {/* container-product-cart */}

            <div className="container-bills">
            <label htmlFor=""><b>Total a pagar:</b>R$19,99</label>
                    <label htmlFor=""><b>Dinheiro pago:</b><input type="text" placeholder='Insira o valor' /></label>
                    <label htmlFor=""><b>Troco:</b>R$10.00</label>                
            </div>
        </div>
    )
}

export default Cart