const db = firebase.firestore();

db.enablePersistence()
  .catch(function(err) {
    if (err.code == 'failed-precondition') {
      // probably multible tabs open at once
      console.log('persistance failed');
    } else if (err.code == 'unimplemented') {
      // lack of browser support for the feature
      console.log('persistance not available');
    }
  });

// real-time listener
db.collection('forum').onSnapshot( snapshot => {
  snapshot.docChanges().forEach( change => {
    if(change.type === 'added'){
      addForum(change.doc.data(), change.doc.id)
    }
    if(change.type === 'modified'){
      // displayEditFoods(change.doc.data(), change.doc.id);
    }
    if(change.type === 'removed'){
      // removeFoods(change.doc.id);
    }
  })
})

// add new disc
const modal = document.querySelector('.add-disc');
modal.addEventListener('submit', evt => {
  evt.preventDefault();
  
  const disc = {
    user: modal.userName.value,
    comment: modal.userComment.value
  };

  db.collection('forum').add(disc)
    .catch(err => console.log(err));

  // form.userName.value = '';
  // form.userComment.value = '';
  modal.reset();
});

// // remove a recipe
// const recipeContainer = document.querySelector('.recipes');
// recipeContainer.addEventListener('click', evt => {
//   if(evt.target.tagName === 'I'){
//     const id = evt.target.getAttribute('data-id');
//     //console.log(id);
//     db.collection('recipes').doc(id).delete();
//   }
// })
          