/**
 * Created by fhuang on 6/19/2017.
 */
module.exports = function (grunt) {

    var pkgJson = JSON.parse(grunt.file.read('package.json'));
    var gruntOutputPath = './build/grunt';
    var qunitJunitReportPath = gruntOutputPath + '/reports/qunit-tests/junit';
    var qunitHtmlReportPath = gruntOutputPath + '/reports/coverage/html';
    var qunitCoberturaReportPath = gruntOutputPath + '/reports/coverage/cobertura';
    var qunitCloverReportPath = gruntOutputPath + '/reports/coverage/clover';
    var qunitJsonSummaryReportPath = gruntOutputPath + '/reports/coverage/json-summary';
    var coverageTempPath = gruntOutputPath + '/reports/coverage/temp';
    var tempPath = gruntOutputPath + '/generated/temp';
    grunt.initConfig({
        pkg: pkgJson,
        qunit_junit: {
            options: {
                dest: qunitJunitReportPath
            }
        },
        qunit: {
            options: {
                timeout: 10000,
                coverage: {
                    disposeCollector: true,
                    src: '<%= pkg.projectFiles.javascript %>',
                    htmlReport: qunitHtmlReportPath,
                    coberturaReport: qunitCoberturaReportPath,
                    cloverReport: qunitCloverReportPath,
                    jsonSummaryReport: qunitJsonSummaryReportPath,
                    instrumentedFiles: tempPath,
                    reportOnFail: true,
                    coverageTempPath: coverageTempPath,
                    linesThresholdPct: '<%= pkg.coverageThreshold %>'
                }
            },
            all: '<%= pkg.projectFiles.qunitTests %>'
        }
    });
    grunt.loadNpmTasks('grunt-qunit-istanbul');
    grunt.loadNpmTasks('grunt-qunit-junit');
    grunt.registerTask(
        'default',
        'Runs all the tests, analyzes code quality, and produces reports',
        ['test']
    );
    grunt.registerTask(
        'test',
        ['qunit']
    );
}