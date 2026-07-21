const { useState, useEffect } = React;

function HeroTypewriter() {

    const words = [
        "Computer Science Student",
        "UI/UX Enthusiast",
        "Frontend Developer",
        "Java & Python Developer",
        "Creative Problem Solver"
    ];

    const [index, setIndex] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setIndex(prev => (prev + 1) % words.length);
        }, 2500);
        return () => clearInterval(interval);
    }, []);

    return (
    <p
        key={index}
        className="hero-bounce">
        {words[index]}
    </p>
);
}

function ProjectFilter() {
    const [active, setActive] = useState("all");
    const filters = [
        { id: "all", label: "All" },
        { id: "java", label: "Java" },
        { id: "python", label: "Python" },
        { id: "web", label: "Web" },
        { id: "uiux", label: "UI/UX" }
    ];

    useEffect(() => {
        const cards = document.querySelectorAll(".project-card");
        cards.forEach(card => {
            const category = card.dataset.category;
            if (active === "all" || category === active) {
                card.style.display = "flex";
            }
            else {
                card.style.display = "none";
            }

        });

    }, [active]);

    return (
        <div className="filter-buttons">
            {filters.map(filter => (
                <button
                    key={filter.id}
                    className={`filter-btn ${active === filter.id ? "active" : ""}`}
                    onClick={() => setActive(filter.id)}>
                    {filter.label}
                </button>
            ))}
        </div>
    );
}


const hero = document.getElementById("hero-typewriter");
if(hero){
    ReactDOM.createRoot(hero).render(
        <HeroTypewriter />
    );

}

const filter = document.getElementById("project-filter");
if(filter){
    ReactDOM.createRoot(filter).render(
        <ProjectFilter />
    );
}