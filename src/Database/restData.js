export const restData = {
    name: `Yousef's Restaurant`, 
    location: 'Hourfish',
    Categories: {
        Main : {
            key: 'Main',
            name: 'Main',
            name_en: 'Main en',
            name_ar: 'Main ar',
            name_he: 'Main he',
            items: {
                burger: {
                    key: 'burger',
                    name: 'Burger',
                    name_en: 'Burger en',
                    name_ar: 'Burger ar',
                    name_he: 'Burger he',
                    price: 50,
                    url: 'https://media.istockphoto.com/photos/delicious-homemade-hamburger-and-french-fries-picture-id1254672762?k=20&m=1254672762&s=612x612&w=0&h=89EjT1WdALcyRBcU1rspIR1HL9f4imcpXOWBbfZufzA=',
                    additions: {
                        meat: {
                            key: 'meat',
                            name: 'Meat',
                            singleChoice: true,
                            additionItems: {
                                beef : {
                                    key: 'beef',
                                    name: 'beef',
                                    price: 0,
                                    default: true,
                                },
                                chicken : {
                                    key: 'chicken',
                                    name: 'Chicken',
                                    price: 0,
                                    default: false,
                                },
                                vegetarian : {
                                    key: 'vegetarian',
                                    name: 'vegetarian',
                                    price: 0,
                                    default: false,
                                }
                            }
                        },
                        salads : {
                            key: 'salads',
                            name: 'Salads',
                            singleChoice: false,
                            additionItems: {
                                lettuce: {
                                    key: 'lettuce',
                                    name: 'Lettuce',
                                    price: 0,
                                    default: false,
                                },
                                cucumber: {
                                    key: 'cucumber',
                                    name: 'Cucumber',
                                    price: 0,
                                    default: false,
                                },
                                tommato: {
                                    key: 'tommato',
                                    name: 'Tommato',
                                    price: 0,
                                    default: false,
                                },
                                pickles: {
                                    key: 'pickles',
                                    name: 'Pickles',
                                    price: 0,
                                    default: false,
                                }
                            }
                        },
                        extra : {
                            key: 'extra',
                            name: 'Extra',
                            singleChoice: false,
                            additionItems: {
                                mushrooms: {
                                    key: 'mushrooms',
                                    name: 'Mushrooms',
                                    price: 8,
                                    default: false,
                                },
                                cheese: {
                                    key: 'cheese',
                                    name: 'Cheese',
                                    price: 7,
                                    default: false,
                                }
                            }
                        }

                    }
                },
                steak: {
                    key: 'steak',
                    name: 'Steak',
                    name_en: 'Steak en',
                    name_ar: 'Steak ar',
                    name_he: 'Steak he',
                    price: 35,
                    url: 'https://media.istockphoto.com/photos/grilling-steaks-on-flaming-grill-and-shot-with-selective-focus-picture-id594465522?b=1&k=20&m=594465522&s=170667a&w=0&h=s08KdEN-YhDkjipFBvhkeqq7aoncmnTkeDLA4jKxZJg=',
                    additions: {
                        doneness : {
                            key: 'doneness',
                            name: 'Doneness',
                            singleChoice: true,
                            additionItems: {
                                well: {
                                    key: 'well',
                                    name: 'Well-Done',
                                    price: 0,
                                    default: true,
                                },
                                medium: {
                                    key: 'medium',
                                    name: 'Medium',
                                    price: 0,
                                    default: false,
                                },
                                done: {
                                    key: 'done',
                                    name: 'done',
                                    price: 0,
                                    default: false,
                                },
                                rare: {
                                    key: 'rare',
                                    name: 'rare',
                                    price: 0,
                                    default: false,
                                }
                            }
                        }

                    }
                },
                fish: {
                    key: 'fish',
                    name: 'Fish',
                    name_en: 'Fish en',
                    name_ar: 'Fish ar',
                    name_he: 'Fish he',
                    price: 55,
                    url: 'https://media.istockphoto.com/photos/fillet-of-salmon-with-vegetable-picture-id175028181?b=1&k=20&m=175028181&s=170667a&w=0&h=9SDGAG8CkgvTHfhPANh-TwIA1xJ8NelCSwl_ttUt-bk='
                },
                vegetarian: {
                    key: 'vegetarian',
                    name: 'Vegetarian',
                    name_en: 'Vegetarian',
                    name_ar: 'Vegetarian',
                    name_he: 'Vegetarian',
                    price: 42,
                    url: 'https://media.istockphoto.com/photos/vegan-poke-bowl-with-avocado-tofu-rice-seaweed-carrots-and-mango-top-picture-id1205559208?b=1&k=20&m=1205559208&s=170667a&w=0&h=92J_F_ThLCwMT0_jL9q4MmonQc_cU7OJsu9hkfoHCKY='
                }
            }
        },
        Drinks : {
            key: 'Drinks',
            name: 'Drinks',
            name_en: 'Drinks en',
            name_ar: 'Drinks ar',
            name_he: 'Drinks he',
            items: {
                cola : {
                    key: 'cola',
                    name: 'Coca cola',
                    name_en: 'Coca cola en',
                    name_ar: 'Coca cola ar',
                    name_he: 'Coca cola he',
                    price: 8,
                    url: 'https://images.unsplash.com/photo-1567705323043-d0e489de300d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=651&q=80'
                },
                esspresso : {
                    key: 'esspresso',
                    name: 'esspresso',
                    name_en: 'esspresso en',
                    name_ar: 'esspresso ar',
                    name_he: 'esspresso he',
                    price: 5,
                    url: 'https://media.istockphoto.com/photos/espresso-coffee-cup-with-beans-on-vintage-table-picture-id664313320?b=1&k=20&m=664313320&s=170667a&w=0&h=UIdOOFTKSPlK6WwsrN_IH3o10dFB0CExEu6yrq-BZf4='
                },
                cappuccino : {
                    key: 'cappuccino',
                    name: 'Cappuccino',
                    name_en: 'Cappuccino en',
                    name_ar: 'Cappuccino ar',
                    name_he: 'Cappuccino he',
                    price: 7,
                    url: 'https://media.istockphoto.com/photos/cup-of-cafe-latte-with-coffee-beans-and-cinnamon-sticks-picture-id505168330?b=1&k=20&m=505168330&s=170667a&w=0&h=jJTePtpYZLR3M2OULX5yoARW7deTuAUlwpAoS4OriJg='
                }
            }
        },
        dessert : {
            key: 'dessert',
            name: 'Dessert',
            name_en: 'Dessert en',
            name_ar: 'Dessert ar',
            name_he: 'Dessert he',
            items: {
                cake1 : {
                    key: 'cake1',
                    name: 'Choclate cake',
                    name_en: 'Choclate cake en',
                    name_ar: 'Choclate cake ar',
                    name_he: 'Choclate cake he',
                    price: 25,
                    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEJEaOc88Ag_RGFKWiYWyPnVry_osqFds5Tg&usqp=CAU'
                },
                donates : {
                    key: 'Donates',
                    name: 'Donates',
                    name_en: 'Donates en',
                    name_ar: 'Donates ar',
                    name_he: 'Donates he',
                    price: 23,
                    url: 'https://i.ytimg.com/vi/gevpzxRxec4/maxresdefault.jpg'
                }
            }
        }
    }

}



// export const restData = {
//     name: 'Rest name', 
//     location: 'Rest location',
//     Categories: [
//         {
//             key: 'key1',
//             name: 'category 1',
//             name_en: 'category 1 en',
//             name_ar: 'category 1 ar',
//             name_he: 'category 1 he',
//             items: [
//                 {
//                     key: 'itemId1',
//                     name: 'Item name1',
//                     name_en: 'Item name1 en',
//                     name_ar: 'Item name1 ar',
//                     name_he: 'Item name1 he',
//                     price: '50',
//                     url: 'https://media.istockphoto.com/photos/delicious-homemade-hamburger-and-french-fries-picture-id1254672762?k=20&m=1254672762&s=612x612&w=0&h=89EjT1WdALcyRBcU1rspIR1HL9f4imcpXOWBbfZufzA=',
//                     additions: [
//                         {
//                             key: 'additionKey1',
//                             name: 'addition 1',
//                             singleChoice: true,
//                             additionItems: [
//                                 {
//                                     key: 'additionItemKey1',
//                                     name: 'additionitem1',
//                                     price: 0,
//                                     default: true,
//                                 },
//                                 {
//                                     key: 'additionItemKey2',
//                                     name: 'additionitem2',
//                                     price: 0,
//                                     default: false,
//                                 },
//                                 {
//                                     key: 'additionItemKey3',
//                                     name: 'additionitem3',
//                                     price: 0,
//                                     default: false,
//                                 },
//                                 {
//                                     key: 'additionItemKey4',
//                                     name: 'additionitem4',
//                                     price: 0,
//                                     default: false,
//                                 }
//                             ]
//                         },
//                         {
//                             key: 'additionKey2',
//                             name: 'addition 2',
//                             singleChoice: false,
//                             additionItems: [
//                                 {
//                                     key: 'additionItemKey1',
//                                     name: 'additionitem1',
//                                     price: 0,
//                                     default: true,
//                                 },
//                                 {
//                                     key: 'additionItemKey2',
//                                     name: 'additionitem2',
//                                     price: 0,
//                                     default: false,
//                                 },
//                                 {
//                                     key: 'additionItemKey3',
//                                     name: 'additionitem3',
//                                     price: 0,
//                                     default: true,
//                                 },
//                                 {
//                                     key: 'additionItemKey4',
//                                     name: 'additionitem4',
//                                     price: 0,
//                                     default: false,
//                                 }
//                             ]
//                         }

//                     ]
//                 },
//                 {
//                     key: 'itemId2',
//                     name: 'Item name2',
//                     name_en: 'Item name2 en',
//                     name_ar: 'Item name2 ar',
//                     name_he: 'Item name2 he',
//                     price: '35',
//                     url: 'https://media.istockphoto.com/photos/burger-and-fries-picture-id665725264?k=20&m=665725264&s=612x612&w=0&h=oEW6_B4dRoJl0xizrsE_AzvhIIZRxEm3kJm6X12JsZg='
//                 },
//                 {
//                     key: 'itemId5',
//                     name: 'Item name5',
//                     name_en: 'Item name5 en',
//                     name_ar: 'Item name5 ar',
//                     name_he: 'Item name5 he',
//                     price: '55',
//                     url: 'https://media.istockphoto.com/photos/big-sandwich-hamburger-burger-with-beef-tomato-cheese-pickled-and-picture-id1188850086?k=20&m=1188850086&s=612x612&w=0&h=D_RLC8sKDb3H2wMYsGj6jSu5-PjRkOk_An3HG_L4O4s='
//                 }
//             ]
//         },
//         {
//             key: 'key2',
//             name: 'category 2',
//             name_en: 'category 2 en',
//             name_ar: 'category 2 ar',
//             name_he: 'category 2 he',
//             items: [
//                 {
//                     key: 'itemId3',
//                     name: 'Item name3',
//                     name_en: 'Item name3 en',
//                     name_ar: 'Item name3 ar',
//                     name_he: 'Item name3 he',
//                     price: '55',
//                     url: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGRyaW5rfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
//                 },
//                 {
//                     key: 'itemId4',
//                     name: 'Item name4',
//                     name_en: 'Item name4 en',
//                     name_ar: 'Item name4 ar',
//                     name_he: 'Item name4 he',
//                     price: '53',
//                     url: 'https://media.istockphoto.com/photos/whiskey-on-the-rocks-picture-id502458158?k=20&m=502458158&s=612x612&w=0&h=fBaQKXQBk62yFzDCgHL7qe45oRXLAbM-ObOL2v47XcM='
//                 }
//             ]
//         }
//     ],

// }