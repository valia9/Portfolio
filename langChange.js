// Create language switcher instance
var lang = new Lang();
Lang.prototype.pack.en = {
    "token": {
        "O mně": "About",
        "Projekty": "Projects",
        "Kontakt": "Contact",

        "Ahoj, tady je": "Hi, my name is",
        "Jsem juniorní vývojářka se sídlem v Praze 👩‍💻": "I am a junior web developer based in Prague 👩‍💻",

        "Dovednosti ✍️": "Skills ✍️",

        "Školení 💻": "Training 💻",
        "od Colte Steele": "from Colt Steele",
        "od Jonase Schmedtmanne": "from Jonas Schmedtmann",
        "od Czechitas": "from Czechitas",
        "od Coursery": "from Coursera",

        "Různé ⛄️": "Misc ⛄️",

        "Mluvím 🇬🇧, 🇨🇿 a 🇷🇺": "I speak 🇬🇧, 🇨🇿 and 🇷🇺",
        "Studuji Marketing a Mezinárodní Obchod (Ing.) 🌎": "I study Marketing and International Business (Ing.) 🌎",
        "Ráda vařím, čtu a běhám 🏃‍♀️": "I like to cook, read and run 🏃‍♀️",
        "Codewars rank: 6 kyu v JS 🏆": "Codewars rank: 6 kyu in JS 🏆",

        "Plantino je webová aplikace, která sleduje zalévání vašich kytiček místo vás.": "Plantino is a web application that tracks the watering of your plants for you.",
        "Je vyvíjená v MERN stacku pomocí REST API.": "Plantino is developed in MERN stack and it uses REST API through Axios.",
        "Dozvědět více se dá buď na": "Find out more at",
        "nebo na": "or",

        "FarMarkt (in progress) je webový portal, poskytující informaci o farmářských trzích v Praze.": "FarMarkt (in progress) is a webpage that provides information about the farmers' markets in Prague.",
        "Je vyvíjený v HTML, SCSS a vanillaJS pomocí REST API.": "FarMarkt is developed in HTML, SCSS and vanillaJS and it uses REST API.",
        "Dozvědět více se dá na": "Find out more at",

        "Tato stránka 🙋‍♀️": "This page 🙋‍♀️",
        "Moje portfolio je vyvíjené v HTML, SCSS a vanillaJS.": "My portfolio is developed in HTML, SCSS a vanillaJS.",
        "Zdrojový kod je k dispozici na": "The source code is available at",
        
        "Napište mi zprávu!": "Write me a message!",
        "Vaše jmeno": "Your name",
        "Váš email": "Your email",
        "Vaše zpráva": "Your message",
        "Odeslát": "Send",
  
    }
}

lang.init({
    defaultLang: 'cs'
});