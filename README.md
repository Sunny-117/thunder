# thunder

# 第三方依赖

- Connect：Connect 是一个框架，它使用被称为中间件的模块化组件，以可重用的方式实现 web 程序的逻辑。在 Connect 中，中间件组件是一个函数，它拦截 `HTTP` 服务器提供的请求和响应，执行逻辑，然后，或者结束响应，或者把它传递给下一个中间件组件；Connect 用分配器把中间件 连接 在一起；Express 构建在 Connect 之上的更高层的框架。

- 静态文件中中间件：`serve-static`

- JS 模块语法解析器，实现 `node` 的 `require.resolve()` 算法：`es-module-lexer`

- 遍历文件系统，并根据 Unix Bash shell 使用的规则返回与指定模式的定义集匹配的路径名：`fast-glob`

- 操作字符串的库：magic-string

- 打包工具：esbuild

# feature

✅ 命令行

✅ http 服务器

✅ 静态文件中间件

✅ 分析第三方依赖

✅ 修改导入路径

✅ 支持 vue 插件

✅ 支持 style

✅ 支持环境变量

✅ 支持 HMR
