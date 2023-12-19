const newsRoter = require('./news');
const meRoter = require('./me');
const coursesRoter = require('./courses');
const siteRouter = require('./site');

function route(app) {
    app.use('/news', newsRoter);
    app.use('/me', meRoter);
    app.use('/courses', coursesRoter);

    app.use('/', siteRouter);
}

module.exports = route;
