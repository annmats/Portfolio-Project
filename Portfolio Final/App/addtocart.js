$(document).ready(function () {
    $("#addcart").click(function () {
        $("#add-cart-container").toggle("slow", function () {});
    });
    console.log("hello")
    let total = 0;
    let remBtn1 = $("th.empty1")
    .append(`<button class="removeItem">X</button>`)
    .hide();
    let remBtn2 = $("th.empty2")
    .append(`<button class="removeItem">X</button>`)
    .hide();
    let remBtn3 = $("th.empty3")
    .append(`<button class="removeItem">X</button>`)
    .hide();
    let remBtn4 = $("th.empty4")
    .append(`<button class="removeItem">X</button>`)
    .hide();
    let remBtn5 = $("th.empty5")
    .append(`<button class="removeItem">X</button>`)
    .hide();
    $(".thPrice1").text(`₱ 0`).hide();
    $(".thPrice2").text(`₱ 0`).hide();
    $(".thPrice3").text(`₱ 0`).hide();
    $(".thPrice4").text(`₱ 0`).hide();
    $(".thPrice5").text(`₱ 0`).hide();

    //add to cart: 5 different books limit
    $("button.btn").click(function(){
        console.log("clicked")
    })

    $("button.btn").click(function (e) {
        console.log("clicked")
        var bookInfo = e.target.parentElement.parentElement;
        if ($(".thName1").text() === "") {
            $(".thName1").text(bookInfo.children[0].children[1].textContent);
            console.log(bookInfo)
            $(".thPrice1").text(bookInfo.children[3].textContent).show();
            remBtn1.show();
            addTotal();
        } else if ($(".thName2").text() === "") {
            $(".thName2").text(bookInfo.children[0].textContent);
            $(".thPrice2").text(bookInfo.children[3].textContent).show();
            remBtn2.show();
            addTotal();
        } else if ($(".thName3").text() === "") {
            $(".thName3").text(bookInfo.children[0].textContent);
            $(".thPrice3").text(bookInfo.children[3].textContent).show();
            remBtn3.show();
            addTotal();
        } else if ($(".thName4").text() === "") {
            $(".thName4").text(bookInfo.children[0].textContent);
            $(".thPrice4").text(bookInfo.children[3].textContent).show();
            remBtn4.show();
            addTotal();
        } else if ($(".thName5").text() === "") {
            $(".thName5").text(bookInfo.children[0].textContent);
            $(".thPrice5").text(bookInfo.children[3].textContent).show();
            remBtn5.show();
            addTotal();
        }
    });

    //remove item from cart
    $("button.removeItem").click(function (d) {
    var clickedName =
        d.target.parentElement.parentElement.children[0].className;
    var clickedPrice =
        d.target.parentElement.parentElement.children[1].className;
    var curPrice = parseFloat(
        $("." + clickedPrice)
        .text()
        .replace("₱ ", "")
    );
    total = total - curPrice.toFixed(2);
    $("h5.total").text(`Total: ₱ ` + Math.abs(total.toFixed(2)));
    $("." + clickedName).text("");
    $("." + clickedPrice)
        .text(0)
        .hide();
    $("." + d.target.parentElement.className).hide();
    });

    //add total
    function addTotal() {
    total =
        parseFloat($(".thPrice1").text().replace("₱ ", "")) +
        parseFloat($(".thPrice2").text().replace("₱ ", "")) +
        parseFloat($(".thPrice3").text().replace("₱ ", "")) +
        parseFloat($(".thPrice4").text().replace("₱ ", "")) +
        parseFloat($(".thPrice5").text().replace("₱ ", ""));
    $("h5.total").text(`Total: ₱ ` + total.toFixed(2));
    }
})
