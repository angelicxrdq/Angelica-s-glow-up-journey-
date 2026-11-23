
/* ==========================================
   ANGÉLICA'S GLOW UP JOURNEY
   Interactive story system
========================================== */

const chapters = {

    "Vanity Room": {
        icon: "🪞",
        title: "Vanity Room",
        subtitle: "Your little beauty corner",
        description: "Un espacio para descubrir, experimentar y aprender a cuidar de ti.",
        sections: [
            {
                title: "♡ Skincare Diary",
                text: "Construye una rutina sencilla, aprende sobre tu piel y registra qué productos te funcionan."
            },
            {
                title: "♡ Makeup Studio",
                text: "Explora diferentes estilos de maquillaje, guarda inspiraciones y crea tus propios looks."
            },
            {
                title: "♡ Hair Corner",
                text: "Peinados, accesorios, ideas y tutoriales para experimentar con tu cabello."
            },
            {
                title: "♡ Beauty Notes",
                text: "Escribe tus descubrimientos, favoritos y pequeños consejos."
            }
        ]
    },

    "Closet Room": {
        icon: "🎀",
        title: "Closet Room",
        subtitle: "Your personal style universe",
        description: "Tu espacio para explorar la moda y encontrar estilos que expresen tu personalidad.",
        sections: [
            {
                title: "♡ Outfit Inspiration",
                text: "Guarda ideas de outfits, combinaciones de colores y estilos que te llamen la atención."
            },
            {
                title: "♡ My Aesthetic",
                text: "Explora Clean Girl, Coquette, Old Money, Romantic y otras estéticas."
            },
            {
                title: "♡ Accessories",
                text: "Ideas de accesorios, bolsos, joyería, zapatos y pequeños detalles."
            },
            {
                title: "♡ Wishlist",
                text: "Crea una lista de prendas y accesorios que te gustaría tener algún día."
            }
        ]
    },

    "Journal Room": {
        icon: "📖",
        title: "Journal Room",
        subtitle: "Letters to yourself",
        description: "Un rincón para escribir, pensar, recordar y conocerte mejor.",
        sections: [
            {
                title: "♡ Dear Diary",
                text: "Escribe sobre tu día, tus pensamientos, tus ideas o cualquier cosa que quieras recordar."
            },
            {
                title: "♡ Monthly Reflections",
                text: "Reflexiona sobre las experiencias, aprendizajes y momentos especiales de cada mes."
            },
            {
                title: "♡ My Dreams",
                text: "Guarda tus sueños, proyectos, deseos y planes para el futuro."
            },
            {
                title: "♡ Little Things",
                text: "Una colección de pequeñas cosas que te hicieron feliz."
            }
        ]
    },

    "Garden of Growth": {
        icon: "🌷",
        title: "Garden of Growth",
        subtitle: "Little steps, lovely beginnings",
        description: "No necesitas cambiar quién eres. Este jardín es para cultivar tus intereses, habilidades y proyectos.",
        sections: [
            {
                title: "♡ Habits",
                text: "Construye hábitos que te ayuden a sentirte organizada, descansar y cuidar de ti."
            },
            {
                title: "♡ Goals",
                text: "Divide tus metas en pequeños pasos alcanzables."
            },
            {
                title: "♡ Hobbies",
                text: "Descubre nuevas actividades, habilidades y cosas que te gustaría aprender."
            },
            {
                title: "♡ Achievements",
                text: "Celebra tus logros, incluso los pequeños que normalmente pasarías por alto."
            }
        ]
    },

    "Library": {
        icon: "🕊️",
        title: "Little Library",
        subtitle: "Stories, music & imagination",
        description: "Una pequeña biblioteca para recopilar las historias y obras que te acompañan.",
        sections: [
            {
                title: "♡ Books",
                text: "Una lista de libros que leíste, quieres leer o te gustaría descubrir."
            },
            {
                title: "♡ Movies & Series",
                text: "Guarda películas, series, personajes favoritos y recomendaciones."
            },
            {
                title: "♡ Music",
                text: "Crea playlists para diferentes momentos, estados de ánimo y recuerdos."
            },
            {
                title: "♡ Favorites",
                text: "Un rincón de tus cosas favoritas de todo el universo."
            }
        ]
    },

    "My Journey": {
        icon: "✨",
        title: "My Journey",
        subtitle: "A story written by you",
        description: "Tu crecimiento no tiene que ser perfecto ni seguir un calendario. Cada experiencia cuenta.",
        sections: [
            {
                title: "♡ New Experiences",
                text: "Registra las cosas nuevas que has probado y las experiencias que has vivido."
            },
            {
                title: "♡ Things I Learned",
                text: "Guarda conocimientos, consejos e ideas que te gustaría recordar."
            },
            {
                title: "♡ Proud Moments",
                text: "Escribe momentos de los que te sientas orgullosa."
            },
            {
                title: "♡ Future Me",
                text: "Escribe una carta para leerla en el futuro."
            }
        ]
    }

};


/* ==========================================
   OPEN THE BOOK
========================================== */

function openStory() {

    const cover = document.getElementById("coverScreen");
    const letter = document.getElementById("letterScreen");

    if (!cover || !letter) return;

    cover.classList.add("hidden");
    letter.classList.remove("hidden");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


/* ==========================================
   ENTER THE WORLD
========================================== */

function enterWorld() {

    const letter = document.getElementById("letterScreen");
    const room = document.getElementById("roomScreen");

    if (!letter || !room) return;

    letter.classList.add("hidden");
    room.classList.remove("hidden");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


/* ==========================================
   CREATE CHAPTER WINDOW
========================================== */

function showChapter(chapterName) {

    const chapter = chapters[chapterName];

    if (!chapter) {
        console.error("Chapter not found:", chapterName);
        return;
    }

    closeChapter();

    const overlay = document.createElement("div");

    overlay.id = "chapterOverlay";
    overlay.className = "chapter-overlay";

    overlay.innerHTML = `
        <div class="chapter-window">

            <button class="chapter-close"
                    onclick="closeChapter()"
                    aria-label="Close chapter">
                ×
            </button>

            <div class="chapter-icon">
                ${chapter.icon}
            </div>

            <h2>${chapter.title}</h2>

            <p class="chapter-subtitle">
                ${chapter.subtitle}
            </p>

            <p class="chapter-description">
                ${chapter.description}
            </p>

            <div class="chapter-content">

                ${chapter.sections.map(section => `
                    <article class="chapter-card">

                        <h3>${section.title}</h3>

                        <p>${section.text}</p>

                    </article>
                `).join("")}

            </div>

            <button class="chapter-back"
                    onclick="closeChapter()">
                ← Back to my room
            </button>

        </div>
    `;

    document.body.appendChild(overlay);

    document.body.style.overflow = "hidden";

    requestAnimationFrame(() => {
        overlay.classList.add("visible");
    });

    overlay.addEventListener("click", function(event) {

        if (event.target === overlay) {
            closeChapter();
        }

    });

}


/* ==========================================
   CLOSE CHAPTER
========================================== */

function closeChapter() {

    const overlay = document.getElementById("chapterOverlay");

    if (overlay) {
        overlay.remove();
    }

    document.body.style.overflow = "";

}


/* ==========================================
   ESCAPE KEY
========================================== */

document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {
        closeChapter();
    }

});


/* ==========================================
   BACK TO COVER
========================================== */

function returnToCover() {

    closeChapter();

    const cover = document.getElementById("coverScreen");
    const letter = document.getElementById("letterScreen");
    const room = document.getElementById("roomScreen");

    if (!cover || !letter || !room) return;

    cover.classList.remove("hidden");
    letter.classList.add("hidden");
    room.classList.add("hidden");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}

console.log("Angélica's Glow Up Journey is ready ♡");
