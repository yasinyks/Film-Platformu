// Popup Al
var modal = document.getElementById('myModal');

// Kipi açan düğmeyi al
var btn = document.getElementById("myBtn");


// Kipi kapatan <span> öğesini edinin
var span = document.getElementsByClassName("close")[0];

// Kullanıcı düğmeyi tıklattığında
btn.onclick = function() {
    modal.style.display = "block";
}

// Kullanıcı <span> (x) düğmesini tıkladığında, popup
span.onclick = function() {
    modal.style.display = "none";
}

// Kullanıcı modelden başka herhangi bir yeri tıklattıysa, onu kapatın.
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}





(function(){
    'use strict';
    
    angular
      .module('commentsApp', [])
      .controller('CommentsController', CommentsController);
    
    // Inject $scope dependency.
    CommentsController.$inject = ['$scope'];
    
    // Declare CommentsController.
    function CommentsController($scope) {
      var vm = this;
      
      // Current comment.
      vm.comment = {};
  
      // Array where comments will be.
      vm.comments = [];
  
      // Fires when form is submited.
      vm.addComment = function() {
        // Fixed img.
        vm.comment.avatarSrc = 'http://lorempixel.com/200/200/people/';
  
        // Add current date to the comment.
        vm.comment.date = Date.now();
  
        vm.comments.push( vm.comment );
        vm.comment = {};
  
        // Reset clases of the form after submit.
        $scope.form.$setPristine();
      }
  
      // Fires when the comment change the anonymous state.
      vm.anonymousChanged = function(){
        if(vm.comment.anonymous)
          vm.comment.author = "";
      }
    }
  
  })();


















  
