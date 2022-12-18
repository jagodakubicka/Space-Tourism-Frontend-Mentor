// technology page



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