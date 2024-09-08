var _a;
(_a = document.getElementById("resumeform")) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", function (event) {
    var _a;
    event.preventDefault();
    var profilePictureInput = document.getElementById("profilePicture");
    var nameElement = document.getElementById("name");
    var emailElement = document.getElementById("email");
    var phoneElement = document.getElementById("phone");
    var educationElement = document.getElementById("education");
    var experienceElement = document.getElementById("experience");
    var skillsElement = document.getElementById("skills");
    if (profilePictureInput &&
        nameElement &&
        emailElement &&
        phoneElement &&
        educationElement &&
        experienceElement &&
        skillsElement) {
        var name_1 = nameElement.value;
        var email = emailElement.value;
        var phone = phoneElement.value;
        var education = educationElement.value;
        var experience = experienceElement.value;
        var skills = skillsElement.value;
        // profilePicture
        var profilePictureFile = (_a = profilePictureInput.files) === null || _a === void 0 ? void 0 : _a[0];
        var profilePictureURL = profilePictureFile ? URL.createObjectURL(profilePictureFile) : '';
        var resumeOutput = "\n    <h2>Your Resume </h2>:\n    ".concat(profilePictureURL ? "<img src=\"".concat(profilePictureURL, "\" alt = \"profilePicture\" class = \"profilePicture\" >") : "", "\n    <p><strong>Name:</strong> ").concat(name_1, "</p>\n    <p><strong>email:</strong> ").concat(email, "</p>\n    <p><strong>phone:</strong> ").concat(phone, "</p>\n    <p><strong>education:</strong> ").concat(education, "</p>\n    <p><strong>experience:</strong> ").concat(experience, "</p>\n    <p><strong>skills:</strong> ").concat(skills, "</p>\n    ");
        var resumeOutputElement = document.getElementById("resumeOutput");
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
            resumeOutputElement.style.display = "block";
        }
        else {
            console.log("Resume output element is missing.");
        }
    }
    else {
        console.error("one or more form elements are missing or empty");
    }
});
