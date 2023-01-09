var arr = [9, 6, 4, 8, 6]
let minValue = arr[0];

for(i=1;i<arr.length;i++){
    if(minValue<arr[i]){
        minValue = arr[i]
    }
}   
console.log(minValue)    
