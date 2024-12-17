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

  // Thêm hiệu ứng nhấp nháy trong 2 giây
  const interval = setInterval(() => {
    index = Math.floor(Math.random() * foodList.length);
    result.textContent = foodList[index];
    result.style.color = getRandomColor();
  }, 100);

  // Kết thúc hiệu ứng và hiển thị kết quả
  setTimeout(() => {
    clearInterval(interval);
    result.textContent = `🍽️ ${foodList[index]}!`;
    result.style.color = "#f4b400";

    // Hiển thị popup chúc mừng
    showResultPopup(foodList[index]);
  }, 2000);
}

function showResultPopup(food) {
  const popup = document.getElementById("resultPopup");
  const popupContent = document.getElementById("resultPopupContent");

  popupContent.innerHTML = `
        🎉 Chúc mừng! Món ăn hôm nay là: <br>
        <strong>${food}</strong> 🎉
    `;

  popup.style.display = "flex";

  // Đóng popup khi click ra ngoài
  window.onclick = function (event) {
    if (event.target === popup) {
      closeResultPopup();
    }
  };
}

function closeResultPopup() {
  document.getElementById("resultPopup").style.display = "none";
  window.onclick = null; // Xóa sự kiện click
}

function getRandomColor() {
  const colors = [
    "#f4b400",
    "#f9844a",
    "#ffcd56",
    "#ffafcc",
    "#bde0fe",
    "#ffc8dd",
  ];
  return colors[Math.floor(Math.random() * colors.length)];
}

window.onload = () => {
  renderList();
};
