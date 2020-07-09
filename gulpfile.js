/// <binding ProjectOpened='sass-watch' />
var gulp = require('gulp'),
    sass = require('gulp-sass'),
    cleancss = require('gulp-clean-css'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    merge = require('merge2');

var options = {
    sass: {
        src: ['src/dark.scss'],
        srcCustom: ['src/dark-customStyles.scss'],
        files: 'src/**/*.scss',
        dest: 'dist'
    }
};

// Tasks
gulp.task('sass', function () {
    return gulp.src(options.sass.src)
        .pipe(sass({
            errLogToConsole: true,
            precision: 10
        })
            .on('error', sass.logError))
        .pipe(gulp.dest(options.sass.dest))
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(cleancss({
            level: { 1: { specialComments: 0 } }
        }))
        .pipe(gulp.dest(options.sass.dest));
});

gulp.task('sass-custom-styles', function () {
    return gulp.src(options.sass.srcCustom)
        .pipe(sass({
            errLogToConsole: true,
            precision: 10
        })
            .on('error', sass.logError))
        .pipe(gulp.dest(options.sass.dest))
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(cleancss({
            level: { 1: { specialComments: 0 } }
        }))
        .pipe(gulp.dest(options.sass.dest));
});

gulp.task('auto-demo', function () {
    gulp.src('demo/auto/dark.scss')
        .pipe(sass({ errLogToConsole: true }).on('error', sass.logError))
        .pipe(concat('dark-theme.css'))
        .pipe(gulp.dest('demo/auto'));

    return gulp.src('node_modules/bootstrap/scss/bootstrap.scss')
        .pipe(sass({ errLogToConsole: true }).on('error', sass.logError))
        .pipe(concat('light-theme.css'))
        .pipe(gulp.dest('demo/auto'));
})

gulp.task('sass-watch', function () {
    return gulp.watch(options.sass.files, gulp.series('sass', 'sass-custom-styles'));
});

gulp.task('default', gulp.parallel('sass', 'sass-custom-styles', 'auto-demo'));
