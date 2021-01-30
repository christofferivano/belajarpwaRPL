const addForum = (data, id) => {
    const disc = `
    <div class="card bg-light text-dark forum mb-3" data-id = "${id}">
        <div class="row no-gutters">
            <img src="/img/anonim.jpg" class="card-img" alt="...">           
            <div class="card-body">
                <h5 class="card-title">${data.user}</h5>
                <p class="card-text">${data.comment}</p>
            </div>
            <div class="reply" style="cursor:pointer">
                <i class="bi-grid-3x3-gap-fill">comment</i>
                <i class="bi-reply-fill">reply</i>
                <i class="bi-pencil-square" data-id="${id}">edit</i>
                <i class="bi-trash-fill" data-id="${id}">delete</i>
            </div>
        </div>
    </div>
    `;
    const tutor = document.querySelector('.tutor');
    tutor.innerHTML += disc;
}

const editForum = (data, id) => {
    const disc = document.querySelector(`.forum[data-id ="${id}"]`);
    disc.querySelector('.card-title').innerHTML = data.user;
    disc.querySelector('.card-text').innerHTML = data.comment;
}
  
  
const removeForum = (id) => {
    const disc = document.querySelector(`.forum[data-id ="${id}"]`);
    disc.remove();
}

const addReply = (data, id) => {
    const reply = `
    <div class="forumReply" data-id = "${id}">
        <div class="card bg-light text-dark forumReply2 mb-3">
            <div class="row no-gutters">
                <img src="/img/anonim.jpg" class="card-img" alt="...">           
                <div class="card-body">
                    <h5 class="card-title">${data.rName}</h5>
                    <p class="card-text">${data.reply}</p>
                </div>
                <div class="reply" style="cursor:pointer">
                    <i class="bi-pencil-square" data-id="${id}">edit</i>
                    <i class="bi-trash-fill" data-id="${id}">delete</i>
                </div>
            </div>
        </div>
    </div>
    `;
    const replies = document.querySelector('.formReply');
    replies.innerHTML += reply;
}

const editReply = (data, id) => {
    const reply = document.querySelector(`.forumReply[data-id ="${id}"]`);
    reply.querySelector('.card-title').innerHTML = data.rName;
    reply.querySelector('.card-text').innerHTML = data.reply;
}
  
  
const removeReply = (id) => {
    const reply = document.querySelector(`.forumReply[data-id ="${id}"]`);
    reply.remove();
}

const addTesti = (data, id) => {
    const contact = `
    <div class="carousel-item active" data-id="${id}">
        <img src="/img/black.jpg" class="d-block w-100" alt="..." style="height: 300px;">
        <div class="carousel-caption">
            <figure class="figure">
                <img src="img/anonim.jpg" class="figure-img img-fluid rounded-circle" alt="testi1">
            </figure>
            <h5>${data.name}</h5>
            <p>${data.message}</p>
        </div>
    </div>
    `;
    const mail = document.querySelector('.testi');
    mail.innerHTML += contact;
}