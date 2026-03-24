---
layout: ../../layouts/MarkdownPostLayout.astro
title: My Fifth Blog Post
author: Astro Learner 5
description: "This post will show up on its own!"
location: '/posts/post-5'
image:
    url: "https://docs.astro.build/default-og-image.png"
    alt: "The word astro against an illustration of planets and stars."
pubDate: 2026-08-08
tags: ["astro", "successes"]
---
This post should show up with my other blog posts, because `import.meta.glob()` is returning a list of all my posts in order to create my list.