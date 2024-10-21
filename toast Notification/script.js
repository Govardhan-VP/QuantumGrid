// script.js
function showToast(type = 'success', message = 'This is a toast notification!') {
    const toastContainer = document.getElementById('toastContainer');

    // Create toast element
    const toast = document.createElement('div');
    toast.classList.add('toast', type, 'show');

    // Set the icon based on the type using Font Awesome classes
    let icon;
    switch (type) {
        case 'success':
            icon = '<i class="fas fa-check-circle"></i>'; // Success icon
            break;
        case 'error':
            icon = '<i class="fas fa-times-circle"></i>'; // Error icon
            break;
        case 'invalid':
            icon = '<i class="fas fa-exclamation-triangle"></i>'; // Invalid input icon
            break;
        default:
            icon = '<i class="fas fa-check-circle"></i>'; // Default icon
    }

    toast.innerHTML = `
        <span class="icon">${icon}</span>
        <span class="message">${message}</span>
    `;

    // Add toast to the container
    toastContainer.appendChild(toast);

    // Remove toast after 3 seconds
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 500);
    }, 3000);
}
