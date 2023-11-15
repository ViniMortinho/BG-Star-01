let trail = document.querySelector('#trail');
let dots = [];
for (let i = 0; i < 30; i++) {
    let dot = document.createElement('div');
    dot.className = 'trail-dot';
    trail.appendChild(dot);
    dots.push(dot);
}
window.addEventListener('mousemove', (e) => {
    let x = e.pageX;
    let y = e.pageY;
    dots.forEach((dot, i, arr) => {
        let nextDot = arr[i + 1] || arr[0];
        dot.x = dot.x + (nextDot.x - dot.x) * 0.6;
        dot.y = dot.y + (nextDot.y - dot.y) * 0.6;
        dot.style.left = dot.x + 'px';
        dot.style.top = dot.y + 'px';
    });
    dots[dots.length - 1].x = x;
    dots[dots.length - 1].y = y;
});
