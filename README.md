# IndianHotelHub - Firebase Hotel Booking Demo

## Setup Instructions

1. Create a Firebase project at https://console.firebase.google.com/
2. Enable Email/Password Authentication under Authentication > Sign-in method
3. Create a Realtime Database and set rules from `database.rules.json`
4. Update `firebase.js` with your Firebase project config (apiKey, authDomain, etc.)
5. Upload your files to local server or Firebase Hosting
6. Open `signup.html` in browser and create an account
7. Login using `login.html`
8. Explore dashboard with bookings and favorites

---

## Notes

- Currently, bookings and favorites data should be added manually in Firebase console or via your admin panel
- Profile photo is uploaded and saved in Firebase Storage
- Email verification is mandatory before login
- Logout button logs user out with confetti effect

---

## Future Enhancements

- Add Razorpay integration for payments
- Add hotel search and booking UI
- Add OTP login/signup
- Make responsive and mobile-friendly UI
