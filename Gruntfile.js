module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json')
  });

  // 3. Where we tell Grunt we plan to use this plug-in.
  grunt.loadNpmTasks('grunt-contrib-concat');

    // 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
  grunt.registerTask('default', []);


  grunt.registerTask('install', 'install the backend and frontend dependencies', function() {
      var exec = require('child_process').exec;
      var cb = this.async();
      //might need to fix this
      exec('bower install', function(err, stdout, stderr) {
          console.log(stdout);
          cb();
      });
  });
};