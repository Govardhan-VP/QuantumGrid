const filterBtn = document.querySelectorAll(".filter-btn");
const projectCard = document.querySelectorAll(".project-card");

filterBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        const selectedType = btn.getAttribute("data-type");
        filterBtn.forEach(button => button.classList.remove("active"));
        btn.classList.add("active");

        projectCard.forEach(card => {
            const projectType = card.getAttribute("data-type");
            if (selectedType === "all" || projectType === selectedType) {
                card.classList.remove("hidden");
            } else {
                card.classList.add("hidden")
            }
        })
    })
})