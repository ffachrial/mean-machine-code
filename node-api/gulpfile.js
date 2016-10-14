var gulp = require('gulp');
var nodemon = require('gulp-nodemon');

var jsFiles = ['*.js', 'src/**/*.js'];
var cssFiles = ['*.css', 'public/**/*.css'];

gulp.task('start', [], function() {
    var options = {
        script: 'server.js',
        delayTime: 1,
        watch: jsFiles
    }

    return nodemon(options)
        .on('restart', function(err) {
            console.log('Restarting...');
        });
});