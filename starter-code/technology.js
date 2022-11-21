// technology page

let buttons = document.querySelectorAll('.tech-btn');
let contents = document.querySelectorAll('.page-technology__contentCtn');

function hideContent(){
  contents.forEach(function(el){
    el.style.display = 'none';
  });
}
hideContent();

buttons.forEach(function(btn) {
  
  btn.onclick = () => {
    hideContent();

    let button_item = btn.dataset.item;
    contents.forEach(function(el_box){
      if (el_box.dataset.item === button_item){
        el_box.style.display='block'
      }
    })
  }
})


function fetchData(){
  fetch('data.json').then((res)=> res.json())
  .then((data)=> {
    console.log(data.technology);
    let output = ''
    data.technology.forEach(function (item) {
      output += `
      <div data-id="${item.id}" class="page-technology__contentCtn">
        <p class="page-technology__title">The terminology...</p>
            <p class="page-technology__mainTitle">${item.name}</p>
            <p class="page-technology__desc">
              ${item.description}
            </p>
          
          <div class="page-technology__img">
            <img
              id="tech-img"
              src=${item.images.portrait}
              alt=""
            />
          </div>
      </div>`
    })
    document.getElementById('page-technology__content').innerHTML = output
  })
  .catch((error) => {
    console.log(`Error Fetching data : ${error}`)
    document.getElementById('page-technology__content').innerHTML = 'Error Loading Data'
  })

}

fetchData()