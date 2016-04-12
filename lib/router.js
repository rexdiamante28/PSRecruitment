/**
 * Created by reinduque on 11/04/2016.
 */
Router.route('/', function () {
    this.render('main');
});

Router.route('/jobsNew', function () {
    this.render('jobsNew');
});

Router.route('/jobs', function () {
    this.render('jobs');
});

Router.route('/jobs/:_id', function () {
    var params = this.params; // { _id: "5" }
    jobID = params._id; // "5"
    this.render('jobsEdit');
});

Router.route('/careers', function () {
    this.render('careers');
});

Router.route('/careers/:_id', function () {
    var params = this.params; // { _id: "5" }
    jobID = params._id; // "5"
    this.render('applyNow');
});

Router.route('/applicants', function () {
    this.render('applicants');
});