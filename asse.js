<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>HTML with CSS and JavaScript</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            margin: 0;
            padding: 0;
            text-align: center;
        }

        header {
            background-color: #333;
            color: #fff;
            padding: 10px;
        }

        #content {
            padding: 20px;
        }

        button {
            padding: 10px;
            font-size: 16px;
            cursor: pointer;
        }
    </style>
</head>
<body>
    <header>
        <h1>HTML with CSS and JavaScript</h1>
    </header>
    <div id="content">
        <p>This is a simple HTML document with embedded CSS and JavaScript.</p>
        <button onclick="changeText()">Click me</button>
        <p id="demo">JavaScript can dynamically change this text.</p>
    </div>

    <script>
        function changeText() {
            document.getElementById("demo").innerHTML = "Text changed!";
        }
    </script>
</body>
</html>
