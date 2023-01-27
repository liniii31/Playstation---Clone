import './Footer.css';

function Footer() {
    return (
        <>
            <div className='social-medias'>
                <div className='social-media'><a href="https://twitter.com/playstationin" target="_blank" rel="noopener noreferrer"><i class="bi bi-twitter"></i></a></div>
                <div className='social-media'><a href="https://www.facebook.com/playstation/" target="_blank" rel="noopener noreferrer"><i class="bi bi-facebook"></i></a></div>
                <div className='social-media'><a href="https://www.instagram.com/playstation/" target="_blank" rel="noopener noreferrer"><i class="bi bi-instagram"></i></a></div>
                <div className='social-media'><a href="https://www.youtube.com/channel/UC-2Y8dQb0S6DtpxNgAKoJKA" target="_blank" rel="noopener noreferrer"><i class="bi bi-youtube"></i></a></div>
            </div>
            <div className='footer-about'>
                <div className='footer-left'>
                    <div>
                        <p className='footer-icon'><i class="bi bi-playstation"></i></p>
                        <p><i class="bi bi-globe"></i>Country / Region : India</p>
                    </div>
                    <div>
                        Website ©2023 Sony Interactive Entertainment Europe Limited. All content, games titles, trade names and/or trade dress, trademarks, artwork and associated imagery are trademarks and/or copyright material of their respective owners. All rights reserved.
                    </div>
                </div>
                <div className='footer-right'>
                    <div>
                        <p>Support</p>
                        <p>Privacy and cookies</p>
                        <p>Website terms of use</p>
                        <p>PlayStation Studios</p>
                        <p>Legal</p>
                        <p>About SIE</p>
                        <p>PlayStation and the environment</p>
                    </div>
                    <div>
                        <p>PSN terms of service</p>
                        <p>PS Store cancellation policy</p>
                        <p>Health warning</p>
                        <p>Age ratings</p>
                        <p>Software Usage Terms</p>
                        <p>PlayStation careers</p>
                        <p>Site map</p>
                    </div>
                    <div>
                        <p>Facebook</p>
                        <p>Twitter</p>
                        <p>Instagram</p>
                        <p>Youtube</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer;