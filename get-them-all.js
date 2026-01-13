
export const getArchitects = () => {
  const architects = Array.from(document.getElementsByTagName('a'));
  const nonArchitects = Array.from(document.querySelectorAll('body *:not(a)'));
  return [architects, nonArchitects];
};


export const getClassical = () => {
  const [architects] = getArchitects();
  const classical = architects.filter(a => a.classList.contains('classical'));
  const nonClassical = architects.filter(a => !a.classList.contains('classical'));
  return [classical, nonClassical];
};


export const getActive = () => {
  const [classical] = getClassical();
  const active = classical.filter(a => a.classList.contains('active'));
  const nonActive = classical.filter(a => !a.classList.contains('active'));
  return [active, nonActive];

};

export const getBonannoPisano = () => {
  const [active] = getActive();
  const bonanno = document.getElementById('BonannoPisano');
  const others = active.filter(a => a.id !== 'BonannoPisano');
  return [bonanno, others];
};
