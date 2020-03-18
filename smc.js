(function () {
    let $animates = document.querySelectorAll('.animate');
    function resize() {
        let vh = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
        [].forEach.call($animates, function ($a) {
            if ($a.classList.contains('go')) return;
            if ($a.getBoundingClientRect().top < vh * 0.75) $a.classList.add('go');
        });
    }
    window.addEventListener('scroll', function () { resize(); });
    window.addEventListener('load', function () { resize(); });
})();
