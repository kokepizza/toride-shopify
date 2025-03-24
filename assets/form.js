// document.addEventListener('DOMContentLoaded', () => {
//     const form = document.querySelector('.form');
//     if (!form) return;
  
//     // Form validation
//     const validateForm = () => {
//       const name = document.getElementById('name');
//       const email = document.getElementById('email');
//       const reason = document.getElementById('reason');
//       const phone = document.getElementById('phone');
//       let isValid = true;
  
//       // Reset previous errors
//       document.querySelectorAll('.error-message').forEach(el => el.remove());
//       document.querySelectorAll('.error').forEach(el => el.classList.remove('error'));
  
//       // Validate required fields
//       [name, email, reason].forEach(field => {
//         if (!field.value.trim()) {
//           markFieldAsError(field, 'Este campo es obligatorio');
//           isValid = false;
//         }
//       });
  
//       // Validate email format
//       if (email.value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
//         markFieldAsError(email, 'Email inválido');
//         isValid = false;
//       }
  
//       // Validate phone if provided
//       if (phone.value && !/^\d{9}$/.test(phone.value)) {
//         markFieldAsError(phone, 'Teléfono debe tener 9 dígitos');
//         isValid = false;
//       }
  
//       return isValid;
//     };
  
//     // Mark field as error
//     const markFieldAsError = (field, message) => {
//       field.classList.add('error');
//       const errorMsg = document.createElement('div');
//       errorMsg.className = 'error-message';
//       errorMsg.textContent = message;
//       field.parentNode.insertBefore(errorMsg, field.nextSibling);
//     };
  
//     // Form submission
//     form.addEventListener('submit', async (e) => {
//       e.preventDefault();
      
//       if (!validateForm()) return;
      
//       const submitBtn = form.querySelector('button[type="submit"]');
//       const originalBtnText = submitBtn.innerHTML;
//       submitBtn.disabled = true;
//       submitBtn.innerHTML = '<span>Enviando...</span>';
      
//       try {
//         // For Shopify, you'll replace this with their API endpoint
//         const formData = new FormData(form);
//         const response = await fetch(form.action, {
//           method: 'POST',
//           body: formData
//         });
        
//         if (!response.ok) throw new Error('Error en el envío');
        
//         // Success message
//         form.innerHTML = `
//           <div class="success-message">
//             <h3>¡Gracias por contactarnos!</h3>
//             <p>Nos pondremos en contacto contigo lo antes posible.</p>
//           </div>
//         `;
        
//         // Scroll to success message
//         form.scrollIntoView({ behavior: 'smooth' });
        
//       } catch (error) {
//         // Error handling
//         submitBtn.disabled = false;
//         submitBtn.innerHTML = originalBtnText;
        
//         const errorContainer = document.createElement('div');
//         errorContainer.className = 'form-error';
//         errorContainer.textContent = 'Ha ocurrido un error. Por favor, inténtalo de nuevo o contáctanos por teléfono.';
//         form.prepend(errorContainer);
        
//         // Remove error after 5 seconds
//         setTimeout(() => errorContainer.remove(), 5000);
//       }
//     });
  
//     // Real-time validation for better UX
//     form.querySelectorAll('input, select, textarea').forEach(field => {
//       field.addEventListener('blur', () => {
//         if (field.required && !field.value.trim()) {
//           markFieldAsError(field, 'Este campo es obligatorio');
//         } else if (field.id === 'email' && field.value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(field.value)) {
//           markFieldAsError(field, 'Email inválido');
//         } else if (field.id === 'phone' && field.value && !/^\d{9}$/.test(field.value)) {
//           markFieldAsError(field, 'Teléfono debe tener 9 dígitos');
//         }
//       });
      
//       field.addEventListener('input', () => {
//         // Remove error styling when user starts typing
//         field.classList.remove('error');
//         const errorMsg = field.nextElementSibling;
//         if (errorMsg && errorMsg.classList.contains('error-message')) {
//           errorMsg.remove();
//         }
//       });
//     });
//   });