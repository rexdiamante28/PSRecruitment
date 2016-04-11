/**
 * Created by reinduque on 11/04/2016.
 */
Template.careers.helpers({
   openJobs: function () {
       var docs= Jobs.find({Status: "Open"});
       return docs;
   }
});

Template.applyNow.onRendered(function (){
    var doc = Jobs.findOne(jobID);
    document.getElementsByName("positionApplied").item(0).value = doc.jobTitle;
    document.getElementsByName("applicantStatus").item(0).value = "Unprocessed";
    document.getElementsByName("applicantStatus").item(0).readOnly = true;
})