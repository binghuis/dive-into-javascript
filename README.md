# 深入了解 JS

[![pdm-managed](https://img.shields.io/badge/pdm-managed-blueviolet)](https://pdm.fming.dev)
![jupyterlab](https://img.shields.io/badge/jupyterlab-grey?logo=jupyter&labelColor=F37626&logoColor=fff)
![deno](https://shield.deno.dev/deno/^1.3.7)

去 [nbviewer](https://nbviewer.org/github/binghuis/dive-into-javascript/tree/main/src/dive_into_javascript/notebooks/) 阅读。

## 目录

### V8 是如何工作的

- [V8 执行流程概述](./src/dive_into_javascript/notebooks/v8_pipeline.ipynb)
- 执行上下文相关
- 了解事件循环机制（EventLoop）
- 详解 JS 代码执行过程
- 闭包、作用域、箭头函数等与执行上下文的关系
- this

### JS 特性相关

- [柯里化](./src/dive_into_javascript/notebooks/currying.ipynb)
- promise & async / await
- 数据类型 & 隐式类型转换
- 何为万物皆对象
- new

## notebook 启动

1. 安装 [deno](https://deno.com/blog/v1.37)

   如果执行 `deno upgrade` 的时候报 `error: You do not have write permission to /opt/homebrew/bin/deno` 看 [这里](https://github.com/denoland/deno/issues/14829)。

2. 安装 `deno jupyter`

   `deno jupyter --unstable --install`

   > 关于 Deno 对 Jupyter 的支持 [Deno 1.37: Modern JavaScript in Jupyter Notebooks](https://deno.com/blog/v1.37)。

3. 校验安装是否成功 `deno jupyter --unstable`。

4. 包管理工具 [pdm](https://github.com/pdm-project/pdm) 安装。
5. 依赖安装

   `pdm install`

6. jupyter 启动

   `pdm dev`

## V8 调试

[V8 源码](https://source.chromium.org/chromium/chromium/src/+/main:v8/)

### 安装 V8 调试工具 d8

1. 使用 [`jsvu`](https://github.com/GoogleChromeLabs/jsvu) 安装 v8-debug。

2. 配置 `~/.bashrc` 或 `~/.bash_profile` 文件，增加下面两行。

```bash
# --- 配置 D8 ---
export PATH="${HOME}/.jsvu/bin:${PATH}"
alias d8='v8-debug'
# --- end ---
```

3. 执行 `d8 -v` 测试安装结果。

- AST: `d8 --print-ast demo.js > ast.txt`
- bytecode: `d8 --print-bytecode demo.js > bytecode.txt`
- scope: `d8 --print-scopes demo.js > scopes.txt`
