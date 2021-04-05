//When the user submits the form, use axios to make a request to GIPHY for information based on that term.
function getSearchTerm(evt) 
{
    evt.preventDefault();
    
    const input = document.querySelector('#search-text');
    const searchTerm = input.value;
  
    if (input.value) 
    {
      getGiphy(searchTerm);
      input.classList.remove('is-invalid')
      input.value = '';
    } 
    else input.classList.add('is-invalid')
}
  
  //grab a GIF from the response data and append the GIF to the page.
async function getGiphy(query) 
{
      let res = await axios.get('http://api.giphy.com/v1/gifs/search', {params: { api_key: 'MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym', q: query, limit: 1, offset: Math.floor(Math.random() * 5)} });
      displayGiphy(res.data.data[0].images.fixed_height.url);
}
  
function displayGiphy(imgLink) 
{
    const outputDiv = document.querySelector('#gif-display');
    let gif = document.createElement('img');
  
    gif.setAttribute('src', imgLink);
    gif.setAttribute('class', 'm-2')
  
    outputDiv.append(gif);
}
  
//Add a button next to the form which, when clicked, will remove all GIFs from the page.

function removeGifs(evt) 
{
    evt.preventDefault();
    
    const gifs = Array.from(document.querySelector('#gif-display').children);
  
    for (let gif of gifs) 
    {
      gif.remove();
    }
}

document.querySelector('#search-btn').addEventListener('click', (evt) => 
{
    getSearchTerm(evt);
})

document.querySelector('#remove-btn').addEventListener('click', (evt) => 
{
  removeGifs(evt);
})