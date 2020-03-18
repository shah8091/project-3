const characterAmountrange = document.getElementById
    ('characterAmountrange')
const characterAmountNumbers = document.getElementById
    ('CharacterAmountNumbers')
characterAmountNumbers.addEventListener('input', syncNumbers)
characterAmountrange.addEventListener('input', syncAmount)


function SyncAmount(e) {
    const value = e.target.value
    characterAmountNumbers.value = value
    characterAmountrange.value = value
}