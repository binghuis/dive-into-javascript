# 深入了解 JS

[![pdm-managed](https://img.shields.io/badge/pdm-managed-blueviolet)](https://pdm.fming.dev)
![jupyterlab](https://img.shields.io/badge/jupyterlab-grey?logo=jupyter&labelColor=F37626&logoColor=fff)
![deno](https://shield.deno.dev/deno/^1.3.7)

去 [nbviewer](https://nbviewer.org/github/binghuis/dive-into-javascript/tree/main/src/dive_into_javascript/notebooks/) 阅读。

## 目录

### V8 是如何工作的

文章涉及到的 JS 相关概念依据的是 [ES6 规范](https://262.ecma-international.org/6.0/)。

1. [简述 V8 引擎对 JS 代码的处理流程](./src/dive_into_javascript/notebooks/v8_pipeline.ipynb)
2. [ES6 规范中的词法环境与作用域、闭包的关系](./src/dive_into_javascript/notebooks/lexical_env.ipynb)
3. 执行上下文、调用栈与提升
4. JS 如何通过事件循环机制（EventLoop）实现异步执行
5. 结合以上概念串联 JS 代码执行过程
6. 箭头函数
7. this

### JS 特性相关

- [函数柯里化](./src/dive_into_javascript/notebooks/currying.ipynb)
- promise & async / await
- 隐式类型转换
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

## [V8](https://source.chromium.org/chromium/chromium/src/+/main:v8/) Debug

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

4. 使用 d8 生成阶段产物。

- 抽象语法树: `d8 --print-ast demo.js > ast.txt`
- 字节码: `d8 --print-bytecode demo.js > bytecode.txt`
- 作用域: `d8 --print-scopes demo.js > scopes.txt`
