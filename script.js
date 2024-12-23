document.addEventListener("DOMContentLoaded", function () {
  const validateButton = document.getElementById("validate");
  validateButton.addEventListener("click", function () {
    const key = document.getElementById("key").value;
    // Key ko validate karein aur server par request bhejein
    fetch('/validate-key', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ key: key })
    })
    .then(response => response.json())
    .then(data => {
      if (data.status === 'success') {
        // Key valid hai, status show karo
        document.getElementById("status").innerHTML = "Key valid!";
      } else {
        // Key invalid hai, status show karo
        document.getElementById("status").innerHTML = "Key invalid!";
      }
    })
    .catch(error => {
      console.error(error);
    });
  });
});
