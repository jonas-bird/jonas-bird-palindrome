// -*- compile-command: "node palindrome.js" -*-


// Reverse a string:
/*function reverse(string){
    return Array.from(string).reverse().join("");
}*/

// controversial approach
String.prototype.reverse = function() {
    return Array.from(this).reverse().join("");
}


/*
// Returns true for a palindrome, false otherwise.
function palindeome(string){
    let processedContent = string.toLowerCase();
    return processedContent === reverse(processedContent);
}
*/

// Defines a Phrase object.
function Phrase(content) {
    this.content = content;
    // Returns content processed for palindrome testing
    this.processedContent = function processedContent() {

        return this.content.toLowerCase();
    }
    // Returns true if the phrase is a palindrome, false otherwise
    this.palindrome = function palindrome() {
        return this.processedContent() === this.processedContent().reverse();
    }
    this.louder = function(){
        return this.content.toUpperCase();
    }
}

function TranslatedPhrase(content, translation){
    this.content = content;
    this.translation = translation;
    // Example of overriding a method
    // Returns translation processed for palindrome testing.
    this.processedContent = function processedContent (){
        return this.processor(this.translation);
    };
}
TranslatedPhrase.prototype = new Phrase();
