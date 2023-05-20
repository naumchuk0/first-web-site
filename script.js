function changeBackGround() {
	$("#changeBG").addClass('hidden');
	$("#resetBG").removeClass('hidden');
	$("#divP").css({
		"background": '#303030'
	});
	$("body").css({
		"background": 'salmon'
	});
	$('.But').css({
		"background": '#303030'
	});
}
function resetBackGround() {
	$("#changeBG").removeClass('hidden');
	$("#resetBG").addClass('hidden');
	$("#divP").css({
		"background": 'salmon'
	});
	$("body").css({
		"background": '#303030'
	});
	$('.But').css({
		"background": 'salmon'
	});
}
class Por {
	constructor() {
		this.Tim = $("#divP");
	}
	getTime() {
		var self = this;
		self.today = new Date();
		self.time = self.today.getHours() + ":" + self.today.getMinutes();
		self.Tim.children('label').remove();
		self.Tim.append(`<label id="Timer">${self.time}</label>`);
	}
}