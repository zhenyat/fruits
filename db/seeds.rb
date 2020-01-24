fruits = ['Mango', 'Pineapple', 'Passion fruit', 'Dragon fruit']
fruits.each{|fruit| Fruit.create(name: fruit, description: "I am a delicious #{fruit}.")}
