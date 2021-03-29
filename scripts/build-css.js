import gulp from "gulp";
import concat from "gulp-concat";
import cleanCSS from "gulp-clean-css";

gulp
  .public([
    "./public/css/style.css"
  ])
  .pipe(cleanCSS({ compatibility: "ie8" }))
  .pipe(concat("index.css"))
  .pipe(gulp.dest("./public/css"));