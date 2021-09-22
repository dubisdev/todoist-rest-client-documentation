const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(
	module.exports = {
		title: "Javascript Todoist-Rest-Client",
		tagline: "Documentation Page",
		url: "https://dubisdev.github.io",
		baseUrl: "/todoist-rest-client/",
		onBrokenLinks: "throw",
		onBrokenMarkdownLinks: "warn",
		favicon: "img/favicon.ico",
		organizationName: "dubisdev", // Usually your GitHub org/user name.
		projectName: "todoist-rest-client", // Usually your repo name.

		presets: [
			[
				"@docusaurus/preset-classic",
				/** @type {import('@docusaurus/preset-classic').Options} */
				({
					docs: {
						sidebarPath: require.resolve("./sidebars.js"),
						// Please change this to your repo.
						editUrl:
							"https://github.com/dubisdev/todoist-rest-client/edit/main/website/",
					},
					blog: false,
					// {
					// 	showReadingTime: true,
					// 	// Please change this to your repo.
					// 	editUrl:
					// 		"https://github.com/dubisdev/todoist-rest-client/edit/main/website/blog/",
					// },
					theme: {
						customCss: require.resolve("./src/css/custom.css"),
					},
				}),
			],
		],

		themeConfig:
			/** @type {import('@docusaurus/preset-classic').ThemeConfig} */
			({
				navbar: {
					title: "JS Todoist Client",
					// logo: {
					// 	alt: "My Site Logo",
					// 	src: "img/logo.svg",
					// },
					items: [
						{
							type: "doc",
							docId: "intro",
							position: "right",
							label: "API",
						},
						//{ to: "/blog", label: "Blog", position: "left" },
						{
							href: "https://github.com/dubisdev/todoist-rest-client",
							label: "GitHub",
							position: "right",
						},
					],
				},
				footer: {
					style: "dark",
					links: [
						{
							title: "Docs",
							items: [
								{
									label: "API",
									to: "/docs/intro",
								},
							],
						},
						{
							title: "More",
							items: [
								// {
								// 	label: "Blog",
								// 	to: "/blog",
								// },
								{
									label: "GitHub",
									href: "https://github.com/dubisdev/todoist-rest-client",
								},
							],
						},
					],
					copyright: `Copyright © ${new Date().getFullYear()} Todoist-Rest-Client. Built with Docusaurus.`,
				},
				prism: {
					theme: lightCodeTheme,
					darkTheme: darkCodeTheme,
				},
			}),
	}
);
