        const form = document.getElementById('registrationForm');
        const successMessage = document.getElementById('successMessage');

        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Validasi password
            const password = document.getElementById('password').value;
            const confirmPassword = document.getElementById('confirmPassword').value;
            
            if (password !== confirmPassword) {
                alert('Password dan konfirmasi password tidak sama!');
                return;
            }
            
            if (password.length < 8) {
                alert('Password minimal 8 karakter!');
                return;
            }
            
            // Simulasi registrasi berhasil
            form.style.display = 'none';
            successMessage.style.display = 'block';
            
            setTimeout(() => {
                form.style.display = 'block';
                successMessage.style.display = 'none';
                form.reset();
            }, 3000);
        });

        // Animasi hover pada input
        const inputs = document.querySelectorAll('input, select');
        inputs.forEach(input => {
            input.addEventListener('focus', function() {
                this.style.transform = 'scale(1.02)';
            });
            
            input.addEventListener('blur', function() {
                this.style.transform = 'scale(1)';
            });
        });