console.log(Array.from(Array.from(document.querySelectorAll("#main div[data-hveid][data-ved] div[data-async-context] div[jscontroller][lang] div[data-snc]")).map((cont)=>{
    const urlElm = cont.querySelector("a[data-ved][jsname][href]:not([href=''])");
    if (urlElm){
        const url = urlElm && urlElm.href.trim() ? urlElm.href.trim() : '';
        let description = cont.querySelector("div[data-snc] div[style^='-webkit-line-clamp']");
        description = (description && description.innerText.trim()) ? description.innerText.trim() : '';
        let title = urlElm.querySelector("div.notranslate div[class] div:not([class]) span");
        title = (title && title.innerText.trim()) ? title.innerText.trim() : '';
        return (title && description && url) ? {title, description, url} : false;
    } else {
        return false;
    }
}).filter((obj)=>{return obj})));
