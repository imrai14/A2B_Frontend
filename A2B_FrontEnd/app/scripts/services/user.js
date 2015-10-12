angular.module('a2BClientApp')
  .service('UserService', function ($q, $http, $resource,$rootScope) {
  	var baseUrl = 'http://localhost:1337';

  	this.register = function(user){
  		var deferred = $q.defer();

  		// $http.post(baseUrl+'user/signup',user)
  		$http.post(baseUrl+'/user/signup',user)
  		.success(function(response){
  			deferred.resolve(response);
  		})
  		.error(function(err){
  			deferred.reject(err);
  		})

  		return deferred.promise;
  	}

  	this.login = function(data){
  		var deferred = $q.defer();

  		// $http.post(baseUrl+'user/signup',user)
  		$http.post(baseUrl+'/user/login',data)
  		.success(function(response){
  			$rootScope.user = response;
  			deferred.resolve(response);
  		})
  		.error(function(err){
  			deferred.reject(err);
  		})

  		return deferred.promise;
  	}

      this.logout = function(data){
      var deferred = $q.defer();

      // $http.post(baseUrl+'user/signup',user)
      $http.get(baseUrl+'/user/logout',data)
      .success(function(response){
        
        deferred.resolve(response);
      })
      .error(function(err){
        deferred.reject(err);
      })

      return deferred.promise;
    }


    this.delete = function(id){
      var deferred = $q.defer();

      // $http.post(baseUrl+'user/signup',user)
      $http.delete(baseUrl+'/user/id',id)
      .success(function(response){
        
        deferred.resolve(response);
      })
      .error(function(err){
        deferred.reject(err);
      })

      return deferred.promise;
    }


  });