const response = await fetch("/playground.scad");
const scad_code = await response.text();

export default scad_code;
