
 
const postList = document.querySelector(`#posts-list`);
const addPostForm = document.querySelector(`#add-post-form`);
const titleValue = document.getElementById(`title-value`);
const bodyValue = document.getElementById(`body-value`);
const btnSubmit = document.querySelector(`.btn`)
let output = '';

const renderArticles = (articles) =>{
  articles.forEach(article=>{
   
    output +=`
    <div class="card mt-4 col-md-6 bg-ligt">
    <div class="card-body" data-id= ${article._id}>
      <h5 class="card-title">${article.title}</h5>
      <h6 class="card-subtitle mb-2 text-muted">${article.date}</h6>
      <p class="card-text">${article.body}</p>
      <a href="#" class="card-link" id="edit-post">Edit</a>
      <a href="#" class="card-link" id="delete-post">Delete</a>
    </div>
  </div>
    `;
 });
 postList.innerHTML = output;
}

const url= `https://noella-atlp.herokuapp.com/article`;


// get Articles
fetch(url)
.then(res => res.json())
.then(data => renderArticles(data))

postList.addEventListener('click', (e) =>{
  e.preventDefault();
let delButtonIsPressed = e.target.id == `delete-post`;
let EditButtonIsPressed = e.target.id == `edit-post`;

let id = e.target.parentElement.dataset.id;

// Delete AN article
if(delButtonIsPressed){
  fetch(`${url}/${id}`, {
    method: `DELETE`,
  })

  .then(res => res.json())
  .then(() => location.reload())
}


// update post
 if(EditButtonIsPressed){

   const parent = e.target.parentElement;

   let titleContent = parent.querySelector(`.card-title`).textContent;
   let bodyContent = parent.querySelector(`.card-text`).textContent;

   titleValue.value = titleContent;
   bodyValue.value= bodyContent;

 }
//  Update post
btnSubmit.addEventListener(`click`, (e) =>{
  e.preventDefault();
  fetch(`${url}/${id}`,{
    method: `PATCH`,
    headers: {
      'Content-Type' :'application/json'
    },
    body: JSON.stringify({
    title:  titleValue.value ,
    body: bodyValue.value
    })
  })
.then(res => res.json())
.then(() => location.reload())
})
});

// Create new article
addPostForm.addEventListener(`submit`, (e) =>{
  e.preventDefault();
  
  fetch(url, {
    method: `POST`,
    headers: {
      'Content-Type' :'application/json'
    },
body: JSON.stringify({
  title: titleValue.value,
  body: bodyValue.value
})
  })
  .then(res => res.json())
  .then(data => {
    const dataArr = [];
    dataArr.push(data);
    renderArticles(dataArr);
  })
// reset input field
titleValue.value ='';
bodyValue.value= '';

})