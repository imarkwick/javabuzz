describe ('Javabuzz',function() {

	var javabuzz;

	beforeEach(function() {
		javabuzz = new Javabuzz();
	});

	describe('knows when a number is', function() {

		it('divisible by 3', function() {
			expect(javabuzz.isDivisibleByThree(3)).toEqual(true);
		});

		it('divisible by 5', function() {
			expect(javabuzz.isDivisibleByFive(5)).toEqual(true);
		});

		it('divisible by 15', function() {
			expect(javabuzz.isDivisibleByFifteen(15)).toEqual(true);
		});
	});

	describe('knows when a number is NOT', function() {

		it('divisible by 3', function() {
				expect(javabuzz.isDivisibleByThree(1)).toBe(false);
		});
	});

});