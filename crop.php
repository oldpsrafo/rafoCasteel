<?php
	
	// Original image
	$filename = $_POST['image_pat'];
	$new_filename = "out.jpg";
	 
	// Get dimensions of the original image
	list($current_width, $current_height) = getimagesize($filename);
	 
	// The x and y coordinates on the original image where we
	// will begin cropping the image
	$top = $_POST['top'];
	$left = $_POST['left'];
	 
	// This will be the final size of the image (e.g. how many pixels
	// left and down we will be going)

	if($_POST['width'] <= 5){$imgWidth = 5;}else{$imgWidth = $_POST['width'];}
	if($_POST['height'] <= 5){$imgHeight = 5;}else{$imgHeight = $_POST['height'];}

	$crop_width = $imgWidth;
	$crop_height = $imgHeight;
	 
	// Resample the image
	$canvas = imagecreatetruecolor($crop_width, $crop_height);

	// Sended image format replacing
	$file_format = substr($filename, -6);
	$file_format = explode('.', $file_format);
	$file_format = $file_format[1];

	if($file_format == 'jpg' or $file_format == 'jpeg'){
		$current_image = imagecreatefromjpeg($filename);
	}elseif($file_format == 'png'){
		$current_image = imagecreatefrompng($filename);
	}elseif($file_format == 'gif'){
		$current_image = imagecreatefromgif($filename);
	}

	// Copy original image and create new
	imagecopy($canvas, $current_image, 0, 0, $left, $top, $current_width, $current_height);
	imagejpeg($canvas, $new_filename, 100);

	// echo cropped image
	echo "<img style='max-width:200px;max-height:200px;' src=".$new_filename.">";


?>
