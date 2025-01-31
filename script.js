function calculate(){
    inputElement = document.getElementById("sample").value;
    answer=eval(inputElement)
    alert(answer)
    document.getElementById("sample").value=answer

}
