/* === COMPARE SPECIFICATION === */
var $adsinpagefullscreen;
function AdsInpageFullScreen() {
    var breakPointMobile = 991;
    var windowPrototype = {
        wdHeight: function () {
            return window.screen.height;
        },
        wdWidth: function () {
            return (window.screen.width - 50);
        },
        bdWidth: function () {
            var a = document;
            return bodyWidth = Math.max(Math.max(a.body.scrollWidth, a.documentElement.scrollWidth), Math.max(a.body.offsetWidth, a.documentElement.offsetWidth),
                Math.max(a.body.clientWidth, a.documentElement.clientWidth))
        },
        bdHeight: function () {
            var a = document;
            return Math.max(Math.max(a.body.scrollHeight, a.documentElement.scrollHeight), Math.max(a.body.offsetHeight, a.documentElement.offsetHeight), Math.max(a.body.clientHeight, a.documentElement.clientHeight))
        }
    }
    this.initClass = function (target) {
        var wdWidth = window.innerWidth;
        var div_maincontains = target ? target : 'qcbody';
        var pempty = document.querySelectorAll('p:empty');
        for (var i = pempty.length - 1; i > -1; i--) {
            pempty[i].parentNode.removeChild(pempty[i]);
        }
        var articleLocator = document.getElementById(div_maincontains);
        var _ckdiv = Math.floor(articleLocator.childElementCount * 2 / 3);
        var _element = articleLocator.childNodes[_ckdiv];
        var position = wdWidth > breakPointMobile ? 'absolute' : 'fixed';
        this.findTopLength(div_maincontains, _element);
        if (!document.getElementById('admClose')) {
            var _closebottom = '<span id="admClose" style="position: ' + position + ' !important; color: #ffffff !important; width: 30px; height: 30px; top:40px; right: 10px; z-index: 1; display: flex; align-items: center;justify-content: center;  padding: 3px 12px; border: 1px solid #b0b8b654; background: rgba(0, 0, 0, 0.5); font-size: 12px !important; border-radius: 50%;cursor:pointer;">X</span>';
            $("#admbg_1").append(_closebottom);
            // Event close ads
            $("#admClose").on('click touch', function () {
                $('#admbg, #admbg-adm').css('display', 'none');
            })
        }
    };

    this.findTopLength = function (target, curNode) {
        var contentTop = 'Giới thiệu';
        var admbg = document.createElement("div");
        var wdWidth = window.innerWidth;
        var wdHeight = wdWidth > breakPointMobile ? 'unset' : windowPrototype.wdHeight();
        var positionabsulute = wdWidth > breakPointMobile ? 'relative' : 'absolute';
        var positionfixed = wdWidth > breakPointMobile ? 'relative' : 'fixed';
        var styleIframeDesktop = '#adm_inpage iframe{width: 100%; height: 267px; border: none;} #adm_inpage{padding: 30px 0px;}#adm_inpage{position: relative;}#adm_inpage::before{position: absolute;content: "' + contentTop + '";color: #666;top: 10px;left: 50%;  font-size: 14px;display: inline-block;transform: translateX(-50%);}#adm-inpage-h .desktop{display: block;}#adm-inpage-h .mobile{display: none;}';
        var styleIframeMobile = '#admbg-adm img{width: 100%; margin: 0px;} #admbg::after {position: absolute; content: "Đọc tiếp"; display: "block"; bottom: 0px; left: 50%; transform: translateX(-50%); padding: 4px 10px; background-color: rgba(0,0,0,.5); color: #fff; font-size: 12px; border-top-left-radius: 5px;border-top-right-radius: 5px;} #adm_inpage iframe{width: 100%; height: 100%;border: none;}#adm-inpage-h .desktop{display: none;}#adm-inpage-h .mobile{display: block;}';
        var styleIframe = wdWidth > breakPointMobile ? styleIframeDesktop : styleIframeMobile;
        admbg.id = "admbg-adm";
        admbg.style.zIndex = '9';
        admbg.style.display = 'block';
        admbg.style.clear = 'both';
        admbg.style.position = 'relative';
        admbg.style.overflow = 'hidden';
        admbg.style.margin = '0px 0px 15px 0px';
        admbg.innerHTML = ` 
        <style>${styleIframe}</style>
        <div id="admbg" style="height: ${wdHeight}px;">
        <div id="admbg_1" style="position: ${positionabsulute};width: 100%;height: ${wdHeight}px;clip: rect(0 ${wdWidth}px ${wdHeight}px -20px);">
        <div id="adm_inpage" style="display: inline-block;width: 100%;height: ${wdHeight}px;position: ${positionfixed};top: 0;left: 0;-webkit-backface-visibility: hidden;-webkit-transform: translate3d(0,0,0);">
            <div id="adm-inpage-h" style="display: block;height:${wdHeight}px;position: relative;">
            </div>
        </div>`;
        document.getElementById(target).insertBefore(admbg, curNode);
    }

    this.renderImage = function (url, link, title) {
        if (!document.getElementById('admbg')) this.initClass();
        var html_inpage = '<a href="' + link + '" title="' + title + '"><img src="' + url + '" alt="' + title + '"/></a>';
        document.getElementById("admbg").innerHTML = html_inpage;
    }

    this.renderHtml = function (content) {
        if (!document.getElementById('admbg')) this.initClass();
        document.getElementById("adm-inpage-h").innerHTML = content;
    }
}

$(document).ready(function () {
    $adsinpagefullscreen = new AdsInpageFullScreen();
})