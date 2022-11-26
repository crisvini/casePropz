const searchParams = new URLSearchParams(window.location.search)

import productsFile from "../data/products.json" assert {type: 'json'}
product(productsFile)

function product(product) {
    product = product[(searchParams.get("id") - 1)]
    document.querySelector("#product").innerHTML = productTemplateBuilder({
        id: product.id, imagePath: product.imagePath, title: product.title, info: product.info,
        installments: product.installments, installmentsPrice: product.installmentsPrice, price: product.price, fullDescription: product.fullDescription
    })
}

function productTemplateBuilder({ id, imagePath, title, info, installments, installmentsPrice, price, fullDescription }) {
    var template = `<div class="row">
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
                                            <button class="btn purple-button w-100">Comprar</button>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12 mt-3">
                                    <div class="form-floating mb-3">
                                        <input type="email" class="form-control" id="floatingInput" placeholder="Insira seu CEP">
                                        <label for="floatingInput">Insira seu CEP</label>
                                    </div>
                                </div>
                            </div>
                            <hr class="custom-hr">
                        </div>
                        <div class="row">
                            <div class="col-12 col-lg-9 mx-auto mt-4">
                                <span class="fs-6">${fullDescription}
                                </span>
                            </div>
                        </div>
                    </div>`
    return template
}