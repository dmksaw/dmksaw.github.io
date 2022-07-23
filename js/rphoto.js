function obcbo() {
    if (document.getElementById("web_bg").getAttribute("style") == "background: url()" || document.getElementById("web_bg").getAttribute("style") == null) {
        var background_urls = [
            '/img/topimg1.png',
            '/img/topimg2.png',
            '/img/topimg3.png',
            '/img/topimg4.png',
            '/img/topimg5.png'
        ]
        var index = Math.floor((Math.random() * background_urls.length));
        var urlphoto = ('background-image:url(' + background_urls[index] + ')');
        document.getElementById("web_bg").style = urlphoto;
    }
}