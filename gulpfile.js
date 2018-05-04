var gulp = require("gulp");
var server = require("gulp-webserver");

gulp.task("default", function() {
    gulp.src("src")
        .pipe(server({
            port: 3356,
            open: true,
            livereload: true,
            middleware: function(req, res, next) {
                next();
            }
        }))
})