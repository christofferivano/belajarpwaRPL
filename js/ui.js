const addForum = (data, id) => {
    const disc = `
    <div class="card mb-3" data-id = "${id}">
        <div class="row no-gutters">
            <div class="col-md-3">
                <img src="/img/anonim.jpg" class="card-img" alt="...">
            </div>
            <div class="col-md-9">
                <div class="card-body">
                    <h5 class="card-title">${data.user}</h5>
                    <p class="card-text">${data.comment}</p>
                </div>
            </div>
        </div>
    </div>
    `;
    const tutor = document.querySelector('.tutor');
    tutor.innerHTML += disc;
}

// const editForum = (data, id) => {
//     const disc = document.querySelector(`.forum[data-id ="${id}"]`);
//     disc.querySelector('.card-title').innerHTML = data.user;
//     disc.querySelector('.card-text').innerHTML = data.comment;
// }
  
  
//   const removeFoods = (id) => {
//     const disc = document.querySelector(`.forum[data-id ="${id}"]`);
//     disc.remove();
// }