// Vyhledání elementů
const form = document.getElementById('fakturaForm');
const fakturaDiv = document.getElementById('faktura');

// Funkce pro aktualizaci faktury
function updateFaktura() {
    // Získání dat z formuláře
    const nazev = form.nazev.value;
    const cena = form.cena.value;
    const mnozstvi = form.mnozstvi.value;

    // Vytvoření HTML kódu faktury
    const fakturaHTML = `
        <div class="faktura-polozka">
            <p>Název: ${nazev}</p>
            <p>Cena: ${cena} Kč</p>
            <p>Množství: ${mnozstvi}</p>
        </div>
    `;

    // Vložení HTML kódu do divu
    fakturaDiv.innerHTML = fakturaHTML;
}

// Připojení event listeneru na odeslání formuláře
form.addEventListener('submit', (event) => {
    event.preventDefault();
    updateFaktura();
});
