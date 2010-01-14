$.fn.emoji = function() {
	return this.each(function(){
		$(this).html(
			$(this).html().replace(/([\ue001-\ue537])/g, $.fn.emoji.replacer)
		);
	});
};

$.fn.emoji.replacer = function (str, p1) {
	return p1.charCodeAt(0).toString(16).toUpperCase().replace(
		/^([\da-f]+)$/i,
		'<img src="/emoji/emoji-$1.png" alt="emoji" />'
	);
}