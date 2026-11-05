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
    document.getElementById('image').innerHTML = "Di chuột hoặc dùng phím Tab qua một hình ảnh bên dưới để hiển thị ở đây.";
}

function addTabIndex() {
    // Thông báo sự kiện onload đã chạy
    console.log("Sự kiện onload đã kích hoạt, đang tự động thêm tabindex!");

    // Lấy tất cả các hình ảnh có class là 'preview'
    var images = document.getElementsByClassName("preview");

    // Dùng vòng lặp for để thêm thuộc tính tabindex="0" cho 6 ảnh
    for (var i = 0; i < images.length; i++) {
        images[i].setAttribute("tabindex", "0"); 
    }
}
