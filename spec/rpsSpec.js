describe('Rock Paper Scissors', function(){

	describe('What beats what', function (){

		it('rock beats scissors', function(){
			player1 = new Player();
			player2 = new Player();
			game = new Game();
			player1.chooses('rock');
			player2.chooses('scissors');
			expect(game.winner).toBe(player1);

		});
	});
});