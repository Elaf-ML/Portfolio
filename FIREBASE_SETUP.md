# Firebase Contact Form Setup

This document will guide you through setting up Firebase for your portfolio contact form to send real emails to elaffree85@gmail.com.

## Setup Steps

### 1. Create a Firebase Project

1. Go to the [Firebase Console](https://console.firebase.google.com/)
2. Click "Add project" and follow the setup wizard
3. Once created, add a web app to your project
4. Copy the Firebase config object that looks like this:

```javascript
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};
```

5. Update the file `src/firebase/config.ts` with these values

### 2. Set Up Firestore Database

1. In the Firebase Console, go to Firestore Database
2. Click "Create database"
3. Start in production mode
4. Choose a database location close to your target audience

### 3. Install the Firebase CLI and Deploy Firestore Rules

1. Install Firebase CLI globally:
   ```
   npm install -g firebase-tools
   ```

2. Log in to Firebase:
   ```
   firebase login
   ```

3. Initialize Firebase in your project folder:
   ```
   firebase init
   ```
   
   Select:
   - Firestore
   - Functions (if you want to add custom functions later)
   - Use an existing project (select your Firebase project)

4. Deploy Firestore rules:
   ```
   firebase deploy --only firestore:rules
   ```

### 4. Set Up Email Sending

There are two methods to send emails with Firebase:

#### Option A: Using Firebase Extensions (Recommended)

1. In the Firebase Console, go to Extensions
2. Find and install "Trigger Email" extension
3. Follow the setup wizard and configure:
   - SMTP server (can use Gmail or services like SendGrid)
   - Sender email address
   - Target collection (use "mail" as this is what our code is configured for)

#### Option B: Set Up Firebase Functions

If you prefer more control, you can set up a Firebase Function to send emails:

1. In the functions folder created by Firebase init, install nodemailer:
   ```
   cd functions
   npm install nodemailer
   ```

2. Create a function that listens to Firestore "messages" collection and sends emails

### 5. Final Steps

1. Update any email addresses in the code as needed
2. Test the contact form by submitting a test message
3. Check your email to confirm receipt
4. Deploy your updated portfolio to host the contact form

## Security Considerations

- The Firestore rules allow anyone to create new messages but not read existing ones
- This is secure for a contact form, as you only want people to send messages, not read them
- If you build an admin panel later, you can update the rules to allow authenticated reads

## Troubleshooting

- If emails aren't being sent, check the Firebase console for any error logs
- Verify your SMTP settings if using the Email Extension
- Make sure you've deployed all the necessary components: Firestore rules, Functions, etc.

## Next Steps

- Consider adding reCAPTCHA to prevent spam
- Add rate limiting to prevent abuse
- Create an admin panel to manage messages 