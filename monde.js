<script>
	function insert(num){
		document.mond.km.value=document.mond.km.value+num;
	}
	
	function equal(){
		var exp=document.mond.km.value;
		if (exp){
		document.mond.km.value=eval(exp);
		}
	}
	
	function clean(){
	document.mond.km.value="";
	}
	
	function back(){
	var exp=document.mond.km.value;
	document.mond.km.value=exp.substring;
	}
	</script>
