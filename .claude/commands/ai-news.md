---
description: AI News Research and Report Generation with Source URLs
---

# AI News Research and Report Generation

最新のAIニュースを調査し、詳細なレポートを作成してGitHubに反映します。

## 実行内容

1. **ソースURL読み込み**: `.claude/news_sources.json` から登録された情報源を取得
2. **サービスリリース重視**: テック企業の公式ブログ、新機能リリース、APIアップデートを重点調査
3. **個別記事分析**: 主要ニュースの詳細内容を深掘りして抽出
4. **高密度レポート作成**: 情報量の多い包括的なAIニュースレポートを生成
5. **GitHub反映**: レポートをコミット・プッシュ

## レポート要件

- **サービスリリース重視**: 新製品、新機能、APIアップデート、価格変更、統合情報を優先
- **高密度・高情報量**: 表面的な概要ではなく、具体的な数値、専門家の見解、技術的詳細を含む詳細な分析
- **公式ブログ重点**: Google AI, OpenAI, Cursor, Anthropic などの公式ブログから確実な情報を収集
- **個別記事の深掘り**: 主要ニュースは個別記事を読み込み、詳細な内容を抽出
- **データ重視**: 調査結果、統計、具体的な企業名・人物名・数値を明記
- **網羅性**: 複数の情報源から多角的な視点で分析
- **リリース日付明記**: 各ニュース項目に記事のリリースされた具体的な日付を記載
- **情報源リンク**: 個別記事への直接リンクを各項目に明記

## 情報源カテゴリ

- **テック企業**: Google, OpenAI, Anthropic, Microsoft, Meta
- **開発ツール**: Cursor, GitHub, Vercel
- **AIサービス**: Hugging Face, Replicate, Runway
- **日本語情報源**: Google Japan, NTT など

## ファイル形式

- ファイル名: `yyyy-mm-dd_AI_News_Report.md` (例: 2025-12-05_AI_News_Report.md)
- 保存先: カレントディレクトリ
- GitHubリポジトリ: `https://github.com/jagar028055/Research-Document.git`
- 情報源リスト: `.claude/news_sources.json`

## 使用方法

```
/ai-news
```