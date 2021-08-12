var arr = [{
    name :'asd',
    institute :'asd',
    contactnumber: 1324566,
    result:Math.floor(Math.random() * 2)
}
,{
    name :'asd',
    institute :'asd',
    contactnumber: 1324566,
    result:Math.floor(Math.random() * 2)
}
, {
    name :'asd',
    institute :'asd',
    contactnumber: 1324566,
    result:Math.floor(Math.random() * 2)
}
, {
    name :'asd',
    institute :'asd',
    contactnumber: 1324566,
    result:Math.floor(Math.random() * 2)
}
, {
    name :'asd',
    institute :'asd',
    contactnumber: 1324566,
    result:Math.floor(Math.random() * 2)
}
, {
    name :'asd',
    institute :'asd',
    contactnumber: 1324566,
    result:Math.floor(Math.random() * 2)
}
, {
    name :'asd',
    institute :'asd',
    contactnumber: 1324566,
    result:Math.floor(Math.random() * 2)
}
, {
    name :'asd',
    institute :'asd',
    contactnumber:1324566,
    result:Math.floor(Math.random() * 2)
}
, {
    name :'asd',
    institute :'asd',
    contactnumber: 1324566,
    result:Math.floor(Math.random() * 2)
}
, {
    name :'asd',
    institute :'asd',
    contactnumber: 1324566,
    result:Math.floor(Math.random() * 2)
}
]
//console.log(arr);
//console.log(typeof(arr[0]));

for(i=0;i<arr.length;i++)
{
    arr[i].rollno=i+1;
}
 console.log(arr);
// for(i=0;i<arr.length;i++)
// {
//     if(arr[i].result==0)
//     document.write("Roll# "+arr[i].rollno + " is fail" + "<br>")
//     else
//     document.write("Roll# "+arr[i].rollno + " is Pass" + "<br>")
// }
// var inp = prompt("Enter the roll# for Result");
// document.write(arr[inp].result);

var res = document.getElementById("rslt");
function showresult()
 {
     var a = document.getElementById("inp").value;
    // res.innerHTML=arr[a].result + "<br>";


     if(a==1)
     res.innerHTML= "pass";
     else
     res.innerHTML="Fail";

}