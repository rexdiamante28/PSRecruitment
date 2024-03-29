/**
 * Created by reinduque on 11/04/2016.
 */

Template.jobs.helpers({
    settings: function () {
        return {
            collection: Jobs,
            rowsPerPage: 30,
            showFilter: true,
            fields: [
                { key: 'jobTitle', label: 'Job Title' },
                { key: 'requiredHires', label: 'Required Hires' },
                { key: 'hiredApplicants', label: 'Hired Applicants' },
                { key: 'Status', label: 'Status' },
                {
                    key: '_id',
                    label: 'Edit',
                    fn: function (value) {
                        return new Spacebars.SafeString("<a href=/jobs/" + value + ">Edit</a>");
                    }
                }
            ]
        };
    }
});

Template.jobsEdit.helpers({
    thisDoc: function () {
        var doc=  Jobs.findOne(jobID);
        return doc;
    }
})