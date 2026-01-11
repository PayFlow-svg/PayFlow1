function generateCheck() {
    const id = "PF-" + Math.floor(Math.random() * 1000000);
    const date = new Date().toLocaleString();

    document.getElementById("checkBox").innerHTML = `
        <b>Цифрлық чек</b><br>
        ID: ${id}<br>
        Күні: ${date}<br>
        Статус: Төлем расталды<br>
        Дерек өзгермейді
    `;
}
