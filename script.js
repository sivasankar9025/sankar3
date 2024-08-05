document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const role = document.getElementById('role').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Define valid credentials for admin, staff, and students
    const validCredentials = {
        admin: {
            'kascit': 'siva@123',
            'kascps': 'siva@123'
        },
        staff: {
            'staff': 'kascps@123',
            'staff1': 'kascps@123'
        },
        student: {
            '221it056': 'kasc@123',
            '221it056': 'kasc@123'
        }
    };

    // Check if role and username are valid
    const roleCredentials = validCredentials[role];
    if (roleCredentials && roleCredentials[username] === password) {
        // Store role and username in localStorage
        localStorage.setItem('role', role);
        localStorage.setItem('username', username);

        // Redirect based on role or specific student username
        if (role === 'admin') {
            window.location.href = 'https://sankar2.onrender.com';
        } else if (role === 'staff') {
            window.location.href = 'https://siva-6qf5.onrender.com/';
        } else if (role === 'student') {
            if (username === '221it056') {
                window.location.href = 'https://sankar-3n41.onrender.com/';
            } else {
                window.location.href = 'https://sankar-3n41.onrender.com/';
            }
        }
    } else {
        document.getElementById('message').textContent = 'Invalid username or password.';
    }
});