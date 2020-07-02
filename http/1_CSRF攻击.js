/*
  CSRF(Cross-site request forgery) 跨站请求伪造

  概念:
    跨站请求伪造,攻击者通过伪造用户web应用,向一个自己曾子已认证过的网站发送出去,使目标网站误以为是用户真实操作去执行请求或命令(攻击者盗用你的信息, 以你的名义发送恶意请求), 主要是利用网站对请求的验证漏洞而实现这样的攻击行为,网站能确认请求源于用户的浏览器, 却不能验证请求是否源于用户真实意愿下的操作行为.

  攻击原理:
    1.用户登录过受信任的网站, 网站在本地生成cookie,或已经认证的网站运行操作
    2.在认证的信息还未过期间, 攻击者通过一些技术手段欺骗用户的浏览器去访问钓鱼链接
    3. 攻击者并不能通过CSRF攻击获取用户的账号控制权,也不能直接窃取用户的信息, 一般是欺骗用户浏览器,让其以用户的名义运行操作

  防御措施:
    1.不上网!不断网!与世隔绝!或换成诺基亚!

    2.验证HTTP Referer字段:
      HTTP header请求的referer字段记录了该http请求的来源地址, 通常情况下访问一盒安全受限页面的请求来自同一个网站, 而黑客要对其进行CSRF攻击, 请求一般只能在自己网站, 所有可以通过验证http请求中的Referer字段

    3.使用验证码
      关键页面加上验证码, 后台收到验证码请求判断验证码防御CSRF, 但是用户体验不好

    4.请求地址中添加token并验证
      用户登录之后随即产生token放在session 然后每次在请求时把token从session中拿出,与请求中的token校验, 要比referer安全一些

      get请求依附在请求URL中http://url?csrftoken=tokenvalue。
      post利用Form隐藏域<form><input type="hidden" name="csrftoken" value="tokenvalue"/></form>

    5.在HTTP头部自定义属性并验证
      使用token作为自定义属性放在HTTP自定义属性,通过XMLHttpRequest这个类,一次性给所有请求都加上一个csrfToken 这个http头属性, 通过XMLHttpRequest地址不会被记录到浏览器地址, 也不用担心token会透过referer泄露到其他网站中去

    6.AngularJs 提供CSRF方案
      当cookie中存在名为CSRF-TOKEN的cookie 会在请求中带上名为X-XSRF-TOKEN的http header
      如果要修改默认名称:
        $httpProvider.defaults.xsrfCookieName = 'csrftoken';
        $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';

 */