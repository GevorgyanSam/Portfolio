import gulp from "gulp";
import concat from "gulp-concat";
import gulpSass from "gulp-sass";
import dartSass from "sass";
import cleanCSS from "gulp-clean-css";
import gcmq from "gulp-group-css-media-queries";
import autoPrefixer from "gulp-autoprefixer";
import {deleteAsync} from "del";
import uglify from "gulp-uglify";
import imagemin from "gulp-imagemin";

const sass = gulpSass(dartSass);

async function styles() {

    return gulp.src(["./src/lib/*.css", "./src/scss/*.scss"])
        .pipe(sass().on("error", sass.logError))
        .pipe(gcmq())
        .pipe(autoPrefixer({
			overrideBrowserslist: ["last 2 versions"],
			cascade: false
		}))
        .pipe(cleanCSS({
            level: 2
        }))
        .pipe(concat("style.css"))
        .pipe(gulp.dest("./build/css/"))

}

async function scripts() {

    return gulp.src(["./src/lib/*.js", "./src/js/*.js"])
        .pipe(uglify({
            toplevel: true
        }))
        .pipe(concat("script.js"))
        .pipe(gulp.dest("./build/js/"))

}

async function pages() {

    return gulp.src("./src/**/**/*.php")
        .pipe(gulp.dest("./build/"))

}

async function databases() {
    return gulp.src("./src/**/**/*.sql")
        .pipe(gulp.dest("./build/"))
}

async function assets() {

    return gulp.src("./src/assets/*")
        .pipe(imagemin())
        .pipe(gulp.dest("./build/assets/"))

}

async function clean() {

    return deleteAsync(["./build/js/", "./build/css/", "./build/assets/", "./build/components/", "./build/*.php"])

}

async function watch() {

    gulp.watch("./src/**/**/*.php", pages);
    gulp.watch("./src/scss/**/*.scss", styles);
    gulp.watch("./src/js/**/*.js", scripts);
    gulp.watch("./src/**/**/*.sql", databases);

}

gulp.task("watch", watch);
gulp.task("build", gulp.series(clean, gulp.parallel(pages, styles, scripts, databases, assets)));
gulp.task("dev", gulp.series("build", "watch"));