const tabs = document.querySelectorAll(".tab");
const contents = document.querySelectorAll(".content");

tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
        // Remove active class from all tabs
        tabs.forEach((item) => item.classList.remove("active"));

        // Hide all contents
        contents.forEach((content) => content.classList.remove("active"));

        // Add active class to clicked tab
        tab.classList.add("active");

        // Show selected content
        const tabId = tab.dataset.tab;
        document.getElementById(`tab-${tabId}`).classList.add("active");
    });
});