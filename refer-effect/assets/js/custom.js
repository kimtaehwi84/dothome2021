//code view
document.addEventListener('DOMContentLoaded', (event) => {
    document.querySelectorAll('pre code').forEach((el) => {
        hljs.highlightElement(el);
    });
});

// Modal & Popup Style1
$(".info.bottom button").click(function () {
    $("#modal").removeClass().addClass("show");
});

$(".modal-cont button").click(function () {
    $("#modal").addClass("hide");
});


const mtabBtn = $(".view-title ul li");
const mtabCont = $(".view-cont > div");

mtabBtn.click(function () {
    let target = $(this);
    mtabBtn.removeClass("active");
    target.addClass("active");

    let index = target.index();
    mtabCont.css("display", "none");
    mtabCont.eq(index).css("display", "block");
})

