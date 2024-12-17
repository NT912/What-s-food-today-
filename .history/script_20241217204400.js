let foodList = [
  "Mì quảng tôm thịt",
  "Bánh cuốn",
  "Bún nước KonTum",
  "Cút lộn xào me",
  "Ốc đinh",
  "Mì cay",
  "Bún bò",
  "Chè",
  "Bánh mì chảo",
  "Mì trộn",
  "Xôi",
  "Mì quảng ếch",
  "Bún ram chay",
  "Bún thịt nướng",
  "Cá viên chiên mắm",
  "Cơm gà chiên mắm",
  "Bún chả",
  "Bún đậu mắm tôm",
  "Bún riêu",
  "Bánh mì ổ",
  "Cơm chiên",
  "Miến trộn",
  "Phở",
  "Bánh tráng kẹp",
  "Bánh canh",
  "Bún cá chấm",
  "Bánh đúc nóng",
  "Phở khô gia lai",
  "Bánh tráng kẹp",
  "Nem chua rán",
  "Ram cuốn cải",
  "Bánh bèo",
  "Bánh lọc",
  "Bánh căn",
  "Kem bơ",
];

function startRandom() {
  const result = document.getElementById("randomFood");
  let index = 0;
  const interval = setInterval(() => {
    index = Math.floor(Math.random() * foodList.length);
    result.textContent = foodList[index];
  }, 100);

  setTimeout(() => {
    clearInterval(interval);
    result.textContent = `🍽️ ${foodList[index]}!`;
  }, 2000);
}

function renderList() {
  const list = document.getElementById("foodList");
  list.innerHTML = "";
  foodList.forEach((food, index) => {
    list.innerHTML += `
            <li>
                ${food}
                <button onclick="deleteFood(${index})">❌</button>
            </li>
        `;
  });
}

function addFood() {
  const input = document.getElementById("foodInput");
  const newFood = input.value.trim();
  if (newFood) {
    foodList.push(newFood);
    input.value = "";
    renderList();
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

window.onload = () => {
  renderList();
};
