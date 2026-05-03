document.addEventListener('DOMContentLoaded', () => {
  // Intersection Observer for scroll animations
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe all elements with 'fade-up' class
  document.querySelectorAll('.fade-up').forEach(element => {
    observer.observe(element);
  });

  // Handle contact form submission
  const contactForm = document.getElementById('inquiryForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.textContent;
      
      submitBtn.textContent = 'Sending...';
      submitBtn.style.opacity = '0.7';

      // Simulate a network request
      setTimeout(() => {
        contactForm.reset();
        submitBtn.textContent = 'Inquiry Sent Successfully';
        submitBtn.style.backgroundColor = '#4caf50';
        submitBtn.style.color = '#fff';
        submitBtn.style.borderColor = '#4caf50';
        submitBtn.style.opacity = '1';
        
        setTimeout(() => {
          submitBtn.textContent = originalText;
          submitBtn.style.backgroundColor = '';
          submitBtn.style.color = '';
          submitBtn.style.borderColor = '';
        }, 3000);
      }, 1500);
    });
  }

  // Smooth scroll for nav links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      if(targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });
});

  // Commission Wizard Logic
  const wizardForm = document.getElementById('commissionForm');
  if (wizardForm) {
    let currentStep = 1;
    const totalSteps = 4;
    
    const steps = document.querySelectorAll('.wizard-step');
    const indicators = document.querySelectorAll('.step-indicator');
    
    // Evaluate Next button state
    const evaluateNextState = () => {
      const stepEl = document.querySelector('.wizard-step[data-step="' + currentStep + '"]');
      const nextBtn = stepEl.querySelector('.next-btn');
      if(nextBtn) {
        const radios = stepEl.querySelectorAll('input[type="radio"]');
        if(radios.length > 0) {
          const isChecked = Array.from(radios).some(r => r.checked);
          nextBtn.disabled = !isChecked;
        }
      }
    };
    
    // Add change listeners to validate radios and auto-advance
    wizardForm.querySelectorAll('input[type="radio"]').forEach(radio => {
      radio.addEventListener('change', () => {
        evaluateNextState();
        
        // Auto-advance to the next step
        if(currentStep < totalSteps) {
          setTimeout(() => {
            steps[currentStep-1].classList.add('hidden');
            indicators[currentStep-1].classList.remove('active');
            currentStep++;
            steps[currentStep-1].classList.remove('hidden');
            indicators[currentStep-1].classList.add('active');
            evaluateNextState();
          }, 350); // slight delay for visual feedback
        }
      });
    });

    // Next Buttons
    document.querySelectorAll('.next-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        if(currentStep < totalSteps) {
          steps[currentStep-1].classList.add('hidden');
          indicators[currentStep-1].classList.remove('active');
          currentStep++;
          steps[currentStep-1].classList.remove('hidden');
          indicators[currentStep-1].classList.add('active');
          evaluateNextState();
        }
      });
    });
    
    // Prev Buttons
    document.querySelectorAll('.prev-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        if(currentStep > 1) {
          steps[currentStep-1].classList.add('hidden');
          indicators[currentStep-1].classList.remove('active');
          currentStep--;
          steps[currentStep-1].classList.remove('hidden');
          indicators[currentStep-1].classList.add('active');
        }
      });
    });
    
    wizardForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const submitBtn = wizardForm.querySelector('button[type="submit"]');
      submitBtn.textContent = 'Preparing Request...';
      
      const formData = new FormData(wizardForm);
      const subject = encodeURIComponent(`Custom Art Commission Request: ${formData.get('client_name')}`);
      const bodyText = `New Custom Art Commission Request:\n\nName: ${formData.get('client_name')}\nEmail: ${formData.get('client_email')}\n\n--- Request Details ---\nSize: ${formData.get('size')}\nMedium: ${formData.get('medium')}\nTheme: ${formData.get('theme')}\n\n--- Description ---\n${formData.get('description')}`;
      const body = encodeURIComponent(bodyText);
      window.location.href = `mailto:mandisantashart@gmail.com?subject=${subject}&body=${body}`;

      setTimeout(() => {
        wizardForm.innerHTML = '<h3 style="text-align:center; padding: 4rem;">Thank you, ' + formData.get('client_name') + '. Your request details have been transferred to your email app! Please send the email to finalize.</h3>';
      }, 500);
    });
  }
