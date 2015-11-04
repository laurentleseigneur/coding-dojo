module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        php: {
            dev: {
                options: {
                    open: true,
                    hostname: '127.0.0.1',
                    port: 1000,
                    browser: ["firefox"]
                }
            }
        },
        watch: {
            livereload: {
                options: {
                    livereload: 19231
                },
                files: ['**/*.html','**/*.js']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default', ['watch']);
};