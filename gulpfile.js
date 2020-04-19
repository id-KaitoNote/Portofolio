const { src, dest, watch } = require("gulp");
const sass = require("gulp-sass");

const compileSass = () =>
  src("scss/style.scss")
    .pipe(
      sass({
        outputStyle: "expanded",
      })
    )
    .pipe(dest("css"));

const watchSassFiles = () => watch("scss/style.scss", compileSass);

exports.default = watchSassFiles;
