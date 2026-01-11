let lastCheck = null;

function generateCheck() {
    const id = "PF-" + Math.floor(Math.random() * 1000000);
    const date = new Date().toLocaleString();

    lastCheck = {
        id: id,
        date: date,
        status: "Төлем расталды"
    };

    document.getElementById("checkBox").innerHTML = `
        <b>Цифрлық чек</b><br>
        ID: ${id}<br>
        Күні: ${date}<br>
        Статус: ${lastCheck.status}
    `;

    document.getElementById("qrBox").innerHTML = "";
    new QRCode(document.getElementById("qrBox"), {
        text: id,
        width: 150,
        height: 150
    });
}

function downloadPDF() {
    if (!lastCheck || !lastCheck.id) {
        alert("❗ Алдымен чек жасаңыз. Чек ID жоқ.");
        return;
    }

    const { jsPDF } = window.jspdf;
    const pdf = new jsPDF();

    pdf.text("PayFlow – Цифрлық чек", 20, 20);
    pdf.text("Чек ID: " + lastCheck.id, 20, 40);
    pdf.text("Күні: " + lastCheck.date, 20, 50);
    pdf.text("Статус: " + lastCheck.status, 20, 60);

    pdf.save(lastCheck.id + ".pdf");
}


function validateCheck() {
    const inputId = document.getElementById("checkIdInput").value;
    const result = document.getElementById("validationResult");

    if (!lastCheck) {
        result.innerText = "Алдымен чек жасалмаған";
        result.style.color = "orange";
        return;
    }

    if (inputId === lastCheck.id) {
        result.innerText = "✅ Чек расталды. Дерек өзгермеген.";
        result.style.color = "green";
    } else {
        result.innerText = "❌ Чек табылмады немесе жалған.";
        result.style.color = "red";
    }
}
