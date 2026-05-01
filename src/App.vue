<template>
  <div class="app-shell">
    <div class="editor-card">
      <router-view />
    </div>
  </div>
</template>

<script setup>
// 全局布局：卡片容器 + 路由出口
</script>

<style>
/* ===== 全局重置 ===== */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background: #f0f2f5;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, "Noto Sans", "PingFang SC", "Microsoft YaHei",
    sans-serif;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  min-height: 100vh;
  padding: 24px;
}

/* ===== 主卡片容器 ===== */
.editor-card {
  width: 100%;
  max-width: 1600px;
  background: #ffffff;
  border-radius: 12px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08),
    0 8px 24px rgba(0, 0, 0, 0.04);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  height: calc(100vh - 48px);
  min-height: 600px;
}

/* ===== Vditor 根元素撑满卡片 ===== */
#editor {
  flex: 1;
  display: flex;
  flex-direction: column;
  min-height: 0;
}

/* ===== 工具栏微调 ===== */
.vditor-toolbar {
  background: #fafafa;
  border-bottom: 1px solid #f0f0f0;
  border-radius: 12px 12px 0 0;
  padding: 4px 8px;
}

/* ===== 编辑区 ===== */
.vditor-content {
  flex: 1;
  background: #fff;
  font-size: 16px;
  line-height: 1.6;
}
.vditor-content .vditor-ir {
  padding: 20px;
}

/* ===== 预览区 ===== */
.vditor-preview {
  background: #fcfcfc;
}

/* ===== 滚动条美化 ===== */
::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}
::-webkit-scrollbar-thumb {
  background: #d0d5dd;
  border-radius: 3px;
}
::-webkit-scrollbar-track {
  background: transparent;
}
</style>