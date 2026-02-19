export function eredmenySzamolas(inputElem, eredmenyElem){
    let szoveg = "";
    switch (Number(inputElem.value)) {
        case 1:
            szoveg = "elégtelen";
            break;
        case 2:
            szoveg = "elégséges";
            break;
        case 3:
            szoveg = "közepes";
            break;
        case 4:
            szoveg = "jó";
            break;
        case 5:
            szoveg = "jeles";
            break;
        default:
            szoveg = "Hibás érték!";
            break;
    }
    eredmenyElem.innerHTML = szoveg;
}

export function szamGeneralas(){
    const lista = [];

    for (let i = 0; i < 12; i++) {
        /* Math.random() * (max_szam - min_szam + 1) + min */
        let veletlen = Math.floor(Math.random() * (100 - (-10) + 1)) + (-10);
        lista.push(veletlen);
    }
    return lista;
}

export function szamokKiirasa(lista, asideElem){
    let html= "";
    for (let i = 0; i < lista.length; i++) {
        html += `<div class="kor">${lista[i]}</div>`;
        
    }
    asideElem.innerHTML = html;
}

export function tablazatMegjelenit(lista, articleElem) {
    let szoveg = "<table>";
    szoveg += `
        <tr>
            <th>Név</th>
            <th>Átlag</th>
        </tr>
    `;
    for (let index = 0; index < lista.length; index++) {
        szoveg += `
            <tr>
                <td>${lista[index].nev}</td>
                <td>${lista[index].atlag}</td>
            </tr>
        `;
    }
    szoveg += "</table>";
    articleElem.innerHTML = szoveg;
}
