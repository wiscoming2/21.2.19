//start
var a = parseInt (prompt("enter num" , 0))
var b = parseInt (prompt("enter num" , 0))
var c = parseInt (prompt("enter num" , 0))
if(a>b && a>c)
  {
  console.log(a)
  }
 else
    {
    if(b>a && b>c)
			console.log(b)
  	else
			console.log(c)
      }
//stop

//start
var a = parseInt (prompt("enter num" , 0))
{
if (a>0)
console.log("חיובי")
else 
  {
  if(a<0)
    console.log("שלילי")
  else
   console.log(0)
  }
}
//stop

//start
var a = parseInt (prompt("enter num" , 0))
var b = parseInt (prompt("enter num" , 0))
if (b==0)
  {
  console.log("אין אפשרות לחלק ב-0")
  }
else 
  {
console.log(a/b)
  }
//stop

//start
var sum = 0
var a = parseInt (prompt("enter num" , 0))
while(a>=0)
  {
  sum = sum + a
  var a = parseInt (prompt("enter num" , 0))
  }
console.log(sum)
//stop

//start
var counter = 0
var sum = 0
var a = parseInt (prompt("enter num" , 0))
while ( a >= 0)
  {
  sum = sum + a
  counter++
  var a = parseInt (prompt("enter num" , 0))
  }
console.log(sum/counter)
//stop

//start
var a = parseInt (prompt("enter num" , 0))
  {
  if(a<10)
   console.log("ספרה אחת")
  else
   if(a<100)
    console.log("שתי ספרות")
   else
    if(a<1000)
     console.log("שלוש ספרות")
    else
     console.log("יותר מ-3 ספרות")
    }
//stop
