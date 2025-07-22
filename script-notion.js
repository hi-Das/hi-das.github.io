// Notion-inspired DevOps Portfolio - JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    document.querySelectorAll('.nav-item[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offsetPosition = target.getBoundingClientRect().top + window.pageYOffset - 20;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Highlight active section in sidebar
    const sections = document.querySelectorAll('section[id]');
    const navItems = document.querySelectorAll('.nav-item[href^="#"]');
    
    function highlightActiveSection() {
        const scrollPosition = window.scrollY + 100;
        
        sections.forEach((section, index) => {
            const sectionTop = section.getBoundingClientRect().top + window.pageYOffset;
            const sectionBottom = sectionTop + section.offsetHeight;
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                navItems.forEach(item => item.classList.remove('active'));
                const activeNavItem = document.querySelector(`.nav-item[href="#${section.id}"]`);
                if (activeNavItem) {
                    activeNavItem.classList.add('active');
                }
            }
        });
    }

    // Add active state styles
    const style = document.createElement('style');
    style.textContent = `
        .nav-item.active {
            background: var(--color-accent);
            color: white;
            font-weight: 600;
            box-shadow: 0 2px 8px rgba(35, 131, 226, 0.3);
        }
        
        .nav-item.active .nav-icon {
            opacity: 1;
        }
        
        .nav-item.active:hover {
            background: var(--color-accent-hover);
            transform: translateX(2px);
        }
        
        .nav-item {
            position: relative;
        }
    `;
    document.head.appendChild(style);

    // Listen for scroll events
    window.addEventListener('scroll', highlightActiveSection);
    
    // Initial highlight
    highlightActiveSection();

    // Mobile sidebar toggle (for future enhancement)
    // This can be expanded if you want a mobile hamburger menu
    
    // Add subtle animation to content blocks
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -20px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe content blocks for animation
    document.querySelectorAll('.content-block').forEach(block => {
        block.style.opacity = '0';
        block.style.transform = 'translateY(10px)';
        block.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
        observer.observe(block);
    });
});

// Add some nice console branding
console.log(`
╔══════════════════════════════════════╗
║     DevOps Engineer Portfolio        ║
║     Built with Notion-style design   ║
║     by Manyabar Das                   ║
╚══════════════════════════════════════╝

🚀 Infrastructure as Code
☁️  Multi-Cloud Solutions  
🔧 CI/CD Automation
📊 Observability & Monitoring

Interested in DevOps? Let's connect!
`);
