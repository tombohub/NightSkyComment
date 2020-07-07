


function makeComment() {
//     let template = `p⠀⠀⠀⠀⠀⠀.　　　　　　　　　　⠀⠀⠀✦ ⠀ ⠀　　　　　　　　　　　　　　⠀⠀⠀⠀⠀* ⠀⠀⠀
// .　　　　　　　　　　✦ ⠀⠀⠀p⠀⠀⠀⠀⠀⠀⠀⠀✦⠀⠀⠀ ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀ 
// p⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀p ⠀ ⠀⠀⠀⠀⠀⠀.　　　　　　　　　　　　　.　　　ﾟ .　　　　　　　　　　　　　
// , 　　　　　　　　　　　　　　　✦ 　　　　　,　　　　　　　.
// ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀p
// 　　　　　　*　　　　　　　　　　　.
// .　　　　　　　　　　　　　. 　　✦⠀　   　　　p　　　　　　　　　*
// 　　　　　⠀　　　　⠀　　p
// ⠀⠀⠀⠀⠀⠀p⠀⠀⠀⠀⠀.　　　　　 　　⠀　　　⠀.　
// 　　˚　　　⠀　⠀  　　✦　　　　　　.
// 　　　　　　　　　　　　　.
// 　　　　　　*⠀　　⠀  　　　　　⠀✦⠀　
// 　　　　　　　　　　　　　　　　　　.
// 　　　　.　　　　✦　　　⠀p
// 　　　　　　✦　　　　　p`

    let template = `p⠀⠀⠀⠀⠀⠀.　　　　　　　　　⠀⠀⠀✦ ⠀ ⠀　　　　　　* ⠀⠀⠀
.　　　　　　　　　　✦ ⠀⠀⠀p⠀⠀⠀⠀⠀⠀⠀⠀✦⠀⠀⠀ ⠀⠀⠀⠀⠀⠀⠀⠀⠀ 
p⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀p ⠀ ⠀⠀⠀⠀⠀⠀.　　　　　　　　　　　.　　　ﾟ .　　　　　
, 　　　　　　　　✦ 　　　　　,　　　　　　　.
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀p
　　　　　　*　　　　　　　　　　.
.　　　　　　　　　. 　　✦⠀　   　　　p　　　　　　　　　*
　　⠀　　　　⠀　　p
⠀⠀⠀⠀⠀⠀p⠀⠀⠀⠀⠀.　　　　　 ⠀　　　⠀.　
　　˚　　　⠀　⠀  　　✦　　　　　　.
　　　　　　　.
　　　　　　*⠀　　⠀  　　　　⠀✦⠀　
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
    comment_div.style.display = "block";


    //copy comment to clipboard
    var textArea = document.createElement("textarea");
    textArea.value = comment;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("Copy");
    textArea.remove();

    // show copied to clipboard message
    document.getElementById("copy").style.display = "block";

    // show new buttons and hide original button
    document.querySelector('#new_buttons').style.display = 'block';
    document.querySelector('#go_button').style.display = 'none';

    return false;

}


// to focus and change focus on inputs after typing
const emoji1 = document.querySelector('#emoji1');
const emoji2 = document.querySelector('#emoji2');
const emoji3 = document.querySelector('#emoji3');

emoji1.focus();
emoji1.click();
emoji1.addEventListener("input", function() { 
    emoji2.focus();
});
emoji2.addEventListener('input', function() {
    emoji3.focus();
});
emoji3.addEventListener('input', makeComment);
