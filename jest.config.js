module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    reporters: [
        'default',
        ['jest-html-reporter', {
            pageTitle: 'Quality Gate Test Report',
            outputPath: './test-report.html'
        }]
    ],
    testMatch: ['**/tests/integration/**/*.spec.ts']
};
