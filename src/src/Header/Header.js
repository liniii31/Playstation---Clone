import './Header.css';
import "bootstrap-icons/font/bootstrap-icons.css";

function Header() {
    function search(e){
        document.getElementsByClassName('search-bg')[0].style.display="block";
    }
    function close(e){
        if(e.target.id!=="search-inp" && e.target.id!=="popup-search"){
            document.getElementsByClassName('search-bg')[0].style.display="none";
        }
        
    }
    function updateDropdowns(id1,id2){
        let dropdowns = document.getElementsByClassName('nav-drop');
        let navitem = document.getElementsByClassName('nav-item')
        Array.from(dropdowns).forEach(element => {
            if(id1!==element.id){
                element.style.display="none";
            }            
        });
        Array.from(navitem).forEach(element =>{
            if(id2!==element.id){
                element.style.color="black";
            }
        })
    }    
    function handleNav(e){        
        if(e.target.id==="item-1"){
            updateDropdowns("games","item-1");
            if(document.getElementById('games').style.display==="none"){
                document.getElementById('games').style.display="block";
                document.getElementById('item-1').style.color="#1a4ed0";
            }else{
                document.getElementById('games').style.display="none";
                document.getElementById('item-1').style.color="black";
            }
        }
        if(e.target.id==="item-2"){
            updateDropdowns("hardware","item-2");
            if(document.getElementById('hardware').style.display==="none"){
                document.getElementById('hardware').style.display="block";
                document.getElementById('item-2').style.color="#1a4ed0";
            }else{
                document.getElementById('hardware').style.display="none";
                document.getElementById('item-2').style.color="black";
            }
        }
        if(e.target.id==="item-3"){
            updateDropdowns("service","item-3");
            if(document.getElementById('service').style.display==="none"){
                document.getElementById('service').style.display="block";
                document.getElementById('item-3').style.color="#1a4ed0";
            }else{
                document.getElementById('service').style.display="none";
                document.getElementById('item-3').style.color="black";
            }
        }
        if(e.target.id==="item-4"){
            updateDropdowns("news","item-4");
            if(document.getElementById('news').style.display==="none"){
                document.getElementById('news').style.display="block";
                document.getElementById('item-4').style.color="#1a4ed0";
            }else{
                document.getElementById('news').style.display="none";
                document.getElementById('item-4').style.color="black";
            }
        }
        if(e.target.id==="item-5"){
            updateDropdowns("shop","item-5");
            if(document.getElementById('shop').style.display==="none"){
                document.getElementById('shop').style.display="block";
                document.getElementById('item-5').style.color="#1a4ed0";
            }else{
                document.getElementById('shop').style.display="none";
                document.getElementById('item-5').style.color="black";
            }
        }
        if(e.target.id==="item-6"){
            updateDropdowns("support","item-6");
            if(document.getElementById('support').style.display==="none"){
                document.getElementById('support').style.display="block";
                document.getElementById('item-6').style.color="#1a4ed0";
            }else{
                document.getElementById('support').style.display="none";
                document.getElementById('item-6').style.color="black";
            }
        }
    }
    return (
        <>
            <div className="brand-bar">
                <div>SONY</div>
            </div>
            <div className="navbar">
                <div className="nav-left">
                    <div className="logo">
                        <img src="https://www.logo.wine/a/logo/PlayStation/PlayStation-Icon-Logo.wine.svg" alt="logo" />
                    </div>
                    <div className="nav-item" id="item-1" onClick={e=>handleNav(e)}>Games&nbsp;<i className="bi bi-chevron-down"></i></div>
                    <div className="nav-item" id="item-2" onClick={e=>handleNav(e)}>Hardware&nbsp;<i className="bi bi-chevron-down"></i></div>
                    <div className="nav-item" id="item-3" onClick={e=>handleNav(e)}>Services&nbsp;<i className="bi bi-chevron-down"></i></div>
                    <div className="nav-item" id="item-4" onClick={e=>handleNav(e)}>News&nbsp;<i className="bi bi-chevron-down"></i></div>
                    <div className="nav-item" id="item-5" onClick={e=>handleNav(e)}>Shop&nbsp;<i className="bi bi-chevron-down"></i></div>
                    <div className="nav-item" id="item-6" onClick={e=>handleNav(e)}>Support&nbsp;<i className="bi bi-chevron-down"></i></div>
                </div>
                <div className="nav-right">
                    <button className="signup">Sign up</button>
                    <div className="search-icon" onClick={e=>search(e)}>
                        <i className="bi bi-search"></i>
                    </div>
                </div>
            </div>
            <div id="games" className="nav-drop">
                <div className="top">
                    <img alt="games" src={require("./ps5.png")}/>
                    <img alt="games" id="PS4" src={require("./ps4.png")}/>
                    <img alt="games" id="PSVR" src={require("./psvr.png")}/>
                    <img alt="games" id="PSVR" src={require("./psplus.png")}/>
                    <img alt="games" id="PSVR" src={require("./buy.png")}/>
                </div>
                <div className="down">
                    <ul>
                        <li>PlayStation Indies</li>
                        <li>PS4 games on PS5</li>
                        <li>Free to play</li>
                        <li>PlayStation games on PC</li>
                        <li>Deals & Offers</li>
                    </ul>
                </div>
            </div>
            <div id="hardware" className="nav-drop">
                <div className="top">
                    <img alt="games" src={require("./ps5.png")}/>
                    <img alt="games" id="PS4" src={require("./ps4.png")}/>
                    <img alt="games" id="PSVR" src={require("./ps4pro.png")}/>
                    <img alt="games" id="PSVR" src={require("./psvr2.png")}/>                    
                </div>
                <div className="down">
                    <ul>
                        <li>DualSense wireless controller</li>
                        <li>PULSE 3D wireless headset</li>
                        <li>DUALSHOCK4 wireless controller</li>
                        <li>PS5 & PS4 accessories</li>
                        <li>PlayStation VR</li>
                    </ul>
                </div>
            </div>
            <div id="service" className="nav-drop">
                <div className="top">
                    <img alt="games" src={require("./psplus.png")}/>                                      
                </div>
                <div className="down">
                    <ul>
                        <li>PS5 entertainment</li>
                        <li>PS4 entertainment</li>                        
                    </ul>
                </div>
            </div>
            <div id="news" className="nav-drop">
                <div className="top">
                    <img alt="games" src={require("./psblog.png")}/>
                    <img alt="games" id="PS4" src={require("./calendar.png")}/>                                        
                </div>
                <div className="down">
                    <ul>
                        <li>Accessibility</li>
                        <li>Privacy & Safety</li>                        
                    </ul>
                </div>
            </div>
            <div id="shop" className="nav-drop">
                <div className="top">
                    <img alt="games" src={require("./shop.png")}/>                                                           
                </div>
                <div className="down">
                    <ul>
                        <li>New Releases</li>
                        <li>Latest discounts</li>
                        <li>Collections</li> 
                        <li>Buy gift card</li> 
                        <li>Subscribe to PS Plus</li>                         
                    </ul>
                </div>
            </div>
            <div id="support" className="nav-drop">
                <div className="top">
                    <img alt="games" src={require("./support.png")}/>
                    <img alt="games" id="PS4" src={require("./pnsstatus.png")}/>                                                           
                </div>
                <div className="down">
                    <ul>
                        <li>Account</li>
                        <li>Store</li>
                        <li>Subscriptions</li> 
                        <li>Games</li> 
                        <li>Hardware</li>                         
                    </ul>
                </div>
            </div>
            <div className='search-bg' onClick={e=>close(e)}>
                <div className='search-popup'>
                    <input id="search-inp" type="text" placeholder='Search...'/><label id="popup-search"><i className="bi bi-search"></i></label>
                </div>
            </div>
        </>
    )
}

export default Header;