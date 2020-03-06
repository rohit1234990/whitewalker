function drawMan(ctx, manHeight, point) {
    // console.log('drawMan : ', ctx, manHeight, point)

    var headRadius  = manHeight * 0.15
    var legLength   = manHeight * 0.15
    var handLength  = manHeight * 0.15
    var torsoLength = manHeight * 0.60

    var torsoBeginPoint = {x: point.x, y: point.y + headRadius}
    var handJoinPoint = {x: torsoBeginPoint.x, y: torsoBeginPoint.y + torsoBeginPoint.y * 0.15}
 
    // console.log(headRadius, legLength, handLength, torsoLength)
    drawHead(ctx, point, headRadius)
    drawTorso(ctx, point, torsoBeginPoint, torsoLength)
    

}

function drawHands(ctx, handJoinPoint, handLength) {
    ctx.beginPath();
    ctx.moveTo(handJoinPoint.x, handJoinPoint.y)
    ctx.lineTo(torsoEndPoint.x, torsoEndPoint.y)
    ctx.stroke(); 
}

function drawHead(ctx, point, headRadius) {
    ctx.beginPath();
    ctx.arc(point.x, point.y, headRadius, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.closePath()
}

function drawTorso(ctx, point, torsoBeginPoint, torsoLength) {
    var torsoEndPoint = {x: torsoBeginPoint.x, y: torsoBeginPoint.y + torsoLength}
    
    ctx.beginPath();
    ctx.moveTo(torsoBeginPoint.x, torsoBeginPoint.y)
    ctx.lineTo(torsoEndPoint.x, torsoEndPoint.y)
    ctx.stroke(); 
}
