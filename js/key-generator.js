function generateKey() {
  const lengthInput = document.getElementById('key-length');
  const lengthValue = parseInt(lengthInput.value);

  if (lengthValue < 12 || lengthValue > 50 || isNaN(lengthValue)) {
      alert("¡La contraseña tiene que tene entre 12 y 50 caracteres!");
      return;
  }

  const key = generateRandomKey(lengthValue);
  const keyResult = document.getElementById('key');
  keyResult.textContent = key;
}


function generateRandomKey(lengthValue) {
  const mayusKey = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const minusKey = "abcdefghijklmnopqrstuvwxyz";
  const numKey = "0123456789";
  const symKey = "!@#$%^&*()-_=+";

  let password = '';

  password += getRandomChar(mayusKey);
  password += getRandomChar(minusKey);
  password += getRandomChar(numKey);
  password += getRandomChar(symKey);



  for (let i = password.length; i < lengthValue; i++) {
      const charset = mayusKey + minusKey + numKey + symKey;
      const randomIndex = Math.floor(Math.random() * charset.length);
      password += charset.charAt(randomIndex);
  }

  return password;
}


function getRandomChar(characters) {
  const randomIndex = Math.floor(Math.random() * characters.length);
  return characters.charAt(randomIndex);
}
document.getElementById('generate-key').addEventListener('click', generateKey);
