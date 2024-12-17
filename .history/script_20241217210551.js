let foodList = [
  { name: "Mì quảng tôm thịt", addresses: [] },
  { name: "Bánh cuốn", addresses: [] },
  { name: "Bún nước KonTum", addresses: [] },
  { name: "Cút lộn xào me", addresses: [] },
  { name: "Ốc đinh", addresses: [] },
  { name: "Mì cay", addresses: [] },
  { name: "Bún bò", addresses: [] },
  { name: "Chè", addresses: [] },
  { name: "Bánh mì chảo", addresses: [] },
  { name: "Mì trộn", addresses: [] },
  { name: "Xôi", addresses: [] },
  { name: "Bún ram chay", addresses: [] },
  { name: "Bún thịt nướng", addresses: [] },
  { name: "Bún chả", addresses: [] },
  { name: "Bánh canh", addresses: [] },
  { name: "Phở khô gia lai", addresses: [] },
  { name: "Ram cuốn cải", addresses: [] },
  { name: "Bánh bèo", addresses: [] },
  { name: "Bánh căn", addresses: [] },
  { name: "Kem bơ", addresses: [] },
];

function renderList() {
  const list = document.getElementById("foodList");
  list.innerHTML = "";
  foodList.forEach((item, index) => {
    list.innerHTML += `
            <li>
                <div>
                    <strong>${item.name}</strong>
                    <br><small>${
                      item.addresses.length > 0
                        ? item.addresses.join(", ")
                        : "Chưa có địa chỉ"
                    }</small>
                </div>
                <button onclick="deleteFood(${index})">❌</button>
            </li>
        `;
  });
}

function addFood() {
  const foodInput = document.getElementById("foodInput");
  const addressInput = document.getElementById("addressInput");
  const foodName = foodInput.value.trim();
  const address = addressInput.value.trim();

  if (foodName) {
    foodList.push({ name: foodName, addresses: address ? [address] : [] });
    renderList();
    foodInput.value = "";
    addressInput.value = "";
  }
}

function deleteFood(index) {
  foodList.splice(index, 1);
  renderList();
}

function startRandom() {
  const result = document.getElementById("randomFood");
  let index = Math.floor(Math.random() * foodList.length);
  const selected = foodList[index];
  result.textContent = `🍽️ ${selected.name}`;
  showResultPopup(
    selected.name,
    selected.addresses.length ? selected.addresses[0] : "Không có địa chỉ"
  );
}

function showResultPopup(food, address) {
  const popup = document.getElementById("resultPopup");
  const popupContent = document.getElementById("resultPopupContent");
  popupContent.innerHTML = `🎉 Món ăn hôm nay là: <br><strong>${food}</strong><br>📍 ${address}`;
  popup.style.display = "flex";
}

function closePopup() {
  document.getElementById("popup").style.display = "none";
}

window.onload = renderList;
