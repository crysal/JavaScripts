function unpause()
{
	var ammountOfButtons=document.getElementsByTagName("button").length
	var buttonFinder
	for (i = 0; i != ammountOfButtons; i++)
	{
		buttonFinder = document.getElementsByTagName("button")[i].attributes["data-a-player-state"]
		if ( typeof buttonFinder != 'undefined')
		{
			if (document.getElementsByTagName("button")[i].attributes["data-a-player-state"].value != "playing")
			{
				console.log("Unpaused");
				document.getElementsByTagName("button")[i].click();
				break;
			}
		}
	}
}
setInterval(unpause, 10000);

function unmute()
{
	var ammountOfButtons=document.getElementsByTagName("button").length
	var buttonFinder
	for (i = 0; i != ammountOfButtons; i++)
	{
		buttonFinder = document.getElementsByTagName("button")[i].outerHTML.includes("Unmute")
		if ( buttonFinder)
		{
			document.getElementsByTagName("button")[i].click();
			console.log("Unmuted");'
			break;
		}
	}
}
setInterval(unmute, 10000);
function settingsSetup()
{
	var ammountOfButtons=document.getElementsByTagName("button").length
	var buttonFinder
	for (i = 0; i != ammountOfButtons; i++)
	{
		buttonFinder = document.getElementsByTagName("button")[i].outerHTML.includes("player-settings-button")
		if (buttonFinder)
		{
			document.getElementsByTagName("button")[i].click();
			advancedButtonFinder;
			break;			
		}
	}
}
function advancedButtonFinder()
{
	var ammountOfButtons=document.getElementsByTagName("button").length
	var buttonFinder
	for (i = 0; i != ammountOfButtons; i++)
	{
		buttonFinder = document.getElementsByTagName("button")[i].outerHTML.includes("player-settings-menu-item-advanced")
		if (buttonFinder)
		{
			document.getElementsByTagName("button")[i].click();
			latencyChecker;
			break;			
		}
	}
}
function latencyChecker()
{
	if (document.querySelector(".tw-toggle__input")[Object.keys(document.querySelector(".tw-toggle__input")).filter((item) => item.indexOf('__reactEventHandlers')>=0)].checked)
	{
		document.getElementsByClassName("tw-toggle__input")[0].click();
	}
}



function base64encodeChat()
{
	document.getElementsByClassName("text-fragment")[144].textContent=btoa(document.getElementsByClassName("text-fragment")[144].textContent)
}
function base64decodeChat()
{
	document.getElementsByClassName("text-fragment")[144].textContent=atob(document.getElementsByClassName("text-fragment")[144].textContent)
}




