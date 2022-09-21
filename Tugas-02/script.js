let canvas = document.querySelector('canvas');
let ctx = canvas.getContext('2d');
let img = new Image();
img.src = "img/tugas02.png";
// if (!ctx) throw new Error('WebGL not supported');

window.addEventListener('load', () => {
    ctx.save();
    ctx.drawImage(img, canvas.width/2 - img.width/2,canvas.height/2 - img.height/2);
});

function transFunc() 
{
    let option = document.getElementById("trans").value;

    if (option == "1") 
    {
        console.log('1');
        ctx.save();
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.scale(0.5, 0.5);
        ctx.translate(canvas.width/2, canvas.height/2);
        ctx.drawImage(img, canvas.width/2 - img.width/2,canvas.height/2 - img.height/2);
        ctx.resetTransform();
        ctx.restore();
        return;
        
    }
    else if (option == "2") 
    {
        console.log('2');
        ctx.save();
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, 10, 0);
        ctx.resetTransform();
        ctx.restore();
        return;
    }
    else if (option == "3") 
    {
        console.log('3');
        ctx.save();
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.translate(canvas.width/2.5, -canvas.height/3);
        ctx.rotate(45 * Math.PI / 180);
        ctx.drawImage(img, canvas.width/2 - img.width/2,canvas.height/2 - img.height/2);
        ctx.resetTransform();
        ctx.restore();
        return;
    }
    else if (option == "4") 
    {
        console.log('4');
        ctx.save();
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.translate(canvas.width/2 - img.width/2, canvas.height/2 - img.height/2);
        ctx.scale(1, -1);
        ctx.drawImage(img, 0, -canvas.height/2);
        ctx.resetTransform();
        ctx.restore();
        return;
    }
    else if (option == "5") 
    {
        console.log('5');
        ctx.save();
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        scale(0.5, 0.5);
        ctx.translate(canvas.width/2, canvas.height/2);
        ctx.rotate(-90 * Math.PI / 180);
        ctx.drawImage(img, canvas.width/2 - img.width/2,canvas.height/2 - img.height/2);
        ctx.resetTransform();
        ctx.restore();
        return;
    }
    else if (option == "6") 
    {
        console.log('6');
        ctx.restore();
        ctx.save();
        return;
    }
    else if (option == "7") 
    {
        console.log('7');
        ctx.restore();
        ctx.save();
        return;
    }
    else if (option == "8") 
    {
        console.log('8');
        ctx.restore();
        ctx.save();
        return;
    }
    else if (option == "9") 
    {
        console.log('9');
        ctx.restore();
        ctx.translate(2, 10);
        ctx.save();
        return;
    }
    else if (option == "0")
    {
        console.log('default');
        ctx.save();
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, canvas.width/2 - img.width/2,canvas.height/2 - img.height/2);
        ctx.resetTransform();
        ctx.restore();
        return;

    }
}

// yg perlu ditanyakan
// - dimana letak titik pusatnya
// - urutan langkah yang benar









