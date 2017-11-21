
var gulp = require('gulp');
var cleanCSS = require('gulp-clean-css');
var minifyCSS = require('gulp-clean-css');
var less = require('gulp-less');
var autoprefixer = require('gulp-autoprefixer');
var notify = require('gulp-notify');
var gutil = require('gulp-util');
var sourcemaps = require('gulp-sourcemaps');
var liveReload  = require('gulp-livereload');
var path = require('path');
var path = require('clean');
var moment = require('moment');
var plumber = require('gulp-plumber');
var jslint = require('gulp-jslint');
var imagemin = require('gulp-imagemin');
var rename = require("gulp-rename");
var concatCss = require('gulp-concat-css');
var concatJs = require('gulp-concat');


// var mainNpmFiles = require('gulp-main-npm-files');
 
// gulp.task('copy_dep',  function() {
//   gulp.src(mainNpmFiles({ packageJsonPath: "../SFS_FE_NEW/./package.json" }), { base:'./' })
//       .pipe(gulp.dest('./_web/node_modules/'));
// });

 
// // Copy dependencies present in ./package.jon to build/node_modules/
// gulp.task('copyNpmDependencies', function() {
//   gulp.src(mainNpmFiles(), { base:'./' })
//     .pipe(gulp.dest('./_web/node_modules/'));
// });
 

// var packageJson = require('./package.json');

// gulp.task('copy_packages', function() {
//   var modules = Object.keys(packageJson.dependencies);
//   var moduleFiles = modules.map(function(module) {
//     return 'node_modules/' + module + '/**/*.*';
//   });
//   return gulp.src(moduleFiles, { base: 'node_modules' })
//     .pipe(gulp.dest('./_web/node_modules/'));
// });

 

//LESS Task
gulp.task('less', function () {
  return gulp.src('./_dev/less/main.less')
    .pipe(plumber({
      errorHandler (err) {
        notify.onError('LESS Error: <%= error.message %>')(err)
        this.emit('end')
      }
    }))

    .pipe(less())
   
   .pipe(rename("lessed.css"))
    .pipe(gulp.dest('./_dev/css/'))

    .pipe(notify('Finished: <%= file.relative %>'))
})

//Autoprefixer
gulp.task('autoprefixed', function () {
  return gulp.src('./_dev/css/lessed.css')
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
 .pipe(rename("styles.css"))
    .pipe(notify('Autoprefixed (' + moment().format('MMM Do h:mm:ss A') + ')'))
    .pipe(gulp.dest('./_dev/csscomp/'));
});





//Merge all CSS into one file
gulp.task('concatinate', function () {
  return gulp.src(['./node_modules/bootstrap3/dist/css/bootstrap.min.css', './_dev/csscomp/styles.css'])
 
   .pipe(plumber({
      errorHandler (err) {
        notify.onError('Concat Error: <%= error.message %>')(err)
        this.emit('end')
      }
    }))
  .pipe(notify('Concat'))
   .pipe(concatCss("sitebundle.css", {rebaseUrls:false}))
    .pipe(gulp.dest('./_dev/css/'))
     .pipe(notify('finished concatinating'));
});



gulp.task('concatstuff', function () {
  return gulp.src(['./node_modules/bootstrap3/dist/css/bootstrap.min.css', './_dev/csscomp/styles.css'])
  
    .pipe(concatCss("sitebundle.css", {rebaseUrls:false}))
    .pipe(gulp.dest('./_web/css/'))
});



//Minify
gulp.task('minify-css', function() {
    return gulp.src('./_web/css/sitebundle.css')
 
        .pipe(cleanCSS({debug: true}, function(details) {
            console.log(details.name + ': ' + details.stats.originalSize);
            console.log(details.name + ': ' + details.stats.minifiedSize);
        }))
        .pipe(rename("stylesmain.css"))
        .pipe(gulp.dest('./_web/css/'))
        .pipe(notify('Minified..  ALL DONE'));
});


//Lint JS
gulp.task('scripts', function() {
  return gulp.src('./_dev/*.js')
    .pipe(concat('all.js'))
    .pipe(gulp.dest('./dist/'));
});

//COMPRESS IMAGES
gulp.task('minimg' , function () {
  gulp.src('./_dev/images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./web/images'))
});


//GULP TASKS
//WATCH TASKS
gulp.task('watch', function() {
  livereload.listen();
  gulp.watch('./_dev/less/**/*.less', ['less']);   
  gulp.watch('./_dev/css/lessed.css', ['autoprefixed']); 
});


//DEFAULT
  gulp.task('default', function () {

  gulp.watch('./_dev/less/**/*.less', ['less']);   
  gulp.watch('./_dev/css/lessed.css', ['autoprefixed']); 
   gulp.watch('./_dev/csscomp/styles.css', ['concatstuff']); 

  gulp.watch('./_web/css/sitebundle.css', ['minify-css']); 
  gulp.start('less');

});

//GO LIVE
gulp.task('F1n1sh3d', function () {
   //gulp.start('minify-css', 'lint', 'minimg', 'copy');
   gulp.start('minify-css');
  notify('done (' + moment().format('MMM Do h:mm:ss A') + ')');
});





