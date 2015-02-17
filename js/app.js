$(document).ready(function() {
    var $body           = $('body');
    var $header         = $('.color-hex');
    var $refreshBtn     = $('.refresh-btn');

    randomColor();

    $refreshBtn.on('click', function() {
        randomColor();
    });

    function randomColor() {
        var _r      = randomNumber(0, 255);
        var _g      = randomNumber(0, 255);
        var _b      = randomNumber(0, 255);
        var _rgb    = 'rgb(' + _r + ',' + _g + ',' + _b + ')';

        $body.css('background-color', _rgb);
        $refreshBtn.find('.fa-refresh').css('color', _rgb);
        $header.removeClass('light-color dark-color');

        if (isLight(_r, _g, _b)) {
            $header.addClass('light-color');
        } else {
            $header.addClass('dark-color');
        }

        $header.text(rgb2hex(_rgb));
    }

    function randomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function rgb2hex(rgb){
        rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
        return '#' +
        ('0' + parseInt(rgb[1],10).toString(16)).slice(-2) +
        ('0' + parseInt(rgb[2],10).toString(16)).slice(-2) +
        ('0' + parseInt(rgb[3],10).toString(16)).slice(-2);
    }

    function isLight(r, g, b) {
        var l = (r * 0.2126 + g * 0.7152 + b * 0.0722) / 255;

        if (l > 0.6) {
            return true;
        }
        return false;
    }
});