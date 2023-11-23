
// Projeto Controle Financeiro para o Indrive

function calcution(){
                
    const  c1=document.getElementById("combustivel")
    const  t1=document.getElementById("taxa")
    const  r1=document.getElementById("receita")
    const co=Number(c1.value)
    const ta=Number(t1.value)
    const re=Number(r1.value)
    alert(co)
    alert(ta)
    alert(re)
   
}

function addRow(){
 // Get the table element in which you want to add row
 let table = document.getElementById("table");
  let day=new Date().getDate() 
  let month=new Date().getMonth()+1
  let year = new Date().getFullYear() 
 
 // Create a row using the inserRow() method and
 // specify the index where you want to add the row
 let row =table.insertRow(-1)
 
 // Create table cells
 let c1 = row.insertCell(0);
 let c2 = row.insertCell(1);
 let c3 = row.insertCell(2);

 let col1= document.getElementById("lista").value
 let col2= document.getElementById("data").value
 let col3= document.getElementById("add").value
 // Add data to c1 and c2
 c1.innerText = col1
 c3.innerText =col3
 
 if(col2===""){
    c2.innerText= String(day +"/"+month+"/"+year)
 }else{
    //c2.innerText = String(col2).slice(-10).replace("-","/")
    c2.innerText=String(col2)
 }
 

 calcution()
}


