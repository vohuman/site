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
        }
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
        }
    }
};

function translate(key, subkey) {
    $('#lang').html(i18n[currentLang]['headers']['languages'])
    return i18n[currentLang][key][subkey];
}

function formatText(text) {
    if (text === "Present") return i18n[currentLang].labels.present;
    if (text === "Aktuell") return i18n[currentLang].labels.present;
    return text;
}

$.getJSON('https://vohuman.github.io/site/resume.json')
    .done(function (data) {
        resumeData = data;

        // Enable language buttons
        $('#btn-en, #btn-de').prop('disabled', false);

        // Initial Render
        renderAll();
    })
    .fail(function (jqxhr, textStatus, error) {
        console.log(error);
    });

$('#btn-en').on('click', function () { setLanguage('en'); });
$('#btn-de').on('click', function () { setLanguage('de'); });

const wrapper = $('#wrapper');
const sidebar = $('#sidebar-wrapper');
const overlay = $('#sidebar-overlay');

function toggleSidebar() {
    sidebar.toggleClass('toggled');
    overlay.toggleClass('show');
}

$('#mobile-menu-btn, #close-sidebar, #sidebar-overlay').on('click', toggleSidebar);