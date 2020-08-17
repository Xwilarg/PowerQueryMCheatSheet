let array = [
    [ "Silence",    "赫默",     108, "18/05", 154 ],
    [ "Saria",      "塞雷娅",   202, "23/04", 174 ],
    [ "Ifrit",      "伊芙利特", 134, "22/07", 159 ],
    [ "Ptilopsis",  "白面鸮",   128, "06/10", 164 ],
    [ "Mayer",      "梅尔",     242, "20/11", 159 ],
    [ "Magallan",   "麦哲伦",   248, "17/10", 160 ]
]

function loadTable() {
    for (let x = 0; x < array.length; x++) {
        var row = document.getElementById("mainTable").insertRow(x);
        for (let i = 0; i < array[x].length; i++) {
            let elem = row.insertCell(i);
            elem.innerHTML = array[x][i];
            elem.contentEditable = true;
            elem.addEventListener("input", function(e) {
                array[x][i] = e.srcElement.textContent;
                loadAllTables();
            });
        }
    }
}

function loadAllTables() {
    loadGetColumnTable();
}

function loadGetColumnTable() {
    document.getElementById("getColumnTable").innerHTML = "";
    array.forEach(e => {
        var row = document.getElementById("getColumnTable").insertRow(0);
        if (e[0] === "Silence" || e[0] === "Saria") {
            for (let i = 0; i < e.length; i++) {
                row.insertCell(i).innerHTML = e[i];
            }
        }
    });
}

loadTable();
loadAllTables();