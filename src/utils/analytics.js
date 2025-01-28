import ReactGA from "react-ga4";

const initGA = () => {
  ReactGA.initialize("G-LNKCS4981D");
};

const logPageView = (path) => {
  ReactGA.send({ hitType: "pageview", page: path });
};

export { initGA, logPageView };