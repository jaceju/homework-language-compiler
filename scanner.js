// Scanner class
define([
    'token'
], function(Token) {

    // reader: the reader used to read in characters
    var Scanner = function(reader) {
        this.reader = reader;
        this.currentToken = new Token(); // storing the current analysed token
        this.currLine = 0; // the line number of the current line being read
        this.state = Scanner.START_STATE;
    }

    Scanner.START_STATE = 1; // every FSM should have a start state

    Scanner.prototype.makeToken = function(type, text) {
        this.currentToken.type = type;
        this.currentToken.text = text;
        return type;
    };

    Scanner.prototype.nextToken = function() {
        while (true) {
            switch (this.state) {
                case Scanner.START_STATE:
                    var c = this.reader.nextChar();
                    switch (c) {
                        case ":":
                            return this.makeToken(Token.tokens.COLON_TOKEN);
                            break;
                        case ";":
                            return this.makeToken(Token.tokens.SEMICOLON_TOKEN);
                            break;
                        case "(":
                            return this.makeToken(Token.tokens.LEFTPAREN_TOKEN);
                            break;
                        case ")":
                            return this.makeToken(Token.tokens.RIGHTPAREN_TOKEN);
                            break;
                        case "{":
                            return this.makeToken(Token.tokens.LEFTBRACE_TOKEN);
                            break;
                        case "}":
                            return this.makeToken(Token.tokens.RIGHTBRACE_TOKEN);
                            break;
                        case "%":
                            return this.makeToken(Token.tokens.MOD_TOKEN);
                            break;
                        case -1:
                            return this.makeToken(Token.tokens.EOS_TOKEN);
                            break;
                        case "\r":
                        case "\n":
                            this.currLine++;
                        default:
                            // ignore them
                    }
                    break;
            }
        }
    };

    return Scanner;
});
