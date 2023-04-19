
const fetchImg = async (datak,isOut) => {
    var domainurl;
      if(isOut){
        domainurl = "https://logo.clearbit.com/" + datak + ".com";
      } else {
        domainurl = "https://logo.clearbit.com/" + datak.domain;
      }
      const res = await fetch(domainurl);//fetch func is api fetch
      const imgblob = await res.blob();//for non json data use blob which is binary data
      let objectURL = URL.createObjectURL(imgblob);//create img for html from blob
  
      let imgElem = document.createElement("img");//<img>
      imgElem.setAttribute('src',objectURL);
      imgElem.setAttribute('id',datak.name);
      //img tag complete
  
      let caros = document.getElementById("collection");
      caros.appendChild(imgElem);//adding img element
  };
  
  function checkOut(check){
    fetch(`./collection.json`)
    .then((data) => data.json())
    .then((data) => {
      document.getElementById("collection").replaceChildren();
      var flag = false;
      for(let k in data){
          if(check == data[k].name){
            flag = true;
            fetchImg(data[k],false);
          }
      }
      if(!flag){
        fetchImg(check,true);
      }
    });
  }
  
  function filtericons(input){
      fetch(`./collection.json`)
    .then((data) => data.json())
    .then((data) => {
      document.getElementById("collection").replaceChildren();
      for( let k in data){
          if(input == data[k].name){
              fetchImg(data[k],false);
          }
      }
    });
  }
  
  function pageloader(){
    reader();
    //fetchImg("google.com",false);
}
  
  async function reader(){
    //AJAX
      fetch(`./collection.json`)
    .then((data) => data.json())
    .then((data) => {
      for( const k in data){
          fetchImg(data[k],false);
      }
    });
  }
  
  const onSubmit = (event) => {
      event.preventDefault();
      const term = event.target.term.value.toLowerCase();
      console.log("term=" + term);
      const check = document.getElementById("coding");
      if(check.checked){
        checkOut(term);
      } else {
        filtericons(term);
      }
      
    };
  function reloadpage(){
        document.getElementById("collection").replaceChildren();
        pageloader();
    }
  
  pageloader();