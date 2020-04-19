let n = 1;
getPage.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("get", `/page${n + 1}.json`);
  request.onreadystatechange = () => {
    if (request.readyState === 4 && request.status === 200) {
      const array = JSON.parse(request.response);
      array.forEach((item) => {
        const li = document.createElement("li");
        li.textContent = item.id;
        xxx.appendChild(li);
      });
      n += 1;
    }
  };
  request.send();
};

getJSON.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("get", "/2.json");
  request.onreadystatechange = () => {
    if (request.readyState === 4 && request.status === 200) {
      //   console.log(request.response);
      const object = JSON.parse(request.response); //把字符串变成对象
      //   console.log(object);
      myName.textContent = object.name;
    }
  };
  request.send();
};
getXML.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "/1.xml");
  request.onreadystatechange = () => {
    console.log(request.readyState);
    if (request.readyState === 4) {
      if (request.status >= 200 && request.status < 300) {
        const dom = request.responseXML; //request.responseXML是一个对象
        const text = dom.getElementsByTagName("warning")[0].textContent;
        console.log(text.trim());
      } else {
        alert("加载XML失败");
      }
    }
  };
  request.send();
};
getHTML.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("get", "/index2.html");
  request.onload = () => {
    console.log(request.response);
    //创建div标签
    const div = document.createElement("div");
    //div标签内容
    div.innerHTML = request.response;
    //插入的位置
    document.body.appendChild(div);
  };
  request.onerror = () => {
    console.log("请求失败");
  };
  request.send();
};
getJS.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("get", "/main2.js");
  request.onload = () => {
    console.log(request.response);
    console.log("成功了");
    //创建script标签
    const script = document.createElement("script");
    //填写script内容
    script.innerHTML = request.response;
    //插入的部位
    document.body.appendChild(script);
  };
  request.onerror = () => {
    console.log("失败了");
  };
  request.send();
};
getCSS.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "/style.css");
  request.onreadystatechange = () => {
    // console.log(request.readyState);
    if (request.readyState === 4) {
      if (request.status >= 200 && request.status < 300) {
        //创建style标签
        const style = document.createElement("style");
        //填写style内容
        style.innerHTML = request.response;
        //插入的位置
        document.head.appendChild(style);
      } else {
        alert("加载CSS失败");
      }
    }
  };
  request.send();
};
