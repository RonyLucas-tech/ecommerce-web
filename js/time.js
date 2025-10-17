
  // Set the countdown target date (change this to your desired time)
  const targetDate = new Date("October 31, 2025 23:59:59").getTime();

  // Update the countdown every second
  const countdown = setInterval(() => {
    const now = new Date().getTime();
    const distance = targetDate - now;

    // Time calculations
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((distance % (1000 * 60)) / 1000);

    // Update values in HTML
    document.querySelector(".days h1").textContent = days < 10 ? "0" + days : days;
    document.querySelector(".hrs h1").textContent = hours < 10 ? "0" + hours : hours;
    document.querySelector(".mins h1").textContent = mins < 10 ? "0" + mins : mins;
    document.querySelector(".seconds h1").textContent = secs < 10 ? "0" + secs : secs;

    // Stop countdown when finished
    if (distance < 0) {
      clearInterval(countdown);
      document.querySelectorAll(".top-deals-header-content").innerHTML = "<h2>Deal Expired!</h2>";
    }
  }, 1000);
