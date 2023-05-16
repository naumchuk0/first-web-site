$("#changeBackgroundSal").on('click', function() {
	$("#changeBackgroundBla").removeClass('hidden');
	$(this).addClass('hidden');
	$("body").addClass('bodyBackground');
	$("#But").css({
		"background": 'salmon'
	});
	$("#labelGreen").css({
		"background": 'salmon'
	});
	$("#labelRed").css({
		"background": 'salmon'
	});
	$("#res").css({
		"background": 'salmon'
	});
	$("#OK").css({
		"background": 'salmon'
	});
});
$("#changeBackgroundBla").on('click', function() {
	$(this).addClass('hidden');
	$("#changeBackgroundSal").removeClass('hidden');
	$("body").removeClass('bodyBackground');
	$("#But").css({
		"background": '#303030'
	});
	$("#labelGreen").css({
		"background": '#303030'
	});
	$("#labelRed").css({
		"background": '#303030'
	});
	$("#res").css({
		"background": '#303030'
	});
	$("#OK").css({
		"background": '#303030'
	});
});
class Popa {
	constructor() {
		this.Jake = $("#divForWords");
		this.Clown = $("#divResult");
		this.arr = ["word", "wanna", "want", "run", "this",
		 "const", "Popa", "Generate", "Back", "ready", "hide",
		  "Start", "The","milkman","brought","donuts","cheese","along","with",
		  "batch", "sit", "visible", "let", "var", "is", "a", "return", "for", "function", "file", "Folder", "Find", "selection", "selecte", "some", "same", "any", "anybody", "somebody", "nobody", "together", "Help", "View", "Goto", "Text", "Sublime", "Notepad", "Notepad++", "JavaScript", "Style", "button", "body", "list", "event", "Hello", "Hi", "link", "href", "often", "How", "who", "We", "type", "android", "new", "now", "know", "understand", "literature", "Math", "Lion", "take", "get", "got" ,"host","display", "lot", "design", "local", "Ukraine", "homeless", "bundle", "lineup", "red", "read", "top", "bot", "bit", "Clown", "Maksum", "Naumchuk" ,"milk","and","a","bottle","of","whiskey","to","houses", "check", "checked", "slider", "width", "height", "debug", "try", "engine"];
		this.rw = this.generateRandomWords(10);
		this.indexs = 0;
		this.count = 0;
		this.wrongW = 0;
		this.timeleft =  60;
	}
	generateRandomWords(tolkovo) {
		var arr = [];
		for (let i = 0; i < tolkovo; i++) {
			arr.push(this.arr.at(Math.floor(Math.random() * this.arr.length)));
		}
		return arr;
	}
	generateWords() {
		this.Jake.children("p").remove();
		for (var i = 0; i < this.rw.length; i++) {
			this.Jake.append(`<p class="colors">${this.rw[i]} </p>`);
		}
	}
	result() {
		var self = this;
		self.Clown.removeClass("hidden");
		self.Clown.append(`<label id="res">Result</label>`);
		self.Clown.append(`<p id="WPM">${self.count} WPM</p>`);
		if (self.count - self.wrongW < 0) {
			self.Clown.append(`<label id="labelGreen">Correct words : 0 </label>`);
		}
		else {
			self.Clown.append(`<label id="labelGreen">Correct words : ${self.count - self.wrongW}</label>`);
		}
		self.Clown.append(`<label id="labelRed">Wrong words : ${self.wrongW}</label>`);
		self.Clown.append(`<lable id="OK">OK</lable>`);
		$("#div").addClass("blu");
		self.Jake.children("p").css({
			"background": 'none'
		});
		$("#OK").on('click', function() {
		self.Clown.addClass("hidden");
		$("#div").removeClass("blu");
			self.Clown.children().remove();
		});
		self.indexs = 0;
		self.count = 0;
		self.wrongW = 0;
		self.timeleft = 60;
		self.fin();
		self.Jake.children("p").eq(self.indexs).css({
			"background": 'gray'
		});
	}
	fin() {
		var self = this;
		self.Jake.children().remove();
		self.rw = self.generateRandomWords(10);
		self.generateWords();
		self.indexs = 0;
	}
	acceptWord() {
		var self = this;
		self.indexs = 0;
		self.count = 0;
		self.Jake.children("p").eq(self.indexs).css({
			"background": 'gray'
		});
		$("#txt").on('click', function() {
			self.timer = setInterval(function(){
			self.timeleft--;
			document.getElementById("timer").innerHTML = self.timeleft;
			}, 1000);
			setTimeout(() => {self.result(); clearInterval(self.timer);}, 60000);
		});
		$("#txt").on("keydown", function(event) {
			if (event.which == 13) {
				self.Jake.children("p").css({
						"background": 'none'
					});
				if ($(this).val() == self.rw.at(self.indexs)) {
					self.Jake.children("p").eq(self.indexs).css({
						"color": 'snow'
					});
					$(this).val("");
					self.indexs++;
					self.count++;
					if (self.indexs == self.rw.length) {
						self.fin();
					}
					self.Jake.children("p").eq(self.indexs).css({
						"background": 'gray'
					});
				}
				else {
					self.Jake.children("p").eq(self.indexs).css({
						"background": 'gray'
					});
					self.Jake.children("p").eq(self.indexs).css({
						"color": 'red'
					});
					self.wrongW++;
				}
			}
		});
	}
	loh() {
		this.generateWords();
		this.acceptWord();
		this.Jake.removeClass('hidden');
	}
}