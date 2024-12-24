This improved code handles Firebase authentication errors more gracefully and provides more specific feedback:

```javascript
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

const auth = getAuth();

signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    console.log('User signed in:', user);
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.error('Error signing in:', errorCode, errorMessage);
    // Handle specific error codes
    switch (errorCode) {
      case 'auth/invalid-email':
        alert('Invalid email format.');
        break;
      case 'auth/user-disabled':
        alert('Your account has been disabled. Contact support.');
        break;
      case 'auth/wrong-password':
        alert('Incorrect password.');
        break;
      case 'auth/user-not-found':
        alert('User not found. Please check your email address.');
        break;
      default:
        alert('An unexpected error occurred. Please try again later.');
    }
  });
```