var student_array = [];

function submit() {
   var display_student_array = [];
   for (var i = 1; i <= 4; i++) {
       var name_of_the_student = document.getElementById("student" + i).value;
       console.log(name_of_the_student);
       student_array.push(name_of_the_student);
   }
   console.log(student_array);

   var length_student_array = student_array.length;
   console.log(length_student_array);

   for (var j = 0; j < length_student_array; j++) {
       display_student_array.push("<h4>NAME -" + student_array[j] + "</h4>");
       console.log(display_student_array);
   }

   console.log(display_student_array);
   document.getElementById("display_name_with_commas").innerHTML = display_student_array;

   var remove_commas = display_student_array.join(" ");
   console.log(remove_commas);
   document.getElementById("display_name_without_commas").innerHTML = remove_commas;

    document.getElementById("submit").style.display = "none";
    document.getElementById("sort").style.display = "inline-block";

}

function sort() {
    student_array.sort();
    console.log(student_array);
    var sorted_array = [];

    var length_student_array = student_array.length;
    console.log(length_student_array);

    for (var k = 0; k < length_student_array; k++) {
        sorted_array.push("<h4>NAME - " + student_array[k] + "</h4>");
        console.log(sorted_array);
    }

    var remove_commas = sorted_array.join(" ");
    console.log(remove_commas);
    document.getElementById("display_name_without_commas").innerHTML = remove_commas;
}

function update() {
    document.getElementById("display_name_without_commas").innerHTML = " ";
    for (var l = 0; l < 4; l++) {
        document.getElementById("display_name_without_commas").innerHTML += "<h1>NAME - " + student_array[l] + "</h1>";
    }
}