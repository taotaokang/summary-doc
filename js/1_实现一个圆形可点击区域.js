// cs3方法: border-radio:50%

// 假设圆心为（100,100）,半径为50，在圆内点击弹出相应的信息，在圆外显示不在圆内的信息

document.onclick = function (e) {
  let r = 50;
  let x1 = 100, y = 100, x2 = e.clientX, y2 = e.clientY;
  // |AB|=Math.abs(Math.sqrt(Math.pow(X2-X1),2)+Math.pow(Y2-Y1,2)))
  // Math.abs()求绝对值
  // Math.pow(底数,指数)
  // Math.sqrt()求平方根
  let len = Math.abs(Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2)))

  if(len<=r){
    alert("外")
  }else{
    alert("里")
  }
}