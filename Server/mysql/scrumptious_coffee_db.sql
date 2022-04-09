-- CREATE DATABASE scrumptious_coffee_db;

-- use scrumptious_coffee_db;

-- DROP TABLE products;
-- CREATE TABLE products(
-- products_id int AUTO_INCREMENT PRIMARY KEY,
-- name varchar(255) not null,
-- image_url varchar(255) not null, 
-- description varchar(255) not null,
-- store_quantity int not null, 
-- price_per_pound decimal(4,2)

-- );

-- INSERT INTO products(name,image_url,description,store_quantity,price_per_pound)
-- VALUES
-- ('Hawaiian Kona Coffee','https://i.imgur.com/RiHhhZi.jpg','Well-balanced with a medium body, it is clean in the cup with a bright and cheerful acidity. Kona coffee often reveals buttery as well as spicy qualities and subtle winey tones with an excellent aromatic finish',
-- 12,12.99),
-- ('Mocha Java Coffee','https://i.imgur.com/RHm8Tck.jpg','Perhaps the most famous blend of coffee beans, Mocha Java includes Arabian (Yemen) Mocha coffee and Indonesian Java Arabica coffee, two coffees with complementary characteristics.',
-- 15,12.77),
-- ('Kenya AA Coffee','https://i.imgur.com/yokkvP1.jpg',"The best Kenya AA coffees exhibit a full body and strong, rich taste with a pleasant acidity that some say provides the world's brightest coffee.",
-- 15,13.33),
-- ("Tanzania Peaberry Coffee","https://i.imgur.com/qxRcvQ7.jpg","A medium roast provides an aroma that is floral and complex, often exhibiting hints of pineapple, citrus, or coconut. The flavor is delicate!",
-- 12,11.70),
-- ("Nicaraguan Coffee","https://i.imgur.com/oZdExjf.jpg","Darker roasts bring compliment the chocolate and fruity flavors.",12,21.35),
-- ("Sumatra Mandheling Beans","https://i.imgur.com/P6EOlfr.jpg","The caramelizing that happens in a dark roast helps to mediate the earthy, herby flavor.",8,14.56),
-- ("Sulawesi Toraja Coffee","https://i.imgur.com/ESDYf50.jpg","This multi-dimensional coffee is grown in the southeastern highlands of Sulawesi. Known best for its full body and rich, expansive flavor, Sulawesi Toraja coffee beans are very well balanced and exhibits tasting notes of dark chocolate and ripe fruit.",
-- 20,15.71),
-- ("Ethiopian Harrar Coffee","https://i.imgur.com/LeD8KOU.jpg","Edgy and bold, Ethiopian Harrar displays a complexity of spice tones including cardamom, cinnamon, apricots, blueberry jam, and compote. Some Harrars exhibit tones of very rich, dark chocolate.",
-- 15,13.04),
-- ("Ethiopian Yirgacheffe Coffee","https://i.imgur.com/AUD1AHR.jpg","If you prefer your coffee heavy and sweet then choose a medium-dark roast or dark roast, though a medium roast allows the coffee beans' delicate qualities to shine and enhance the bright acidity.",
-- 15,16.46),
-- ("Guatemala Antigua Coffee","https://i.imgur.com/7tkdZxw.jpg","Guatemalan coffees are naturally smooth and delicious, and works well with a dark roast that creates a pleasing smoky taste in the brewed cup of coffee.",
-- 10,13.56),
-- ('Brazilian Santos','https://i.imgur.com/TL17WhP.jpg','Brazil is known the world over as one of the most prolific and dedicated of coffee producers. This is easily the “softest” coffee we offer, and many people are surprised by how smooth and light it is on their palate',15,19.95),
-- ('Colombian Supremo','https://i.imgur.com/ykByB7d.jpg','This coffee is what off-the-shelf brands are trying to emulate when they offer “100% Colombian” blends, but not one of them comes close to the quality of our fresh roasted Colombian Supremo beans.',10,21.85),
-- ('Peru High Grown','https://i.imgur.com/jyadr64.jpg','This versatile coffee bean is grown in high altitude regions in Peru. Moderately acidic with a soft body and flavor, this bean is ideal as a blending coffee or all on its own.',14,18.54),
-- ('Jamaica Blue Mountain','https://i.imgur.com/r2BKFMB.jpg','Grown in the Clydesdale Estate on the southern slopes of the Jamaica Blue Mountains, this coffee is light roasted to retain its vibrant notes of milk chocolate, honey, and cream',14,13.54),
-- ('Guatemalan','https://i.imgur.com/WZZaIci.jpg','Grown in the volcanic southern regions of Guatemala, this coffee has a spicy flavor with a fair amount of acidity and can be quite strong.',8,15.47),
-- ('Panama Boquete','https://i.imgur.com/Z5pikfP.jpg','Panama Boquete has flown under the radar for far too long. Our Panama Boquete beans are a shining example of superior quality coffee with a complex, rewarding flavor profile unlike any other.',12 , 12.73),
-- ('Costa Rican Tarrazu','https://i.imgur.com/qhL8mk4.jpg',"Costa Rica is regarded as one of the world's premiere coffee growing regions due to its volcanic soil and ideal drainage. As a result, this light roasted coffee creates a sweet cup with a fruity aroma",10,18.24),
-- ('Estate Java','https://i.imgur.com/6qJVqhL.jpg','Grown on the island of Java, the name of this bean has become synonymous with coffee. Like many other Indonesian varietals, this bean is low in acidity and produces a rich, buttery brew with a sweet aroma.',13,16.34),
-- ('Sumatra Mandheling','https://i.imgur.com/r9SpCpz.jpg','A staple of coffee shops throughout the world, Sumatra has an earthy, chocolaty flavor and is considered to be among the finest beans available.',20,19.54),
-- ('Sulawesi Kalossi','https://i.imgur.com/OLxngwd.jpg','On the Indonesian island of Sulawesi, not far from the village Kalossi, the high-altitude volcanic soil is perfect for growing coffee. Known for its velvety body, this bean features rich, earthy flavor notes and a heady, exotic aroma.',12,14.12),
-- ('Danish Blend','https://i.imgur.com/BB4seBp.jpg','Denmark is the home of Kaffeepause, a break in the day used to rest and sip on our favorite treat: coffee! Not only do we support this tradition, we have created a blend of beans to celebrate it.',16,18.34),
-- ('Bali Blue Moon','https://i.imgur.com/3VoWo1W.jpg','Of all the single origin varietals of coffee we’ve acquired, our Organic Bali Blue Moon is perhaps most deserving of its namesake. This exquisite bean brews the kind of nuanced, flavorful cup that only comes around once in a blue moon.',16,16.54),
-- ('Eyes Wide Open','https://i.imgur.com/Pidx5lf.jpg','Life is too short to let your day pass by unnoticed! Carpe that diem and enjoy a mug of Eyes Wide Open coffee while you’re at it.',15,13.38),
-- ('Hawaiian Kona Fancy','https://i.imgur.com/KbiBw3Y.jpg','It just so happens that the only place in the United States suitable for cultivating coffee produces one of the best in the world. (Pat yourselves on the back, Americans...you deserve it!)',16,23.14)
-- ;

SELECT * FROM products;