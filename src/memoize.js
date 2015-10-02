export {
	memoize
};




function memoize(func) {
	var cache = {};
	var checkCache = function() {
		var index = "";
		for (var i = 0; i < arguments.length; i++) {
			index += " " + arguments[i] + "-" + {}.toString.call(arguments[i]);
		}
		if (index in cache) {
			return cache[index];

		} else {
			cache[index] = func.apply(this, arguments);
			return cache[index];
		}

	};
	return checkCache;
}