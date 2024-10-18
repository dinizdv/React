import '../../styles/products.css'
import apple from '../../assets/apple.svg'

const Products = () => {
    return (
        <main>
            <h1>mercadinho sESI </h1>
            <div className="container-products">
                <div className="product">
                    <img src={apple} alt="" />
                    <div className="container-info-product">
                        <label htmlFor=""><b>produto:</b>maçã</label>
                        <label htmlFor=""><b>preço:</b>R$4,99</label>

                        <select name="" id="">
                            <option value="" disabled selected></option>
                            <option value="">test</option>
                        </select>
                    </div>
                </div>


                <div className="product">
                    <img src={apple} alt="" />
                    <div className="container-info-product">
                        <label htmlFor=""><b>produto:</b>maçã</label>
                        <label htmlFor=""><b>preço:</b>R$4,99</label>

                        <select name="" id="">
                            <option value="" disabled selected></option>
                            <option value="">test</option>
                        </select>
                    </div>
                </div>



                <div className="product">
                    <img src={apple} alt="" />
                    <div className="container-info-product">
                        <label htmlFor=""><b>produto:</b>maçã</label>
                        <label htmlFor=""><b>preço:</b>R$4,99</label>

                        <select name="" id="">
                            <option value="" disabled selected>Quantidade</option>
                            <option value="">test</option>
                        </select>
                    </div>
                </div>


                <div className="product">
                    <img src={apple} alt="" />
                    <div className="container-info-product">
                        <label htmlFor=""><b>produto:</b>maçã</label>
                        <label htmlFor=""><b>preço:</b>R$4,99</label>

                        <select name="" id="">
                            <option value="" disabled selected></option>
                            <option value="">test</option>
                        </select>
                    </div>
                </div>

                <div className="product">
                    <img src={apple} alt="" />
                    <div className="container-info-product">
                        <label htmlFor=""><b>produto:</b>maçã</label>
                        <label htmlFor=""><b>preço:</b>R$4,99</label>

                        <select name="" id="">
                            <option value="" disabled selected></option>
                            <option value="">test</option>
                        </select>
                    </div>
                </div>


            </div> {/* container-products */}

            <div className="line"></div>
        </main>
    )
}

export default Products