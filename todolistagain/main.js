let addbtn = document.querySelector("#addbtn");

//頁面資料操作區
addbtn.addEventListener("click",()=>{
    let addput = document.querySelector("#addput");
    let ullist = document.querySelector(".list_body");

    if(addput.value == ""){
        alert("真的沒事要做嗎?")
        return
    }
    let todolist = {addvalue:addput.value,done:false};
    let totallist=JSON.parse(localStorage.getItem("todolist"))||[];
    totallist.push(todolist);
    localStorage.setItem("todolist",JSON.stringify(totallist));
    ullist.innerHTML="";
    totallist.forEach((item,i) => {
        ullist.innerHTML += `<li class="list_inbody">
                                <div>
                                    <p class="${totallist[i].done? 'done':''}">${item.addvalue}</p>
                                    <button class="complete">完成</button>
                                    <button class="del">刪除</button>
                                </div>
                            </li>`;
    });

    let byenewcol = document.querySelectorAll(".list_inbody");
    let nl = byenewcol.length-1;
    byenewcol[nl].style.animation = "add 0.3s forwards";
    addput.value = "";

    let complete = document.querySelectorAll(".complete");
    for(let i =0;i<complete.length;i++){
        if(totallist[i].done == true){
            complete[i].parentElement.children[0].classList.add("done")
        }
        complete[i].addEventListener("click",e =>{
            totallist=JSON.parse(localStorage.getItem("todolist"));
            let listdone = e.target.parentElement;
            listdone.children[0].classList.toggle("done");
            if(totallist[i].done == true){
                totallist[i].done = false
            }else{
                totallist[i].done = true
            }
            localStorage.setItem("todolist",JSON.stringify(totallist));
        })
    }
  
    let del = document.querySelectorAll(".del");
    for(let i =0;i<totallist.length;i++){
        del[i].addEventListener("click",e =>{
            let listdel = e.target.parentElement.parentElement;
            let listdel2 = e.target.parentElement.children[0].innerText;
            listdel.style.animation = "del 0.3s forwards";
            totallist.forEach((item,i)=>{
                if(item.addvalue == listdel2){
                    setTimeout(() => {
                        listdel.remove();
                        totallist.splice(i,1);
                        localStorage.setItem("todolist",JSON.stringify(totallist));
                    }, 300);
                }
            })
        })
    }
    
});

//本地資料操作區
locallist();
function locallist(){
    let totallist = JSON.parse(localStorage.getItem("todolist"))||[];
    let ullist = document.querySelector(".list_body");
    totallist.forEach((item,i) => {
        ullist.innerHTML += `<li class="list_inbody">
                                <div>
                                    <p class="${totallist[i].done? 'done':''}">${item.addvalue}</p>
                                    <button class="complete">完成</button>
                                    <button class="del">刪除</button>
                                </div>
                            </li>`;
    });

    let complete = document.querySelectorAll(".complete");
    for(let i =0;i<complete.length;i++){
        if(totallist[i].done == true){
            complete[i].parentElement.children[0].classList.add("done")
        }
        complete[i].addEventListener("click",e =>{
            let listdone = e.target.parentElement;
            listdone.children[0].classList.toggle("done");
            if(totallist[i].done == true){
                totallist[i].done = false
            }else{
                totallist[i].done = true
            }
            localStorage.setItem("todolist",JSON.stringify(totallist));
        })
    }

    let del = document.querySelectorAll(".del");
    for(let i =0;i<del.length;i++){
        del[i].addEventListener("click",e =>{
            // let listdel = e.target.parentElement;
            let listdel = e.target.parentElement.parentElement;
            let listdel2 = e.target.parentElement.children[0].innerText;
            listdel.style.animation = "del 0.3s forwards";
            totallist.forEach((item,i)=>{
                if(item.addvalue == listdel2){
                    setTimeout(() => {
                        listdel.remove();
                        totallist.splice(i,1);
                        localStorage.setItem("todolist",JSON.stringify(totallist));
                    }, 300);
                }
            })
        })
    }
}















