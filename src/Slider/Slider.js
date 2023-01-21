import './Slider.css';

function Slider() {
    function next(e) {
        let width = document.getElementsByClassName('release-1')[0].clientWidth;
        document.getElementsByClassName('releases-div')[0].scrollLeft += width;

    }
    function prev(e) {
        let width = document.getElementsByClassName('release-1')[0].clientWidth;
        document.getElementsByClassName('releases-div')[0].scrollLeft -= width;

    }
    return (
        <>
            <div className='releases-div'>
                <div className='release-1'>
                    <div className='release-details'>
                        <div>
                            <div className='release-details-heading'>New Releases</div>
                            <div className='release-details-para'>Great PS5 and PS4 games available now</div>
                        </div>
                        <div className='slide-btns'>
                            <button className='disabled-btn'><i className="bi bi-chevron-left"></i></button>
                            <button id="next-btn" className='slider-btn' onClick={e => next(e)}><i className="bi bi-chevron-right"></i></button>
                        </div>
                    </div>
                    <div className='release'>
                        <div className='release-poster-name'>
                            <div className='poster-img'>
                                <img alt="poster" src="https://fifauteam.com/images/covers/fifa23/standard-ng.webp" />
                            </div>
                            <div className='poster-name'>
                                <p>EA SPORTS FIFA 23</p>
                            </div>
                        </div>
                        <div className='release-poster-name'>
                            <div className='poster-img'>
                                <img alt="poster" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCZlFWIgs-iiPsEuReAKrX59ygTFlIM4C4YPsU0zJLu_OTll7-STzKxUFbwVCoeXIISpc&usqp=CAU" />
                            </div>
                            <div className='poster-name'>
                                <p>The Callisto Protocol</p>
                            </div>
                        </div>
                        <div className='release-poster-name'>
                            <div className='poster-img'>
                                <img alt="poster" src="https://image.api.playstation.com/vulcan/ap/rnd/202205/2701/LNbHEfP0e1ugSlfmfYGHFi3a.png" />
                            </div>
                            <div className='poster-name'>
                                <p>Marvel's Midnight Suns</p>
                            </div>
                        </div>
                        <div className='release-poster-name'>
                            <div className='poster-img'>
                                <img alt="poster" src="https://image.api.playstation.com/vulcan/ap/rnd/202107/3100/HO8vkO9pfXhwbHi5WHECQJdN.png" />
                            </div>
                            <div className='poster-name'>
                                <p>Horizon forbiden West</p>
                            </div>
                        </div>
                        <div className='release-poster-name'>
                            <div className='poster-img'>
                                <img alt="poster" src="https://image.api.playstation.com/vulcan/ap/rnd/202108/0410/0Jz6uJLxOK7JOMMfcfHFBi1D.png" />
                            </div>
                            <div className='poster-name'>
                                <p>Elden Ring</p>
                            </div>
                        </div>
                        <div className='release-poster-name'>
                            <div className='poster-img'>
                                <img alt="poster" src="https://image.api.playstation.com/vulcan/ap/rnd/202109/2821/SZRc7OMwGgv8lJXIOlYyuBU2.jpg" />
                            </div>
                            <div className='poster-name'>
                                <p>God Of War Ragnarok</p>
                            </div>
                        </div>
                        <div className='release-poster-name'>
                            <div className='poster-img'>
                                <img alt="poster" src="https://image.api.playstation.com/vulcan/ap/rnd/202206/0720/eEczyEMDd2BLa3dtkGJVE9Id.png" />
                            </div>
                            <div className='poster-name'>
                                <p>The Last of Us Part 1</p>
                            </div>
                        </div>
                        <div className='release-poster-name'>
                            <div className='poster-img'>
                                <img alt="poster" src="https://image.api.playstation.com/vulcan/ap/rnd/202205/2017/Ry0b7FGqNjHQvNRpRE9RjU3I.png" />
                            </div>
                            <div className='poster-name'>
                                <p>Call Of Duty</p>
                            </div>
                        </div>
                        <div className='release-poster-name'>
                            <div className='poster-img'>
                                <img alt="poster" src="https://image.api.playstation.com/vulcan/ap/rnd/202209/0913/rxBc04d5T8hsHzpekdooSPn5.png" />
                            </div>
                            <div className='poster-name'>
                                <p>Need For Speed Unbound</p>
                            </div>
                        </div>
                        <div className='release-poster-name'>
                            <div className='poster-img'>
                                <img alt="poster" src="https://assets-prd.ignimgs.com/2022/06/23/overwatch-2-button-fin-1656022954568.jpg" />
                            </div>
                            <div className='poster-name'>
                                <p>Overwatch 2</p>
                            </div>
                        </div>
                        <div className='release-poster-name'>
                            <div className='poster-img'>
                                <img alt="poster" src="https://image.api.playstation.com/vulcan/ap/rnd/202106/1717/xIQOO3Mo5YMnIm81qkH3y5kJ.png" />
                            </div>
                            <div className='poster-name'>
                                <p>A plauge tale : Requiem</p>
                            </div>
                        </div>
                        <div className='release-poster-name'>
                            <div className='poster-img'>
                                <img alt="poster" src="https://image.api.playstation.com/vulcan/ap/rnd/202202/2806/y4liLwBLXmhWHIvakDIMG1T1.jpg" />
                            </div>
                            <div className='poster-name'>
                                <p>Gran Turismo 7</p>
                            </div>
                        </div>

                    </div>
                </div>
                <div className='release-2'>
                    <div className='release-details'>
                        <div>
                            <div className='release-details-heading'>Coming Soon</div>
                            <div className='release-details-para'>Amazing new experiences are just around the corner</div>
                        </div>
                        <div className='slide-btns-2'>
                            <button id='prev-btn' className='slider-btn' onClick={e => prev(e)}><i className="bi bi-chevron-left"></i></button>
                            <button className='disabled-btn'><i className="bi bi-chevron-right"></i></button>
                        </div>
                    </div>
                    <div className='release'>
                        <div className='release-poster-name'>
                            <div className='poster-img'>
                                <img alt="poster" src="https://www.streetfighter.com/6/assets/images/sns_6.jpg" />
                            </div>
                            <div className='poster-name'>
                                <p>Street Fighter 6</p>
                            </div>
                        </div>
                        <div className='release-poster-name'>
                            <div className='poster-img'>
                                <img alt="poster" src="https://images.ctfassets.net/usf1vwtuqyxm/6QaFhrwqv2RhO8xfXaB09/4cc283bbb708db887a21141b2bce50d1/hog-leg-DELUXE_Key_Art_WIDE.jpg" />
                            </div>
                            <div className='poster-name'>
                                <p>Hogwarts Legacy</p>
                            </div>
                        </div>
                        <div className='release-poster-name'>
                            <div className='poster-img'>
                                <img alt="poster" src="https://image.api.playstation.com/vulcan/ap/rnd/202211/3017/Oo1B84A7BLCT157YFSxjtwG0.png" />
                            </div>
                            <div className='poster-name'>
                                <p>Diablo</p>
                            </div>
                        </div>
                        <div className='release-poster-name'>
                            <div className='poster-img'>
                                <img alt="poster" src="https://assets-prd.ignimgs.com/2022/07/07/skull-and-bones-button-fin-1657218024358.jpg" />
                            </div>
                            <div className='poster-name'>
                                <p>Skull And Bones</p>
                            </div>
                        </div>
                        <div className='release-poster-name'>
                            <div className='poster-img'>
                                <img alt="poster" src="https://cdn.akamai.steamstatic.com/steam/apps/2124490/capsule_616x353.jpg?t=1666227924" />
                            </div>
                            <div className='poster-name'>
                                <p>Silent Hill 2</p>
                            </div>
                        </div>
                        <div className='release-poster-name'>
                            <div className='poster-img'>
                                <img alt="poster" src="https://media.contentapi.ea.com/content/dam/eacom/dead-space/images/2022/10/dead-space-featured-image.adapt.crop191x100.1200w" />
                            </div>
                            <div className='poster-name'>
                                <p>Dead Space</p>
                            </div>
                        </div>
                        <div className='release-poster-name'>
                            <div className='poster-img'>
                                <img alt="poster" src="https://image.api.playstation.com/vulcan/ap/rnd/202203/0923/Fw632VKJXMvPN8IxAOY8lXPt.jpg" />
                            </div>
                            <div className='poster-name'>
                                <p>Forspoken</p>
                            </div>
                        </div>
                        <div className='release-poster-name'>
                            <div className='poster-img'>
                                <img alt="poster" src="https://image.api.playstation.com/vulcan/ap/rnd/202210/0712/cWZlv5HCWi4sGKuwVRO4c8Xg.png" />
                            </div>
                            <div className='poster-name'>
                                <p>Resident Evil 4</p>
                            </div>
                        </div>
                        <div className='release-poster-name'>
                            <div className='poster-img'>
                                <img alt="poster" src="https://image.api.playstation.com/vulcan/img/rnd/202011/1107/FgI3JjloCkThAgUc7nPYtwp3.png" />
                            </div>
                            <div className='poster-name'>
                                <p>Little Devil Inside</p>
                            </div>
                        </div>
                        <div className='release-poster-name'>
                            <div className='poster-img'>
                                <img alt="poster" src="https://upload.wikimedia.org/wikipedia/en/thumb/8/80/Wild_Hearts_cover_art.jpg/220px-Wild_Hearts_cover_art.jpg" />
                            </div>
                            <div className='poster-name'>
                                <p>WILD HEARTS</p>
                            </div>
                        </div>
                        <div className='release-poster-name'>
                            <div className='poster-img'>
                                <img alt="poster" src="https://cdn.cloudflare.steamstatic.com/steam/apps/315210/capsule_616x353.jpg?t=1670605228" />
                            </div>
                            <div className='poster-name'>
                                <p>Suicide Squad</p>
                            </div>
                        </div>
                        <div className='release-poster-name'>
                            <div className='poster-img'>
                                <img alt="poster" src="https://square.images.gamespress.com/Content/Artwork/NickNack/Square-Enix/artwork/2020/09/16211625-23e88718-0486-47ca-a363-ba6731d7c221/FINAL_FANTASY_XVI_Logo_Black_EN.png?w=600&mode=max&otf=y&quality=80&format=png&bgcolor=transparent&ex=2023-03-01+03%3A00%3A00&sky=9aa2d3de2906b481190c205a992dd1491fe65ad18e7ee3e1a5eb99b89e8a946f" />
                            </div>
                            <div className='poster-name'>
                                <p>Final Fantasy XVI</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Slider;