# 深入了解 JavaScript

[![pdm-managed](https://img.shields.io/badge/pdm-managed-blueviolet)](https://pdm.fming.dev)
![jupyterlab](https://img.shields.io/badge/jupyterlab-F37626)
![deno](https://shield.deno.dev/deno/^1.3.7)

## notebook 启动

1. 安装 `deno jupyter`

    `deno jupyter --unstable --install`

    > 关于 Deno 对 Jupyter 的支持 [Deno 1.37: Modern JavaScript in Jupyter Notebooks](https://deno.com/blog/v1.37)

2. 包管理工具 [pdm 安装](https://github.com/pdm-project/pdm) 
3. 依赖安装
    
    `pdm install`

4. jupyter 启动
    
    `pdm learn`

## 目录

- [数字](https://nbviewer.jupyter.org/github/binghuis/dive-into-javascript/blob/main/src/dive_into_javascript/notebooks/number.ipynb)
- 隐式类型转换
- 闭包
- 柯里化
- 如何理解万物皆对象？
- 作用域链
- new

