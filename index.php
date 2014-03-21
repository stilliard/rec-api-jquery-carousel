<?php
error_reporting(E_ALL);
ini_set('display_errors', true);
?><!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Demo</title>
    
    <!-- quick load in normalize css as a base, jquery ui css and then the apps css -->
    <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/normalize/3.0.0/normalize.min.css">
    <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/jqueryui/1.10.4/css/jquery-ui.min.css">
    <link rel="stylesheet" href="//rec.dev/css/jquery.fancybox-1.3.1.css">
    <style>
        body {
            width: 960px;
            margin: 20px auto;
            font: 13px/1.3 sans-serif;
        }
        .clearfix:after {
            clear: both;
            content: ' ';
            display: block;
            font-size: 0;
            line-height: 0;
            visibility: hidden;
            width: 0;
            height: 0;
        }
        * html .clearfix,
        *:first-child+html .clearfix {
            zoom: 1;
        }
    </style>
    <link rel="stylesheet" href="/pages_custom.css">

    <!-- quick load in jquery, jquery ui, handlebars and the apps javascript -->
    <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
    <script src="//cdnjs.cloudflare.com/ajax/libs/jqueryui/1.10.4/jquery-ui.min.js"></script>
    <script src="//rec.dev/js/jquery.fancybox-1.3.1.pack.js"></script>
    <script src="/extra.js"></script>
</head>
<body>

    <?php /* Quick include the app */ require_once './example-page.html'; ?>
    
</body>
</html>
