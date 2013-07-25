function rafoCasteel( Container, image_path )
{
	function debug()
	{
		$("#info").html(
			$( rcWin ).css("top") + " - " +
			$( rcWin ).css("left") + " - " + "<br>" +
			$( rcWin ).css("width") + " - " +
			$( rcWin ).css("height") + " - "
		);
	}
	
	function win_move( e )
	{
		WIN_POS_TOP = e.pageY - $( Container ).offset().top;
		WIN_POS_LEFT = e.pageX - $( Container ).offset().left;
		
		$( rcWin ).css({
			"top":WIN_POS_TOP - CURSOR_POS_IN_WIN_TOP,
			"left":WIN_POS_LEFT - CURSOR_POS_IN_WIN_LEFT
		});
	}
	
	function cursor_pos_init( e )
	{
		CURSOR_POS_IN_WIN_TOP = e.pageY - $( rcWin ).offset().top;
		CURSOR_POS_IN_WIN_LEFT = e.pageX - $( rcWin ).offset().left;
	}
	
	function resize()
	{
		if( re_pos == "rc_mv_2" )
		{
			if( parseInt( $( rcWin ).css("top") ) <= CURSOR_TOP )
			{
				while( parseInt( $( rcWin ).css("top") ) != CURSOR_TOP )
				{
					if( $( rcWin ).height() > max_zoom_out_win )
					{
						$( rcWin ).css("top", parseInt( $( rcWin ).css("top") ) + 1 );
						$( rcWin ).height( $( rcWin ).height() - 1 );
					}
					else
					{
						break;
					}
				}
			}
			else
			{
				while( parseInt( $( rcWin ).css("top") ) != CURSOR_TOP )
				{
					$( rcWin ).css("top", parseInt( $( rcWin ).css("top") ) - 1 );
					$( rcWin ).height( $( rcWin ).height() + 1 );
				}
			}
			if( parseInt( $( rcWin ).css("left") ) + $( rcWin ).width() <= CURSOR_LEFT )
			{
				while( parseInt( $( rcWin ).css("left") ) + $( rcWin ).width() != CURSOR_LEFT )
				{
					$( rcWin ).width( $( rcWin ).width() + 1 );
				}
			}
			else
			{
				while( parseInt( $( rcWin ).css("left") ) + $( rcWin ).width() != CURSOR_LEFT )
				{
					if( $( rcWin ).width() > max_zoom_out_win )
					{
						$( rcWin ).width( $( rcWin ).width() - 1 );
					}
					else
					{
						break;
					}
				}
			}
		}
		else if( re_pos == "rc_mv_3" )
		{
			if( parseInt( $( rcWin ).css("left") ) + $( rcWin ).width() <= CURSOR_LEFT )
			{
				while( parseInt( $( rcWin ).css("left") ) + $( rcWin ).width() != CURSOR_LEFT )
				{
					$( rcWin ).width( $( rcWin ).width() + 1 );
				}
			}
			else
			{
				while( parseInt( $( rcWin ).css("left") ) + $( rcWin ).width() != CURSOR_LEFT )
				{
					if( $( rcWin ).width() > max_zoom_out_win )
					{
						$( rcWin ).width( $( rcWin ).width() - 1 );
					}
					else
					{
						break;
					}
				}
			}
			if( parseInt( $( rcWin ).css("top") ) + $( rcWin ).height() <= CURSOR_TOP )
			{
				while( parseInt( $( rcWin ).css("top") ) + $( rcWin ).height() != CURSOR_TOP )
				{
					$( rcWin ).height( $( rcWin ).height() + 1 );
				}
			}
			else
			{
				while( parseInt( $( rcWin ).css("top") ) + $( rcWin ).height() != CURSOR_TOP )
				{
					if( $( rcWin ).height() > max_zoom_out_win )
					{
						$( rcWin ).height( $( rcWin ).height() - 1 );
					}
					else
					{
						break;
					}
				}
			}
		}
	}
	
	if( Container != "" && image_path != "" )
	{
		var i = 0;
		var WIN_POS_TOP = 0;
		var WIN_POS_LEFT = 0;
		var CURSOR_POS_IN_WIN_TOP = 0;
		var CURSOR_POS_IN_WIN_LEFT = 0;
		var DEF_POS_TOP = 0;
		var DEF_POS_LEFT = 0;
		var DEF_POS_WIDTH = 0;
		var DEF_POS_HEIGHT = 0;
		var CURSOR_TOP = 0;
		var CURSOR_LEFT = 0;
		var re_pos = 0;
		var max_zoom_out_win = 50;
		
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
		
		var rcWinMAIN = $("#rc_pd_main");
		
		// BIND CURSOR POSITION FIXING
		$(document).mousemove(function(e) {
			CURSOR_TOP = e.pageY - $( Container ).offset().top;
			CURSOR_LEFT = e.pageX - $( Container ).offset().left;
			//alert(CURSOR_LEFT);
		});
		
		// RC_WIN MOVE BINDING
		$( rcWinMAIN ).bind("mousedown",function(e) {
			cursor_pos_init(e);
			$( rcWinMAIN ).bind("mousemove",win_move);
		});
		$( window ).mouseup(function() {
			$( rcWinMAIN ).unbind("mousemove",win_move);
			debug();
		});
		
		// BIND RESIZE EVENT
		$(".rc_mv").mousedown(function( e ) {
			
			DEF_POS_TOP = parseInt( $( Container ).offset().top );
			DEF_POS_LEFT = parseInt( $( Container ).offset().left );
			DEF_POS_WIDTH = DEF_POS_LEFT + $( Container ).width();
			DEF_POS_HEIGHT = DEF_POS_TOP + $( Container ).height();
			
			re_pos = $(this).attr("id");
			$(window).bind("mousemove",resize);
			//resize();
			
		});
		
	}
}

$(document).ready(function() {
	rafoCasteel( "#container", "images/1.jpg" );
});
