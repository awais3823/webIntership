document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registration-form');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission behavior

        var name = document.getElementById("name").value;
        var mobile = document.getElementById("mobile").value;
        var email = document.getElementById("email").value;
        var occupation = document.getElementById("occupation").value;
        var id = document.getElementById("id").value;
        var birth = document.getElementById("birth").value;
        var issue = document.getElementById("issue").value;
        var idnu = document.getElementById("idnu").value;
        var issuestate = document.getElementById("issuestate").value;
        var issueauthority = document.getElementById("issueauthority").value;
        var expiry = document.getElementById("expiry").value;
        var dateFormatRegex = /^\d{4}-\d{2}-\d{2}$/;  
        // Validation logic
        if (name.trim() == "") {
            alert("Full Name must not be empty");
            return false;
        }
        
        if (!dateFormatRegex.test(birth)) {
            alert("Birth Date must be in YYYY-MM-DD format");
            return false;
        }
        if (email.trim() == "") {
            alert("Email must not be empty");
            return false;
        }
        if (mobile.trim() == "") {
            alert("Mobile Number must not be empty");
            return false;
        }
        if(gender.trim()==""){
            alert("Gender mustnot be empty");
            return false;
        }
        if (occupation.trim() == "") {
            alert("Occupation must not be empty");
            return false;
        }
        if (id.trim() == "") {
            alert("ID Type must not be empty");
            return false;
        }
        if (idnu.trim() == "") {
            alert("ID Number must not be empty");
            return false;
        }
        if (issueauthority.trim() == "") {
            alert("Issue Authority must not be empty");
            return false;
        }
        
        if (!dateFormatRegex.test(issue)) {
            alert("Issue Date must be in YYYY-MM-DD format");
            return false;
        }
        if (issuestate.trim() == "") {
            alert("Issue State must not be empty");
            return false;
        }
        
        if (!dateFormatRegex.test(expiry)) {
            alert("Expiry Date must be in YYYY-MM-DD format");
            return false;
        }

    
        form.submit();
    });
});