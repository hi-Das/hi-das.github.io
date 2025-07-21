// Terminal-inspired DevOps Portfolio - Minimal JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Add typing animation to cursor
    const cursor = document.querySelector('.cursor');
    if (cursor) {
        setInterval(() => {
            cursor.style.opacity = cursor.style.opacity === '0' ? '1' : '0';
        }, 500);
    }

    // Add smooth scrolling for internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add typing effect to commands (optional enhancement)
    const commands = document.querySelectorAll('.command');
    commands.forEach((command, index) => {
        const text = command.textContent;
        command.textContent = '';
        
        setTimeout(() => {
            let i = 0;
            const typeInterval = setInterval(() => {
                if (i < text.length) {
                    command.textContent += text.charAt(i);
                    i++;
                } else {
                    clearInterval(typeInterval);
                }
            }, 50);
        }, index * 1000);
    });
});

// Add some DevOps-themed console messages
console.log(`
   ___             ___            
  |   \\  ___ __ __/ _ \\ _ __  ___  
  | |) |/ -_)\\ V / (_) | '_ \\/ __| 
  |___/ \\___|_\\_/_\\___/| .__/\\___| 
                        |_|        

🔧 Welcome to Das's DevOps Portfolio
📊 Infrastructure as Code enthusiast
🚀 Building reliable systems, one pipeline at a time
`);

console.log('💻 System Status: All pipelines green ✅');
console.log('📡 Monitoring: Active');
console.log('🔐 Security: Hardened');
console.log('⚙️  Automation: Running smoothly');
