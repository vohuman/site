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
       
    updateLangBtns();
    renderAll();

    if ($('main').hasClass('intro')) {
        loadintroLang();
    }

    if ($('main').hasClass('history')) {
        loadhistoryLang();
    }
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

    if (currentLang === 'en') {
        $('#germany').html('Germany');
        $('#title').html('Senior Full Stack Developer');
    } else {
        $('#germany').html('Deutschland');
        $('#title').html('Senior Full Stack Entwickler');
    }

    $('#lang').html(i18n[currentLang].headers.languages);

}

loadintro = function () {

    var d = `<section id="section-intro" class="mt-4 fadein">
                        <div class="card border-0 shadow-sm rounded-4 custom-card-hover">
                            <div class="card-body p-4 p-md-5">
                                <div class="d-flex align-items-center gap-3 mb-4">
                                    <div class="bg-primary bg-opacity-10 text-primary p-2 rounded">
                                        <i class="fa-solid fa-circle-info fs-5"></i>
                                    </div>
                                    <h4 class="fw-bold text-dark mb-0">${i18n[currentLang].headers.intro}</h4>
                                </div>
                                <div class="text-secondary" style="line-height: 1.8; text-align: justify;">
                                    <p class="fw-bold fs-5 mb-2">${resumeData[currentLang].introduction}</p>
                                </div>
                            </div>
                        </div>
                    </section>`;

    let div = $(d);
    let target = $('main');
    target.empty();
    target.append(div);

    $('main').removeClass('history');

    if (!$('main').hasClass('intro')) {
        $('main').addClass('intro');
    }

}

loadintroLang = function () {

    $('main').removeClass('history');

    if (!$('main').hasClass('intro')) {
        $('main').addClass('intro');
    }

    var d = `<section id="section-intro" class="mt-4">
                        <div class="card border-0 shadow-sm rounded-4 custom-card-hover">
                            <div class="card-body p-4 p-md-5">
                                <div class="d-flex align-items-center gap-3 mb-4">
                                    <div class="bg-primary bg-opacity-10 text-primary p-2 rounded">
                                        <i class="fa-solid fa-circle-info fs-5"></i>
                                    </div>
                                    <h4 class="fw-bold text-dark mb-0">${i18n[currentLang].headers.intro}</h4>
                                </div>
                                <div class="text-secondary" style="line-height: 1.8; text-align: justify;">
                                    <p class="fw-bold fs-5 mb-2">${resumeData[currentLang].introduction}</p>
                                </div>
                            </div>
                        </div>
                    </section>`;

    let div = $(d);
    let target = $('main');
    target.empty();
    target.append(div);
}

loadhistory = function () {

    var d = `<section id="section-history" class="mt-5 fadein">
                        <div class="d-flex align-items-center gap-3 mb-4 pb-2 border-bottom">
                            <div class="bg-primary bg-opacity-10 text-primary p-2 rounded">
                                <i class="fa-solid fa-briefcase fs-5"></i>
                            </div>
                            <h2 class="h3 fw-bold text-dark mb-0">${i18n[currentLang].headers.experience}</h2>
                        </div>`;

    var history = resumeData[currentLang].employmentHistory;
    console.log(history);

    $.each(history, function (index, h) {

        console.log(h);

        if (index == 0) {
            d += `<div class="timeline-item">
                                <div class="timeline-dot"></div>

                                <div class="card border-0 shadow-sm rounded-4 custom-card-hover p-4">
                                    <div class="d-flex flex-column flex-md-row justify-content-between align-items-start gap-2 mb-3">
                                        <div>
                                            <h5 class="fw-bold text-dark mb-1">${h.role}</h5>
                                            <div class="d-flex flex-wrap align-items-center gap-2 text-secondary small">
                                                <span class="fw-semibold text-primary"><i class="fa-regular fa-building me-1"></i>${h.company}</span>
                                                <span>•</span>
                                                <span><i class="fa-solid fa-location-dot me-1"></i>${h.location}</span>
                                            </div>
                                        </div>
                                        <span class="badge rounded-pill text-bg-success bg-opacity-75 px-3 py-2">
                                            ${h.startDate} — ${h.endDate}
                                        </span>
                                    </div>

                                    <div class="mb-3">
                                        <ul class="list-unstyled d-flex flex-column gap-2 mb-0">`;

            $.each(h.responsibilities, function (i, r) {
                d += `<li class="d-flex gap-2 text-secondary">

                        <i class="fa-solid fa-circle-check text-primary mt-1" style="font-size: 0.8rem;"></i>
                        <span>${r}</span>
                  </li>`;
            });
        }
        else {
            d += `<div class="timeline-item">
                                <div class="timeline-dot"></div>

                                <div class="card border-0 shadow-sm rounded-4 custom-card-hover p-4">
                                    <div class="d-flex flex-column flex-md-row justify-content-between align-items-start gap-2 mb-3">
                                        <div>
                                            <h5 class="fw-bold text-dark mb-1">${h.role}</h5>
                                            <div class="d-flex flex-wrap align-items-center gap-2 text-secondary small">
                                                <span class="fw-semibold text-primary"><i class="fa-regular fa-building me-1"></i>${h.company}</span>
                                                <span>•</span>
                                                <span><i class="fa-solid fa-location-dot me-1"></i>${h.location}</span>
                                            </div>
                                        </div>
                                        <span class="badge rounded-pill text-bg-light border text-secondary px-3 py-2">
                                            ${h.startDate} — ${h.endDate}
                                        </span>
                                    </div>

                                    <div class="mb-3">
                                        <ul class="list-unstyled d-flex flex-column gap-2 mb-0">`;

            $.each(h.responsibilities, function (i, r) {
                d += `<li class="d-flex gap-2 text-secondary">

                        <i class="fa-solid fa-circle-check text-primary mt-1" style="font-size: 0.8rem;"></i>
                        <span>${r}</span>
                  </li>`;
            });
        }


        d += `</ul>
                </div>

                                    <div class="pt-3 border-top">
                                        <small class="text-uppercase fw-bold text-muted d-block mb-2" style="font-size: 0.7rem;">Tech Stack</small>
                                        <div class="d-flex flex-wrap gap-1">`;

        $.each(h.techStack, function (j, t) {
            d += `<span class="badge rounded-1 text-secondary bg-light border tech-badge">${t}</span>`;
        })


        d += `</div>
                                    </div>
                                </div>
                            </div>`
    });

    let div = $(d);
    let target = $('main');
    target.empty();
    target.append(div);

    $('main').removeClass('intro');

    if (!$('main').hasClass('history')) {
        $('main').addClass('history');
    }
}

loadhistoryLang = function () {

    $('main').removeClass('intro');

    if (!$('main').hasClass('history')) {
        $('main').addClass('history');
    }

    var d = `<section id="section-history" class="mt-5">
                        <div class="d-flex align-items-center gap-3 mb-4 pb-2 border-bottom">
                            <div class="bg-primary bg-opacity-10 text-primary p-2 rounded">
                                <i class="fa-solid fa-briefcase fs-5"></i>
                            </div>
                            <h2 class="h3 fw-bold text-dark mb-0">${i18n[currentLang].headers.experience}</h2>
                        </div>`;

    var history = resumeData[currentLang].employmentHistory;
    console.log(history);

    $.each(history, function (index, h) {

        console.log(h);

        if (index == 0) {
            d += `<div class="timeline-item">
                                <div class="timeline-dot"></div>

                                <div class="card border-0 shadow-sm rounded-4 custom-card-hover p-4">
                                    <div class="d-flex flex-column flex-md-row justify-content-between align-items-start gap-2 mb-3">
                                        <div>
                                            <h5 class="fw-bold text-dark mb-1">${h.role}</h5>
                                            <div class="d-flex flex-wrap align-items-center gap-2 text-secondary small">
                                                <span class="fw-semibold text-primary"><i class="fa-regular fa-building me-1"></i>${h.company}</span>
                                                <span>•</span>
                                                <span><i class="fa-solid fa-location-dot me-1"></i>${h.location}</span>
                                            </div>
                                        </div>
                                        <span class="badge rounded-pill text-bg-success bg-opacity-75 px-3 py-2">
                                            ${h.startDate} — ${h.endDate}
                                        </span>
                                    </div>

                                    <div class="mb-3">
                                        <ul class="list-unstyled d-flex flex-column gap-2 mb-0">`;

            $.each(h.responsibilities, function (i, r) {
                d += `<li class="d-flex gap-2 text-secondary">

                        <i class="fa-solid fa-circle-check text-primary mt-1" style="font-size: 0.8rem;"></i>
                        <span>${r}</span>
                  </li>`;
            });
        }
        else {
            d += `<div class="timeline-item">
                                <div class="timeline-dot"></div>

                                <div class="card border-0 shadow-sm rounded-4 custom-card-hover p-4">
                                    <div class="d-flex flex-column flex-md-row justify-content-between align-items-start gap-2 mb-3">
                                        <div>
                                            <h5 class="fw-bold text-dark mb-1">${h.role}</h5>
                                            <div class="d-flex flex-wrap align-items-center gap-2 text-secondary small">
                                                <span class="fw-semibold text-primary"><i class="fa-regular fa-building me-1"></i>${h.company}</span>
                                                <span>•</span>
                                                <span><i class="fa-solid fa-location-dot me-1"></i>${h.location}</span>
                                            </div>
                                        </div>
                                        <span class="badge rounded-pill text-bg-light border text-secondary px-3 py-2">
                                            ${h.startDate} — ${h.endDate}
                                        </span>
                                    </div>

                                    <div class="mb-3">
                                        <ul class="list-unstyled d-flex flex-column gap-2 mb-0">`;

            $.each(h.responsibilities, function (i, r) {
                d += `<li class="d-flex gap-2 text-secondary">

                        <i class="fa-solid fa-circle-check text-primary mt-1" style="font-size: 0.8rem;"></i>
                        <span>${r}</span>
                  </li>`;
            });
        }


        d += `</ul>
                </div>

                                    <div class="pt-3 border-top">
                                        <small class="text-uppercase fw-bold text-muted d-block mb-2" style="font-size: 0.7rem;">Tech Stack</small>
                                        <div class="d-flex flex-wrap gap-1">`;

        $.each(h.techStack, function (j, t) {
            d += `<span class="badge rounded-1 text-secondary bg-light border tech-badge">${t}</span>`;
        })


        d += `</div>
                                    </div>
                                </div>
                            </div>`
    });

    let div = $(d);
    let target = $('main');
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
    rendersidemenu();
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

rendersidemenu = function () {
    var d = `<li class="mb-1">
                        <a href="#" class="nav-link">
                            <i class="fa-solid fa-user"></i>
                            <span id="profile">${i18n[currentLang].nav.home}</span>
                        </a>
                    </li>

                    <li class="mb-1">
                        <a href="#" onclick="loadintro()" class="nav-link">
                            <i class="fa-solid fa-circle-info"></i>
                            <span id="about">${i18n[currentLang].nav.intro}</span>
                        </a>
                    </li>

                    <li class="mb-1">
                        <a href="#" onclick="loadhistory()" class="nav-link">
                            <i class="fa-solid fa-briefcase"></i>
                            <span id="ex">${i18n[currentLang].nav.history}</span>
                        </a>
                    </li>

                    <li class="mb-1">
                        <a href="#" class="nav-link">
                            <i class="fa-solid fa-code"></i>
                            <span id="skill">${i18n[currentLang].nav.skills}</span>
                        </a>
                    </li>

                    <li class="mb-1">
                        <a href="#" class="nav-link">
                            <i class="fa-solid fa-graduation-cap"></i>
                            <span id="edu">${i18n[currentLang].nav.education}</span>
                        </a>
                    </li>`;

    let div = $(d);
    let target = $('#nav-links');
    target.empty();
    target.append(div);
}

renderAll();

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