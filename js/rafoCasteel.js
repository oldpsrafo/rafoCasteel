function rafoCasteel( Container, image_path )
{
	
	function win_move( e )
	{
		WIN_POS_TOP = e.pageY - $( Container ).offset().top;
		WIN_POS_LEFT = e.pageX - $( Container ).offset().left;
		
		$( rcWin ).css({
			"top":WIN_POS_TOP -CURSOR_POS_IN_WIN_TOP,
			"left":WIN_POS_LEFT - CURSOR_POS_IN_WIN_LEFT
		});
	}
	
	function cursor_pos_init( e )
	{
		CURSOR_POS_IN_WIN_TOP = e.pageY - $( rcWin ).offset().top;
		CURSOR_POS_IN_WIN_LEFT = e.pageX - $( rcWin ).offset().left;
	}
	
	if( Container != "" && image_path != "" )
	{
		var i = 0;
		var WIN_POS_TOP = 0;
		var WIN_POS_LEFT = 0;
		var CURSOR_POS_IN_WIN_TOP = 0;
		var CURSOR_POS_IN_WIN_LEFT = 0;
		
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
		$( rcWin ).bind("mousedown",function(e) {
			cursor_pos_init(e);
			$( rcWin ).bind("mousemove",win_move);
		});
		$( window ).mouseup(function() {
			$( rcWin ).unbind("mousemove",win_move);
		});
		
	}
}

$(document).ready(function() {
	rafoCasteel( "#container", "images/1.jpg" );
});
