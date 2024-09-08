document.getElementById("resumeform")?.addEventListener("submit", function(event){
    event.preventDefault();

    const profilePictureInput=document.getElementById("profilePicture") as HTMLInputElement;
    const nameElement=(document.getElementById("name") as HTMLInputElement)
    const emailElement=(document.getElementById("email") as HTMLInputElement)
    const phoneElement=(document.getElementById("phone") as HTMLInputElement)

    const educationElement=(document.getElementById("education") as HTMLTextAreaElement)
    const experienceElement=(document.getElementById("experience") as HTMLTextAreaElement)
    const skillsElement=(document.getElementById("skills") as HTMLTextAreaElement)

if (profilePictureInput && 
    nameElement &&
     emailElement &&
     phoneElement&&
      educationElement &&
      experienceElement && 
      skillsElement
    )
{
    const name = nameElement.value;
    const email = emailElement.value;
    const phone =phoneElement.value;
    const education =educationElement.value;
    const experience=experienceElement.value;
    const skills=skillsElement.value;

    // profilePicture
    const profilePictureFile = profilePictureInput.files?.[0]
    const profilePictureURL = profilePictureFile ? URL.createObjectURL(profilePictureFile):'';


    const resumeOutput = `
    <h2>Your Resume </h2>:
    ${profilePictureURL ? `<img src="${profilePictureURL}" alt = "profilePicture" class = "profilePicture" >` :"" }
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>email:</strong> ${email}</p>
    <p><strong>phone:</strong> ${phone}</p>
    <p><strong>education:</strong> ${education}</p>
    <p><strong>experience:</strong> ${experience}</p>
    <p><strong>skills:</strong> ${skills}</p>
    `;

    const resumeOutputElement = document.getElementById("resumeOutput");
    if(resumeOutputElement){
        resumeOutputElement.innerHTML = resumeOutput;
        resumeOutputElement.style.display = "block";
    }
    else{
        console.log("Resume output element is missing.");
    }
}
    else{
        console.error("one or more form elements are missing or empty" );
    }
});