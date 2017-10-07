const pow = function(base, power){
    if(power != 1){
      return base * pow(base, power-1);
  } else {
    return base;
  }
};
  console.log(pow(15,15));

  const reverse = function(string) {
	const f = function(string, index) {
		if(index === 1 ) {
			return string[0];
                }
                if(string === "") {
		return "";
                }
		return string[index-1] + f(string, index-1);

	};
	return f(string, string.length);
};
    console.log(reverse('abcdef'));

    const triangleStars = function(x) {
    	const a = function(star,space){
    		const b = function(n, s) {
    			if( n === 0 ) {
    				return "";
                    }
    			if( n === 1) {
    				return s;
                    }
    			return s + b(n-1,s);
    		};

    		if(star === 1) {
    			return b(space, " ") + "*" + b(space, " ");
                    }
    		return b(space, " ") + b(star, "*") + b(space, " ") + "\n" + a(star-2,space+1);
    	};
      if(x <= 0) {
    	  return "";
    }
      return a(2*x-1, 0);
    };

    console.log(triangleStars(4));

    const checkerboard = function(size) {
	const f = function(size, m) {
	      if(size === 0) {
                 return "";
        }
	      if(m === 0) {
		 return " *" + f(size - 1, m);
        }
	return "* " + f(size - 1, m);
};
        const g = function(size, line) {
	      if(line > size ) {
		 return "";
        }
	return f(size, line % 2) + "\n" + g(size, line + 1);
};
              if(size <= 0) {
                 return "";
}
	return g(size, 1);
};

console.log(checkerboard(15));
