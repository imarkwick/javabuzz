describe ('Javabuzz', function() {


	var javabuzz

	beforeEach (function() {
		javabuzz = new Javabuzz();
	});

	describe ('knows when a number is', function() {

		it('divisible by three', function() {
			expect(javabuzz.isDivisibleByThree(3)).toEqual(true)
		});

		it('divisible by five', function() {
			expect(javabuzz.isDivisibleByFive(5)).toEqual(true)
		});

		it('divisible by fifteen', function() {
			expect(javabuzz.isDivisibleByFifteen(15)).toEqual(true)
		});
	});

	describe ('knows when a number is NOT', function() {

		it('divisible by three', function() {
			expect(javabuzz.isDivisibleByThree(1)).toEqual(false)
		});

		it('divisible by five', function() {
			expect(javabuzz.isDivisibleByFive(1)).toEqual(false)
		});

		it('divisible by fifteen', function() {
			expect(javabuzz.isDivisibleByFifteen(1)).toEqual(false)
		});
	});

	describe ('when playing, says', function() {

		it('"Java" when divisible by three', function() {
			expect(javabuzz.says(3)).toEqual("Java")
		});

		it('"Buzz" when divisible by five', function() {
			expect(javabuzz.says(5)).toEqual("Buzz")
		});

		it('"Javabuzz" when divisible by fifteen', function() {
			expect(javabuzz.says(15)).toEqual("Javabuzz")
		});

		it('returns the number if none of the above', function() {
			expect(javabuzz.says(1)).toEqual(1)
		});
	});
});







