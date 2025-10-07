        const form = document.getElementById('loginForm');
        const successMessage = document.getElementById('successMessage');
        const errorMessage = document.getElementById('errorMessage');

        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            
            // Reset pesan
            successMessage.style.display = 'none';
            errorMessage.style.display = 'none';
            
            // Simulasi login (dalam aplikasi nyata, ini akan menghubungi server)
            if (email && password) {
                // Simulasi delay loading
                const loginBtn = document.querySelector('.login-btn');
                loginBtn.textContent = '⏳ Memproses...';
                loginBtn.disabled = true;
                
                setTimeout(() => {
                    // Simulasi login berhasil
                    if (email.includes('@') && password.length >= 6) {
                        successMessage.style.display = 'block';
                        form.style.display = 'none';
                        
                        // Redirect setelah 2 detik
                        setTimeout(() => {
                            alert('Selamat datang di Arva News Dashboard!');
                            // window.location.href = 'dashboard.html';
                            resetForm();
                        }, 2000);
                    } else {
                        errorMessage.style.display = 'block';
                        loginBtn.textContent = '🚀 MASUK SEKARANG';
                        loginBtn.disabled = false;
                    }
                }, 1500);
            }
        });

        function resetForm() {
            form.style.display = 'block';
            successMessage.style.display = 'none';
            errorMessage.style.display = 'none';
            form.reset();
            const loginBtn = document.querySelector('.login-btn');
            loginBtn.textContent = '🚀 MASUK SEKARANG';
            loginBtn.disabled = false;
        }

        function togglePassword() {
            const passwordInput = document.getElementById('password');
            const toggleBtn = document.querySelector('.password-toggle');
            
            if (passwordInput.type === 'password') {
                passwordInput.type = 'text';
                toggleBtn.textContent = '🙈';
            } else {
                passwordInput.type = 'password';
                toggleBtn.textContent = '👁️';
            }
        }

        function showForgotPassword() {
            alert('Fitur lupa password akan segera tersedia!\n\nSilakan hubungi admin@arvanews.com untuk bantuan reset password.');
        }

        function loginWithGoogle() {
            alert('Login dengan Google akan segera tersedia!');
        }

        function loginWithFacebook() {
            alert('Login dengan Facebook akan segera tersedia!');
        }

        function showRegistration() {
            alert('Mengalihkan ke halaman registrasi...');
            // window.location.href = 'register.html';
        }

        // Animasi hover pada input
        const inputs = document.querySelectorAll('input');
        inputs.forEach(input => {
            input.addEventListener('focus', function() {
                this.style.transform = 'scale(1.02)';
            });
            
            input.addEventListener('blur', function() {
                this.style.transform = 'scale(1)';
            });
        });

        // Auto-focus pada input email saat halaman dimuat
        window.addEventListener('load', function() {
            document.getElementById('email').focus();
        });