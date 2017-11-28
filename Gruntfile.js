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
        tslint: {
            options: {
                configuration: "tslint.json",
                force: false,
                fix: false
            },
            files: {
                src: ["src/**/*.ts"]
            }
        },
        ts: {
            convert: {
                src: ["src/**/*.ts", "!node_modules/**"],
                outDir: "./dist"
            },
            options: {
                rootDir: "./src",
                sourceMap: false
            }
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
                dest: 'dist/page-title.js',
            }
        },
        connect: {
            server: {
                options: {
                    hostname: 'localhost',
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
            scripts: {
                files: ['src/**/*.ts'],
                tasks: ['ts']
            },
            demoJs: {
                files: ['docs/**/*.js']
            },
            demoScss: {
                files: ['docs/**/*.scss'],
                tasks: ['sass']
            },
            demoCss: {
                files: ['docs/**/*.css'],
            },
            demoHtml: {
                files: ['docs/**/*.html']
            },
            options: {
                livereload: true
            }
        }
    });

    // grunt tasks
    grunt.registerTask('default', ["tslint", "ts"]);
    grunt.registerTask('develop', ["default", "concat", "sass", "watch"]);
    grunt.registerTask("serve", ["connect"]);
    grunt.registerTask("build", ["default", "concat", "uglify"]);
};
