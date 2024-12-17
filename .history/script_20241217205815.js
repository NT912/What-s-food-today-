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
  result.style.animation = "none"; // Xóa animation cũ
  let index = 0;

  // Bắt đầu hiệu ứng random với zoom-in/zoom-out
  result.classList.add("random-zoom");
  const interval = setInterval(() => {
    index = Math.floor(Math.random() * foodList.length);
    result.textContent = foodList[index];
    result.style.color = getRandomGradient();
  }, 100);

  // Kết thúc hiệu ứng sau 2 giây
  setTimeout(() => {
    clearInterval(interval);
    result.classList.remove("random-zoom");
    result.textContent = `🍽️ ${foodList[index]}!`;

    // Thêm hiệu ứng rung và màu nổi bật
    result.style.color = "#e63946";
    result.classList.add("shake");

    // Hiển thị popup chúc mừng
    showResultPopup(foodList[index]);
  }, 2000);
}

function showResultPopup(food) {
  const popup = document.getElementById("resultPopup");
  const popupContent = document.getElementById("resultPopupContent");

  popupContent.innerHTML = `
        🎉 Chúc mừng! Món ăn hôm nay là: <br>
        <strong>${food}</strong> 🎉<br>
        😋 Chúc bạn ăn ngon miệng!
    `;

  popup.style.display = "flex";

  // Đóng popup khi click ra ngoài vùng popup
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

function getRandomGradient() {
  const colors = ["#ff6f61", "#6a0572", "#ffcc00", "#00cfcf", "#ff964f"];
  return colors[Math.floor(Math.random() * colors.length)];
}

window.onload = () => {
  renderList();
};
