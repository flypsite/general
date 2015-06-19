// HTML injection in the HEAD section

<script type="text/javascript" src="https://script.ioam.de/iam.js"></script>

// HTML injection in the HEAD or BODY section

<script type="text/javascript">

/****************************************************
getPixel() is called on various flypsite events,
with param values as follows:
- "slide-NN" > slide shown inslideshow
- "comments" > comments area opened, comment sent
- "overlay"  > overlay opened
- "more-messages" > paging triggered
*****************************************************/

function getPixel(param) {
	// console.log(param);
	var iam_data = { 
		"st":"{YOUR OWN SITE ID}",
		"cp":"{YOUR OWN CP-CODE}"
	};
	iom.c(iam_data,1); 
}

// if FlypSite is not embedded, fire an initial pixel request
getPixel("load");
</script>
