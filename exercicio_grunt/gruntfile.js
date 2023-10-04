module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        less: {
            development: {
                files: {
                    'main.css': 'main.less'
                }
            },
            production: {
                options: {
                    compress: true,
                },
                files: {
                    'main.min.css':'main.less'
                }
            }
        },
        sass: {
            dist: {
                options: {
                    style: 'compressed'
                },
                files: {
                    'main2.css':'main.scss'
                }
            },
            concurrent: {
                target: ['olaGrunt', 'less', 'sass', 'tarefaDemorada']
            }
        },
        uglify: {
            my_target: {
                files: {
                    'dist/script.min.js':'src/script.js'
                }
            }
        },
        htmlmin: {
            dist: {
                options: {
                    removeComments: true,
                    collapseWhitespace:true
                },
                files: {
                    'dist/index.min.html': 'src/index.html'
                }
            }
        }
    })

    grunt.registerTask('tarefaDemorada', function() {
        const done = this.async();
        setTimeout(function() {
        console.log('Olá Grunt');
        done();
        }, 3000);
    })

    grunt.registerTask('olaGrunt', function() {
        const done = this.async();
        setTimeout(function() {
        console.log('Olá Grunt');
        done();
        }, 3000);
    })

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-concurrent');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    

    grunt.registerTask('default', ['olaGrunt', 'less', 'sass', 'htmlmin', 'uglify']);
}
