'use strict';

var banner = '/*!\n * @module <%= pkg.name %>\n' +
    ' * @description <%= pkg.description %>\n' +
    ' * @version v<%= pkg.version %>\n' +
    ' * @link <%= pkg.homepage %>\n' +
    ' * @licence MIT License, https://opensource.org/licenses/MIT\n' +
    ' */\n\n';

module.exports = grunt => {

    // load all grunt tasks
    require('load-grunt-tasks')(grunt);

    // grunt tasks
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        coffeelintr: {
            options: {
                configFile: 'coffeelint.json'
            },
            source: ['src/page-title.coffee']
        },
        coffee: {
            compileToJs: {
                files: {
                    'dist/page-title.js': 'src/page-title.coffee'
                }
            }
        },
        eslint: {
            target: ['scripts/**/*.js', 'docs/**/**.js', 'Gruntfile.js']
        },
        uglify: {
            options: {
                sourceMap: true,
                output: {
                    comments: '/^!/'
                }
            },
            distribution: {
                files: {
                    'dist/page-title.min.js': ['dist/page-title.js']
                }
            }
        },
        concat: {
            options: {
                stripBanners: true,
                banner: banner
            },
            dist: {
                src: ['dist/page-title.js'],
                dest: 'dist/page-title.js'
            }
        },
        connect: {
            server: {
                options: {
                    hostname: 'localhost',
                    open: true,
                    port: 9002,
                    base: './',
                    keepalive: true,
                    livereload: true
                }
            }
        },
        sass: {
            options: {
                sourcemap: 'none',
                style: 'expanded'
            },
            demo: {
                files: {
                    'docs/style.css': 'docs/style.scss'
                }
            }
        },
        watch: {
            scriptTS: {
                files: ['src/**/*.coffee'],
                tasks: ['coffee']
            },
            scriptJS: {
                files: ['docs/**/*.js', 'dist/**/*.js'],
                options: {
                    livereload: true
                }
            },
            scss: {
                files: ['docs/**/*.scss'],
                tasks: ['sass']
            },
            css: {
                files: ['docs/**/*.css'],
                options: {
                    livereload: true
                }
            },
            html: {
                files: ['docs/**/*.html'],
                options: {
                    livereload: true
                }
            }
        }
    });

    // grunt tasks
    grunt.registerTask('default', ['coffeelintr', 'coffee']);
    grunt.registerTask('develop', ['default', 'concat', 'sass', 'watch']);
    grunt.registerTask('serve', ['connect']);
    grunt.registerTask('lint', ['coffeelintr', 'eslint']);
    grunt.registerTask('build', ['default', 'concat', 'uglify']);
};
