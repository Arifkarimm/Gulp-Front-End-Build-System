function User(thisName, thisEmail){
      this.name = thisName;
      this.email = thisEmail;
      this.quizScores = [];
      this.currentScore = 0;
}

// Overwritting protorype porperty
User.prototype = {

  constructor: User,
  saveScore: function(theScoreToAdd){
    //array push function
    this.quizScores.push(theScoreToAdd)
  },

  showNameAndScore: function(){
    // termary operator and join function in array
    var scores = this.quizScores.length > 0 ? this.quizScores.join(","): "No Score Yet";
    return this.name + "your email ID is " +this.email+ " and your Scores is: " +scores
  },

  ChangeEmail: function(newEmail){
    this.email = newEmail;
    return "New Email Saved: " + this.email;
  }

}



//first user
var firstUser = new User("Arif", "karim@gmail.com")

firstUser.saveScore(15);
firstUser.saveScore(10);
console.log(firstUser.ChangeEmail("arif@gmail.com"));
console.log(firstUser.showNameAndScore());


//second user
var secondUser = new User("karim", "hello@gamil.com");

secondUser.saveScore(20);
secondUser.saveScore(25);
console.log(secondUser.ChangeEmail("hi@gmail.com"));
console.log(secondUser.showNameAndScore());
