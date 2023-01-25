import './ProductSlider.css';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function ProductSlider() {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (
        <>
            <div className='Blog'>
                <div className='blog-heading'>
                    <p>The latest news from PlayStation Blog</p>
                </div>

                <Carousel responsive={responsive} containerClass='blog-slider'>
                    <div className='blog-div'>
                        <div className='blog-img'>
                            <img alt="blog" src="https://www.thevrgrid.com/wp-content/uploads/2022/06/The-Last-Clockwinder-header-2.jpg" />
                        </div>
                        <div className='blog-details'>
                            <div className='blog-details-heading'>The LastClockWinder brings clever automation puzzles to PS VR 2</div>
                            <div className='blog-details-para'>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            </div>
                            <div className='blog-details-author'>
                                <div className='blog-details-author-img'>
                                    <img alt="blogger" src="https://i.pinimg.com/736x/02/de/ed/02deed5ba706e1778fe428ed683cbd1e.jpg" />
                                </div>
                                <div className='blog-details-author-details'>
                                    <div className='author-name'>Matt Blaier</div>
                                    <div className='author-about'>Co-Founder, Pontoco</div>
                                    <div className='author-time'>Jan 19, 2023</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='blog-div'>
                        <div className='blog-img'>
                            <img alt="blog" src="https://mixed-news.com/en/wp-content/uploads/2022/02/Kayak_VR_Mirage_Antarktik_Level.jpg" />
                        </div>
                        <div className='blog-details'>
                            <div className='blog-details-heading'>Kayank VR : Mirage joins the PS VR 2 launch line-up</div>
                            <div className='blog-details-para'>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            </div>
                            <div className='blog-details-author'>
                                <div className='blog-details-author-img'>
                                    <img alt="blogger" src="https://media.nojoto.com/content/media/665428/2020/04/feed/80c05644ba25ca5933a45d65594c5b76/80c05644ba25ca5933a45d65594c5b76_default.jpg" />
                                </div>
                                <div className='blog-details-author-details'>
                                    <div className='author-name'>Leon van Oord</div>
                                    <div className='author-about'>Founder, Better than Life</div>
                                    <div className='author-time'>Jan 19, 2023</div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className='blog-div'>
                        <div className='blog-img'>
                            <img alt="blog" src="https://thurrott.s3.amazonaws.com/wp-content/uploads/sites/2/2023/01/Sony-PSVR2-Launch-Window-Game-lineup.jpg" />
                        </div>
                        <div className='blog-details'>
                            <div className='blog-details-heading'>Kayank VR : Mirage joins the PS VR 2 launch line-up</div>
                            <div className='blog-details-para'>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            </div>
                            <div className='blog-details-author'>
                                <div className='blog-details-author-img'>
                                    <img alt="blogger" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy09SzlAEVUCweVgzbLIPLfQL8uwEJN-2nMw&usqp=CAU" />
                                </div>
                                <div className='blog-details-author-details'>
                                    <div className='author-name'>Leon van Oord</div>
                                    <div className='author-about'>Founder, Better than Life</div>
                                    <div className='author-time'>Jan 19, 2023</div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className='blog-div'>
                        <div className='blog-img'>
                            <img alt="blog" src="https://thurrott.s3.amazonaws.com/wp-content/uploads/sites/2/2023/01/Sony-PSVR2-Launch-Window-Game-lineup.jpg" />
                        </div>
                        <div className='blog-details'>
                            <div className='blog-details-heading'>Kayank VR : Mirage joins the PS VR 2 launch line-up</div>
                            <div className='blog-details-para'>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            </div>
                            <div className='blog-details-author'>
                                <div className='blog-details-author-img'>
                                    <img alt="blogger" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy09SzlAEVUCweVgzbLIPLfQL8uwEJN-2nMw&usqp=CAU" />
                                </div>
                                <div className='blog-details-author-details'>
                                    <div className='author-name'>Leon van Oord</div>
                                    <div className='author-about'>Founder, Better than Life</div>
                                    <div className='author-time'>Jan 19, 2023</div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className='blog-div'>
                        <div className='blog-img'>
                            <img alt="blog" src="https://thurrott.s3.amazonaws.com/wp-content/uploads/sites/2/2023/01/Sony-PSVR2-Launch-Window-Game-lineup.jpg" />
                        </div>
                        <div className='blog-details'>
                            <div className='blog-details-heading'>Kayank VR : Mirage joins the PS VR 2 launch line-up</div>
                            <div className='blog-details-para'>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            </div>
                            <div className='blog-details-author'>
                                <div className='blog-details-author-img'>
                                    <img alt="blogger" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy09SzlAEVUCweVgzbLIPLfQL8uwEJN-2nMw&usqp=CAU" />
                                </div>
                                <div className='blog-details-author-details'>
                                    <div className='author-name'>Leon van Oord</div>
                                    <div className='author-about'>Founder, Better than Life</div>
                                    <div className='author-time'>Jan 19, 2023</div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className='blog-div'>
                        <div className='blog-img'>
                            <img alt="blog" src="https://thurrott.s3.amazonaws.com/wp-content/uploads/sites/2/2023/01/Sony-PSVR2-Launch-Window-Game-lineup.jpg" />
                        </div>
                        <div className='blog-details'>
                            <div className='blog-details-heading'>Kayank VR : Mirage joins the PS VR 2 launch line-up</div>
                            <div className='blog-details-para'>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            </div>
                            <div className='blog-details-author'>
                                <div className='blog-details-author-img'>
                                    <img alt="blogger" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy09SzlAEVUCweVgzbLIPLfQL8uwEJN-2nMw&usqp=CAU" />
                                </div>
                                <div className='blog-details-author-details'>
                                    <div className='author-name'>Leon van Oord</div>
                                    <div className='author-about'>Founder, Better than Life</div>
                                    <div className='author-time'>Jan 19, 2023</div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className='blog-div'>
                        <div className='blog-img'>
                            <img alt="blog" src="https://thurrott.s3.amazonaws.com/wp-content/uploads/sites/2/2023/01/Sony-PSVR2-Launch-Window-Game-lineup.jpg" />
                        </div>
                        <div className='blog-details'>
                            <div className='blog-details-heading'>Kayank VR : Mirage joins the PS VR 2 launch line-up</div>
                            <div className='blog-details-para'>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            </div>
                            <div className='blog-details-author'>
                                <div className='blog-details-author-img'>
                                    <img alt="blogger" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy09SzlAEVUCweVgzbLIPLfQL8uwEJN-2nMw&usqp=CAU" />
                                </div>
                                <div className='blog-details-author-details'>
                                    <div className='author-name'>Leon van Oord</div>
                                    <div className='author-about'>Founder, Better than Life</div>
                                    <div className='author-time'>Jan 19, 2023</div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className='blog-div'>
                        <div className='blog-img'>
                            <img alt="blog" src="https://thurrott.s3.amazonaws.com/wp-content/uploads/sites/2/2023/01/Sony-PSVR2-Launch-Window-Game-lineup.jpg" />
                        </div>
                        <div className='blog-details'>
                            <div className='blog-details-heading'>Kayank VR : Mirage joins the PS VR 2 launch line-up</div>
                            <div className='blog-details-para'>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            </div>
                            <div className='blog-details-author'>
                                <div className='blog-details-author-img'>
                                    <img alt="blogger" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy09SzlAEVUCweVgzbLIPLfQL8uwEJN-2nMw&usqp=CAU" />
                                </div>
                                <div className='blog-details-author-details'>
                                    <div className='author-name'>Leon van Oord</div>
                                    <div className='author-about'>Founder, Better than Life</div>
                                    <div className='author-time'>Jan 19, 2023</div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className='blog-div'>
                        <div className='blog-img'>
                            <img alt="blog" src="https://thurrott.s3.amazonaws.com/wp-content/uploads/sites/2/2023/01/Sony-PSVR2-Launch-Window-Game-lineup.jpg" />
                        </div>
                        <div className='blog-details'>
                            <div className='blog-details-heading'>Kayank VR : Mirage joins the PS VR 2 launch line-up</div>
                            <div className='blog-details-para'>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            </div>
                            <div className='blog-details-author'>
                                <div className='blog-details-author-img'>
                                    <img alt="blogger" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy09SzlAEVUCweVgzbLIPLfQL8uwEJN-2nMw&usqp=CAU" />
                                </div>
                                <div className='blog-details-author-details'>
                                    <div className='author-name'>Leon van Oord</div>
                                    <div className='author-about'>Founder, Better than Life</div>
                                    <div className='author-time'>Jan 19, 2023</div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className='blog-div'>
                        <div className='blog-img'>
                            <img alt="blog" src="https://thurrott.s3.amazonaws.com/wp-content/uploads/sites/2/2023/01/Sony-PSVR2-Launch-Window-Game-lineup.jpg" />
                        </div>
                        <div className='blog-details'>
                            <div className='blog-details-heading'>Kayank VR : Mirage joins the PS VR 2 launch line-up</div>
                            <div className='blog-details-para'>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            </div>
                            <div className='blog-details-author'>
                                <div className='blog-details-author-img'>
                                    <img alt="blogger" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy09SzlAEVUCweVgzbLIPLfQL8uwEJN-2nMw&usqp=CAU" />
                                </div>
                                <div className='blog-details-author-details'>
                                    <div className='author-name'>Leon van Oord</div>
                                    <div className='author-about'>Founder, Better than Life</div>
                                    <div className='author-time'>Jan 19, 2023</div>
                                </div>
                            </div>
                        </div>

                    </div>
                </Carousel>
            </div>
        </>
    )
}

export default ProductSlider;