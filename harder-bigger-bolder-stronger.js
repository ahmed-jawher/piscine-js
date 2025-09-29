export const generateLetters = () => {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  for (let i = 0; i < 120; i++) {
    // إنشاء عنصر div لكل حرف
    const letterDiv = document.createElement('div');

    // اختيار حرف عشوائي من الأبجدية
    const randomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
    letterDiv.textContent = randomLetter;

    // ضبط حجم الخط: يبدأ من 11 ويصل حتى 130
    const fontSize = 11 + i;
    letterDiv.style.fontSize = `${fontSize}px`;

    // تقسيم الـ 120 عنصر إلى ثلاث مجموعات لتغيير font-weight
    if (i < 40) {
      letterDiv.style.fontWeight = 300; // الثلث الأول
    } else if (i < 80) {
      letterDiv.style.fontWeight = 400; // الثلث الثاني
    } else {
      letterDiv.style.fontWeight = 600; // الثلث الأخير
    }

    // إضافة الحرف إلى الصفحة
    document.body.append(letterDiv);
  }
};
