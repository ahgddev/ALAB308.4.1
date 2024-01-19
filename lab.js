// Part 1: Feeling Loopy Assignment

let parseme ="ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";
let stilllooking = true;

function getRows() {
    let rowcount = 0;
    for (i = 0; i < parseme.length; i++){
        if (parseme.charAt(i) == "\n") {
            rowcount += 1;
            console.log(rowcount);
            return rowcount;
        }
        if (parseme.charAt(i) == ",") {
            rowcount += 1;
            i++;
        }
    }
}

// while (stilllooking) {
//     let cell1 = "";
//     let cell2 = "";
//     let cell3 = "";
//     let cell4 = "";
//     let commacount = 0;
//     let parserarray = [];

//     for (i = 0; i < parseme.length; i++){
//         if (parseme.charAt(i) == "\n") {
//             console.log("cell1 " + cell1,"cell2 " + cell2,"cell3 " + cell3,"cell4 " + cell4)
//             commacount = 0;
//             cell1 = "";
//             cell2 = "";
//             cell3 = "";
//             cell4 = "";
//         }
//         if (parseme.charAt(i) == ",") {
//             commacount += 1;
//             i++;
//         }
//         switch (commacount) {
//             case 0:
//                 cell1 += parseme.charAt(i);
//                 break;
//             case 1:
//                 cell2 += parseme.charAt(i);
//                 break;
//             case 2:
//                 cell3 += parseme.charAt(i);
//                 break;
//             case 3:
//                 cell4 += parseme.charAt(i);
//                 break;
//         }
//     }
//     stilllooking = false;
// }