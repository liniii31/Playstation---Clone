import './Poster.css';

function Poster() {
    const scrollOffset = 0;
    const scrollElement = document.querySelector(".poster-details");
    const elementInView = (el, offset = 0) => {
        const elementTop = el.getBoundingClientRect().top;
        return (
            elementTop <=
            ((window.innerHeight || document.documentElement.clientHeight) - offset)
        );
    };
    const displayScrollElement = () => {
        scrollElement.classList.add('scrolled');
    }
    const hideScrollElement = () => {
        scrollElement.classList.remove('scrolled');
    }
    const handleScrollAnimation = () => {
        if (elementInView(scrollElement, scrollOffset)) {
            displayScrollElement();
        } else {
            hideScrollElement();
        }
    }
    window.addEventListener('scroll', () => {
        handleScrollAnimation();
    })
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