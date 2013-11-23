require.config({
    paths: {
        'jquery': '//codeorigin.jquery.com/jquery-1.10.2.min'
    }
});

function log(str){
    $("#log").append(str + "<br />");
}

require([
    'jquery',
    'reader'
], function ($, Reader, Token) {
    $('#run').on('click', function() {
        var dataToBeCompiled = $("#wescript").text();
        var reader = new Reader(dataToBeCompiled);
        var retracted = false;
        while (true) {
            var nextChar = reader.nextChar();
            if (nextChar == -1) {
                break;
            }
            // if it meets !, it will retract once
            if (nextChar == "!" && !retracted) {
                reader.retract();
                retracted = true;
            }
            log("char: " + nextChar);
        }
    });
});
