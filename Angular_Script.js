angular.module('myApp', []).controller('myController', function($scope){
    //Taking temporary variable to determine which value between 'X' and 'O' to set on clicked grid 
    var myVar = 0;
    var found = false;
    var name = "";
    // Initializing all ng models used in code
    $scope.PlayerValue = ["", "", "",
                          "", "", "",
                          "", "", ""];

    $scope.myFun = function(idx) {

        //set value of respectivge grid
        if ($scope.PlayerValue[idx] == "" && found==false) {
            if (myVar%2 == 0) {
                $scope.PlayerValue[idx] = "X";
            } else {
                $scope.PlayerValue[idx] = "O";
            }
            myVar++;
        }    

        //Check if game is in draw condition
        if (myVar == 9) {
            found = true;
            name = "draw";
        }
        $scope.checkWin();
    }

    $scope.checkWin = function() {
        //Checking all 8 cases of win
        //1. All 3 horizontal row cases
        if ($scope.PlayerValue[0] == $scope.PlayerValue[1] && $scope.PlayerValue[1] == $scope.PlayerValue[2]) {
            if($scope.PlayerValue[0] != "") name = $scope.PlayerValue[0];
            if(name != "") found = true;
        }
        if ($scope.PlayerValue[3] == $scope.PlayerValue[4] && $scope.PlayerValue[4] == $scope.PlayerValue[5]) {
            if($scope.PlayerValue[3] != "") name = $scope.PlayerValue[3];
            if(name != "") found = true;
        }
        if ($scope.PlayerValue[6] == $scope.PlayerValue[7] && $scope.PlayerValue[7] == $scope.PlayerValue[8]) {
            if($scope.PlayerValue[6] != "") name = $scope.PlayerValue[6];
            if(name != "") found = true;
        }

        //2. All 3 vertical cases
        if ($scope.PlayerValue[0] == $scope.PlayerValue[3] && $scope.PlayerValue[3] == $scope.PlayerValue[6]) {
            if($scope.PlayerValue[0] != "") name = $scope.PlayerValue[0];
            if(name != "") found = true;
        }
        if ($scope.PlayerValue[1] == $scope.PlayerValue[4] && $scope.PlayerValue[4] == $scope.PlayerValue[7]) {
            if($scope.PlayerValue[1] != "") name = $scope.PlayerValue[1];
            if(name != "") found = true;
        }
        if ($scope.PlayerValue[2] == $scope.PlayerValue[5] && $scope.PlayerValue[5] == $scope.PlayerValue[8]) {
            if($scope.PlayerValue[2] != "") name = $scope.PlayerValue[2];
            if(name != "") found = true;
        }

        //3. 2 diagonal cases
        if ($scope.PlayerValue[0] == $scope.PlayerValue[4] && $scope.PlayerValue[4] == $scope.PlayerValue[8]) {
            if($scope.PlayerValue[0] != "") name = $scope.PlayerValue[0];
            if(name != "") found = true;
        }
        if ($scope.PlayerValue[2] == $scope.PlayerValue[4] && $scope.PlayerValue[4] == $scope.PlayerValue[6]) {
            if($scope.PlayerValue[2] != "") name = $scope.PlayerValue[2];
            if(name != "") found = true;
        }

        if (found == true) {
            if (name == "draw") {
                $scope.result = "It's a DRAW"    
            }
            else {                        
                $scope.result = "Player " + name + " won this game";
            }
        }
        
    }
});