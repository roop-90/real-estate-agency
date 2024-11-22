
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width,initial-scale=1.0">
  <link rel="stylesheet" href="styles.css">
  <title>Real Estate Agency</title>
</head>
<body>
  <header>
     <h1>Real Estate Agency</h1>
     <nav>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#calculator">Mortgage Calculator</a></li>
          <li><a href="#viewing-request">Request Viewing</a></li>
          <li><a href="#contact">Contact Us</a></li>
        </ul>
     </nav> 
  </header>
  <main>
     <section id="home">
     <h2>Welcome to Our Agency</h2>
     <p>Your one-stop shop for all your real estate needs!</p>
     </section>
     
     <section id="calculator">
     <h2>Mortgage Calculator</h2>
     <form id="mortgage-form">
          <input type="number" id="loan-amount" placeholder="Loan Amount" required>
          <input type="number" id="interest-rate" placeholder="Interest Rate (%)" required>
          <input type="number" id="loan-term" placeholder="Loan Term(years)" required>
          <button type="submit">Calculate</button>
          <div id="result"></div>
     </form>
     </section>
      <section id="viewing-request">
     <h2>Request a Property Viewing</h2>
     <form id="viewing-form">
          <input type="text" id="property-id" placeholder="Property ID" required>
          <input type="text" id="full-name" placeholder="Full Name" required>
          <input type="email" id="email" placeholder="Enter Email" required>
          <input type="date" id="preferred-date" placeholder="Preferred Viewing Date" required>
          <button type="submit">Submit Request</button>
     </form> 
     </section>
     <section id="contact">
     <h2>Contact Us</h2>
         <form id="contact-form">
          <input type="text" placeholder="Your Name" required>
          <input type="email" placeholder="Your Email" required>
          <textarea placeholder="Your Message" required></textarea>
          <button type="submit">Send</button>
     </form>
     </section>
  </main>
       <footer>
         <p>&copy; 2024 Real Estate Agency.All rights reserved.</p>
       </footer>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>
  <script>
//Calculating Mortgage
  document.getElementById('mortgage-form').addEventListener('submit',function(event){
    event.preventDefault();
    const loanAmount = parseFloat(document.getElementById('loan-amount').value);
    const interestRate = parseFloat(document.getElementById('interest-rate').value)/100/12;
    const loanTerm = parseInt(document.getElementById('loan-term').value)*12;
     
    const x = Math.pow(1+interestRate,loanTerm);
    const monthlyPayment = (loanAmount*x*interestRate)/(x-1);
    document.getElementById('result').innerText = monthlyPayment.toFixed(2);
});

 //Smooth Scroll for navigation
 document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click',function(e){
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
       behavior:'smooth'
    });
  });
});
//VIEWING REQUEST
  document.getElementById('viewing-form').addEventListener('submit',function(event){
   event.preventDefault();
   alert("Viewing request submitted!");
});

// contact Form
   document.getElementById('contact-form').addEventListener('submit',function(event){
    event.preventDefault();
    alert("Your message has been sent!");
   });
</script>
              </body>
</html>