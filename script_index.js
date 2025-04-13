function openModal() {
    document.getElementById('loginModal').style.display = 'flex';
}

function closeModal() {
    document.getElementById('loginModal').style.display = 'none';
}

function openModal1() {
    document.getElementById('welcomeModal').style.display = 'flex';
}

function closeModal1() {
    document.getElementById('welcomeModal').style.display = 'none';
}

// Toggle the background image of the .up and .down buttons like radio buttons
document.addEventListener('DOMContentLoaded', () => {
    // Select all .up and .down buttons
    const upButtons = document.querySelectorAll('.up');
    const downButtons = document.querySelectorAll('.down');

    // Add event listeners to all .up buttons
    upButtons.forEach((upButton, index) => {
        const upvoteCount = document.querySelectorAll('.upvote-count')[index];
        const downvoteCount = document.querySelectorAll('.downvote-count')[index];

        upButton.addEventListener('click', () => {
            if (upButton.classList.contains('clicked')) {
                upButton.classList.remove('clicked');
                upvoteCount.textContent = parseInt(upvoteCount.textContent) - 1; // Decrease count
            } else {
                upButton.classList.add('clicked');
                upvoteCount.textContent = parseInt(upvoteCount.textContent) + 1; // Increase count

                // Remove downvote if active
                if (downButtons[index].classList.contains('clicked')) {
                    downButtons[index].classList.remove('clicked');
                    downvoteCount.textContent = parseInt(downvoteCount.textContent) - 1;
                }
            }
        });
    });

    // Add event listeners to all .down buttons
    downButtons.forEach((downButton, index) => {
        const upvoteCount = document.querySelectorAll('.upvote-count')[index];
        const downvoteCount = document.querySelectorAll('.downvote-count')[index];

        downButton.addEventListener('click', () => {
            if (downButton.classList.contains('clicked')) {
                downButton.classList.remove('clicked');
                downvoteCount.textContent = parseInt(downvoteCount.textContent) - 1; // Decrease count
            } else {
                downButton.classList.add('clicked');
                downvoteCount.textContent = parseInt(downvoteCount.textContent) + 1; // Increase count

                // Remove upvote if active
                if (upButtons[index].classList.contains('clicked')) {
                    upButtons[index].classList.remove('clicked');
                    upvoteCount.textContent = parseInt(upvoteCount.textContent) - 1;
                }
            }
        });
    });
});

// Open the menu modal
function openMenu() {
    document.getElementById('menuModal').style.display = 'flex';
}

// Close the menu modal
function closeMenu() {
    document.getElementById('menuModal').style.display = 'none';
}

// Close the modal when clicking outside the content
window.onclick = function(event) {
    const menuModal = document.getElementById('menuModal');
    if (event.target === menuModal) {
        menuModal.style.display = 'none';
    }
};