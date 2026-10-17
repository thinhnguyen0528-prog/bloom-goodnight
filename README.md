# BLOOM.exe — A Flower Before Bedtime 🌸🌙

Một website tương tác lãng mạn được thiết kế như món quà nhỏ dành tặng bạn gái mỗi tối. Khi mở trang web, một bó hoa rực rỡ sắc hồng phấn, cam san hô và trắng kem gói trong lớp giấy trắng thắt nơ hồng sẽ từ từ vươn cành, nảy lá, kết nụ và bung nở qua 5 giai đoạn. Sau khi bó hoa nở trọn vẹn, lời nhắn dịu dàng bằng tiếng Việt hiện lên nhắc cô ấy đi ngủ sớm, cùng hiệu ứng chuyển cảnh sang bầu trời đêm yên bình có trăng lưỡi liềm và sao lấp lánh.

---

## ✨ Tính năng nổi bật (Features)

1. **Hiệu ứng Bó hoa SVG nở qua 5 giai đoạn (5-Stage Progressive SVG Bouquet)**:
   - **Giai đoạn 1 — Khởi đầu**: Hiện nền xanh sage dịu mắt, lớp giấy gói trắng thắt nơ hồng và lời mở đầu *“Anh có một món quà nhỏ dành cho em...”*.
   - **Giai đoạn 2 — Cành lá vươn lên**: Từng nhành cây xanh, lá non và nhánh lúa mạch vàng óng từ từ vươn lên từ lớp giấy gói.
   - **Giai đoạn 3 — Nụ hoa xuất hiện**: Những nụ hoa nhỏ xinh hé mở trên đầu cành với độ trễ tự nhiên.
   - **Giai đoạn 4 — Hoa bung nở**: 40 bông hoa (hoa cánh bướm cam san hô, cúc trắng kem nhụy vàng, hoa 5 cánh hồng phấn) bung nở nhiều lớp từ tâm ra ngoài, áp dụng thuật toán chống chồng đè (Separation Algorithm).
   - **Giai đoạn 5 — Hoàn thiện bó hoa**: Bó hoa đung đưa nhẹ nhàng trong ánh sáng dịu và những cánh hoa rơi lơ lửng.
2. **Thông điệp lãng mạn tiếng Việt**:
   - Hiển thị mượt mà từng đoạn lời chúc ngủ sớm dễ thương.
   - Toàn bộ nội dung văn bản nằm gọn trong đối tượng `CONFIG` rất dễ chỉnh sửa.
3. **Chuyển cảnh Đêm yên bình (Peaceful Midnight Scene)**:
   - Khi nhấn nút **“Em nghe lời anh, em đi ngủ đây ❤️”**, bó hoa tỏa sáng dịu nhẹ, cánh hoa rơi chậm lại, nền chuyển sang bầu trời đêm xanh thẫm với trăng lưỡi liềm và sao lấp lánh cùng lời chúc *“Chúc bé ngủ ngon, mơ thấy anh nhé! 💗 Anh yêu em.”*.
4. **Tương thích hoàn hảo**:
   - Thiết kế Mobile-First (hiển thị đẹp trên cả điện thoại và máy tính).
   - Hỗ trợ `prefers-reduced-motion` và có nút **“Xem lại hoa nở”** / **“Xem lại từ đầu”** bất cứ lúc nào.

---

## 📁 Cấu trúc thư mục (Project Structure)

```text
bloom-goodnight/
├── index.html      # File HTML5 hoàn chỉnh (chứa đầy đủ giao diện, SVG, CSS và JS)
├── style.css       # File CSS tách rời (tuỳ chọn dùng khi muốn quản lý riêng)
├── script.js       # File JavaScript tách rời (chứa CONFIG lời chúc & hiệu ứng)
├── README.md       # Hướng dẫn sử dụng và triển khai GitHub Pages
└── .nojekyll       # File cấu hình giúp GitHub Pages phục vụ trang tĩnh nhanh chóng
```

---

## 💻 Cách chạy thử trên máy cá nhân (Local Preview)

Vì dự án hoàn toàn tĩnh (không cần cơ sở dữ liệu hay máy chủ phức tạp), bạn có thể mở trực tiếp:

### Cách 1: Mở trực tiếp file `index.html`
- Nhấp đúp chuột vào file `index.html` để mở ngay trên trình duyệt (Chrome, Safari, Edge, Firefox).

### Cách 2: Chạy qua máy chủ tĩnh cục bộ
- Nếu máy có cài sẵn Python:
  ```bash
  python3 -m http.server 8080
  ```
  Sau đó mở trình duyệt tại `http://localhost:8080`.
- Hoặc nếu dùng Node.js / Vite:
  ```bash
  npm install
  npm run dev
  ```

---

## 🚀 Hướng dẫn đưa lên GitHub Pages (Step-by-Step Deployment)

### Bước 1: Tạo kho lưu trữ (Repository) trên GitHub
1. Đăng nhập vào [GitHub.com](https://github.com/).
2. Nhấn nút **+** ở góc trên bên phải → chọn **New repository**.
3. Đặt tên repository, ví dụ: `bloom-before-bedtime`.
4. Chọn chế độ **Public** (bắt buộc với tài khoản miễn phí để bật GitHub Pages).
5. Nhấn **Create repository**.

### Bước 2: Tải mã nguồn lên GitHub
**Cách A — Tải trực tiếp trên trình duyệt (Nhanh nhất, không cần cài Git):**
1. Trong trang repository vừa tạo, nhấn vào dòng **uploading an existing file**.
2. Kéo thả các file `index.html`, `style.css`, `script.js`, `README.md`, và `.nojekyll` vào khung tải lên.
3. Nhấn nút **Commit changes** màu xanh ở bên dưới.

**Cách B — Đẩy code bằng Git trên Terminal:**
```bash
git init
git add index.html style.css script.js README.md .nojekyll
git commit -m "Initial commit: BLOOM.exe - A Flower Before Bedtime"
git branch -M main
git remote add origin https://github.com/<TEN_TAI_KHOAN_GITHUB>/<TEN_REPO>.git
git push -u origin main
```

### Bước 3: Bật GitHub Pages
1. Trong giao diện repository trên GitHub, bấm vào tab **Settings** (biểu tượng bánh răng ở thanh menu trên cùng).
2. Ở menu bên trái, kéo xuống chọn mục **Pages**.
3. Tại phần **Build and deployment** → mục **Source**, chọn **Deploy from a branch**.
4. Tại mục **Branch**, chọn nhánh `main` và thư mục `/ (root)`, sau đó nhấn **Save**.

### Bước 4: Lấy đường dẫn (URL) gửi tặng bạn gái
1. Đợi khoảng 1 – 2 phút để GitHub Pages xuất bản trang web, sau đó tải lại trang **Settings → Pages**.
2. Bạn sẽ thấy hộp thông báo:
   > **Your site is live at `https://<ten-tai-khoan>.github.io/<ten-repo>/`**
3. Sao chép đường link này và gửi cho cô ấy trước giờ đi ngủ! 💌
