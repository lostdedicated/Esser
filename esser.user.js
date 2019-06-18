(
    function()
    {
        'use strict';
        window.addEventListener("blur", function (e)
        {
            e.stopImmediatePropagation();
        },
        false);
    }
)
();
// jp fonts
document.documentElement.lang = "ja"
var rpint = setInterval (rp, 3000);

var rpint = setInterval (rp, 1000);
function rp()
	{
		if (window.location.hash.substr(0, 7) !== "#result")
			{clearInterval(rpint)} else 
			{
   				//rankProgress = getComputedStyle(document.querySelector(".prt-exp-gauge-inner")).getPropertyValue('width');
   				rankProgress = document.querySelector(".prt-exp-gauge-inner").style.width;
   				/* AHAHAH HAA HHXHDHXDDXDDDDDDDDDDDDDDDDDDDD
				rankProgress = rankProgress.slice(0, -2);
				rankProgress = parseFloat(rankProgress);
				rankProgress = rankProgress / 110 * 100;
				rankProgress = rankProgress.toFixed(2);
				rankProgress = rankProgress + "%";
				*/
				document.querySelector('.prt-rankup').innerHTML = rankProgress;
				clearInterval(rpint);
				console.log("hai");
			}
		};
		
