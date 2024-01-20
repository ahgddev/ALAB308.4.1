// Part 1: Feeling Loopy Assignment

let parseme ="ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";
let stilllooking = true;

function getColumns() {
    let columncount = 0;
    for (i = 0; i < parseme.length; i++){
        if (parseme.charAt(i) == "\n") {
            columncount += 1;
            return columncount;
        } else if (parseme.charAt(i) == ",") {
            columncount += 1;
            i++;
        } else {
            continue;
        }
    }
}

// Part 2: Expanding Functionality

function parseData() {
    let parserarray = [];
    while (stilllooking) {
        let cell1 = "";
        let cell2 = "";
        let cell3 = "";
        let cell4 = "";
        let commacount = 0;

        for (i = 0; i < parseme.length; i++){
            if (i == (parseme.length - 1))
            {
                cell4 += parseme.charAt(i) + parseme.charAt(i+1)
                parserarray.unshift([cell1,cell2,cell3,cell4]);
            }
            if (parseme.charAt(i) == "\n") {
                parserarray.unshift([cell1,cell2,cell3,cell4]);
                i+=1;
                commacount = 0;
                cell1 = "";
                cell2 = "";
                cell3 = "";
                cell4 = "";
            }
            if (parseme.charAt(i) == ",") {
                commacount += 1;
                i++;
            }
            switch (commacount) {
                case 0:
                    cell1 += parseme.charAt(i);
                    break;
                case 1:
                    cell2 += parseme.charAt(i);
                    break;
                case 2:
                    cell3 += parseme.charAt(i);
                    break;
                case 3:
                    cell4 += parseme.charAt(i);
                    break;
            }
        stilllooking = false;
    }
    parserarray.reverse();
    }
    return parserarray;
}

// Part 3: Transforming Data

function convertToJSON(anarray){
    let jsonarray = [];
    let columns = getColumns();
    let rows = anarray.length - 1;
    let j = 0;
    

    for (i = 0; i < columns; i++){
        j = i+1;
        const tempObject = {};
        for (data = 0; data < rows; data++){
           tempObject[anarray[0][data]] = anarray[j][data];
        }
        jsonarray[i] = tempObject;   
    }
    return jsonarray;
}

// Part 4: Sorting and Manipulating Data

let JSONconversion = convertToJSON(parseData());

JSONconversion.pop();
JSONconversion.splice(1, 0, {id: "48", name: "Barry", occupation: "Runner", age: "25" });
JSONconversion.splice((JSONconversion.length), 0, {id: "7", name: "Bilbo", occupation: "None", age: "111" });

function avgAge(JSONitem) {
    let sum = 0;
    for (innerarray = 0; innerarray < JSONitem.length; innerarray++){
        if(JSONitem[innerarray].age == undefined){
            sum += parseInt(JSONitem[innerarray].Age)
        } else {
            sum += parseInt(JSONitem[innerarray].age)
        }
    }
    return sum/JSONitem.length;
}

// Part 5: Full Circle
function JSONtoCSV(JSONitem){
    let processedValues = JSONitem.map((element) => {
        let tempArray = Object.values(element);
        let tempText = ""
        for (x = 0; x < tempArray.length; x++){
            if (x == tempArray.length - 1) {
                tempText += tempArray[x]+"\n"
            } else {
            tempText = tempText+tempArray[x]+","
            }
        }
        return tempText
   }).join("");
   let processedIDs = Object.keys(JSONitem[0]).toString()+'\n'
   let finalCSV = processedIDs + processedValues;
   return finalCSV
}


console.log(JSONconversion)
console.log(avgAge(JSONconversion))
console.log(JSONtoCSV(JSONconversion))