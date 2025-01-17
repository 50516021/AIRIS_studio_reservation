function validateDateTime() {
    const classChoice = document.querySelector('input[name="class"]:checked');
    const dateInput = document.getElementById("date").value;
    const timeInput = document.getElementById("time").value;

    if (!classChoice || !dateInput || !timeInput) {
        document.getElementById("error").innerText = "Please fill in all fields.";
        return;
    }

    const timeLimitHours = classChoice.value === "EEET361" ? 48 : 24;
    const currentDate = new Date();
    currentDate.setHours(currentDate.getHours() + timeLimitHours);

    const userDateTime = new Date(`${dateInput}T${timeInput}`);

    if (userDateTime < currentDate) {
        document.getElementById("error").innerText = 
            `The selected date and time must be at least ${timeLimitHours} hours from now. Please try again.`;
    } else {
        document.getElementById("error").innerText = "";
    }
    
}

function handleSubmit(event) {
    event.preventDefault();

    const classChoice = document.querySelector('input[name="class"]:checked').value;
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;

    fetch("https://script.google.com/a/macros/g.rit.edu/s/AKfycbyl1h4dSpGYDmyV4c1qQqLYQGnEFeL9263mE3yuPxPGlwKGz2ONV1Qe9i6edzpLaHrx/exec", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ classChoice, date, time })
    })
    .then(response => response.text())
    .then(data => alert(data))
    .catch(error => console.error("Error:", error));
}
