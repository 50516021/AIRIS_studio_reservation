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
