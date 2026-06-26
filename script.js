const translations = {
  en: {
    navHome: "Home",
    navBooks: "Books",
    navAbout: "About Spuddy",
    navColoring: "Coloring Pages",
    navContact: "Contact",
    followBtn: "Follow Spuddy",

    heroTitle: "Big feelings.<br>Little adventures.",
    heroText: "Stories that help little readers explore emotions, build confidence and discover the world around them.",
    heroButton: "Meet Spuddy ♡",

    booksTitle: "☆ Meet the books! ☆",
    amazonButton: "✨ Books Coming Soon",

    feature1Title: "Stories for little readers",
    feature1Text: "Simple, heartwarming stories children can relate to.",
    feature2Title: "Big feelings, little adventures",
    feature2Text: "Helping kids understand emotions and feel less alone.",
    feature3Title: "Perfect for bedtime",
    feature3Text: "Great for parents, teachers and little dreamers.",
    feature4Title: "New books coming soon",
    feature4Text: "Stay tuned for more adventures with Spuddy.",

    aboutTitle: "Meet Spuddy ♡",
    aboutText1: "Spuddy is a little character with big feelings. Sometimes happy, sometimes scared, sometimes angry and sometimes just bored.",
    aboutText2: "Through simple stories, Spuddy helps children talk about their feelings and learn that it is okay to feel everything.",

    contactTitle: "Contact Spuddy",
    contactText: "Have a question, idea or want to say hello? Send a message!",
    contactName: "Your name",
    contactEmail: "Your email",
    contactMessage: "Your message",
    contactButton: "Send message",

    stayTitle: "Join the Hello Spuddy Club 💜",
    stayText: "Be the first to discover new books, free coloring pages and little surprises delivered straight to your inbox.",
    emailPlaceholder: "Your email address",
    subscribeButton: "Subscribe",
    socialTitle: "Follow Spuddy",
    formSuccess: "💜 Thank you for reaching out!<br>Spuddy has received your message and will get back to you soon.",
    newsletterConsent: "I would like to receive the Hello Spuddy newsletter with updates, free activities and special surprises.",
    privacyLink: "Privacy Policy",
    termsLink: "Terms of Use",
    backHome: "Back to homepage"
  },

  pl: {
    navHome: "Start",
    navBooks: "Książki",
    navAbout: "O Spuddym",
    navColoring: "Kolorowanki",
    navContact: "Kontakt",
    followBtn: "Obserwuj Spuddy’ego",

    heroTitle: "Wielkie emocje.<br>Małe przygody.",
    heroText: "Historie, które pomagają małym czytelnikom poznawać emocje, budować pewność siebie i odkrywać świat wokół siebie.",
    heroButton: "Poznaj Spuddy’ego ♡",

    booksTitle: "☆ Poznaj książeczki! ☆",
    amazonButton: "✨ Książeczki już wkrótce",

    feature1Title: "Historie dla małych czytelników",
    feature1Text: "Proste, ciepłe opowieści, w których dzieci mogą odnaleźć siebie.",
    feature2Title: "Wielkie emocje, małe przygody",
    feature2Text: "Pomagają dzieciom rozumieć emocje i czuć, że nie są z nimi same.",
    feature3Title: "Idealne do czytania przed snem",
    feature3Text: "Dla rodziców, nauczycieli i małych marzycieli.",
    feature4Title: "Nowe książeczki już wkrótce",
    feature4Text: "Śledź kolejne przygody Spuddy’ego.",

    aboutTitle: "Poznaj Spuddy’ego ♡",
    aboutText1: "Spuddy to mały bohater z wielkimi emocjami. Czasem jest szczęśliwy, czasem się boi, czasem złości, a czasem po prostu się nudzi.",
    aboutText2: "Dzięki prostym historiom Spuddy pomaga dzieciom rozmawiać o uczuciach i pokazuje, że każda emocja jest w porządku.",

    contactTitle: "Skontaktuj się ze Spuddym",
    contactText: "Masz pytanie, pomysł albo chcesz się przywitać? Napisz wiadomość!",
    contactName: "Twoje imię",
    contactEmail: "Twój e-mail",
    contactMessage: "Twoja wiadomość",
    contactButton: "Wyślij wiadomość",

    stayTitle: "Dołącz do Klubu Hello Spuddy 💜",
    stayText: "Jako pierwszy dowiaduj się o nowych książeczkach, darmowych kolorowankach i małych niespodziankach prosto do swojej skrzynki.",
    emailPlaceholder: "Twój adres e-mail",
    subscribeButton: "Zapisz się",
    socialTitle: "Obserwuj Spuddy’ego",
    formSuccess: "💜 Dziękujemy za kontakt!<br>Spuddy otrzymał Twoją wiadomość i wkrótce się odezwie.",
    newsletterConsent: "Chcę otrzymywać newsletter Hello Spuddy z nowościami, darmowymi materiałami i wyjątkowymi niespodziankami.",
    privacyLink: "Polityka prywatności",
    termsLink: "Regulamin",
    backHome: "Wróć na stronę główną"
  }
};

function setLanguage(language) {
  document.querySelectorAll("[data-i18n]").forEach(element => {
    const key = element.getAttribute("data-i18n");

    if (translations[language] && translations[language][key]) {
      element.innerHTML = translations[language][key];
    }
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach(element => {
    const key = element.getAttribute("data-i18n-placeholder");

    if (translations[language] && translations[language][key]) {
      element.placeholder = translations[language][key];
    }
  });

  document.querySelectorAll("[data-lang-section]").forEach(section => {
    section.style.display = section.getAttribute("data-lang-section") === language ? "block" : "none";
  });

  localStorage.setItem("language", language);
}

function showFormMessage() {
  setTimeout(function () {
    const formStatus = document.getElementById("formStatus");
    const contactForm = document.querySelector(".contact-form");

    if (formStatus) {
      formStatus.style.display = "block";
    }

    if (contactForm) {
      contactForm.reset();
    }
  }, 700);
}

document.addEventListener("DOMContentLoaded", function () {
  const savedLanguage = localStorage.getItem("language") || "en";
  setLanguage(savedLanguage);

  const newsletterButton = document.getElementById("newsletterButton");

  if (!newsletterButton) return;

  let newsletterSending = false;

  newsletterButton.addEventListener("click", function (event) {
    event.preventDefault();

    if (newsletterSending) return;

    const emailInput = document.getElementById("newsletterEmail");
    const consentInput = document.getElementById("newsletterConsent");
    const status = document.getElementById("newsletterStatus");

    const brevoForm = document.getElementById("brevoHiddenForm");
    const brevoEmail = document.getElementById("brevoEmail");
    const brevoConsent = document.getElementById("brevoConsent");
    const brevoLocale = document.getElementById("brevoLocale");

    const currentLanguage = localStorage.getItem("language") || "en";
    const emailValue = emailInput.value.trim();

    const brevoActionEN = "https://7d89f763.sibforms.com/serve/MUIFACmPbBdyZJCuIo4eiw8wBVNkvwBtADZBP6Kzd8HbsU40AGvHYed0l9bCM2JG63EcRko44aw7A8lAut3eK1sLddQdU_FopnUaZFL3o-1AImXBp4AuLPjvkX-84p_iw-IlalAtLmn_THVOh4ROY7mx1mSQZqwS-P9wslWzLPOrbCfU1xDIFXwPKDdXRZ4atg8bvMc9Qxp41icZAA==";

    const brevoActionPL = "https://7d89f763.sibforms.com/serve/MUIFALE-gJYjSre7w36urThTcvC6S436IcXVXi9EohdO_lotg6qjmb2zyJh-_yyOrRU83THjJ0BBP0kovhs1XNYBFWYe6JJMOOS7bUb4VYArxqyIM-uV0pmGvoRECaEPTwSrJXRMflJD0fddARHMxJgXZX4DykEDoZ29h76PuaOUdED7OXt0pT1kTb6LkoGEUlQ48qwMXK-uul3lOA==";

    if (!emailValue) {
      status.innerHTML = currentLanguage === "pl"
        ? "Podaj adres e-mail."
        : "Please enter your email address.";
      return;
    }

    if (!emailInput.checkValidity()) {
      status.innerHTML = currentLanguage === "pl"
        ? "Podaj poprawny adres e-mail."
        : "Please enter a valid email address.";
      return;
    }

    if (!consentInput.checked) {
      status.innerHTML = currentLanguage === "pl"
        ? "Zaznacz zgodę na zapis do newslettera."
        : "Please agree to receive the Hello Spuddy newsletter.";
      return;
    }

    if (!brevoForm || !brevoEmail || !brevoConsent || !brevoLocale) {
      status.innerHTML = currentLanguage === "pl"
        ? "Wystąpił błąd formularza. Spróbuj ponownie później."
        : "Form error. Please try again later.";
      return;
    }

    newsletterSending = true;
    newsletterButton.disabled = true;

    brevoForm.action = currentLanguage === "pl" ? brevoActionPL : brevoActionEN;
    brevoEmail.value = emailValue;
    brevoConsent.checked = true;
    brevoLocale.value = currentLanguage;

    status.innerHTML = currentLanguage === "pl"
      ? "💜 Witamy w rodzinie Hello Spuddy! Sprawdź swoją skrzynkę i kliknij link potwierdzający."
      : "💜 Welcome to the Hello Spuddy family! Please check your inbox and click the confirmation link.";

    brevoForm.submit();

    setTimeout(function () {
      newsletterButton.disabled = false;
      newsletterSending = false;
    }, 3000);
  });
});