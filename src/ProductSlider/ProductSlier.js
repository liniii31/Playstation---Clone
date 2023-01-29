import './ProductSlider.css';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function ProductSlider() {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 3
        },
        desktop: {
            breakpoint: { max: 3000, min: 1200 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1200, min: 964 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 964, min: 0 },
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
                            <img alt="blog" src="https://press-start.com.au/wp-content/uploads/2022/04/Tomb-Raider.jpg" />
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
                            <img alt="blog" src="https://staticg.sportskeeda.com/editor/2021/05/fdfad-16207470914047-800.jpg" />
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
                            <img alt="blog" src="https://cdn2.unrealengine.com/fortnite-the-kid-larois-wild-dreams-1920x1080-d5f96d1d2dda.jpg" />
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
                            <img alt="blog" src="https://i.ytimg.com/vi/hdRhRdLNSn4/maxresdefault.jpg" />
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
                            <img alt="blog" src="https://blog.playstation.com/tachyon/2023/01/0edaebfbfe3e03e7b4def2dc1ed97e9afac44c1f.png?resize=1088%2C612&crop_strategy=smart" />
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
                            <img alt="blog" src="https://media.contentapi.ea.com/content/dam/ea/starwars/star-wars-jedi-survivor/common/swj-survivor-featured-image-16x9.jpg.adapt.crop16x9.1023w.jpg" />
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
                            <img alt="blog" src="https://blog.playstation.com/tachyon/2023/01/66cd0c4c129d4922cf2765acf03726c75813c942.jpg?resize=1088%2C612&crop_strategy=smart" />
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