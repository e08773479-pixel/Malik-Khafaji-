window.MalakAPI={request(path,options={}){return fetch(path,{...options,credentials:'include',headers:{Accept:'application/json','Content-Type':'application/json',...(options.headers||{})}})}};
