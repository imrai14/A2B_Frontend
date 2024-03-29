'use strict';

/**
 * @ngdoc function
 * @name a2BClientApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the a2BClientApp
 */
angular.module('a2BClientApp')
  .controller('UserCtrl', function ($scope, UserService, $location,$rootScope,$cookies,$cookieStore) {
     
// $(function() {

//  $("#login-form").validate({
   
//        // Specify the validation rules
//        rules: {
//            username: "required",
//            password: "required",
         
//            password: {
//                required: true,
//                minlength: 5
//            },
           
          
//        },
       
//        // Specify the validation error messages
//        messages: {
//            username: "Please enter your Username",
//            password: "Please enter your Password",
          
//            password: {
//                required: "Please provide a password",
//                minlength: "Your password must be at least 5 characters long"
//            },
          
         
//        },
       
//        submitHandler: function(form) {
//            form.submit();
//        }
//    });




//  })

//=================================================================================================

// $(function() {

//    $("#register-form").validate({
   
//        // Specify the validation rules
//        rules: {
//            fullname: {
//            	required: true,
//            	textonly: true,
//            },
//            "confirm-password": {
// 			required: true,           	
//      		 equalTo: "#password1"
//     		},
//            email: {
//                required: true,
//                email: true,
//            },
//            password1: {
//                required: true,
//                minlength: 5,
//            },

//            phoneNo:{
//            		required: true,
//            		number: true,
//            		minlength: 10,
//            		maxlength:10,
//            },
       
          
//        },
       
//        // Specify the validation error messages
//        messages: {
//            fullname: {
//            		required: "please enter your fullname",
//            		textonly: "Enter a valid name",
//            },
//            password1: {
//                required: "Please provide a password",
//                minlength: "Your password must be at least 5 characters long",
//            },
//            confirmpassword: {
//            		required: "Please re-enter same password",
//                minlength: "Your password must be at least 5 characters long",

//            },

//             phoneNo:{
//            		required: "Please provide a phoneNo",
//            		minlength: "minimum length should be 10 digits",
//            		maxlength: "maxlength should be 10 digits",
//            		number: "Please enter a valid number"
//            },
//            email: "Please enter a valid email address",
//            agree: "Please accept our policy"
//        },

  
       
//        submitHandler: function(form) {
//            form.submit();
//        }

//    });

//  })





// // $(document).ready(function() {
// //     $('.fb-share').click(function(e) {
// //         e.preventDefault();
// //         window.open($(this).attr('href'), 'fbShareWindow', 'height=450, width=600, top=' + ($(window).height() / 2 - 275) + ', left=' + ($(window).width() / 2 - 225));
// //         return false;
// //     });
// // });


// jQuery.validator.addMethod("textonly", function(value, element){
// 		return this.optional(element) || /^[a-z," "]+$/i.test(value);
// 	}, "Alphabets only please.");
	

// ===============================================================================================
	$(function() {

    $('#login-form-link').click(function(e) {
		$("#login-form").delay(100).fadeIn(100);
 		$("#register-form").fadeOut(100);
 		
		$('#register-form-link').removeClass('active');
		
		$(this).addClass('active');
		//e.preventDefault();
	});
	$('#register-form-link').click(function(e) {
		console.log('inside');
		$("#register-form").delay(100).fadeIn(100);
 		$("#login-form").fadeOut(100);
 		
		$('#login-form-link').removeClass('active');
		
		$(this).addClass('active');
		//e.preventDefault();
	});

	$("login-submit").on('click', function(){
    $(this).siblings().removeClass('active')
    $(this).addClass('active');
})

})




	$scope.registerUser = function(data){
		console.log('from register form',data);
		UserService.register(data)
		.then(function(response){
			console.log('resp',response);
			// alert("you are registed successfull");
			// $('#register-form-link').removeClass('active');
   //  		
	   		$("#login-form").delay(100).fadeIn(100);
	 		$("#register-form").fadeOut(100);
	 		
			$('#register-form-link').removeClass('active');
		
			$('#login-form-link').addClass('active');
			$scope.message = "You have Registered Successfully Please verify and Login";
		}).catch(function(err){
			$scope.error = err;
		})
	}

	$scope.login = function(data){
		console.log('from form',data);
		UserService.login(data)
		.then(function(response){
			console.log('resp',response);
			$location.path('/userprofile')
			var user = response.user;
			var sessionObj ={'user':response.user};
			$cookieStore.put('User',sessionObj);
		}).catch(function(err){
			$scope.error = err;
		})
	}

	

	$scope.delete = function(id){
		console.log('from form',id);
		UserService.delete(id)
		.then(function(response){
			console.log('resp',response);
			//$location.path('/login')
			$rootScope.user = response.user;
		}).catch(function(err){
			$scope.error = err;
		})
	}


  });




