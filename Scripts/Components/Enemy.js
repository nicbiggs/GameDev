
//Work on this...
//------------------------------------------------------------------
//
// Defines an enemy.  'spec' is defined as:
//	{
//		center: {x, y},
//		direction:  {x, y},
//		radius: ,
//		img: Texture,
//		bullet: {
//			rotation: ,
//			center: {x, y},
//			(add more later)
//		}
//		patternType: (1,2,3, or 4)
//	}
//
//------------------------------------------------------------------
Game.components.Enemy = function(spec){
	//Inherits entity info
	var entity = Game.components.Entity(spec);

	//Temporary, adds a single bullet (I believe)
	//var bullet = Game.components.Bullet(spec);

	/*Here I want to try to generate a pattern for the bullets (and enemies) to follow
	* but the question is, do I make an object for it like this?
	* What about making several pattern objects and then using the fire()
	* to just add that sequenced pattern to the array of enemy bullets?
	*/
	//var bulletPattern = Game.components.EnemyBulletPattern(spec);
	//var movePattern = Game.components.EnemyMovePattern(spec);

	var that = {};


	that.fire = function(enemyBullets){
		//generates bullets in a pattern to add to the array of enemy bullets
		enemyBullets.push(bullet);
		//Or even, enemyBullets.push(that.bullet.pattern.generate())
		//Or that.bullet.pattern.generate(enemyBullets)
	}


	that.update = function(elapsedTime){
		//Needs to use the pattern to update how the entity moves, like:
		/*
					movePattern.update(elapsedTime, entity);
		*/
		entity.update(elapsedTime);

		//Add bullet generation stuff using pattern if possible

	}

	return that;

}