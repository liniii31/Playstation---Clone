import "./Carousel.css";

function Carousel() {
    const images = ["https://wallpapercave.com/wp/wp11775952.jpg", "https://images.alphacoders.com/117/1173124.jpg", "https://images3.alphacoders.com/127/1274186.jpg", "https://images3.alphacoders.com/641/thumb-1920-641193.jpg"];
    let i = 1;
    function updateimages() {
        Array.from(document.getElementsByClassName('bg-image')).forEach(ele => {
            ele.style.opacity = "0.5";
            ele.style.border = "none";
        })
    }
    let change = setInterval(function () {
        updateimages();
        let imageHead = document.getElementById('changing-bg');
        imageHead.style.backgroundImage = "url(" + images[i] + ")";
        if (i === 0) {
            document.getElementById('bg-1').style.opacity = "1";
            document.getElementById('bg-1').style.border = "4px solid #1a4ed0";
        } else if (i === 1) {
            document.getElementById('bg-2').style.opacity = "1";
            document.getElementById('bg-2').style.border = "4px solid #1a4ed0";
        } else if (i === 2) {
            document.getElementById('bg-3').style.opacity = "1";
            document.getElementById('bg-3').style.border = "4px solid #1a4ed0";
        } else if (i === 3) {
            document.getElementById('bg-4').style.opacity = "1";
            document.getElementById('bg-4').style.border = "4px solid #1a4ed0";
        }
        i = i + 1;
        if (i === images.length) {
            i = 0;
        }
    }, 10000);
    function clickImage(e) {
        clearInterval(change);
        updateimages();
        document.getElementById(e.target.id).style.opacity = "1";
        document.getElementById(e.target.id).style.border = "4px solid #1a4ed0";
        if (e.target.id === "bg-1") {
            let imageHead = document.getElementById('changing-bg');
            imageHead.style.backgroundImage = "url(" + images[0] + ")";
        } else if (e.target.id === "bg-2") {
            let imageHead = document.getElementById('changing-bg');
            imageHead.style.backgroundImage = "url(" + images[1] + ")";

        } else if (e.target.id === "bg-3") {
            let imageHead = document.getElementById('changing-bg');
            imageHead.style.backgroundImage = "url(" + images[2] + ")";

        } else if (e.target.id === "bg-4") {
            let imageHead = document.getElementById('changing-bg');
            imageHead.style.backgroundImage = "url(" + images[3] + ")";

        }
    }
    return (
        <>
            <div id="changing-bg"></div>
            <div className="bg-images">
                <button id="bg-1" className="bg-image" onClick={e => clickImage(e)}></button>
                <button id="bg-2" className="bg-image" onClick={e => clickImage(e)}></button>
                <button id="bg-3" className="bg-image" onClick={e => clickImage(e)}></button>
                <button id="bg-4" className="bg-image" onClick={e => clickImage(e)}></button>
            </div>
        </>
    )
}

export default Carousel;