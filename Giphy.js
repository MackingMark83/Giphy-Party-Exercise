console.log("Let's get this party started!");

function lookup(res) {
   if (res.data.length) {
    let randomGifs = Math.floor(Math.random() * res.data.length);
    let newDiv = $("<div>");
    let newAttr = {src: res.data[randomGifs].images.original.url,
    };
    let pic = $("<img>").attr(newAttr);
    newDiv.append(pic);
    $('#place').append(newDiv);
  }
}

$('#search').on('submit', async function(e){
   e.preventDefault();    
   
   let searchword = $('input').eq(0).val()
   $('input').eq(0).val('')
   
   const res = await axios.get("http://api.giphy.com/v1/gifs/search", {
    params: { q: searchword,
              api_key: "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym"
    }
  });
  
  lookup(res.data);
});

$('#delete').on('click',function(){
    $('#place').empty();
});

