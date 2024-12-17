let foodList = [
  { name: "Mì quảng tôm thịt", addresses: [] },
  { name: "Bánh cuốn", addresses: [] },
  { name: "Bún nước KonTum", addresses: [] },
  { name: "Cút lộn xào me", addresses: [] },
  { name: "Bún bò", addresses: [] },
];

// Render danh sách món ăn
function renderList() {
  const list = document.getElementById("foodList");
  list.innerHTML = "";
  foodList.forEach((item, index) => {
    list.innerHTML += `
            <li>
                <strong>${item.name}</strong>
                <small>${item.addresses.join(", ") || "Chưa có địa chỉ"}</small>
                <button onclick="deleteFood(${index})">❌</button>
            </li>
        `;
  });
}

// Thêm món ăn
function addFood() {
  const name = document.getElementById("foodInput").value.trim();
  const address = document.getElementById("addressInput").value.trim();

  if (name) {
    foodList.push({ name: name, addresses: address ? [address] : [] });
    renderList();
    document.getElementById("foodInput").value = "";
    document.getElementById("addressInput").value = "";
  }
}

function deleteFood(index) {
  foodList.splice(index, 1);
  renderList();
}

function openPopup() {
  document.getElementById("popup").style.display = "flex";
  renderList();
}

function closePopup() {
  document.getElementById("popup").style.display = "none";
}

function startRandom() {
  const result = document.getElementById("randomFood");
  let index = 0;
  const interval = setInterval(() => {
    index = Math.floor(Math.random() * foodList.length);
    result.textContent = foodList[index].name;
  }, 100);

  setTimeout(() => {
    clearInterval(interval);
    const selected = foodList[index];
    showResultPopup(selected.name, selected.addresses[0] || "Không có địa chỉ");
  }, 2000);
}

function showResultPopup(name, address) {
  const popup = document.getElementById("resultPopup");
  document.getElementById("resultPopupContent").innerHTML = `
        🎉 Món ăn hôm nay: <br>
        <strong>${name}</strong><br>
        📍 ${address}
    `;
  popup.style.display = "flex";
}
