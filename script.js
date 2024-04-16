document.getElementById('calculateButton').addEventListener('click', function() {

    const dob = document.getElementById('dob').value;
    const month = document.getElementById('month').value;
    const year = document.getElementById('year').value;
  
    if (!dob || !month || !year) {
      alert('Please enter your complete date of birth.');
      return;
    }
  
    const today = new Date();
    const birthDate = new Date(year, month - 1, dob);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
  
    document.getElementById('result').innerText = `Your age is ${age}`;
  });
  