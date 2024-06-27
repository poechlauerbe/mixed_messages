// When adding a quote also add the author in the array below - if author is unknown just add "Unknown" as author
message = ["Do not follow where the path may lead. Go instead where there is no path and leave a trail.", "The very essence of leadership is that you have to have vision. You can't blow an uncertain trumpet.", "You gain strength, courage and confidence by every experience in which you really stop to look fear in the face. You must do the thing you think you cannot do.", "A good objective of leadership is to help those who are doing poorly to do well and to help those who are doing well to do even better.", "It is not the strongest of the species that survive, nor the most intelligent, but the one most responsive to change.", "A great person attracts great people and knows how to hold them together.", "If your actions inspire others to dream more, learn more, do more and become more, you are a leader.", "A leader takes people where they want to go. A great leader takes people where they don't necessarily want to go, but ought to be.", "Before you are a leader, success is all about growing yourself. When you become a leader, success is all about growing others.", "No man will make a great leader who wants to do it all himself, or to get all the credit for doing it.", "The pessimist complains about the wind. The optimist expects it to change. The leader adjusts the sails.", "Leadership and learning are indispensable to each other.", "A good leader takes a little more than his share of the blame, a little less than his share of the credit.", "If you spend too much time thinking about a thing, you'll never get it done."];

author = ["Ralph Waldo Emerson", "Theodore M. Hesburgh", "Eleanor Roosevelt", "Jim Rohn", "Charles Darwin", "Johann Wolfgang Von Goethe", "John Quincy Adams", "Rosalynn Carter", "Jack Welch", "Andrew Carnegie", "John Maxwell", "John F. Kennedy", "Arnold Glasow", "Bruce Lee"];

suggestion = ["How can you apply this principle in your team's next project?", "Consider how you can lead by example in your daily interactions.", "Reflect on a recent challenge and think about how this quote could have guided your response.", "Think about a leader you admire and how they embody this quote.", "What steps can you take today to put this idea into practice?", "Discuss with your team how this quote can inspire your current goals.", "Identify an area where you can improve based on this insight.", "Share this quote with a colleague and ask for their perspective.", "Challenge yourself to live by this quote for the next week.", "Create a personal action plan that incorporates this leadership principle."]

function numberGenerator(len)
{
	return Math.floor(Math.random() * len);
}

function addQuotes()
{
	return '"';
}

function createRandomQuote()
{
	let randomMessage = addQuotes();
	let rdm = numberGenerator(message.length);

	randomMessage += message[rdm];
	randomMessage += addQuotes();
	randomMessage += ' by ';
	randomMessage += author[rdm];
	randomMessage += "\n\n";
	randomMessage += suggestion[numberGenerator(suggestion.length)];
	return randomMessage;

}

function printMessage()
{
	console.log(createRandomQuote());

}

printMessage();