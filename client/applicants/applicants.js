/**
 * Created by reinduque on 12/04/2016.
 */

Template.applicants.helpers({
    settings: function () {
        return {
            collection: Applicants,
            rowsPerPage: 30,
            showFilter: true,
            fields: [
                { key: 'name', label: 'Name' },
                { key: 'positionApplied', label: 'Position' },
                { key: 'dateApplied', label: 'Date' },
                { key: 'applicantStatus', label: 'Status' },
                {
                    key: '_id',
                    label: 'Edit',
                    fn: function (value) {
                        return new Spacebars.SafeString("<a href=/applicants/" + value + ">Edit</a>");
                    }
                }
            ]
        };
    }

});