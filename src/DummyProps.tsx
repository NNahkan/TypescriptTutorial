import React, { Dispatch, SetStateAction, useState } from 'react'

interface DummyProps {
	number: number
	setNumber: Dispatch<SetStateAction<number>>
}

interface Cocktail {
	garnish: string[];
	liquors: Record<string, string>; // Assuming a key-value pair for liquors
	juices: Record<string, string>; // Assuming a key-value pair for juices
}

const DummyComponent: React.FC<DummyProps> = ({ number, setNumber }) => {

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


	return (
		<>
			<div>{number}</div>

			<button
				onClick={() => setNumber((prev) => prev + 1)}
			>
				ADD
			</button>


			<div>
				{cocktails.map((cocktail, index) => (
					<div key={index}>
						<input
							type="text"
							value={cocktail.garnish.join(', ')}
							onChange={(e) =>
								updateCocktailProperty(index, 'garnish', e.target.value.split(', '))
							}
						/>
						{/* Input fields for liquors */}
						{/* Input fields for juices */}
					</div>
				))}
				<button onClick={addCocktail}>Add Cocktail</button>
			</div>
		</>
	)

}

export default DummyComponent