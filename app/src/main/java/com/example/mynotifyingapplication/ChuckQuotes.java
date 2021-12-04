package com.example.mynotifyingapplication;

public class ChuckQuotes {

    private static final String [] quotes = new String[] {
                "Chuck Norris breathes air … five times a day",
                "Chuck Norris’ tears cure cancer. Too bad he has never cried.",
                "The chief export of Chuck Norris is pain.",
                "Chuck Norris can dribble a bowling ball.",
                "Chuck Norris drinks napalm to fight his heartburn."};


    public static String getRandomQuote (){
        int numberOfQuotes = quotes.length;
        int randomNumber = (int)(numberOfQuotes*Math.random());
        return quotes[randomNumber];
    }
}
