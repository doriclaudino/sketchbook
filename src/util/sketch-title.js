export default path =>
  path
    .replace(`/sketchbook`, "")
    .replace("/sketch/", "")
    .replace(/\/$/, "")
    .replace(/\//g, "-");
