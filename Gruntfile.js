module.exports = function (grunt) {
    grunt.initConfig({
        jshint: {
            all: {
                options: {
                    jshintrc: '.jshintrc'
                },
                files: {
                    src: ['Gruntfile.js', 'js/**/*.js']
                }
            }
        },
        watch: {
            jshint: {
                files: ['js/**/*.js'],
                tasks: ['jshint']
            }
        },
        concat: {
            options: {
                separator: ';',
            },
            dist: {
                src: ['bower_components/jquery/jquery.js', 'js/main.js'],
                dest: 'dist/built.js'
            },
        },
        uglify: {
            build: {
                files: {
                    'dist/built.js.min': 'dist/built.js'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['jshint', 'concat', 'uglify']);
};
