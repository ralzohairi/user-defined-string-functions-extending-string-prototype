// .:: User defined String functions implemented by @ralzohairi ::.


/** Determines if the string contains white space only
   * @returns {Boolean} true if the string contains white space only and false
   *  otherwise
   */
String.prototype.isWhiteSpaceOnly = function () {

    // Replace all existing white space in string with an empty string
    const noWhiteSpaceInput = this.replace(/\s/g, ""); // Note: g is for global match
    // (to not stop at first match)

    if (noWhiteSpaceInput === "") {
        return true;
    } else {
        return false;
    }
};

/** Determines if the string contains the passed string as a
 *  prefix
 * @param {String} possiblePrefix - the possible prefix of text
 * @returns {Boolean} true if the the string contains the passed
 * string as a prefix and false otherwise.
 */
String.prototype.isPrefix = function (possiblePrefix) {

    // If the string is shorter, in length, than the passed possible prefix
    if (this.length < possiblePrefix.length) {
        return false;
    }

    // Otherwise, test if it contains the possible prefix
    return this.isIncludedInString(possiblePrefix) &&
        this.substring(0, possiblePrefix.length) === possiblePrefix;

    // Note using the built in function includes as it's not supported in IE.
}

/** Returns the first word of the string
 * @returns {String} the first word of the string, if string is not white space
 *  only. Otherwise, returns an empty string.
 */
String.prototype.getFirstWord = function () {

    if (!this.isWhiteSpaceOnly()) {
        // create a list of all words in the string using any white space as a breaking point
        const stringBrokenIntoArray = this.match(/\S+/g); /* '\S: matching anything
         except a whitespace (newline, tab, space) - "\S" is the negation of \s*/

        // extract first word in the string
        return stringBrokenIntoArray[0];
    } else {
        return "";
    }
}

/** Returns the first and last word in the string
 * @returns {String} the first and last word of the string, if string is not white 
 * space only. Otherwise, returns an empty string. However, If the string has only
 *  one word, the output will be the first word only.
 */
String.prototype.getFirstAndLastWord = function () {
    if (!this.isWhiteSpaceOnly()) {
        // create a list of all words in the string using any white space as a breaking point
        const stringBrokenIntoArray = this.match(/\S+/g); /* '\S: matching anything
        except a whitespace (newline, tab, space) - is the negation of \s*/

        let stringToReturn = stringBrokenIntoArray[0];

        // if string contains more than one word, append the last word to the
        // string to return
        if (stringBrokenIntoArray.length > 1) {
            stringToReturn = stringToReturn
                + " "
                + stringBrokenIntoArray[stringBrokenIntoArray.length - 1];
        }

        // extract first and last word only
        return stringToReturn;
    } else {
        return "";
    }
}

/** Returns the string, that represents a file name, without the file's extension
 * @returns {String} the string, that represents the file name,
 * without the extension, if the string is not whitespace only.
 * Otherwise, returns an empty string. If the file name has no extension,
 * the output is the file name as is.
 */
String.prototype.removeFileNameExtension = function () {
    if (!this.isWhiteSpaceOnly()) {

        const fileNameAsAnArray = this.split("."); // i.e. [filename, extension]

        // If filename has no extention, return it as is
        if (fileNameAsAnArray.length === 1) {
            return fileNameAsAnArray[0];
        }

        const fileNameWithoutExtension = fileNameAsAnArray.slice(0, -1).join(".");
        // -1 being the last element, therefore, remove the last element but join 
        // everything else (in the case of filename.x.js)
        return fileNameWithoutExtension;
    } else {
        return "";
    }
}

/** Extracts the path from the string, that should represent a URL, & returns it
 * @returns {String} the path of the string (URL), whether or not it contains a protocol,
 *  a port and/or query parameters. An empty string is returned if the URL contains
 *  no path or if it contains whitespace only.
 */
String.prototype.extractPathFromURL = function () {

    if (!this.isWhiteSpaceOnly()) {

        let path;

        // 1. Remove protocol [http, ftp, etc.] (if any) & remove hostname
        // 1.1. Split url to array by /
        const urlBrokenDownIntoListByBackslash = this.split("/");
        const numberOfEntriesBeforePathInList =
            (this.indexOf("//") > -1) ? // if protocol exist
                3 // as the list is ["https", "", "hostname", "path", ...]
                : // if it doesn't exist
                1; // as the list is ["hostname", "path", ...]

        // 1.2. Remove everything in the array before the path name
        urlBrokenDownIntoListByBackslash.splice(0, numberOfEntriesBeforePathInList);

        // 2. Recreate url with path only and possible query parameters
        // 2.1. Join the list
        path = urlBrokenDownIntoListByBackslash.join("/"); // if list is empty, 
        // it will return empty string and if list contains one element,
        // it will return a string of that element

        // 2.2. Remove query params (so ? and beyond) if any
        path = path.split("?")[0]; // If separator is not found or is omitted,
        // the array contains one element consisting of the entire string so [0]
        // will always work

        if (path === "") {
            return path;
        } else {
            return "/" + path;
        }
    } else {
        return "";
    }
}

/** Determines whether the string includes another string within it
 * @param {String} string2 - the string to test whether it's included in the string
 * @returns {Boolean} true if string2 is included in string 1 and false otherwise
 */
String.prototype.isIncludedInString = function (string2) {
    // Note: cannot use built in string function "includes" as its not supported by IE
    return this.indexOf(string2) !== -1;
}

/** Returns whether the string contains at least one arabic character or not
 * @returns {Boolean} Returns whether the string containts at least one Arabic
 * character
 */
String.prototype.hasAnArabicCharacter = function () {
    // Define the arabic char unicode range: u0600-\u06FF as a regular expression
    const arabicCharUnicodeRange = /[\u0600-\u06FF]/;
    // Brackets: matches any one of the characters in the brackets
    // -: defines a range (period)
    // \u: Matches the character with the Unicode value hhhh (hexadecimal digits)

    // Return whether at least one of the string's characters match the 
    // regular expression
    return arabicCharUnicodeRange.test(this);
}

/** Returns the HTTPS version of the URL
 * @returns {String} the HTTPS version of a URL if the string is not whitespace only.
 *  Otherwise, an empty string is returned. If the URL doesn't contain a protocol
 * or contains a different protocol than HTTP/HTTPS, the URL is returned as is.
 */
String.prototype.getHttpsVersionOfURL = function () {
    if (!this.isWhiteSpaceOnly()) {
        const url = this.toLowerCase();

        // CASE 1: If the url doesn't have a protocol or have a different protocol 
        // than HTTP/HTTPS
        if (!url.isIncludedInString("http")) { // Note: not  using the built
            // in function includes() as it's not supported in IE
            return url;
        }
        // CASE 2: If the protocol contains an HTTP/HTTPS protocol
        return url.isPrefix("https") ? url : url.replace("http", "https");
        // replace replace first occurance only
    } else {
        return "";
    }
}

/** Replaces the escaped XML characters in the string, if any,
 * with the corresponding non-escaped characters
 * @returns {String} the string where all escaped XML characters are replaced
 * by the corresponding non-escaped character.
 */
String.prototype.replaceEscapedXMLCharactersWithNonEscapedCharacters = function () {
    return this
        .replace(/&quot;/g, "\"")
        .replace(/&apos;/g, "\'")
        .replace(/&lt;/g, "<")
        .replace(/&amp;/g, "&")
        .replace(/&gt;/g, ">");
    // g for global match (to not stop at first match)
}

/** Escapes all of the special characters, used in regular expression logic,
 * that exist in the passed string so when the string is used in a regular
 * expression, those characters will be treated as a part of the string rather
 * than a special character for the regEx logic
 * @returns {String} the string where all of the special characters
 *  of regular expressions are escaped, if any.
 */
String.prototype.escapeSpecialCharactersOfRegExpInAString = function () {
    /*
    []: matches any one of the characters in the brackets
    |: OR
    */
    return this.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    // $& means the whole matched string
}

/** Replaces non-valid URL charatcers existing in the string with
 *  the passed symbol
 * @returns {String} Returns the string after replacing any non-valid
 * URL characters with the passed symbol
 */
String.prototype.replaceNonValidURLCharsWithSymbol = function (symbol) {
    // None valid char list is anything that is not from the following list:
    // ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~:/?
    // #[]@!$&'()*+,;=

    // Replace any non-valid URL character with an underscore
    return this.replace(/[^a-zA-Z0-9-\._~\:\/\?#\[\]\@\!\$\&'\(\)\*\+\,\;\=]/g, symbol);

    // ^ in a char set: A negated or complemented character set. That is, it matches
    // anything that is not enclosed in the brackets
}

/** Replaces white spaces, new lines, the symbols "'<>&[!@#$%^*(),?":{}|<>] and
 *  invalid URL characters with an underscore
 * @returns {String} Returns the string after replacing the special
 * characters with underscore
 */
String.prototype.replaceSpecialCharactersWithUnderscore = function () {

    const symbol = "_";

    return this
        .replaceNonValidURLCharsWithSymbol(symbol) // replace non valid URL chars
        .replace(/[\s\n'"<>&\!\@#\$%\^\*\|\(\)\,\?\:\{\}\[\]]/g, symbol);
    // Replace additional special characters with an underscore 
    // as well (if they still exist after URL): white space, new line,
    // "'<>&[!@#$%^*(),?":{}|<>]

    /* Note special characters in regular expressions has to be escaped them with
     *  a \ to indicate I wanted a literal character. */
}