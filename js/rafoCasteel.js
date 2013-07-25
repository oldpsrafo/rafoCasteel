function rafoCasteel( Container, image_path )
{
	
	function win_move( e )
	{
		alert( e.pageX );
	}
	
	if( Container != "" && image_path != "" )
	{
		var i = 0;
		
		$( Container ).html("<img id='rc_image' src='"+image_path+"'>");
		$( Container ).append("<div id='rc_win'></div>");
		
		var Image = $("#rc_image");
		var rcWin = $("#rc_win");
		
		$( Image ).css("display","block");
		
		
		// overflow black bg
		i = 0;
		var rcWinHTML = "";
		while( i < 4 )
		{
			i++;
			rcWinHTML = rcWinHTML +
			"<div id='rc_pd_"+i+"' class='rc_pd'></div>" +
			"<div id='rc_mv_"+i+"' class='rc_mv'></div>";
		}
		$( rcWin ).append( "<div id='rc_pd_main'></div>" + rcWinHTML );
		
		$( Container ).bind("mousemove",win_move);
		
	}
}

$(document).ready(function() {
	rafoCasteel( "#container", "images/1.jpg" );
});
