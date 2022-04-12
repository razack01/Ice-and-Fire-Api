const userContainer1=document.createElement("div");
userContainer1.className="container1";
const h1=document.createElement("h1")
h1.innerHTML="Ice and fire Api"


 const userContainer2=document.createElement("div");
 userContainer2.innerHTML ='<i class="far fa-moon"></i>';


 // toggle.addEventListener("click", foo);

userContainer1.append(h1);
document.body.appendChild(userContainer1);




 const userContainer3=document.createElement("div");
 userContainer3.className="container";

 var i = document.createElement("input")
 i.setAttribute('type',"text");
 i.placeholder="search for items";




 const userContainer4=document.createElement("div");
 userContainer4.innerHTML ='<i class="fas fa-search"></i>'


userContainer3.append(i,userContainer4);
  document.body.append(userContainer1,userContainer3)
const bookscontainer=document.createElement("div")
 	bookscontainer.className="book-container"
 
async function getdata(){
	const url=await fetch("https://anapioficeandfire.com/api/books")
 	const res=await url.json()
 	console.log(res)
 	
 	res.forEach(element=>{
 	  showbooklist(element)

	})
	document.body.append(bookscontainer)


}

 getdata(); 
 function showbooklist(data){

 const book=document.createElement("div")
 book.className="books"


 book.innerHTML=
 	`<p class="number of books">${data.name}</p>
    <p class="isbn">${data.isbn}</p>
    <p class="number of pages">${data.numberOfPages}</p>
    <p class="authors">${data.authors[0]}</p>
    <p class="publishername">${data.publisher}</p>
    <p class="releasedate">${new Date(data.released).toDateString()}</p>` 
    bookscontainer.append(book)
}














