function rafoCasteel( Container, image_path )
{
	
	function win_move( e )
	{
		WIN_POS_TOP = e.pageY - $( Container ).offset().top;
		WIN_POS_LEFT = e.pageX - $( Container ).offset().left;
		
		$( rcWin ).css({
			"top":WIN_POS_TOP,
			"left":WIN_POS_LEFT
		});
		
	}
	
	if( Container != "" && image_path != "" )
	{
		var i = 0;
		var WIN_POS_TOP = 0;
		var WIN_POS_LEFT = 0;
		
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
		
		// RC_WIN MOVE BINDING
		$( rcWin ).bind("mouseup",function() { $( rcWin ).bind("mousemove",win_move); });
		$( window ).mousedown(function() { $( rcWin ).unbind("mousemove",win_move); });
		
	}
}

$(document).ready(function() {
	rafoCasteel( "#container", "images/1.jpg" );
});
