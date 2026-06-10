# BPS Deutsch-Test 対策アプリ

**Agentur für Arbeit** にてUmschulung（職業転換）のための**Bildungsgutschein**（教育バウチャー）を申請する際に受ける、**BPS（Berufspsychologischer Service）Deutsch-Test**の対策練習アプリです。

---

## 機能概要

5つの練習カテゴリと模擬テストモードを搭載しています。

| カテゴリ | 内容 |
|---|---|
| 📖 Leseverstehen | 読解問題（求人・労働権・社会保険に関するテキスト） |
| ✏️ Lückentext | 穴埋め問題（前置詞・接続詞・定冠詞など） |
| 📝 Grammatik | 文法問題（格変化・動詞活用・受動態・Konjunktiv II） |
| 📚 Wortschatz | 語彙問題（同義語・反義語・文脈中の語義） |
| 🔤 Rechtschreibung | スペリング問題（ß/ss・ie/ei・大文字小文字） |
| ⏱️ Mock Test | 全カテゴリを組み合わせた30分制限の模擬テスト |

### その他の機能

- 各問題に即時フィードバック（正解・解説付き）
- 進捗バー・スコア表示
- スコア履歴をlocalStorageに保存
- モバイル対応レスポンシブデザイン

---

## 技術スタック

- **React 18** + **TypeScript**
- **Vite**（ビルドツール）
- **Tailwind CSS**（スタイリング）
- バックエンド不要（全データをフロントエンドに内包）

---

## 開発環境のセットアップ

### 必要なもの

- Node.js 18以上
- npm 8以上

### インストールと起動

```bash
# 依存関係のインストール
npm install

# 開発サーバー起動
npm run dev
```

ブラウザで `http://localhost:5173` を開いてください。

### ビルド

```bash
npm run build
```

`dist/` ディレクトリに静的ファイルが生成されます。Vercel・Netlify・GitHub Pagesなど任意のホスティングサービスにデプロイできます。

---

## プロジェクト構成

```
src/
├── App.tsx                  # メインアプリ・ルーティング
├── types.ts                 # 型定義
├── index.css                # グローバルスタイル
├── main.tsx                 # エントリーポイント
├── components/
│   ├── Home.tsx             # ホーム画面
│   ├── Exercise.tsx         # 練習画面
│   ├── MockTest.tsx         # 模擬テスト画面
│   ├── ResultScreen.tsx     # 結果画面
│   └── ProgressBar.tsx      # 進捗バー
└── data/
    ├── leseverstehen.ts     # 読解問題データ
    ├── lueckentext.ts       # 穴埋め問題データ
    ├── grammatik.ts         # 文法問題データ
    ├── wortschatz.ts        # 語彙問題データ
    └── rechtschreibung.ts   # スペリング問題データ
```

---

## BPS Deutsch-Testについて

BPS（Berufspsychologischer Service）は、Agentur für Arbeitの職業心理学サービス部門です。Bildungsgutscheinの申請時にドイツ語能力を確認するためのテストを実施します。

テストはおおよそ**B1〜B2レベル**の内容で、読解・文法・語彙・スペリングの能力が問われます。このアプリで十分な練習を積んでテストに臨んでください。

---

## ライセンス

MIT
