export const compose = () => {
  // استمع لكل ضغطة على لوحة المفاتيح
  document.addEventListener('keydown', (event) => {
    const container = document.body; // المكان الذي ستوضع فيه النوتات
    const key = event.key;

    // إذا ضغط المستخدم على Escape -> امسح جميع النوتات
    if (key === "Escape") {
      container.innerHTML = '';
      return;
    }

    // إذا ضغط المستخدم على Backspace -> احذف آخر نوتة
    if (key === "Backspace") {
      const notes = container.querySelectorAll('.note');
      if (notes.length > 0) {
        notes[notes.length - 1].remove();
      }
      return;
    }

    // إذا كانت الحروف بين a و z فقط
    if (/^[a-z]$/.test(key)) {
      const note = document.createElement('div');
      note.classList.add('note');

      // توليد لون خلفية بناءً على مفتاح الحرف
      const color = `#${((key.charCodeAt(0) * 1234567) % 0xFFFFFF).toString(16).padStart(6, '0')}`;
      note.style.backgroundColor = color;

      // عرض الحرف داخل النوتة
      note.textContent = key;

      // إضافة النوتة إلى الصفحة
      container.appendChild(note);
    }
  });
};
