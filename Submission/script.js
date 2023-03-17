/**
 *
 * @param {string} msg - The value typed into the chatbot: For example: "Katie"
 * @returns {string} The text that will be used as the bot reply and shown to the user. For example: "Hello Katie, do you take milk in your tea?"
 *
 */

let level = 1;
let rememberedName = "";

const getBotReply = (msg) => {
  

  

  if (msg === "reset") {
    level = 1
    return "Hi, human ... what's your name?";
  }
  if (level === 1) {
    level = 2
    rememberedName = msg;
    return `Nice to meet you ${rememberedName}! Are you looking for a vegan or a regular option?`;
   }
  if (level === 2) {
    level = 3;
    if (msg === "vegan") {
    
      
      return "Awesome! Welcome to our veggie corner. The best option we have is salad or wrap. Which do you prefer?";
    }
    if (msg === "regular") {
     
    return "Nice! We have variations for this. Hit 1 for Option 1: Comfort Food and hit 2 for Option 2: Seafood. Which do you prefer?";
    }
  }

  if(level === 3) {
    level = 4; 
    if (msg === "salad") {
      
      return "That's great! I got 2 options for you. Hit 1a for Paleo Active Salad or Hit 2a for Raw Lean 'n' Green Salad";
    }
    if (msg === "wrap") {
    
      return "Cool! This recipe is so delicious and easy to prepare. Quinoa Goji Tofu Wrap Ingredients: Pita wrap, tofu, quinoa, pickled onion, cranberries, goji berries, field greens, pomegranate + orange dressing.";
    } 

    if (msg === "1") {
    
      return "Beer Battered Fish Ingredients FOR THE FISH: cornstarch, kosher salt, groundblack pepper, all-purpose flour, baking powder, paprika, Vegetable oil for frying 3 lb. 1-inch thick skinless cod filets, lemon wedges for serving, Malt vinegar for serving FOR THE TARTAR SAUCE: mayonnaise, dill, pickle relish, lemon zest, lemon juice, chopped fresh dill, kosher salt, ground black pepper.";
    }
    if (msg === "2") {
      
      return "There are two options for the Seafood corner: 1b - Paella mixta or 2b - One-pan seafood roast with smoky garlic butter";
    }
    
  }
  if (level === 4) {
    
    if (msg === "1a") {
      
      return "Paleo Active Greens Salad Ingredients: Shredded beetroot, carrot, toasted maple nut mix, avocado, red cabbage, cucumber, field greens, balsamic dressing.";
    }
    if (msg === "2a") {
      
      return "Raw Lean 'n' Green Salad Ingredients: Carrot, charred corn, shredded beetroot, red cabbage, orange zest, toasted maple nut mix, black sesame seeds, field greens, pomegranate + orange dressing.";
    }
    if (msg === "1b") {
      
      return "Paella mixta Ingredients: chopped tomatoes, chicken stock, smoked paprika, saffron, onion, chopped garlic cloves, crushed or finely chopped, olive oil, paella rice, skinless, boneless chicken thighs, cut in half chorizo, sliced frozen peas, raw king prawns, mussels, lemon.";
    }
    if (msg === "2b") {
    
      return "One-pan seafood roast with smoky garlic butter Ingredients: Baby potatoes, olive or rapeseed oil, corn cobs, prawns, heads and shells on mussels or large clams, medium squids with tentacles, butter, parsley, smoked paprika, garlic cloves, lemon, ring chorizo.";
    }
  }
  else {
    return "You entered an invalid input type 'reset'";
}
}   
    
  
  
export { getBotReply };
