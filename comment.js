



function makeComment() {
    let template = `p⠀⠀⠀⠀⠀⠀.　　　　　　　　　　⠀⠀⠀✦ ⠀ ⠀　　　　　　　　　　　　　　⠀⠀⠀⠀⠀* ⠀⠀⠀
.　　　　　　　　　　✦ ⠀⠀⠀p⠀⠀⠀⠀⠀⠀⠀⠀✦⠀⠀⠀ ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀ 
p⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀p ⠀ ⠀⠀⠀⠀⠀⠀.　　　　　　　　　　　　　.　　　ﾟ .　　　　　　　　　　　　　
p 　　　　　　　　　　　　　　　✦ 　　　　　,　　　　　　　.
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

    let emojis = document.getElementById("emojis").value.split('');
    console.log(emojis);
    let comment = template;
    while (comment.includes('p')) {
        let emoji = emojis[Math.floor(Math.random() * emojis.length)];
        comment = comment.replace('p', emoji)
    }

    //let comment = template.replace(/p/g, emoji)
    document.getElementById("comment").innerHTML = comment ;
    document.getElementById("comment").style.display = "block";

    //copy comment to clipboard
    var textArea = document.createElement("textarea");
    textArea.value = comment;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("Copy");
    textArea.remove();

    // show copied to clipboard message
    document.getElementById("copy").style.display = "block";

    return false;

}





