import { styles } from './pimp-my-style.data.js';

let index = 0;        // لتعقب عدد الضغطات
let removing = false; // حالة الحذف أو الإضافة

export const pimp = () => {
  const button = document.querySelector('.button');

  // إذا كنا في وضع الإضافة
  if (!removing) {
    button.classList.add(styles[index]);
    index++;

    // عندما نصل لنهاية المصفوفة، نقوم بتفعيل وضع الحذف
    if (index === styles.length) {
      removing = true;
      button.classList.add('unpimp');
    }
  } 
  // إذا كنا في وضع الحذف
  else {
    button.classList.remove(styles[index - 1]);
    index--;

    // إذا انتهينا من إزالة جميع الكلاسات، نوقف الحذف ونزيل unpimp
    if (index === 0) {
      removing = false;
      button.classList.remove('unpimp');
    }
  }
};
