// Test strings
var testStrings = {
    whitespace1: "hello everybody!",
    whitespace2: " Hello World ",
    whitespace3: "       ",
    whitespace4: " ",
    isPrefix1: "image/png",
    isPrefix2: "xxx/image/png",
    isPrefix3: "https\\x\\x",
    isPrefix4: "  http\\x\\x",
    isPrefix5: "image/png",
    getFirstWord1: "   Ahmed    Saleh Algamdi",
    getFirstWord2: " Muhammad Ali ",
    getFirstWord3: "   ",
    getFirstAndLastWord1: "   Ahmed    Saleh Aymen Raed Algamdi",
    getFirstAndLastWord2: " Nelson Rolihlahla Mandela ",
    getFirstAndLastWord3: "   ",
    removeFileNameExtension1: "file.name-file.name.png",
    removeFileNameExtension2: "my_cv.pdf",
    removeFileNameExtension3: "filename-filename",
    removeFileNameExtension4: "    ",
    extractPathFromURL1: "https://hostname.com/pathname/p1/p2/p3?q1=1&q2=2",
    extractPathFromURL2: "https://hostname.com:portname/pathname/p1/p2/p3?q1=1&q2=2",
    extractPathFromURL3: "https://hostname.com:portname/pathname/p1/p2/p3?",
    extractPathFromURL4: "https://hostname.com:portname/pathname/p1/p2/p3",
    extractPathFromURL5: "https://hostname.com:portname/",
    extractPathFromURL6: "https://hostname.com:portname",
    extractPathFromURL7: "hostname.com:portname/",
    extractPathFromURL8: "hostname.com:portname",
    extractPathFromURL9: "    ",
    isIncludedInString1: "The Pacific Ocean",
    isIncludedInString2: "The Indian Ocean",
    getHttpsVersionOfURL1: "http://github.com/",
    getHttpsVersionOfURL2: "hTtP://GITHUB.com/",
    getHttpsVersionOfURL3: "https://github.com/",
    getHttpsVersionOfURL4: "HTTPS://GITHUB.com/",
    getHttpsVersionOfURL5: "github.com/",
    getHttpsVersionOfURL6: "GITHUB.com/",
    getHttpsVersionOfURL7: "     ",
    replaceEscapedXMLCharactersWithNonEscapedCharacters1: "&quot; The ocean&apos;s blue &lt; &amp; &gt; &quot;",
    replaceEscapedXMLCharactersWithNonEscapedCharacters2: "Bath &amp; Body Works",
    replaceEscapedXMLCharactersWithNonEscapedCharacters3: "      ",
    escapeSpecialCharactersOfRegExpInAString1: '.*+?^${}()\\ \\\\ \'',
    escapeSpecialCharactersOfRegExpInAString2: "How are you?",
    replaceSpecialCharactersWithUnderscore1: "     \n\n\"'<>&",
    replaceSpecialCharactersWithUnderscore2: " my<>cv.pdf",
    replaceSpecialCharactersWithUnderscore3: " \n'\"<>&!@#$%^*|(),?:{}[]",
    replaceSpecialCharactersWithUnderscore4: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~:/?#[]@!$&'()*+,;={}|^",
    replaceSpecialCharactersWithUnderscore5: "ab",
    replaceSpecialCharactersWithUnderscore6: "",
    replaceNonValidURLCharsWithSymbol1: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~:/?#[]@!$&'()*+,;={}|^",
    replaceNonValidURLCharsWithSymbol2: " project|1.pdf",
    hasAnArabicCharacter1: "أ",
    hasAnArabicCharacter2: "آ",
    hasAnArabicCharacter3: "ا",
    hasAnArabicCharacter4: "إ",
    hasAnArabicCharacter5: "ب",
    hasAnArabicCharacter6: "ت",
    hasAnArabicCharacter7: "ث",
    hasAnArabicCharacter8: "ج",
    hasAnArabicCharacter9: "ح",
    hasAnArabicCharacter10: "خ",
    hasAnArabicCharacter11: "د",
    hasAnArabicCharacter12: "ذ",
    hasAnArabicCharacter13: "ر",
    hasAnArabicCharacter14: "ذ",
    hasAnArabicCharacter15: "س",
    hasAnArabicCharacter16: "ش",
    hasAnArabicCharacter17: "ص",
    hasAnArabicCharacter18: "ض",
    hasAnArabicCharacter19: "ط",
    hasAnArabicCharacter20: "ظ",
    hasAnArabicCharacter21: "ع",
    hasAnArabicCharacter22: "غ",
    hasAnArabicCharacter23: "ف",
    hasAnArabicCharacter24: "ق",
    hasAnArabicCharacter25: "ك",
    hasAnArabicCharacter26: "ل",
    hasAnArabicCharacter27: "م",
    hasAnArabicCharacter28: "ن",
    hasAnArabicCharacter29: "ه",
    hasAnArabicCharacter30: "و",
    hasAnArabicCharacter31: "ي",
    hasAnArabicCharacter32: "ى",
    hasAnArabicCharacter33: "ئ",
    hasAnArabicCharacter34: "ء",
    hasAnArabicCharacter35: "ة",
    hasAnArabicCharacter36: "ؤ",
    hasAnArabicCharacter37: "ّ",
    hasAnArabicCharacter38: "َ",
    hasAnArabicCharacter39: "ً",
    hasAnArabicCharacter40: "ِ",
    hasAnArabicCharacter41: "ٍ",
    hasAnArabicCharacter42: "ُ",
    hasAnArabicCharacter43: "ٌ",
    hasAnArabicCharacter44: "ْ",
    hasAnArabicCharacter44: "١",
    hasAnArabicCharacter45: "٢",
    hasAnArabicCharacter46: "٣",
    hasAnArabicCharacter47: "٤",
    hasAnArabicCharacter48: "٥",
    hasAnArabicCharacter49: "٦",
    hasAnArabicCharacter50: "٧",
    hasAnArabicCharacter51: "٨",
    hasAnArabicCharacter52: "٩",
    hasAnArabicCharacter53: "١٠",
    hasAnArabicCharacter54: "؟",
    hasAnArabicCharacter55: "،",
    hasAnArabicCharacter56: "aأ",
    hasAnArabicCharacter57: "Zأ",
    hasAnArabicCharacter58: "0أ",
    hasAnArabicCharacter59: "9أ",
    hasAnArabicCharacter60: "9،",
    hasAnArabicCharacter61: "aZأ",
    hasAnArabicCharacter62: "language: العربية",
    hasAnArabicCharacter63: "a",
    hasAnArabicCharacter64: "Z",
    hasAnArabicCharacter65: "0",
    hasAnArabicCharacter66: "9",
    hasAnArabicCharacter67: "?",
    hasAnArabicCharacter68: "!",
    hasAnArabicCharacter69: ".",
    hasAnArabicCharacter70: ".",
    hasAnArabicCharacter71: ",",
};

// ----------- isWhiteSpaceOnly Unit Tests -----------

console.log("should return false when passing a string that is not white space only & checking if its white space only: ",
    !testStrings.whitespace1.isWhiteSpaceOnly()
        &&
        !testStrings.whitespace2.isWhiteSpaceOnly()
        ? "success" : "failed"
);

console.log("should return true when passing a string that is white space only & checking if its white space only: ",
    testStrings.whitespace3.isWhiteSpaceOnly() &&
        testStrings.whitespace4.isWhiteSpaceOnly() ? "success" : "failed"
);

// ----------- isPrefix() Unit Tests -----------

console.log("should return true when passing the text '\"image/png\"' with a possible prefix as '\"image/\"' to the isPrefix function: ",
    testStrings.isPrefix1.isPrefix("image/") ? "success" : "failed"
);

console.log("should return false when passing the text '\"xxx/image/png\"' with a possible prefix as '\"image/\"' to the isPrefix function: ",
    testStrings.isPrefix2.isPrefix("image/") ? "failed" : "success"
);

console.log("should return true when passing the text '\"https\\x\\x\"' with a possible prefix as '\"https/\"' to the isPrefix function: ",
    testStrings.isPrefix3.isPrefix("https") ? "success" : "failed"
);

console.log("should return false when passing the text '\"http\\x\\x\"' with a possible prefix as '\"https/\"' to the isPrefix function: ",
    testStrings.isPrefix4.isPrefix("https") ? "failed" : "success"
);

console.log("should return false when passing the text \"image/png\" with a possible prefix as '\"IMAGE/\"' to the isPrefix function as it's case sensitive: ",
    testStrings.isPrefix5.isPrefix("IMAGE/") ? "failed" : "success"
);

// ----------- getFirstWord() Unit Tests -----------

console.log("should return first word of string when requesting first word and passing a non-empty string: ",
    testStrings.getFirstWord1.getFirstWord() === 'Ahmed' &&
        testStrings.getFirstWord2.getFirstWord() === 'Muhammad'
        ? "success" : "failed"
);

console.log("should return empty string when requesting first word but passing an empty string: ",
    testStrings.getFirstWord3.getFirstWord() === '' ? "success" : "failed"
);

// ----------- getFirstAndLastWord() Unit Tests -----------

console.log("should return first and last of string when requesting first word and last word and passing a non-empty string",
    testStrings.getFirstAndLastWord1.getFirstAndLastWord() === 'Ahmed Algamdi'
        &&
        testStrings.getFirstAndLastWord2.getFirstAndLastWord() === 'Nelson Mandela'
        ? "success" : "failed"
);

console.log("should return empty string when requesting first word and last word but passing an empty string: ",
    testStrings.getFirstAndLastWord3.getFirstAndLastWord() === '' ? "success" : "failed"
);

// ----------- removeFileNameExtension() Unit Tests -----------

console.log("should return '\"file.name-file.name\"' when passing '\"file.name-file.name.png\"' to the removeFileNameExtension from filename: ",
    testStrings.removeFileNameExtension1.removeFileNameExtension() === "file.name-file.name" ? "success" : "failed"
);

console.log("should return \"my_cv\" when passing \"my_cv.pdf\" to the removeFileNameExtension from filename: ",
    testStrings.removeFileNameExtension2.removeFileNameExtension() === "my_cv" ? "success" : "failed"
);

console.log("should return '\"file.name-file.name\"' when passing '\"file.name-file.name\"' to the removeFileNameExtension from filename: ",
    testStrings.removeFileNameExtension3.removeFileNameExtension() === "filename-filename" ? "success" : "failed"
);

console.log("should return an empty string when passing a white space string the removeFileNameExtension from filename: ",
    testStrings.removeFileNameExtension4.removeFileNameExtension() === "" ? "success" : "failed"
);

// ----------- extractPathFromURL() Unit Tests -----------

console.log("should return '/pathname/p1/p2/p3' when passing 'https://hostname.com/pathname/p1/p2/p3?q1=1&q2=2' to the extractPathFromURL function: ",
    testStrings.extractPathFromURL1.extractPathFromURL() === "/pathname/p1/p2/p3" ? "success" : "failed"
);

console.log("should return '/pathname/p1/p2/p3' when passing 'https://hostname.com:portname/pathname/p1/p2/p3?q1=1&q2=2' to the extractPathFromURL function: ",
    testStrings.extractPathFromURL2.extractPathFromURL() === "/pathname/p1/p2/p3" ? "success" : "failed"
);

console.log("should return '/pathname/p1/p2/p3' when passing 'https://hostname.com:portname/pathname/p1/p2/p3?' to the extractPathFromURL function: ",
    testStrings.extractPathFromURL3.extractPathFromURL() === "/pathname/p1/p2/p3" ? "success" : "failed"
);

console.log("should return '/pathname/p1/p2/p3' when passing 'https://hostname.com:portname/pathname/p1/p2/p3' to the extractPathFromURL function: ",
    testStrings.extractPathFromURL4.extractPathFromURL() === "/pathname/p1/p2/p3" ? "success" : "failed"
);

// no path name case
console.log("should return '' when passing 'https://hostname.com:portname/' to the extractPathFromURL function: ",
    testStrings.extractPathFromURL5.extractPathFromURL() === "" ? "success" : "failed"
);

console.log("should return '' when passing 'https://hostname.com:portname' to the extractPathFromURL function: ",
    testStrings.extractPathFromURL6.extractPathFromURL() === "" ? "success" : "failed"
);

console.log("should return '' when passing 'hostname.com:portname/' to the extractPathFromURL function: ",
    testStrings.extractPathFromURL7.extractPathFromURL() === "" ? "success" : "failed"
);

console.log("should return '' when passing 'hostname.com:portname' to the extractPathFromURL function: ",
    testStrings.extractPathFromURL8.extractPathFromURL() === "" ? "success" : "failed"
);

console.log("should return an empty string when passing a string of whitespace to the extractPathFromURL function: ",
    testStrings.extractPathFromURL9.extractPathFromURL() === "" ? "success" : "failed"
);

// ----------- isIncludedInString() Unit Tests -----------

console.log("should return true when checking if 'Pacific' is included in the string 'The Pacific Ocean': ",
    testStrings.isIncludedInString1.isIncludedInString("Pacific") ? "success" : "failed"
);

console.log("should return false when checking if 'Pacific' is included in the string 'The Indian Ocean': ",
    !testStrings.isIncludedInString2.isIncludedInString("Pacific") ? "success" : "failed"
);

// ----------- hasAnArabicCharacter() Unit Tests -----------

console.log("should return true when passing text that has at least one Arabic character to the hasAnArabicCharacter function: ",
    // Letters
    testStrings.hasAnArabicCharacter1.hasAnArabicCharacter() &&
        testStrings.hasAnArabicCharacter2.hasAnArabicCharacter() &&
        testStrings.hasAnArabicCharacter3.hasAnArabicCharacter() &&
        testStrings.hasAnArabicCharacter4.hasAnArabicCharacter() &&
        testStrings.hasAnArabicCharacter5.hasAnArabicCharacter() &&
        testStrings.hasAnArabicCharacter6.hasAnArabicCharacter() &&
        testStrings.hasAnArabicCharacter7.hasAnArabicCharacter() &&
        testStrings.hasAnArabicCharacter8.hasAnArabicCharacter() &&
        testStrings.hasAnArabicCharacter9.hasAnArabicCharacter() &&
        testStrings.hasAnArabicCharacter10.hasAnArabicCharacter() &&
        testStrings.hasAnArabicCharacter11.hasAnArabicCharacter() &&
        testStrings.hasAnArabicCharacter12.hasAnArabicCharacter() &&
        testStrings.hasAnArabicCharacter13.hasAnArabicCharacter() &&
        testStrings.hasAnArabicCharacter14.hasAnArabicCharacter() &&
        testStrings.hasAnArabicCharacter15.hasAnArabicCharacter() &&
        testStrings.hasAnArabicCharacter16.hasAnArabicCharacter() &&
        testStrings.hasAnArabicCharacter17.hasAnArabicCharacter() &&
        testStrings.hasAnArabicCharacter18.hasAnArabicCharacter() &&
        testStrings.hasAnArabicCharacter19.hasAnArabicCharacter() &&
        testStrings.hasAnArabicCharacter20.hasAnArabicCharacter() &&
        testStrings.hasAnArabicCharacter21.hasAnArabicCharacter() &&
        testStrings.hasAnArabicCharacter22.hasAnArabicCharacter() &&
        testStrings.hasAnArabicCharacter23.hasAnArabicCharacter() &&
        testStrings.hasAnArabicCharacter24.hasAnArabicCharacter() &&
        testStrings.hasAnArabicCharacter25.hasAnArabicCharacter() &&
        testStrings.hasAnArabicCharacter26.hasAnArabicCharacter() &&
        testStrings.hasAnArabicCharacter27.hasAnArabicCharacter() &&
        testStrings.hasAnArabicCharacter28.hasAnArabicCharacter() &&
        testStrings.hasAnArabicCharacter29.hasAnArabicCharacter() &&
        testStrings.hasAnArabicCharacter30.hasAnArabicCharacter() &&
        testStrings.hasAnArabicCharacter31.hasAnArabicCharacter() &&
        testStrings.hasAnArabicCharacter32.hasAnArabicCharacter() &&
        testStrings.hasAnArabicCharacter33.hasAnArabicCharacter() &&
        testStrings.hasAnArabicCharacter34.hasAnArabicCharacter() &&
        testStrings.hasAnArabicCharacter35.hasAnArabicCharacter() &&
        testStrings.hasAnArabicCharacter36.hasAnArabicCharacter() &&
        // Arabic symbols       
        testStrings.hasAnArabicCharacter37.hasAnArabicCharacter() &&
        testStrings.hasAnArabicCharacter38.hasAnArabicCharacter() &&
        testStrings.hasAnArabicCharacter39.hasAnArabicCharacter() &&
        testStrings.hasAnArabicCharacter40.hasAnArabicCharacter() &&
        testStrings.hasAnArabicCharacter41.hasAnArabicCharacter() &&
        testStrings.hasAnArabicCharacter42.hasAnArabicCharacter() &&
        testStrings.hasAnArabicCharacter43.hasAnArabicCharacter() &&
        // Arabic numbers
        testStrings.hasAnArabicCharacter44.hasAnArabicCharacter() &&
        testStrings.hasAnArabicCharacter45.hasAnArabicCharacter() &&
        testStrings.hasAnArabicCharacter46.hasAnArabicCharacter() &&
        testStrings.hasAnArabicCharacter47.hasAnArabicCharacter() &&
        testStrings.hasAnArabicCharacter48.hasAnArabicCharacter() &&
        testStrings.hasAnArabicCharacter49.hasAnArabicCharacter() &&
        testStrings.hasAnArabicCharacter50.hasAnArabicCharacter() &&
        testStrings.hasAnArabicCharacter51.hasAnArabicCharacter() &&
        testStrings.hasAnArabicCharacter52.hasAnArabicCharacter() &&
        testStrings.hasAnArabicCharacter53.hasAnArabicCharacter() &&
        // Arabic punctuation
        testStrings.hasAnArabicCharacter54.hasAnArabicCharacter() &&
        testStrings.hasAnArabicCharacter55.hasAnArabicCharacter() &&
        // A string with at least one Arabic character
        testStrings.hasAnArabicCharacter56.hasAnArabicCharacter() &&
        testStrings.hasAnArabicCharacter57.hasAnArabicCharacter() &&
        testStrings.hasAnArabicCharacter58.hasAnArabicCharacter() &&
        testStrings.hasAnArabicCharacter59.hasAnArabicCharacter() &&
        testStrings.hasAnArabicCharacter60.hasAnArabicCharacter() &&
        testStrings.hasAnArabicCharacter61.hasAnArabicCharacter() &&
        testStrings.hasAnArabicCharacter62.hasAnArabicCharacter()
        ? "success" : "failed"
);

console.log("should return false when passing text that has no Arabic character to the hasAnArabicCharacter function: ",
    // Strings with not a single arabic character
    !testStrings.hasAnArabicCharacter63.hasAnArabicCharacter() &&
        !testStrings.hasAnArabicCharacter64.hasAnArabicCharacter() &&
        !testStrings.hasAnArabicCharacter65.hasAnArabicCharacter() &&
        !testStrings.hasAnArabicCharacter66.hasAnArabicCharacter() &&
        !testStrings.hasAnArabicCharacter67.hasAnArabicCharacter() &&
        !testStrings.hasAnArabicCharacter68.hasAnArabicCharacter() &&
        !testStrings.hasAnArabicCharacter69.hasAnArabicCharacter() &&
        !testStrings.hasAnArabicCharacter70.hasAnArabicCharacter() &&
        !testStrings.hasAnArabicCharacter71.hasAnArabicCharacter() ? "success" : "failed"
);

// ----------- getHttpsVersionOfURL() Unit Tests -----------

console.log("should return 'https://github.com/' when passing 'http://github.com/' to the getHttpsVersionOfURL function: ",
    testStrings.getHttpsVersionOfURL1.getHttpsVersionOfURL() === "https://github.com/" ? "success" : "failed"
);

console.log("should return 'https://github.com/' when passing 'hTtP://GITHUB.com/' to the getHttpsVersionOfURL function: ",
    testStrings.getHttpsVersionOfURL2.getHttpsVersionOfURL() === "https://github.com/" ? "success" : "failed"
);

console.log("should return 'https://github.com/' when passing 'https://github.com/' to the getHttpsVersionOfURL function: ",
    testStrings.getHttpsVersionOfURL3.getHttpsVersionOfURL() === "https://github.com/" ? "success" : "failed"
);

console.log("should return 'https://github.com/' when passing 'HTTPS://GITHUB.com/' to the getHttpsVersionOfURL function: ",
    testStrings.getHttpsVersionOfURL4.getHttpsVersionOfURL() === "https://github.com/" ? "success" : "failed"
);

console.log("should return 'github.com/' when passing 'github.com/' to the getHttpsVersionOfURL function (no protocol case): ",
    testStrings.getHttpsVersionOfURL5.getHttpsVersionOfURL() === "github.com/" ? "success" : "failed"
);

console.log("should return 'github.com/' when passing 'GITHUB.com/' to the getHttpsVersionOfURL function (no protocol case): ",
    testStrings.getHttpsVersionOfURL6.getHttpsVersionOfURL() === "github.com/" ? "success" : "failed"
);

console.log("should return an empty string when passing only whitespace to the getHttpsVersionOfURL function: ",
    testStrings.getHttpsVersionOfURL7.getHttpsVersionOfURL("     ") === "" ? "success" : "failed"
);

// ----------- replaceEscapedXMLCharactersWithNonEscapedCharacters() Unit Tests -----------

console.log("should return '\"The ocean's blue < & > \"' when passing '&quot; The ocean&apos;s blue &lt; &amp; &gt; &quot;': ",
    testStrings.replaceEscapedXMLCharactersWithNonEscapedCharacters1.replaceEscapedXMLCharactersWithNonEscapedCharacters() === "\" The ocean's blue < & > \"" ?
        "success" : "failed"
);

console.log("should return 'Bath & Body Works' when passing 'Bath &quot; Body Works': ",
    testStrings.replaceEscapedXMLCharactersWithNonEscapedCharacters2.replaceEscapedXMLCharactersWithNonEscapedCharacters() === "Bath & Body Works" ?
        "success" : "failed"
);

console.log("should return the same string if a string of whitespace only is passed to replaceEscapedXMLCharactersWithNonEscapedCharacters(): ",
    testStrings.replaceEscapedXMLCharactersWithNonEscapedCharacters3.replaceEscapedXMLCharactersWithNonEscapedCharacters() === "      " ?
        "success" : "failed"
);

// ----------- escapeSpecialCharactersOfRegExpInAString() Unit Tests -----------

console.log("should escape the regular expression \'.*+?^${}()\\ \\\\ \' and return \'\\.\\*\\+\\?\\^\\$\\{\\}\\(\\)\\\\ \\\\\\\\\': ",
    testStrings.escapeSpecialCharactersOfRegExpInAString1.escapeSpecialCharactersOfRegExpInAString() === '\\.\\*\\+\\?\\^\\$\\{\\}\\(\\)\\\\ \\\\\\\\ \'' ? "success" : "failed"
);

console.log("should escape the regular expression 'How are you?' and return 'How are you\\?': ",
    testStrings.escapeSpecialCharactersOfRegExpInAString2.escapeSpecialCharactersOfRegExpInAString() === 'How are you\\?' ? "success" : "failed"
);

// ----------- replaceSpecialCharactersWithUnderscore() Unit Tests -----------

console.log("should replace all special characters '\\s\\n\"'<>&' to undersocre when passing '     \n\n\"'<>&' to replaceSpecialCharactersWithUnderscore: ",
    testStrings.replaceSpecialCharactersWithUnderscore1.replaceSpecialCharactersWithUnderscore() === "____________" ? "success" : "failed"
);

console.log("should replace all special characters to underscore when passing ' my<>cv.pdf' to replaceSpecialCharactersWithUnderscore: ",
    testStrings.replaceSpecialCharactersWithUnderscore2.replaceSpecialCharactersWithUnderscore() === "_my__cv.pdf" ? "success" : "failed"
);

console.log("should replace all extra forbidden characters to underscore when passing ' \n'\"<>&!@#$%^*|(),?:{}[]' to replaceSpecialCharactersWithUnderscore: ",
    testStrings.replaceSpecialCharactersWithUnderscore3.replaceSpecialCharactersWithUnderscore() === "________________________" ? "success" : "failed"
);

console.log("should replace non valid URL chars & forbidden characters with underscore when passing 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~:/?#[]@!$&'()*+,;={}|^' to replaceSpecialCharactersWithUnderscore: ",
    testStrings.replaceSpecialCharactersWithUnderscore4.replaceSpecialCharactersWithUnderscore() === "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~_/____________+_;=____" ?
        "success" : "failed"
);

console.log("should return string as is when it has no invalid URL chars and no forbidden characters to replaceSpecialCharactersWithUnderscore: ",
    testStrings.replaceSpecialCharactersWithUnderscore5.replaceSpecialCharactersWithUnderscore("ab") === "ab" &&
        testStrings.replaceSpecialCharactersWithUnderscore6.replaceSpecialCharactersWithUnderscore("") === "" ?
        "success" : "failed"
);

// ----------- replaceNonValidURLCharsWithSymbol() Unit Tests -----------

console.log("should replace non valid URL chars with underscore when passing 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~:/?#[]@!$&'()*+,;={}|^' to replaceNonValidURLCharsWithSymbol: ",
    testStrings.replaceNonValidURLCharsWithSymbol1.replaceNonValidURLCharsWithSymbol("_") === "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~:/?#[]@!$&'()*+,;=____" ?
        "success" : "failed"
);

console.log("should replace non valid URL chars with underscore when passing ' project|1.pdf' to replaceNonValidURLCharsWithSymbol: ",
    testStrings.replaceNonValidURLCharsWithSymbol2.replaceNonValidURLCharsWithSymbol("_") === "_project_1.pdf" ?
        "success" : "failed"
);
