async function validateCredentials() {
    const enteredUsername = document.getElementById('username').value;
    const enteredPassword = document.getElementById('password').value;
    
    // Fetch credentials from the server
    const response = await fetch('users.txt');
    const credentialsText = await response.text();
    
    // Parse credentials
    const storedCredentials = credentialsText.trim().split('\n');
  
    // Check if entered credentials are valid
    const isValid = storedCredentials.some(credential => {
      const [storedUsername, storedPassword] = credential.split(':');
      return enteredUsername === storedUsername && enteredPassword === storedPassword;
    });
  
    // Display validation result
    if (isValid) {
      document.getElementById('validationResult').textContent = 'Credentials are valid!';
    } else {
      document.getElementById('validationResult').textContent = 'Invalid credentials. Please try again.';
    }
  }