// دالة ترجع مصفوفة فيها مصفوفتين: 
// الأولى فيها جميع العناصر <a> (المعماريين)
// الثانية فيها جميع الأشخاص غير المعماريين
export const getArchitects = () => {
  const architects = Array.from(document.getElementsByTagName('a'));
  const nonArchitects = Array.from(document.querySelectorAll('body *:not(a)'));
  return [architects, nonArchitects];
};

// دالة ترجع مصفوفة فيها مصفوفتين:
// الأولى فيها المعماريين الذين لديهم كلاس "classical"
// الثانية فيها المعماريين الذين ليس لديهم كلاس "classical"
export const getClassical = () => {
  const [architects] = getArchitects();
  const classical = architects.filter(a => a.classList.contains('classical'));
  const nonClassical = architects.filter(a => !a.classList.contains('classical'));
  return [classical, nonClassical];
};

// دالة ترجع مصفوفة فيها مصفوفتين:
// الأولى فيها المعماريين الكلاسيكيين النشطين (active)
// الثانية فيها المعماريين الكلاسيكيين غير النشطين
export const getActive = () => {
  const [classical] = getClassical();
  const active = classical.filter(a => a.classList.contains('active'));
  const nonActive = classical.filter(a => !a.classList.contains('active'));
  return [active, nonActive];
};

// دالة لإيجاد المعماري المطلوب "BonannoPisano"
// ترجع مصفوفة فيها:
// 1. عنصر الـ HTML الخاص به
// 2. مصفوفة فيها باقي المعماريين الكلاسيكيين النشطين
export const getBonannoPisano = () => {
  const [active] = getActive();
  const bonanno = document.getElementById('BonannoPisano');
  const others = active.filter(a => a.id !== 'BonannoPisano');
  return [bonanno, others];
};
