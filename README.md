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

### Render 部署步驟

1. 在 [Render](https://render.com/) 建立帳號並登入
2. 點擊 "New +" 按鈕，選擇 "Web Service"
3. 連接您的 GitHub/GitLab 儲存庫或選擇 "Public Git repository" 並輸入您的 Git 儲存庫 URL
4. 填寫以下配置：
   - **Name**: 自訂您的服務名稱（例如：xinfen-screw-factory）
   - **Environment**: Node
   - **Region**: 選擇距離您的目標用戶最近的區域
   - **Branch**: main（或您的主要分支）
   - **Build Command**: `npm ci && npm run build`
   - **Start Command**: `node .output/server/index.mjs`
5. 在 "Advanced" 設定中，添加以下環境變數：
   - `NODE_VERSION`: 20
   - `NODE_ENV`: production
6. 點擊 "Create Web Service" 開始部署
7. 部署完成後，Render 會提供一個網址供您訪問

### 使用 render.yaml 配置文件部署

本專案包含 `render.yaml` 配置文件，可直接透過 Render 的 Blueprint 功能部署：

1. 在 Render 儀表板，點擊 "New +" 按鈕，選擇 "Blueprint"
2. 連接您的 Git 儲存庫
3. Render 會自動讀取 `render.yaml` 配置並設置服務
4. 檢查配置無誤後點擊 "Apply" 開始部署

### Netlify 部署步驟

1. 在 [Netlify](https://www.netlify.com/) 建立帳號並登入
2. 點擊 "New site from Git" 按鈕
3. 選擇您的 Git 提供者（GitHub, GitLab, Bitbucket）並授權 Netlify 訪問
4. 選擇您的網站儲存庫
5. 配置項目將自動從 `netlify.toml` 文件中讀取，但您可以進行以下檢查：
   - **Build command**: `npm run build`
   - **Publish directory**: `.output/public`
6. 點擊 "Deploy site" 按鈕開始部署
7. 部署完成後，您可以在 Netlify 儀表板中找到您的網站 URL

### Vercel 部署步驟

1. 在 [Vercel](https://vercel.com/) 建立帳號並登入
2. 點擊 "New Project" 按鈕
3. 導入您的 Git 儲存庫
4. 配置項目將自動從 `vercel.json` 文件中讀取，但您可以檢查並調整以下設置：
   - **Framework Preset**: Nuxt.js
   - **Build Command**: `npm run build`
   - **Output Directory**: `.output/public`
   - **Development Command**: `npm run dev`
5. 點擊 "Deploy" 按鈕開始部署
6. 部署完成後，Vercel 會提供一個網址供您訪問

## 維護與更新

- 更新內容：修改相應的 Vue 文件
- 更新樣式：修改 assets/css/main.css
- 更新圖片：替換 public/images 目錄下的文件
- 環境變數：參考 .env.example 文件，創建並配置 .env 文件

## 授權

© 2024 鑫鋒螺絲工廠. 版權所有.
