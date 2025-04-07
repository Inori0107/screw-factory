# 鑫鋒螺絲工廠網站

專業螺絲製造與定製服務的企業網站，展示公司產品、服務和資訊。

## 功能特色

- 響應式設計，適配各種裝置
- 產品展示與分類
- 客製化服務流程
- 公司介紹與歷史
- 新聞與產業資訊
- 聯絡表單

## 技術棧

- [Nuxt 3](https://nuxt.com/) - Vue.js 框架
- [Vue 3](https://vuejs.org/) - 前端框架
- 原生 CSS 與變數系統
- Node.js

## 開發環境設置

### 安裝依賴

```bash
npm install
```

### 啟動開發伺服器

```bash
npm run dev
```

### 建置專案

```bash
npm run build
```

### 預覽建置結果

```bash
npm run preview
```

## 部署指南

### Netlify 部署步驟

1. 在 [Netlify](https://www.netlify.com/) 建立帳號並登入
2. 點擊 "New site from Git" 按鈕
3. 選擇您的 Git 提供者（GitHub, GitLab, Bitbucket）並授權 Netlify 訪問
4. 選擇您的網站儲存庫
5. 配置項目將自動從 `netlify.toml` 文件中讀取，但您可以進行以下檢查：
   - **Build command**: `npm run build`
   - **Publish directory**: `.output/public`
   - **Node version**: 20（可在環境變數中設定）
6. 點擊 "Deploy site" 按鈕開始部署
7. 部署完成後，您可以在 Netlify 儀表板中找到您的網站 URL

### 設定自定義域名

1. 在 Netlify 儀表板中，選擇您部署的網站
2. 點擊 "Domain settings" 或 "Domain management"
3. 點擊 "Add custom domain" 按鈕
4. 輸入您想使用的域名（例如：www.xinfenscrew.com）
5. 根據 Netlify 提供的指示，在您的域名註冊商設定 DNS 記錄
6. 等待 DNS 變更生效（通常需要 24-48 小時）

### 添加環境變數

1. 在 Netlify 儀表板中，前往 "Site settings" > "Build & deploy" > "Environment"
2. 點擊 "Edit variables" 按鈕
3. 添加所需的環境變數（參考 `.env.example` 文件）
4. 點擊 "Save" 保存變更
5. 重新部署網站以應用新的環境變數

### 啟用 HTTPS

Netlify 默認為所有網站提供免費的 SSL/TLS 憑證，確保您的網站使用 HTTPS 協議。如果需要自定義 SSL 設定：

1. 前往 "Site settings" > "Domain management" > "HTTPS"
2. 您可以選擇使用 Netlify 的自動 SSL 或上傳自己的自定義憑證

## 維護與更新

- 更新內容：修改相應的 Vue 文件
- 更新樣式：修改 assets/css/main.css
- 更新圖片：替換 public/images 目錄下的文件
- 環境變數：參考 .env.example 文件，創建並配置 .env 文件

### 持續部署

Netlify 支持持續部署，當您推送新的更改到 Git 儲存庫時，它會自動重新構建和部署您的網站。

1. 進行更改並測試本地開發環境
2. 將更改提交到 Git 儲存庫：
   ```bash
   git add .
   git commit -m "描述您的更改"
   git push
   ```
3. Netlify 會自動檢測推送並開始新的部署

## 授權

© 2024 鑫鋒螺絲工廠. 版權所有.
