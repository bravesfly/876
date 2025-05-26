---
description:
globs:
alwaysApply: false
---
---
description: 该规则解释了 Next.js 全栈开发的约定和最佳实践。
globs: **/*.js,**/*.jsx,**/*.ts,**/*.tsx
alwaysApply: false
---

# Next.js 规则
- 该项目是由 next js 构建的汽配商城落地页。你需要实现用户表单收集，并且通过飞书的多维表格 api 存储 表单 数据。
- 项目在牙买加投放，语言必须使用英语，注释内容必须使用中文。
- 使用 App Router 结构，在路由目录中使用 `page.tsx` 文件。
- 客户端组件必须在文件顶部明确标记 `'use client'`。
- 目录名使用 kebab-case（例如 `components/auth-form`），组件文件使用 PascalCase。
- 优先使用命名导出而非默认导出，即使用 `export function Button() { /* ... */ }` 而不是 `export default function Button() { /* ... */ }`。
- 尽量减少 `'use client'` 指令：
  - 保持大多数组件为 React Server Components (RSC)
  - 仅在需要交互性时使用客户端组件，并用带有 fallback UI 的 `Suspense` 包装
  - 为交互元素创建小型客户端组件包装器
- 尽可能避免不必要的 `useState` 和 `useEffect`：
  - 使用服务器组件进行数据获取
  - 使用 React Server Actions 处理表单
  - 使用 URL 搜索参数实现可共享状态
- 使用 `nuqs` 管理 URL 搜索参数状态