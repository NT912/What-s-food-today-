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

function pickRandomFood() {
  if (foodList.length > 0) {
    const randomIndex = Math.floor(Math.random() * foodList.length);
    document.getElementById(
      "randomFood"
    ).innerText = `🍽️ Món ăn hôm nay: ${foodList[randomIndex]}`;
  } else {
    document.getElementById("randomFood").innerText = "Danh sách trống!";
  }
}

window.onload = renderList;
