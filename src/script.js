var theme = document.querySelector(".theme");
var button = document.querySelector(".button");
var statusText = document.querySelector(".status");
var input = document.querySelector('.input');
var output = document.querySelector('.output');
var translateButton = document.querySelector(".translate-button");
button.addEventListener('click', function click() {
    if (theme.classList.contains('light')) {
        theme.classList.remove('light');
        theme.classList.add('dark');
        statusText.innerText = 'Now the version of site is dark 🌙';
    }
    else {
        theme.classList.remove('dark');
        theme.classList.add('light');
        statusText.innerText = 'Now the version of site is light 💡';
    }
});
translateButton.addEventListener('click', function translate() {
    var translate = input.value;
    function decodeMorse(morseCode) {
        var morseDictionary = {
            '.-': 'a',
            '-...': 'b',
            '-.-.': 'c',
            '-..': 'd',
            '.': 'e',
            '..-.': 'f',
            '--.': 'g',
            '....': 'h',
            '..': 'i',
            '.---': 'j',
            '-.-': 'k',
            '.-..': 'l',
            '--': 'm',
            '-.': 'n',
            '---': 'o',
            '.--.': 'p',
            '--.-': 'q',
            '.-.': 'r',
            '...': 's',
            '-': 't',
            '..-': 'u',
            '...-': 'v',
            '.--': 'w',
            '-..-': 'x',
            '-.--': 'y',
            '--..': 'z',
            '.----': '1',
            '..---': '2',
            '...--': '3',
            '....-': '4',
            '.....': '5',
            '-....': '6',
            '--...': '7',
            '---..': '8',
            '----.': '9',
            '-----': '0',
            "...---...": 'SOS',
            '--..--': ',',
            '.-.-.-': '.',
            '-.-.--': '!',
            '..--..': '?',
            '-..-.': '/',
            '-....-': '-',
            '-.--.': '(',
            '-.--.-': ')',
            '.-...': '&',
            '---...': ':',
            '-.-.-.': ';',
            '-...-': '=',
            '.-.-.': '+',
            '..--.-': '_',
            '.-..-.': '"',
            '...-..-': '$',
            '.--.-.': '@',
            '/': ' ',
        };
        return morseCode
            .trim()
            .split('   ')
            .map(function (word) {
                return word
                    .split(' ')
                    .map(function (letter) { return morseDictionary[letter]; })
                    .join('')
                    .toUpperCase();
            })
            .join(' ');
    }
    output.value = decodeMorse(translate);
});
