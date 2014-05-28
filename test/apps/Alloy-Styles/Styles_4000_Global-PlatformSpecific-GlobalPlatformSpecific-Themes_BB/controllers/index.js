$.labelView.text = 'Label width: ' + $.view.width;


if (ENV_DEV){
	alert('Development')
}

else if (ENV_TEST){
	alert('Test')
}

else if (ENV_PRODUCTION){
	alert('Production')
}

else {
	alert('No ENV found')
}



$.index.open();