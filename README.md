# 深入理解 JavaScript

[![pdm-managed](https://img.shields.io/badge/pdm-managed-blueviolet)](https://pdm.fming.dev)
![jupyterlab](https://img.shields.io/badge/jupyterlab-grey?logo=jupyter&labelColor=F37626&logoColor=fff)
![deno](https://shield.deno.dev/deno/^1.3.7)

## V8 调试

[V8 源码](https://source.chromium.org/chromium/chromium/src/+/main:v8/)

[AST 在线预览](https://astexplorer.net/)

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

## notebook 启动

1. 安装 [deno](https://deno.com/blog/v1.37)

   如果执行 `deno upgrade` 的时候报 `error: You do not have write permission to /opt/homebrew/bin/deno` 参考 [这里](https://github.com/denoland/deno/issues/14829)

2. 安装 `deno jupyter`

   `deno jupyter --unstable --install`

   > 关于 Deno 对 Jupyter 的支持 [Deno 1.37: Modern JavaScript in Jupyter Notebooks](https://deno.com/blog/v1.37)

3. 包管理工具 [pdm 安装](https://github.com/pdm-project/pdm)
4. 依赖安装

   `pdm install`

5. jupyter 启动

   `pdm dev`

## 目录

- JS 代码是如何执行的
- 执行上下文 & 调用栈
- 词法环境 & 环境记录 & 作用域 & 作用域链
- new & this
- EventLoop & 任务与微任务
- 闭包 & 尾递归调用
- [柯里化](https://nbviewer.jupyter.org/github/binghuis/dive-into-javascript/blob/main/src/dive_into_javascript/notebooks/currying.ipynb)
- promise & async / await
- 数据类型 & 隐式类型转换
- 何为万物皆对象

箭头函数不创建函数上下文
