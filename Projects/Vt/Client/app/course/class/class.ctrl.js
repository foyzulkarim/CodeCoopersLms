angular.module('vt.course').controller('classController', ['$rootScope', '$scope', '$routeParams', '$location', 'classService', function classController($rootScope, $scope, $routeParams, $location, classService) {

    $scope.content = { Type:0};
    $scope.showVideo = true;

    function init() {

        var id = $routeParams.id;
        classService.isUnlocked(id).then(function (response1) {        
            if (response1.IsSuccess) {
                classService.get(id).then(function (response) {
                    console.log(response);
                    if (response.IsSuccess) {
                        $scope.content = response.Data;
                        if ($scope.content.Type === 2) {
                            $scope.loadQuiz();
                        }   
                        else if ($scope.content.VideoUrl) {                         
                            setTimeout(function() {
                                wistiaEmbed = Wistia.embed($scope.content.VideoUrl, {
                                    videoFoam: true
                                });
                            },500);                            
                        }                        
                    }
                  
                });
            } else {
                alert('The requested content is not unlocked yet.');
                $location.path('/');
            }
        }, function (response2) {
            console.log(response2);
            alert(response2.Message);
            $location.path('/');
        });
    }


    init();


    $scope.gotoNext = function () {
        if ($scope.content.Level.Count == $scope.content.No) {
            alert('End of the level ' + $scope.content.Level.Name);
        } else {
            classService.getId({contentNo: $scope.content.No + 1, levelNo: $scope.content.Level.No }).then(function (response) {
                classService.isUnlocked(response.Data).then(function (response1) {
                    if (response1.IsSuccess) {
                        $location.path("/class-detail/" + response.Data);
                    } else {
                        alert('Your requested content is locked. It is a paid content and is accessible only if you completed your current quiz. In case you completed the quiz, please retake it.');
                        $scope.loadQuiz();
                        $scope.showVideo = false;
                    }
                });
            }, function (error) {
                console.log(error);
            });
        }
    }

    $scope.gotoPrevious = function () {
        if ($scope.content.No == 1) {
            alert('no previous');
        } else {
            classService.getId({ contentNo: $scope.content.No - 1, levelNo: $scope.content.Level.No}).then(function (response) {
                console.log(response.Data);
                $location.path("/class-detail/" + response.Data);
            }, function (error) {
                console.log(error);
            });
        }
    }


    $scope.loadQuiz = function () {
        classService.loadQuiz($scope.content.Id).then(function(response) {
            $scope.quiz = response.Data;
        }, function(error) {
            alert('Error occurred.' + error.Data);
        });
    };
    var getQuizAnswers = function () {

        var answers = [];
        for (var i = 0; i < $scope.quiz.Questions.length; i++) {
            var answerTemp = null;

            if ($scope.quiz.Questions[i].Type === 1) {
                for (var j = 0; j < $scope.quiz.Questions[i].Options.length; j++) {
                    if ($scope.quiz.Questions[i].Options[j].Id === $scope.quiz.Questions[i].IsSelected) {
                        answerTemp = { QuestionId: $scope.quiz.Questions[i].Id, AnswerText: $scope.quiz.Questions[i].Options[j].Name };
                        break;
                    }
                }
            } else {
                answerTemp = { QuestionId: $scope.quiz.Questions[i].Id, AnswerText: $scope.quiz.Questions[i].IsSelected };
            }
            answers.push(answerTemp);
        }
        return { ContentId: $scope.quiz.ContentId, QuizHistoryId: $scope.quiz.Id, Answers: answers };
    };

    $scope.submitQuizAnswers = function() {
        var answers = getQuizAnswers();
        console.log(answers);

        classService.submitAnswers(answers).then(function(response) {
            if (response.IsSuccess) {
                $location.path("/class-detail/" + response.Data.ContentId);
            } else {
                alert(response.Message);
                if (response.Data==="Assignment") {
                    $location.path('/');
                }
            }
        });
    };


    $scope.gotoDetails = function (content) {        
        $location.path("/class-detail/" + content.Id);
    };

   
}]);