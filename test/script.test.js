// Dynamically import modules, so they can be reset between test runs
// https://github.com/facebook/jest/issues/3236
// https://www.npmjs.com/package/babel-plugin-dynamic-import-node
let getBotReply;

beforeEach(() => {
  return import("../Submission/script").then((module) => {
    getBotReply = module.getBotReply;
    jest.resetModules();
  });
});

describe("getBotReply", () => {
  it("should reply with a name and a question]", () => {
  // Input: "Jan"
  const botReply1 = getBotReply("Jan");
  // Output: "Nice to meet you Jan! Are you looking for a vegan or a regular option?"
  const expectedReply1 = "Nice to meet you Jan! Are you looking for a vegan or a regular option?";
  expect(botReply1).toEqual(expectedReply1);
  // Input: "vegan"
  const botReply2 = getBotReply("vegan");
  // Output: "Awesome! Welcome to our veggie corner. The best option we have is salad or wrap. Which do you prefer?"
  const expectedReply2 = "Awesome! Welcome to our veggie corner. The best option we have is salad or wrap. Which do you prefer?";
  expect(botReply2).toEqual(expectedReply2);
  // Input: "salad"
  const botReply3 = getBotReply("salad");
  // Output: "That's great! I got 2 options for you. Hit 1a for Paleo Active Salad or Hit 2a for Raw Lean 'n' Green Salad"
  const expectedReply3 = "That's great! I got 2 options for you. Hit 1a for Paleo Active Salad or Hit 2a for Raw Lean 'n' Green Salad";
  expect(botReply3).toEqual(expectedReply3);
  // Input: "1a"
  const botReply4 = getBotReply("1a");
  // Output: "Paleo Active Greens Salad Ingredients: Shredded beetroot, carrot, toasted maple nut mix, avocado, red cabbage, cucumber, field greens, balsamic dressing."
  const expectedReply4 = "Paleo Active Greens Salad Ingredients: Shredded beetroot, carrot, toasted maple nut mix, avocado, red cabbage, cucumber, field greens, balsamic dressing.";
  expect(botReply4).toEqual(expectedReply4);
  });

  it("should reply with the vegan option 2 question", () => {
   // Input: "name"
   const botReply1 = getBotReply("Jan");
   // Output: "Nice to meet you Jan! Are you looking for a vegan or a regular option?"
   const expectedReply1 = "Nice to meet you Jan! Are you looking for a vegan or a regular option?";
   expect(botReply1).toEqual(expectedReply1);
   // Input: "vegan"
   const botReply2 = getBotReply("vegan");
   // Output: "Awesome! Welcome to our veggie corner. The best option we have is salad or wrap. Which do you prefer?"
   const expectedReply2 = "Awesome! Welcome to our veggie corner. The best option we have is salad or wrap. Which do you prefer?";
   expect(botReply2).toEqual(expectedReply2);
   // Input: "salad"
   const botReply3 = getBotReply("salad");
   // Output: "That's great! I got 2 options for you. Hit 1a for Paleo Active Salad or Hit 2a for Raw Lean 'n' Green Salad"
   const expectedReply3 = "That's great! I got 2 options for you. Hit 1a for Paleo Active Salad or Hit 2a for Raw Lean 'n' Green Salad";
   expect(botReply3).toEqual(expectedReply3);
  // Input: "2a"
  const botReply4 = getBotReply("2a");
  // Output: "Raw Lean 'n' Green Salad Ingredients: Carrot, charred corn, shredded beetroot, red cabbage, orange zest, toasted maple nut mix, black sesame seeds, field greens, pomegranate + orange dressing."
  const expectedReply4 = "Raw Lean 'n' Green Salad Ingredients: Carrot, charred corn, shredded beetroot, red cabbage, orange zest, toasted maple nut mix, black sesame seeds, field greens, pomegranate + orange dressing.";
  expect(botReply4).toEqual(expectedReply4);
  });

  it("should reply with the vegan wrap option", () => {
   // Input: "name"
   const botReply1 = getBotReply("Jan");
   // Output: "Nice to meet you Jan! Are you looking for a vegan or a regular option?"
   const expectedReply1 = "Nice to meet you Jan! Are you looking for a vegan or a regular option?";
   expect(botReply1).toEqual(expectedReply1);
   // Input: "vegan"
   const botReply2 = getBotReply("vegan");
   // Output: "Awesome! Welcome to our veggie corner. The best option we have is salad or wrap. Which do you prefer?"
   const expectedReply2 = "Awesome! Welcome to our veggie corner. The best option we have is salad or wrap. Which do you prefer?";
   expect(botReply2).toEqual(expectedReply2);
   // Input: "wrap"
   const botReply3 = getBotReply("wrap");
   // Output: "Cool! This recipe is so delicious and easy to prepare. Quinoa Goji Tofu Wrap Ingredients: Pita wrap, tofu, quinoa, pickled onion, cranberries, goji berries, field greens, pomegranate + orange dressing."
   const expectedReply3 = "Cool! This recipe is so delicious and easy to prepare. Quinoa Goji Tofu Wrap Ingredients: Pita wrap, tofu, quinoa, pickled onion, cranberries, goji berries, field greens, pomegranate + orange dressing.";
   expect(botReply3).toEqual(expectedReply3);
  });

  it("should reply with the regular option comfort food", () => {
    // Input: "name"
    const botReply1 = getBotReply("Jan");
    // Output: "Nice to meet you Jan! Are you looking for a vegan or a regular option?"
    const expectedReply1 = "Nice to meet you Jan! Are you looking for a vegan or a regular option?";
    expect(botReply1).toEqual(expectedReply1);
    // Input: "regular"
    const botReply2 = getBotReply("regular");
    // Output: "Nice! We have variations for this. Hit 1 for Option 1: Comfort Food and hit 2 for Option 2: Seafood. Which do you prefer?"
    const expectedReply2 = "Nice! We have variations for this. Hit 1 for Option 1: Comfort Food and hit 2 for Option 2: Seafood. Which do you prefer?"
    expect(botReply2).toEqual(expectedReply2);
    // Input: "1"
    const botReply3 = getBotReply("1");
    // Output: "Beer Battered Fish Ingredients FOR THE FISH: cornstarch, kosher salt, groundblack pepper, all-purpose flour, baking powder, paprika, Vegetable oil for frying
    // 3 lb. 1-inch thick skinless cod filets, lemon wedges for serving, Malt vinegar for serving
    // FOR THE TARTAR SAUCE: mayonnaise, dill, pickle relish, lemon zest, lemon juice, chopped fresh dill, kosher salt, ground black pepper."
    const expectedReply3 = "Beer Battered Fish Ingredients FOR THE FISH: cornstarch, kosher salt, groundblack pepper, all-purpose flour, baking powder, paprika, Vegetable oil for frying 3 lb. 1-inch thick skinless cod filets, lemon wedges for serving, Malt vinegar for serving FOR THE TARTAR SAUCE: mayonnaise, dill, pickle relish, lemon zest, lemon juice, chopped fresh dill, kosher salt, ground black pepper."
    expect(botReply3).toEqual(expectedReply3);
  });
  it("should reply with the regular option seafood first option", () => {
    // Input: "name"
    const botReply1 = getBotReply("Jan");
    // Output: "Nice to meet you Jan! Are you looking for a vegan or a regular option?"
    const expectedReply1 = "Nice to meet you Jan! Are you looking for a vegan or a regular option?";
    expect(botReply1).toEqual(expectedReply1);
    // Input: "regular"
    const botReply2 = getBotReply("regular");
    // Output: "Nice! We have variations for this. Hit 1 for Option 1: Comfort Food and hit 2 for Option 2: Seafood. Which do you prefer?"
    const expectedReply2 = "Nice! We have variations for this. Hit 1 for Option 1: Comfort Food and hit 2 for Option 2: Seafood. Which do you prefer?"
    expect(botReply2).toEqual(expectedReply2);
    // Input: "2"
    const botReply3 = getBotReply("2");
    // Output: "There are two options for the Seafood corner: 1b - Paella mixta or 2b - One-pan seafood roast with smoky garlic butter"
    const expectedReply3 = "There are two options for the Seafood corner: 1b - Paella mixta or 2b - One-pan seafood roast with smoky garlic butter"
    expect(botReply3).toEqual(expectedReply3);
    // Input: "1b"
    const botReply4 = getBotReply("1b");
    // Output: "Paella mixta Ingredients: chopped tomatoes, chicken stock, smoked paprika, saffron, onion, chopped garlic cloves, crushed or finely chopped, olive oil, paella rice, skinless, boneless chicken thighs, cut in half chorizo, sliced frozen peas, raw king prawns, mussels, lemon."
    const expectedReply4 = "Paella mixta Ingredients: chopped tomatoes, chicken stock, smoked paprika, saffron, onion, chopped garlic cloves, crushed or finely chopped, olive oil, paella rice, skinless, boneless chicken thighs, cut in half chorizo, sliced frozen peas, raw king prawns, mussels, lemon."
    expect(botReply4).toEqual(expectedReply4);

});
    it("should reply with the regular option seafood second option", () => {
    // Input: "name"
    const botReply1 = getBotReply("Jan");
    // Output: "Nice to meet you Jan! Are you looking for a vegan or a regular option?"
    const expectedReply1 = "Nice to meet you Jan! Are you looking for a vegan or a regular option?";
    expect(botReply1).toEqual(expectedReply1);
    // Input: "regular"
    const botReply2 = getBotReply("regular");
    // Output: "Nice! We have variations for this. Hit 1 for Option 1: Comfort Food and hit 2 for Option 2: Seafood. Which do you prefer?"
    const expectedReply2 = "Nice! We have variations for this. Hit 1 for Option 1: Comfort Food and hit 2 for Option 2: Seafood. Which do you prefer?"
    expect(botReply2).toEqual(expectedReply2);
    // Input: "2"
    const botReply3 = getBotReply("2");
    // Output: "There are two options for the Seafood corner: 1b - Paella mixta or 2b - One-pan seafood roast with smoky garlic butter"
    const expectedReply3 = "There are two options for the Seafood corner: 1b - Paella mixta or 2b - One-pan seafood roast with smoky garlic butter"
    expect(botReply3).toEqual(expectedReply3);
    // Input: "2b"
    const botReply4 = getBotReply("2b");
    // Output: "One-pan seafood roast with smoky garlic butter Ingredients: Baby potatoes,
    // olive or rapeseed oil, corn cobs, prawns, heads and shells on mussels or large clams, medium squids with tentacles, butter, parsley, smoked paprika, garlic cloves, lemon, ring chorizo."
    const expectedReply4 = "One-pan seafood roast with smoky garlic butter Ingredients: Baby potatoes, olive or rapeseed oil, corn cobs, prawns, heads and shells on mussels or large clams, medium squids with tentacles, butter, parsley, smoked paprika, garlic cloves, lemon, ring chorizo."
    expect(botReply4).toEqual(expectedReply4);
    });
});
    // Uncomment the following line and update your expectation
    // expect(botReply1).toEqual(expectedReply1);
 