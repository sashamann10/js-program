function calculateAge(dobString) {
  const dob = new Date(dobString);
  const today = new Date();

  let age = today.getFullYear() - dob.getFullYear();
  const m = today.getMonth() - dob.getMonth();

  if (m < 0 || (m === 0 && today.getDate() < dob.getDate())) {
    age--;
  }

  return age;
}

// Your Date of Birth: 17-10-2005
const birthDate = "2005-10-17"; // use YYYY-MM-DD format
const age = calculateAge(birthDate);

console.log("Your Current Age is:", age);