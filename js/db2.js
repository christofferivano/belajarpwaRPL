const db = firebase.firestore();
// const db2 = firebase.firestore();

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

db.collection('contact').onSnapshot( snapshot => {
    snapshot.docChanges().forEach( change => {
      if(change.type === 'added'){
        addTesti(change.doc.data(), change.doc.id)
      }
      // if(change.type === 'modified'){
      //   editForum(change.doc.data(), change.doc.id);
      // }
      // if(change.type === 'removed'){
      //   removeForum(change.doc.id);
      // }
    })
  })

const contact = document.querySelector('#formcontact');
contact.addEventListener('submit', evt => {
  evt.preventDefault();
  
  const message = {
    email: contact.mailEmail.value,
    name: contact.mailName.value,
    message: contact.mailMessage.value
  };

  db.collection('contact').add(message)
    .catch(err => console.log(err));

  contact.reset();
});