/*
    View logic for the welcome page component
 */
this.WelcomeView = Backbone.View.extend({
  template: null,
  tagName: "div",
  id: "welcome",
  initialize: function(lan) {
    var me;
    me = this;
    //lang.init("SESSION",lan);
    /*
    Template.header.events = {
      "click a": function(e) {
        return App.router.aReplace(e);
      }
    };*/
    return this.template = Blaze.toHTMLWithData(Template.welcomePage, {});
    /*return this.template = Meteor.render(function() {
      var loggedIn, name;
      loggedIn = Meteor.userId() != null;
      if (loggedIn && (Meteor.user() != null) && (Meteor.user().profile != null)) {
        name = Meteor.user().profile.name;
      }
      return Blaze.toHTMLWithData(Template.header, {});
      return Template.header({
        loggedIn: loggedIn,
        name: name
      });

    });*/
  },
  render: function() {
    this.$el.html(this.template);
   //  this.setEvents($('#sparql-content'));
     this.setEvents(this.template);
     console.log('REnder Welcome');
     //var window_height = $(window).height();
     //console.log (window_height);
    // $(".lavel-up-header, .lavel-up-color-overlay").css('min-height', window_height);
   //  $(window).bind('resize', level_up_min_height);
   

    return this;
  } , 
  setEvents: function (divNode) {  
/*
    $("#lang-esp").click(function () {   
  language ();
     //lang.init("SESSION","es");
  //   change_language("es");
  
  });

$("#lang-en").click(function () {   
  language ();
   // lang.init("SESSION","en");
  // change_language("en");
  
  });*/

 /*   alert($("#documentos"));
   $("radio#documentos").on('click', function (ev) {  
    //alert($('input:radio[id=documentos]:checked').val());
    $(".recurso").text ("Buscando por: Documentos");
    alert("click");
  });
  
  $("radio#autores").on('click', function (ev) {
    $(".recurso").text ("Buscando por: Autores");
  });
  
  $("radio#colecciones").on('click', function (ev) {  
    $(".recurso").text ("Buscando por: Colecciones");
  });
  */
  }
});

 updatebuttons = function  (e ) {
   console.log (e);
  // console.log (a);
   // console.log (e.target.attributes[1].value);
  //  var select = e.target.attributes[1].value;
     var prev = "";
     selec (prev , e );
 };
 
 updatebuttons2 = function  (e ) {
   console.log (e);
  // console.log (a);
   // console.log (e.target.attributes[1].value);
  //  var select = e.target.attributes[1].value;
     var prev = "";
     selec2 (prev , e );
 };

 function selec ( prev , val) {
   var opt = $("input:radio[name='opciones']") ;
 /*  console.log ( opt);
   console.log (opt[1]);
   console.log (opt[1].value);
   console.log (opt.length);*/

    var prev = $("input[name='opciones']:checked").val();
    console.log ("seleccionado");
    console.log (prev);
    console.log (val);
     
    if ( typeof prev === 'undefined'){
    prev = '';
    }
 

   for (var i = 0; i<opt.length ;i++ ){
       var actual = opt[i].value;
     console.log (actual);
     var q = "."+actual;
 //    $('input:radio[id='+actual+']').attr('checked',false);
     
      $(q).css('-webkit-box-shadow','');
      $(q).css('-moz-box-shadow', '');
      $(q).css('box-shadow', '');
      if (actual != val){
      $(q).attr('select','0');
      }
     // $('input:radio[id='+opt[i].value+']').attr('checked');
     /*console.log ("comprobando"+opt[i].value);*/
    /* var state =  $('input:radio[id='+opt[i].value+']').attr('checked');
     console.log (state);*/
   }   
  /* if ( val == prev ) { 
    //   $('input:radio[id='+val+']').attr('checked',false);
        $(".recurso").text (lang.lang ("resources-search"));

   } else {*/

          var select =  $("."+val).attr('select');
       console.log (select);
     
    if (select == "1" ){
         $(".recurso").text (lang.lang ("resources-search"));
         $("."+val).attr('select','0');
     // $('input:radio[id='+prev+']').attr('checked',false);
     // $('input:radio[id='+prev+']').removeAttr( "checked" );
      }else {

   //   $('input:radio[id='+val+']').attr('checked', true);
    //  $("'."+val+"'").attr('style', '-webkit-box-shadow:0px 0px 25px 5px #000;-moz-box-shadow:0px 0px 25px 5px #000;box-shadow:0px 0px 25px 5px #000');
      $("."+val).css('-webkit-box-shadow','0px 0px 25px 5px #000');
      $("."+val).css('-moz-box-shadow', '0px 0px 25px 5px #000');
      $("."+val).css('box-shadow', '0px 0px 25px 5px #000');
 
     // $('label[class='+val+']').attr('style', '-webkit-box-shadow:0px 0px 25px 5px #000;-moz-box-shadow:0px 0px 25px 5px #000;box-shadow:0px 0px 25px 5px #000');
      
       $("."+val).attr('select','1');
      $(".recurso").text (lang.lang( "search-option") + lang.lang (val.charAt(0).toUpperCase()+val.slice(1)));
      }
   //}
/*
      if ( val == prev ) {
          console.log ();
               $('input:radio[id='+opt[i].value+']').attr('checked',false);
                $(".recurso").text (lang.lang ("resources-search"));
         } 
          if ( val != $('input:radio[id='+actual+']').val ())
         { 
                $('input:radio[id='+actual+']').attr('checked',false);
         } else if (val ==  $('input:radio[id='+actual+']').val () ) {
      $(".recurso").text (lang.lang( "search-option") + lang.lang (val.charAt(0).toUpperCase()+val.slice(1)));
    //  prev = $('input:radio[id='+val+']').val ();
     $('input:radio[id='+opt[i].value+']').attr('checked',true);
         }*/
/*
    if  ( prev == $('input:radio[id='+val+']').val () ) {
   $(".recurso").text (lang.lang ("resources-search"));
   prev = "";
   $('input:radio[id='+val+']').attr('checked',false);
   }
   else {

    $(".recurso").text (lang.lang( "search-option") + lang.lang (val.charAt(0).toUpperCase()+val.slice(1)));
    prev = $('input:radio[id='+val+']').val ();
     $('input:radio[id='+val+']').attr('checked',true);
    }
    return prev;*/
 }

 function selec2 ( prev , val) {
   var opt = $("input:radio[name='opciones']") ;
 /*  console.log ( opt);
   console.log (opt[1]);
   console.log (opt[1].value);
   console.log (opt.length);*/

    var prev = $("input[name='opciones']:checked").val();
    console.log ("seleccionado");
    console.log (prev);
    console.log (val);
     
    if ( typeof prev === 'undefined'){
    prev = '';
    }
 

   for (var i = 0; i<opt.length ;i++ ){
       var actual = opt[i].value;
     console.log (actual);
     var q = "."+actual;

      $(q).css('-webkit-box-shadow','');
      $(q).css('-moz-box-shadow', '');
      $(q).css('box-shadow', '');
      if (actual != val){
      $(q).attr('select','0');
      }

   }   


          var select =  $("."+val).attr('select');
       console.log (select);
     
    if (select == "1" ){
         $(".recurso").text (lang.lang ("resources-search"));
         $("."+val).attr('select','0');

      }else {

  
      $("."+val).css('-webkit-box-shadow','0px 0px 25px 3px #E6E6E6');
      $("."+val).css('-moz-box-shadow', '0px 0px 25px 3px #E6E6E6');
      $("."+val).css('box-shadow', '0px 0px 25px 3px #E6E6E6');
 
      
       $("."+val).attr('select','1');
      $(".recurso").text (lang.lang( "search-option") + lang.lang (val.charAt(0).toUpperCase()+val.slice(1)));
      }

 }

search_query = function (e) {

    Session.set('welcome', "Hola");
    var obj = e.target;
   // alert(obj);
    /*var obj = e.target;
    if (obj.tagName == "IMG") {
        obj = obj.parentElement;

    }*/
    var result = Meteor.call('findbase', function(error, result) {
               //console.log ("Querys");
               console.log (result);
            //   alert (result);
          //  alert ("Hola");
          

   // var en = Endpoints.find({name: obj.attributes['data-endpoint'].value}).fetch()[0]
    var v1 = encodeURIComponent($('input:text[name=terms]').val());
    //var v2 = encodeURIComponent($('input:radio[name=opciones]:checked').val());
    var v2 = encodeURIComponent($('label[select="1"]').attr('tipo'));
    var v3 = encodeURIComponent(result.name);
    window.open('/search/' + v1 + '/' + v2 + '/' + v3 ,"_self" );
    });
};

Template.welcomePage.helpers({
   user_access: function() {
  if (!_.isNull(Meteor.user())&& !_.isUndefined(Meteor.user())) {
        
         return true;
    } else {
    return false;
    }
   
  } });


