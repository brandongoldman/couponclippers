function clipAll() {
    const t = document.querySelectorAll("button.p-coupon-button:not([aria-checked])").length;
    t > 0 && Array.from(document.querySelectorAll("button.p-coupon-button:not([aria-checked])")).slice(0, 5).forEach(t => t.click()), t > 5 ? setTimeout(clipAll, 1e3) : document.querySelector('button[title="Load More"]') && (document.querySelector('button[title="Load More"]').click(), setTimeout(clipAll, 3e3))
}
var _gaq = _gaq || [];
_gaq.push(["_setAccount", "UA-600868-4"]), _gaq.push(["_trackPageview"]),
    function() {
        var t = document.createElement("script");
        t.src = ("https:" == document.location.protocol ? "https://ssl" : "http://www") + ".google-analytics.com/ga.js", t.setAttribute("async", "true"), document.documentElement.firstChild.appendChild(t)
    }(), "www.publix.com" === window.location.host && "/savings/digital-coupons" === window.location.pathname || (window.location = "https://www.publix.com/savings/digital-coupons");

clipAll();
