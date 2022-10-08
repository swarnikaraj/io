var arr=[0,4,0,0,0,6,0,6,4,0] ;
var n=arr.length;
var mytable=document.getElementById("table1")

var boxMap={}
var waterArea=0;


for(let i=0;i<n;i++){
    if(arr[i]!==0){
        var zeros=0;
        for(let j=i+1;j<n;j++){
            if(arr[j]==0){zeros++}
            else{
                break;
            }
        }
        
        var secondIndex=i+zeros+1;
        if(secondIndex<n){
            boxMap[i]=secondIndex
           
             waterArea=waterArea+Math.min(Number(arr[i]),Number(arr[secondIndex]))*zeros
        
        }
       
    }
}
console.log(waterArea,"water area")
console.log(boxMap)

for(var r=n;r>=0;r--)
{
 
  var row=document.createElement('tr')

   for(let c=0;c<n;c++){

    

    var cell = document.createElement("td");
    if(arr[c]!==0 && r<arr[c]){
        cell.className="yellow"
    }
     

if(arr[c]!==0){var seconpair=arr[boxMap[c]];var firstpair=arr[c];

        
}

   
     if(arr[c]===0 && r<Math.min(firstpair,seconpair)){
          cell.className="blue"
    }

    var cellText = document.createTextNode("cell in row "+r+", column "+c);
    cell.appendChild(cellText);
    row.appendChild(cell);

   }

   mytable.appendChild(row);

 };
