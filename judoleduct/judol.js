let saldo = 100000; // saldo awal

function updateSaldo() {
  document.getElementById("saldo").innerText = "Saldo: Rp " + saldo.toLocaleString();
}

function main() {
  if (saldo < 9000) {
    document.getElementById("hasil").innerText =
      "⚠️ Saldo tidak cukup untuk main lagi. Minimal Rp 10.000.";
    document.getElementById("mainBtn").disabled = true;
    return;
  }

  // random angka
  let chance = Math.random() * 100;
  let hasil = "";

  // putar slot (acak simbol)
  const simbol = ["🍒", "🍋", "🍉", "⭐", "🍇"];
  document.getElementById("slot1").innerText = simbol[Math.floor(Math.random() * simbol.length)];
  document.getElementById("slot2").innerText = simbol[Math.floor(Math.random() * simbol.length)];
  document.getElementById("slot3").innerText = simbol[Math.floor(Math.random() * simbol.length)];

  // logika menang / kalah
  if (chance <= 15) { // 15% menang
    saldo += 20000;
    hasil = "🎉 Kamu MENANG Rp 20.000!";
  } else {
    saldo -= 11000;
    hasil = "❌ Kamu KALAH Rp 11.000!";
  }

  updateSaldo();
  document.getElementById("hasil").innerText = hasil;

  if (saldo < 9000) {
    document.getElementById("hasil").innerText += "\n⚠️ Saldo tidak cukup untuk main lagi.";
    document.getElementById("mainBtn").disabled = true;
  }
}

function bantuan() {
  window.open("https://bnn.go.id/", "_blank");
}

function resetGame() {
  saldo = 100000;
  updateSaldo();
  document.getElementById("hasil").innerText = "Game direset. Coba main lagi dengan saldo baru!";
  document.getElementById("mainBtn").disabled = false;

  // reset tampilan slot ke default
  document.getElementById("slot1").innerText = "🍒";
  document.getElementById("slot2").innerText = "🍋";
  document.getElementById("slot3").innerText = "🍉";
}
