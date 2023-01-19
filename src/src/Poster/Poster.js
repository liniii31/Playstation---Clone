import './Poster.css';

function Poster(){
    return (
        <>
            <div className='poster'>
                <div className='color-bg'></div>
                <div className='poster-bg'></div>
                <div className='poster-details'>
                    <div className='product-heading'>THE LAST OF US PART 1</div>
                    <div className='product-available'>Available Now</div>
                    <div className='product-para'>Relive the game that started it all - rebuilt for PS5</div>
                    <div className='poster-btn-div'>
                        <button className='poster-btn'>Buy now</button>
                    </div>
                    
                </div>
            </div>
        </>
    )
}

export default Poster;