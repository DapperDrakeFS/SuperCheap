import { createLanding } from "./modules/modules.landing/createLanding.js";
import { landingHTML } from "./modules/modules.landing/landing.js";

const main = () => {
  createLanding(landingHTML);
};

main();
