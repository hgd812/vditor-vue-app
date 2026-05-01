<template>
  <div id="editor"></div>
</template>

<script setup>
import { onMounted, onBeforeUnmount } from 'vue'
import Vditor from 'vditor'

const UPLOAD_URL = 'https://vditor-upload.book888.workers.dev' // 你的上传地址

let vditorInstance = null

onMounted(() => {
  vditorInstance = new Vditor('editor', {
    height: '100%',
    mode: 'ir',                     // 即时渲染（类似 Typora）
    placeholder: '开始写作…',
    theme: 'classic',
    icon: 'ant',

    // ========== 核心优化 1：资源 100% 本地化 ==========
    cdn: '/vditor',                 // 从 public/vditor 目录加载核心文件

    // ========== 核心优化 2：IndexedDB 草稿缓存 ==========
    cache: {
      enable: true,
      id: 'main-editor',            // 唯一标识，不同页面可用不同 ID
    },

    // ========== 核心优化 3：图片懒加载 ==========
    lazyLoadImage: true,            // 图片滚动到视窗内才开始加载

    // ========== 工具栏 ==========
    toolbar: [
      'emoji', 'headings', 'bold', 'italic', 'strike', '|',
      'line', 'quote', 'list', 'ordered-list', 'check', 'outdent', 'indent', '|',
      'code', 'inline-code', 'insert-after', 'insert-before', '|',
      'upload', 'link', 'table', '|',
      'record', 'edit-mode', 'both', 'preview', 'fullscreen', 'outline',
      'code-theme', 'content-theme', 'export', 'devtools', 'info', 'help', 'br'
    ],

    // ========== 预览模式 ==========
    preview: {
      mode: 'both',                 // 双栏实时预览
    },

    // ========== 上传配置 ==========
    upload: {
      url: UPLOAD_URL,
      fieldName: 'file[]',
      max: 10 * 1024 * 1024,       // 10MB
    },

    // ========== 提示：虚拟滚动、Web Worker 等 ==========
    // Vditor 在超大文档下内部已启用虚拟滚动渲染，
    // 若需更细粒度控制，可查阅 Vditor 官方文档开启 Web Worker 解析。
  })
})

onBeforeUnmount(() => {
  // 组件卸载时销毁编辑器实例，避免内存泄漏
  vditorInstance?.destroy()
})
</script>