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
            scripts: {
                files: ['js/**/*.js'],
                tasks: ['jshint', 'concat', 'uglify']
            },
            styles: {
                files: ['css/**/*.css'],
                tasks: ['concat', 'cssmin']
            }
        },
        concat: {
            js: {
                options: {
                    separator: ';',
                },
                src: ['bower_components/jquery/jquery.js', 'js/utils.js', 'js/game.js', 'js/entity.js', 'js/player.js', 'js/crate.js', 'js/main.js'],
                dest: 'dist/js/built.js'
            },
            css: {
                src: ['css/reset.css', 'css/main.css'],
                dest: 'dist/css/built.css'
            }
        },
        uglify: {
            build: {
                files: {
                    'dist/js/built.min.js': 'dist/js/built.js'
                }
            }
        },
        cssmin: {
            combine: {
                files: {
                    'dist/css/built.min.css': 'dist/css/built.css'
                }
            }
        },
        csslint: {
            options: {
                csslintrc: '.csslintrc'
            },
            styles: {
                src: ['css/**/*.css']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-csslint');

    grunt.registerTask('default', ['jshint', 'concat', 'uglify', 'cssmin']);
};
