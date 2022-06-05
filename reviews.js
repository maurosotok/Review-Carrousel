const reviews = [{
    id: 1,
    name: "John Simmons",
    job: "UI developer",
    img: "https://www.theportlandclinic.com/wp-content/uploads/2019/07/Person-Curtis_4x5-e1564616444404-300x300.jpg",
    text: "The UI is crafted for clarity so developers easily understand the problem flow from the vulnerability source to the code location (‘sink’) where the compromise occurs",

},{
    id: 2,
    name: "Adam Hicks",
    job: "Web developer",
    img: "https://www.mnp.ca/-/media/foundation/integrations/personnel/2020/12/16/13/57/personnel-image-4483.jpg?h=800&w=600&hash=9D5E5FCBEE00EB562DCD8AC8FDA8433D",
    text: "This time last year I was a graphic design intern, and now I'm managing teams of designers often. I've worked hard on improving my leadership and communication skills this past year and am much more comfortable with customer service work."
},
{
    id: 3,
    name: "Mike Connor",
    job: "UX Developer",
    img: "https://www.diethelmtravel.com/wp-content/uploads/2016/04/bill-gates-wealthiest-person.jpg",
    text: "A great user experience comes from the user’s end. Most users know what they want to accomplish on any given website, and your job as the designer is to give it to them in a clear, straightforward design."
}
];
//selecting items

const img = document.getElementById("img-person");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".forw-btn");
const randomBtn = document.querySelector(".random-btn");

//set starting item
let currentItem = 0;

//load initial item

window.addEventListener("DOMContentLoaded", function(){ 
    showPerson();
});

function showPerson(){
    const item = reviews[currentItem];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
};
nextBtn.addEventListener("click", function(){
    currentItem++;
    if(currentItem > reviews.length -1){
        currentItem = 0;
    }
        showPerson();
});
prevBtn.addEventListener("click", function(){
    currentItem--;
    if(currentItem < 0){
        currentItem = reviews.length - 1;
    }
        showPerson();

});
randomBtn.addEventListener("click", function(){
    var itemnumber = Math.floor(Math.random() * reviews.length);
    currentItem = itemnumber;
    showPerson();
});
