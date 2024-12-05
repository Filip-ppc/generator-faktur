// Vyhledání elementů
const form = document.getElementById('fakturaForm');
const fakturaDiv = document.getElementById('faktura');
const pdfButton = document.getElementById('pdfButton');

// Funkce pro aktualizaci faktury
function updateFaktura() {
    // Získání dat z formuláře
    const nazev = form.nazev.value;
    const cena = form.cena.value;
    const mnozstvi = form.mnozstvi.value;
    const celkovaCena = cena * mnozstvi;

    // Vytvoření HTML kódu faktury
    const fakturaHTML = `
        <div class="faktura-polozka">
            <p>Název: ${nazev}</p>
            <p>Cena za kus: ${cena} Kč</p>
            <p>Množství: ${mnozstvi}</p>
            <p>Celková cena: ${celkovaCena} Kč</p>
        </div>
    `;

    // Vložení HTML kódu do divu
    fakturaDiv.innerHTML = fakturaHTML;

    // Aktivujeme tlačítko pro stažení PDF
    pdfButton.disabled = false;
}

// Funkce pro vytvoření PDF
function createPDF() {
    const doc = new jsPDF();

    const fakturaElement = document.getElementById('faktura');

    doc.html(fakturaElement, {
        callback: function(doc) {
            doc.save('faktura.pdf');
        }
    });
}

// Připojení event listenerů
form.addEventListener('submit', (event) => {
    event.preventDefault();
    updateFaktura();
});

pdfButton.addEventListener('click', createPDF);
