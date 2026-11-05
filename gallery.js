function upDate(previewPic) {
  // In ra console để kiểm tra
  console.log("Sự kiện upDate đã kích hoạt!");
  console.log("Thuộc tính alt: " + previewPic.alt);
  console.log("Thuộc tính src: " + previewPic.src);

  // Đổi văn bản và hình nền của thẻ div
  document.getElementById('image').innerHTML = previewPic.alt;
  document.getElementById('image').style.backgroundImage = "url('" + previewPic.src + "')";
}

function unDo() {
  // Khôi phục hình nền và văn bản gốc
  document.getElementById('image').style.backgroundImage = "url('')";
  document.getElementById('image').innerHTML = "Di chuột qua một hình ảnh bên dưới để hiển thị ở đây.";
}