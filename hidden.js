// $(".text-input-widget .highlight-inactive input").setAttribute('type','password')
// $('#notebook-input-widget-panel').on('DOMNodeInserted', 'input', function () {
//       alert('select loaded'); 
// });
function checkDOMChange()
{	
	$(".text-input-widget .highlight-inactive input").attr('type','password'); 		
	setTimeout( checkDOMChange, 200 );
}
checkDOMChange()

// setTimeout(
//   function() 
//   {
//    $(".text-input-widget .highlight-inactive input").attr('type','password'); 	

//   }, 5000);

// checkDOMChange()

// setTimeout(
//   function() 
//   {
//     $(".text-input-widget .highlight-inactive input").attr('type','password')
//   }, 1000);

// console.log('test')

