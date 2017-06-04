
function Write(input1, input2)
{
    var txtFile = "c:/test.txt";
	var file = new File(txtFile);
	var str = "My string of text";

	file.open("w"); // open file with write access
	file.writeln("First line of text");
	file.writeln("Second line of text " + str);
	file.write(str);
	file.close();
}

function validateForm() {
    var x1=document.reg.Password.value;
    var x2=document.reg.RPassword.value;
    if (x2 == x1){
        Write(document.reg.Password.value, document.reg.RPassword.value);
    }
    else{alert("Las contraseñas no son idénticas, Vuelve a introducir la contraseña");}
}
