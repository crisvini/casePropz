// Insere o head
head("PropzStore")

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

// Insere o footer na página
function footer() {
    var template = `<div class="row">
                        <div class="col-12 col-lg-5 mt-lg-4 mx-lg-auto text-center p-4 fw-500 fs-6">
                            <div class="custom-border p-3">
                                <p class="m-0">Lojas <span class="purple">P</span>ropz</p>
                                <hr class="custom-hr mx-auto my-3 w-75">
                                <p class="m-0">Ribeirão Preto - SP</p>
                                <p class="m-0">Campinas - SP</p>
                                <p class="m-0">São Paulo - SP</p>
                                <p class="m-0">Curitiba - PR</p>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12 text-center mt-5 mb-3">
                            <span class="logo-inverted fs-custom-3"><span class="purple">P</span>ropz<span
                                    class="purple">S</span>tore</span>
                        </div>
                    </div>`
    document.querySelector("footer").innerHTML = template
}