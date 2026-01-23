/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */
export function cookingStatus(min) {
  if (min === null || min === undefined) {
    return 'You forgot to set the timer.';
  } else if (min === 0) {
    return 'Lasagna is done.';
  } else {
    return 'Not done, please wait.';
  }
}

export function preparationTime(layers, avgTime = 2) {
  return layers.length * avgTime;
}

export function quantities(layers) {
  let noodles = 0;
  let sauce = 0;
  
  for (const elem of layers) {
    if (elem === "noodles") {
      noodles += 50;
    }

    if (elem === "sauce") {
      sauce += 0.2;
    }
  }

  return {
    noodles: noodles,
    sauce: sauce
  };
}

export function addSecretIngredient(firstIngredients, secondIngredients) {
  secondIngredients.push(firstIngredients[firstIngredients.length - 1]);
}

export function scaleRecipe(recipe, portions) {
  let scaledRecipe = {...recipe};
  let desiredPortion = portions / 2;
  for (const key in scaledRecipe) {
    scaledRecipe[key] *= desiredPortion;
  }
  return scaledRecipe;
}