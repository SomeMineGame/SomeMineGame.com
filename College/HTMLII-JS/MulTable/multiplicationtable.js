// Javascript Document
// Multiplication Table
// Author : SomeMineGame
// Date   : 1-26-2026

window.onload = initAll;
var ansrow, anscol;

function initAll() {
    console.log("initAll has started.");
    ansrow = prompt("How many rows?", 5)
    anscol = prompt("How many columns?", 8)
    drawInlineTable();
    document.getElementById('inlinetable').onmouseout = mouseOut;
}

function drawInlineTable() {
    // console.log("In drawInlineTable")
    // tableString = `    <table>
    //     <tr>
    //         <td>A</td>
    //         <td>B</td>
    //         <td>C</td>
    //     </tr>
    //     <tr>
    //         <td>D</td>
    //         <td>E</td>
    //         <td>F</td>
    //     </tr>
    // </table>`;
    // document.getElementById('inlinetable').innerHTML = tableString;
    rowInt = ansrow % 1;
    colInt = anscol % 1;

    if (ansrow < 1 || anscol < 1) {
        alert("Fun fact! One of those numbers was off. Yeah, it was too small. Try something between 1 and 12.");
        initAll();
    }

    else if (ansrow > 12 || anscol > 12) {
        alert("Fun fact! One of those numbers was off. Yeah, it was too big. Try something between 1 and 12.");
        initAll();
    }

    else if (Number.isNaN(rowInt) || Number.isNaN(colInt)) {
        alert("Fun fact! One of those numbers was off. Yeah, it wasn't just a number. Try something without a non numerical character.");
        initAll();
    }

    else if (rowInt != 0 || colInt != 0) {
        alert("Fun fact! One of those numbers was off. Yeah, it wasn't a whole number. Try something without a decimal.");
        initAll();
    }

    tableString = "<table>";
    for (row=1; row<=ansrow; row++) {
        tableString += "<tr>"
        for (col=1;col<=anscol;col++) {
            value = col*row;
            valueid = "r"+row+'c'+col
            tableString += "<td id='"+valueid+"'>"+value+"</td>"
        }
        tableString += '</tr>'
    }
    tableString += '</table>'
    document.getElementById('inlinetable').innerHTML = tableString;

    
    for (row=1; row<=ansrow; row++) {
        for (col=1;col<=anscol;col++) {
            value = col*row;
            valueid = "r"+row+'c'+col
            document.getElementById(valueid).onclick = getCell
        }
        tableString += '</tr>'
    }
}

function getCell(evt) {
    var thisCell;
    thisCell = evt.target;

    document.getElementById('tablemessage').innerHTML = thisCell.id+" = "+document.getElementById(thisCell.id).innerHTML;
    thisCell.className = 'pickedCell'
}

function mouseOut(evt) {
    var thisCell;
    thisCell = evt.target;

    document.getElementById('tablemessage').innerHTML = "Pick a square";
    thisCell.className = ''
}