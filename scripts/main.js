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