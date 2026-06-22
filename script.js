function searchChats() {

let input =
document.getElementById("searchBox")
.value.toLowerCase();

let chats =
document.getElementsByClassName("chat");

for(let i=0;i<chats.length;i++){

let name =
chats[i].getElementsByTagName("h4")[0]
.innerText.toLowerCase();

if(name.includes(input)){
chats[i].style.display="block";
}
else{
chats[i].style.display="none";
}
}
}

function showUnread(){

let chats =
document.getElementsByClassName("chat");

for(let i=0;i<chats.length;i++){

if(chats[i].classList.contains("unread")){
chats[i].style.display="block";
}
else{
chats[i].style.display="none";
}
}
}
