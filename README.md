# Apple 全系列產品速查

靜態網站原型，包含 Apple 產品線快速跳轉、系列篩選、名稱／型號搜尋、產品銷售重點卡、選購與服務資訊、官方產品頁連結。

## 開始使用

直接用瀏覽器開啟 `index.html` 即可預覽。若要在本機啟動簡易伺服器，可在此資料夾執行：

```sh
python3 -m http.server 8000
```

然後瀏覽 `http://localhost:8000`。

## 更新內容

所有文字和商品資料都在 `products.js` 的 `window.CATALOG`：

- `groups`：產品系列、說明與產品清單。
- `products`：名稱、型號、價格、裝置插圖種類、適合對象、開場問題、賣點、提醒與 Apple 官方產品頁。
- `highlights`：選購、相容性、活動或售後資訊卡。
- `updatedAt`、`finePrint`、`footerNote`：資料日期與頁尾提醒。

每項產品 `id` 必須唯一。產品插圖以 CSS 示意，`device` 可用 `phone`、`laptop`、`desktop`、`display`、`tablet`、`watch`、`earbuds`、`headphones`、`vision`、`tvbox`、`speaker`、`tag`、`pencil`、`keyboard`、`band`。

價格與產品線會變動。更新時請核對 Apple 台灣官方商店和產品頁；現場售價、庫存、教育優惠、電信方案、服務與相容性應以實際條件為準。
