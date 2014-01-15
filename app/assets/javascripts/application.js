// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require jquery_ujs
//= require underscore
//= require_tree .
//= require bootstrap

$(document).ready(function(){

  $("#new-contact-button").click(function(){
    var modalBody = $(".modal-body");
    modalBody.empty();
    var count = 0;
    _.each($("#new-contact-form .form-control") , function(input){
      if($(input).val() === ""){
        modalBody.append('<div class="alert alert-danger">' + $(input).attr("id") +
                      ' cant be empty. </div>'
        )
      } else{
        modalBody.append('<div class="alert alert-success">' + $(input).attr("id") +
                      ' is good!. </div>')
        count++;
      }

      if(count === 2){
        modalBody.append('<div class="alert alert-success">Contact sent!</div>');
      }
    })
  });


  $("#pay-tooltip").tooltip({ title: "Pay!!"})
  $("#kids-tooltip").tooltip({ title: "Your Kids"})
  $("#karma-tooltip").tooltip({ title: "Nice Karma"})
  $('body').scrollspy({ target: '.navbar-inverse'})

});