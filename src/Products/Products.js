import './Products.css';

function Products() {
    return (
        <>
            <div className='products'>
                <div className='products-heading'>
                    Explore PlayStation 4
                </div>
                <div className='products-para'>
                    Incredible games, non-stop entertainment. There's never been a better time to enjoy PS4.
                </div>
                <div className='products-div'>
                    <div className='product'>
                        <img alt="product" src="https://gmedia.playstation.com/is/image/SIEPDC/ps4-product-thumbnail-01-en-14sep21?$facebook$" />
                        <div className='product-details'>
                            <div className='heading'>PlayStation 4</div>
                            <div className='para'>Incredible games live on PS4, with 1TB storage.</div>
                            <button className='product-btn'>Learn more</button>
                        </div>
                    </div>
                    <div className='product'>
                        <img alt="product" src="https://api.time.com/wp-content/uploads/2016/10/playstation-vr-51.jpg?quality=85&w=2400" />
                        <div className='product-details'>
                            <div className='heading'>PlayStation VR</div>
                            <div className='para'>Over 500 games and experiences and accounting. See them all.</div>
                            <button className='product-btn'>Learn more</button>
                        </div>
                    </div>
                    <div className='product'>
                        <img alt="product" src="https://m.media-amazon.com/images/I/41QwbBaOfnL._SL1000_.jpg" />
                        <div className='product-details'>
                            <div className='heading'>Accessories</div>
                            <div className='para'>Enhance your PS4 experience with a range of accessories.</div>
                            <button className='product-btn'>Learn more</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Products;