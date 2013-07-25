function rafoCasteel( Container, image_path )
{
	if( Container != "" && image_path != "" )
	{
		$( Container ).html("<img id='rc_image' src='"+image_path+"'>");
		$( Image ).css("display","block");
		$( Container ).append("<div id='rc_win'></div>");
		
		var Image = $("#rc_image");
		var rcWin = $("#rc_win");
		
		
		var i = 0;
		var rcWinHTML = "";
		while( i < 4 )
		{
			i++;
			rcWinHTML = rcWinHTML + "<div id='rc_pd_"+i+"' class='rc_pd'></div>";
		}
		$( rcWin ).append( "<div id='rc_pd_main'></div>" + rcWinHTML );
		
		
	}
}

$(document).ready(function() {
	rafoCasteel( "#container", "images/1.jpg" );
});
