# UdaciCards - Mobile FlashCards

## Project Setup

- Clone the repo from the following link:

```
https://github.com/alainmateso/ReactND-UdaciCards
```

- Navigate to the directory where the project is cloned

- Install dependencies with the following command:

```
yarn install
```

or

```
npm install
```

- Start the project with the following command:

```
yarn start
```

or

```
npm start
```

## How it works

When you open the app for the first time it'll tell you that you have no decks yet! Go ahead a create your decks for the cards you'll create as well.

- Creating a deck is super easy. Just press the `Create Deck` tab and just fill in the prdesired deck's name and you'll be redirected to that newly created deck.

Notice that if you don't fill the texp input and try to submit, you'll get an alert that you shoul fill the name.

After creating a deck now go ahead and add cards.

- Adding cards to a deck is also very simple. Upon taping on the deck you'll be presented with the deck's details such as its name the number of cards in that specific deck, a button to add a card and another button to start a quiz.

Notice that you cannot start a quiz if the deck is still empty. Add cards by tapping the Add Card button then fill in your Question and Answer! The app will reject you if you try to submit while one of the fields is empty.

You can Go ahead and start a quiz now.

- When you tap on start quiz, you'll be redirected to the screen that shows the created question and a text to tap on when you want to flip the card and see the answer.
  Fliping the card comes with the answer and two buttons for you to choose if the answer is correct or incorrect.

As you answer question there's a counter in the top left corner that shows the questions you've answered so far and the total number of questions in that specific deck.
Upon answering the last question you'll be shown your score and an equivalent percenage.

If you're not satisfied, you can retake the quiz. Other than that you can also reset it.

The app will send a notification at 10AM if no decks have been created on that day.

### The app has been tested on an Android device running Android 10

## Enjoy Your Flashing Cards 🚀
