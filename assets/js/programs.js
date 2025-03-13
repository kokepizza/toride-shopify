document.addEventListener('DOMContentLoaded', function() {
  const programWrapper = document.querySelector('.program_wrapper');
  const programs = document.querySelectorAll('.program');
  
  if (!programWrapper || programs.length === 0) return;

  // Add mouse leave event to reset all programs to 25% width
  programWrapper.addEventListener('mouseleave', function() {
    programs.forEach(program => {
      program.style.width = '25%';
    });
  });
  
  // Check if cursor is over a gap and no program is being hovered
  programWrapper.addEventListener('mousemove', function(e) {
    // Get all computed styles
    const allProgramWidths = Array.from(programs).map(program => {
      return window.getComputedStyle(program).width;
    });
    
    // Check if all programs are at 20% width (with some tolerance for rounding)
    const allShrunk = allProgramWidths.every(width => {
      const numWidth = parseFloat(width);
      // Check if width is around 20% of container (with some tolerance)
      return Math.abs(numWidth - (programWrapper.offsetWidth * 0.2)) < 10; 
    });
    
    // If all programs are shrunk to 20% and none is expanded, reset to 25%
    if (allShrunk) {
      programs.forEach(program => {
        program.style.width = '25%';
      });
    }
  });
});
