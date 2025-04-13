console.log("Scripts Connect\n");

function submitVimRegister(email, password) {
  const admin = ["zivotovdanilka@gmail.com", "helloWorld123"];

  if (admin[0] == email) {
    console.log("Correct email\n");
    if (admin[1] == password) {
      console.log("Correct password\n");
      return "All correct info\n";
    } else {
      console.log("Uncorrect password\n");
    }
  } else {
    console.log("Uncorrect email\n");
  }
}

submitVimRegister("zivotovdanilka@gmail.com", 123123123123);
submitVimRegister("zivotovdanilka@gmail.com", "helloWorld123");
