# Tân Nguyên Jewelry — Landing page

Website một trang (single-page) giới thiệu thương hiệu trang sức cao cấp **Tân Nguyên**, tối ưu trải nghiệm đọc, điều hướng mượt và hiển thị tốt trên desktop cùng thiết bị di động.

## Công nghệ

| Thành phần | Lựa chọn |
|------------|----------|
| UI | React 19, TypeScript (strict) |
| Build & dev server | Vite 8 |
| Styling | CSS Modules (mỗi component một file `.module.css`) |
| Font | Google Fonts: Playfair Display, Montserrat, Cormorant Garamond |
| Icon | SVG nội tuyến, không dùng thư viện icon |

Không sử dụng Tailwind, Bootstrap hay bộ UI component bên ngoài (MUI, Chakra, shadcn, …).

## Cấu trúc mã nguồn (tóm tắt)

```
src/
├── App.tsx                 # Ghép các section theo thứ tự
├── main.tsx
├── index.css               # Biến thiết kế toàn cục, reset
├── hooks/
│   └── useScrollReveal.ts  # IntersectionObserver (nếu dùng cho hiệu ứng reveal)
└── components/
    ├── Navbar/, Hero/, About/, Services/, Products/
    ├── Testimonials/, Contact/, Footer/
    └── … mỗi thư mục: Component.tsx + Component.module.css
```

Tài nguyên tĩnh: `public/` (favicon SVG, `apple-touch-icon.svg`, `site.webmanifest`, …).

## Yêu cầu môi trường

- **Node.js** 20+ (khuyến nghị LTS)
- **npm** hoặc **pnpm** / **yarn**

## Cài đặt và chạy

```bash
npm install
```

| Lệnh | Mô tả |
|------|--------|
| `npm run dev` | Chạy máy chủ phát triển (HMR), mặc định `http://localhost:5173` |
| `npm run build` | Kiểm tra TypeScript (`tsc -b`) và build production vào `dist/` |
| `npm run preview` | Xem bản build production cục bộ |
| `npm run lint` | Chạy ESLint trên toàn project |

## Triển khai

Sau `npm run build`, thư mục `dist/` chứa file tĩnh có thể đưa lên bất kỳ host tĩnh nào (Vercel, Netlify, Cloudflare Pages, Nginx, …). Cấu hình **SPA fallback** về `index.html` nếu host yêu cầu (đa số nền tảng modern xử lý sẵn cho Vite).

## Favicon và biểu tượng

Dự án dùng **SVG** làm favicon chính (`public/favicon.svg`, `public/apple-touch-icon.svg`). File `favicon.ico` **không** có sẵn.

Để tạo `.ico` cho trình duyệt cũ:

1. Truy cập [RealFaviconGenerator](https://realfavicongenerator.net).
2. Tải lên `public/favicon.svg`.
3. Tải gói đã tạo; nếu cần, thêm `public/favicon.ico` và thẻ `<link rel="icon" href="/favicon.ico" />` trong `index.html`.

## Quy ước phát triển

- Giữ **TypeScript strict**, tránh `any` không cần thiết.
- Props và dữ liệu tĩnh nên có **interface** / **type** rõ ràng.
- Ảnh demo: URL công khai (ví dụ Unsplash); địa chỉ cửa hàng và bản đồ cấu hình trong `Contact.tsx` / `index.html` theo nội dung thực tế.

## Giấy phép & thương hiệu

Mã nguồn trong repo phục vụ mục đích dự án landing page. Nội dung thương hiệu **Tân Nguyên Jewelry** thuộc chủ sở hữu thương hiệu tương ứng.

---

*README này mô tả trạng thái hiện tại của repository; cập nhật khi thêm tính năng hoặc thay đổi stack.*
