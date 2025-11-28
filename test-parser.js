import { parseMenuText } from './lib/utils.js'

const testCases = [
    // Should be REMOVED
    "Rumah Makan Nek Chik menyediakan servis penghantaran untuk makanan tengah hari...", // Too long, keywords, > 5 words
    "Menu Hari Ini", // Keyword "menu"
    "Call 0123456789", // Digits
    "SUPER DELICIOUS FOOD", // All caps (if > 5 words or other rules apply, but wait, rule 5 says not all uppercase)
    "Ayam Masak Merah!", // Punctuation
    "Nasi", // Too short (< 2 words)

    // Should be KEPT
    "Ayam Masak Merah",
    "Nasi Goreng Kampung",
    "Ikan Keli Berlada",
    "Sayur Campur"
]

console.log("Testing Parser Logic...\n")

const rawText = testCases.join('\n')
const result = parseMenuText(rawText)

console.log("Parsed Result:")
console.log(JSON.stringify(result, null, 2))

// Verification
const expected = [
    "Nasi Putih", // Auto-added
    "Ayam Masak Merah",
    "Nasi Goreng Kampung",
    "Ikan Keli Berlada",
    "Sayur Campur"
]

const isCorrect = JSON.stringify(result) === JSON.stringify(expected)
console.log("\nVerification:", isCorrect ? "PASSED ✅" : "FAILED ❌")

if (!isCorrect) {
    console.log("Expected:", expected)
    console.log("Got:", result)
}
