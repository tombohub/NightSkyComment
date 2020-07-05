<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <script type="text/javascript" src="comment.js"></script>
    <title>Night Sky Comment</title>
</head>
<body>
    <form class="emojis" onsubmit="return makeComment()">
        <p>Type 3 Emojis:</p>
        <p><input type="text" id="emojis" maxlength="3"size="3" autofocus></p>

        <p><button type="submit">Go</button></p>


</form>
<div id="copy">
    Comment copied to clipboard!
</div>
    <div id="comment">

</div>
</body>
</html>