#!/bin/bash

# 岩手県ニュースレポートのGit操作自動化スクリプト

# 現在の日付を取得
DATE=$(date +%Y-%m-%d)
TITLE="岩手県最新ニュースレポート作成"

# Git操作
echo "=== Git操作開始 ==="

# ステータス確認
echo "現在のGitステータス:"
git status

# すべての変更をステージング
echo "変更をステージング中..."
git add .

# コミット実行
echo "コミット実行中..."
git commit -m "$DATE $TITLE

- 24時間以内の岩手県最新ニュースを詳細に分析
- すべて事実に基づく信頼性の高い情報提供
- 背景分析と影響評価を含む包括的レポート

🤖 Generated with [Claude Code](https://claude.com/claude-code)

Co-Authored-By: Claude <noreply@anthropic.com>"

# プッシュ実行
echo "GitHubにプッシュ中..."
git push origin master

# 最終確認
echo "=== 操作完了 ==="
echo "現在のステータス:"
git status
echo "=== スクリプト終了 ==="