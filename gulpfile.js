import gulp from 'gulp';
import dartSass from 'sass';
import gulpSass from 'gulp-sass';
const sass = gulpSass(dartSass);
import { deleteAsync, deleteSync } from 'del';
import cleanCSS from 'gulp-clean-css';
import rename from 'gulp-rename';
import babel from 'gulp-babel';
import uglify from 'gulp-uglify';
import concat from 'gulp-concat';
import sourcemaps from 'gulp-sourcemaps';
import autoprefixer from 'gulp-autoprefixer';
import imagemin from 'gulp-imagemin';
import newer from 'gulp-newer';
import deploy from 'gulp-gh-pages';

const paths = {
	html: {
		src: 'src/*.html',
		dest: 'dist/'
	},
	styles: {
		src: 'src/sass/*.scss',
		dest: 'dist/css/'
	},
	scripts: {
		src: 'src/js/*.js',
		dest: 'dist/js/'
	},
	fonts: {
		src: 'src/fonts/*.woff2',
		dest: 'dist/fonts/'
	},
	images: {
		src: 'src/images/**/*',
		dest: 'dist/images/'
	}
}

function clean() {
	return deleteAsync(['dist/*', '!dist/images'])
}

export { clean };

function html() {
	return gulp.src(paths.html.src)
	.pipe(gulp.dest(paths.html.dest))
}

export { html };

function styles() {
	return gulp.src(paths.styles.src)
	.pipe(sourcemaps.init())
	.pipe(sass())
	.pipe(autoprefixer({
		cascade: false
	}))
	// .pipe(cleanCSS())
	.pipe(rename({
		basename: 'style',
		suffix: '.min'
	}))
	.pipe(concat('style.min.css'))
	.pipe(sourcemaps.write())
	.pipe(gulp.dest(paths.styles.dest))
}

export { styles };

function fonts() {
	return gulp.src(paths.fonts.src)
	.pipe(gulp.dest(paths.fonts.dest))
}

export { fonts };

function images() {
	return gulp.src(paths.images.src)
	.pipe(newer(paths.images.dest))
	.pipe(imagemin())
	.pipe(gulp.dest(paths.images.dest))
}

export { images };

function scripts() {
	return gulp.src(paths.scripts.src, { sourcemaps: true })
	.pipe(sourcemaps.init())
	.pipe(babel({
		presets: ['@babel/env']
	}))
	.pipe(uglify())
	.pipe(concat('script.min.js'))
	.pipe(sourcemaps.write())
	.pipe(gulp.dest(paths.scripts.dest))
}

export { scripts };

function watch() {
	gulp.watch(paths.styles.src, styles)
	gulp.watch(paths.scripts.src, scripts)
}

export { watch };

gulp.task('deploy', function () {
  return gulp.src("./dist/**/*")
    .pipe(deploy())
});

const build = gulp.series(clean, gulp.parallel(html, styles, scripts, fonts, images), watch);

export { build };

export default build;