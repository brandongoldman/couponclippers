# couponclippers
Automated coupon clipping for stores that offer digital coupons.

## Instructions
Paste the associated Javascript functions into your Developer Tools console to automagically clip your digital coupons.

- Publix URL: https://www.publix.com/savings/digital-coupons
- BJ's URL: https://www.bjs.com/myCoupons?source=header

## Using Bookmarklets
You can embed these scripts as bookmarklets to make it simpler to run. To do that, drag the following buttons to your Bookmark Bar in Google Chrome:

[<img src="https://dabuttonfactory.com/button.png?t=Publix+Coupon+Clipper&f=Open+Sans-Bold&ts=26&tc=fff&hp=45&vp=20&c=11&bgt=unicolored&bgc=15d798">](javascript:(function()%7Bfunction%20clipAll()%20%7Bconst%20t%20%3D%20document.querySelectorAll(%22button.p-coupon-button%3Anot(%5Baria-checked%5D)%22).length%3Bt%20%3E%200%20%26%26%20Array.from(document.querySelectorAll(%22button.p-coupon-button%3Anot(%5Baria-checked%5D)%22)).slice(0%2C%205).forEach(t%20%3D%3E%20t.click())%2C%20t%20%3E%205%20%3F%20setTimeout(clipAll%2C%201e3)%20%3A%20document.querySelector('button%5Btitle%3D%22Load%20More%22%5D')%20%26%26%20(document.querySelector('button%5Btitle%3D%22Load%20More%22%5D').click()%2C%20setTimeout(clipAll%2C%203e3))%7Dvar%20_gaq%20%3D%20_gaq%20%7C%7C%20%5B%5D%3B_gaq.push(%5B%22_setAccount%22%2C%20%22UA-600868-4%22%5D)%2C%20_gaq.push(%5B%22_trackPageview%22%5D)%2Cfunction()%20%7Bvar%20t%20%3D%20document.createElement(%22script%22)%3Bt.src%20%3D%20(%22https%3A%22%20%3D%3D%20document.location.protocol%20%3F%20%22https%3A%2F%2Fssl%22%20%3A%20%22http%3A%2F%2Fwww%22)%20%2B%20%22.google-analytics.com%2Fga.js%22%2C%20t.setAttribute(%22async%22%2C%20%22true%22)%2C%20document.documentElement.firstChild.appendChild(t)%7D()%2C%20%22www.publix.com%22%20%3D%3D%3D%20window.location.host%20%26%26%20%22%2Fsavings%2Fdigital-coupons%22%20%3D%3D%3D%20window.location.pathname%20%7C%7C%20(window.location%20%3D%20%22https%3A%2F%2Fwww.publix.com%2Fsavings%2Fdigital-coupons%22)%3BclipAll()%7D)())

[<img src="https://dabuttonfactory.com/button.png?t=BJ%27s+Coupon+Clipper&f=Open+Sans-Bold&ts=26&tc=fff&hp=45&vp=20&c=11&bgt=unicolored&bgc=f00">](javascript:(function()%7Bfunction%20sleep(t)%20%7Bconst%20start%20%3D%20Date.now()%3Bwhile%20(Date.now()%20-%20start%20%3C%20t)%3B%7Dvar%20interval%20%3D%20setInterval(function()%7Bvar%20buttons%20%3D%20%24(%22button.red-btn%3Acontains('CLIP')%22)%3Bvar%20nextLink%20%3D%20%24(%22span.next%3Acontains('Next')%22)%3Bvar%20btn%20%3D%20%24(buttons.splice(0%2C%201))%3Bconsole.log(%22Clicking%3A%20%22%20%2B%20buttons.length%20%2B%20%22%20%22%2C%20btn)%3Bbtn.trigger(%20%22click%22%20)%3Bif%20(buttons.length%20%3D%3D%3D%200%20%26%26%20nextLink.length%20%3D%3D%3D%200%20)%20%7Bconsole.log(%22Done%22)%3BclearInterval(interval)%3B%7D%20else%20if%20(buttons.length%20%3D%3D%3D%200)%20%7BnextLink.trigger(%20%22click%22%20)%3Bsleep(3000)%3B%7D%7D%2C%20500)%7D)())
