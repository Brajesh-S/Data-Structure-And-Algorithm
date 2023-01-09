arr = ['momo', 'mom', 'wow', 'lake', 'tar' ];

for(i=0;i<arr.length;i++){
    let rev = '';
    for(j=arr[i].length-1;j>=0;j--){
        rev = rev + arr[i][j]
}
if(arr[i]==rev){
    console.log(arr[i], 'is a palindrome')
}else {
    console.log(arr[i], 'is not a palindrome')
}
}
