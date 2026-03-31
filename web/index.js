// Modal functions
function openModal() {
    document.getElementById('sourceModal').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal(event) {
    if (event && event.target !== document.getElementById('sourceModal')) {
        return;
    }
    document.getElementById('sourceModal').classList.remove('active');
    document.body.style.overflow = '';
}

// Close modal on Escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeModal();
    }
});

// Copy URL on click
document.querySelectorAll('.modal-footer code').forEach(function(code) {
    code.addEventListener('click', function() {
        const url = this.textContent;
        navigator.clipboard.writeText(url).then(function() {
            const originalText = code.textContent;
            code.textContent = 'Copied!';
            code.style.background = 'rgba(0, 163, 255, 0.2)';
            setTimeout(function() {
                code.textContent = originalText;
                code.style.background = '';
            }, 2000);
        });
    });
});

// Existing functions
function swap(hide, show) {
    document.querySelectorAll(hide).forEach(function(el) {
        el.style.display = 'none';
    });
    document.querySelectorAll(show).forEach(function(el) {
        el.style.display = 'block';
    });
    
    // Update active state
    document.querySelectorAll('.nav_btn').forEach(function(btn) {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
}

function compatible(min, max, text) {
    // Compatibility check function
}

function externalize() {
    // External links function
}
