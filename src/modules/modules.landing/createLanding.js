
export const createLanding = (element) => {
  const appContainer = document.querySelector(".app");
  appContainer.innerHTML = element;
  return appContainer;
};
