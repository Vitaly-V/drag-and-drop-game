var dragndrop = (function() {
    var myX = '';
    var myY = '';
    var withArt = '';

    function resetZ() {
        var elements = document.querySelectorAll('img');
        for (var i = elements.length -1; i >= 0; i--) {
            elements[i].style.zIndex = '5';
        }
    }

    function moveStart(e) {
        withArt = e.target;
        myX = e.offsetX === undefined ? e.layerX : e.offsetX;
        myY = e.offsetY === undefined ? e.layerY : e.offsetY;
        resetZ();
        withArt.style.zIndex = 10;
    }

    function moveDragOver(e) {
        e.preventDefault();
    }
    function moveDrop(e) {
        e.preventDefault();
        withArt.style.left = e.pageX - myX + 'px';
        withArt.style.top = e.pageY - myY + 'px';
    }

    function touchStart(e) {
        e.preventDefault();
        var witchArt = e.target;
        var touch = e.touches[0];
        var moveOffsetX = witchArt.offsetLeft - touch.pageX;
        var moveOffsetY = witchArt.offsetTop - touch.pageY;
        resetZ();
        withArt.style.zIndex = 10;

        witchArt.addEventListener('touchmove', function() {
            var positionX = touch.pageX + moveOffsetX;
            var positionY = touch.pageY + moveOffsetY;
            witchArt.style.left = positionX + 'px';
            witchArt.style.top = positionY + 'px';
        }, false);
    }

    document.querySelector('body').addEventListener('dragstart', moveStart, false);
    document.querySelector('body').addEventListener('dragover', moveDragOver, false);
    document.querySelector('body').addEventListener('drop', moveDrop, false);

    document.querySelector('body').addEventListener('touchstart', touchStart, false);
    
})();