const isAuthenticated = true;
if (!isAuthenticated) {
    window.location.href = 'login.html';
}
const recipes = [
  {
    title: 'Kadhai Paneer',
    category: 'Punjabi Cuisine',
    rating:0,
    videoLink:'https://www.youtube.com/watch?v=nRPmoioNisI',
    imageSrc:'https://media.istockphoto.com/id/967266036/photo/indian-food-or-indian-curry-in-a-copper-brass-serving-bowl.jpg?s=1024x1024&w=is&k=20&c=a8wrbyolt-s0uH2oVE8aIWGh-M6FGoWsuYN8F7oouhs=',
    reviews: [{ user: 'User1', feedback: 'Great recipe!' }, { user: 'User2', feedback: 'Easy to follow' }],
    instructions: 'To make Kadhai Paneer, start by preparing the ingredients. You will need 250 grams of paneer (Indian cottage cheese), cubed, 2 medium-sized onions finely chopped, 2 medium-sized tomatoes finely chopped, 1 capsicum (bell pepper) diced, 2-3 green chilies slit lengthwise, 1 tablespoon of ginger-garlic paste, 1 teaspoon each of cumin seeds and coriander seeds, 1 teaspoon of dried fenugreek leaves (kasuri methi), 1 teaspoon of red chili powder, 1/2 teaspoon of turmeric powder, 1 teaspoon of garam masala, salt to taste, and 2 tablespoons of oil First, dry roast the cumin seeds and coriander seeds until fragrant, then grind them into a coarse powder. In a pan, heat the oil and sauté the chopped onions until golden brown. Add the ginger-garlic paste and cook until the raw smell disappears. Next, add the chopped tomatoes and cook until they turn mushy and the oil starts separating from the masala.    Now, add the slit green chilies, red chili powder, turmeric powder, and the ground cumin-coriander powder. Mix well and cook for 2-3 minutes. Add the diced capsicum and cubed paneer to the pan, and gently mix everything so that the masala coats the paneer and capsicum evenly. Crush the dried fenugreek leaves between your palms and add them to the kadhai for a unique flavor. Adjust the seasoning by adding salt to taste and sprinkle garam masala over the mixture. Cover the kadhai with a lid and let the Kadhai Paneer simmer on low heat for 5-7 minutes to allow the flavors to blend well and ensure the paneer absorbs the masala.Once done, remove the lid, garnish with freshly chopped coriander leaves, and turn off the heat. Your Kadhai Paneer is ready to be served hot with roti, naan, or rice. Enjoy this delicious and flavorful dish!', 
  },
    {
        title: 'Prawn Curry',
        category: 'East Indian',
        instructions:'To make Prawn Curry, begin by marinating the prawns in a mixture of turmeric, salt, and lemon juice, ensuring they absorb the vibrant flavors. In a pan, heat oil over medium heat and add a fragrant blend of chopped onions, garlic, and ginger, sautéing until they achieve a golden hue, infusing the base with aromatic essence. Introduce chopped tomatoes into the pan, allowing them to soften and release their juicy essence, creating a luscious sauce. Enhance the curry depth of flavor by incorporating a medley of turmeric, chili powder, coriander powder, and cumin powder, stirring until the spices meld harmoniously and the oil begins to separate intensifying the curry aroma. Carefully add the marinated prawns, cooking them until they transition to a delicate pink hue, signifying their succulent tenderness. To elevate the dish presentation, garnish with a sprinkle of fresh coriander leaves, adding a burst of color and freshness. Serve the tantalizing Prawn Curry piping hot alongside steamed rice or crusty bread, inviting indulgence in every flavorful bite.',
        rating: 0,
        videoLink: 'https://www.youtube.com/watch?v=fkSF9nALVpg',
        imageSrc: 'https://glebekitchen.com/wp-content/uploads/2021/10/southindianprawncurrytopbowl.jpg',
        reviews: [{ user: 'User7', feedback: 'Amazing taste!' }]
    },
    {
        title: 'Fish Curry',
        category: 'East Indian',
        instructions:'To prepare Fish Curry, start by marinating the fish pieces in a mixture of turmeric, salt, and lemon juice, allowing the flavors to permeate for about 15 minutes. In a large skillet or pot, heat oil over medium heat until shimmering, then add finely chopped onions, minced garlic, and grated ginger, stirring frequently until they turn golden and fragrant. Incorporate diced tomatoes into the aromatic base, cooking until they break down and release their juices, creating a rich and vibrant sauce. Enhance the curry complexity by adding a blend of ground spices such as turmeric, chili powder, coriander powder, and cumin powder, stirring continuously to toast the spices and deepen their flavors. Once the spices are fragrant, pour in creamy coconut milk and a splash of water, bringing the mixture to a gentle simmer to meld the flavors together. Carefully nestle the marinated fish pieces into the simmering sauce, ensuring they are evenly coated with the aromatic curry. Allow the fish to gently cook in the flavorful broth for about 10 minutes, or until it is opaque and flakes easily with a fork. Adjust the seasoning with salt to taste, then sprinkle freshly chopped cilantro over the top for a burst of freshness and color. Serve the piping hot Fish Curry alongside steamed rice or warm naan bread, allowing the robust flavors to tantalize your taste buds and transport you to culinary bliss with each comforting bite.',
        rating: 0,
        videoLink: 'https://www.youtube.com/watch?v=Pu6ki9y9Nug',
        imageSrc: 'https://media.istockphoto.com/id/1295772368/photo/macher-jhol-in-black-bowl-on-dark-slate-table-top-indian-cuisine-bengali-fish-curry-asian.jpg?s=612x612&w=0&k=20&c=3asIIURIgisLwXAijZnmNY3p2EWEZEHzByjk7ke9xZk=',
        reviews: [{ user: 'User8', feedback: 'Absolutely delicious!' }]
    },
    
   
    {
        title: 'Rosogolla',
        category: 'East Indian',
        instructions:'To make Rosogolla, start by curdling milk with lemon juice or vinegar, then straining the mixture to obtain chenna. Rinse the chenna under cold water to remove any residual sourness. Knead the chenna until it achieves a smooth and pliable consistency, then shape it into small, uniform balls, ensuring they are free from cracks. Meanwhile, prepare a sugar syrup by boiling water and sugar until it reaches a thick consistency. Gently drop the chenna balls into the simmering syrup, cover the pot, and let them cook undisturbed for about 15-20 minutes, allowing them to absorb the sweetness and expand in size. Once the Rosogollas are cooked through and have doubled in size, remove them from the syrup and let them cool to room temperature before refrigerating. Serve these soft and spongy cottage cheese delights chilled, garnished with a sprinkle of chopped nuts for added texture and flavor. Indulge in the heavenly sweetness of Rosogolla, a beloved Bengali dessert that melts in your mouth with every bite, offering a taste of pure bliss and culinary delight.',
        rating: 0,
        videoLink:'https://www.youtube.com/watch?v=7VDWtgqDun4',
        imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXzJ480TtpJOghDTqbpj9RuNiZXZYD2SjzzQ&usqp=CAU',
        reviews: [{ user: 'User10',feedback: 'Authentic and delightful!' }]
    },
    {
        title: 'Macher Jhol',
        category: 'East Indian', 
        instructions:'To prepare this dish, start by marinating fresh fish pieces with turmeric and salt. In a pot, heat mustard oil and temper it with whole spices like cumin seeds, mustard seeds, and fenugreek seeds until they sizzle and release their aroma. Add finely chopped onions and sauté until they turn translucent. Then, add minced garlic and ginger paste, cooking until fragrant. Stir in diced tomatoes and cook until they break down and form a thick gravy. Next, add ground spices such as turmeric, chili powder, and cumin powder, stirring well to coat the onions and tomatoes. Pour in water and bring the gravy to a gentle simmer. Carefully add the marinated fish pieces to the pot and let them cook until they are tender and infused with the flavors of the curry. Finally, garnish the Macher Jhol with freshly chopped cilantro and serve hot with steamed rice or crusty bread for a delicious and comforting meal that celebrates the culinary heritage of East India.',
        rating: 0,
        videoLink:'https://www.youtube.com/watch?v=kzVcz8X_waw',
        imageSrc: 'https://www.licious.in/blog/wp-content/uploads/2022/08/shutterstock_1891229332.jpg',
        reviews: [{ user: 'User11', feedback: 'Soul-satisfying dish!' }]
    },
    {
        title: 'Mishti Doi',
        category: 'Bengali Cuisine',
        instructions:'Mishti Doi, a beloved Bengali dessert, is a sweet and creamy yogurt delicacy that is both indulgent and refreshing. To prepare this delightful treat, start by boiling milk until it reduces and thickens, imparting a rich and creamy texture. Once the milk has cooled to a lukewarm temperature, add a spoonful of yogurt culture or a few tablespoons of previously prepared mishti doi to initiate the fermentation process. Stir well to combine, then transfer the mixture to earthenware pots or any other heatproof containers. Cover the pots with lids or aluminum foil to maintain warmth and aid in the fermentation process. Place the pots in a warm, dark place, such as a turned-off oven or a cupboard, and allow the yogurt to ferment undisturbed for several hours or overnight, depending on the desired level of tanginess and thickness. Once the mishti doi has set and developed its characteristic sweet and tangy flavor, refrigerate it to chill thoroughly before serving. Garnish with a sprinkle of chopped nuts or a drizzle of honey for added texture and sweetness. Enjoy this luscious and creamy Bengali dessert as a delightful finale to any meal or as a refreshing snack on a hot summer day.',
        rating: 0,
        videoLink:'https://www.youtube.com/watch?v=z8a1wBs-a_w',
        imageSrc: 'https://www.mydiversekitchen.com/wp-content/uploads/2016/09/laal-mishti-doi-a-bengali-jaggery-sweetened-yogurt.1024x1024.jpg',
        reviews: [{ user: 'User12', feedback: 'Deliciously sweet and creamy!' }]
    },
    {
        title: 'Shukto',
        category: 'Bengali Cuisine',
        instructions:'Shukto is a traditional Bengali vegetable medley known for its unique combination of bitter and sweet flavors. To prepare Shukto, start by slicing a variety of vegetables such as bitter gourd, raw banana, drumsticks, ridge gourd, and potatoes into thin pieces. In a pot, heat some mustard oil and temper it with panch phoron (a blend of five whole spices) until aromatic. Add the sliced vegetables to the pot and sauté them until they start to soften. Meanwhile, grind together a paste of mustard seeds, poppy seeds, ginger, and green chilies to make a flavorful base for the dish. Add this paste to the pot along with some turmeric powder and salt, stirring well to coat the vegetables. Pour in a mixture of milk and water to create a creamy consistency and bring the Shukto to a gentle simmer. Allow the vegetables to cook until tender and the flavors meld together. Finally, sprinkle some sugar over the Shukto to balance out the bitterness, and garnish with freshly chopped cilantro before serving. Enjoy this comforting and nutritious Bengali dish as a side dish with rice for a satisfying meal.',
        rating: 0,
        videoLink:'https://www.youtube.com/watch?v=Ia2MzLxJhno',
        imageSrc: 'https://kitchenofdebjani.com/wp-content/uploads/2022/08/Bengali-Shukto-Recipe-Debjanir-Rannaghar.jpg',
        reviews: [{ user: 'User13', feedback: 'Unique blend of flavors, loved it!' }]
    },
    {
        title: 'Luchi',
        category: 'Bengali Cuisine',
        instructions:'To prepare luchi, start by creating a dough using all-purpose flour (maida), a pinch of salt, and a splash of oil. Gradually incorporate water into the flour mixture until a smooth and pliable dough forms. Cover the dough with a damp cloth and allow it to rest for approximately 30 minutes, which helps relax the gluten and enhances the texture of the luchi. After resting, divide the dough into smaller portions and shape them into smooth balls. With a rolling pin, flatten each ball into a thin disc, about 3-4 inches in diameter. Heat oil in a deep frying pan or kadhai over medium heat. Once the oil is hot, carefully slide in the flattened dough discs, one at a time. Fry the luchi until they puff up and turn golden brown on both sides, ensuring even cooking by flipping them occasionally. Once cooked, remove the luchi from the oil and drain excess oil on paper towels. Serve the hot and fluffy luchi with a variety of side dishes such as spicy potato curry, chana dal, or any other curry of your choice. Indulge in the irresistible taste and texture of freshly made luchi as a comforting addition to any Bengali meal or festive occasion.',
        rating: 0,
        videoLink:'https://www.youtube.com/watch?v=qH1kB0u35dI',
        imageSrc: 'https://indiacuisine.net/cdn/shop/articles/9a867dfbfd39e5bdc9f1211a5cf16d47.jpg?v=1695042968',
        reviews: [{ user: 'User14', feedback: 'Light and fluffy, perfect with curry!' }]
    },
    {
        title: 'Pitha',
        category: 'Bengali Cuisine',
        instructions:'Pitha, a cherished delicacy in Bengali cuisine, encompasses a wide variety of sweet and savory treats enjoyed during special occasions and festivals. To prepare pitha, a batter of rice flour or a blend of rice and lentil flours is mixed with water to form a smooth consistency. Sweet pitha often includes ingredients like sugar or jaggery, grated coconut, or sesame seeds, while savory versions may incorporate spices such as cumin seeds, green chilies, and chopped vegetables. The batter is then poured onto a hot griddle or molded into different shapes and sizes before being cooked until golden brown and cooked through. Once prepared, sweet pitha can be drizzled with honey or sprinkled with powdered sugar, while savory pitha pairs well with chutney or a savory dipping sauce. Whether enjoyed as patishapta, puli pitha, or chitoi pitha, these versatile treats are a testament to the rich culinary heritage and festive spirit of Bengali cuisine.',
        rating: 0,
        videoLink:'https://www.youtube.com/watch?v=zwUoWEyk8Uw',
        imageSrc: 'https://www.archanaskitchen.com/images/archanaskitchen/1-Author/Uma_Raghuraman/bihari_dal_pitha_recipe_traditional_bihari_delicacy.jpg',
        reviews: [{ user: 'User15', feedback: 'Traditional and tasty, reminds me of home!' }]
    },
    {
        title: ' Gulab Rasgulla',
        category: 'Bengali Cuisine',
        instructions:'Gulab Rasgulla is a delightful Indian sweet made from chenna (fresh cottage cheese) dumplings, soaked in sugar syrup flavored with rose water. To prepare Gulab Rasgulla, first, prepare the chenna by curdling milk and separating the whey. Knead the chenna until smooth and form into small balls. Meanwhile, prepare a sugar syrup by boiling water and sugar together until it reaches a one-string consistency, flavored with a hint of rose water. Then, gently drop the chenna balls into the simmering syrup and cook covered for about 15-20 minutes until they double in size and become spongy. Once cooked, allow the rasgullas to cool in the syrup before serving. The syrup infuses the rasgullas with its sweetness and aromatic rose flavor, creating a decadent treat that melts in your mouth. Enjoy Gulab Rasgulla chilled as a refreshing dessert, perfect for any celebration or special occasion.',
        rating: 0,
        videoLink:'https://www.youtube.com/watch?v=4m_xdQNd5k8',
        imageSrc: 'https://img-global.cpcdn.com/recipes/131f42ac7dd8a775/400x400cq70/photo.jpg',
        reviews: [{ user: 'User16', feedback: 'Soft and spongy, just like from a sweet shop!' }]
    },
    {
        title: 'Shorshe Ilish',
        category: 'Bengali Cuisine',
        instructions:'Shorshe Ilish is a quintessential Bengali dish featuring Hilsa fish cooked in a mustard sauce, celebrated for its rich and bold flavors. To prepare Shorshe Ilish, first, marinate the Hilsa fish pieces with turmeric powder and salt. Then, prepare the mustard paste by grinding mustard seeds with green chilies and a pinch of salt into a smooth paste. In a pan, heat mustard oil until smoking, then temper it with nigella seeds and slit green chilies. Add the mustard paste to the pan and sauté until it releases its aroma and thickens slightly. Gradually add water to adjust the consistency of the sauce. Gently place the marinated Hilsa fish pieces into the mustard sauce, cover, and simmer until the fish is cooked through and the flavors meld together. Garnish with fresh cilantro and serve hot with steamed rice for a delightful culinary experience that captures the essence of Bengali cuisine.',
        rating: 0,
        videoLink:'https://www.youtube.com/watch?v=Ko8NgImWGck',
        imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRt_pZ5ycUlZ4BedGP0BE4gwFO4ghfkTkFSYA&usqp=CAU',
        reviews: [{ user: 'User17', feedback: 'The perfect blend of mustard and fish flavors!' }]
    },
    {
        title: 'Aloo Posto',
        category: 'Bengali Cuisine',
        instructions:'Aloo Posto is a classic Bengali dish featuring potatoes cooked in a creamy poppy seed paste, known for its simplicity and delightful flavor. To prepare Aloo Posto, start by boiling potatoes until they are tender but firm. Once cooled, peel the potatoes and cut them into cubes. In a blender or mortar and pestle, grind poppy seeds into a fine paste along with green chilies and a pinch of salt, adding a little water if needed. In a pan, heat mustard oil and temper it with nigella seeds (kalonji) and dry red chilies. Add the cubed potatoes to the pan and sauté until they are lightly browned. Then, add the poppy seed paste to the pan and stir well to coat the potatoes evenly. Cook the mixture over low heat, stirring occasionally, until the poppy seed paste thickens and coats the potatoes. Adjust the seasoning with salt if needed. Garnish with a sprinkle of freshly chopped cilantro and serve hot with steamed rice for a comforting and delicious meal that showcases the unique flavors of Bengali cuisine.',
        rating: 0,
        videoLink:'https://www.youtube.com/watch?v=BI1v4Y8Td_M',
        imageSrc: 'https://www.whiskaffair.com/wp-content/uploads/2020/06/Bengali-Aloo-Posto-2-3-500x500.jpg',
        reviews: [{ user: 'User18', feedback: 'Creamy and flavorful, loved it with rice!' }]
    },
   
    {
        title: 'Bhapa Doi',
        category: 'Bengali Cuisine',
        instructions:'Bhapa Doi is a delectable Bengali dessert known for its creamy texture and rich flavor. To prepare Bhapa Doi, start by mixing condensed milk (or milkmaid) with thick yogurt (curd) in a bowl until well combined. Add cardamom powder and a pinch of saffron strands soaked in warm milk for a few minutes to infuse their flavor. Optionally, you can also add chopped nuts like almonds or pistachios for added texture and taste. Pour the mixture into greased bowls or earthenware pots, and cover them tightly with aluminum foil or lids to prevent water from seeping in during steaming. Steam the Bhapa Doi in a steamer or pressure cooker without the whistle for about 20-25 minutes until set. Once done, let it cool to room temperature, then refrigerate for a few hours until chilled and firm. Serve the chilled Bhapa Doi garnished with more saffron strands or chopped nuts for an irresistible dessert that captures the essence of Bengali cuisine.',
        rating: 0,
        videoLink:'https://www.youtube.com/watch?v=w1lf37-4tKg',
        imageSrc: 'https://www.palatesdesire.com/wp-content/uploads/2022/09/bhapa-doi-recipe@palates-desire-4.jpg',
        reviews: [{ user: 'User20', feedback: 'Rich and creamy, a delightful dessert!' }]
    },
    {
        title: 'Kosha Mangsho',
        category: 'East Indian',
        instructions:'Kosha Mangsho is a flavorful East Indian dish featuring slow-cooked, succulent pieces of mutton in a rich and spicy gravy. To prepare Kosha Mangsho, start by marinating the mutton pieces with yogurt, ginger-garlic paste, turmeric powder, and salt for at least 30 minutes to enhance the flavors. In a heavy-bottomed pan or pressure cooker, heat mustard oil and temper it with whole spices like cinnamon, cardamom, cloves, and bay leaves until aromatic. Add finely chopped onions and cook until they turn golden brown. Then, add minced garlic and ginger paste, cooking until fragrant. Stir in diced tomatoes and cook until they form a thick gravy. Next, add ground spices such as chili powder, coriander powder, cumin powder, and garam masala, stirring well to coat the onions and tomatoes. Add the marinated mutton along with its marinade to the pan and cook over low heat, stirring occasionally, until the mutton is tender and the gravy thickens, which may take 1.5 to 2 hours. Adjust the seasoning with salt and sugar if needed. Garnish the Kosha Mangsho with freshly chopped cilantro and serve hot with rice or bread for a delicious and comforting meal that showcases the rich flavors of East Indian cuisine.',
        rating: 0,
        videoLink:'https://www.youtube.com/watch?v=NWKD2dOFmm0',
        imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhJkgkrDAfFAPc8yRguyfM7pMW991WSax5wg&usqp=CAU',
        reviews: [{ user: 'User1', feedback: 'Absolutely delicious!' }]
    },
    {
        title: 'Ghugni',
        category: 'East Indian',
        instructions:'Ghugni is a popular East Indian street food made from dried yellow peas or black chickpeas cooked in a spicy and tangy gravy, often enjoyed as a snack or light meal. To prepare Ghugni, start by soaking the dried yellow peas or black chickpeas overnight in water to soften them. Then, drain the soaked peas and boil them until tender in a pot of water with a pinch of salt. In a separate pan, heat oil and temper it with cumin seeds, bay leaves, and dried red chilies until aromatic. Add finely chopped onions and sauté until they turn translucent. Then, add minced garlic and ginger paste, cooking until fragrant. Stir in diced tomatoes and cook until they form a thick gravy. Next, add ground spices such as turmeric powder, chili powder, cumin powder, coriander powder, and garam masala, stirring well to coat the onions and tomatoes. Add the boiled peas to the pan and mix well with the spice mixture. Cook for a few more minutes, adding water if needed to adjust the consistency. Finally, garnish the Ghugni with chopped cilantro and serve hot with chopped onions, green chilies, and a squeeze of lemon juice for extra flavor. Enjoy this flavorful and comforting Ghugni as a satisfying snack or light meal that embodies the vibrant flavors of East Indian cuisine.',
        rating: 0,
        videoLink:'https://www.youtube.com/watch?v=ZveiVet2ENk',
        imageSrc: 'https://spoonsofflavor.com/wp-content/uploads/2020/04/Street-Style-Ghugni-Recipe.jpg',
        reviews: [{ user: 'User2', feedback: 'Perfect evening snack!' }]
    },
    {
        title: 'Doi Maach',
        category: 'East Indian',
        instructions:'Doi Maach, a beloved East Indian dish, features fish cooked in a creamy yogurt-based gravy, celebrated for its rich flavors and creamy texture. To prepare Doi Maach, start by marinating fish pieces (such as hilsa, bhetki, or pomfret) with turmeric powder and salt. In a pan, heat mustard oil and fry the fish pieces until golden brown on both sides. Remove the fish from the pan and set aside. In the same pan, add more mustard oil if needed and temper it with whole spices like bay leaves, cinnamon, and cloves. Add finely chopped onions and sauté until golden brown. Then, add ginger-garlic paste and cook until fragrant. Next, whisk together yogurt, turmeric powder, red chili powder, coriander powder, and a pinch of sugar until smooth. Add this yogurt mixture to the pan and cook until the oil separates from the masala. Then, add water to adjust the consistency of the gravy and bring it to a gentle simmer. Gently place the fried fish pieces into the gravy and cook covered on low heat until the fish is cooked through and the flavors meld together. Garnish the Doi Maach with chopped cilantro and serve hot with steamed rice for a comforting and flavorful meal that captures the essence of East Indian cuisine.',
        rating: 0,
        videoLink:'https://www.youtube.com/watch?v=8-R9RrvSUOc',
        imageSrc: 'https://kitchenofdebjani.com/wp-content/uploads/2023/12/Bengali-Doi-Maach-Recipe-Debjanir-Rannaghar-with-video.jpg',
        reviews: [{ user: 'User3',feedback: 'Rich and creamy!' }]
    },
    {
        title: 'Chanar Dalna',
        category: 'East Indian',
        instructions:'Chanar Dalna is a traditional East Indian vegetarian dish made with paneer (Indian cottage cheese) simmered in a rich and flavorful gravy, celebrated for its delicate taste and creamy texture. To prepare Chanar Dalna, start by preparing the paneer. Bring milk to a boil, then add lemon juice or vinegar to curdle the milk. Strain the curdled milk through a muslin cloth, squeezing out excess water to obtain the paneer. Shape the paneer into small cubes or balls. In a pan, heat mustard oil and fry the paneer cubes until golden brown. Remove the paneer from the pan and set aside. In the same pan, add more mustard oil if needed and temper it with whole spices like bay leaves, cinnamon, and cloves. Add finely chopped onions and sauté until golden brown. Then, add minced garlic and ginger paste, cooking until fragrant. Next, add diced tomatoes and cook until they form a thick gravy. Add ground spices such as turmeric powder, chili powder, cumin powder, and coriander powder, stirring well to coat the onions and tomatoes. Then, add water to adjust the consistency of the gravy and bring it to a gentle simmer. Gently place the fried paneer cubes into the gravy and cook covered on low heat until the paneer absorbs the flavors and becomes soft. Garnish the Chanar Dalna with chopped cilantro and serve hot with rice or bread for a delightful and comforting vegetarian meal that showcases the rich flavors of East Indian cuisine.',     
        rating: 0,
        videoLink:'https://www.youtube.com/watch?v=awYfCe8w44I',
        imageSrc: 'https://kitchenmai.com/wp-content/uploads/2019/03/chanar_dalna_new_blog.jpg',
        reviews: [{ user: 'User4', feedback: 'A delightful vegetarian dish!' }]
    },
   
    {
        title: 'Vada',
        category: 'South Indian',
        instructions:'Vada is a popular South Indian snack made from a batter of soaked and ground lentils or pulses, typically urad dal, seasoned with spices and deep-fried until golden and crispy. To prepare vada, start by soaking urad dal (black gram) in water for a few hours until it softens. Drain the water and grind the dal into a smooth paste, adding minimal water as needed. Transfer the dal paste to a bowl and mix it with finely chopped green chilies, ginger, curry leaves, chopped onions, salt, and optionally, grated coconut or crushed peppercorns for extra flavor. Heat oil in a deep frying pan or kadhai. Wet your hands with water and take a small portion of the dal mixture. Flatten it slightly and make a hole in the center to form a doughnut shape. Carefully slide the shaped vadas into the hot oil and fry until they turn golden brown and crispy on both sides. Remove the vadas from the oil and drain excess oil on paper towels. Serve the hot and crispy vadas with coconut chutney, sambar, or any other dipping sauce of your choice for a delicious and satisfying snack or breakfast.',
        rating: 0,
        videoLink:'https://www.youtube.com/watch?v=5zj93-DvLic',
        imageSrc:'https://myfoodstory.com/wp-content/uploads/2022/09/Medu-Vada-5.jpg',
        reviews: [{ user: 'User35', feedback: 'Crunchy on the outside and soft on the inside, delicious!' }]
    },
    {
        title: 'Pongal',
        category: 'South Indian',
        instructions:'Pongal is a traditional South Indian dish made from rice and lentils, typically served as a savory breakfast or meal during festive occasions. To prepare Pongal, start by rinsing rice and yellow moong dal (split mung beans) thoroughly and soaking them together for about 30 minutes. Then, drain the water and transfer the rice and dal mixture to a pressure cooker or a heavy-bottomed pot. Add water, salt, and whole black peppercorns, and cook until the rice and dal are soft and mushy. In a separate pan, heat ghee (clarified butter) and temper it with mustard seeds, cumin seeds, curry leaves, grated ginger, and optionally, green chilies. Add cashews and roast until golden brown. Pour this tempering over the cooked rice and dal mixture and mix well. Adjust the seasoning if needed. Pongal is typically served hot with coconut chutney, sambar, or a side of jaggery for a delicious and comforting meal that captures the essence of South Indian cuisine.',
        rating: 0,
        videoLink:'https://www.youtube.com/watch?v=rjdpb2UsFJM',
        imageSrc: 'https://www.indianhealthyrecipes.com/wp-content/uploads/2021/01/pongal-ven-pongal-500x375.jpg',
        reviews: [{ user: 'User36', feedback: 'Comforting and hearty, perfect for breakfast!' }]
    },
    {
        title: 'Bisi Bele Bath',
        category: 'South Indian',
        instructions:'Bisi Bele Bath is a flavorful and aromatic rice dish from Karnataka, South India, prepared with rice, lentils, assorted vegetables, and a unique blend of spices. To make Bisi Bele Bath, start by cooking rice and toor dal (split pigeon peas) together until soft, either in a pressure cooker or a pot. In another pot, cook assorted vegetables like carrots, beans, peas, and potatoes until tender. In a pan, heat ghee (clarified butter) or oil and temper it with mustard seeds, cumin seeds, curry leaves, and dry red chilies. Add chopped onions and sauté until golden brown. Then, add tamarind extract, Bisi Bele Bath masala (a blend of spices including cinnamon, cloves, coriander seeds, fenugreek seeds, and dry red chilies), salt, and jaggery. Mix well and cook until the raw smell of the spices disappears. Add the cooked vegetables, rice, and dal mixture to the pan and mix everything together gently. Adjust the consistency by adding water if needed. Simmer the Bisi Bele Bath for a few minutes until all the flavors are well combined. Serve hot with a dollop of ghee, crispy fried papad, or a side of raita for a wholesome and satisfying meal that is both nutritious and delicious.',
        rating: 0,
        videoLink:'https://www.youtube.com/watch?v=VEArdyBWvdw',
        imageSrc: 'https://upload.wikimedia.org/wikipedia/commons/0/04/Bisi_Bele_Bath_%28Bisibelebath%29.JPG',
        reviews: [{ user: 'User37',feedback: 'Spicy and flavorful, a complete meal in itself!' }]
    },
    {
        title: 'Lemon Rice',
        category: 'South Indian',
        instructions:'Lemon rice is a tangy and flavorful South Indian dish made with cooked rice, seasoned with a tempering of mustard seeds, curry leaves, green chilies, and turmeric, and finally, finished with a generous squeeze of lemon juice. To prepare lemon rice, start by cooking rice and allowing it to cool completely. In a pan, heat oil and add mustard seeds. When the mustard seeds start spluttering, add finely chopped green chilies and curry leaves, and sauté for a few seconds. Then, add turmeric powder and stir well to coat the tempering ingredients. Add the cooked rice to the pan and gently mix it with the tempering until the rice is well coated with turmeric. Squeeze fresh lemon juice over the rice and mix well to distribute the lemony flavor evenly. Season with salt to taste and garnish with chopped cilantro if desired. Serve hot or at room temperature as a delicious and refreshing accompaniment to any South Indian meal, or enjoy it on its own as a light and flavorful dish.', 
        rating: 0,
        videoLink:'https://www.youtube.com/watch?v=S582ox6c4l4',
        imageSrc: 'https://www.cookwithmanali.com/wp-content/uploads/2016/01/South-Indian-Lemon-Rice-Recipe.jpg',
        reviews: [{ user: 'User38', feedback: 'Tangy and refreshing, a great way to use leftover rice!' }]
    },
    {
        title: 'Rasam',
        category: 'South Indian',
        instructions:'Rasam is a traditional South Indian soup or broth that is tangy, spicy, and aromatic, often served as an appetizer or alongside rice. To make rasam, start by preparing a tamarind extract by soaking tamarind in warm water and then straining it to obtain the juice. In a pot, combine the tamarind extract with chopped tomatoes, cooked lentils (such as toor dal), turmeric powder, salt, and rasam powder (a blend of spices like coriander seeds, cumin seeds, black pepper, and dried red chilies). Bring the mixture to a gentle boil and let it simmer until the flavors meld together and the raw smell of the tamarind disappears. In a separate pan, prepare a tempering by heating ghee or oil and adding mustard seeds, cumin seeds, dried red chilies, curry leaves, and optionally, asafoetida. Once the mustard seeds splutter and the spices release their aroma, add this tempering to the simmering rasam. Finally, garnish with fresh cilantro leaves and serve hot as a comforting and flavorful soup or alongside steamed rice for a satisfying meal. Rasam is not only delicious but also known for its digestive and medicinal properties, making it a staple in South Indian cuisine.',
        rating: 0,
        videoLink:'https://www.youtube.com/watch?v=nR0TEE7eyKs',
        imageSrc:'https://untoldrecipesbynosheen.com/wp-content/uploads/2022/09/rasam-featured-1.jpg',
        reviews: [{ user: 'User39', feedback: 'Spicy and tangy, just like grandma used to make!' }]
    },
    {
      title: 'Masala Dosa',
      category: 'South Indian',
      instructions: 'Masala Dosa is a popular South Indian dish consisting of a crispy crepe made from fermented rice and lentil batter, filled with a spiced potato filling. To prepare masala dosa, start by soaking rice, urad dal (black gram), and fenugreek seeds for several hours. Grind them into a smooth batter, adding water as needed. Allow the batter to ferment overnight. For the potato filling, boil potatoes and mash them. In a pan, temper mustard seeds, cumin seeds, curry leaves, chopped onions, green chilies, ginger, and turmeric. Add the mashed potatoes, salt, and a splash of lemon juice, and mix well. To make dosas, heat a dosa tawa (griddle) and pour a ladleful of batter onto it. Spread the batter in a circular motion to form a thin crepe. Drizzle oil around the edges and cook until golden brown. Spread a layer of spicy chutney on the dosa, place a portion of the potato filling in the center, and fold the dosa. Serve hot with coconut chutney and sambar.',
      rating: 0,
      videoLink: 'https://www.youtube.com/watch?v=2PT3lvVfuYY',
      imageSrc:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHgFLc7N8IqXYrkQEX2SoGLzdbnMxreRx8hQ&usqp=CAU',
      reviews: [{ user: 'User41', feedback: 'Crispy and delicious, a perfect South Indian breakfast!' }]
  },
 
{
  title: 'Upma',
  category: 'South Indian',
  rating: 0,
  instructions: 'Upma is a traditional South Indian breakfast dish made from dry roasted semolina (sooji) or coarse rice flour. To prepare upma, heat oil in a pan and add mustard seeds, urad dal, chana dal, curry leaves, chopped onions, green chilies, and ginger. Sauté until onions turn translucent. Then, add chopped vegetables like carrots, peas, and beans, along with water and salt. Bring it to a boil. Once the water starts boiling, slowly add roasted semolina or rice flour while continuously stirring to prevent lumps. Cook until the mixture thickens and the semolina or rice flour is fully cooked. Garnish with chopped coriander leaves and serve hot with coconut chutney or pickle.',
  videoLink: 'https://www.youtube.com/watch?v=mQ6v9l6FpNE',
  imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6Iy-ozJNLUjt_Wx5bM7SMiEh7g0kaf5EwmA&usqp=CAU',
  reviews: [{ user: 'User1', feedback: 'Classic upma recipe, tastes delicious!' }]
},
{
  title: 'Rava Idli',
  category: 'South Indian',
  rating: 0,
  instructions: 'Rava Idli is a variation of traditional idli, a popular South Indian steamed cake. To prepare rava idli, mix together semolina (rava), yogurt, finely chopped vegetables like carrots, peas, and coriander leaves, and season with salt. Let the mixture rest for about 30 minutes. In the meantime, prepare the tempering by heating oil in a pan, adding mustard seeds, urad dal, chana dal, and curry leaves. Pour this tempering over the idli batter and mix well. Grease idli moulds with oil or ghee and pour the batter into each mould. Steam the idlis for about 10-12 minutes until they are cooked through. Serve hot with coconut chutney and sambar.',
  videoLink: 'https://www.youtube.com/watch?v=jyBs-tt8YfY',
  imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYOLSPSXa0UIKKi3riRvF47VYWFnCzOZiNmQ&usqp=CAU',
  reviews: [{ user: 'User2',feedback: 'Love the soft texture of rava idli, great recipe!' }]
},
{
  title: 'Tomato Rice',
  category: 'South Indian',
  rating: 0,
  instructions: 'Tomato Rice is a flavorful South Indian rice dish made with rice, tomatoes, and a blend of spices. To prepare tomato rice, start by cooking rice and letting it cool. In a pan, heat oil and add mustard seeds, urad dal, chana dal, dried red chilies, and curry leaves. Sauté until the dals turn golden brown. Then, add chopped onions and cook until they turn translucent. Add chopped tomatoes and cook until they soften. Season with turmeric powder, red chili powder, coriander powder, and salt. Add cooked rice to the tomato mixture and gently mix until well combined. Garnish with chopped coriander leaves and serve hot with raita or papad.',
  videoLink: 'https://www.youtube.com/watch?v=kpaMJHGaZNo',
  imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2sOonvjdDTExGVKbiuj8APOLmHV3xU3pdlg&usqp=CAU',
  reviews: [{ user: 'User3',feedback: 'Tomato rice turned out amazing, will definitely make it again!' }]
},

    {
        title: 'Coconut Chutney',
        category: 'South Indian',
        instructions:'Coconut chutney is a classic South Indian condiment that pairs perfectly with various dishes like dosa, idli, vada, and uttapam. To prepare coconut chutney, start by grinding fresh grated coconut, roasted chana dal (split chickpeas), green chilies, ginger, and salt together in a blender or mixer until you achieve a coarse or smooth consistency according to your preference. If desired, you can also add a small amount of water to aid in grinding. Once the mixture reaches the desired consistency, transfer it to a serving bowl. In a separate pan, heat oil and add mustard seeds, urad dal (black gram), and curry leaves for tempering. Once the mustard seeds start spluttering and the urad dal turns golden brown, pour this tempering over the ground coconut mixture. Stir well to combine. Optionally, you can add a squeeze of lemon juice or tamarind pulp for tanginess, and garnish with fresh chopped cilantro leaves. Coconut chutney is now ready to serve as a delicious accompaniment to your favorite South Indian dishes or as a dip for snacks. Enjoy the creamy texture and vibrant flavors of this versatile chutney!',
        rating: 0,
        videoLink:'https://www.youtube.com/watch?v=eFi5s9YNNVM',
        imageSrc: 'https://th.bing.com/th/id/OIP.OsiMpglRcDWVuWJb9aFK1gHaLH?w=180&h=240&c=7&r=0&o=5&dpr=1.3&pid=1.7',
        reviews: [{ user: 'User40', feedback: 'Creamy and flavorful, the perfect accompaniment to dosa!' }]
    },
     {
        title: 'Poha',
        category: 'Central Indian',
       instructions:'Poha is a traditional Central Indian breakfast or snack made from flattened rice, also known as flattened or beaten rice flakes. To prepare poha, start by rinsing the flattened rice under cold water to remove any impurities. Drain the water and let the flattened rice sit for a few minutes to soften. In a pan, heat oil and add mustard seeds. Once the mustard seeds start to splutter, add curry leaves, chopped green chilies, and finely chopped onions. Sauté until the onions turn translucent. Then, add turmeric powder and salt to taste. Mix well. Add the soaked flattened rice to the pan and gently stir to combine all the ingredients. Cook for a few minutes until the flattened rice is heated through and well-coated with the spices. Optionally, you can add lemon juice, grated coconut, roasted peanuts, and chopped cilantro for extra flavor and texture. Serve hot garnished with more chopped cilantro and enjoy this flavorful and comforting dish as a breakfast or snack, often accompanied by tea or coffee. Poha is not only delicious but also quick and easy to prepare, making it a popular choice in Central Indian cuisine.',
        rating: 0,
        videoLink:'https://www.youtube.com/watch?v=hL-BnQF_gmI',
        imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTubvUqL2VgEJvedIWbb4FQZDQQoLaKku2BIg&usqp=CAU',
        reviews: [{ user: 'User1', feedback: 'Delicious and easy to make!' }]
    },
    
    {
        title: 'Bafla',
        category: 'Central Indian',
        instructions:'Bafla is a traditional dish from the Malwa region of Central India, particularly popular in the state of Madhya Pradesh. It is a type of bread made from wheat flour dough, typically cooked in boiling water and then roasted or baked until golden brown. To prepare bafla, start by kneading wheat flour with a small amount of salt and water to form a smooth and firm dough. Divide the dough into small balls and shape them into cylindrical rolls or patties. Next, bring a large pot of water to a boil and gently drop the dough rolls into the boiling water. Cook the baflas in the boiling water until they float to the surface, indicating that they are cooked through. Remove the cooked baflas from the water and drain excess moisture. Finally, roast or bake the partially cooked baflas until they turn golden brown and develop a crisp outer crust. Baflas are typically served hot with dal (lentil curry), ghee (clarified butter), and chutney or pickle on the side. Enjoy this hearty and comforting dish as a part of a traditional Central Indian meal.',
        rating: 0,
        videoLink:'https://www.youtube.com/watch?v=P6aI5E0YXVU',
        imageSrc:'https://th.bing.com/th/id/OIP.uBsTJChnSmvvLgQH74JJbQHaE7?w=270&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
        reviews: [{ user: 'User2',feedback: 'Perfectly chttpsrispy on the outside and soft inside, loved it!' }]
    },
    
 {
        title: 'Dal Bafla',
        category: 'Central Indian',
        instructions:'Dal Bafla is a cherished dish from Central India, comprising two key elements: bafla, a wheat flour dough shaped into patties and partially boiled before being roasted, and dal, a flavorful lentil curry. The baflas are formed into balls, boiled until they float, then roasted till golden brown. For the dal, lentils are cooked with spices and tempered with mustard seeds, cumin, and other aromatics. The dish is served by placing the roasted baflas in a bowl and pouring the piping hot dal over them, creating a harmonious blend of textures and flavors. This wholesome meal is often accompanied by ghee and chutney, offering a taste of the rich culinary heritage of Central India.',
        rating: 0,
        videoLink:'https://www.youtube.com/watch?v=TqX1b3iJ18Y',
        imageSrc: 'https://th.bing.com/th/id/OIP.0pihpPerrBBVreGcVXOb2gHaEK?w=287&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
        reviews: [{ user: 'User3', feedback: 'The combination of bafla and dal is amazing!' }]
    },
    
    {
        title: 'Bhutte ki Kees',
        category: 'Central Indian',
        instructions:'Bhutte ki Kees is a popular street food and snack from the state of Madhya Pradesh, particularly in the region of Indore. It is made with grated fresh corn kernels, cooked in a spicy and tangy mixture, and often served with garnishes like fresh cilantro and grated coconut. To prepare Bhutte ki Kees, start by grating fresh corn kernels off the cob. In a pan, heat oil or ghee and add mustard seeds, cumin seeds, and finely chopped green chilies. Sauté until the spices release their aroma. Then, add the grated corn kernels and cook until they become soft and the moisture evaporates. Add spices like turmeric, red chili powder, and salt to taste, and mix well. Finally, finish with a splash of lemon juice for a tangy flavor. Garnish with chopped cilantro and grated coconut before serving. Bhutte ki Kees is enjoyed hot as a snack or breakfast item, often accompanied by chutney or served with bread or roti.',
        rating: 0,
        videoLink:'https://www.youtube.com/watch?v=NhET_18DgNI',
        imageSrc: 'https://th.bing.com/th/id/OIP.GYNnYH538Y0eAyWWY3G5HwHaEH?w=324&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
        reviews: [{ user: 'User4',feedback: 'A unique and delicious dish, loved the flavors!' }]
    },
    
    {
        title: 'Sabudana Khichdi',
        category: 'Central Indian',
        instructions:'Sabudana Khichdi is a popular fasting dish in India, made from soaked tapioca pearls (sabudana), potatoes, peanuts, and flavored with spices. To prepare Sabudana Khichdi, start by soaking the tapioca pearls in water for a few hours until they swell up and become soft. Drain any excess water and set aside. In a pan, heat ghee or oil and add cumin seeds. Once the seeds start to splutter, add chopped green chilies, curry leaves, and chopped potatoes. Sauté until the potatoes are cooked through and slightly browned. Then, add coarsely ground roasted peanuts and sauté for a few more minutes. Next, add the soaked tapioca pearls to the pan along with salt, sugar, and a squeeze of lemon juice. Mix well and cook until the tapioca pearls turn translucent and become soft, stirring occasionally. Garnish with chopped cilantro and grated coconut before serving. Sabudana Khichdi is typically enjoyed hot as a breakfast or snack, especially during fasting days or as a light meal.',
        rating: 0,
        videoLink:'https://www.youtube.com/watch?v=k0H2y_cLkQ8',
        imageSrc: 'https://th.bing.com/th/id/OIP.PHdagMX_nOjWToID265JkAHaJQ?w=180&h=225&c=7&r=0&o=5&dpr=1.3&pid=1.7',
        reviews: [{ user: 'User5', feedback: 'Perfectly cooked, great for fasting days!' }]
    },
    
     {
        title: 'Malpua',
        category: 'Central Indian',
        instructions:'Malpua is a sweet and indulgent Indian dessert, often enjoyed during festivals and special occasions. To prepare malpua, start by making a batter with all-purpose flour (maida), semolina (sooji), sugar, mashed ripe bananas, and milk. Add a pinch of cardamom powder for flavor. Allow the batter to rest for a while to let the flavors meld together. Meanwhile, heat ghee or oil in a shallow pan or skillet. Once the ghee is hot, pour a ladleful of the batter into the pan to form small pancakes. Fry the malpuas until they turn golden brown and crispy on both sides. Remove them from the pan and drain excess oil on paper towels. Optionally, you can dip the malpuas in sugar syrup or drizzle them with honey for added sweetness. Serve the malpuas warm, garnished with chopped nuts or dried fruits, and enjoy their delightful texture and rich flavor as a decadent dessert or snack.',   
        rating: 0,
        videoLink:'https://www.youtube.com/watch?v=l4Qxt51Uvk4',
        imageSrc: 'https://th.bing.com/th/id/OIP.u_Rd-VDpOmUL9I3a8QAV4QHaF7?w=224&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
        reviews: [{ user: 'User6', feedback: 'Absolutely divine, a must-try dessert!' }]
    },
    
    {
        title: 'Lavang Latika',
        category: 'Central Indian',
        instructions:'In Central India, Lavang Latika is a beloved sweet delicacy enjoyed during festivals and special occasions. To prepare it, begin by making a dough with all-purpose flour, ghee, and water. Roll out the dough thinly and cut it into small squares. For the filling, mix together khoya (reduced milk solids), sugar, grated coconut, chopped nuts, and a hint of cardamom powder. Place a spoonful of the filling in the center of each dough square and fold them into rectangular parcels, sealing the edges with a paste made of flour and water. Deep-fry the sealed parcels until they turn golden brown and crispy. Finally, immerse the fried parcels in sugar syrup infused with saffron and rose water, allowing them to absorb the syrups sweetness and aroma. Serve Lavang Latika garnished with chopped nuts or edible silver foil, and savor the delightful flavors of this traditional Central Indian sweet.',
        rating: 0,
        videoLink:'https://www.youtube.com/watch?v=eM37pxBvZkw',
        imageSrc: 'https://th.bing.com/th/id/OIP.FQnvoksGoL8HftvyJegCvQHaFj?w=219&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
        reviews: [{ user: 'User7',feedback: 'Rich and indulgent, loved every bite!' }]
    },
    
     {
        title: 'Khopra Pattice',
        category: 'Central Indian',
        instructions:'Khopra Pattice is a popular snack from the state of Madhya Pradesh in Central India, featuring a crispy exterior and a flavorful coconut-based filling. To prepare Khopra Pattice, start by making a dough with boiled, mashed potatoes, wheat flour, salt, and spices like red chili powder and garam masala. Divide the dough into small portions and shape them into flat discs. For the filling, mix together grated fresh coconut, chopped green chilies, ginger, coriander leaves, and spices such as turmeric powder and cumin powder. Take a portion of the potato dough, flatten it, place a spoonful of the coconut filling in the center, and seal the edges to form a patty. Repeat the process to make more patties. Next, shallow fry the patties in hot oil until they turn golden brown and crispy on both sides. Drain excess oil on paper towels. Serve Khopra Pattice hot with mint chutney or tamarind chutney for a delightful snack or appetizer that captures the flavors of Central Indian cuisine.',
        rating: 0,
        videoLink:'https://www.youtube.com/watch?v=yZYNDY8G-7M',
        imageSrc: 'https://th.bing.com/th/id/OIP.J_BxH37Fcbjfcmd-xmh5FAHaE8?w=282&h=188&c=7&r=0&o=5&dpr=1.3&pid=1.7',
        reviews: [{ user: 'User8', feedback: 'Crunchy on the outside, flavorful on the inside, loved it!' }]
    },
    
    {
        title: 'Shikanji',
        category: 'Central Indian',
        instructions:'Shikanji, also known as Nimbu Paani, is a refreshing Indian lemonade made with freshly squeezed lemon juice, water, sugar, and a blend of spices. To prepare Shikanji, start by squeezing fresh lemon juice into a pitcher. Add water and sugar according to your taste preferences and stir until the sugar dissolves completely. Then, add a pinch of black salt, roasted cumin powder, and a dash of ground black pepper for a tangy and flavorful twist. Mix well and refrigerate the Shikanji for at least 1-2 hours to allow the flavors to meld together. Serve chilled over ice cubes, garnished with fresh mint leaves or lemon slices, and enjoy this cooling summer drink!',
        rating: 0,
        videoLink:'https://www.youtube.com/watch?v=8ygXBT4P0fg',
        imageSrc: 'https://th.bing.com/th/id/OIP.CG0n-havC8sBUsThySsuMwHaLH?w=122&h=183&c=7&r=0&o=5&dpr=1.3&pid=1.7',
        reviews: [{ user: 'User10', feedback: 'Perfect summer drink, very refreshing!' }]
    },

     {
        title: 'Ackee and Saltfish',
        category: 'West Indian',
        instructions:'Ackee and Saltfish is a beloved Jamaican dish, often considered the countrys national dish and enjoyed for breakfast or any meal of the day. It combines two main ingredients: ackee, a tropical fruit with a creamy texture, and salted codfish. The dish is cooked with a flavorful medley of sautéed onions, bell peppers, garlic, and Scotch bonnet peppers, seasoned with salt, black pepper, and sometimes fresh thyme. The ackee and saltfish are gently combined to create a savory and satisfying dish bursting with Caribbean flavors. It is a typically served hot and pairs wonderfully with fried dumplings, boiled green bananas, or fried plantains, offering a taste of Jamaicas rich culinary heritage.',
        rating: 0,
        videoLink:'https://www.youtube.com/watch?v=iKtA2-rcTjg',
        imageSrc: 'https://th.bing.com/th/id/OIP.XfQAfIEfKoDlIPK_cGXBJgEyDM?w=291&h=194&c=7&r=0&o=5&dpr=1.3&pid=1.7',
        reviews: [{ user: 'User1', feedback: 'Authentic and flavorful, a must-try!' }]
    },
    
    {
        title: 'Curry Goat',
        category: 'West Indian',
        instructions:'Curry goat is a traditional Caribbean dish, particularly popular in Jamaica and other islands in the region. It involves marinating pieces of goat meat in a flavorful blend of spices and herbs, which typically include curry powder, garlic, ginger, thyme, onions, scallions, Scotch bonnet peppers, and various other seasonings. The marinated goat is then cooked slowly in a rich and aromatic curry sauce until the meat becomes tender and flavorful. It often served with rice and peas, boiled yams, dumplings, or roti for a hearty and satisfying meal that showcases the vibrant flavors of Caribbean cuisine.',
        rating: 0,
        videoLink:'https://www.youtube.com/watch?v=el7KKPlS8cU',
        imageSrc: 'https://th.bing.com/th/id/OIP.W26fAmOrkw12A_-nh24uRQHaFj?w=217&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
        reviews: [{ user: 'User2', feedback: 'Tender and delicious, loved the curry flavor!' }]
    },
    
    {
        title: 'Roti',
        category: 'West Indian',
        instructions:'Roti is a type of unleavened flatbread that is widely consumed in South Asia and the Caribbean. It is typically made from whole wheat flour, water, and sometimes oil or ghee. The dough is kneaded until smooth, divided into small portions, rolled into thin discs, and then cooked on a hot griddle or tawa until golden brown spots appear on both sides. Roti can be served alongside various dishes such as curries, stews, or grilled meats, or it can be used to wrap fillings to make sandwiches or wraps. It is a staple food in many cultures and is appreciated for its simplicity, versatility, and ability to complement a wide range of flavors.',
        rating: 0,
        videoLink:'https://www.youtube.com/watch?v=jnQgkwVsMgc',
        imageSrc: 'https://th.bing.com/th/id/OIP.UNgacJD-rUrbcF-5I5CdFQHaIZ?w=168&h=191&c=7&r=0&o=5&dpr=1.3&pid=1.7',
        reviews: [{ user: 'User3', feedback: 'Perfect with curry, loved the texture!' }]
    },
    
    {
        title: 'Callaloo',
        category: 'West Indian',
        instructions:'Callaloo is a popular Caribbean dish made primarily from amaranth leaves or taro leaves, and often flavored with coconut milk, onions, garlic, and sometimes tomatoes and peppers. It is typically cooked down into a thick, stew-like consistency and served as a side dish or as a main course with rice, roti, or bread. Callaloo is rich in vitamins and minerals and is enjoyed for its unique flavor and nutritional benefits. It is a staple dish in many Caribbean countries, where it is considered a comfort food and an essential part of the local cuisine.',
        rating: 0,
        videoLink:'https://www.youtube.com/watch?v=m4NWbkNWAIk',
        imageSrc: 'https://th.bing.com/th/id/OIP.Z0vYy3CBahg1KY1Q5JB7SAHaJf?w=148&h=191&c=7&r=0&o=5&dpr=1.3&pid=1.7',
        reviews: [{ user: 'User4', feedback: 'Creamy and flavorful, a great side dish!' }]
    },
    
    {
        title: 'Jerk Chicken',
        category: 'West Indian',
        instructions  : 'Jerk chicken is typically made by marinating chicken pieces in a mixture called jerk seasoning, which includes ingredients like scotch bonnet peppers, allspice, thyme, garlic, ginger, cinnamon, nutmeg, and various other spices and herbs. The chicken is then grilled over a wood fire or cooked in a smoker to infuse it with a smoky flavor and charred exterior. The result is tender, flavorful chicken with a spicy kick and a hint of sweetness from the seasoning. Jerk chicken is often served with traditional sides like rice and peas, fried plantains, coleslaw, or festival (a type of sweet fried bread). It a staple dish in Jamaican cuisine and is enjoyed by people around the world for its bold and distinctive flavor profile.',     
        rating: 0,
        videoLink:'https://www.youtube.com/watch?v=WUlQv4XD1pk',
        imageSrc: 'https://th.bing.com/th/id/OIP.9zDjw-F4eQi0738kXOsCcwHaHa?w=187&h=188&c=7&r=0&o=5&dpr=1.3&pid=1.7',
        reviews: [{ user: 'User5', feedback: 'Spicy and flavorful, loved the jerk seasoning!' }]
    },
    
    {
        title: 'Pepperpot',
        category: 'West Indian',
        instructions:'Pepperpot, a staple in Caribbean cuisine, is a flavorful stew that reflects the diverse cultural influences of the region. Rooted in tradition and history, it blends indigenous cooking methods with African and European ingredients. Typically made with meat, cassava, and a variety of vegetables, the stew is simmered slowly with cassareep—a sauce derived from cassava root—and aromatic spices. Its rich, complex flavors and deep, dark color make it a symbol of celebration and community, enjoyed at gatherings and special occasions throughout the Caribbean.',
        rating: 0,
        videoLink:'https://www.youtube.com/watch?v=dyAR43lShTM',
        imageSrc: 'https://th.bing.com/th/id/OIP.sTA3XccrxTfoxqlEStm64wHaHa?w=158&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
        reviews: [{ user: 'User6', feedback: 'Comfort food at its best, hearty and delicious!' }]
    },
    
{
        title: 'Bake and Shark',
        category: 'West Indian',
        instructions:'Bake and shark is a beloved Trinidadian street food, renowned for its bold flavors and satisfying crunch. This culinary delight features a fried flatbread known as "bake," stuffed with seasoned and deep-fried shark meat. Often served with an array of vibrant toppings and condiments like shredded lettuce, tomatoes, cucumbers, pineapple slices, tamarind sauce, and fiery pepper sauce, it offers a symphony of textures and tastes. Its popularity stems from its accessibility and versatility, making it a go-to choice for locals and visitors alike seeking a taste of Trinidad vibrant food culture.',
        rating: 0,
        videoLink:'https://www.youtube.com/watch?v=Vs_3wuEjXq0',
        imageSrc: 'https://th.bing.com/th/id/OIP.M4nUrrpeDytrxTgzWdb6AAHaDg?w=331&h=165&c=7&r=0&o=5&dpr=1.3&pid=1.7',
        reviews: [{ user: 'User7', feedback: 'Crunchy and flavorful, a unique street food experience!' }]
    },
    
    {
        title: 'Doubles',
        category: 'West Indian',
        instructions:'Doubles are a popular street food originating from Trinidad and Tobago, consisting of two soft, fluffy bara (fried bread) filled with curried channa (chickpeas). The bara is made from a mixture of flour, baking powder, turmeric, and other spices, deep-fried until golden brown and crispy on the outside. The curried channa is typically seasoned with a blend of aromatic spices like cumin, coriander, turmeric, and fenugreek, simmered until tender and flavorful. Doubles are often served with various condiments such as tamarind sauce, mango chutney, cucumber chutney, and fiery pepper sauce, adding layers of tanginess, sweetness, and heat to the dish. This beloved street food is a staple of Trinidadian cuisine, enjoyed by locals and visitors alike for its delicious flavors and satisfying textures.',
        rating: 0,
        videoLink:'https://www.youtube.com/watch?v=fcZiW9Y1B-8',
        imageSrc: 'https://th.bing.com/th/id/OIP.Tv4QUg438YeCZ08DvHKjTgHaE9?w=234&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7s',
        reviews: [{ user: 'User8',feedback: 'Perfectly spiced and flavorful, loved the chutneys!' }]
    },
    
    {
        title: 'Fish Fry',
        category: 'West Indian',
        instructions:'Fish fry is a beloved dish cherished for its simplicity and delicious flavor. It starts with fresh fish fillets, which are marinated in a blend of tangy lemon juice, aromatic garlic, zesty ginger, and a touch of heat from paprika and cayenne pepper. The fillets are then coated in a seasoned mixture of flour, cornmeal, and breadcrumbs, ensuring a crispy exterior when fried to golden perfection. The hot oil transforms the fish into a crunchy delight, with each bite revealing moist, tender flesh within. Served alongside classic accompaniments like tartar sauce, coleslaw, and lemon wedges, fish fry embodies the essence of coastal cuisine, offering a satisfying meal that delights the senses with its tantalizing aroma and irresistible taste.',
        rating: 0,
        videoLink:'https://www.youtube.com/watch?v=UQ91Zoc5f-o',
        imageSrc: 'https://th.bing.com/th/id/OIP.vx70VKi7PCRJASgkNMpYhwHaHa?w=176&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
        reviews: [{ user: 'User9', feedback: 'Crispy and delicious, a classic dish!' }]
    },
    
    {
        title: 'Conkies',
        category: 'West Indian',
        instructions:'Conkies are a traditional Caribbean delicacy, especially popular in Barbados during the celebration of Barbados Independence Day on November 30th. These sweet treats are made from a combination of cornmeal, grated coconut, pumpkin, sweet potato, raisins, and spices like cinnamon and nutmeg. The mixture is sweetened with sugar or molasses and bound together with coconut milk, then wrapped in banana leaves and steamed until cooked through. Conkies have a unique texture, combining the softness of the steamed ingredients with the slight chewiness from the cornmeal and coconut. They are enjoyed as a special treat during festivities and are often served warm with a cup of tea or enjoyed on their own as a delightful snack.',
        rating: 0,
        videoLink:'https://www.youtube.com/watch?v=hZFqlUPBKb4',
        imageSrc: 'https://th.bing.com/th/id/OIP.7syfEyCjN3ZVX7SbDVpXGwHaF7?w=184&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
        reviews: [{ user: 'User10', feedback: 'Rich and comforting, loved the combination of flavors!' }]
    },
    {
        "title": "Dal Baati Churma",
        "category": "Rajasthani Cuisine",
        instructions:'Dal Baati Churma is a quintessential Rajasthani dish that embodies the rich culinary heritage of the region. Baati, a dense and flaky bread, is traditionally baked over open flames, lending it a rustic, smoky flavor. Accompanying the baati is the creamy dal, a lentil curry infused with aromatic spices like cumin, coriander, and turmeric, offering a comforting and satisfying contrast. Completing the trio is the indulgent churma, made from crushed baati mixed with ghee and sugar, delivering a delightful sweetness that perfectly complements the savory components. This wholesome and flavorful combination reflects the vibrant culture and culinary traditions of Rajasthan, making it a beloved and cherished dish enjoyed during festive celebrations and gatherings.',
        "rating": 0,
        videoLink:'https://www.youtube.com/watch?v=kRjU6rZ0ni4',
        imageSrc: 'https://th.bing.com/th/id/OIP.Bhrs8W64ajAsSZ2Fk_knxwHaJA?w=154&h=187&c=7&r=0&o=5&dpr=1.3&pid=1.7',
        "reviews": [
          {
            "user": "RajasthaniFoodie",
            "feedback": "Dal Baati Churma is the epitome of Rajasthani cuisine. Delicious!"
          }
        ]
      },
      {
        "title": "Gatte ki Sabji",
        "category": "Rajasthani Cuisine",
        instructions:'Gatte ki sabzi is a popular Rajasthani dish featuring chickpea flour (besan) dumplings cooked in a flavorful yogurt-based gravy. The gatte, or dumplings, are made by kneading chickpea flour with spices, forming it into a dough, and then shaping it into cylindrical logs. These logs are then boiled until cooked through and sliced into bite-sized pieces. The gravy is prepared by blending yogurt with spices like turmeric, red chili powder, coriander powder, and garam masala. The gatte pieces are simmered in this rich and creamy gravy until they absorb the flavors and become tender. The dish is garnished with fresh cilantro and sometimes tempered with mustard seeds, cumin seeds, and dried red chilies for extra aroma and flavor. Gatte ki sabzi is typically served hot with roti or rice, making it a hearty and satisfying meal that showcases the robust flavors of Rajasthani cuisine.',
        "rating": 0,
        videoLink:'https://www.youtube.com/watch?v=mVwjjnwAIXY',
        imageSrc: 'https://th.bing.com/th/id/OIP.F4VYq1T9_Bc0vnWgMYAlUAHaGT?w=174&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
        "reviews": [
          {
            "user": "GatteLover",
            "feedback": "Gatte ki Sabji has the perfect balance of flavors. Truly Rajasthani delight!"
          }
        ]
      },
      {
        "title": "Laal Maas",
        "category": "Rajasthani Cuisine",
        instructions:'Laal maas is a fiery and flavorful Rajasthani dish known for its rich and spicy taste. It made with tender mutton pieces cooked in a luscious gravy infused with a blend of aromatic spices, including red chili powder, garlic, ginger, and a special Rajasthani spice blend known as mathania masala. The dish gets its vibrant red color from the generous use of Kashmiri red chili powder. Traditionally, the mutton is slow-cooked until it becomes incredibly tender and absorbs all the flavors of the spices and the gravy. Laal maas is often enjoyed with traditional Indian bread like chapati or bajra roti, though it pairs equally well with steamed rice. This dish is a testament to the bold and robust flavors that characterize Rajasthani cuisine.',
        "rating": 0,
        videoLink:'https://www.youtube.com/watch?v=xAhZZiZ5S50',
        imageSrc: 'https://th.bing.com/th/id/OIP.nC1kyuRKBuVZRWlaPM_QkQHaHa?w=226&h=220&c=7&r=0&o=5&dpr=1.3&pid=1.7',
        "reviews": [
          {
            "user": "SpiceMaster",
            "feedback": "Laal Maas packs a punch! Rajasthani cuisine at its fiery best."
          }
        ]
      },
      {
        "title": "Ker Sangri",
        "category": "Rajasthani Cuisine",
        instructions:'Ker sangri is a traditional Rajasthani dish that showcases the region culinary heritage. It a flavorful and aromatic preparation made with two key ingredients: ker, which are small, tangy wild berries, and sangri, which are dried beans or pods from the khejri tree. These ingredients are cooked together with an assortment of spices such as red chili powder, turmeric, coriander powder, and cumin seeds, along with other flavorings like dried mango powder (amchur) and fenugreek seeds. The dish is typically cooked slowly to allow the flavors to meld together and develop into a rich and tangy gravy. Ker sangri is often enjoyed with roti or bajra ki roti (pearl millet flatbread) and is a staple in Rajasthani cuisine, appreciated for its unique taste and rustic charm.',
        "rating": 0,
        videoLink:'https://www.youtube.com/watch?v=AZb-W71BegI',
        imageSrc: 'https://th.bing.com/th/id/OIP.ObsArMdMb99iEHOOK58nUgHaLH?w=115&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
        "reviews": [
          {
            "user": "DesertDweller",
            "feedback": "Ker Sangri is a unique dish with a burst of flavors. Love it!"
          }
        ]
      },
      {
        "title": "Pyaaz Kachori",
        "category": "Rajasthani Cuisine",
        instructions:'Pyaaz kachori is a popular Indian snack hailing from Rajasthan, known for its delightful combination of flavors and textures. These deep-fried pastries are filled with a spicy and tangy mixture of seasoned onions, along with a blend of aromatic spices such as cumin, coriander, chili powder, and garam masala. The outer crust is made from a crisp and flaky dough, prepared with flour, ghee (clarified butter), and a pinch of salt. Once assembled, the kachoris are deep-fried until they achieve a golden-brown hue and a satisfying crunch. Pyaaz kachori is often served hot and enjoyed with tangy tamarind chutney or spicy green chutney, making it a beloved street food and snack across India.',
        "rating": 0,
        videoLink:'https://www.youtube.com/watch?v=MeVJC5iP_nU',
        imageSrc: 'https://th.bing.com/th/id/OIP.oU588RdohMDQ3nWp7mv49QHaE8?w=259&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
        "reviews": [
          {
            "user": "KachoriFanatic",
            "feedback": "Pyaaz Kachori is a Rajasthani street food gem. Crispy and flavorful!"
          }
        ]
      },
      {
        "title": "Mawa Kachori",
       "category": "Rajasthani Cuisine",
       instructions:'Mawa kachori is a delectable dessert originating from Rajasthan, India, renowned for its rich and indulgent flavors. These deep-fried pastries are stuffed with a sweet and creamy mixture of mawa (reduced milk solids), sugar, nuts like almonds and pistachios, and aromatic spices such as cardamom and saffron. The outer shell is made from a crispy dough prepared with flour, ghee (clarified butter), and water. Once fried until golden brown, the kachoris are dipped in a fragrant sugar syrup, infusing them with sweetness and moisture. Mawa kachori is often served as a festive treat during special occasions like weddings and festivals, delighting palates with its irresistible combination of textures and tastes.',
       "rating": 0,
        videoLink:'https://www.youtube.com/watch?v=hhOGsZpU0Ag',
        imageSrc: 'https://th.bing.com/th/id/OIP.Y1ibgEsig82pPj7DpUXxgQHaFj?w=243&h=182&c=7&r=0&o=5&dpr=1.3&pid=1.7',
        "reviews": [
          {
            "user": "SweetTooth",
            "feedback": "Mawa Kachori is a delightful Rajasthani dessert. Rich and indulgent!"
          }
        ]
      },
      {
        "title": "Mirchi Vada",
        "category": "Rajasthani Cuisine",
        instructions:'Mirchi vada is a popular Indian snack hailing from the state of Rajasthan, known for its spicy and flavorful taste. This delectable dish consists of large green chilies, typically bhavnagri or banana peppers, stuffed with a savory filling, coated in a gram flour batter, and deep-fried until crispy. The filling usually comprises a mixture of mashed potatoes, spices like turmeric, cumin, and coriander, along with chopped cilantro and sometimes crushed peanuts or raisins for added texture and flavor. The stuffed chilies are then dipped in a seasoned gram flour batter and fried until golden brown and crispy on the outside, while still retaining their fiery heat on the inside. Mirchi vada is often served hot with tangy tamarind or mint chutney, offering a delightful contrast to the spiciness of the peppers. This snack is cherished for its bold flavors and is enjoyed as a street food delicacy across India.',
        "rating": 0,
        videoLink:'https://www.youtube.com/watch?v=5oSulCW3QGw',
        imageSrc: 'https://th.bing.com/th/id/OIP.emhFzlrxnTgk_2oD7EvwtAHaHa?w=177&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
        "reviews": [
          {
            "user": "ChiliLover",
            "feedback": "Mirchi Vada is for those who love a good kick! Rajasthani street food at its best."
          }
        ]
      },
      {
        "title": "Rajasthani Kadhi",
        "category": "Rajasthani Cuisine",
        instructions:'Rajasthani Kadhi is a traditional dish from the Indian state of Rajasthan, known for its unique flavor and simplicity. Unlike the Punjabi version, which uses yogurt and besan (gram flour) as its base, Rajasthani Kadhi is typically made with buttermilk (chhaas) and besan, giving it a lighter consistency. To prepare Rajasthani Kadhi, besan is mixed with buttermilk to form a smooth paste, ensuring there are no lumps. The mixture is then seasoned with spices like turmeric, red chili powder, coriander powder, and cumin seeds. In a separate pan, a tempering (tadka) is prepared by heating ghee or oil and adding mustard seeds, cumin seeds, fenugreek seeds, dried red chilies, curry leaves, and asafoetida. Once the spices are aromatic, the buttermilk mixture is added and brought to a gentle simmer, stirring continuously to prevent lumps. The kadhi is allowed to cook until it thickens slightly and the raw taste of besan disappears. It is often served hot with steamed rice or khichdi, garnished with fresh coriander leaves and a sprinkle of red chili powder for an extra kick. Rajasthani Kadhi is cherished for its tangy and slightly spicy flavor, making it a comforting and satisfying meal, especially during the hot summer months. ',
        "rating": 0,
        videoLink:'https://www.youtube.com/watch?v=8kjRH6eYvY0',
       imageSrc:'https://th.bing.com/th/id/OIP.ZMkzNNlLuAPMRfoK2Y9OwgHaHa?w=190&h=191&c=7&r=0&o=5&dpr=1.3&pid=1.7',
        "reviews": [
          {
            "user": "KadhiConnoisseur",
            "feedback": "Rajasthani Kadhi with steamed rice is comfort food heaven. Absolutely delicious!"
          }
        ]
      },
      {
        "title": "Ghevar",
        "category": "Rajasthani Cuisine",
        "instructions":'Ghevar is a traditional Rajasthani dessert known for its intricate latticed appearance and rich, syrupy texture. Made primarily from flour, ghee (clarified butter), and sugar, ghevar is a delicacy often prepared during festivals and special occasions, particularly during the monsoon season and the Teej festival. To make ghevar, a batter of flour, ghee, and water is prepared and poured into a special round mold with a cylindrical center. The batter is then deep-fried in ghee until it forms a crispy, golden-brown lattice. Once cooked, the ghevar is removed from the mold and allowed to cool. It is then typically soaked in a sugar syrup flavored with saffron, cardamom, and sometimes rose water, imparting a sweet and aromatic taste to the dessert. Ghevar is often garnished with nuts such as almonds, pistachios, and cashews, adding a crunchy texture and visual appeal. This indulgent dessert is enjoyed across Rajasthan and beyond, and its intricate preparation and unique flavor make it a cherished part of Indian culinary heritage.',
        "rating": 0,
        videoLink:'https://www.youtube.com/watch?v=zIKIw4lkSoM',
        imageSrc: 'https://th.bing.com/th/id/OIP.sp3zTUp7aOSmbZ9DRpCFkAHaLO?w=128&h=194&c=7&r=0&o=5&dpr=1.3&pid=1.7',
        "reviews": [
          {
            "user": "SweetLover",
            "feedback": "Ghevar is a quintessential Rajasthani dessert. Rich and utterly delightful!"
          }
        ]
      },
      {
        "title": "Papad ki Sabji",
        "category": "Rajasthani Cuisine",
        "instructions":'Papad ki Sabji is a simple yet flavorful Indian dish made from papads (thin, crispy lentil wafers) cooked in a spicy and tangy gravy. To prepare the sabji, papads are broken into pieces and briefly roasted or fried until they become crispy. In a separate pan, a tempering of mustard seeds, cumin seeds, asafoetida, and curry leaves is prepared in oil or ghee. Chopped onions, tomatoes, ginger, and garlic are then sautéed until they turn soft and aromatic. A blend of spices such as turmeric, coriander, cumin, red chili powder, and garam masala is added to the pan, along with water or broth to create a flavorful gravy. The crispy papad pieces are then added to the gravy and simmered until they absorb the flavors of the spices and soften slightly. Papad ki Sabji is typically garnished with fresh coriander leaves and served hot with rice or roti, offering a delightful combination of textures and tastes that is both comforting and satisfying.',
        "rating": 0,
        videoLink:'https://www.youtube.com/watch?v=CeqIW3nZ570',
        imageSrc: 'https://th.bing.com/th/id/OIP._DUpcR6bdAzB4LCR0meO-wHaEp?w=198&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
        "reviews": [
          {
            "user": "PapadFan",
            "feedback": "Papad ki Sabji is a Rajasthani specialty that surprises with its simplicity and taste."
          }
        ]
      },
     {
          "title": "Sarson da Saag",
          "category": "Punjabi Cuisine",
          "instructions":'Sarson da Saag is a traditional Punjabi dish made from mustard greens (sarson) and other leafy greens such as spinach and bathua. To prepare this iconic dish, the greens are washed thoroughly and then finely chopped. They are then boiled until tender and mashed or pureed to create a coarse mixture. In a separate pan, a tempering of onions, garlic, ginger, green chilies, and spices such as cumin, coriander, turmeric, and red chili powder is prepared in ghee or oil. Once the tempering is aromatic, the mashed greens are added to the pan and cooked together with the spices until the flavors meld together and the mixture thickens. Sarson da Saag is typically served hot with makki di roti (cornmeal flatbread) and a dollop of fresh butter or ghee, creating a hearty and nutritious meal that is especially popular during the winter months in Punjab. Rich in flavor and packed with nutrients, Sarson da Saag is a beloved part of Punjabi cuisine and is enjoyed by people of all ages across the region.',
          "rating": 0,
          videoLink:'https://www.youtube.com/watch?v=V7XCQ78j4ic',
          imageSrc: 'https://th.bing.com/th/id/OIP.jLFWJssag8pIGmsd6xmK2AHaHa?w=168&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
          "reviews": [
            {
              "user": "PunjabiFoodie",
              "feedback": "Absolutely delicious! Reminds me of home."
            }
          ]
        },
        {
          "title": "Makki di Roti",
          "category": "Punjabi Cuisine",
          "instructions":'Makki di Roti is a traditional Punjabi flatbread made from maize flour (cornmeal) and water. To prepare Makki di Roti, maize flour is combined with water and kneaded into a firm dough. The dough is then divided into small portions and shaped into round balls. These balls are flattened into discs by pressing them between the palms or using a rolling pin, taking care to maintain a uniform thickness. The flattened discs are then cooked on a hot griddle or tawa until golden brown and cooked through, with occasional flipping to ensure even cooking. Makki di Roti is typically served hot with Sarson da Saag (mustard greens curry) or other Punjabi dishes, and is often accompanied by a dollop of fresh butter or ghee for added flavor. Its rustic texture and earthy flavor make Makki di Roti a beloved staple in Punjabi cuisine, especially during the winter months when fresh maize is abundant.',
          "rating": 0,
          videoLink:'https://www.youtube.com/watch?v=CPrJZeoLtRs',
          imageSrc: 'https://th.bing.com/th/id/OIP.J0IwzN6FaldcbwJLr85XhAHaLe?w=123&h=192&c=7&r=0&o=5&dpr=1.3&pid=1.7',
          "reviews": [
            {
              "user": "RotiLover",
              "feedback": "Perfectly crispy and goes so well with Sarson da Saag."
            }
          ]
        },
        {
          "title": "Chole Bhature",
          "category": "Punjabi Cuisine",
          "instructions":'Chole Bhature is a classic North Indian dish consisting of spicy chickpea curry (chole) served with deep-fried bread (bhature). To prepare the chole, chickpeas (kabuli chana) are soaked overnight and then cooked with onions, tomatoes, ginger, garlic, and a blend of spices such as cumin, coriander, turmeric, garam masala, and dried mango powder (amchur), until they are soft and flavorful. The resulting curry is rich, tangy, and aromatic, with a hearty texture. Bhature, on the other hand, is made from a dough of refined flour (maida), yogurt, baking powder, and sometimes semolina (sooji), which is kneaded into a smooth dough, rolled out into thin discs, and deep-fried until golden brown and puffed up. The crispy and fluffy bhature is the perfect accompaniment to the spicy and flavorful chole, creating a delicious and satisfying meal that is often enjoyed for breakfast or as a hearty snack. Chole Bhature is commonly served with sliced onions, green chilies, and pickle, and is a popular street food across North India, loved for its bold flavors and comforting appeal. ',
          "rating": 0,
          videoLink:'https://www.youtube.com/watch?v=FU1ZVLMbWjA',
          imageSrc: 'https://th.bing.com/th/id/OIP.P13hIX9w9Apt04zskDD69QHaFb?w=217&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
          "reviews": [
            {
              "user": "CholeFanatic",
              "feedback": "The best Chole Bhature I've ever had! Spices are on point."
            }
          ]
        },
        {
          "title": "Butter Chicken",
          "category": "Punjabi Cuisine",
          "instructions":'Butter Chicken, also known as Murgh Makhani, is a beloved Indian dish featuring tender chicken pieces marinated in yogurt and spices, then cooked in a creamy tomato-based sauce. The chicken is typically grilled or pan-fried to perfection before being simmered in a rich sauce made from onions, garlic, ginger, tomatoes, and cashew paste, enriched with butter and cream for a luxurious finish. Garnished with fresh coriander leaves, Butter Chicken is served hot with naan, roti, or rice, offering a harmonious blend of flavors and textures that delights taste buds with every bite, making it a perennial favorite in Indian cuisine.',
          "rating": 0,
          videoLink:'https://www.youtube.com/watch?v=a03U45jFxOI',
          imageSrc: 'https://th.bing.com/th/id/OIP.yu0XY3cVBaXEYXrX49sxHAHaLH?w=180&h=270&c=7&r=0&o=5&dpr=1.3&pid=1.7',
          "reviews": [
            {
              "user": "ButterChickenLover",
              "feedback": "So rich and flavorful! A true Punjabi classic."
            }
          ]
        },
        {
          "title": "Paneer Tikka",
          "category": "Punjabi Cuisine",
          "instructions":'Paneer Tikka is a popular Indian appetizer made from marinated cubes of paneer (Indian cottage cheese) that are skewered and grilled or baked until charred and flavorful. To prepare Paneer Tikka, paneer cubes are marinated in a mixture of yogurt, ginger-garlic paste, lemon juice, and a blend of spices such as cumin, coriander, turmeric, garam masala, and red chili powder, along with salt and a pinch of kasuri methi (dried fenugreek leaves) for added flavor. The marinated paneer cubes are then threaded onto skewers along with chunks of bell peppers, onions, and tomatoes for color and additional flavor. The skewers are grilled over a hot barbecue, tandoor (clay oven), or baked in the oven until the paneer and vegetables are cooked through and charred at the edges. Paneer Tikka is typically served hot, garnished with lemon wedges and fresh coriander leaves, and is often accompanied by mint chutney, onion rings, and a sprinkle of chaat masala for an extra burst of flavor. This delectable appetizer is loved for its smoky aroma, tender paneer, and vibrant spices, making it a favorite at parties, gatherings, and celebrations across India.',
          "rating": 0,
          videoLink:'https://www.youtube.com/watch?v=I1q6PwT0jtE',
          imageSrc: 'https://th.bing.com/th/id/OIP.rmfdec0BPpCFEx2zxrK2hAHaGM?w=224&h=187&c=7&r=0&o=5&dpr=1.3&pid=1.7',
          "reviews": [
            {
              "user": "PaneerAddict",
              "feedback": "Paneer Tikka never disappoints! Always a crowd-pleaser."
            }
          ]
        },
        {
          "title": "Dal Makhani",
          "category": "Punjabi Cuisine",
          "instructions":'Dal Makhani is a rich and creamy North Indian lentil curry made from whole black lentils (urad dal), red kidney beans (rajma), butter, cream, and a blend of aromatic spices. To prepare Dal Makhani, whole black lentils and kidney beans are soaked overnight and then cooked until tender and creamy. In a separate pan, a flavorful base is created by sautéing onions, tomatoes, ginger, garlic, and a blend of spices such as cumin, coriander, turmeric, and garam masala, until they are soft and aromatic. The cooked lentils and kidney beans are then added to the base, along with butter and cream, and simmered until the flavors meld together and the curry thickens to a creamy consistency. Dal Makhani is typically garnished with fresh cream and chopped coriander leaves before serving, and is enjoyed hot with rice, naan, or roti, making it a comforting and indulgent dish that is loved by people of all ages across India and beyond.',
          "rating": 0,
          videoLink:'https://www.youtube.com/watch?v=FTIjbV6yczo',
          imageSrc:'https://th.bing.com/th/id/OIP.pSEGKJwkc3JWMBhb9b1PZgHaHa?w=214&h=215&c=7&r=0&o=5&dpr=1.3&pid=1.7',
          "reviews": [
            {
              "user": "DalConnoisseur",
              "feedback": "Dal Makhani cooked to perfection! Creamy and flavorful."
            }
          ]
        },
        {
          "title": "Aloo Paratha",
          "category": "Punjabi Cuisine",
          "instructions":'Aloo Paratha is a popular North Indian flatbread stuffed with a spiced mashed potato filling. To prepare Aloo Paratha, a dough is made from whole wheat flour (atta), water, and a pinch of salt, which is kneaded until smooth and elastic. Meanwhile, potatoes are boiled, mashed, and mixed with finely chopped onions, green chilies, coriander leaves, and a blend of spices such as cumin powder, coriander powder, turmeric, red chili powder, and garam masala, creating a flavorful filling. Small portions of the dough are rolled out into discs, the potato filling is placed in the center, and the dough is sealed and rolled out again into a flat round shape. The stuffed paratha is then cooked on a hot griddle or tawa with ghee or oil until golden brown and crispy on both sides. Aloo Paratha is typically served hot with a dollop of butter, yogurt, or pickle, making it a delicious and satisfying meal enjoyed for breakfast, lunch, or dinner across India. Its soft and fluffy texture, combined with the flavorful potato filling, makes Aloo Paratha a beloved staple in Indian cuisine.',
          "rating": 0,
          videoLink:'https://www.youtube.com/watch?v=r2N8ObqAgy0',
          imageSrc: 'https://th.bing.com/th/id/OIP.zZ7ZZq40twsfJY-x0yFyHQHaFj?w=210&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
          "reviews": [
            {
              "user": "ParathaFan",
              "feedback": "Aloo Paratha with a dollop of butter is heaven on a plate."
            }
          ]
        },
        {
          "title": "Rajma Chawal",
          "category": "Punjabi Cuisine",
          "instructions":'Rajma Chawal is a classic North Indian dish consisting of red kidney beans (rajma) cooked in a thick, flavorful gravy, served with steamed basmati rice (chawal). To prepare the dish, dried rajma beans are soaked overnight and then cooked until tender. In a separate pan, onions, tomatoes, ginger, garlic, and a blend of spices such as cumin, coriander, turmeric, and garam masala are sautéed until aromatic. The cooked rajma beans are then added to the spice mixture along with water or broth, and simmered until the flavors meld together and the gravy thickens. The dish is typically garnished with fresh coriander leaves and served hot with steamed basmati rice, creating a comforting and satisfying meal that is enjoyed by people of all ages across North India. Rajma Chawal is often accompanied by side dishes like raita (yogurt-based dip), papad (crispy lentil wafers), or pickles, adding to the overall dining experience.',
          "rating": 0,
          videoLink:'https://www.youtube.com/watch?v=M_ncAJhIaIU',
          imageSrc:'https://th.bing.com/th/id/OIP.0kkMJfkgTaEeR21hq1IKyQHaLH?w=128&h=192&c=7&r=0&o=5&dpr=1.3&pid=1.7',
          "reviews": [
            {
              "user": "RajmaEnthusiast",
              "feedback": "Comfort food at its best! Rajma Chawal is soul-satisfying."
            }
          ]
        },
        {
          "title": "Amritsari Kulcha",
          "category": "Punjabi Cuisine",
          "instructions":'Amritsari Kulcha is a traditional Punjabi flatbread renowned for its soft texture, crispy exterior, and rich flavor. Originating from the city of Amritsar in Punjab, India, this iconic dish is made from a leavened dough of refined flour (maida) and yogurt, enriched with baking powder or baking soda to create a fluffy texture. The dough is then stuffed with a savory filling typically consisting of mashed potatoes, paneer (Indian cottage cheese), onions, green chilies, and a blend of spices such as coriander powder, cumin powder, chaat masala, and dried mango powder (amchur). After the filling is enclosed within the dough, the kulchas are rolled out into flat discs and baked in a tandoor (clay oven) until they puff up and develop a golden-brown crust. The result is a mouthwatering delicacy that pairs perfectly with chole (spicy chickpea curry), pickles, and yogurt-based raita. Amritsari Kulcha is a beloved street food and a staple in Punjabi cuisine, cherished for its irresistible taste and comforting aroma. ',
          "rating": 0,
          videoLink:'https://www.youtube.com/watch?v=pbI8PkiSB8E',
          imageSrc:'https://th.bing.com/th/id/OIP.3rLndobLdRg_nKlFMhcgPAHaFj?w=239&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
          "reviews": [
            {
              "user": "KulchaAficionado",
              "feedback": "Amritsari Kulcha straight from the tandoor is a delight!"
            }
          ]
        },
        {
          "title": "Punjabi Kadhi Pakora",
          "category": "Punjabi Cuisine",
          "instructions":'Punjabi Kadhi Pakora is a popular North Indian dish that combines deep-fried gram flour (besan) dumplings (pakoras) with a tangy and flavorful yogurt-based curry (kadhi). To prepare the kadhi, yogurt is mixed with besan, turmeric, red chili powder, and other spices, then cooked until it thickens. In a separate pan, a tempering of mustard seeds, cumin seeds, fenugreek seeds, dried red chilies, and curry leaves is prepared in ghee or oil, and then added to the kadhi. The pakoras, made from a batter of besan, onions, green chilies, and spices, are deep-fried until golden brown and crispy. Once cooked, the pakoras are added to the kadhi and allowed to simmer until they absorb the flavors of the curry. Punjabi Kadhi Pakora is typically served hot with steamed rice or roti, and is enjoyed for its comforting flavors and hearty texture, making it a popular choice for lunch or dinner, especially during festive occasions and gatherings.',
          "rating": 0,
          videoLink:'https://www.youtube.com/watch?v=h5V1YVIqd-4',
          imageSrc:'https://th.bing.com/th/id/OIP.62smoFert3KsozPieRNRIgHaJ3?w=128&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
          "reviews": [
            {
              "user": "KadhiLover",
              "feedback": "Kadhi Pakora with steamed rice is my ultimate comfort food."
            }
          ]
        },
        
            {
              "title": "Dhokla",
              "category": "Gujarati Cuisine",
              "instructions":'Dhokla is a savory steamed cake originating from the Indian state of Gujarat, known for its light and spongy texture, tangy flavor, and versatility. Made primarily from fermented rice and chickpea flour (besan), dhokla batter is seasoned with ginger, green chilies, and sometimes a pinch of turmeric for color. The batter is then steamed until it rises and sets, resulting in a soft and airy cake. Once cooked, the dhokla is typically cut into squares or diamonds and tempered with a mixture of mustard seeds, curry leaves, and green chilies fried in oil, which adds a burst of flavor and aroma. Dhokla can be served as a snack, appetizer, or even as part of a meal, and is often accompanied by green chutney or sweet tamarind chutney. Its light and refreshing taste, combined with its ease of preparation, make dhokla a beloved dish enjoyed by people of all ages, both within Gujarat and beyond.',
              "rating": 0,
              videoLink:'https://www.youtube.com/watch?v=h5V1YVIqd-4',
              imageSrc:'https://th.bing.com/th/id/OIP.Sx7H-UCxHgSMamYu7GcS0QHaGA?w=210&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
              "reviews": [
                {
                  "user": "DhoklaFan",
                  "feedback": "Dhokla is a staple in Gujarati cuisine. Light, fluffy, and delicious!"
                }
              ]
            },
            {
              "title": "Thepla",
              "category": "Gujarati Cuisine",
              "instructions":'Thepla is a popular Gujarati flatbread known for its soft texture, flavorful taste, and versatility. Made from a dough of whole wheat flour (atta), gram flour (besan), yogurt, and a variety of spices, including turmeric, chili powder, cumin seeds, and ajwain (carom seeds), Thepla is often enriched with ingredients like fenugreek leaves (methi), spinach, or grated vegetables such as bottle gourd (lauki) or carrots, which add both nutrition and flavor. The dough is kneaded to a smooth consistency and then rolled out into thin, circular discs, which are cooked on a griddle or tawa until golden brown and lightly crispy. Thepla can be enjoyed hot or cold and is commonly served with yogurt, pickle, or chutney, making it a convenient and delicious option for breakfast, lunch, or as a snack on the go. Its robust flavor profile and long shelf life also make Thepla a favorite choice for picnics, travel, and as a part of festive meals.',
              "rating": 0,
              videoLink:'https://www.youtube.com/watch?v=A2C9CY8ZymQ',
              imageSrc:'https://th.bing.com/th/id/OIP.rjyiPZgdMdaYhWM7ZLuz-wHaHa?w=194&h=194&c=7&r=0&o=5&dpr=1.3&pid=1.7',
              "reviews": [
                {
                  "user": "TheplaLover",
                  "feedback": "Thepla is perfect for breakfast or as a snack. Nutritious and flavorful!"
                }
              ]
            },
            {
              "title": "Undhiyu",
              "category": "Gujarati Cuisine",
              "instructions":'Undhiyu is a traditional Gujarati vegetable dish that is rich, flavorful, and packed with seasonal vegetables. Typically prepared during the winter months, Undhiyu is a celebration of the region harvest and features a variety of fresh vegetables, root vegetables, and beans cooked together with a blend of aromatic spices. Common ingredients include potatoes, sweet potatoes, eggplant, green beans, peas, surti papdi (broad beans), yam, and plantain, among others. These vegetables are seasoned with a special Undhiyu masala paste made from fresh coconut, green chilies, ginger, garlic, coriander, and other spices. The mixture is then traditionally cooked in an earthenware pot (matlu) or pressure cooker until the vegetables are tender and infused with the flavors of the spices. Undhiyu is often served with puri (deep-fried bread), shrikhand (sweet strained yogurt), and pickle, making it a delicious and wholesome meal that is enjoyed by families during festivals and special occasions. Its vibrant colors, rich flavors, and aromatic spices make Undhiyu a beloved dish in Gujarati cuisine, showcasing the region culinary diversity and heritage.',
              "rating": 0,
              videoLink:'https://www.youtube.com/watch?v=76WP69qtDi8',
             imageSrc:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvIafAsOANGdaR7WjY6hHloXdSXVB1f1QZLA&usqp=CAU',
              
              "reviews": [
                {
                  "user": "UndhiyuEnthusiast",
                  "feedback": "Undhiyu is a festive treat! The blend of flavors is simply amazing."
                }
              ]
            },
            {
              "title": "Khandvi",
              "category": "Gujarati Cuisine",
              "instructions":'Khandvi, also known as Suralichi Vadi or Patuli, is a traditional Gujarati snack renowned for its delicate texture and tangy flavor. Made from gram flour (besan) and yogurt, khandvi batter is seasoned with turmeric, green chilies, ginger, and salt, then cooked to a smooth consistency. The cooked batter is quickly spread in thin layers on greased plates and allowed to cool. Once cooled, the layers are rolled tightly into cylindrical rolls. These rolls are then sliced into bite-sized pieces and garnished with a tempering of mustard seeds, sesame seeds, and curry leaves fried in oil, which adds a burst of flavor and aroma. Khandvi is often served as an appetizer or snack, accompanied by green chutney or sweet tamarind chutney, and is enjoyed for its unique combination of textures and spices. Its intricate preparation and delicious taste make khandvi a beloved part of Gujarati cuisine, enjoyed by people of all ages and perfect for special occasions or everyday indulgence.',
              "rating": 0,
              videoLink:'https://www.youtube.com/watch?v=y4cqdul2rvg',
              imageSrc:'https://th.bing.com/th/id/OIP.pJoQ-CtKaATFmTbDVqjX3gHaD4?w=332&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
              "reviews": [
                {
                  "user": "KhandviFanatic",
                  "feedback": "Khandvi is a Gujarati delicacy that melts in your mouth. Absolutely delicious!"
                }
              ]
            },
            {
              "title": "Fafda",
              "category": "Gujarati Cuisine",
              "instructions":'Fafda is a popular Gujarati snack known for its crispy texture and savory flavor. Made primarily from gram flour (besan), spices, and water, fafda dough is kneaded to a smooth consistency and then rolled out into thin strips or shapes before being deep-fried until golden brown and crispy. The dough is often seasoned with ingredients like ajwain (carom seeds), turmeric, and sometimes baking soda, which contribute to its distinct taste and texture. Fafda is typically enjoyed with a variety of accompaniments such as green chutney, tamarind chutney, or spicy pickles, making it a favorite street food and snack during festivals, celebrations, and everyday occasions in Gujarat. Its addictive crunch and flavorful profile make fafda a beloved part of Gujarati cuisine, cherished by locals and enjoyed by visitors alike.',
              "rating": 0,
              videoLink:'https://www.youtube.com/watch?v=lD6wVs3MEXs',
              imageSrc:'https://th.bing.com/th/id/OIP.WjtVrkBDQNWsm6SB7SdABAHaEK?w=309&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
              "reviews": [
                {
                  "user": "FafdaLover",
                  "feedback": "Fafda is a must-have during festivals in Gujarat. Crunchy and addictive!"
                }
              ]
            },
            {
              "title": "Handvo",
              "category": "Gujarati Cuisine",
              "instructions":'Handvo is a savory cake originating from the Indian state of Gujarat, made primarily from rice, lentils, and mixed vegetables. To prepare handvo, a batter is made by soaking rice, split chickpeas (chana dal), and split green gram (moong dal) for a few hours, then grinding them along with ginger, green chilies, and yogurt to a coarse paste. The batter is fermented overnight, allowing it to develop a slightly sour flavor and airy texture. Mixed vegetables such as bottle gourd (lauki), carrots, peas, and sometimes spinach or fenugreek leaves are finely chopped and added to the batter, along with spices like turmeric, cumin seeds, and salt. The batter is then poured into a greased baking dish or a special handvo cooker and baked until golden brown and cooked through. Once cooled, the handvo is cut into slices and served with green chutney or sweet and tangy tamarind chutney, making it a delicious and nutritious snack or meal option that enjoyed by people of all ages.',
              "rating": 0,
              videoLink:'https://www.youtube.com/watch?v=Mfe_Ahq-jps',
              imageSrc:'https://th.bing.com/th/id/OIP.x48jjsE6QZ1Z7oaoJqtbmgHaHa?w=201&h=201&c=7&r=0&o=5&dpr=1.3&pid=1.7',
              "reviews": [
                {
                  "user": "HandvoConnoisseur",
                  "feedback": "Handvo is a wholesome Gujarati dish that's perfect for any meal. Love the texture and flavor!"
                }
              ]
            },
            {
              "title": "Khichdi",
              "category": "Gujarati Cuisine",
              "instructions":'Khichdi, a wholesome and comforting dish enjoyed across India, is a simple yet nourishing one-pot meal made from a combination of rice, lentils, and an assortment of spices. To prepare khichdi, rice and lentils are washed and soaked before being cooked together with water, creating a soft and creamy texture. Aromatic spices such as cumin seeds, mustard seeds, turmeric, and sometimes whole spices like cloves, cinnamon, and cardamom are tempered in ghee or oil to infuse the dish with their fragrant flavors. Vegetables like carrots, peas, and potatoes are often added to enhance the nutritional value and taste of the khichdi. Once cooked, khichdi is typically served piping hot, garnished with fresh coriander leaves and accompanied by yogurt, pickle, or papad for a satisfying and complete meal that is both comforting and nourishing, making it a popular choice for lunch or dinner, especially during times when simplicity and ease of preparation are desired.',
              "rating": 0,
              videoLink:'https://www.youtube.com/watch?v=SYWtizV5oCI',
              imageSrc:'https://th.bing.com/th/id/OIP.xlnd2aQvDpPniXlwuO8rKgHaLG?w=144&h=216&c=7&r=0&o=5&dpr=1.3&pid=1.7',
              "reviews": [
                {
                  "user": "KhichdiLover",
                  "feedback": "Khichdi is my go-to comfort food. Simple yet so satisfying!"
                }
              ]
            },
            {
              "title": "Gujarati Kadhi",
              "instructions":'Gujarati Kadhi is a quintessential dish of Gujarati cuisine, embodying a harmonious blend of tangy yogurt, earthy gram flour, and an array of aromatic spices, all brought together in a comforting and flavorful soup. To prepare this beloved dish, a mixture of yogurt and gram flour is meticulously whisked until smooth, then combined with water to achieve a silky consistency, ensuring a velvety texture. In a large pot, a medley of spices including mustard seeds, cumin seeds, fenugreek seeds, asafoetida, slit green chilies, curry leaves, and grated ginger is gently tempered in ghee or oil, infusing the kitchen with their fragrant aromas. Once the spices sizzle and release their essence, the creamy yogurt-gram flour mixture is added to the pot, its pale hue gradually transforming into a luscious golden hue as it simmers gently over low heat. Throughout the cooking process, the kadhi is stirred lovingly to prevent any lumps from forming, ensuring a smooth and velvety texture that caresses the palate with every spoonful. For those with a sweet tooth, a touch of sugar can be added to balance out the tartness of the yogurt, elevating the flavor profile to new heights. Finally, the kadhi is garnished with a flourish of freshly chopped coriander leaves, adding a burst of freshness and color to the dish. Served piping hot alongside steamed rice or khichdi, Gujarati Kadhi offers a comforting and nourishing meal that is both soul-satisfying and deeply satisfying, a true testament to the culinary richness and heritage of Gujarat.',
              "category": "Gujarati Cuisine",
              "rating": 0,
              videoLink:'https://www.youtube.com/watch?v=nKZaQ1cJhE0',
              imageSrc:'https://th.bing.com/th/id/OIP.fiwmqA-WhCR4e2Wvi-xc2gHaLO?w=180&h=243&c=7&r=0&o=5&dpr=1.3&pid=1.7',
              "reviews": [
                {
                  "user": "KadhiAficionado",
                  "feedback": "Gujarati Kadhi has the perfect balance of flavors. Comfort in every spoonful!"
                }
              ]
            },
            {
              "title": "Methi na Gota",
              "category": "Gujarati Cuisine",
              "instructions":'Methi na Gota is a popular Gujarati snack made from chickpea flour (besan), fenugreek leaves (methi), and spices. To prepare, a batter is made by combining chickpea flour with chopped fenugreek leaves, green chilies, ginger, turmeric, and other spices. The batter is then deep-fried in small, round dumplings until golden and crispy on the outside and soft and fluffy on the inside. Methi na Gota is typically served hot with green chutney or tamarind chutney and makes for a delicious and savory snack, especially during monsoon or as a tea-time treat.',
              "rating": 0,
              videoLink:'https://www.youtube.com/watch?v=4nKfxkbRCOo',
              imageSrc:'https://th.bing.com/th/id/OIP.P9kXG1lQlurCH3qLi8smDgHaE7?w=275&h=183&c=7&r=0&o=5&dpr=1.3&pid=1.7',
              "reviews": [
                {
                  "user": "GotaAddict",
                  "feedback": "Methi na Gota is a Gujarati snack that's crispy on the outside and soft on the inside. Yum!"
                }
              ]
            },
            {
              "title": "Shrikhand",
              "category": "Gujarati Cuisine",
              "instructions":'Shrikhand, a popular dessert originating from the Indian states of Gujarat and Maharashtra, is a creamy and luxurious sweet dish made from strained yogurt (hung curd) mixed with sugar and flavored with saffron, cardamom, and sometimes nuts like almonds or pistachios. The strained yogurt is typically prepared by hanging it in a muslin cloth for several hours to remove excess moisture, resulting in a thick and creamy consistency. Once the yogurt is strained, it is sweetened with sugar and flavored with saffron-infused milk and ground cardamom, imparting a rich and aromatic taste. Shrikhand is often served chilled and garnished with a sprinkle of nuts, making it a refreshing and indulgent dessert that enjoyed on special occasions and festivals. ',
              "rating": 0,
              videoLink:'https://www.youtube.com/watch?v=BfQ6c7hEtmI',
              imageSrc:'https://th.bing.com/th/id/OIP.rynPjjivUEIgMmEtkzo6vQHaHa?w=180&h=150&c=7&r=0&o=5&dpr=1.3&pid=1.7',
              "reviews": [
                {
                  "user": "ShrikhandFan",
                  "feedback": "Shrikhand is a divine Gujarati dessert. Creamy, rich, and utterly delicious!"
                }
              ]
            },
            
                {
                  "title": "Appam with Stew",
                  "category": "Kerala Cuisine",
                  "instructions":'Appam with stew is a classic and beloved dish originating from Kerala, South India, offering a harmonious balance of flavors and textures. Appam, a soft and fluffy rice pancake with a crispy lace-like edge, is made from a batter of fermented rice and coconut milk, resulting in a slightly sweet and tangy flavor profile. It pairs perfectly with stew, a fragrant and mildly-spiced coconut milk-based curry loaded with vegetables like potatoes, carrots, peas, and sometimes chicken or beef. The stew is gently simmered with aromatic spices like cinnamon, cloves, and cardamom, creating a rich and creamy sauce that complements the delicate taste of the appam. Together, appam and stew create a comforting and satisfying meal that enjoyed throughout Kerala, especially for breakfast or as a wholesome dinner option',
                  "rating": 0,
                  videoLink:'https://www.youtube.com/watch?v=V40jJdhPp2I',
                  imageSrc:'https://th.bing.com/th/id/OIP.l7dZu-JgATdbdF3oRv0d6gHaKi?w=135&h=193&c=7&r=0&o=5&dpr=1.3&pid=1.7',
                  "reviews": [
                    {
                      "user": "AppamEnthusiast",
                      "feedback": "Appam with stew is a classic Kerala breakfast that's light and flavorful. Perfect start to the day!"
                    }
                  ]
                },
                {
                  "title": "Puttu and Kadala Curry",
                  "category": "Kerala Cuisine",
                  "instructions":'Puttu and Kadala Curry is a quintessential breakfast combination in Kerala, offering a delightful blend of flavors and textures. Puttu, a cylindrical steamed rice cake, is made from a mixture of rice flour and grated coconut, steamed in cylindrical bamboo or metal molds. It light, airy, and subtly sweet, with the coconut adding a hint of richness. Kadala Curry, on the other hand, is a spicy and flavorful curry made from black chickpeas (kadala) cooked in a fragrant blend of spices, coconut, and tomatoes. The curry is typically simmered until the chickpeas are tender and the flavors are well-developed, resulting in a hearty and satisfying dish that perfectly complements the lightness of the puttu. Together, Puttu and Kadala Curry create a balanced and wholesome meal that enjoyed throughout Kerala, whether for breakfast or as a satisfying snack any time of day. ',
                  "rating": 0,
                  videoLink:'https://www.youtube.com/watch?v=Rr72jCYwMdc',
                  imageSrc:'https://th.bing.com/th/id/OIP.CBqu6XPT3iZEptYyTTKtWAHaFe?w=241&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
                  "reviews": [
                    {
                      "user": "PuttuFan",
                      "feedback": "Puttu and Kadala Curry is a quintessential Kerala breakfast that's hearty and delicious. Love the combination!"
                    }
                  ]
                },
                {
                  "title": "Kerala Fish Curry",
                  "category": "Kerala Cuisine",
                 instructions:'Kerala fish curry is a beloved dish featuring tender fish simmered in a flavorful blend of spices and coconut milk. To prepare, mustard seeds and fenugreek seeds are tempered in coconut oil along with curry leaves, followed by sautéing onions, ginger-garlic paste, and green chilies until aromatic. Chopped tomatoes are added, then a mixture of turmeric, Kashmiri red chili powder, and coriander powder forms the base of the curry. Thin coconut milk (or water) is added to create the sauce, and the fish pieces are gently simmered until cooked through. Finally, thick coconut milk is stirred in for richness, creating a creamy and aromatic curry that pairs perfectly with steamed rice for a satisfying meal that captures the essence of Kerala coastal cuisine.',
                  "rating": 0,
                  videoLink:'https://www.youtube.com/watch?v=eCIT0GyP3D0',
                  imageSrc:'https://th.bing.com/th/id/OIP.WfUXLo8DaHhrp5B-pBNYPgHaE7?w=297&h=198&c=7&r=0&o=5&dpr=1.3&pid=1.7',
                  "reviews": [
                    {
                      "user": "FishCurryConnoisseur",
                      "feedback": "Kerala Fish Curry is bursting with flavors! A must-try for seafood lovers."
                    }
                  ]
                },
                {
                  "title": "Avial",
                  "category": "Kerala Cuisine",
                  "instructions": 'Avial, a quintessential dish of Kerala cuisine, embodies the essence of South Indian culinary tradition with its vibrant medley of assorted vegetables enveloped in a luscious coconut and yogurt gravy. The preparation of avial begins with a selection of colorful vegetables such as carrots, beans, drumsticks, pumpkin, potatoes, yam, and ash gourd, which are cut into uniform strips or cubes and steamed or boiled until just tender, preserving their natural flavors and textures. Meanwhile, a coconut-based paste is prepared by grinding together freshly grated coconut, green chilies for a hint of heat, earthy cumin seeds, and a touch of ginger, yielding a fragrant and slightly coarse mixture. This paste forms the foundation of avial creamy gravy, infusing it with the unmistakable aroma and taste of coconut. Once the vegetables are cooked, they are gently combined with the coconut paste along with a generous dollop of yogurt, which imparts a subtle tanginess and creamy richness to the dish. The avial is then simmered over low heat, allowing the flavors to meld together harmoniously while preserving the freshness of the vegetables. A final flourish comes in the form of a traditional tempering, where curry leaves are crisped in aromatic coconut oil and drizzled over the avial, infusing it with a burst of fragrance and enhancing its visual appeal. Served hot alongside steamed rice, avial captivates the palate with its delightful combination of textures, flavors, and aromas, making it a cherished part of festive feasts and everyday meals alike, and showcasing the culinary diversity and richness of Kerala gastronomic heritage.',
                  "rating": 0,
                  videoLink:'https://www.youtube.com/watch?v=_C9SZg3adxI',
                  imageSrc:'https://th.bing.com/th/id/OIP.xBJiYHyddu33Tiq-5qTBtAHaHa?w=167&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
                  "reviews": [
                    {
                      "user": "AvialLover",
                      "feedback": "Avial is a delightful Kerala specialty that's nutritious and delicious. Love the creamy coconut flavor!"
                    }
                  ]
                },
                {
                  "title": "Kerala Porotta and Beef Curry",
                  "category": "Kerala Cuisine",
                  "instructions":'The combination of Kerala Porotta and Beef Curry is a culinary delight that embodies the rich flavors and textures of Kerala cuisine. Kerala Porotta, renowned for its flaky and layered texture, is prepared by mixing all-purpose flour with salt, water, and a hint of ghee or oil, resulting in a soft dough that is rolled into thin discs and cooked until golden brown on a hot griddle. Meanwhile, the Beef Curry is a hearty and aromatic dish made by sautéing onions, ginger-garlic paste, and a blend of spices until fragrant, then adding tender beef pieces and simmering them in coconut milk until they are succulent and infused with flavor. The final dish is a harmonious marriage of textures and tastes, with the crispy and flaky porotta serving as the perfect vessel for sopping up the rich and spicy beef curry. Together, they create a satisfying and unforgettable dining experience that captures the essence of Kerala culinary heritage.',
                  "rating": 0,
                  videoLink:'https://www.youtube.com/watch?v=I2BoKVPMjuI',
                  imageSrc:'https://th.bing.com/th/id/OIP.aylVgKBs7gktpM3kljz1-wHaHa?w=184&h=184&c=7&r=0&o=5&dpr=1.3&pid=1.7',
                  "reviews": [
                    {
                      "user": "PorottaBeefFan",
                      "feedback": "Kerala Porotta and Beef Curry is a match made in heaven! The flaky porotta complements the rich beef curry perfectly."
                    }
                  ]
                },
                {
                  "title": "Ela Ada",
                  "category": "Kerala Cuisine",
                  "instructions":'Ela Ada, a traditional Kerala sweet, involves preparing a filling of grated coconut, jaggery, and cardamom, then mixing rice flour with water to form a pliable dough. Each dough portion is flattened, filled with the coconut-jaggery mixture, folded, and shaped into parcels. These parcels are then wrapped in banana leaves greased with ghee or oil. Steamed until cooked, Ela Ada offers a delightful blend of flavors, making it a cherished treat in Kerala culinary tradition.',
                  "rating": 0,
                  videoLink:'https://www.youtube.com/watch?v=YcHyOjyVHfw',
                  imageSrc:'https://th.bing.com/th/id/OIP.JtT_chTdD5ekNFeA4H-37AHaG8?w=156&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
                  "reviews": [
                    {
                      "user": "ElaAdaLover",
                      "feedback": "Ela Ada is a delightful Kerala dessert that's both fragrant and delicious. Love the sweet coconut filling!"
                    }
                  ]
                },
                {
                  "title": "Kerala Beef Fry",
                  "category": "Kerala Cuisine",
                  "instructions":'To prepare Kerala beef fry, begin by sautéing thinly sliced onions until golden brown in coconut oil, then add ginger-garlic paste, slit green chilies, chopped tomatoes, and curry leaves, cooking until the tomatoes soften. Introduce thinly sliced beef to the pan, coating it well with the onion-tomato mixture, and sprinkle with turmeric powder, red chili powder, coriander powder, and salt, ensuring even distribution of the spices. Cover and cook the beef until tender, then uncover and fry until it caramelizes and browns. Finish by sprinkling garam masala, mixing well, and garnishing with fresh coriander leaves before serving hot alongside rice or roti for a flavorful Kerala beef fry experience',
                  "rating": 0,
                  videoLink:'https://www.youtube.com/watch?v=0W6uY3_Jo3E',
                  imageSrc:'https://th.bing.com/th/id/OIP.qlmAF6cWai5GF_mO_2Pp8QHaE8?w=279&h=186&c=7&r=0&o=5&dpr=1.3&pid=1.7',
                  "reviews": [
                    {
                      "user": "BeefFryFanatic",
                      "feedback": "Kerala Beef Fry is a flavorful and crunchy delight! Perfect with rice or porotta."
                    }
                  ]
                },
                {
                  "title": "Kerala Chicken Curry",
                  "category": "Kerala Cuisine",
                 "instructions":'To prepare Kerala chicken curry, start by heating oil in a pan over medium heat and sautéing mustard seeds and cumin until they begin to crackle. Add finely chopped onions and cook until they turn golden brown, then incorporate ginger-garlic paste and slit green chilies, sautéing until the raw aroma dissipates. Introduce finely chopped tomatoes and continue cooking until they break down and become mushy. Stir in a blend of turmeric powder, red chili powder, coriander powder, and salt, ensuring the spices are well-mixed and fragrant. Now, add the chicken pieces to the pan, coating them thoroughly in the spice mixture. Pour in coconut milk, stirring well to combine, and bring the curry to a gentle simmer. Cover the pan and let the curry cook over low heat until the chicken is tender and thoroughly cooked, occasionally stirring to prevent sticking. Once done, sprinkle garam masala over the curry for an added depth of flavor, garnish with fresh coriander leaves and curry leaves to enhance the aroma, then remove from heat. Serve the Kerala chicken curry piping hot alongside steamed rice, roti, or parotta, relishing the rich flavors and enticing aromas of this traditional South Indian dish.',
                  "rating": 0,
                  videoLink:'https://www.youtube.com/watch?v=XjnyHwWucc4',
                  imageSrc:'https://th.bing.com/th/id/OIP.Ddmp0rpEx5PGPQk4Xv--bgHaFj?w=271&h=203&c=7&r=0&o=5&dpr=1.3&pid=1.7',
                  "reviews": [
                    {
                      "user": "ChickenCurryLover",
                      "feedback": "Kerala Chicken Curry is a classic dish that's full of bold flavors. Absolutely delicious!"
                    }
                  ]
                },
                {
                  "title": "Kerala Parotta and Egg Curry",
                  "category": "Kerala Cuisine",
                  "instructions":'To prepare Kerala parotta, mix all-purpose flour with salt, water, and ghee to form a smooth dough. Let it rest for about 30 minutes, then divide the dough into small balls and roll each ball into a thin, flat disc. Cook the discs on a hot griddle until golden brown, applying ghee or oil for flakiness. Crush the cooked parottas gently to create layers and keep them warm until serving. For the egg curry, heat oil in a pan and sauté mustard seeds and cumin until they splutter. Add chopped onions and cook until golden brown, then stir in ginger-garlic paste and slit green chilies. Add chopped tomatoes and cook until soft. Season with turmeric, red chili powder, coriander, and salt, then pour in coconut milk and simmer until flavors meld. Gently add boiled egg halves to the curry, ensuring they are  coated with the sauce, and simmer for a few more minutes. Garnish with garam masala, fresh coriander leaves, and curry leaves before serving hot alongside the parotta.',
                  "rating": 0,
                  videoLink:'https://www.youtube.com/watch?v=Iu66IGcLT84',
                  imageSrc:'https://th.bing.com/th/id/OIP.aE5FIzaxCPSj6nX_ie_jYAHaJ4?w=150&h=200&c=7&r=0&o=5&dpr=1.3&pid=1.7',
                  "reviews": [
                    {
                      "user": "ParottaEggFan",
                      "feedback": "Kerala Parotta and Egg Curry is a heavenly combination! The soft parotta pairs perfectly with the creamy egg curry."
                    }
                  ]
                },
                {
                  "title": "Kerala Prawn Curry",
                  "category": "Kerala Cuisine",
                  instructions:'Kerala Prawn Curry, also known as Chemmeen Curry, is a flavorful and aromatic seafood dish from the coastal state of Kerala in South India. To prepare Kerala Prawn Curry, fresh prawns are marinated in a mixture of turmeric, chili powder, and salt. Meanwhile, a fragrant curry base is prepared by sautéing onions, garlic, ginger, and curry leaves in coconut oil until golden brown. Then, a blend of spices such as coriander, cumin, fenugreek, and mustard seeds are added along with tomatoes, tamarind pulp, and coconut milk. The marinated prawns are then added to the curry base and simmered until they are cooked through and tender. Kerala Prawn Curry is typically served hot with steamed rice or appam, a traditional South Indian pancake, and is loved for its rich, tangy, and spicy flavors that showcase the culinary heritage of Kerala coastal cuisine.',
                  "rating": 0,
                  videoLink:'https://www.youtube.com/watch?v=5FndrNwooEo',
                  imageSrc:'https://th.bing.com/th/id/OIP.WKuZatHFOwRj_MsaQaeHlgHaHa?w=193&h=194&c=7&r=0&o=5&dpr=1.3&pid=1.7',
                  "reviews": [
                    {
                      "user": "PrawnCurryEnthusiast",
                      "feedback": "Kerala Prawn Curry is a seafood lover's delight! The flavors are simply divine."
                    }
                  ]
                },
                    {
                      "title": "Dosai",
                      "category": "Tamil Cuisine",
                     instructions:'Dosai, also known as Dosa, is a popular South Indian dish that is a staple of Tamil cuisine. It is a type of thin, crispy pancake made from a fermented batter of rice and urad dal (black gram dal). To prepare Dosai, the rice and dal are soaked, ground into a smooth batter, and allowed to ferment overnight. The fermented batter is then spread thinly on a hot griddle or skillet and cooked until golden brown and crispy on both sides. Dosai can be served plain or stuffed with a variety of fillings such as potato masala, cheese, vegetables, or paneer. It is typically served hot and accompanied by chutney, sambar, or podi (spice powder). Dosai is loved for its versatility, delicious flavor, and crispy texture, making it a favorite breakfast or snack option in Tamil Nadu and beyond.',
                      "rating": 0,
                      videoLink:'https://www.youtube.com/watch?v=XmUpinQdwuY',
                      imageSrc:'https://th.bing.com/th/id/OIP.AAeMOleCsTZ6bN_MA_cQqQHaEK?w=308&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
                      "reviews": [
                        {
                          "user": "DosaiFanatic",
                          "feedback": "Dosai is a staple in Tamil cuisine. Crispy on the outside, soft on the inside, and perfect with sambar!"
                        }
                      ]
                    },
                    {
                      "title": "Idli",
                      "category": "Tamil Cuisine",
                      instructions:'Idli is a staple South Indian dish that is popular not only in Tamil cuisine but also across the Indian subcontinent. It is a type of savory rice cake made from a batter of fermented rice and urad dal (black gram dal). To prepare Idli, the rice and dal are soaked, ground into a smooth batter, and allowed to ferment overnight. The fermented batter is then poured into special molds and steamed until it sets into soft, fluffy cakes. Idlis are typically served hot and enjoyed with chutney, sambar, or other accompaniments like podi (spice powder). They are loved for their light and airy texture, as well as their versatility, making them a favorite breakfast or snack option in Tamil Nadu and beyond.',
                      "rating": 0,
                      videoLink:'https://www.youtube.com/watch?v=Ayo80PIb-Qg',
                      imageSrc:'https://th.bing.com/th/id/OIP.JqR-Z7cf_ZsW9okAotb8_wHaE8?w=261&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
                      "reviews": [
                        {
                          "user": "IdliLover",
                          "feedback": "Idli is a classic Tamil breakfast that's light and delicious. Love it with piping hot sambar!"
                        }
                      ]
                    },
                    {
                      "title": "Sambhar",
                      "category": "Tamil Cuisine",
                      "instructions":'Sambhar is a quintessential dish of Tamil cuisine. It a flavorful and aromatic stew made with a base of pigeon peas (toor dal) cooked with a variety of vegetables such as drumsticks, carrots, potatoes, eggplant, and tomatoes. The dish is seasoned with a blend of spices including mustard seeds, cumin seeds, fenugreek seeds, turmeric, coriander, and dried red chilies. Tamarind pulp is added for a tangy flavor, and the dish is finished with a tempering of curry leaves and asafoetida in ghee or oil. Sambhar is often served with rice, idli, dosa, or vada, and it enjoyed as a staple dish in Tamil Nadu and across South India.',
                      "rating": 0,
                      videoLink:'https://www.youtube.com/watch?v=-W4oOFTV_4Y',
                      imageSrc:'https://th.bing.com/th/id/OIP._C7LAQS1Z_liFjyQuzE_iQHaE8?w=257&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
                      "reviews": [
                        {
                          "user": "SambharConnoisseur",
                          "cfeedback": "Sambhar is the heart and soul of Tamil cuisine. Comforting and packed with flavors!"
                        }
                      ]
                    },
                    {
                      "title": "Rasam",
                      "category": "Tamil Cuisine",
                      "instructions":'Rasam is a flavorful and aromatic  soup or broth made from tamarind juice, tomatoes, and a blend of spices. To prepare Rasam, tamarind pulp is mixed with water and boiled with tomatoes, green chilies, curry leaves, and spices such as black pepper, cumin, coriander, and turmeric. This mixture is then tempered with mustard seeds, dried red chilies, and curry leaves in ghee or oil to enhance its flavor. Rasam is typically served hot as a soup or appetizer before a meal, or mixed with steamed rice and eaten as a main course. It is known for its tangy and spicy taste, as well as its soothing and comforting properties, making it a popular dish in South Indian cuisine, especially during cooler weather or as a remedy for colds and ailments.',
                      "rating": 0,
                      videoLink:'https://www.youtube.com/watch?v=BnB9V7s3Xsw',
                      imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtFZQO4-GKg2spWkPL8v0AcKda9ODklCvwUg&usqp=CAU',
                      "reviews": [
                        {
                          "user": "RasamEnthusiast",
                          "feedbackt": "Rasam is a refreshing and aromatic Tamil soup that's perfect for any meal. Love its tangy taste!"
                        }
                      ]
                    },
                   
                    {
                      "title": "Vada",
                      "category": "Tamil Cuisine",
                     "instructions":'Vada is a popular Tamil cuisine snack made from a savory batter of ground lentils or grains. It is typically shaped into a round or doughnut-like form and deep-fried until crispy and golden brown. There are many variations of vada, with some common types including Medu Vada, made from urad dal (black gram dal) batter seasoned with spices like cumin, black pepper, and curry leaves, and Masala Vada, made from chana dal (split chickpea dal) mixed with onions, green chilies, and spices. Vadas are often served as a snack or appetizer, accompanied by chutneys or sambar, a flavorful lentil-based stew. They are loved for their crispy texture and flavorful taste, making them a staple in Tamil cuisine.',
                      "rating": 0,
                      videoLink:'https://www.youtube.com/watch?v=ng3_Q8G6KGs',
                      imageSrc:'https://th.bing.com/th/id/OIP.fY95qRzcQoRKugOkXnvaXAHaE8?w=287&h=192&c=7&r=0&o=5&dpr=1.3&pid=1.7',
                      "reviews": [
                        {
                          "user": "VadaLover",
                          "feedback": "Vada is a crispy and delicious Tamil snack that's perfect with a cup of hot filter coffee!"
                        }
                      ]
                    },
                    {
                      "title": "Biryani",
                      "category": "Tamil Cuisine",
                      "instructions":'Biryani is a popular and aromatic rice dish that originated in the Indian subcontinent and is widely enjoyed across South Asia and the Middle East. It is made using fragrant Basmati rice cooked with a variety of meats or vegetables, and a blend of spices such as saffron, cardamom, cloves, cinnamon, and bay leaves. The dish is typically layered with marinated meat or vegetables, partially cooked rice, fried onions, and fresh herbs such as mint and cilantro. The layers are then sealed and cooked together using a method called "dum" cooking, where the pot is sealed with dough or a tight-fitting lid to allow the flavors to meld together and the rice to absorb the aromas of the spices and ingredients. Biryani is known for its rich and complex flavors, and it is often served with raita (yogurt sauce), salad, or pickle, making it a festive and indulgent meal enjoyed on special occasions and gatherings.',
                      "rating": 0,
                      videoLink:'https://www.youtube.com/watch?v=pVFChdfMDu0',
                      imageSrc:'https://th.bing.com/th/id/OIP.M5P3yI6QSzcItNnqOMVz4gHaLG?w=115&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
                      "reviews": [
                        {
                          "user": "BiryaniAficionado",
                          "feedback": "Tamil Biryani is a flavorful and aromatic delicacy that's fit for a feast. Absolutely divine!"
                        }
                      ]
                    },
                    {
                      "title": "Adai",
                      "category": "Tamil Cuisine",
                      instructions:'Adai is indeed a traditional Tamil cuisine. It is  a type of dosa or pancake made from a batter of mixed lentils and rice. The lentils used typically include urad dal, chana dal, toor dal, and moong dal, along with rice. These ingredients are soaked, ground into a coarse batter, and then fermented for a few hours to enhance the flavor. The batter is then spread thinly on a hot griddle or pan to cook until crispy and golden brown on both sides. Adai is often served with avial (a mixed vegetable curry) or jaggery, making it a nutritious and wholesome meal enjoyed across Tamil Nadu.',
                      "rating": 0,
                      videoLink:'https://www.youtube.com/watch?v=QkMNoZ4LRtA',
                      imageSrc:'https://th.bing.com/th/id/OIP.wmkdDulaISiBvNgp96FErgHaIX?w=180&h=203&c=7&r=0&o=5&dpr=1.3&pid=1.7',
                      "reviews": [
                        {
                          "user": "AdaiFanatic",
                          "feedback": "Adai is a nutritious and filling Tamil breakfast that's packed with protein and flavor. Love its crispy texture!"
                        }
                      ]
                    },
                    {
                      "title": "Kothu Parotta",
                      "category": "Tamil Cuisine",
                      "instructions":'Kothu Parotta is a popular Tamil cuisine street food dish made from shredded parotta, a type of layered flatbread, stir-fried with a variety of ingredients and spices. To prepare Kothu Parotta, pieces of parotta are torn into small shreds and then cooked on a griddle or skillet along with chopped onions, tomatoes, green chilies, and a mixture of spices such as turmeric, chili powder, and garam masala. Additional ingredients such as scrambled eggs, chicken, or vegetables may also be added for extra flavor and protein. The mixture is continuously chopped and stirred using metal spatulas, creating a rhythmic chopping sound characteristic of the dish. Kothu Parotta is typically served hot and garnished with fresh cilantro and a squeeze of lemon juice, offering a flavorful and satisfying street food experience enjoyed across Tamil cuisine.',
                      "rating": 0,
                      videoLink:'https://www.youtube.com/watch?v=ZbT6-tCUjKQ',
                      imageSrc:'https://th.bing.com/th/id/OIP.6LYI4_boJ0DS9E-lWdTHxAHaHa?w=184&h=184&c=7&r=0&o=5&dpr=1.3&pid=1.7',
                      "reviews": [
                        {
                          "user": "KothuParottaLover",
                          "feedback": "Kothu Parotta is a Tamil street food delight that's spicy, flavorful, and utterly satisfying. A must-try!"
                        }
                      ]
                    },
                    {
                      "title": "Payasam",
                      "category": "Tamil Cuisine",
                      "instructions":'Payasam, also known as Kheer in North India, is a traditional Indian dessert made from milk, sugar, and rice (or other grains such as vermicelli, sago, or semolina). To prepare Payasam, the main ingredients are cooked together in a pot until the mixture thickens and the grains become soft and creamy. Additional flavorings such as cardamom, saffron, nuts, and dried fruits may be added for enhanced taste and texture. Payasam is often served warm or chilled as a sweet treat during festivals, celebrations, and special occasions in India. It is loved for its rich and comforting taste, making it a cherished dessert in Indian cuisine.',
                      "rating": 0,
                      videoLink:'https://www.youtube.com/watch?v=b5oI99d90j0',
                      imageSrc:'https://th.bing.com/th/id/OIP.1IPX-8sDO874_yB_fnr7MQHaJB?w=146&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
                      "reviews": [
                        {
                          "user": "PayasamFan",
                          "feedback": "Payasam is a decadent Tamil dessert that's rich, creamy, and full of flavor. Perfect way to end a meal!"
                        }
                      ]
                    },   
                    
                        {
                          "title": "Pav Bhaji",
                          
                          "category": "Maharashtrian Cuisine",
                          "instructions":'Pav Bhaji is a beloved street food dish from Maharashtra, India, consisting of a spicy vegetable curry (bhaji) served with soft bread rolls (pav). To make Pav Bhaji, a mixture of mashed vegetables such as potatoes, peas, carrots, cauliflower, and bell peppers is cooked with onions, tomatoes, and a blend of spices including pav bhaji masala, turmeric, chili powder, and cumin. The vegetables are simmered until soft and mashed together to create a thick and flavorful curry. Meanwhile, the pav bread rolls are lightly toasted with butter on a griddle until golden and warm. The bhaji is served hot with a dollop of butter on top, alongside the toasted pav rolls. Pav Bhaji is often garnished with chopped onions, cilantro, and a squeeze of lemon juice for extra flavor. It is a popular and satisfying dish enjoyed as a snack or meal across India, known for its spicy and tangy taste.',
                          "rating": 0,
                          videoLink:'https://www.youtube.com/watch?v=qMAYG-soxhw',
                          imageSrc:'https://th.bing.com/th/id/OIP.XEn1CCa7xc_ZZ6_yHQ6LMAHaG5?w=189&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
                          "reviews": [
                            {
                              "user": "PavBhajiFanatic",
                              "feedback": "Pav Bhaji is a Mumbai street food classic that's flavorful and satisfying. Love the spicy tangy taste!"
                            }
                          ]
                        },
                        {
                          "title": "Vada Pav",
                          "category": "Maharashtrian Cuisine",
                          "instructions":'Vada Pav is a popular street food snack from Maharashtra, India, consisting of a spicy potato fritter (vada) sandwiched between a pav, a soft bread roll. To make Vada Pav, a mixture of mashed potatoes, spices such as turmeric, chili powder, and mustard seeds, along with chopped green chilies, garlic, and cilantro, is formed into round patties and coated in a gram flour (besan) batter. These potato fritters are then deep-fried until golden and crispy. The pav is slit and spread with chutneys such as green chutney and tamarind chutney, and then the vada is placed inside the pav. Vada Pav is often served with additional chutneys and fried green chilies for extra heat. It is loved for its spicy and flavorful taste, making it a popular and affordable street food option enjoyed by people of all ages.',
                          "rating": 0,
                          videoLink:'https://www.youtube.com/watch?v=LE-58cHgDaw',
                          imageSrc:'https://th.bing.com/th/id/OIP.Pzc_3wAd_QPyFjHilcRf-wHaFj?w=218&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
                          "reviews": [
                            {
                              "user": "VadaPavLover",
                              "feedback": "Vada Pav is an iconic Maharashtrian snack that's simple yet delicious. Perfect for a quick bite!"
                            }
                          ]
                        },
                        {
                          "title": "Misal Pav",
                          "category": "Maharashtrian Cuisine",
                          "instructions":'Misal Pav is a popular Maharashtrian dish consisting of a spicy sprouted bean curry served with pav, a type of soft bread roll. To make Misal, sprouted beans (usually moth beans or mung beans) are cooked with onions, tomatoes, and a blend of spices such as cumin, coriander, turmeric, and red chili powder. The curry is then garnished with chopped onions, fresh cilantro, and a squeeze of lemon juice for added flavor. It is typically served hot with pav bread rolls on the side for soaking up the flavorful curry. Misal Pav is often enjoyed as a breakfast or snack and is cherished for its bold and zesty taste, making it a favorite street food in Maharashtra.',
                          "rating": 0,
                          videoLink:'https://www.youtube.com/watch?v=MjrFVA2Erco',
                          imageSrc:'https://th.bing.com/th/id/OIP.SVSWB7g5hvB37wlbJKo0rAHaFg?w=205&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
                          "reviews": [
                            {
                              "user": "MisalPavEnthusiast",
                              "feedback": "Misal Pav is a flavorful Maharashtrian dish that's packed with protein and spice. Love the crunchy farsan topping!"
                            }
                          ]
                        },
                        {
                          "title": "Puran Poli",
                          "category": "Maharashtrian Cuisine",
                          "instructions":'Puran Poli is a traditional sweet flatbread from Maharashtra, India, often prepared during festive occasions and celebrations. To make Puran Poli, a filling called "Puran" is made by cooking chana dal (split Bengal gram) with jaggery (unrefined cane sugar) and flavored with cardamom powder. This mixture is then mashed into a smooth consistency. For the outer covering, a dough is prepared using whole wheat flour, a pinch of salt, and water, which is then rolled out into circles. A portion of the Puran filling is placed in the center of each dough circle, and the edges are sealed, shaping it into a round ball. The filled dough ball is then rolled out into a flatbread and cooked on a griddle or skillet until golden brown on both sides. Puran Poli is enjoyed warm with a dollop of ghee (clarified butter) and is loved for its sweet, aromatic flavor and soft, melt-in-your-mouth texture, making it a cherished delicacy in Maharashtrian cuisine.',
                          "rating": 0,
                          videoLink:'https://www.youtube.com/watch?v=zZ_jUpD2gR0',
                          imageSrc:'https://th.bing.com/th/id/OIP.HH6nPmSKQAYa5_WfQ_4LFwHaEo?w=304&h=189&c=7&r=0&o=5&dpr=1.3&pid=1.7',
                          
                          "reviews": [
                            {
                              "user": "PuranPoliFan",
                              "feedback": "Puran Poli is a traditional Maharashtrian dessert that's rich, sweet, and absolutely delicious. A must-have during festivals!"
                            }
                          ]
                        },
                        {
                          "title": "Bharli Vangi",
                          "category": "Maharashtrian Cuisine",
                          "instructions":'Bharli Vangi is a traditional Maharashtrian dish consisting of baby eggplants stuffed with a flavorful mixture of spices, coconut, peanuts, and tamarind. To prepare it, slit the baby eggplants vertically without separating the halves completely, keeping them intact. Then, fill the cavities with a mixture of spices such as coriander, cumin, turmeric, and chili powder, along with grated coconut, crushed peanuts, tamarind pulp, and jaggery for sweetness. The stuffed eggplants are then cooked in a spicy and tangy gravy made from onions, tomatoes, and spices until the eggplants are tender and the flavors are well combined. Bharli Vangi is often served hot with chapati or rice, offering a delightful and flavorful taste of Maharashtrian cuisine with its rich blend of spices and textures.',
                          "rating": 0,
                          videoLink:'https://www.youtube.com/watch?v=n1VfxAwSI4o',
                          imageSrc:'https://th.bing.com/th/id/OIP.aTXw5VElrnQ1IgQcbzANqAHaF0?w=239&h=187&c=7&r=0&o=5&dpr=1.3&pid=1.7',
                          "reviews": [
                            {
                              "user": "BharliVangiLover",
                              "feedback": "Bharli Vangi is a Maharashtrian specialty that's spicy and flavorful. Love the combination of spices!"
                            }
                          ]
                        },
                       
                        {
                          "title": "Kothimbir Vadi",
                          "category": "Maharashtrian Cuisine",
                         "instructions":'Kothimbir Vadi is a savory and crispy snack originating from Maharashtra, India. To make it, a batter is prepared by mixing besan (gram flour), chopped fresh coriander (kothimbir), ginger, garlic, green chilies, and spices such as turmeric, cumin, and coriander powder. The batter is then steamed until set, cooled, and cut into cubes or rectangles. These pieces are then shallow-fried until golden and crispy on the outside. Kothimbir Vadi is known for its aromatic flavor from the fresh coriander and spices, and its crunchy texture from the frying process. It is often served as an appetizer or snack, accompanied by chutney or sauce, and is a popular dish during festivals, gatherings, and as a tea-time snack in Maharashtra.',
                          "rating": 0,
                          videoLink:'https://www.youtube.com/watch?v=vYO2e40nbIg',
                          imageSrc:'https://th.bing.com/th/id/OIP.5ha6GvFdqOsY2ha6oioF8QHaLG?w=119&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
                          "reviews": [
                            {
                              "user": "KothimbirVadiFan",
                              "feedback": "Kothimbir Vadi is a crispy and flavorful Maharashtrian snack that's perfect with a cup of tea. Addictively delicious!"
                            }
                          ]
                        },
                        {
                          "title": " Maharashtrian Poha",
                          "category": "Maharashtrian Cuisine",
                          "instructions":'Maharashtrian Poha is a popular and nutritious breakfast dish that originates from the state of Maharashtra, India. To prepare it, flattened rice flakes (known as poha) are rinsed and then lightly sautéed with onions, mustard seeds, curry leaves, green chilies, and turmeric powder in oil or ghee. Other ingredients such as potatoes, peas, peanuts, and grated coconut may also be added for flavor and texture. The dish is typically seasoned with salt and garnished with fresh cilantro and a squeeze of lemon juice before serving. Maharashtrian Poha is known for its light and fluffy texture, along with its flavorful and aromatic taste, making it a favorite breakfast option in Maharashtra and beyond.',
                          "rating": 0,
                          videoLink:'https://www.youtube.com/watch?v=jODnSnhbIbQ',
                          imageSrc:'https://th.bing.com/th/id/OIP.95oQ1oW3bPF-bRfX7EpFcQHaE8?w=306&h=204&c=7&r=0&o=5&dpr=1.3&pid=1.7',
                          "reviews": [
                            {
                              "user": "PohaLover",
                              "feedback": "Poha is a quick and easy Maharashtrian breakfast dish that's light, flavorful, and perfect for a busy morning!"
                            }
                          ]
                        },
                        {
                          "title": "Modak",
                          "category": "Maharashtrian Cuisine",
                          "instructions":'Modak is a traditional Indian sweet dumpling that is particularly popular in the state of Maharashtra, especially during the festival of Ganesh Chaturthi. To make Modak, a sweet filling made from grated coconut, jaggery (or sugar), cardamom powder, and sometimes nutmeg or saffron is prepared. This filling is then placed inside a shell made from rice flour dough, which is rolled out and shaped into a small cup or cone. The edges of the dough are then pinched together to seal the filling inside. The Modaks are then either steamed or fried until cooked through. Steamed Modaks have a soft and slightly chewy texture, while fried Modaks are crispy on the outside. Modaks are often offered as a sacred food to Lord Ganesha during prayers and are also enjoyed as a delicious sweet treat by devotees and celebrants.',
                          "rating": 0,
                          videoLink:'https://www.youtube.com/watch?v=syC-WXY0I48',
                          imageSrc:'https://th.bing.com/th/id/OIP.HDeEMEYUji35hJWGPLY5igHaJ4?w=143&h=190&c=7&r=0&o=5&dpr=1.3&pid=1.7',
                          "reviews": [
                            {
                              "user": "ModakEnthusiast",
                              "feedback": "Modak is a traditional Maharashtrian sweet that's delicious and auspicious. Love the sweet coconut filling!"
                            }
                          ]
                        },
                        {
                          "title": "Thalipeeth",
                          "category": "Maharashtrian Cuisine",
                          "instructions":'Thalipeeth is a savory and nutritious flatbread that originates from Maharashtra, India. It is made from a combination of various grains and lentils, typically including rice flour, wheat flour, besan (gram flour), and jowar (sorghum) flour. The flour mixture is mixed with finely chopped onions, green chilies, coriander leaves, and spices such as cumin seeds, turmeric, and salt. Water or yogurt is added to form a dough, which is then flattened into small rounds by hand and cooked on a griddle or skillet until golden brown and crispy on the outside. Thalipeeth is often enjoyed hot with yogurt, chutney, or pickle, and it is cherished for its delicious flavor and wholesome ingredients, making it a popular choice for breakfast or as a snack in Maharashtra and beyond.',
                          "rating": 0,
                          videoLink:'https://www.youtube.com/watch?v=nRJ9cjTQlU4',
                          imageSrc:'https://th.bing.com/th/id/OIP.CkkmfqHy9eI6htWhC2tfgwHaE8?w=292&h=195&c=7&r=0&o=5&dpr=1.3&pid=1.7',
                          "reviews": [
                            {
                              "user": "ThalipeethFanatic",
                              "feedback": "Thalipeeth is a nutritious and flavorful Maharashtrian dish that's perfect for any meal. Love the crunchy texture!"
                            }
                          ]
                        },
                        {
                            "title": "Sorpotel",
                            "category": "Goan Cuisine",
                            "instructions":'Sorpotel is a spicy and tangy pork dish that originated in Goa, India, but is also popular in other regions with Goan communities. It is traditionally made using pork meat, liver, and sometimes heart, which are marinated in a blend of vinegar and spices such as black pepper, cinnamon, cloves, and dried red chilies. The marinated meat is then cooked with onions, garlic, ginger, and additional spices until tender, resulting in a thick and flavorful curry. Sorpotel is known for its bold flavors and complex taste, with the tanginess from the vinegar balancing the richness of the pork and spices. It is often served hot with rice or bread and is a favorite dish for special occasions and festivals in Goan cuisine.',
                            "rating": 0,
                            videoLink:'https://www.youtube.com/watch?v=attl622xEzM',
                            imageSrc:'https://th.bing.com/th/id/OIP.cOhWM4MMPf79mwjKGXSxfwHaE6?w=305&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
                            "reviews": [
                              {
                                "user": "SorpotelLover",
                                "feedback": "Sorpotel is a traditional Goan delicacy that's rich, spicy, and absolutely delicious. Perfect with rice or poi!"
                              }
                            ]
                          },
                          {
                            "title": "Xacuti",
                            "category": "Goan Cuisine",
                            "instructions":'Xacuti is a flavorful and aromatic curry dish that originates from the coastal state of Goa in India. It is known for its rich, complex flavors and distinctive spice blend. To prepare Xacuti, a mixture of roasted spices such as coriander seeds, cumin seeds, mustard seeds, cloves, cinnamon, and dried red chilies is ground into a fine paste along with coconut, onions, garlic, and ginger. This fragrant paste is then cooked with meat (often chicken or lamb), seafood, or vegetables in a coconut milk base until the flavors meld together and the dish reaches a thick, creamy consistency. Xacuti is typically served hot with rice or bread, offering a delicious and satisfying taste of Goan cuisine with its bold and aromatic flavors.',
                            "rating": 0,
                            videoLink:'https://www.youtube.com/watch?v=VdIfqqqWdtg',
                            imageSrc:'https://th.bing.com/th/id/OIP.rv8godYqvBkyDP-jKudt1wHaGN?w=252&h=211&c=7&r=0&o=5&dpr=1.3&pid=1.7',
                            "reviews": [
                              {
                                "user": "XacutiFanatic",
                                "feedback": "Xacuti is a Goan culinary masterpiece that's full of complex flavors. Love the blend of spices!"
                              }
                            ]
                          },
                          {
                            "title": "Bebinca",
                            "category": "Goan Cuisine",
                            "instructions":'Bebinca is a traditional Goan dessert known for its rich, layered texture and sweet flavor. To make Bebinca, a batter is prepared by combining coconut milk, sugar, egg yolks, and flour (usually rice flour or all-purpose flour). The batter is then divided into several portions, with each layer cooked individually. Each layer is cooked until golden brown and slightly crispy before the next layer is added on top. This process is repeated until the Bebinca reaches its desired height, typically around seven to eight layers. The dessert is then baked or grilled until fully cooked and set. The result is a decadent and indulgent treat with a caramelized exterior and a creamy, custard-like interior. Bebinca is often served on special occasions and festivals in Goa, and its unique flavor and texture make it a beloved delicacy in Goan cuisine.',
                            "rating": 0,
                            videoLink:'https://www.youtube.com/watch?v=OWVsE3U4xD0',
                            imageSrc:'https://th.bing.com/th/id/OIP.d_wE1DtDJkIlqg-LuXF7mQHaGn?w=194&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
                            "reviews": [
                              {
                                "user": "BebincaEnthusiast",
                                "feedback": "Bebinca is a heavenly Goan dessert that's rich, creamy, and absolutely divine. A perfect way to end a Goan meal!"
                              }
                            ]
                          },
                          {
                            "title": "Solkadi",
                            "category": "Goan Cuisine",
                            "instructions":'Solkadi is a refreshing and tangy drink from the coastal regions of India, particularly popular in Goa and Maharashtra. To prepare Solkadi, coconut milk is mixed with kokum (a sour fruit native to India), along with green chilies, garlic, ginger, and sometimes cumin seeds. The mixture is seasoned with salt and allowed to sit for some time to infuse the flavors. Solkadi is typically served chilled as a palate cleanser or digestive aid, especially alongside spicy or rich dishes. It offers a delightful combination of creamy coconut, tangy kokum, and aromatic spices, making it a refreshing and soothing beverage in warm weather.',
                            "rating": 0,
                            videoLink:'https://www.youtube.com/watch?v=BF2GKcc6vJM',
                            imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-UYlHdWQDFHhw_Km9pPs3-27ALgMHEqlwzg&usqp=CAU',
                            "reviews": [
                              {
                                "user": "SolkadiFan",
                                "feedback": "Solkadi is a traditional Goan drink that's both refreshing and flavorful. Perfect to beat the heat!"
                              }
                            ]
                          },
                          {
                            "title": "Pork Vindaloo",
                            "category": "Goan Cuisine",
                            "instructions":'To prepare Pork Vindaloo, marinate bite-sized pork pieces in a mixture of vinegar, garlic, ginger, Kashmiri red chili powder, cumin, coriander, cinnamon, cloves, and salt, letting it sit for at least a few hours or overnight. In a pan, heat oil and sauté chopped onions until golden, then add the marinated pork along with any remaining marinade. Cook until the pork is browned, then add water or broth and simmer until the pork is tender and the flavors meld together. Adjust seasoning to taste and serve hot with rice or bread, enjoying the spicy, tangy flavors of this iconic Goan dish.',
                            "rating": 0,
                            videoLink:'https://www.youtube.com/watch?v=VZ7grmNSN_M',
                            imageSrc:'https://th.bing.com/th/id/OIP.LbcUae0rYLTmyffvrEB1XQHaHa?w=181&h=182&c=7&r=0&o=5&dpr=1.3&pid=1.7',
                            "reviews": [
                              {
                                "user": "VindalooEnthusiast",
                                "feedback": "Pork Vindaloo is a classic Goan dish that's bold, spicy, and packed with flavor. A must-try for spice lovers!"
                              }
                            ]
                          },
                          {
                            "title": "Cafreal",
                            "category": "Goan Cuisine",
                            instructions:'Cafreal is a flavorful Goan dish characterized by its vibrant green color and bold, aromatic spices. It originated in the African-influenced cuisine of Goa, a region in western India. To make Cafreal, chicken or other meats are marinated in a blend of fresh herbs and spices, typically including cilantro, mint, green chilies, garlic, ginger, and lime juice. The marinated meat is then grilled, pan-fried, or roasted until cooked through and infused with the fragrant flavors of the marinade. The resulting dish is bursting with aromatic and spicy notes, making it a favorite among Goan food enthusiasts. Cafreal is often served hot with rice, bread, or as part of a larger meal, and it is cherished for its bold and distinctive taste.',
                            "rating": 0,
                            videoLink:'https://www.youtube.com/watch?v=EzlVTL6OJ_8',
                            imageSrc:'https://th.bing.com/th/id/OIP.9ZZk9MaTlk4KDiEjdHz1jQHaHa?w=165&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
                            "reviews": [
                              {
                                "user": "CafrealFanatic",
                                "feedback": "Cafreal is a Goan specialty that's bursting with flavors! Love the bold spices and aromatic herbs."
                              }
                            ]
                          },
                          {
                            "title": "Feijoada",
                            "category": "Goan Cuisine",
                            "instructions":'Feijoada is a traditional Brazilian dish that is often considered the country national dish. It is a hearty and flavorful stew made with black beans and a variety of pork or beef cuts, such as sausage, pork ribs, and bacon. To prepare Feijoada, the meat is typically simmered slowly with onions, garlic, and spices until tender and flavorful. Black beans are then added to the stew along with additional seasonings like bay leaves, cumin, and paprika. The dish is cooked until the beans are soft and the flavors have melded together, resulting in a rich and savory stew that is often served with rice, collard greens, orange slices, and farofa (toasted cassava flour). Feijoada is enjoyed throughout Brazil, especially during festive occasions and gatherings, and it is cherished for its comforting and satisfying taste.',
                            "rating": 0,
                            videoLink:'https://www.youtube.com/watch?v=32Yhmmw7XxI',
                            imageSrc:'https://th.bing.com/th/id/OIP.BEqHMn98bz3fGJsYs8R6ZAHaHa?w=185&h=185&c=7&r=0&o=5&dpr=1.3&pid=1.7',
                            "reviews": [
                              {
                                "user": "FeijoadaLover",
                                "feedback": "Feijoada is a comforting Goan stew that's rich, flavorful, and perfect for a cozy meal."
                              }
                            ]
                          },
                          {
                            "title": "Sannas",
                            "category": "Goan Cuisine",
                            "instructions":'Sannas are a type of steamed rice cakes that originate from Goa, a region in western India. These fluffy and slightly sweet cakes are made from a batter of fermented rice and coconut, which is then steamed until light and airy. To prepare sannas, rice is soaked overnight and then ground into a smooth batter along with grated coconut. This batter is mixed with yeast or toddy (palm wine) and left to ferment for several hours, allowing it to rise and develop a slightly tangy flavor. The fermented batter is then poured into molds and steamed until the sannas are cooked through and have a soft, sponge-like texture. Sannas are often served hot as a breakfast or snack, accompanied by savory curries or sweet accompaniments like coconut milk or jaggery syrup. They are a beloved part of Goan cuisine, cherished for their delicate flavor and fluffy texture.',
                            "rating": 0,
                            videoLink:'https://www.youtube.com/watch?v=sgBByGp2YTY',
                            imageSrc:'https://th.bing.com/th/id/OIP.SBfalO7EHQ9FDxZzOcgcHQHaE6?w=197&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
                            "reviews": [
                              {
                                "user": "SannasEnthusiast",
                                "feedback": "Sannas are a traditional Goan delicacy that's soft, fluffy, and pairs perfectly with spicy curries. Love the texture!"
                              }
                            ]
                          },
                          
                            {
                              "title": "Dhansak",
                              "category": "Parsi Cuisine",
                              "instructions":'Dhansak is a traditional Parsi dish that combines elements of Persian and Indian cuisine, resulting in a flavorful and hearty stew. To prepare Dhansak, a mixture of lentils (usually a combination of yellow split peas and red lentils) is cooked with chunks of meat (often lamb or chicken), along with a variety of vegetables such as onions, tomatoes, potatoes, and eggplant. The dish is flavored with a blend of spices including cumin, coriander, turmeric, ginger, garlic, and chili powder, which impart a rich and aromatic flavor to the stew. Dhansak is typically served hot with steamed rice or crusty bread, offering a comforting and satisfying meal that is beloved in Parsi cuisine for its complex flavors and nourishing qualities.',
                              "rating": 0,
                              videoLink:'https://www.youtube.com/watch?v=LRIKRTEPoAY',
                              imageSrc:'https://th.bing.com/th/id/OIP.vS8gh7oToa4nkDmjXsvToAHaJ4?w=141&h=187&c=7&r=0&o=5&dpr=1.3&pid=1.7',
                              "reviews": [
                                {
                                  "user": "DhansakFanatic",
                                  "feedback": "Dhansak is a classic Parsi delicacy that's hearty, flavorful, and absolutely delicious. A must-try for anyone exploring Parsi cuisine!"
                                }
                              ]
                            },
                            {
                              "title": "Patra ni Machhi",
                              "category": "Parsi Cuisine",
                              "instructions":'Patra ni Machhi is a classic Parsi dish consisting of fish fillets marinated in a flavorful mixture of herbs, spices, and tangy ingredients, wrapped in banana leaves, and steamed until tender and aromatic. To prepare this dish, fish fillets, typically white fish like pomfret or cod, are marinated in a paste made from green chilies, garlic, ginger, cilantro, mint, coconut, and lemon juice. The marinated fish is then wrapped individually in banana leaves, creating parcels that help infuse the fish with the flavors of the marinade as it steams. The parcels are steamed until the fish is cooked through and tender, allowing the flavors to meld together beautifully. Patra ni Machhi is often served hot with steamed rice or crusty bread, offering a delightful and aromatic taste of Parsi cuisine that is both light and flavorful.',
                              "rating": 0,
                              videoLink:'https://www.youtube.com/watch?v=0kVQfOy1s00',
                              imageSrc:'https://th.bing.com/th/id/OIP.Vn0kCxZ0QWZgr13d1i-hqQHaE7?w=251&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
                              "reviews": [
                                {
                                  "user": "PatraNiMachhiLover",
                                  "feedback": "Patra ni Machhi is a unique and delicious Parsi fish preparation that's both visually stunning and incredibly tasty. Love the blend of flavors!"
                                }
                              ]
                            },
                            {
                                "title": "Parsi Sali Boti",
                                "category": "Parsi Cuisine",
                                "instructions":'Parsi Sali Boti is a traditional Parsi dish consisting of tender pieces of meat cooked in a rich and flavorful gravy, typically served with crispy potato sticks (sali) on top. To prepare this dish, chunks of lamb or goat meat are marinated in a mixture of yogurt, garlic, ginger, and a blend of spices such as cumin, coriander, turmeric, and chili powder. The marinated meat is then cooked slowly in a thick gravy made from onions, tomatoes, and spices until it becomes tender and the flavors meld together. Towards the end of cooking, crispy potato sticks are added to the dish, providing a crunchy texture and complementing the savory flavors of the meat. Parsi Sali Boti is often served hot with steamed rice or traditional Parsi bread, offering a delicious and satisfying meal that showcases the rich and diverse flavors of Parsi cuisine.',
                                "rating": 0,
                                videoLink:'https://www.youtube.com/watch?v=I0S2v_C9sJg',
                                imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxaVY31HaugdTOL1WgkJXlqFLUH7OIKin98Q&usqp=CAU',
                                "reviews": [
                                  {
                                    "user": "SaliBotiEnthusiast",
                                    "feedback": "Parsi Sali Boti is a mouthwatering dish that's hearty and delicious. The crispy potato sticks add a wonderful texture!"
                                  }
                                ]
                              },
                              {
                                "title": "Akuri",
                                "category": "Parsi Cuisine",
                                "instructions":'Akuri is a flavorful and spicy Parsi-style scrambled egg dish that is popular in Indian cuisine. To make Akuri, eggs are beaten and mixed with chopped onions, tomatoes, green chilies, ginger, garlic, and a blend of aromatic spices such as turmeric, cumin, coriander, and chili powder. The mixture is then cooked in a pan over medium heat until the eggs are soft and creamy, with the vegetables and spices evenly distributed throughout. Akuri is typically served hot with buttered toast or pav (bread rolls) for a delicious and satisfying breakfast or brunch option. It a versatile dish that can be customized to suit individual tastes by adjusting the level of spiciness or adding additional ingredients like herbs or cheese. Akuri is loved for its bold flavors and comforting appeal, making it a beloved dish in Parsi cuisine.',
                                "rating": 0,
                                videoLink:'https://www.youtube.com/watch?v=20O9PWsOsYI',
                                imageSrc:'https://th.bing.com/th/id/OIP.Pu9r4xwlOxu4uJ01HXOcAgHaE8?w=274&h=183&c=7&r=0&o=5&dpr=1.3&pid=1.7',
                                "reviews": [
                                  {
                                    "user": "AkuriFanatic",
                                    "feedback": "Akuri is a flavorful Parsi breakfast dish that's spicy and satisfying. Love it with buttered toast!"
                                  }
                                ]
                              },
                            {
                              "title": "Parsi Mutton Cutlets",
                              "category": "Parsi Cuisine",
                              "instructions":'Parsi Mutton Cutlets are flavorful and savory patties made with minced mutton (or lamb) and a blend of aromatic spices, herbs, and seasonings. To prepare these cutlets, finely minced mutton is mixed with ingredients such as chopped onions, ginger, garlic, green chilies, coriander leaves, and spices like cumin, coriander, garam masala, and chili powder. This mixture is then shaped into round patties or cutlets and coated in beaten egg and breadcrumbs before being shallow or deep-fried until golden and crispy. The result is a deliciously tender and flavorful cutlet with a crunchy exterior, perfect for serving as an appetizer, snack, or part of a main meal. Parsi Mutton Cutlets are often enjoyed with a side of chutney or sauce for dipping, adding an extra layer of flavor to this beloved dish from the Parsi culinary tradition.',
                              "rating": 0,
                              videoLink:'https://www.youtube.com/watch?v=AEpt1KVKQaM',
                              imageSrc:'https://th.bing.com/th/id/OIP.PCHsAnrFVPCllNW-ko68FwHaE8?w=242&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
                              "reviews": [
                                {
                                  "user": "CutletConnoisseur",
                                  "feedback": "Parsi Mutton Cutlets are a flavor-packed Parsi snack that's perfect for any occasion. Love the crunchy exterior and juicy interior!"
                                }
                              ]
                            },
                            {
                              "title": "Parsi Chicken Farcha",
                              "category": "Parsi Cuisine",
                              "instructions":'Parsi Chicken Farcha is a delicious and crispy fried chicken dish that originates from the Parsi community in India. To make this dish, chicken pieces are marinated in a flavorful mixture of yogurt, garlic, ginger, and spices such as turmeric, cumin, coriander, and chili powder. The marinated chicken is then coated in a seasoned flour mixture or breadcrumbs before being deep-fried until golden brown and crispy. The result is tender and juicy chicken with a crunchy exterior, bursting with savory and aromatic flavors. Parsi Chicken Farcha is often served as a snack or appetizer, accompanied by tangy chutneys or sauces for dipping. It a popular dish that showcases the diverse and vibrant culinary traditions of the Parsi community, making it a favorite among food enthusiasts seeking bold and flavorful experiences.',
                              "rating": 0,
                              videoLink:'https://www.youtube.com/watch?v=uUqg8oflHRY',
                              imageSrc:'https://th.bing.com/th/id/OIP.eUu54jzZU_QiDCqrl2m5dQHaEK?w=329&h=185&c=7&r=0&o=5&dpr=1.3&pid=1.7',
                              "reviews": [
                                {
                                  "user": "FarchaFan",
                                  "feedback": "Parsi Chicken Farcha is a flavorful and crispy delight that's hard to resist. Perfect for chicken lovers!"
                                }
                              ]
                            },
                            {
                              "title": "Lagan nu Custard",
                              "category": "Parsi Cuisine",
                              "instructions":'Lagan nu Custard is a delightful Parsi dessert with a rich and creamy texture, reminiscent of a traditional English custard but with a unique twist. To make this dessert, a mixture of milk, sugar, and eggs is gently cooked on the stovetop until thickened, then flavored with fragrant ingredients such as cardamom, saffron, and rose water. The custard is poured into a baking dish and baked in the oven until set, resulting in a smooth and velvety texture. Once cooled, it is often garnished with chopped nuts like almonds or pistachios and served chilled. Lagan nu Custard is a beloved dessert in Parsi cuisine, often enjoyed during special occasions and celebrations, offering a delightful blend of sweetness and aromatic flavors that leave a lasting impression on the palate.',
                              "rating": 0,
                              videoLink:'https://www.youtube.com/watch?v=8O0pOGvfKMA',
                              imageSrc:'https://th.bing.com/th/id/OIP.fp0f-9DjBNGwWKDLPAx5ewHaE8?w=249&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
                              "reviews": [
                                {
                                  "user": "CustardEnthusiast",
                                  "feedback": "Lagan nu Custard is a creamy and aromatic Parsi dessert that's indulgent and delightful. A perfect way to end a Parsi feast!"
                                }
                              ]
                            },     
                            
                                {
                                  "title": "Rogan Josh",
                                  "category": "Kashmiri Cuisine",
                                  "instructions":'Rogan Josh is a classic dish from Kashmir, known for its rich flavors and vibrant color. Typically made with tender chunks of lamb or goat meat, the dish is cooked in a thick gravy infused with a blend of aromatic spices. To prepare Rogan Josh, the meat is first marinated in a mixture of yogurt, garlic, ginger, and a variety of spices such as cumin, coriander, cinnamon, and Kashmiri red chili powder. This marinade helps to tenderize the meat and infuse it with flavor. The meat is then cooked slowly in ghee (clarified butter) along with onions, tomatoes, and additional spices until it becomes tender and the flavors meld together. The key to Rogan Josh distinctive red color and rich taste lies in the use of Kashmiri red chili powder and dried flowers of cockscomb, also known as "ratan jot," which are added towards the end of cooking. Once prepared, Rogan Josh is typically garnished with fresh coriander leaves and served hot with steamed rice or naan bread, providing a delicious taste of Kashmiri cuisine.',
                                  "rating": 0,
                                  videoLink:'https://www.youtube.com/watch?v=XVgZBsuNU60',
                                  imageSrc:'https://th.bing.com/th/id/OIP.IgA8FjEVnywxsyU8VDTsdgHaGb?w=217&h=189&c=7&r=0&o=5&dpr=1.3&pid=1.7',
                                  "reviews": [
                                    {
                                      "user": "RoganJoshConnoisseur",
                                      "feedback": "Rogan Josh is a quintessential Kashmiri delicacy that's full of rich flavors and tender meat. Absolutely delicious!"
                                    }
                                  ]
                                },
                                {
                                  "title": "Yakhni",
                                  "category": "Kashmiri Cuisine",
                                  "instructions":'Yakhni is a traditional Kashmiri dish renowned for its simplicity and rich flavor. To prepare it, tender pieces of meat, often chicken or lamb, are simmered gently in a broth infused with an array of aromatic spices. These spices, including cinnamon, cloves, cardamom, and fennel seeds, lend a distinctive taste and fragrance to the dish. Alongside the spices, onions and yogurt are added to further enhance the depth of flavor. The slow cooking process allows the meat to absorb the essence of the spices and tenderize, resulting in a hearty and nourishing dish. Yakhni is often served as a standalone soup, offering warmth and comfort during chilly Kashmiri winters, or as a main course alongside steamed rice or naan bread. With its blend of aromatic spices and succulent meat, Yakhni remains a cherished part of Kashmiri culinary heritage, inviting all who taste it to savor the authentic flavors of the region.',
                                  "rating": 0,
                                  videoLink:'https://www.youtube.com/watch?v=8HCuUY-b-dY',
                                  imageSrc:'https://th.bing.com/th/id/OIP.2oRIZS69Vh7fHGkEUWvw4gHaGD?w=243&h=198&c=7&r=0&o=5&dpr=1.3&pid=1.7',
                                  "reviews": [
                                    {
                                      "user": "YakhniLover",
                                      "feedback": "Yakhni is a comforting Kashmiri dish that's creamy, flavorful, and perfect with steamed rice. Love the subtle spices!"
                                    }
                                  ]
                                },
                                {
                                  "title": "Gushtaba",
                                  "category": "Kashmiri Cuisine",
                                 "instructions":'Gushtaba, a quintessential Kashmiri delicacy, features tender meatballs crafted from seasoned ground mutton, gently simmered in a velvety yogurt gravy enriched with fragrant spices like cinnamon, cloves, and cardamom. A final touch of flavor comes from a luscious tadka of caramelized onions, dried mint, and Kashmiri red chili powder, adding depth and aroma to the dish. Garnished with fresh coriander leaves, this exquisite creation is best enjoyed piping hot, served alongside steamed rice or traditional Kashmiri naan, inviting diners to savor the luxurious and nuanced flavors of Kashmiri cuisine in every delightful bite.',
                                  "rating": 0,
                                  videoLink:'https://www.youtube.com/watch?v=QGKTbmrGaJI',
                                  imageSrc:'https://th.bing.com/th/id/OIP.YwdvTnhkpMDFvZOmR13d5QHaHK?w=194&h=187&c=7&r=0&o=5&dpr=1.3&pid=1.7',
                                  "reviews": [
                                    {
                                      "user": "GushtabaFan",
                                      "feedback": "Gushtaba is a Kashmiri specialty that's rich, creamy, and bursting with flavors. Love the melt-in-your-mouth meatballs!"
                                    }
                                  ]
                                },
                                {
                                  "title": "Rice with Kashmiri Pulao",
                                  "category": "Kashmiri Cuisine",
                                 "instructions":'To prepare Kashmiri Pulao, a fragrant and flavorful rice dish, start by rinsing Basmati rice in cold water until the water runs clear. Then, soak the rice in water for about 30 minutes. While the rice is soaking, prepare the ingredients. In a heavy-bottomed pan or a rice cooker, heat ghee (clarified butter) over medium heat. Add whole spices such as cinnamon sticks, cloves, cardamom pods, and bay leaves to the ghee. Let them sizzle for a few seconds to release their aroma. Then, add thinly sliced onions and cook until they turn golden brown and caramelized. Next, add a handful of mixed nuts like almonds, cashews, and raisins to the pan. Stir and cook until the nuts are lightly toasted. Drain the soaked rice and add it to the pan along with a pinch of saffron threads soaked in warm milk for color and flavor. Stir gently to coat the rice with the ghee and spices. Pour in enough water to cover the rice by about an inch. Bring the mixture to a gentle boil, then reduce the heat to low, cover the pan, and let the rice cook until it tender and the liquid is absorbed, about 15-20 minutes. Once the rice is cooked, fluff it gently with a fork and garnish with chopped coriander leaves and fried onions for added flavor and texture. Serve the Kashmiri Pulao hot as a delicious main dish or as a side dish to accompany Kashmiri curries or kebabs. Enjoy the aromatic and rich flavors of this classic Kashmiri rice dish!',
                                  "rating": 0,
                                  videoLink:'https://www.youtube.com/watch?v=PeqyN5XFm8c',
                                  imageSrc:'https://th.bing.com/th/id/OIP.szWjye3XKgXsnWVWJSvHKAHaHU?w=195&h=192&c=7&r=0&o=5&dpr=1.3&pid=1.7',
                                  "reviews": [
                                    {
                                      "user": "PulaoEnthusiast",
                                      "feedback": "Kashmiri Pulao is a delightful blend of sweet and savory flavors, with the aroma of saffron and the crunch of nuts. Absolutely delicious!"
                                    }
                                  ]
                                },
                                {
                                  "title": "Modur Pulao",
                                  "category": "Kashmiri Cuisine",
                                  "instructions":'To make Modur Pulao, a traditional Kashmiri sweet rice dish, start by rinsing Basmati rice in cold water until the water runs clear. Then, soak the rice in water for about 30 minutes. In a heavy-bottomed pan or a rice cooker, heat ghee (clarified butter) over medium heat. Add whole spices like cinnamon sticks, cloves, and cardamom pods to the ghee and let them sizzle for a few seconds to release their aroma. Drain the soaked rice and add it to the pan. Stir gently to coat the rice with the ghee and spices. Next, add sugar and a pinch of saffron threads soaked in warm milk to the rice. Pour in enough water to cover the rice by about an inch. Bring the mixture to a gentle boil, then reduce the heat to low, cover the pan, and let the rice cook until it tender and the liquid is absorbed, about 15-20 minutes. Once the rice is cooked, fluff it gently with a fork and sprinkle with chopped nuts like almonds, cashews, and pistachios. Serve the Modur Pulao warm as a delightful dessert or as a side dish to accompany savory Kashmiri curries. Enjoy the fragrant and aromatic flavors of this traditional Kashmiri sweet rice dish!',
                                  "rating": 0,
                                  videoLink:'https://www.youtube.com/watch?v=fJ0p-SgJb3E',
                                  imageSrc:'https://th.bing.com/th/id/OIP.I24iF9U01qmUL6MmJXC61gHaE8?w=290&h=193&c=7&r=0&o=5&dpr=1.3&pid=1.7',
                                  "reviews": [
                                    {
                                      "user": "ModurPulaoFan",
                                      "feedback": "Modur Pulao is a heavenly Kashmiri dessert that's rich, fragrant, and utterly delicious. Love the sweetness and aroma!"
                                    }
                                  ]
                                },
                               {
                                  "title": "Haakh",
                                  "category": "Kashmiri Cuisine",
                                  instructions:'To prepare Haakh, a traditional Kashmiri dish, start by washing the greens thoroughly. Haakh typically uses a type of greens called collard greens or kale, but you can also use spinach or mustard greens. Trim the stems and chop the greens finely. In a large pot, heat mustard oil over medium heat. Add chopped onions and cook until they turn translucent. Then, add chopped garlic and cook until fragrant. Add the chopped greens to the pot along with a pinch of turmeric powder and salt to taste. Stir well to coat the greens with the oil and spices. Add a little water, cover the pot, and let the greens cook on low heat until they are tender, stirring occasionally. Once the greens are cooked through, add a pinch of Kashmiri red chili powder for color and flavor. Stir well and cook for a few more minutes. Adjust the seasoning if needed. Serve the Haakh hot with steamed rice or alongside other Kashmiri dishes for a wholesome meal. Enjoy the nutritious and delicious flavors of this classic Kashmiri green dish! ',
                                  "rating": 0,
                                  videoLink:'https://www.youtube.com/watch?v=fWn1tNQ48Hk',
                                  imageSrc:'https://th.bing.com/th/id/OIP.8psEU_7K83LDklzaCBnOPwHaJy?w=128&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
                                  "reviews": [
                                    {
                                      "user": "HaakhLover",
                                      "feedback": "Haakh is a simple yet flavorful Kashmiri side dish that's nutritious and delicious. Love the earthy flavors!"
                                    }
                                  ]
                                },
                                {
                                  "title": "Kashmiri Naan",
                                  "category": "Kashmiri Cuisine",
                                  instructions:'To prepare Kashmiri Naan, start by mixing all-purpose flour, yeast, sugar, salt, and yogurt in a bowl. Gradually add warm water and knead the mixture into a soft, smooth dough. Cover the dough and let it rest in a warm place for about an hour or until it doubles in size. Once the dough has risen, divide it into equal portions and shape each portion into a ball. Flatten each ball with your hands and stuff it with a mixture of finely chopped nuts (such as almonds, cashews, and pistachios), raisins, and a pinch of cardamom powder. Close the dough tightly to seal the filling inside and roll it gently into a naan shape. Preheat a tandoor or oven to high heat. Brush the surface of each naan with water and sprinkle sesame seeds on top. Place the naans on a baking tray or tandoor and bake them until they puff up and turn golden brown. Brush the hot naans with ghee or butter for extra flavor and serve them warm with your favorite Kashmiri curry or chutney. Enjoy the delightful taste and texture of homemade Kashmiri Naan!',
                                  "rating": 0,
                                  videoLink:'https://www.youtube.com/watch?v=ZszMuE9Ac1k',
                                  imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQp6nQiXuCLdpg1O2LLaI5EUKat_K7YAntQWA&usqp=CAU',
                                  "reviews": [
                                    {
                                      "user": "NaanConnoisseur",
                                      "feedback": "Kashmiri Naan is a delightful bread that's soft, fluffy, and perfect for soaking up the flavors of Kashmiri curries. Absolutely delicious!"
                                    }
                                  ]
                                },
                                {
                                  "title": "Kashmiri Dum Aloo",
                                  "category": "Kashmiri Cuisine",
                                  instructions:'To make Kashmiri Dum Aloo, first, wash and peel baby potatoes. Prick them with a fork and soak in water for 15-20 minutes. Meanwhile, blend together chopped tomatoes, onions, garlic, ginger, and a few cashew nuts to make a smooth paste. Heat oil in a deep pan and add whole spices like cloves, cinnamon, and cardamom. Add the tomato-onion paste and cook until the raw smell disappears and the mixture thickens. Then, add powdered spices such as turmeric, Kashmiri red chili powder, cumin powder, and coriander powder. Stir well and cook for a few more minutes. Drain the soaked potatoes and add them to the pan. Mix gently to coat the potatoes with the spice mixture. Pour in enough water to partially cover the potatoes. Cover the pan with a lid and let the potatoes cook on low heat until tender, stirring occasionally. Once the potatoes are cooked through and the gravy thickens, add a spoonful of yogurt and stir well. Adjust the seasoning with salt and sprinkle with garam masala powder. Garnish with chopped coriander leaves and serve hot with rice or naan bread. Enjoy the rich and aromatic flavors of Kashmiri Dum Aloo!',
                                  "rating": 0,
                                  videoLink:'https://www.youtube.com/watch?v=ph3qIpoPc6I',
                                  imageSrc:'https://th.bing.com/th/id/OIP.x0j8Is-UoRPJmFzQ1ns6JQHaE8?w=254&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
                                  "reviews": [
                                    {
                                      "user": "DumAlooFan",
                                      "feedback": "Kashmiri Dum Aloo is a heavenly dish that's creamy, flavorful, and simply irresistible. Love the tender potatoes!"
                                    }
                                  ]
                                },
                                {
                                  "title": "Kashmiri Rajma",
                                  "category": "Kashmiri Cuisine",
                                 instructions:'To cook Kashmiri Rajma, start by soaking red kidney beans in water overnight to soften them. Then, drain and rinse the beans before cooking. In a large pot, heat oil over medium heat and add chopped onions, garlic, and ginger. Sauté until the onions turn golden brown. Next, add chopped tomatoes and cook until they become soft and pulpy. Now, add spices like cumin powder, coriander powder, turmeric, and Kashmiri red chili powder. Stir well to combine the spices with the onion-tomato mixture. Then, add the soaked kidney beans to the pot along with enough water to cover them completely. Bring the mixture to a boil, then reduce the heat to low and let it simmer gently until the beans are tender and the gravy thickens, stirring occasionally. Once the beans are cooked through, add salt to taste and garnish with chopped coriander leaves. Serve the Kashmiri Rajma hot with steamed rice or naan bread for a hearty and flavorful meal. ',
                                 "rating": 0,
                                  videoLink:'https://www.youtube.com/watch?v=qJGPHbW3q8A',
                                  imageSrc:'https://th.bing.com/th/id/OIP.b6etqMUwwdDAuuZ4bQnWMgHaLH?w=126&h=187&c=7&r=0&o=5&dpr=1.3&pid=1.7',
                                  "reviews": [
                                    {
                                      "user": "RajmaLover",
                                      "feedback": "Kashmiri Rajma is a comforting and satisfying dish that's rich, spicy, and packed with protein. Absolutely delicious!"
                                    }
                                  ]
                                },
                                {
                                  "title": "Kashmiri Kahwa",
                                  "category": "Kashmiri Cuisine",
                                  instructions:'To prepare Kashmiri Kahwa, begin by bringing water to a boil in a pot over medium heat. Once the water is boiling, add green tea leaves, cardamom pods, cinnamon sticks, and a few strands of saffron. Allow the mixture to simmer for approximately 5 minutes, allowing the flavors of the spices to infuse into the water. Afterward, add crushed almonds and a few more strands of saffron to the pot, continuing to simmer for an additional 2-3 minutes. This step enhances the richness and depth of flavor in the Kahwa. Next, sweeten the Kahwa to your liking by adding sugar and stirring until it dissolves completely. Adjust the sweetness according to your preference. Once the sugar is incorporated, remove the pot from the heat and strain the Kashmiri Kahwa into cups, discarding the solid ingredients. Serve the hot Kahwa immediately, savoring its fragrant aroma and comforting warmth. This traditional Kashmiri beverage is not only delicious but also carries a legacy of cultural heritage, making it a delightful choice for any occasion.',
                                  "rating": 0,
                                  videoLink:'https://www.youtube.com/watch?v=dnD5Hqaf9KE',
                                  imageSrc:'https://th.bing.com/th/id/OIP.gpg_C1-OmiVEs7SjJufkGgHaE8?w=232&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
                                  "reviews": [
                                    {
                                      "user": "KahwaEnthusiast",
                                      "feedback": "Kashmiri Kahwa is a fragrant and refreshing tea that's perfect for warming up on cold days. Love the aroma and flavors!"
                                    }
                                  ]
                                },
                                {
                                  "title": "Paneer Butter Masala",
                                  "category": "Punjabi Cuisine",
                                  "instructions": "To prepare Paneer Butter Masala, start by heating oil or ghee in a pan. Add chopped onions, ginger, and garlic, and sauté until golden brown. Then, add chopped tomatoes and cook until they soften. Once the mixture cools down, blend it into a smooth paste. In the same pan, heat some more oil or ghee and add the tomato paste. Cook until the oil separates. Next, add spices like turmeric, coriander powder, red chili powder, and garam masala, and cook for a few more minutes. Add fresh cream and paneer cubes, and simmer for 5-10 minutes until the gravy thickens. Finally, garnish with chopped coriander leaves and a dollop of butter before serving hot with naan or rice.",
                                  "rating": 0,
                                  "videoLink": " https://www.youtube.com/watch?v=ts5aJn4cHmI",
                                  "imageSrc": " https://shwetainthekitchen.com/wp-content/uploads/2016/07/Paneer-Butter-Masala.jpg",
                                  "reviews": [
                                    {
                                      "user": "PaneerLover",
                                      "feedback": "Paneer Butter Masala is absolutely delicious! The flavors are rich and creamy, and it pairs perfectly with naan. Highly recommend trying this recipe!"
                                    }
                                  ]
                                },
                                {
                                  "title": "Shahi Paneer",
                                  "category": "Punjabi Cuisine",
                                  "instructions": "To prepare Shahi Paneer, heat ghee in a pan and add cumin seeds. Once they splutter, add finely chopped onions and sauté until golden brown. Add minced garlic, grated ginger, and finely chopped green chilies, and cook for a few minutes. Next, add pureed tomatoes and cook until the oil separates. Grind soaked cashew nuts into a smooth paste and add it to the pan. Stir well and cook for a couple of minutes. Then, add turmeric powder, coriander powder, Kashmiri red chili powder, garam masala, salt, and sugar, and mix everything. Add fresh cream and kasuri methi, and let the gravy simmer. Finally, add paneer cubes and cook for another 5 minutes. Garnish with chopped coriander leaves and serve hot with naan or rice.",
                                  "rating": 0,
                                  "videoLink": "https://www.youtube.com/watch?v=G3-EASdBTOU ",
                                  "imageSrc": " https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUHjfTkHybnVILTHODB2D2aRAGNFMCIU_F3g&usqp=CAU ",
                                  "reviews": [
                                    {
                                      "user": "ShahiPaneerFan",
                                      "feedback": "This Shahi Paneer recipe is amazing! The gravy is rich and creamy, and the flavors are spot on. Definitely making it again!"
                                    }
                                  ]
                                },
                                {
                                  "title": "Paneer Bhurji",
                                  "category": "Punjabi Cuisine",
                                  "instructions": "To prepare Paneer Bhurji, heat oil or ghee in a pan. Add cumin seeds and let them splutter. Then, add finely chopped onions and sauté until golden brown. Add minced garlic, grated ginger, and finely chopped green chilies, and cook for a few minutes. Next, add chopped tomatoes and cook until they soften. Add turmeric powder, red chili powder, coriander powder, and salt, and mix well. Crumble paneer into the pan and cook for a few minutes until it absorbs the flavors. Finally, garnish with chopped coriander leaves and serve hot with roti or paratha.",
                                  "rating": 0,
                                  "videoLink": " https://www.youtube.com/watch?v=-w5uBstq3Ok ",
                                  "imageSrc": " https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3e0_JzrIqJDc3TvRtgViS8prDxlp1cu1sAw&usqp=CAU",
                                  "reviews": [
                                    {
                                      "user": "PaneerBhurjiFan",
                                      "feedback": "This Paneer Bhurji recipe is fantastic! It's flavorful and pairs perfectly with roti. Will definitely be making it again!"
                                    }
                                  ]
                                },
                                {
                                  "title": "Paneer Pakora",
                                  "category": "Punjabi Cuisine",
                                  "instructions": "To prepare Paneer Pakora, start by cutting paneer into bite-sized cubes. In a mixing bowl, prepare the batter by combining besan (gram flour), rice flour, ajwain (carom seeds), turmeric powder, red chili powder, garam masala, salt, and water. Mix until a smooth batter forms. Heat oil for deep frying in a pan. Dip the paneer cubes into the batter, ensuring they are well coated. Carefully drop them into the hot oil and fry until golden brown and crispy. Remove from the oil and place them on paper towels to drain excess oil. Serve hot with green chutney or ketchup.",
                                  "rating": 0,
                                  "videoLink": " https://www.youtube.com/watch?v=NwUNbuFK2Ro ",
                                  "imageSrc": " https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRncZlBcjo9a9bZb6nKOuHXNaf3VNuTaVeI1A&usqp=CAU ",
                                  "reviews": [
                                    {
                                      "user": "PaneerPakoraLover",
                                      "feedback": "These Paneer Pakoras are absolutely delicious! Crispy on the outside and soft on the inside. Perfect snack for any occasion!"
                                    }
                                  ]
                                },
                                {
                                  "title": "Palak Paneer",
                                  "category": "Punjabi Cuisine",
                                  "instructions": "To prepare Palak Paneer, start by blanching spinach leaves in boiling water for a few minutes. Then, transfer the blanched spinach to a bowl of ice water to retain its vibrant green color. Drain the spinach and blend it into a smooth puree. In a pan, heat oil or ghee and add cumin seeds. Once they splutter, add finely chopped onions and sauté until golden brown. Add minced garlic, grated ginger, and finely chopped green chilies, and cook for a few minutes. Next, add tomato puree and cook until the oil separates. Then, add turmeric powder, coriander powder, red chili powder, and salt, and mix well. Add the spinach puree and cook for a few more minutes. Finally, add paneer cubes and simmer until heated through. Serve hot with roti or rice.",
                                  "rating": 0,
                                  "videoLink": "https://www.youtube.com/watch?v=vCDy7vjbz_M ",
                                  "imageSrc": "  https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbvfsFw6JBQ9y1vxzn4p5v_1TTgBFBY2EDPQ&usqp=CAU",
                                  "reviews": [
                                    {
                                      "user": "PalakPaneerFan",
                                      "feedback": "This Palak Paneer recipe is fantastic! The spinach gravy is rich and flavorful, and the paneer cubes are perfectly cooked. Absolutely delicious!"
                                    }
                                  ]
                                },
                                {
                                  "title": "Paneer Lababdar",
                                  "category": "Punjabi Cuisine",
                                  "instructions": "To prepare Paneer Lababdar, start by heating oil or ghee in a pan. Add cumin seeds and let them splutter. Then, add finely chopped onions and sauté until golden brown. Add minced garlic, grated ginger, and finely chopped green chilies, and cook for a few minutes. Next, add tomato puree and cook until the oil separates. Then, add cashew paste and cook for a couple of minutes. Add turmeric powder, coriander powder, red chili powder, garam masala, and salt, and mix well. Add paneer cubes and simmer for a few minutes until heated through. Finally, add fresh cream and kasuri methi, and let it simmer for a couple more minutes. Garnish with chopped coriander leaves and serve hot with naan or rice.",
                                  "rating": 0,
                                  "videoLink": " https://www.youtube.com/watch?v=zz4CJGel_ZY ",
                                  "imageSrc": " https://www.spiceupthecurry.com/wp-content/uploads/2022/09/paneer-lababdar-1.jpg",
                                  "reviews": [
                                    {
                                      "user": "PaneerLababdarLover",
                                      "feedback": "This Paneer Lababdar recipe is amazing! The gravy is rich and creamy, and the flavors are perfectly balanced. It's definitely going to be a regular on my dinner menu!"
                                    }
                                  ]
                                },
                                {
                                  "title": "Paneer Do Pyaza",
                                  "category": "Punjabi Cuisine",
                                  "instructions": "To prepare Paneer Do Pyaza, start by heating oil or ghee in a pan. Add cumin seeds and let them splutter. Then, add finely chopped onions and sauté until golden brown. Add minced garlic, grated ginger, and finely chopped green chilies, and cook for a few minutes. Next, add tomato puree and cook until the oil separates. Then, add turmeric powder, coriander powder, red chili powder, garam masala, and salt, and mix well. Add paneer cubes and sliced onions, and cook for a few minutes until the onions are soft. Finally, garnish with chopped coriander leaves and serve hot with roti or rice.",
                                  "rating": 0,
                                  "videoLink": "https://www.youtube.com/watch?v=jwk6G_-FZKM ",
                                  "imageSrc": "https://www.indianhealthyrecipes.com/wp-content/uploads/2022/01/paneer-do-pyaza.jpg",
                                  "reviews": [
                                    {
                                      "user": "PaneerDoPyazaFan",
                                      "feedback": "This Paneer Do Pyaza recipe is fantastic! The combination of paneer and onions cooked in rich gravy is simply irresistible. I highly recommend it!"
                                    }
                                  ]
                                },
                                {
                                  "title": "Paneer Chilli",
                                  "category": "Punjabi Cuisine",
                                  "instructions": "To prepare Paneer Chilli, start by cutting paneer into cubes and marinating them with soy sauce, chili sauce, and cornflour. Heat oil in a pan and fry the marinated paneer until golden brown. Remove the paneer cubes from the pan and set them aside. In the same pan, add chopped garlic, ginger, green chilies, and onions, and sauté until they turn translucent. Then, add sliced bell peppers and cook until they are slightly tender. Next, add soy sauce, chili sauce, tomato ketchup, and vinegar, and mix well. Return the fried paneer cubes to the pan and toss everything together. Finally, garnish with chopped spring onions and serve hot as a starter or with fried rice.",
                                  "rating": 0,
                                  "videoLink": " https://www.youtube.com/watch?v=NeBpZLTO1ts",
                                  "imageSrc": "https://th.bing.com/th/id/OIP.etm7xm4pPbJYCst6pddL6gAAAA?w=134&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7 ",
                                  "reviews": [
                                    {
                                      "user": "PaneerChilliFan",
                                      "feedback": "This Paneer Chilli recipe is amazing! The paneer is crispy on the outside and soft on the inside, and the sauce is perfectly balanced. Absolutely delicious!"
                                    }
                                  ]
                                },                                                                       
];
function renderRecipes(results) {
  const container = document.getElementById('recipeContainer');
  container.innerHTML = '';
  results.forEach(recipe => {
      const recipeElement = document.createElement('section');
      recipeElement.className = 'recipe';
      recipeElement.innerHTML = `
          <!-- Recipe information -->
          <div class="recipe-info" onclick="toggleRecipeDetails('${recipe.title}')">
              <h2>${recipe.title}</h2>
              <img src="${recipe.imageSrc}" alt="${recipe.title}" style="max-width: 100%;">
              <p class="video-link">Video Link: <a href="${recipe.videoLink}" target="_blank">Watch Video</a></p>
              <!-- Updated heart button -->
              <button onclick="toggleFavorite(event, '${recipe.title}')">
                  <i class="fas fa-heart${recipe.favorite ? ' active' : ''}"></i>
                  ${recipe.favorite ? 'Added to Favorites' : 'Add to Favorites'}
              </button>
          </div>
          <div class="recipe-details" style="display: none;">
              <h2>${recipe.title}</h2>
              <p>Category: ${recipe.category}</p>
              <p>Rating: ${recipe.rating}</p>
              <div class="rating">
                  ${renderRatingStars(recipe.title, recipe.rating)}
              </div>
              <button onclick="shareRecipe('${recipe.title}')">Share</button>
              <button onclick="showFeedback('${recipe.title}')">Feedbacks</button> <!-- Updated button -->
              <div id="${recipe.title}_Feedbacks" style="display: none;"></div> <!-- Updated ID -->
              <p>Instructions: ${recipe.instructions || 'Not available'}</p>
          </div>
      `;
      container.appendChild(recipeElement);
  });
}

function renderRatingStars(title, rating) {
const stars = [];
for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
        stars.push(`<span class="star active" data-value="${i}" onclick="rateRecipe('${title}', ${i})">&#9733;</span>`);
    } else {
        stars.push(`<span class="star" data-value="${i}" onclick="rateRecipe('${title}', ${i})">&#9733;</span>`);
    }
}
return stars.join('');
}

function rateRecipe(title, rating) {
const recipe = recipes.find(recipe => recipe.title === title);
recipe.rating = rating;
renderRecipes(recipes);
alert('Thank you for rating the recipe!');
}
renderRecipes(recipes);
function toggleRecipeDetails(title) {
const allRecipes = document.querySelectorAll('.recipe');
allRecipes.forEach(recipe => {
const recipeInfo = recipe.querySelector('.recipe-info h2');
const videoLink = recipe.querySelector('.video-link');
const detailsDiv = recipe.querySelector('.recipe-details');
if (recipeInfo.textContent === title) {
  if (detailsDiv.style.display === 'none') {
    detailsDiv.style.display = 'block';
    videoLink.style.display = 'block';
  } else {
    detailsDiv.style.display = 'none';
    videoLink.style.display = 'none';
  }
} else {
  recipe.style.display = 'none';
}
});
}
function shareRecipe(title) {
if (navigator.share) {
    navigator.share({
        title: 'Check out this recipe: ' + title,
        text: 'I found this delicious recipe and wanted to share it with you!',
        url: window.location.href
    }).then(() => console.log('Shared successfully'))
    .catch((error) => console.error('Error sharing:', error));
} else {
      alert('Your browser does not support sharing. Please try again on a supported browser.');
}
}

function showFeedback(title) {
  const feedbackDiv = document.getElementById(`${title}_Feedbacks`);
  feedbackDiv.style.display = feedbackDiv.style.display === 'none' ? 'block' : 'none';
  feedbackDiv.innerHTML = '';

  const recipe = recipes.find(recipe => recipe.title === title);
  recipe.reviews.forEach(review => {
      const feedbackElement = document.createElement('div');
      feedbackElement.innerHTML = `<p>${review.user}: ${review.feedback}</p>`;
      feedbackDiv.appendChild(feedbackElement);
  });
  const giveFeedbackButton = document.createElement('button');
  giveFeedbackButton.textContent = 'Give Feedback';
  giveFeedbackButton.onclick = function() {
      showFeedbackForm(title);
  };
  feedbackDiv.appendChild(giveFeedbackButton);
}
function getFeedbackData() {
  const feedbackData = localStorage.getItem('feedbackData');
  return feedbackData ? JSON.parse(feedbackData) : {};
}
function saveFeedbackData(data) {
  localStorage.setItem('feedbackData', JSON.stringify(data));
}
function showFeedback(title) {
  const feedbackDiv = document.getElementById(`${title}_Feedbacks`);
  feedbackDiv.style.display = feedbackDiv.style.display === 'none' ? 'block' : 'none';
  feedbackDiv.innerHTML = '';

  const recipe = recipes.find(recipe => recipe.title === title);
  recipe.reviews.forEach(review => {
      const feedbackElement = document.createElement('div');
      feedbackElement.innerHTML = `<p>${review.user}: ${review.feedback}</p>`;
      feedbackDiv.appendChild(feedbackElement);
  });
  const giveFeedbackButton = document.createElement('button');
  giveFeedbackButton.textContent = 'Give Feedback';
  giveFeedbackButton.onclick = function() {
      showFeedbackForm(title);
  };
  feedbackDiv.appendChild(giveFeedbackButton);
}

function showFeedbackForm(title) {
  const feedbackDiv = document.getElementById(`${title}_Feedbacks`);
  const form = document.createElement('form');
  form.style.maxWidth = '400px';
  form.style.margin = '0 auto';
  form.style.padding = '20px';
  form.style.border = '1px solid #ccc';
  form.style.borderRadius = '5px';
  form.style.backgroundColor = '#f9f9f9';

  form.innerHTML = `
      <label for="username">Username:</label>
      <input type="text" id="username" name="username" required style="width: 100%; padding: 8px; margin-bottom: 15px; border: 1px solid #ccc; border-radius: 5px; box-sizing: border-box;"><br><br>
      <label for="password">Password:</label>
      <input type="password" id="password" name="password" required style="width: 100%; padding: 8px; margin-bottom: 15px; border: 1px solid #ccc; border-radius: 5px; box-sizing: border-box;"><br><br>
      <label for="feedback">Feedback:</label><br>
      <textarea id="feedback" name="feedback" rows="4" cols="50" required style="width: 100%; padding: 8px; margin-bottom: 15px; border: 1px solid #ccc; border-radius: 5px; box-sizing: border-box;"></textarea><br><br>
      <input type="submit" value="Submit" style="width: 100%; padding: 10px; border: none; border-radius: 5px; background-color: #4caf50; color: white; font-size: 16px; cursor: pointer;">
  `;

  form.onsubmit = function(event) {
      event.preventDefault(); 
      const username = form.elements['username'].value;
      const password = form.elements['password'].value;
      const feedback = form.elements['feedback'].value;
      const recipe = recipes.find(recipe => recipe.title === title);
      recipe.reviews.push({ user: username, feedback: feedback });
      const feedbackData = getFeedbackData();
      if (!feedbackData[title]) {
          feedbackData[title] = [];
      }
      feedbackData[title].push({ user: username, feedback: feedback });
      saveFeedbackData(feedbackData);
      showFeedback(title);
      form.reset();
  };

  feedbackDiv.appendChild(form);
}
function loadFeedbackData() {
  const feedbackData = getFeedbackData();
  recipes.forEach(recipe => {
      const feedbacks = feedbackData[recipe.title];
      if (feedbacks) {
          recipe.reviews.push(...feedbacks);
      }
  });
}
loadFeedbackData();
renderRecipes(recipes);
function searchRecipes() {
const searchInput = document.getElementById('searchInput').value.toLowerCase();
const results = recipes.filter(recipe => recipe.title.toLowerCase().includes(searchInput));
renderRecipes(results);
}
function filterByCategory(category) {
const results = category === 'All' ? recipes : recipes.filter(recipe => recipe.category === category);
renderRecipes(results);
}
window.addEventListener('beforeunload', function(e) {
var message = 'Are you sure you want to leave?';
e.returnValue = message;
});
let favoriteRecipes = [];
function addToFavorites(title) {
    const recipe = recipes.find(recipe => recipe.title === title);
    if (!favoriteRecipes.includes(recipe)) {
        favoriteRecipes.push(recipe);
        updateFavoriteButton();
    }
}
function updateFavoriteButton() {
  const favButton = document.getElementById('favButton');
  const favoriteCount = favoriteRecipes.length;
  favButton.innerHTML = `Favorites (${favoriteCount})`;
  favButton.style.transition = "background-color 0.3s ease";
}
function toggleFavorite(event, title) {
  event.stopPropagation(); 
  const recipe = recipes.find(recipe => recipe.title === title);
  const index = favoriteRecipes.findIndex(favRecipe => favRecipe.title === title);

  if (index === -1) {
      favoriteRecipes.push(recipe);
      event.target.style.backgroundColor = "red"; 
  } else {
      favoriteRecipes.splice(index, 1);
      event.target.style.backgroundColor = ""; 
  }
  updateFavoriteButton();
}
document.getElementById('favButton').addEventListener('click', function() {
  renderRecipes(favoriteRecipes);
});

// Fetch and display recipes from backend
async function fetchRecipes() {
  try {
      const response = await fetch('http://localhost:5000/api/recipes'); // Request to backend
      const recipes = await response.json(); // Parse the response data

      const recipeContainer = document.getElementById('recipeContainer');
      recipeContainer.innerHTML = ''; // Clear previous recipes

      recipes.forEach(recipe => {
          // Create a new recipe card for each recipe
          const recipeElement = document.createElement('div');
          recipeElement.className = 'recipe';

          recipeElement.innerHTML = `
              <h3>${recipe.title}</h3>
              <img src="${recipe.image}" alt="${recipe.title}" />
              <p>${recipe.instructions}</p>
          `;
          recipeContainer.appendChild(recipeElement); // Add to the page
      });
  } catch (err) {
      console.error('Failed to fetch recipes:', err);
  }
}

