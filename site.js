let currentLang = 'en';

const i18n = {
    en: {
        headers: {
            intro: "Introduction",
            languages: "Languages",
            skills: "Technical Skills",
            experience: "Employment History",
            education: "Education",
            certificates: "Certificates"
        },
        labels: {
            techStack: "Tech Stack",
            contact: "Contact",
            present: "Present"
        },
        nav: {
            home: "Profile",
            intro: "About",
            history: "Experience",
            skills: "Skills",
            education: "Education"
        },
        categories: {
            backend: "Backend",
            frontend: "Frontend",
            database: "Database",
            sourceControl: "DevOps & Tools",
            projectManagement: "Management",
            general: "General"
        },
        "languages": [
            {
                "language": "English",
                "fluency": "Fluent",
                "percent": 90
            },
            {
                "language": "German",
                "fluency": "Intermediate",
                "percent": 60
            },
            {
                "language": "Persian",
                "fluency": "Mother tongue",
                "percent": 100
            }
        ],
    },
    de: {
        headers: {
            intro: "Einführung",
            languages: "Sprachen",
            skills: "Technische Fähigkeiten",
            experience: "Berufserfahrung",
            education: "Ausbildung",
            certificates: "Zertifikate"
        },
        labels: {
            techStack: "Technologien",
            contact: "Kontakt",
            present: "Aktuell"
        },
        nav: {
            home: "Profil",
            intro: "Über mich",
            history: "Erfahrung",
            skills: "Fähigkeiten",
            education: "Ausbildung"
        },
        categories: {
            backend: "Backend",
            frontend: "Frontend",
            database: "Datenbank",
            sourceControl: "DevOps & Tools",
            projectManagement: "Management",
            general: "Allgemein"
        },
        "languages": [
            {
                "language": "Englisch",
                "fluency": "Fließend",
                "percent": 90
            },
            {
                "language": "Deutsch",
                "fluency": "Fortgeschritten",
                "percent": 60
            },
            {
                "language": "Deutsch",
                "fluency": "Muttersprache",
                "percent": 100
            }
        ],
    }
};

function translate(key, subkey) {

    return i18n[currentLang][key][subkey];
}

function formatText(text) {
    if (text === "Present") return i18n[currentLang].labels.present;
    if (text === "Aktuell") return i18n[currentLang].labels.present;
    return text;
}

function setLanguage(lang) {
    currentLang = lang;
    $('#lang').html(i18n[currentLang].headers.languages);
    updateLangBtns();
    renderAll();
}

renderHero = function () {
    let langs = resumeData[currentLang].languages;

    var langdiv = '';

    $.each(langs, function (index, l) {

        langdiv += `<div class="mb-3">
                            <div class="mb-1">
                                    <b id="english">${l.language}</b>
                                    <span style="font-size: 0.8rem; color: #777" id="fluent">${l.fluency}</span>
                            </div>
                            <div class="progress" style="height: 8px;">
                                    <div class="progress-bar" role="progressbar" style="width: ${l.percent}%" aria-valuenow="${l.percent}" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                   </div>`;
    });

    let div = $(langdiv);
    let target = $('#langbar');
    target.empty();
    target.append(div);


}

function updateLangBtns() {
    const enBtn = $('#btn-en');
    const deBtn = $('#btn-de');

    // Reset classes
    $('.lang-btn').removeClass('active');

    if (currentLang === 'en') {
        enBtn.addClass('active');
    } else {
        deBtn.addClass('active');
    }
}

renderAll = function () {
    renderHero();
}

$.getJSON('https://vohuman.github.io/site/resume.json')
    .done(function (data) {

        console.log(data);
        resumeData = data;

        // Enable language buttons
        $('#btn-en, #btn-de').prop('disabled', false);

        // Initial Render
        renderAll();
    })
    .fail(function (jqxhr, textStatus, error) {
        console.log(error);
    });

//$('#btn-en').on('click', function () { setLanguage('en'); });
//$('#btn-de').on('click', function () { setLanguage('de'); });

const wrapper = $('#wrapper');
const sidebar = $('#sidebar-wrapper');
const overlay = $('#sidebar-overlay');

function toggleSidebar() {
    sidebar.toggleClass('toggled');
    overlay.toggleClass('show');
}

$('#mobile-menu-btn, #close-sidebar, #sidebar-overlay').on('click', toggleSidebar);