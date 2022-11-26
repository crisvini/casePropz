import productsFile from "../data/products.json" assert {type: 'json'}
product(productsFile)

function product(product) {
    var template = ""
    product.forEach(element => {
        template += productTemplateBuilder({
            id: element.id, imagePath: element.imagePath, title: element.title, info: element.info,
            installments: element.installments, installmentsPrice: element.installmentsPrice, price: element.price, description: element.description
        })
    })
    document.querySelector("#carousel_items").innerHTML = template
}

function productTemplateBuilder({ id, imagePath, title, info, installments, installmentsPrice, price, description }) {
    var template = `<div class="carousel-item ` + (id == "1" ? 'active' : '') + `">
                        <div class="row">
                            <div class="col-12 col-lg-6 p-0">
                                <img src="../assets/${imagePath}" class="d-block w-75 mx-auto">
                            </div>
                            <div class="col-12 col-lg-4 py-1">
                                <div class="row">
                                    <div class="col-9">
                                        <span class="fs-8 fw-500">${title}</span>
                                    </div>
                                    <div class="col-3 text-end">
                                        <span class="fs-8 fw-500">${info}</span>
                                    </div>
                                </div>
                                <hr class="custom-hr">
                                <div class="row">
                                    <div class="col-6 d-flex">
                                        <div>
                                            <span class="fs-custom-1 fw-500 line-heigh-100">${installments}X</span>
                                        </div>
                                        <div class="ms-2 me-1">
                                            <span class="purple fs-6 fw-500 line-heigh-100">R$</span>
                                        </div>
                                        <div>
                                            <span class="fs-custom-1 fw-500 line-heigh-100">` + installmentsPrice.split(",")[0] + `</span>
                                        </div>
                                        <div class="ms-1">
                                            <span class="fs-6 fw-500 line-heigh-100">,` + installmentsPrice.split(",")[1] + `</span>
                                        </div>
                                    </div>
                                    <div class="col-6 d-flex">
                                        <div class="text-end">
                                            <img src="./assets/visa_logo.png" class="w-75">
                                        </div>
                                        <div class="text-end">
                                            <img src="./assets/mastercard_logo.png" class="w-75">
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <span class="fs-6 fw-500 vertical-align-top line-heigh-100">sem juros</span>
                                    </div>
                                    <div class="col-12 d-flex">
                                        <div class="row w-100">
                                            <div class="col-1">
                                                <span class="fs-6 fw-500  line-heigh-100">ou&nbsp;</span>
                                            </div>
                                            <div class="col-7 pe-0">
                                                <span class="fs-custom-3 fw-500 line-heigh-100"><span
                                                        class="purple">R$</span>${price} à vista</span>
                                            </div>
                                            <div class="col-4 p-0">
                                                <button class="btn purple-button w-100" onclick="window.location.href = './product.html?id=${id}'">Ver mais</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <hr class="custom-hr">
                                <div class="row">
                                    <div class="col-12">
                                        <span class="fs-6">${description}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>`
    return template
}