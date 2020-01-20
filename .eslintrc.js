module.exports = {
    // env 属性中的内容根据自己项目配置
    env: {
        browser: true,
        node: true,
        es6: true,
        jquery: true,
    },
    extends: ['eslint:recommended', 'plugin:vue/recommended'],
    // globals 属性中的内容根据自己项目配置
    globals: {
        CTILink: 'readonly',
    },
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
    },
    plugins: ['vue'],
    rules: {
        'vue/max-attributes-per-line': [
            'error',
            {
                singleline: 1,
                multiline: {
                    max: 1,
                    allowFirstLine: false,
                },
            },
        ],
        indent: [
            'error',
            4,
            {
                SwitchCase: 1,
            },
        ], // 使用4个空格缩进
        'comma-dangle': [0, 'never'], // 对象最后一个属性结束后使用逗号
        semi: [2, 'always'], // 表达式结束后须使用分号结束
        eqeqeq: 0, // 忽略强制使用权等做比较
        'use-isnan': 2, // 要求使用 isNaN() 检查 NaN
        'valid-jsdoc': [
            'error',
            {
                requireReturn: false,
                requireParamDescription: false,
                requireReturnDescription: false,
            },
        ], // jsdoc 书写规则校验，但不强制使用jsdoc
        'no-else-return': 2, // 禁止在else 中使用 return
        'default-case': 0, // 忽略 default case
        'no-eq-null': 2, // 对 null 进行对比时必须使用 全等
        'no-mixed-spaces-and-tabs': [2, 'smart-tabs'], // 禁止混用 tab 和 空格
        'no-multiple-empty-lines': [
            2,
            {
                max: 2,
            },
        ], // 每个文件结束后最多两行空行
        'no-unused-vars': 2, // 去掉未使用的变量
        'no-magic-numbers': [
            0,
            {
                ignore: [1, 0, 100, -1],
            },
        ], // 去掉重复使用数字,将数字存储在变量里
        'max-params': ['error', 4], // 最多四个参数
        'prefer-template': 'error', // 使用字符串模板
        quotes: [2, 'single'], //单引号
        'no-console': 0, // 不禁用console
        'no-debugger': 2, // 禁用debugger
        'no-var': 2, // 对var警告
        'new-cap': 0, // 要求构造函数首字母大写
        'multiline-ternary': [1, 'always'], // 要求或禁止在三元操作数中间换行
        'keyword-spacing': 2, // 强制在对象字面量的属性中键和值之间使用一致的间距
        'no-irregular-whitespace': 0, //不规则的空白不允许
        'no-trailing-spaces': 0, //一行结束后面有空格就发出警告
        'eol-last': 0, // 文件以单一的换行符结束
        'no-unused-vars': [
            2,
            {
                vars: 'all',
                args: 'after-used',
            },
        ], // 不能有声明后未被使用的变量或参数
        'no-underscore-dangle': 0, //标识符不能以_开头或结尾
        'no-alert': 2, // 禁止使用alert confirm prompt
        'no-lone-blocks': 0, // 禁止不必要的嵌套块
        'no-class-assign': 2, // 禁止给类赋值
        'no-cond-assign': 2, // 禁止在条件表达式中使用赋值语句
        'no-const-assign': 2, // 禁止修改const声明的变量
        'no-delete-var': 2, // 不能对var声明的变量使用delete操作符
        'no-dupe-keys': 2, // 在创建对象字面量时不允许键重复
        'no-duplicate-case': 2, //switch中的case标签不能重复
        'no-dupe-args': 2, // 函数参数不能重复
        'no-empty': 2, // 块语句中的内容不能为空
        'no-func-assign': 2, // 禁止重复的函数声明
        'no-invalid-this': 0, // 禁止无效的this，只能用在构造器，类，对象字面量
        'no-redeclare': 2, // 禁止重复声明变量
        'no-spaced-func': 2, // 函数调用时 函数名与()之间不能有空格
        'no-this-before-super': 2, // 在调用super()之前不能使用this或super
        'no-undef': 2, // 不能有未定义的变量
        'no-shadow': 0, // 禁止变量声明与外层作用域的变量同名
        'no-use-before-define': 2, //未定义前不能使用
        camelcase: 0, // 强制驼峰法命名
        'no-unreachable': 1, // 不能有无法执行的代码
        'no-mixed-spaces-and-tabs': 0, //禁止混用tab和空格
        'prefer-arrow-callback': 0, // 要求使用箭头函数作为回调
        'arrow-parens': 0, // 箭头函数用小括号括起来
        'arrow-spacing': 2, //=>的前/后空格
        'jsx-quotes': [2, 'prefer-double'], // 强制在JSX属性（jsx-quotes）中一致使用双引号
        // 'vue/attributes-order': 2, // 对属性进行排序
        'vue/no-v-html': 2, // 禁止使用 v-html 指令
        // 'vue/order-in-components': 2, // 强制对子组件的prop属性进行排序
        'vue/this-in-template': 2, // 禁止在template中使用 this
        'vue/no-reserved-keys': [
            'error',
            {
                reserved: [],
                groups: [],
            },
        ], // 禁止方法或属性命名为vue本身自带的方法
        'vue/no-template-key': 2, // 禁止在template 元素上使用key属性
        'vue/no-unused-components': [
            'error',
            {
                ignoreWhenBindingPresent: true,
            },
        ], // 组件引入后无调用则报错
        'vue/require-prop-type-constructor': 2, // prop 需要声明类型
        'vue/require-render-return': 2, // render函数任何情况下需要有return值
        'vue/require-v-for-key': 2, // 需要给循环语句加上唯一的key值
        'vue/require-valid-default-prop': 2, // 类型为 Array 和 Object 的prop属性需要用 函数设置默认值，
        // propE: {
        //     type: Object,
        //     default() {
        //       return { message: 'hello' }
        //     }
        //   }
        'vue/html-closing-bracket-newline': [
            'error',
            {
                singleline: 'never',
                multiline: 'always',
            },
        ], // 标签的属性换行则开始标签的尾标签换行展示，否则开始标签的尾标签不换行
        'vue/html-indent': [
            'error',
            4,
            {
                attribute: 1,
                baseIndent: 1,
                closeBracket: 0,
                alignAttributesVertically: false, // 标签的属性是否垂直排列
                ignores: [],
            },
        ], // html 代码标签缩进为4个空格
        'vue/no-use-v-if-with-v-for': [
            0,
            {
                allowUsingIterationVar: false,
            },
        ], // 关闭对v-for 和 v-if 一起使用的校验
    },
};
