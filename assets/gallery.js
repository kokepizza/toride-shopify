document.addEventListener('DOMContentLoaded', function() {
    const galleryItems = document.querySelectorAll('.gallery-item');
    const lightbox = document.querySelector('.lightbox');
    const lightboxClose = document.querySelector('.lightbox__close');
    const lightboxContent = document.querySelector('.lightbox__content');
    const prevButton = document.querySelector('.lightbox__nav-prev');
    const nextButton = document.querySelector('.lightbox__nav-next');
    
    let currentIndex = 0;
    const totalImages = galleryItems.length;
    
    // Function to show image at current index
    function showImage(index) {
        // Ensure index is within bounds
        if (index < 0) index = totalImages - 1;
        if (index >= totalImages) index = 0;
        
        currentIndex = index;
        
        // Get the image source from the gallery item
        const imgSrc = galleryItems[currentIndex].querySelector('img').src;
        
        // Clear previous content
        lightboxContent.innerHTML = '';
        
        // Create a new image element
        const img = document.createElement('img');
        img.src = imgSrc;
        
        // Add the image to the lightbox
        lightboxContent.appendChild(img);
    }
    
    // Open lightbox when clicking on a gallery item
    galleryItems.forEach((item, index) => {
        item.addEventListener('click', function() {
            currentIndex = index;
            showImage(currentIndex);
            
            // Show the lightbox
            lightbox.classList.add('active');
            document.body.style.overflow = 'hidden'; // Prevent scrolling
        });
    });
    
    // Navigate to previous image
    prevButton.addEventListener('click', function() {
        showImage(currentIndex - 1);
    });
    
    // Navigate to next image
    nextButton.addEventListener('click', function() {
        showImage(currentIndex + 1);
    });
    
    // Add keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (lightbox.classList.contains('active')) {
            if (e.key === 'ArrowLeft') {
                showImage(currentIndex - 1);
            } else if (e.key === 'ArrowRight') {
                showImage(currentIndex + 1);
            } else if (e.key === 'Escape') {
                closeLightbox();
            }
        }
    });
    
    // Close lightbox when clicking on the close button
    lightboxClose.addEventListener('click', function() {
        closeLightbox();
    });
    
    // Close lightbox when clicking outside the image
    lightbox.addEventListener('click', function(e) {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });
    
    function closeLightbox() {
        lightbox.classList.remove('active');
        document.body.style.overflow = ''; // Restore scrolling
    }
});