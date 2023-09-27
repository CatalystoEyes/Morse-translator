const theme = document.querySelector(".theme") as HTMLFormElement
const button = document.querySelector(".button") as HTMLFormElement
const statusText = document.querySelector(".status") as HTMLFormElement
const input = document.querySelector('.input') as HTMLFormElement
const output = document.querySelector('.output') as HTMLFormElement
const translateButton = document.querySelector(".translate-button") as HTMLFormElement

button.addEventListener('click', function click() {
    if (theme.classList.contains('light')) {
        theme.classList.remove('light');
        theme.classList.add('dark');
        statusText.innerText = 'Now the version of site is dark 🌙'
    }
    else {
        theme.classList.remove('dark');
        theme.classList.add('light');
        statusText.innerText = 'Now the version of site is light 💡'
    }
})

translateButton.addEventListener('click', function translate() {
    const translate: string = input.value
    function decodeMorse(morseCode: string) {
        const morseDictionary: object = {
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
            .map(word =>
                word
                    .split(' ')
                    .map(letter => morseDictionary[letter])
                    .join('')
                    .toUpperCase()
            )
            .join(' ');
    }

    output.value = decodeMorse(translate)
})
