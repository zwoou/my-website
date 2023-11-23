---
title: Markdown标题元---数据字段，两侧用一行括起来
---


姓名 类型 默认 描述
authors Authors undefined 博客文章作者（或唯一作者）列表。请阅读authors指南以获取更多说明。authors更喜欢author_*前面的内容字段，即使对于单一作者的博客文章也是如此。
author string undefined ⚠️更喜欢使用authors. 博客文章作者的姓名。
author_url string undefined ⚠️更喜欢使用authors. 作者姓名将链接到的 URL。这可以是 GitHub、Twitter、Facebook 个人资料 URL 等。
author_image_url string undefined ⚠️更喜欢使用authors. 作者缩略图的 URL。
author_title string undefined ⚠️更喜欢使用authors. 作者的描述。
title string 降价标题 博客文章标题。
date string 文件名或文件创建时间 博客文章的创建日期。如果未指定，则可以从文件或文件夹名称中提取，例如，2021-04-15-blog-post.mdx, 2021-04-15-blog-post/index.mdx, 2021/04/15/blog-post.mdx。否则，就是 Markdown 文件创建时间。
tags Tag[] undefined 两个字符串字段的字符串或对象的列表label，并permalink标记到您的帖子。
draft boolean false 博客文章草稿仅在开发期间可用。
unlisted boolean false 未列出的博客文章将在开发和生产中提供。它们将在生产中“隐藏”，不被索引，从站点地图中排除，并且只能由具有直接链接的用户访问。
hide_table_of_contents boolean false 是否隐藏右侧目录。
toc_min_heading_level number 2 目录中显示的最低标题级别。必须介于 2 到 6 之间且小于或等于最大值。
toc_max_heading_level number 3 目录中显示的最大标题级别。必须在 2 到 6 之间。
keywords string[] undefined 关键字元标记，将成为搜索引擎使用的<meta name="keywords" content="keyword1,keyword2,..."/>in 。<head>
description string 第一行Markdown内容 文档的描述，将成为搜索引擎使用的<meta name="description" content="..."/>和<meta property="og:description" content="..."/>in 。<head>
image string undefined 显示帖子链接时将使用的封面或缩略图。
slug string 文件路径 允许自定义博客文章 URL ( /<routeBasePath>/<slug>)。支持多种模式：slug: my-blog-post, slug: /my/path/to/blog/post, slug: /。

- [https://www.docusaurus.cn/docs/api/plugins/@docusaurus/plugin-content-blog#markdown-front-matter](https://www.docusaurus.cn/docs/api/plugins/@docusaurus/plugin-content-blog#markdown-front-matter)
