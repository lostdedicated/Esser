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
//ability tooltips
var abilityTooltipInt = setInterval (abilityTooltip, 1000);		
function abilityTooltip()
	{
		if (window.location.hash.substr(0, 5) !== "#raid")
			{
				clearInterval(abilityTooltipInt);
			}
			else
			{
				abilityTooltipArray = document.getElementsByClassName("lis-ability");
				abilityTooltipArrayLength = abilityTooltipArray.length;
				for (var i = 0; i < abilityTooltipArrayLength; i++)
					{
						abilityTooltipArrayDiv = abilityTooltipArray[i].getElementsByTagName("div");
						abilityTooltipText = abilityTooltipArrayDiv[0].getAttribute("ability-name") + "\n" + abilityTooltipArrayDiv[0].getAttribute("text-data") + "\n" + "Duration: " + abilityTooltipArrayDiv[0].getAttribute("duration") + " turns" + "\n" + "Cooldown: " + abilityTooltipArrayDiv[0].getAttribute("recaset-default") + " turns";
						abilityTooltipArrayDiv[0].setAttribute("title", abilityTooltipText)
					}
				if (abilityTooltipArray.length != 0) 
				{
					clearInterval(abilityTooltipInt);
				}
			}
	}