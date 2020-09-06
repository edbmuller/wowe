<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>wowe</title>
	<link rel="stylesheet" href="./wp-content/themes/wowe/style.css">
	<link rel="stylesheet" href="./wp-content/themes/wowe/dist/style.css">
</head>
<body>
	<?php
			echo "<h1>Hello World!</h1>"
	?>
	<div class="d-flex">
		<svg class="icon">
			<use xlink:href="./wp-content/themes/wowe/dist/images/svg.sprite.svg#us-usage" />
		</svg>
		<svg class="icon spotify">
			<use xlink:href="./wp-content/themes/wowe/dist/images/svg.sprite.svg#spotify-usage" />
		</svg>
		<img src="./wp-content/themes/wowe/dist/images/logo.png" alt="Client logo">
		<img src="./wp-content/themes/wowe/dist/images/coding.gif" alt="Client logo">
	</div>
	<?php
		/* Start the Loop */
		while ( have_posts() ) :
			the_post();
			the_content();
		endwhile;

	?>
	<img src="./wp-content/themes/wowe/dist/images/liveA360.jpg" style="width: 100%;" alt="Client logo">
	<script src="./wp-content/themes/wowe/dist/bundle.js"></script>
</body>
</html>
