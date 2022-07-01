function generateQuote() {
    let quotes = {
        "― Albert Einstein ": "Our task must be to free ourselves... by widening our circle of compassion to embrace all living creatures and the whole of nature and it's beauty.",
        "― Pierce Brown, Red Rising ": "Man cannot be freed by the same injustice that enslaved it.",
        "― Deepak Chopra ": "Sex is always about emotions. Good sex is about free emotions; bad sex is about blocked emotions.",
        "― Madeline Miller, The Song of Achilles ": "Bury us, and mark our names above. Let us be free.",
        "― Jon Krakauer, Into the Wild ": "He was unheeded, happy, and near to the wild heart of life. He was alone and young and wilful and wildhearted, alone amid a waste of wild air and brackish waters and the seaharvest of shells and tangle and veiled grey sunlight."
    }

    let authors = Object.keys(quotes);
    let author = authors[Math.floor(Math.random() * authors.length)];
    let quote = quotes[author];

    document.getElementById('quote').innerHTML = quote;
    document.getElementById('author').innerHTML = author;
}