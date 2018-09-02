const ponyFirstNames = "Twilight,Apple,Rarity,Rainbow,Flutter,Pinkie,Cheerie,Cutie,Sweetie,Quila,Koyah,Looby,Grandma,Grandad,Celestia,Daisy,Cadence,Princess,Scooti,Derpy,Love,Big,Pound,Granny,Trixie,Aloe,Blue,Charity,Cherry,Coco,Pokey,Starlight,Diamond,Silver,Bulk,Cranky,Hoity,Sapphire,Fancy,Sassy,Soarin,Hoops,Star,Flim,Daring,Lyra,Lemon,Octavia,Cheese,Double,Party,Sugar,RaRa,Sven,Countess,Sun,Moon,Twinkle,Pumpkin,Smart,Clover,Shining,Doctor,Bon,Special Agent,Daring,Songbird,Tempest,Princess,Queen,Lickety,DJ,Zecora,Ace,Spitfire,Mr Carrot,Fizzlepop,Sunburst,Flurry,Maud,Fire,Zephyr,Pluto,Filthy,Spoiled,Vapour,Sky,Spear,Hard,Zipper,Twister,Windy,Bow,Lightning,Feather,Strawberry,Lilly,Star,Inky,Day,Gram,Goldie,Sable,Mist,Flash,Cat,Mage,Rock,Star,Chancellor,Sand,Mud,Raspberry,Stellar,Firelight".split(',')

const ponyLastNames = "Sparkle,Jack,Dash,Shy,Pie,Lee,Belle,Moon,Luna,Loo,Hooves,Heart,Macintosh,Cake,Cupcake,Smith,Bloom,Bobbin,KindHeart,Jubilee,Pommel,Smokes,Glimmer,Tiara,Spoon,Biceps,Doodle,Toity,Blueblood,Saddles,Rainboom,Chrysalis,Swirl,Heartstrings,Hearts,Melody,Sandwich,Diamond,Favour,Gallop,Coloratura,Burst,Dancer,Shine,Cookie,Pudding,Hurricane,Candy,Clever,Armour,Platinum,Hooves,Bon,Sweetie Drops,Do,Serenade,Shadow,Skystar,Novo,Squid,Pon-3,Berrytwist,Streak,Breeze,Gladmane,Rich,Milk,Trail,Stinger,Head,Hat,Will,Whistles,Hothoof,Dust,Bangs,Sunrise,Lace,Streak,Rose,Breaker,Pear,Delicious,Spirit,Magnus,Caballeron,Tail,Meadowbrook,Tracker,Hoof,Swirl,NeySay,Bar,Briar,Beret,Flare".split(',')

const random = () => {
  let firstName = ponyFirstNames[Math.floor(Math.random() * ponyFirstNames.length)],
    lastName = ponyLastNames[Math.floor(Math.random() * ponyLastNames.length)]
  return `${firstName} ${lastName}`
}
module.exports = random