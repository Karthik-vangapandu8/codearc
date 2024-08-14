document.getElementById('sign-in-button').addEventListener('click', () => {
    document.getElementById('login-section').style.display = 'block';
});

document.getElementById('login-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    auth.signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            document.getElementById('login-section').style.display = 'none';
            document.getElementById('sign-in-button').style.display = 'none';
            document.getElementById('sign-out-button').style.display = 'block';
            document.getElementById('profile-section').style.display = 'block';
            document.getElementById('user-email').textContent = userCredential.user.email;
        })
        .catch((error) => {
            console.error("Error signing in:", error);
            alert("Login failed: " + error.message);
        });
});

document.getElementById('sign-out-button').addEventListener('click', () => {
    auth.signOut().then(() => {
        document.getElementById('profile-section').style.display = 'none';
        document.getElementById('sign-out-button').style.display = 'none';
        document.getElementById('sign-in-button').style.display = 'block';
    }).catch((error) => {
        console.error("Error signing out:", error);
    });
});

auth.onAuthStateChanged((user) => {
    if (user) {
        document.getElementById('login-section').style.display = 'none';
        document.getElementById('sign-in-button').style.display = 'none';
        document.getElementById('sign-out-button').style.display = 'block';
        document.getElementById('profile-section').style.display = 'block';
        document.getElementById('user-email').textContent = user.email;
    } else {
        document.getElementById('login-section').style.display = 'none';
        document.getElementById('profile-section').style.display = 'none';
        document.getElementById('sign-out-button').style.display = 'none';
        document.getElementById('sign-in-button').style.display = 'block';
    }
});
