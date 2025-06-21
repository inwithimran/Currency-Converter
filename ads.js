;(function(){
  
	var icon = '<div class="sg"><img src="imran.gif"></div>';

	document.head.insertAdjacentHTML('beforeend','<style>.sg img{ width: 60px; height: 60px; position: fixed; bottom: 15px; right: 25px; } .sg .eye { -webkit-transform: translateX(0px);   transform: translateX(0px); } .sg:hover .eye { -webkit-transition: -webkit-transform 0.3s ease; transition: -webkit-transform 0.3s ease; transition: transform 0.3s ease; transition: transform 0.3s ease, -webkit-transform 0.3s ease; -webkit-transform: translateX(12px);   transform: translateX(12px); }</style>'); 
  
	var a = document.createElement('a');
	a.setAttribute('href','https://www.facebook.com/In.With.Imran');
	a.setAttribute('target','_blank');
	a.innerHTML = icon;
    
 	document.body.appendChild(a);
})();
