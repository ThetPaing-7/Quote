
document.getElementById("generate").addEventListener("click", () => {
    setQuote();
})

document.getElementById("copy").addEventListener("click", ()  => {
    copy();
})

function copy() {
    const text = document.querySelector("#quote").textContent;

    // Use the Clipboard API to copy the text
    navigator.clipboard.writeText(text).then(() => {
        alert("Text copied to clipboard!");
    }).catch(err => {
        console.error("Failed to copy text: ", err);
    });
}


function setQuote(){
    let x = generateQuote();
    let get = x.getQuote();
    let author = get.authors;
    let quote = get.quotes; 
    document.querySelector("#author").textContent = author;
    document.querySelector("#quote").textContent = quote;

    
}

function generateQuote() {
    const Quotes = [
        {
            quotes: "The only limit to our realization of tomorrow is our doubts of today.",
            authors: "Franklin D. Roosevelt",
        },
        {
            quotes: "In three words I can sum up everything I've learned about life: it goes on.",
            authors: "Robert Frost",
        },
        {
            quotes: "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
            authors: "Ralph Waldo Emerson",
        },
        {
            quotes: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
            authors: "Winston Churchill",
        },
        {
            quotes: "You miss 100% of the shots you don’t take.",
            authors: "Wayne Gretzky",
        },
        {
            quotes: "In the end, we will remember not the words of our enemies, but the silence of our friends.",
            authors: "Martin Luther King Jr.",
        },
        {
            quotes: "It does not matter how slowly you go as long as you do not stop.",
            authors: "Confucius",
        },
        {
            quotes: "Life is what happens when you're busy making other plans.",
            authors: "John Lennon",
        },
        {
            quotes: "Do what you can, with what you have, where you are.",
            authors: "Theodore Roosevelt",
        },
        {
            quotes: "Happiness is not something ready-made. It comes from your own actions.",
            authors: "Dalai Lama",
        },
        {
            quotes: "We make a living by what we get, but we make a life by what we give.",
            authors: "Winston Churchill",
        },
        {
            quotes: "You only live once, but if you do it right, once is enough.",
            authors: "Mae West",
        },
        {
            quotes: "To love and be loved is to feel the sun from both sides.",
            authors: "David Viscott",
        },
        {
            quotes: "The purpose of our lives is to be happy.",
            authors: "Dalai Lama",
        },
        {
            quotes: "If you judge people, you have no time to love them.",
            authors: "Mother Teresa",
        },
        {
            quotes: "The only way to do great work is to love what you do.",
            authors: "Steve Jobs",
        },
        {
            quotes: "It always seems impossible until it’s done.",
            authors: "Nelson Mandela",
        },
        {
            quotes: "The best way to predict the future is to invent it.",
            authors: "Alan Kay",
        },
        {
            quotes: "What lies behind us and what lies before us are tiny matters compared to what lies within us.",
            authors: "Ralph Waldo Emerson",
        },
        {
            quotes: "The journey of a thousand miles begins with one step.",
            authors: "Lao Tzu",
        },

    ];

    return{
        getQuote(){
            let item = Math.round(Math.random() * Quotes.length)
            return Quotes[item];
        }
    };
}


