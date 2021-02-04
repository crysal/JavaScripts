var smoll=document.getElementsByClassName("icon icon-upvote _2Jxk822qXs4DaXwsN7yyHA")
var upvoted=0
function upvote()
{
var ammount=smoll.length
for (i = 0; i != ammount; i++)
	{
	if ( smoll[i].parentElement.parentElement.attributes["aria-pressed"].value == "false" )
		{
		smoll[i].parentElement.parentElement.click();
		upvoted++;
		}
	}
}
var clearme=setInterval(upvote, 10000);

#when done browsing run this
clearInterval(clearme);
console.log("Upvoted "+upvoted+" posts");
