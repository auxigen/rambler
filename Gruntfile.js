module.exports = function(grunt) {

  // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        copy: {
            dist: {
                files: [ {src: 'public/index.html', dest: 'public/dist/index.html'} ]
            }
        },
        'useminPrepare': {
            options: {
                dest: 'dist'
            },
            html: 'public/index.html'
        },
        usemin: {
            html: ['public/dist/index.html']
        },
        /*
        concurrent: {
            autoreload: {
                tasks: ['supervisor', 'watch']
            }
        },
        watch: {
            scripts: {
                files: ['public/js/src/*.js'],
                tasks: ['concat', 'uglify'],
                options: {
                    spawn: true,
                    livereload: true
                }
            }
        },
        concat: {
            options: {
            separator: ';\n',
            },
            dist: {
                src: ['public/js/src/*.js'],
                dest: 'public/js/dist/<%= pkg.name %>.js',
            }
        },
        uglify: {
            build: {
                src: 'public/js/dist/<%= pkg.name %>.js',
                dest: 'public/js/dist/<%= pkg.name %>.min.js'
            }
        },
        supervisor: {
            target: {
                script: "server.js",
                options: {
                    ignore: ['public'],
                    extensions: ['js'],
                    forceSync: true
                }
            }
        }
        */
    });
    // Default task(s).
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-usemin');
    /*
    grunt.loadNpmTasks( 'grunt-supervisor' );
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-concurrent');
    */
    //grunt.registerTask('default', ['concurrent:autoreload']);
    grunt.registerTask('default', ['useminPrepare', 'copy', 'concat', 'uglify', 'usemin']);
};