const form = document.getElementById('macro-form');
const resultBox = document.getElementById('result');
const totalKcalEl = document.getElementById('total-kcal');
const macroDistEl = document.getElementById('macro-dist');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const protein = Number(document.getElementById('protein').value) || 0;
  const carbs = Number(document.getElementById('carbs').value) || 0;
  const fat = Number(document.getElementById('fat').value) || 0;

  const pCal = protein * 4;
  const cCal = carbs * 4;
  const fCal = fat * 9;
  const total = pCal + cCal + fCal;

  if (total === 0) return;

  const pPct = Math.round((pCal / total) * 100);
  const cPct = Math.round((cCal / total) * 100);
  const fPct = Math.round((fCal / total) * 100);

  totalKcalEl.textContent = `${total} kcal`;
  macroDistEl.textContent = `Dağılım: %${pPct} Protein • %${cPct} Karbonhidrat • %${fPct} Yağ`;
  resultBox.classList.remove('hidden');
});
