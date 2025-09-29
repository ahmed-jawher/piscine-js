import { gossips } from './gossip-grid.data.js';

export const grid = () => {
  const body = document.body;

  // ===== إنشاء أدوات التحكم =====
  const rangesContainer = document.createElement('div');
  rangesContainer.classList.add('ranges');

  const widthInput = document.createElement('input');
  widthInput.type = 'range';
  widthInput.classList.add('range');
  widthInput.id = 'width';
  widthInput.min = 200;
  widthInput.max = 800;
  widthInput.value = 200;

  const fontSizeInput = document.createElement('input');
  fontSizeInput.type = 'range';
  fontSizeInput.classList.add('range');
  fontSizeInput.id = 'fontSize';
  fontSizeInput.min = 20;
  fontSizeInput.max = 40;
  fontSizeInput.value = 20;

  const backgroundInput = document.createElement('input');
  backgroundInput.type = 'range';
  backgroundInput.classList.add('range');
  backgroundInput.id = 'background';
  backgroundInput.min = 20;
  backgroundInput.max = 75;
  backgroundInput.value = 20;

  rangesContainer.append(widthInput, fontSizeInput, backgroundInput);
  body.appendChild(rangesContainer);

  // ===== إنشاء الحاوية =====
  const gridContainer = document.createElement('div');
  gridContainer.classList.add('gossips');
  body.appendChild(gridContainer);

  // ===== إنشاء form =====
  const form = document.createElement('form');
  form.classList.add('gossip');

  const textarea = document.createElement('textarea');
  textarea.placeholder = 'Share your gossip...';

  const submitBtn = document.createElement('button');
  submitBtn.type = 'submit';
  submitBtn.textContent = 'Share gossip!';

  form.append(textarea, submitBtn);
  gridContainer.appendChild(form);

  // ===== عرض النصوص الأساسية =====
  gossips.forEach(gossip => {
    const card = document.createElement('div');
    card.classList.add('gossip');
    card.textContent = gossip;
    gridContainer.appendChild(card); // يضاف بترتيب طبيعي
  });

  // ===== إضافة نص جديد من المستخدم =====
  const addGossipCard = (text) => {
    const card = document.createElement('div');
    card.classList.add('gossip');
    card.textContent = text;

    // إدخال النص الجديد مباشرة بعد الـ form
    gridContainer.insertBefore(card, gridContainer.children[1]);
  };

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const value = textarea.value.trim();
    if (value) {
      addGossipCard(value);
      textarea.value = '';
    }
  });

  // ===== تحديث الأنماط =====
  const updateStyles = () => {
    const cards = document.querySelectorAll('.gossip');
    cards.forEach(card => {
      card.style.width = `${widthInput.value}px`;
      card.style.fontSize = `${fontSizeInput.value}px`;
      card.style.backgroundColor = `hsl(0, 0%, ${backgroundInput.value}%)`;
    });
  };

  widthInput.addEventListener('input', updateStyles);
  fontSizeInput.addEventListener('input', updateStyles);
  backgroundInput.addEventListener('input', updateStyles);

  updateStyles();
};
