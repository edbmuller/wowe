<!DOCTYPE html>
<html lang="pt-br" dir="ltl">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=4.0">
	<meta name="description" content="<?php echo bloginfo("description"); ?>" >
	<meta name="keywords" content="wowe" >
  <link rel="icon" type="image/x-icon" href="./favicon.png">

	<!-- To run web application in full-screen -->
	<meta name="apple-mobile-web-app-capable" content="yes">
	<meta name="apple-mobile-web-app-status-bar-style" content="black">

	<title><?php echo bloginfo('name'); ?></title>
	<!-- Critical CSS: -->
	<style>
		body {
			background-color: #000;
			overflow-x: hidden;
		}

		body.locked-scroll {
			overflow: hidden;
		}
	</style>
	<!--
		Defered styles:
		(reference: https://www.filamentgroup.com/lab/load-css-simpler/)
	-->
	<link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/src/style.min.css" media="print" onload="this.media='all'">
	<?php wp_head(); ?>
</head>

<body>
