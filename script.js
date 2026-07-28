function calculateAge() {

    const dobInput = document.getElementById("dob").value;

    if (dobInput === "") {
        alert("Please select your Date of Birth.");
        return;
    }

    const dob = new Date(dobInput);
    const today = new Date();

    if (dob > today) {
        alert("Date of Birth cannot be in the future.");
        return;
    }

    let years = today.getFullYear() - dob.getFullYear();
    let months = today.getMonth() - dob.getMonth();
    let days = today.getDate() - dob.getDate();

    // Adjust days
    if (days < 0) {
        months--;

        const lastMonth = new Date(
            today.getFullYear(),
            today.getMonth(),
            0
        ).getDate();

        days += lastMonth;
    }

    // Adjust months
    if (months < 0) {
        years--;
        months += 12;
    }

    document.getElementById("years").innerText = years;
    document.getElementById("months").innerText = months;
    document.getElementById("days").innerText = days;
}

// Set today's date as the maximum selectable date
document.getElementById("dob").max = new Date().toISOString().split("T")[0];