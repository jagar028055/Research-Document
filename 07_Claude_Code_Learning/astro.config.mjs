// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Claude Code完全ガイド',
			description: '中級者〜上級者開発者向けのClaude Code徹底解説',
			locales: {
				ja: {
					label: '日本語',
					lang: 'ja'
				}
			},
			defaultLocale: 'ja',
			social: [{
				icon: 'github',
				label: 'GitHub',
				href: 'https://github.com/jagar028055/Research-Document'
			}],
			sidebar: [
				{ label: 'スタートガイド', link: '/getting-started/' },
				{ label: '基本概念', link: '/core-concepts/' },
				{
					label: '応用テクニック',
					items: [
						{ label: '概要', link: '/advanced/' },
						{ label: 'カスタムコマンド', link: '/advanced/custom-commands/' },
						{ label: 'プロンプトエンジニアリング', link: '/advanced/prompt-engineering/' },
						{ label: 'ワークフロー自動化', link: '/advanced/workflow-automation/' },
						{ label: 'MCPサーバー', link: '/advanced/mcp-servers/' },
						{ label: 'Git統合', link: '/advanced/git-integration/' },
					]
				},
				{ label: 'エージェント特化', link: '/specialization/' },
				{ label: '使用例', link: '/use-cases/' },
				{ label: 'リファレンス', link: '/reference/' },
				{ label: 'リソース', link: '/resources/' },
			],
			editLink: {
				baseUrl: 'https://github.com/jagar028055/Research-Document/edit/master/07_Claude_Code_Learning/'
			},
		}),
	],
	output: 'static',
	base: '/Research-Document',
	build: {
		format: 'directory',
	},
});
