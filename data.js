function Focus_Ref(){
    let In_Ref=document.getElementById("xyz")

//alert("Are yo busy")
console.log("FAILURE")
console.log(In_Ref)
In_Ref.style.backgroundColor="green"
}

function Upper_Case(){
      
    let Name_Upper_Case=document.getElementsByTagName("input")[1]
    console.log("Wooow oooo")
    let uname=Name_Upper_Case.value
    //console.log(uname.toUpperCase())
    //input_Tag_Ref.value = "Today Wednesday"
    Name_Upper_Case.value=uname.toUpperCase()
}

function Color_Change(){
    let Btn_color=document.getElementById("abc")
    console.log(Btn_color)
    Btn_color.style.backgroundColor="blue"
   
}