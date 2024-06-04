window.onload = function() {
    var canvas = document.getElementById('smileyCanvas');
    var ctx = canvas.getContext('2d');

    ctx.beginPath();
    ctx.arc(200, 200, 150, 0, Math.PI * 2, true);
    ctx.fillStyle = 'yellow';
    ctx.fill();
    ctx.lineWidth = 5;
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(140, 150, 20, 0, Math.PI * 2, true);
    ctx.fillStyle = 'black';
    ctx.fill();

    ctx.beginPath();
    ctx.arc(260, 150, 20, 0, Math.PI * 2, true);
    ctx.fillStyle = 'black';
    ctx.fill();

    ctx.beginPath();
    ctx.arc(200, 250, 70, 0, Math.PI, false);
    ctx.stroke();
};