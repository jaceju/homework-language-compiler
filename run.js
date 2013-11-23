require.config({
    paths: {
        'jquery': '//codeorigin.jquery.com/jquery-1.10.2.min',
        'bootstrap': '//netdna.bootstrapcdn.com/bootstrap/3.0.2/js/bootstrap.min'

    },
    shim: {
        'bootstrap': [ 'jquery' ]
    }
});

function log(str){
    $("#log").append(str + "<br />");
}

require([
    'jquery',
    'reader',
    'scanner',
    'token',
    'bootstrap'
], function ($, Reader, Scanner, Token) {
    $(function () {
        $('#run').on('click', function() {
            var dataToBeCompiled = $("#wescript").val();
            var reader = new Reader(dataToBeCompiled);
            var scanner = new Scanner(reader);
            while (true){
                var token = scanner.nextToken();
                if (token == Token.tokens.EOS_TOKEN){
                    break;
                }
         
                log("Read token: " + Token.backwardMap[token]);
            }
        });
    });
});
