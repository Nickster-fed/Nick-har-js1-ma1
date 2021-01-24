


// Question 1:

let cat = {
    complain: function() {
        console.log("Meow!");
    },
};





// Question 2:

const heading= document.querySelector("h3");

heading.innerHTML = "Updated heading";






// Question 3:

heading.style.fontSize = "2em";







// Question 4:

heading.className = "subheading;"

console.log(heading);




// Question 5:

const paras = document.querySelectorAll("p");

paras.className = "paragraphs";

for (var i = 0; i < paras.length; i++) {
    paras[i].style.color = "red";
};


// Question 6:

const resultContainer = document.querySelector(".results");

resultContainer.innerHTML = "<p>New paragraph</p>";


// Question 7:

const seven = function(list) {
    for(var i = 0; i < list.length; i++) {
        console.log(list[i].name);
    };
};


const cats = [
    {
        name: "Blob",
        age: 10
    },
    {
        name: "Harold",
    },
    {
        name: "Blurt",
        age: 21
    }
];

seven(cats);


// Question 8:

const createCats = function(cats) {
    

    // Standard values

    let objectAge = "Unknown";

    if (cats.age) {
        objectAge = cats.age;
    }


    for(let i = 0; i < cats.length; i++) {
        //wrap div
        `<h5>${cats[i].name}</h5>
         <p>${cats[i].age}</p>`
    }
};

createCats(cats);