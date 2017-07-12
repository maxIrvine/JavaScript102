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



