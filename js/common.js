// Google Material Colors
var colors = ['#4285F4', '#DB4437', '#F4B400', '#0F9D58', '#AB47BC', '#00ACC1'];

// Common Data Loader
function loadData() {
    // Return the global data object directly (no fetch needed)
    if (typeof NEV_DATA !== 'undefined') {
        return Promise.resolve(NEV_DATA);
    } else {
        console.error("Data store not loaded!");
        return Promise.resolve(null);
    }
}

// Set Active Nav Link
function initNav() {
    var currentFile = window.location.pathname.split('/').pop().split('.')[0] || 'index';
    document.querySelectorAll('.nav-links a').forEach(function (link) {
        if (link.getAttribute('href').includes(currentFile)) {
            link.classList.add('active');
        }
    });
}

// Update Index Stats
function initStats() {
    var totalEl = document.getElementById('stat-total');
    var growthEl = document.getElementById('stat-growth');

    if (typeof NEV_DATA !== 'undefined') {
        if (totalEl) {
            var totalSales = NEV_DATA.monthly_sales.values.reduce(function (a, b) { return a + b; }, 0);
            totalEl.innerText = totalSales.toFixed(0) + "w";
        }
        if (growthEl) {
            var values = NEV_DATA.monthly_sales.values;
            if (values.length > 2) {
                var lastVal = values[values.length - 1];
                var prevVal = values[values.length - 13]; // Compare same month last year (Jan 2025 vs Jan 2024 approximation)
                // Just use the latest growth rate if we have it or calculate from last two items
                var growth = ((values[values.length - 1] - values[values.length - 2]) / values[values.length - 2] * 100).toFixed(1);
                growthEl.innerText = (growth > 0 ? "+" : "") + growth + "%";
            }
        }
    }
}

window.addEventListener('load', function () {
    var loader = document.getElementById('loader');
    var topBar = document.getElementById('top-bar');
    var container = document.querySelector('.container');

    // Start progress bar animation
    if (topBar) topBar.style.width = '100%';

    setTimeout(function () {
        if (loader) {
            loader.classList.add('loading-hidden');
        }
        if (container) {
            container.classList.add('loaded');
        }
        // Trigger chart animations precisely when loading screen starts fading
        if (typeof window.initAllCharts === 'function') {
            window.initAllCharts();
        }
        // Hide transition bar after content is ready
        setTimeout(function () {
            if (topBar) topBar.style.opacity = '0';
        }, 500);
    }, 2000);
});

document.addEventListener('DOMContentLoaded', function () {
    initNav();
    initStats();
});
