function noShort()
{
var smoll=document.getElementsByClassName("yt-simple-endpoint inline-block style-scope ytd-thumbnail")
var ammount=smoll.length
for (i = 0; i != ammount; i++)
	{
	if ( (smoll[i].href).includes("youtube.com/shorts/") )
		{
		smoll[i].parentNode.parentNode.parentNode.parentNode.parentNode.remove()
		}
	}
}
var clearme=setInterval(noShort, 1000);
