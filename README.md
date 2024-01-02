# 深入理解 JavaScript

[![pdm-managed](https://img.shields.io/badge/pdm-managed-blueviolet)](https://pdm.fming.dev)
![jupyterlab](https://img.shields.io/badge/jupyterlab-grey?logo=jupyter&labelColor=F37626&logoColor=fff)
![deno](https://shield.deno.dev/deno/^1.3.7)

## notebook 启动

1. 安装 [deno](https://deno.com/blog/v1.37)
   
   如果没速度就在控制台挂梯子。

   如果执行 `deno upgrade` 的时候报 `error: You do not have write permission to /opt/homebrew/bin/deno` 点 [这里](https://github.com/denoland/deno/issues/14829)
   
2. 安装 `deno jupyter`

    `deno jupyter --unstable --install`

    > 关于 Deno 对 Jupyter 的支持 [Deno 1.37: Modern JavaScript in Jupyter Notebooks](https://deno.com/blog/v1.37)

3. 包管理工具 [pdm 安装](https://github.com/pdm-project/pdm) 
4. 依赖安装
    
    `pdm install`

5. jupyter 启动
    
    `pdm up`

## 目录

- promise
- 隐式类型转换
- 闭包
- JS 函数式编程与函数柯里化
- 如何理解万物皆对象
- 作用域链
- new
- EventLoop
- 任务与微任务
- 执行上下文
- this
- 作用域链
- 运行时（runtime）& 解释器
- [柯里化](https://nbviewer.jupyter.org/github/binghuis/dive-into-javascript/blob/main/src/dive_into_javascript/notebooks/currying.ipynb)
