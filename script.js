function opengame() {
	var win = window.open()   
	var url = "https://putnamcityschools.github.io/mathpunchgithub.io/" 
	var iframe = win.document.createElement('iframe')
	iframe.style.width = "100%";
	iframe.style.height = "100%";
	iframe.src = url;
	win.document.body.style.margin = "0"; 
	win.document.body.style.padding = "0"; 
	win.document.body.appendChild(iframe);

 }
