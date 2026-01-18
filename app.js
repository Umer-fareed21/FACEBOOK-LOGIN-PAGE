let firstName = document.getElementById("firstname");
let lastName = document.getElementById("lastname");
let date = document.getElementById("date");
let month = document.getElementById("month");
let year = document.getElementById("year");
let gender = document.getElementsByName("gender");
let email = document.getElementById("email");
let password = document.getElementById("password");

let users = [];

function sweet(data) {
    Swal.fire({
        icon: "error",
        title: "Oops...",
        text: data,
    });
}

function success() {
    Swal.fire({
        title: "Sign Up Successfully",
        icon: "success",
        draggable: true
    });
}


function submitHandler(event) {
    event.preventDefault()

    if (firstName.value.trim() == "" || lastName.value.trim() == "" || date.value == "" || month.value == "" || year.value == "" || gender.value == "" || email.value.trim() == "" || password.value.trim() == "") {
        return sweet("Please Enter All Fields")
    }

    if (password.value.trim().length < 8) {
        return sweet("Password must be contain 8 charachters")
    }

    var userObj = {
        firstName: firstName.value,
        lastName: lastName.value,
        email: email.value,
        date: date.value,
        month: month.value,
        year: year.value,
        password: password.value,
    };

    // console.log("chl rahaa ho =>")
    for (let i = 0; i < gender.length; i++) {
        if (gender[i].checked) {
            userObj.gender = gender[i].value;
        }
    }

    users.push(userObj);
    localStorage.setItem("users", JSON.stringify(users));

    success()
};






