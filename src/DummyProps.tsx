import React, { useState } from 'react';

interface Cocktail {
	name: string;
	recipe: string;
}

const cocktails: Cocktail[] = [
	{
		name: 'Mojito',
		recipe: '1. Muddle lime juice, sugar, and mint leaves. 2. Add rum and ice. 3. Top with soda water and stir.',
	},
	{
		name: 'Cosmopolitan',
		recipe: '1. Combine vodka, cranberry juice, lime juice, and triple sec in a shaker. 2. Shake well with ice. 3. Strain into a martini glass. 4. Garnish with a lime wedge.',
	},
	{
		name: 'Old Fashioned',
		recipe: '1. Muddle sugar, bitters, and a splash of water in a glass. 2. Add ice and whiskey. 3. Stir until well chilled. 4. Garnish with an orange twist and a cherry.',
	},
	{
		name: 'Negroni',
		recipe: '1. Combine equal parts gin, sweet vermouth, and Campari in a mixing glass. 2. Stir with ice. 3. Strain into a rocks glass with ice. 4. Garnish with an orange twist.',
	},
];

const DummyComponent = () => {
	/* 
		const [cocktails, setCocktails] = useState<Cocktail[]>([]);
	
		
		const addCocktail = () => {
			setCocktails((prevCocktails) => [
				...prevCocktails,
				{
					garnish: [],
					liquors: {},
					juices: {},
				},
			]);
		};
	
	
		const updateCocktailProperty = (index: number, property: keyof Cocktail, value: any) => {
			setCocktails((prevCocktails) => {
				const updatedCocktails = [...prevCocktails];
				updatedCocktails[index] = {
					...updatedCocktails[index],
					[property]: value,
				};
				return updatedCocktails;
			});
		}; 
	 */

	return (
		<div>
			<h1>Cocktail Recipes</h1>
			<ul>
				{cocktails.map((cocktail, index) => (
					<li key={index} style={{ border: '1px solid #000', padding: '10px', marginBottom: '10px' }}>
						<h2>{cocktail.name}</h2>
						<p>{cocktail.recipe}</p>
					</li>
				))}
			</ul>
		</div>
	);

}

export default DummyComponent

/* 
{
  "cocktails": [
    {
      "name": "Mojito",
      "liquors": {
        "rum": "2oz",
        "mint liqueur": "1oz"
      },
      "garnish": ["mint leaves", "lime"]
    },
    {
      "name": "Cosmopolitan",
      "liquors": {
        "vodka": "2oz",
        "triple sec": "1oz"
      },
      "garnish": ["lime twist"]
    },
	]
}
*/