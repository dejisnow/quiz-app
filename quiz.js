window.onload =()=>{
let queDiv = document.querySelector(".queDiv")
let que = document.querySelector(".que")
let ans = document.querySelector(".ans")
let tru = document.querySelector(".tru")
let fals = document.querySelector(".fals")
let see = document.querySelector(".see")
let score = document.querySelector(".score")
let hscore = document.querySelector(".hscore")

let scores = 0;
/*let array = [0,1,2,3,4,5,6,7]
  
   
   btn.addEventListener("click",()=>{
       popElem(array)
   })
  
  function popElem(arr){
  let x = arr.length
   let ran = Math.floor(Math.random() * x);
    num.innerHTML = array
    arr.splice(ran,1)
        
    }

*/



    
   let array = [
  
   ["The inner core of most standard golf balls is made of nougat, which helps the balls remain aloft longer. ", false], ["The FBI's eleventh most wanted fugitive is Lyle Lovett.", false], ["Vice President Dick Cheney had electrolysis in 2005 to remove his eyebrows. The ones you see now are tattooed on.", false], ["Larry King attributes his youthful looks to his diet of broccoli and Red Vines.", false], ["A giraffe can clean its ears with its 21-inch tongue.", true], ["Teddy Roosevelt was an avid hunter. On one safari, he bagged 16 Avids.", false], ["Our shortest president was James Madison at 3 feet, 11 inches. ", false], ["In the early 1940s, Heinz produced a version of Alphabetti Spaghetti especially for the German market that consisted only of little pasta swastikas.", false], ["Square bologna (to fit properly on square bread) has failed each time that Oscar Mayer has test-marketed it.", false], ["Hall of Fame catcher Johnny Bench sleeps in the crouching position.", false], ["The world's youngest parents were 8 and 9 and lived in China in 1910.", true], ["23% of employees say they have had sex in the office.", true], ["Like George W. Bush, in college, Saddam Hussein was a cheerleader.", false], ["60% of all US potato products originate in Idaho.", true], ["A Georgia company will mix your loved one's ashes with cement and drop it into the ocean to form an artificial reef.", true]
   
   ] 
   
   function display(){
  let queRandom = Math.floor(Math.random() * array.length)
let answer =array[queRandom].filter((x,y,z)=> {return( y > 0)}).map(x => x )
     
 queDiv.innerHTML = array[queRandom].filter((x,y,z)=> {return( y < 1)}).map((x)=> {
           return (`<h3>Question </h3>
           <div class="que">${x}</div>
           `)
       })
       
       tru.addEventListener("click",(e)=>{
 if(answer == e.target.textContent.trim()){
 display()
 scores+=10
 score.innerHTML = scores
     console.log("true")
 }else{
     hscore.innerHTML  = scores
     scores = 0
     alert("You are wrong, Game over ")
     
 }
           
       },{once:true})
       fals.addEventListener("click",(e)=>{
           if(answer == e.target.textContent.trim()){
           display()
       scores+=10
 score.innerHTML = scores
     console.log("true")
 }else{
     hscore.innerHTML = scores
     scores = 0
     alert("You are wrong, Game over ")
     
 }
       },{once:true})
       
 
   
      
  }
  display()
    
    
    
    
    
    
}
