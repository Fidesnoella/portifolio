const modalWrapper = document.querySelector('.modal-wrapper');
// modal add
const addModal = document.querySelector('.add-modal');
const addModalForm = document.querySelector('.add-modal .form');

// modal edit
const editModal = document.querySelector('.edit-modal');
const editModalForm = document.querySelector('.edit-modal .form');

const btnAdd = document.querySelector('.btn-add');

const tableUsers = document.querySelector('.table-users');

let id;

// Create element and render users
const renderUser = doc => {
  const tr = `
    <tr data-id='${doc.id}'>
      <td>${doc.data().title}</td>
      <td>${doc.data().description}</td>
      <td>
     
      <td>
        <button class="btn btn-edit">Edit</button>
        <button class="btn btn-delete">Delete</button>
      </td>
      <tr> <button class="btn btn-comment">Add comment</button></tr>
      </td>
      </tr>
    </tr>
  `;
  tableUsers.insertAdjacentHTML('beforeend', tr);

  // Click edit user
  const btnEdit = document.querySelector(`[data-id='${doc.id}'] .btn-edit`);
  btnEdit.addEventListener('click', () => {
    editModal.classList.add('modal-show');

    id = doc.id;
    editModalForm.title.value = doc.data().title;
    editModalForm.description.value = doc.data().description;
  });

  // Click delete user
  const btnDelete = document.querySelector(`[data-id='${doc.id}'] .btn-delete`);
  btnDelete.addEventListener('click', () => {
    db.collection('articles').doc(`${doc.id}`).delete().then(() => {
        swal("Article deleted", "success");
    }).catch(err => {
        swal("Article does not deleted", "error occured");
    });
  });

}

// Click add user button
btnAdd.addEventListener('click', () => {
  addModal.classList.add('modal-show');

  addModalForm.title.value = '';
  addModalForm.description.value = '';
});

// User click anyware outside the modal
window.addEventListener('click', e => {
  if(e.target === addModal) {
    addModal.classList.remove('modal-show');
  }
  if(e.target === editModal) {
    editModal.classList.remove('modal-show');
  }
});

// Get all users
// db.collection('users').get().then(querySnapshot => {
//   querySnapshot.forEach(doc => {
//     renderUser(doc);
//   })
// });

// Real time listener
db.collection('articles').onSnapshot(snapshot => {
  snapshot.docChanges().forEach(change => {
    if(change.type === 'added') {
      renderUser(change.doc);
    }
    if(change.type === 'removed') {
      let tr = document.querySelector(`[data-id='${change.doc.id}']`);
      let tbody = tr.parentElement;
      tableUsers.removeChild(tbody);
    }
    if(change.type === 'modified') {
      let tr = document.querySelector(`[data-id='${change.doc.id}']`);
      let tbody = tr.parentElement;
      tableUsers.removeChild(tbody);
      renderUser(change.doc);
    }
  })
})

// Click submit in add modal
addModalForm.addEventListener('submit', e => {
  e.preventDefault();
  db.collection('articles').add({
    title: addModalForm.title.value,
   description: addModalForm.description.value,
  });
  modalWrapper.classList.remove('modal-show');
});

// Click submit in edit modal
editModalForm.addEventListener('submit', e => {
  e.preventDefault();
  db.collection('articles').doc(id).update({
    title: editModalForm.title.value,
    description: editModalForm.description.value,
  });
  editModal.classList.remove('modal-show');

});

// Displaying userName

firebase.auth().onAuthStateChanged((user) =>{
    if(user){
      var uid = user.uid;
  
      document.querySelectorAll(".user-name").forEach((element) =>{
        element.innerHTML = user.displayName;
  
        console.log(user)
      })
    }
  
  });
  
  
  
  // logout a user
  const logout = document.querySelector('#logout');
  logout.addEventListener('click', (e) => {
    e.preventDefault();
    auth.signOut();
    window.location.pathname = "./index.html";
  });
// adding comment to db
  const form = document.getElementById(`comments`);
  form.addEventListener(`submit`,(e) =>{
    e.preventDefault();
    db.collection(`comments`).add({
      name: form.name.value,
      comment: form.comment.value
    });
    form.name.value = ``;
    form.comment.value = ``;
  });

  // Reading comment from db

  const div = document.querySelector(`.cont`);
  renderList = (doc) =>{
    var main_div = document.createElement(`div`);
    var card_body = document.createElement(`div`);
    var name = document.createElement(`h5`);
    var comment = document.createElement(`p`);
    main_div.setAttribute(`class`,`card mt-3`);
   card_body.setAttribute(`class`,`card-body`);
    name.setAttribute(`class`,`card-title`);
    comment.setAttribute(`class`,`card-text`);
    name.textContent= doc.data().name;
   comment.textContent= doc.data().comment;
    card_body.appendChild(name);
    card_body.appendChild(comment);
    main_div.appendChild(card_body);
   div.appendChild(main_div);
  }
  db.collection(`comments`).onSnapshot(snap =>{
    let changes = snap.docChanges();
    changes.forEach(change =>{
      if (change.type == `added`) {
        renderList(change.doc);
  
      }
    });
  });

 