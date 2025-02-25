// Function to show QR code after payment details are filled
function showQrCode() {
  // Get values from the form fields
  const fullName = document.getElementById('fullName').value;
  const collegeId = document.getElementById('collegeId').value;
  const amount = document.getElementById('amount').value;

  // Validate that the fields are filled
  if (fullName && collegeId && amount) {
      // Hide the payment form
      document.getElementById('formContainer').style.display = 'none';

      // Show the QR code section
      document.getElementById('qrContainer').style.display = 'block';

      // Set hidden inputs to carry the data to the next form
      document.getElementById('hiddenFullName').value = fullName;
      document.getElementById('hiddenCollegeId').value = collegeId;
      document.getElementById('hiddenAmount').value = amount;
  } else {
      alert('Please fill out all the fields!');
  }
}

// Function to handle the form submission and show the thank you message
document.getElementById('paymentFormQR').onsubmit = function(event) {
  event.preventDefault();  // Prevent default form submission

  // Get the values from the form
  const upiRefNo = document.getElementById('upiRefNo').value;

  // Ensure the UPI reference number is filled
  if (upiRefNo) {
      // Hide the QR section
      document.getElementById('qrContainer').style.display = 'none';

      // Show the thank you section
      document.getElementById('thankYouContainer').style.display = 'block';

      // Send form data to the server via AJAX
      const formData = new FormData(document.getElementById('paymentFormQR'));

      fetch('submit_payment.php', {
          method: 'POST',
          body: formData
      })
      .then(response => response.text())  // If needed, you can handle the response here
      .then(data => {
          console.log('Form submitted successfully:', data);
          // Optionally, you can handle a response from PHP here if necessary
      })
      .catch(error => {
          console.error('Error submitting payment:', error);
      });
  } else {
      alert('Please provide the UPI Reference Number!');
  }
};
