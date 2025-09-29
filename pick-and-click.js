// pick-and-click
// Turns the page into an HSL color picker driven by mouse position.
// Exports a single function: pick

let initialized = false;

export const pick = () => {
  if (initialized) return; // avoid duplicating listeners
  initialized = true;

  const docEl = document.documentElement;
  const body = document.body;

  // Ensure UI elements exist
  let hslNode = document.querySelector('.hsl');
  if (!hslNode) {
    hslNode = document.createElement('div');
    hslNode.className = 'hsl';
    body.appendChild(hslNode);
  }

  let hueNode = document.querySelector('.hue.text') || document.querySelector('.text.hue');
  if (!hueNode) {
    hueNode = document.createElement('div');
    hueNode.className = 'hue text';
    body.appendChild(hueNode);
  }

  let lumNode = document.querySelector('.luminosity.text') || document.querySelector('.text.luminosity');
  if (!lumNode) {
    lumNode = document.createElement('div');
    lumNode.className = 'luminosity text';
    body.appendChild(lumNode);
  }

  // Ensure SVG crosshair exists
  const SVG_NS = 'http://www.w3.org/2000/svg';
  let svg = document.querySelector('svg');
  if (!svg) {
    svg = document.createElementNS(SVG_NS, 'svg');
    svg.setAttribute('width', '100%');
    svg.setAttribute('height', '100%');
    svg.style.position = 'fixed';
    svg.style.left = '0';
    svg.style.top = '0';
    svg.style.pointerEvents = 'none';
    body.appendChild(svg);
  }

  let axisX = document.getElementById('axisX');
  if (!axisX) {
    axisX = document.createElementNS(SVG_NS, 'line');
    axisX.setAttribute('id', 'axisX');
    axisX.setAttribute('y1', '0');
    axisX.setAttribute('y2', String(docEl.clientHeight || window.innerHeight || 0));
    svg.appendChild(axisX);
  }

  let axisY = document.getElementById('axisY');
  if (!axisY) {
    axisY = document.createElementNS(SVG_NS, 'line');
    axisY.setAttribute('id', 'axisY');
    axisY.setAttribute('x1', '0');
    axisY.setAttribute('x2', String(docEl.clientWidth || window.innerWidth || 0));
    svg.appendChild(axisY);
  }

  const clamp = (v, min, max) => Math.min(Math.max(v, min), max);

  const compute = (evt) => {
    const width = docEl.clientWidth || window.innerWidth;
    const height = docEl.clientHeight || window.innerHeight;

    const x = clamp(evt.clientX, 0, width);
    const y = clamp(evt.clientY, 0, height);

    const hue = Math.round((x / (width || 1)) * 360);
    const lum = Math.round((y / (height || 1)) * 100);
    const hsl = `hsl(${hue}, 50%, ${lum}%)`;

    // Background
    body.style.background = hsl;

    // Display values
    if (hslNode) hslNode.textContent = hsl;
    if (hueNode) hueNode.textContent = String(hue);
    if (lumNode) lumNode.textContent = String(lum);

    // Crosshair lines
    if (axisX) {
      axisX.setAttribute('x1', String(x));
      axisX.setAttribute('x2', String(x));
    }
    if (axisY) {
      axisY.setAttribute('y1', String(y));
      axisY.setAttribute('y2', String(y));
    }

    return hsl;
  };

  const onMove = (e) => {
    compute(e);
  };

  const onClick = (e) => {
    const hsl = compute(e);
    // Try standard Clipboard API
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(hsl).catch(() => {});
    }
    // Fallback using copy event (commonly used in tests)
    try {
      const copyHandler = (ev) => {
        ev.clipboardData.setData('text/plain', hsl);
        ev.preventDefault();
      };
      document.addEventListener('copy', copyHandler, { once: true });
      document.execCommand('copy');
    } catch (_) {
      // ignore failures silently to keep behavior non-blocking
    }
  };

  document.addEventListener('mousemove', onMove);
  document.addEventListener('click', onClick);
};
