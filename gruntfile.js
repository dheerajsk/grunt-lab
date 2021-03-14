
module.exports = function (grunt) {

    require('load-grunt-tasks')(grunt);
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        autoprefixer: {
            options: {
                browsers: ['last 2 versions', 'ie 8', 'ie 9']
            },
            target: {
                files: { 'css/styleprefixed.css': 'css/style.css' }
            }
        },
        watch: {
            files: ['css/style.css'],
            tasks: ['autoprefixer']
        },
        copy: {
            main: {
                files: [
                    { src: 'css/style.css', dest: 'css/stylecopied.css' }
                ]
            }
        },
        cssmin: {
            target: {
                files: { 'styleprefixed.min.css': ['css/styleprefixed.css'] }
            }
        },
        uglify: {
            target: {
                files: {
                    'js/output.min.js': ['js/*.js']
                }
            }
        }
    });

    // grunt.loadNpmTasks('grunt-autoprefixer');
    // grunt.loadNpmTasks('grunt-contrib-watch');
    // grunt.loadNpmTasks('grunt-contrib-cssmin');
    // grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['copy']);
}