class Cellpie {
	constructor() {
		this.Jake = $("#ForDiv");
		this.Bob = $("#ForDiv2");
		this.lust_boy = 0;
	}
	s_b_e(qwe) {
		var self = this;
		self.Jake.children("button").on("click", function() {
   			if ($(this).val() == self.lust_boy + 1) {
   				$(this).addClass('gn');
				self.lust_boy++;
				if ($(this).val() == qwe) {
					self.Jake.addClass('blu');
					self.Bob.append(`<button class="Win">You Won!</button>`);
					self.Bob.removeClass('hidden');
					self.Bob.children().on("click", function() {
						$(this).remove();
						self.Bob.addClass('hidden');
						self.Jake.removeClass('blu');
						self.Jake.children().removeClass('gn');
					});
				self.lust_boy = 0;
				}
			}
			else {
				self.Jake.addClass('blu');
				self.Bob.append(`<button class="Lose">You Lose!</button>`);
				self.Bob.removeClass('hidden');
				self.Bob.children().on("click", function() {
					$(this).remove();
					self.Bob.addClass('hidden');
					self.Jake.removeClass('blu');
					self.Jake.children().removeClass('gn');
				});
				self.lust_boy = 0;
			}
		});
		
	}
	generateABOBUS(qwerty) {
		this.Jake.children().remove();
		this.Jake.css("grid-template-rows", `repeat(${Math.sqrt(qwerty+1)}, 1fr)`);
		this.Jake.css("grid-template-columns", `repeat(${Math.sqrt(qwerty+1)}, 1fr)`);

		let arr = [];
		for (var i = 0; i < qwerty; i++) {
			arr[i] = i + 1;
		}
		const shuffledArray = arr.sort((a, b) => 0.5 - Math.random());
		for (var i = 0; i < qwerty; i++) {
			this.Jake.append(`<button class="But" value="${shuffledArray[i]}">${shuffledArray[i]}</button>`);
		}
		this.Jake.children().eq(qwerty/2 -1).after('<img src="visibility.png">');
		this.Jake.removeClass('hidden');
		this.s_b_e(qwerty);
	}
	loh() {
		switch($("#Mode input[type='radio']:checked").val()) {
			case "easy":
				this.generateABOBUS(8);
				break;
			case "hard":
				this.generateABOBUS(24);
				break;
			case "very easy":
				this.generateABOBUS(48);
				break;
		}
	}
}
