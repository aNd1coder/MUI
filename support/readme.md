jsdoc toolkit说明：
"java -jar jsrun.jar app/run.js" ：固定代码，每次运行时都必须含有的。
-a 或者 –allfunctions ：为全部函数生成文档，包括那些没有写注释的。
-c 或者 –conf ：使用配置文件
-d= 或者 –directory=：指定生成文档的输出目录，默认是 "out"
-e= 或者 –encoding=：指定编码方式
-n 或者 –nocode ：忽略所有代码，只为有 @name 标签的注释生成文档。
-o= 或者 –out= ： 将日志信息输出到指定文件
-q 或者 –quiet ： 不输出任何信息，包括警告。
-t= 或者 –template= ：指定文档的模板，这个参数必须提供


JSDoc介绍使用规范:http://www.cnblogs.com/jsfans/archive/2011/01/20/1939943.html
命令名描述
@param  @argument 指定参数名和说明来描述一个函数参数
@returns       描述函数的返回值
@author 指示代码的作者
@deprecated 指示一个函数已经废弃，而且在将来的代码版本中将彻底删除。要避免使用这段代码
@see         创建一个HTML链接，指向指定类的描述
@version 指定发布版本
@requires 创建一个HTML链接，指向这个类所需的指定类
@throws @exception      描述函数可能抛出的异常的类型
{@link} 创建一个HTML链接，指向指定的类。这与@see很类似，但{@link}能嵌在注释文本中
@fileoverview 这是一个特殊的标记。如果在文件的第一个文档块中使用这个标记，则指定该文档块的余下部分将用来提供这个文件的概述
@class 提供类的有关信息，用在构造函数的文档中
@constructor 明确一个函数是某个类的构造函数
@type 指定函数的返回类型
@extends 指示一个类派生了另一个类。JSDoc通常自己就可以检测出这种信息，不过，在某些情况下则必须使用这个标记
@private 指示一个类或函数是私有的。私有类和函数不会出现在HTML文档中，除非运行JSDoc时提供了--private命令行选项
@final 指示一个值是常量值。要记住JavaScript无法真正保证一个值是常量
@ignore JSDoc忽略有这个标记的函数