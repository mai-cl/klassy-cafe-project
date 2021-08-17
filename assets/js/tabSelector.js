const selectors = Array.from(document.querySelectorAll(".btn-tab-selector"))
const sections = Array.from(document.querySelectorAll(".meals-content"))

function turnOffSelectors() {
    selectors.forEach(selector => selector.classList.remove("selected"))
}

function turnOnSelector(selector) {
    selector.classList.add("selected")
}

function hideSections() {
    sections.forEach(section => section.classList.remove("show"))
}

function showSection(selector) {
    const tabNumber = selector.dataset.forTab
    sections.find(section => section.dataset.tab === tabNumber)
            .classList
            .add("show")
}

selectors.forEach(selector => {
    selector.addEventListener("click", e => {
        const selectorBtn = e.target.closest(".btn-tab-selector")
        turnOffSelectors()
        turnOnSelector(selectorBtn)
        hideSections()
        showSection(selectorBtn)
    })
})