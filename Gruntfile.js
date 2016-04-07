module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    sass: {
      options: {
        includePaths: ['bower_components/bootswatch/sandstone/', 'bower_components/bootstrap-sass/assets/stylesheets/', 'bower_components/font-awesome/scss/'],
      },
      dist: {
        options: {
          outputStyle: 'compressed',
          sourceMap: false
        },
        files: {
          'css/main.css': 'src/scss/app.scss'
        }
      }
    },

    copy: {
      main: {
        files: [
          {expand: true, flatten: true, src: ['bower_components/font-awesome/fonts/**'], dest: 'fonts/', filter: 'isFile'}
        ],
      },
    },

    uglify: {
      javascript: {
        options: {
          mangle: true,
          beautify: false
        },
        files: {
          'js/main.js': [
            'bower_components/progressbar.js/dist/progressbar.js',
            'src/js/main.js'
          ]
        }
      }
    },
    
  });
    
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('default', ['sass', 'uglify', 'copy']);
}
