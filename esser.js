//jp fonts
document.documentElement.lang = "ja";
//out of focus sound
(function()
    {
        'use strict';
        window.addEventListener("blur", function (e)
        {
            e.stopImmediatePropagation();
        },
        false);
    }());
//rp progress
var rpint = setInterval (rp, 1000);
function rp()
	{
		if (window.location.hash.substr(0, 7) !== "#result")
			{clearInterval(rpint)} else 
			{
   				rankProgress = document.querySelector(".prt-exp-gauge-inner").style.width;
				document.querySelector('.prt-rankup').innerHTML = rankProgress;
				clearInterval(rpint);
			}
		};
		
