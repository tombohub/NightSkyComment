


function makeComment() {
    let template = `p⠀⠀⠀⠀⠀⠀.　　　　　　　　　　⠀⠀⠀✦ ⠀ ⠀　　　　　　　　　　　　　　⠀⠀⠀⠀⠀* ⠀⠀⠀
.　　　　　　　　　　✦ ⠀⠀⠀p⠀⠀⠀⠀⠀⠀⠀⠀✦⠀⠀⠀ ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀ 
p⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀p ⠀ ⠀⠀⠀⠀⠀⠀.　　　　　　　　　　　　　.　　　ﾟ .　　　　　　　　　　　　　
, 　　　　　　　　　　　　　　　✦ 　　　　　,　　　　　　　.
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀p
　　　　　　*　　　　　　　　　　　.
.　　　　　　　　　　　　　. 　　✦⠀　   　　　p　　　　　　　　　*
　　　　　⠀　　　　⠀　　p
⠀⠀⠀⠀⠀⠀p⠀⠀⠀⠀⠀.　　　　　 　　⠀　　　⠀.　
　　˚　　　⠀　⠀  　　✦　　　　　　.
　　　　　　　　　　　　　.
　　　　　　*⠀　　⠀  　　　　　⠀✦⠀　
　　　　　　　　　　　　　　　　　　.
　　　　.　　　　✦　　　⠀p
　　　　　　✦　　　　　p`

    let emoji1 = document.getElementById("emoji1").value;
    let emoji2 = document.getElementById("emoji2").value;
    let emoji3 = document.getElementById("emoji3").value;
    let comment = template;
    let emojis = [emoji1, emoji2, emoji3];
    console.log(emojis);
    while (comment.includes('p')) {
        let emoji = emojis[Math.floor(Math.random() * emojis.length)];
        comment = comment.replace('p', emoji)
    }

    document.getElementById("comment").innerHTML = comment ;
    let comment_div = document.querySelector('#comment');
    comment_div.classList.remove('d-none');

    // leave for custom css instead of bootstrap
    //document.getElementById("comment").style.display = "block";

    //copy comment to clipboard
    var textArea = document.createElement("textarea");
    textArea.value = comment;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("Copy");
    textArea.remove();

    // show copied to clipboard message
    document.querySelector('#copy').classList.remove('d-none')
    //document.getElementById("copy").style.display = "block";

    return false;

}



