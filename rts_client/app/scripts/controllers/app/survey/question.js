/* 
 * question controller
 *
 * 설문지를 구성하는 질의내용을 관리하는 컨트롤러 
 *
 * History
 * v1.0 - 최초 작성, sglee(2013/10/07)
 */
'use strict';

angular.module('rtsClientApp')
	.controller('AppSurveyQuestionCtrl', function($scope, $state, $location){
		$scope.item = {};
		$scope.item = {count: 0, total: 130,title: '본 세미나는 유익했습니까? 본 세미나는 유익했습니까 본 세미나는 유익했습니까 본 세미나는 유익했습니까 본 세미나는 유익했습니까 본 세미나는 유익했습니까'};
	
		$scope.next = function(){
			$state.go('app.rtsquestion');
		}
	});