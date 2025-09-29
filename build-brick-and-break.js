export const build = (amount) => {
  let count = 1;

  const interval = setInterval(() => {
    if (count > amount) {
      clearInterval(interval);
      return;
    }

    // إنشاء الطوبة
    const brick = document.createElement('div');
    brick.id = `brick-${count}`;

    // إذا كان في العمود الأوسط
    if (count % 3 === 2) {
      brick.dataset.foundation = "true";
    }

    // أضف إلى body مباشرة
    document.body.appendChild(brick);
    count++;
  }, 100);
};

export const repair = (...ids) => {
  ids.forEach(id => {
    const brick = document.getElementById(id);
    if (!brick) return;

    if (brick.dataset.foundation === "true") {
      brick.dataset.repaired = "in progress";
    } else {
      brick.dataset.repaired = "true";
    }
  });
};

export const destroy = () => {
  const bricks = document.querySelectorAll('div[id^="brick-"]');
  if (bricks.length > 0) {
    bricks[bricks.length - 1].remove();
  }
};
