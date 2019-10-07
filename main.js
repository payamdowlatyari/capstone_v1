// main.js

Reports = new Mongo.Collection("Reports");

if (Meteor.isClient){
    Template.reportForm.events({
     'click .js-add-site':function(event){
         var des = $('#des_input').val();
         var  user = "Student";
         
         if (Meteor.user()) {
            user = Meteor.user().emails[0].address;
         }

         var site = {"des":des,
                     "createdOn":new Date(),
                     "createdBy":user};
         Reports.insert(site);
         return false;
     }
    });

    Template.reports.helpers({
        'all_reports':function(){
            return Reports.find({});
        },
        'safer_email':function(email){
            if (email.indexOf('@')!=-1){
                return email.split('@')[0];
            }
            else{
                return email;
            }
        }
    });

}
