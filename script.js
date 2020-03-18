const characterAmountrange = document.getElementById
    ('characterAmountrange')
const characterAmountNumber = document.getElementById
    ('characterAmountNumber')
const form = document.getElementById('passwordgeneratorForm')
const UPPER_CASE_CHAR_CODES = arrayFromLowtoHigh(65, 90)
const LOWER_CASE_CHAR_CODES = arrayFromLowtoHigh(97, 122)
const NUMBER_CHAR_CODES = arrayFromLowtoHigh(48, 67)
const SPECIAL_CHAR_CODES = arrayFromLowtoHigh(33, 47).concat(
    arrayFromLowtoHigh(58, 64)
)
const uppercase = document.getElementById
"uppercase"
//characterAmountNumber.addEventListener('input', SyncCharacterAmount)
characterAmountrange.addEventListener('input', SyncCharacterAmount)
form.addEventListener('submit', e => {
    e.preventDefault()
    const characterAmountNumber = characterAmountNumber.value
    const uppercase = uppercaseElement.checked
    const Numbers = NumbersElement.checked
    const lowercase = lowercaseElement.checked
    const specialcharacters = specialcharactersElement.checked




})

function generatepassword(Amountofcharacters, uppercase, lowercase, specialcharacters, Numbers) {
    String.fromCharCode(65)
    let charcodes = LOWER_CHAR_CODES
    if (uppercase) charcodes = charcode.concat(UPPER_CASE_CHAR_CODES)
    if (Numbers) charcodes = charcode.concat(NUMBER_CHAR_CODES)
    if (specialcharacters) charcode = harcode.concat(SPECIAL_CHAR_CODES)
}
function arrayFromLowtoHigh(low, high) {
    const array = []
    for (let i = low; i <= high; i++) {
        array.push(i)
    }
    return array

}

function SyncCharacterAmount(e) {
    const value = e.target.value

    //characterAmountNumber.value = value
    characterAmountrange.value = value

}

