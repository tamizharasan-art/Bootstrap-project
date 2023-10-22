const cardData = document.querySelector(".cards-container");

const globalStorage = [];
console.log(globalStorage);

const generateNewCard = (taskData) => `

<div class="col-sm-12 col-md-6 col-lg-4 pb-3 id=${taskData.id}">
  <div class="card">
    <div class="card-header d-flex justify-content-end gap-2">
      <button type="button" class="btn btn-outline-success "><i class="fa fa-pencil" aria-hidden="true"></i></button>
      <button type="button" class="btn btn-outline-danger"><i class="fa fa-trash" aria-hidden="true"></i></button>
    </div>
    <div class="card-body">
       <div class="img-container">
      <img src="${taskData.imageUrl}" class="card-img-top" alt="IMAGE">
    </div>
      <h5 class="card-title  fw-bold text-primary">${taskData.taskTitle}</h5>
      <p class="card-text">${taskData.taskDescription}</p>
      <a href="#" class="btn btn-primary">${taskData.taskType}</a>
    </div>
  </div>
</div>
       `;   // Back tick (`) is used in the place were multi line string are used NOTE: dont used back tick and curly brackets together 

const onLoadCardData = () => {

//Get the cards data from the local storage
const localCardData = localStorage.getItem("tasky");

//convert them into normal object
 const {cards} = JSON.parse(localCardData);

//loop over the array of task objects to create html cards,inject it to DOM
  cards.map((cardObjects) => {
    cardData.insertAdjacentHTML("beforeend",generateNewCard(cardObjects));

    //Update the global storage

    globalStorage.push(cardObjects);
  });

}

const saveChanges = () => {
    const taskData = {
        id : `${Date.now()}`,
        imageUrl : document.getElementById("imageurl").value,
        taskTitle : document.getElementById("tasktitle").value,
        taskType : document.getElementById("tasktype").value,
        taskDescription : document.getElementById("taskdescription").value
    }
    console.log(taskData);

  cardData.insertAdjacentHTML("beforeend",generateNewCard(taskData));  //before end add the data at the last i.e:before the ending of the previous data

  globalStorage.push(taskData);
  localStorage.setItem("tasky",JSON.stringify({cards:globalStorage})); //It always stores objects of object format so to make it into array of object format use "sringify" 

};


//Issues

//Refreshing the pages causes the data to lose
//API -> Application Programming Interface
//Local storage -> Accessing Application via local storage
//Interface -> Acts as the middle man

//To activate the delete and write button
//To enable the search button


