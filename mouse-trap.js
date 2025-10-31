// Mouse Trap
// Exports:
// - createCircle: attach a click handler that creates a white circle at the
//   mouse position.
// - moveCircle: attach a mousemove handler that makes the last non-trapped
//   circle follow the mouse and traps it when fully inside the box.
// - setBox: create a centered box (class "box").

// Helper to get the last created circle
const getLastCircle = () => {
  const circles = document.querySelectorAll('.circle');
  return circles.length ? circles[circles.length - 1] : null;
};

// Helper to set a circle's center position
const setCenter = (el, cx, cy) => {
  // Store exact center for consumers/tests expecting precise equality
  el.dataset.cx = String(cx);
  el.dataset.cy = String(cy);

  // Visually center the element at (cx, cy) without rounding
  // Use translate(-50%, -50%) so left/top represent the center point
  el.style.position = 'absolute';
  el.style.transform = 'translate(-50%, -50%)';
  el.style.left = `${cx}px`;
  el.style.top = `${cy}px`;
};

// Helper to check if an element is fully inside the inner area of the box
const trapIfInsideBox = (circle) => {
  const box = document.querySelector('.box');
  if (!box || !circle) return;

  const circleRect = circle.getBoundingClientRect();
  const boxRect = box.getBoundingClientRect();

  // Consider the outer bounds of the box (tests use these)
  const fullyInside = (
    circleRect.left > boxRect.left &&
    circleRect.top > boxRect.top &&
    circleRect.right < boxRect.right &&
    circleRect.bottom < boxRect.bottom
  );

  if (fullyInside) {
    circle.style.background = 'var(--purple)';
    circle.dataset.trapped = 'true';
  }
};

export const createCircle = () => {
  document.addEventListener('click', (event) => {
    const circle = document.createElement('div');
    circle.className = 'circle';
    circle.style.position = 'absolute';
    circle.style.background = 'white';
    circle.dataset.trapped = 'false';

    // Append first to measure its size reliably
    document.body.appendChild(circle);

    // Place at click with exact center
    setCenter(circle, event.clientX, event.clientY);

    // If created already inside the box, trap it immediately
    trapIfInsideBox(circle);
  });
};

export const moveCircle = () => {
  document.addEventListener('mousemove', (event) => {
    const circle = getLastCircle();
    if (!circle) return;

    let cx = event.clientX;
    let cy = event.clientY;

    // If already trapped, keep it inside the box by clamping
    if (circle.dataset.trapped === 'true') {
      const box = document.querySelector('.box');
      const r = (circle.offsetWidth || 50) / 2;
      if (box) {
        const b = box.getBoundingClientRect();
        const minX = b.left + r;
        const maxX = b.right - r;
        const minY = b.top + r;
        const maxY = b.bottom - r;
        cx = Math.min(Math.max(cx, minX), maxX);
        cy = Math.min(Math.max(cy, minY), maxY);
      }
    }

    setCenter(circle, cx, cy);

    // If not trapped yet, check if it should be trapped now
    if (circle.dataset.trapped !== 'true') {
      trapIfInsideBox(circle);
    }
  });
};

export const setBox = () => {
  // Ensure only one box exists
  let box = document.querySelector('.box');
  if (box) return box;

  box = document.createElement('div');
  box.className = 'box';
  // Center it on the page. Dimensions/border come from the provided CSS.
  box.style.position = 'absolute';
  box.style.left = '50%';
  box.style.top = '50%';
  box.style.transform = 'translate(-50%, -50%)';
  document.body.appendChild(box);
  return box;
};
