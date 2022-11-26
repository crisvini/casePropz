// Executa a função head
head("buyIt")

// Insere o head na página
function head(title) {
    var template = `<meta charset="UTF-8">
                    <meta http-equiv="X-UA-Compatible" content="IE=edge">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
                    <script src="https://kit.fontawesome.com/60656bf09a.js" crossorigin="anonymous"></script>
                    <link href="../lib/fontawesome-free-6.2.1-web/css/fontawesome.css" rel="stylesheet">
                    <link href="../lib/fontawesome-free-6.2.1-web/css/brands.css" rel="stylesheet">
                    <link href="../lib/fontawesome-free-6.2.1-web/css/solid.css" rel="stylesheet">
                    <link rel="preconnect" href="https://fonts.googleapis.com">
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
                    <link href="https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap" rel="stylesheet">
                    <link rel="preconnect" href="https://fonts.googleapis.com">
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
                    <link href="https://fonts.googleapis.com/css2?family=Alexandria:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet">
                    <link rel="stylesheet" href="../css/style.css">
                    <title>${title}</title>`
    document.head.innerHTML += template
}