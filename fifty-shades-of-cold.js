import { colors } from './fifty-shades-of-cold.data.js';

// 1. إنشاء كلاس لكل لون في ملف الـ style
export const generateClasses = () => {
  const styleTag = document.createElement('style');

  // إنشاء قاعدة CSS لكل لون
  colors.forEach(color => {
    styleTag.innerHTML += `.${color} { background: ${color}; }\n`;
  });

  // إضافة <style> داخل <head>
  document.head.appendChild(styleTag);
};

// 2. إنشاء div لكل لون مع الكلاس الخاص به
export const generateColdShades = () => {
  const body = document.body;
  const coldKeywords = ["aqua", "blue", "turquoise", "green", "cyan", "navy", "purple"];

  colors.forEach(color => {
    // التأكد أن اسم اللون يحتوي على أحد الكلمات الباردة
    if (coldKeywords.some(keyword => color.includes(keyword))) {
      const div = document.createElement('div');
      div.className = color;   // تعيين الكلاس باسم اللون
      div.textContent = color; // عرض اسم اللون داخل المربع

      // عند الضغط يتم استدعاء choseShade
      div.addEventListener('click', () => choseShade(color));

      body.appendChild(div);
    }
  });
};

// 3. تغيير جميع الكلاسات إلى اللون المختار
export const choseShade = (shade) => {
  const divs = document.querySelectorAll('div');

  divs.forEach(div => {
    // استبدال الكلاس الحالي بكلاس اللون المختار
    div.className = shade;
  });
};
