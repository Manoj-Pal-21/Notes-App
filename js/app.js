console.log("HELLO NAVBAR");
showNotes();


let addBtn = document.getElementById("addNote");

addBtn.addEventListener("click", () => {

    let addTxt = document.getElementById("addTxt");
    let notes = localStorage.getItem("notes");

    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }

    notesObj.push(addTxt.value);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    addTxt.value = "";

    // console.log(notesObj);
    showNotes();

});

function showNotes() {

    let notes = localStorage.getItem("notes");

    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }

    let html = "";

    notesObj.forEach(function (element, index) {
        html +=
            `
            <div class="card my-2 mx-2" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">Notes ${index + 1}</h5>
                    <p class="card-text">${element}</p>
                    <button id="${index}" onclick="deleteNote(this.id)" class="btn btn-primary">Delete Note</button>
                </div>
            </div>

            `;
    });

    let notesElement = document.getElementById("notes");

    if (notesObj.length != 0) {
        notesElement.innerHTML = html;
    } else {
        notesElement.innerHTML = `<strong>Nothing to show! Use "Add a Note" section above to add notes.</strong>`;
    }

}

function deleteNote(index) {

    // console.log("Note Deleted", index);

    let notes = localStorage.getItem("notes");

    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    };

    notesObj.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    showNotes();
}

let search = document.getElementById("searchTxt");

search.addEventListener("input", function () {

    let inputVal = search.value;
    // console.log("Input Fire", inputTxt);

    let noteCards = document.getElementsByClassName("noteCard");
    Array.from(noteCards).forEach( function (element) {
        let cardTxt = element.getElementsByTagName("p")[0];
        console.log(cardTxt);

        // if (cardTxt.includes(inputVal)) {
        //     element.style.display = "block";
        // } else {
        //     element.style.display = "none";
        // }

    });
})