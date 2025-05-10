let count=0;


   function updatedisplay () {
    document.getElementById("counter").textContent=count;
   }

  function increment () {
    count++;
    updatedisplay();
  }

  function  reset(){
    count=0;
    document.getElementById("counter").textContent=count;
  }

  function decrement(){
    count--;
     updatedisplay();
  }