module.exports = {
  HTML: function (title, msg,logout='<div></div>') {
    return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="style.css" type="text/css">
    <meta name="viewport" content="width=device-width">
    <title>${title} - session</title>
</head>
<body>
<div class="message-container">
    <h2>${msg}</h2>
    ${logout}
</div>
</body>
</html>
 `;
  }
}
