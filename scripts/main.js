function printNumbers(start, end) {
    for (i=start;i<= end;i++) {
        console.log(i);
    }
}

function printNumbers2(start, end) {
    var count = start;
    while (count <= end) {
        console.log(count);
        count++;
    }
}

function printSquare(size) {
    var toPrint = ""
    for (i=0;i<size;i++) {
        toPrint+= "*";
    }
    for (j=0;j<size;j++){
        console.log(toPrint);
    }
}

function printBox(width, height) {
    var ends = "";
    for (var i=0;i<width;i++){
        ends+= "*";
    }
    console.log(ends);
    var spaceRow = height - 2;
    var space = width - 2;
    count = 0;
    while (count < spaceRow) {
        var toPrint = ""
        for (var j=0;j<space; j++){
            toPrint+= " ";
        }
        console.log("*" + toPrint + "*");
        count++;
    }
    console.log(ends);
}

function printBanner(banner) {
    var len = banner.length;
    var ends = len + 1;
    var starPrint = "";
    for (var i=0;i<=len+1;i++){
        starPrint += "*";
    }
    console.log(starPrint);
    console.log("*" + banner + "*");
    console.log(starPrint);
}

function factors(num) {
    var str = "0"
    for (var i=0;i<num;i++){
        if (num%i == 0){
            str += "," + i;
        }
    }
    str += "," + num;
    console.log(str);
}

function cipher(str, offset) {
    var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    var toReturn = "";
    str = str.toLowerCase();
    var len = str.length;
    for (var i=0;i<len;i++){
        var letter = str[i];
        var alphaSpot = alphabet.indexOf(letter);
        if (alphaSpot + offset > 26) {
            alphaSpot -= 26;
        }
        if (alphaSpot === -1) {
            toReturn += " ";
        } else {
            var newSpot = alphaSpot + offset;
            var newLetter = alphabet[newSpot];
            toReturn += newLetter;
        }
    }
    console.log(toReturn);
}

function decipher(str, offset) {
    var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    var toReturn = "";
    str = str.toLowerCase();
    var len = str.length;
     for (var i=0;i<len;i++){
        var letter = str[i];
        var alphaSpot = alphabet.indexOf(letter);
        if (alphaSpot + offset > 26) {
            alphaSpot -= 26;
        }
        if (alphaSpot === -1) {
            toReturn += " ";
        } else {
            var newSpot = alphaSpot + offset;
            var newLetter = alphabet[newSpot];
            toReturn += newLetter;
        }
    }
    console.log(toReturn);
}

function leetSpeak(str) {
    var dict = {'a':4, 'e':3, 'g':6, 'i':1, 'o':0, 's':5, 't':7};
    var toReturn = "";
    var len = str.length;
    str = str.toLowerCase();
    for (var i=0;i<len;i++) {
        if (str[i] in dict){
            var letter = str[i];
            toReturn += dict[letter];
        } else {
            toReturn += str[i];
        }
    }
    console.log(toReturn);
}

function longVowels(str) {
    var vowels = ['a', 'e', 'i', 'o', 'u'];
    var toReturn = "";
    str = str.toLowerCase();
    var len = str.length
    var index1 = 0;
    var index2 = 1;
    while (index2 < len) {
        var letter1 = str[index1];
        var isIndex1 = vowels.includes(letter1);
       if (isIndex1 && (str[index1] == str[index2])) {
            toReturn += str.substring(0, index1);
            var letter = str[index1];
            toReturn += letter;
            toReturn += letter;
            toReturn += letter;
            toReturn += letter;
            toReturn += letter;
            toReturn += str.substring(index2, len);
            index2 = len;
        }
        index1++;
        index2++;
    }
    console.log(toReturn);
}

function sumNums(arr) {
    var count = 0;
    var len = arr.length;
    for (var i=0;i<len;i++) {
        count += arr[i];
    }
    console.log(count);
}

function positiveSum(arr) {
    var count = 0;
    var len = arr.length;
    for (var i=0;i<len;i++) {
        if (arr[i] > 0) {
            count += arr[i];
        }
    }
    console.log(count);
}

function matrixAdd(arr1, arr2) {
    var arr = [[0,0],[0,0]];
    var len = arr1.length;
    console.log(len);
    for (var i=0;i<len;i++) {
        for (var j=0;j<len;j++) {
            arr[i][j] = arr1[i][j] + arr2[i][j];
        }
    }
    console.log(arr);
}

function matrixMultiply(arr1,arr2) {
    var arr = [[0,0],[0,0]];
    var len = arr1.length;
    arr[0][0] = (arr1[0][0] * arr2[0][0]) + (arr1[0][1] * arr2[1][0]);
    arr[0][1] = (arr1[0][0] * arr2[0][1]) + (arr1[0][1] * arr2[1][1]);
    arr[1][0] = (arr1[1][0] * arr2[0][0]) + (arr1[1][1] * arr2[1][0]);
    arr[1][1] = (arr1[1][0] * arr2[0][1]) + (arr1[1][1] * arr2[1][1]);

    console.log(arr);
}

function rockPaperScissors(p1, p2) {
    var toReturn = "";

    if (p1 === "rock" && p2 === "scissor") {
        toReturn = "player 1";
    } else if (p2 === "rock" && p1 === "scissor"){
        toReturn = "player 2";
    } else if (p1 === "rock" && p2 === "paper"){
        toReturn = "player 2";
    } else if (p1 === "rock" && p2 === "paper"){
        toReturn = "player 1";
    } else if (p2 === "paper" && p1 === "scissor"){
        toReturn = "player 1";
    } else if (p1 === "paper" && p2 === "scissor"){
        toReturn = "player 2";
    } else {
        toReturn = "draw";
    }
    console.log(toReturn);
}

function ticTacToe(arr) {
    var spot1 = arr[0][0];
    var spot2 = arr[0][1];
    var spot3 = arr[0][2];
    if (spot1 === spot2 && spot1 === spot3 && spot1 === 'o') {
        console.log("o");
    }
    if (spot1 === spot2 && spot1 === spot3 && spot1 === 'x') {
        console.log("x");
    }
    var spot1 = arr[0][0];
    var spot2 = arr[1][0];
    var spot3 = arr[2][0];
    if (spot1 === spot2 && spot1 === spot3 && spot1 === 'o') {
        console.log("o");
    }
    if (spot1 === spot2 && spot1 === spot3 && spot1 === 'x') {
        console.log("x");
    }
    var spot1 = arr[0][0];
    var spot2 = arr[1][1];
    var spot3 = arr[2][2];
    if (spot1 === spot2 && spot1 === spot3 && spot1 === 'o') {
        console.log("o");
    }
    if (spot1 === spot2 && spot1 === spot3 && spot1 === 'x') {
        console.log("x");
    }
    var spot1 = arr[2][0];
    var spot2 = arr[2][1];
    var spot3 = arr[2][2];
    if (spot1 === spot2 && spot1 === spot3 && spot1 === 'o') {
        console.log("o");
    }
    if (spot1 === spot2 && spot1 === spot3 && spot1 === 'x') {
        console.log("x");
    }
    var spot1 = arr[0][2];
    var spot2 = arr[1][2];
    var spot3 = arr[2][2];
    if (spot1 === spot2 && spot1 === spot3 && spot1 === 'o') {
        console.log("o");
    }
    if (spot1 === spot2 && spot1 === spot3 && spot1 === 'x') {
        console.log("x");
    }
    var spot1 = arr[0][1];
    var spot2 = arr[1][1];
    var spot3 = arr[2][1];
    if (spot1 === spot2 && spot1 === spot3 && spot1 === 'o') {
        console.log("o");
    }
    if (spot1 === spot2 && spot1 === spot3 && spot1 === 'x') {
        console.log("x");
    }
    var spot1 = arr[1][0];
    var spot2 = arr[1][1];
    var spot3 = arr[1][2];
    if (spot1 === spot2 && spot1 === spot3 && spot1 === 'o') {
        console.log("o");
    }
    if (spot1 === spot2 && spot1 === spot3 && spot1 === 'x') {
        console.log("x");
    }
}