const dartSass = require('sass');

const banner = '/*!\n * @module <%= pkg.name %>\n'
  + ' * @description <%= pkg.description %>\n'
  + ' * @version v<%= pkg.version %>\n'
  + ' * @link <%= pkg.homepage %>\n'
  + ' * @licence MIT License, https://opensource.org/licenses/MIT\n'
  + ' */\n\n';

module.exports = (grunt) => {
  // load all grunt tasks
  require('load-grunt-tasks')(grunt); // eslint-disable-line global-require

  // grunt tasks
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    coffee: {
      compileToJs: {
        files: {
          'dist/page-title.js': 'src/page-title.coffee',
        },
      },
    },
    uglify: {
      options: {
        sourceMap: true,
        output: {
          comments: '/^!/',
        },
      },
      compile: {
        files: {
          'dist/page-title.min.js': ['dist/page-title.js'],
        },
      },
    },
    concat: {
      options: {
        stripBanners: true,
        banner,
      },
      compile: {
        src: ['dist/page-title.js'],
        dest: 'dist/page-title.js',
      },
    },
    connect: {
      server: {
        options: {
          hostname: 'localhost',
          open: true,
          port: 9002,
          base: './',
          keepalive: true,
          livereload: true,
        },
      },
    },
    sass: {
      options: {
        implementation: dartSass,
        sourcemap: 'none',
        style: 'expanded',
      },
      compile: {
        files: {
          'docs/style.css': 'docs/style.scss',
        },
      },
    },
    watch: {
      scriptTS: {
        files: ['src/**/*.coffee'],
        tasks: ['coffee'],
      },
      scriptJS: {
        files: ['docs/**/*.js', 'dist/**/*.js'],
        options: {
          livereload: true,
        },
      },
      scss: {
        files: ['docs/**/*.scss'],
        tasks: ['sass'],
      },
      css: {
        files: ['docs/**/*.css'],
        options: {
          livereload: true,
        },
      },
      html: {
        files: ['docs/**/*.html'],
        options: {
          livereload: true,
        },
      },
    },
  });

  // grunt tasks
  grunt.registerTask('default', ['coffee']);
  grunt.registerTask('develop', ['default', 'concat', 'sass', 'watch']);
  grunt.registerTask('serve', ['sass', 'connect']);
  grunt.registerTask('build', ['default', 'concat', 'uglify']);
};
