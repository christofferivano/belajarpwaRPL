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

// real-time listener
db.collection('forum').onSnapshot( snapshot => {
  snapshot.docChanges().forEach( change => {
    if(change.type === 'added'){
      addForum(change.doc.data(), change.doc.id)
    }
    if(change.type === 'modified'){
      editForum(change.doc.data(), change.doc.id);
    }
    if(change.type === 'removed'){
      removeForum(change.doc.id);
    }
  })
})

db.collection('reply').onSnapshot( snapshot => {
  snapshot.docChanges().forEach( change => {
    if(change.type === 'added'){
      addReply(change.doc.data(), change.doc.id)
    }
    if(change.type === 'modified'){
      editReply(change.doc.data(), change.doc.id);
    }
    if(change.type === 'removed'){
      removeReply(change.doc.id);
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

const reply = document.querySelector('#formReply');
reply.addEventListener('submit', evt => {
  evt.preventDefault();
  
  const addReply = {
    rName: reply.rName.value,
    reply: reply.reply.value
  };

  db.collection('reply').add(addReply)
    .catch(err => console.log(err));

  // form.userName.value = '';
  // form.userComment.value = '';
  reply.reset();
});

// const contact = document.querySelector('#formcontact');
// contact.addEventListener('submit', evt => {
//   evt.preventDefault();
  
//   const message = {
//     email: contact.mailEmail.value,
//     name: contact.mailName.value,
//     message: contact.mailMessage.value
//   };

//   db.collection('contact').add(message)
//     .catch(err => console.log(err));

//   contact.reset();
// });

const forumContainer = document.querySelector('.tutor');
forumContainer.addEventListener('click', evt => {
  console.log(evt);
  if (evt.target.innerHTML === 'edit') {
    const id = evt.target.getAttribute('data-id');
    db.collection('forum').doc(id).get()
      .then( doc => {
        if (doc.exists) {
          const editForm = document.querySelector('.edit-disc');
          const data = doc.data();
          editForm.querySelector('#userName2').value = data.user;
          editForm.querySelector('#userComment2').value = data.comment;
          editForm.querySelector('#forum_id').value = id;
          $("#exampleModal4").modal(editForm);
        }
      })
      .catch()

  }else if (evt.target.innerHTML === 'delete'){
    const id = evt.target.getAttribute('data-id');
    db.collection('forum').doc(id).delete();
  }
  else if (evt.target.innerHTML === 'reply'){
    const form = document.querySelector('#formReply')
    if(form.style.display == 'none'){
      form.style.display = 'block'
      }
      else{
        form.style.display = 'none'
      }
  }
  else if (evt.target.innerHTML === 'comment')
  {
    const cardReply = document.querySelector(".formReply")
    if (cardReply.style.display == 'none')
    {
      cardReply.style.display = 'block'
    }
    else
    {
      cardReply.style.display = 'none'
    }
  }
});

// var myR = JSON.parse(localStorage.getItem("myR") || "{}");
// const addR = document.querySelector('.comment');
// addR.addEventListener('click', evt => {
//     var id = addR.getAttribute("idcart");
//      db.collection('addtocart').doc(id).get().then(function (doc) {
//         var shoes = doc.data();
//         var curTot = mycart.hasOwnProperty(id) ? mycart[id].Total : 0;
//         var item = {
//             Name: shoes.Name,
//             Price: shoes.Price,
//             URL: shoes.URL,
//             Total: 1 + curTot
//         }


//         mycart[id] = item
//         localStorage.setItem('mycart', JSON.stringify(mycart));
//         window.location.href = "/cart.html";
//     })
// })

const replyContainer = document.querySelector('.formReply');
replyContainer.addEventListener('click', evt => {
  console.log(evt);
  if (evt.target.innerHTML === 'edit') {
    const id = evt.target.getAttribute('data-id');
    db.collection('reply').doc(id).get()
      .then( doc => {
        if (doc.exists) {
          const editReply = document.querySelector('.edit-reply');
          const data = doc.data();
          editReply.querySelector('#userNama').value = data.rName;
          editReply.querySelector('#userReply').value = data.reply;
          editReply.querySelector('#reply_id').value = id;
          $("#exampleModal5").modal(editReply);
        }
      })
      .catch()

  }else if (evt.target.innerHTML === 'delete'){
    const id = evt.target.getAttribute('data-id');
    db.collection('reply').doc(id).delete();
  }
});

// const forumReply = document.querySelector('#formReply');
// forumReply.addEventListener('click', evt => {
//   if(evt.target.innerHTML ===)
// })

const editForm = document.querySelector('.edit-disc');
editForm.addEventListener('submit', evt => {
  evt.preventDefault();
  const id = editForm.forum_id.value
  const forum = {
    user: editForm.userName2.value,
    comment : editForm.userComment2.value
  };
  db.collection('forum').doc(id).set(forum);
  editForm.reset();
})

const editReplyForm = document.querySelector('.edit-reply');
editReplyForm.addEventListener('submit', evt => {
  evt.preventDefault();
  const id = editReplyForm.reply_id.value
  const reply = {
    rName: editReplyForm.userNama.value,
    reply : editReplyForm.userReply.value
  };
  db.collection('reply').doc(id).set(reply);
  editReplyForm.reset();
})

//delete
// const forumContainer = document.querySelector('.tutor');
// forumContainer.addEventListener('click', evt => {
//   console.log(evt);
//   if(evt.target.innerHTML === 'delete'){
//     const id = evt.target.getAttribute('data-id');
//     console.log(id);
//     db.collection('forum').doc(id).delete();
//   }
// })

// db.collection('contact').onSnapshot( snapshot => {
//   snapshot.docChanges().forEach( change => {
//     if(change.type === 'added'){
//       addContact(change.doc.data(), change.doc.id)
//     }
    // if(change.type === 'modified'){
    //   editForum(change.doc.data(), change.doc.id);
    // }
    // if(change.type === 'removed'){
    //   removeForum(change.doc.id);
    // }
//   })
// })

// const contact = document.querySelector('.formcontact');
// contact.addEventListener('submit', evt => {
//   evt.preventDefault();
  
//   const message = {
//     email: contact.mailEmail.value,
//     name: contact.mailName.value,
//     message: contact.mailMessage.value
//   };

//   db.collection('contact').add(message)
//     .catch(err => console.log(err));

//   contact.reset();
// });