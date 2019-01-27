// Quando for feito scroll
// adicionar a class navbar-scroll ao header
// para diminuir o tamanho da nav
var $document = $(document);
$document.scroll(function () {
    $("header").toggleClass("navbar-scroll", $document.scrollTop() >= 100);
});

// Smooth Scroll
$('a[href*="#"]')
.not('[href="#"]')
.not('[href="#0"]')
.click(function (event) {
    if (
        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
        &&
        location.hostname == this.hostname
    ) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
            event.preventDefault();
            $('html, body').animate({
                scrollTop: target.offset().top
            }, 550, function () {
                var $target = $(target);
                $target.focus();
                if ($target.is(":focus")) {
                    return false;
                } else {
                    $target.attr('tabindex', '-1');
                    $target.focus();
                };
            });
        }
    }
});