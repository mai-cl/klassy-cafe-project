import { elements } from "./base";

function turnOffSelectors() {
  elements.selectors.forEach((selector) =>
    selector.classList.remove("selected")
  );
}

function turnOnSelector(selector) {
  selector.classList.add("selected");
}

function hideSections() {
  elements.sections.forEach((section) => section.classList.remove("show"));
}

function showSection(selector) {
  const tabNumber = selector.dataset.forTab;
  elements.sections
    .find((section) => section.dataset.tab === tabNumber)
    .classList.add("show");
}

export default function tabSelector(clickedBtnSelector) {
  turnOffSelectors();
  turnOnSelector(clickedBtnSelector);
  hideSections();
  showSection(clickedBtnSelector);
}
