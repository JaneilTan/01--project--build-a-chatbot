# Chatbot

## Problem statement

Create a program that walks the user through an interaction with a chatbot about which meal to pick. Use the following decision tree to build the system.

The chatbot needs to ask a question, and the user will answer the question. Then the chatbot needs to ask another question based on the users previous answer.

## Inputs, processes and outputs

Inputs: message
Processes: determine the correct answer based on the message and previous inputs
Output: the next question or to answer the existing question

## Test scenarios

Start: "Hi human ... What is your name?"
Input: (name)
Output: "Nice to meet you, (name)! Are you looking for a vegan or a regular option?"
Input: "vegan"
Output: "Awesome! Welcome to our veggie corner. The best option we have is salad or wrap. Which do you prefer?"
Input: "salad"
Output: "That's great! I got 2 options for you. Hit 1 for Paleo Active Salad or Hit 2 for Raw Lean 'n' Green Salad"
Input: "1"
Output: "Paleo Active Greens Salad Ingredients: Shredded beetroot, carrot, toasted maple nut mix, avocado, red cabbage, cucumber, field greens, balsamic dressing."

Input: (name)
Output: "Nice to meet you, (name)! Are you looking for a vegan or a regular option?"
Input: "vegan"
Output: "Awesome! Welcome to our veggie corner. The best option we have is salad or wrap. Which do you prefer?"
Input: "salad"
Output: "That's great! I got 2 options for you. Hit 1 for Paleo Active Salad or Hit 2 for Raw Lean 'n' Green Salad"
Input: "2"
Output: "Raw Lean 'n' Green Salad Ingredients: Carrot, charred corn, shredded beetroot, red cabbage, orange zest, toasted maple nut mix, black sesame seeds, field greens, pomegranate + orange dressing."

Input: (name)
Output: "Nice to meet you, (name)! Are you looking for a vegan or a regular option?"
Input: "vegan"
Output: "Awesome! Welcome to our veggie corner. The best option we have is salad or wrap. Which do you prefer?"
Input: "wrap"
Output: "Cool! This recipe is so delicious and easy to prepare. Quinoa Goji Tofu Wrap Ingredients: Pita wrap, tofu, quinoa, pickled onion, cranberries, goji berries, field greens, pomegranate + orange dressing.

Input: (name)
Output: "Nice to meet you, (name)! Are you looking for a vegan or a regular option?"
Input: "regular"
Output: "Nice! We have variations for this. Hit 1 for Option 1: Comfort Food and hit 2 for Option 2: Seafood. Which do you prefer?"
Input: "1"
Output: "Beer Battered Fish Ingredients FOR THE FISH: cornstarch, kosher salt, groundblack pepper, all-purpose flour, baking powder, paprika, Vegetable oil for frying
3 lb. 1-inch thick skinless cod filets, lemon wedges for serving, Malt vinegar for serving
FOR THE TARTAR SAUCE: mayonnaise, dill, pickle relish, lemon zest, lemon juice, chopped fresh dill, kosher salt, ground black pepper."

Input: (name)
Output: "Nice to meet you, (name)! Are you looking for a vegan or a regular option?"
Input: "regular"
Output: "Nice! We have variations for this. Hit 1 for Option 1: Comfort Food and hit 2 for Option 2: Seafood. Which do you prefer?"
Input: "2"
Output: "There are two options for the Seafood corner: 1 - Paella mixta or 2 - One-pan seafood roast with smoky garlic butter"
Input: "1"
Output: "Paella mixta Ingredients: chopped tomatoes, chicken stock, smoked paprika, saffron, onion, chopped garlic cloves, crushed or finely chopped, olive oil, paella rice, skinless, boneless chicken thighs, cut in half chorizo, sliced frozen peas, raw king prawns, mussels, lemon."

Input: (name)
Output: "Nice to meet you, (name)! Are you looking for a vegan or a regular option?"
Input: "regular"
Output: "Nice! We have variations for this. Hit 1 for Option 1: Comfort Food and hit 2 for Option 2: Seafood. Which do you prefer?"
Input: "2"
Output: "There are two options for the Seafood corner: 1 - Paella mixta or 2 - One-pan seafood roast with smoky garlic butter"
Input: "2"
Output: "One-pan seafood roast with smoky garlic butter Ingredients: Baby potatoes,
olive or rapeseed oil, corn cobs, prawns, heads and shells on mussels or large clams, medium squids with tentacles, butter, parsley, smoked paprika, garlic cloves, lemon, ring chorizo."
