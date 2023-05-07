(function(){
    /* ----------------------------
             custom cursor
    ----------------------------*/
    var cursor = document.getElementById('customCursor');
    document.addEventListener('mousemove', function (e) {
        var cursorWidth = cursor.offsetWidth;
        var x = e.clientX - cursorWidth / 2;
        var y = e.clientY - cursorWidth / 2;
        cursor.style.transform = 'translate(' + x + 'px, ' + y + 'px)';
    });
    var links = document.querySelectorAll('a');
    for (let i = 0; i < links.length; i++) {
        const link = links[i];
        link.addEventListener('mouseover', function () {
            cursor.classList.add('on-link');
        });
        link.addEventListener('mouseout', function () {
            cursor.classList.remove('on-link');
        })
    }
})();