Meteor.users.deny({
  update: function() {
    return true;
  }
});

Meteor.startup(function (){
  
Meteor.users.remove({});
/*
     
     Accounts.setPassword(newUserId, 'df@lt');
  Profile.insert({ idProfile: newUserId ,  nameUser: "Admin", direction: "" , levelAcademic: "0", areasInterest: [], language: "es", password: "", secMail:  "admin@admin.com" , accessLevel: "2"});
  Meteor.users.update({_id:newUserId}, {$set:{"profile":{ lang: "es" ,  'access':2 }}});*/

 //  Meteor.users.find ({});
   var usr = Meteor.users.findOne({emails:'admin@cepal.org'});

    console.log ("YA EXISTE");
   console.log (usr);
   if (typeof  usr === 'undefined') {
  /* 	console.log ("NUevo USUARIO");
   	var newUserId = Meteor.users.insert({
         emails: ['admin@cepal.org'],
      });

   		console.log (newUserId);*/
   
    Accounts.createUser({
                          //  username: "Admin",
                            email : "admin@cepal.org",
                            password : "df@lt",
                            profile  : {
                               lang: "es" ,  'access': 2
                            } , function (err) {
       if (err) {
       //alert(err.reason)
       console.log (err.reason);
       } else {
       var newUserId = Meteor.UserId();
        console.log ("USUARIO ADMIN CREADO");
       console.log (newUserId);
      Profile.insert({ idProfile: newUserId ,  nameUser: "Admin", direction: "" , levelAcademic: "0", areasInterest: [], language: "es", password: "", secMail:  "admin@admin.com" , accessLevel: "2"});

       }
      }
                          

    });
   }
     /*
  Profile.insert({ nameUser: "Admin", direction: "" , levelAcademic: "0", areasInterest: [], language: "es", password: "", secMail:  "admin@admin.com" , accessLevel: "2"});
  Meteor.users.update({_id:userId}, {$set:{"profile":{ lang: "es" ,  'access':0 }}});
    console.log ("Usuario Creado");
 console.log (usr.emails[0].address);*/

    //Fill the collection with some initial data if it's empty
    // Endpoints.remove({});
    /*if(Endpoints.find().count() == 0) {
        console.log('insertanto Endpoint de ejemplo');
        Endpoints.insert(
            {
                colorid: "#FFFFFF",
                endpoint: "http://190.15.141.102:8890/sparql",
                graphURI: "http://dspace.ucuenca.edu.ec/resource/",
                description: "test"
                status: 'A',
                base: false,
                lastMsg: ''
            }
        );
    }*/
});


