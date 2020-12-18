// JavaScript to create new framework


const gridSpace = document.querySelector('.grid');



function newGrid(hw) {
    // hw is the height-width of the square etch-a sketch
    gridSpace.innerHTML = "";
    for (i = 0; i < hw; i++) {
        // console.log("does this run?")
        // build new column
        var newCol = document.createElement('div');
        newCol.className = 'col';
        
        // fill in rows
        for (j = 0; j < hw; j++) {
            var newRow = document.createElement('div');
            newRow.className = 'row';
            newCol.appendChild(newRow);
        }
        
        // add column to gridSpace
        gridSpace.appendChild(newCol);
    }
    document.querySelectorAll('.row').forEach(item => {
        item.addEventListener('mouseover', () => {
            item.style.backgroundColor = "black";
        })
    })
}

let hw = 16; // default

const btn = document.querySelector('button.build');



btn.addEventListener('click', () => newGrid(document.getElementById("gridInput").value));