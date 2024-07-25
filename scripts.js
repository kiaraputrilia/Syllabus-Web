// Update the document title periodically
const titles = ["Syllabus", "A Growing Syllabus", "An Imperfect Syllabus", "An Ever-Expanding Syllabus", "A syllabus that's...", "Perpetually, In Fermentation"];
let index = 0;

function updateTitle() {
    document.title = titles[index];
    index = (index + 1) % titles.length;
}

setInterval(updateTitle, 2000);

// Media gallery functionality
document.addEventListener('DOMContentLoaded', function() {
    const mediaItems = document.querySelectorAll('#gallery .media-wrapper');
    let currentIndex = 0;

    function showMedia(index) {
        mediaItems.forEach(item => {
            item.classList.remove('active');
        });

        mediaItems[index].classList.add('active');
    }

    function nextMedia() {
        currentIndex = (currentIndex + 1) % mediaItems.length;
        showMedia(currentIndex);
    }

    showMedia(currentIndex);
    document.getElementById('gallery').addEventListener('click', nextMedia);
});

// Image navigation functionality
document.addEventListener('DOMContentLoaded', () => {
    const imageColumns = document.querySelectorAll('.image-column');

    imageColumns.forEach(column => {
        column.currentIndex = 0;
        column.images = JSON.parse(column.dataset.images);

        column.addEventListener('click', () => {
            imageColumns.forEach(col => col.classList.remove('active'));
            column.classList.add('active');
        });
    });

    document.addEventListener('keydown', (event) => {
        const activeColumn = document.querySelector('.image-column.active');
        if (activeColumn) {
            if (event.key === 'ArrowRight') {
                activeColumn.currentIndex = (activeColumn.currentIndex + 1) % activeColumn.images.length;
            } else if (event.key === 'ArrowLeft') {
                activeColumn.currentIndex = (activeColumn.currentIndex - 1 + activeColumn.images.length) % activeColumn.images.length;
            }
            activeColumn.querySelector('.responsive-image').src = activeColumn.images[activeColumn.currentIndex];
        }
    });
});

// Draggable video functionality

document.addEventListener('DOMContentLoaded', () => {
  const videoContainers = document.querySelectorAll('.draggable-video-container');

  videoContainers.forEach(container => {
      // Draggable video functionality
      container.addEventListener('mousedown', (event) => {
          event.preventDefault();
          const initialX = event.clientX;
          const initialY = event.clientY;
          const rect = container.getBoundingClientRect();
          const offsetX = initialX - rect.left;
          const offsetY = initialY - rect.top;

          const onMouseMove = (event) => {
              const newX = event.clientX - offsetX;
              const newY = event.clientY - offsetY;
              container.style.left = `${newX}px`;
              container.style.top = `${newY}px`;
          };

          const onMouseUp = () => {
              document.removeEventListener('mousemove', onMouseMove);
              document.removeEventListener('mouseup', onMouseUp);
          };

          document.addEventListener('mousemove', onMouseMove);
          document.addEventListener('mouseup', onMouseUp);
      });

      // Close button functionality
      const closeButton = container.querySelector('.close-video');
      if (closeButton) {
          closeButton.addEventListener('click', () => {
              console.log('Close button clicked'); // Debugging line
              container.style.display = 'none';
          });
      } else {
          console.error('Close button not found');
      }
  });
});
