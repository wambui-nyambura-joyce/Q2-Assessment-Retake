class Story:
    def __init__(self, age_group, title, moral_lesson, length, language):
        self.age_group = age_group
        self.title = title
        self.moral_lesson = moral_lesson
        self.length = length
        self.language = language

    def initial_story(self):
        print(f"The story {self.title}, written in {self.language} has its moral lesson as '{self.moral_lesson}'")


# class StoryTeller(Story):
#     def __init__(self, age_group, title, moral_lesson, length, language, storyteller):
#         super().__init__(age_group, title, moral_lesson, length, language)
#         self.storyteller = storyteller

#     def storytelling(self):
#         print(f"{self.title} by {self.storyteller} was narrated in {self.language}")


# class Translator(StoryTeller):
#     def __init__(self, age_group, title, moral_lesson, length, language, storyteller):
#         super().__init__(age_group, title, moral_lesson, length, language, storyteller)

#     def translate(self, new_language):
#         original_language = self.language
#         if original_language != new_language:
#             print(f"{original_language} has been translated to {new_language}")
#         else:
#             print(f"The story is in its original language: {self.language}")


# translator2 = Translator("8 to 12 years","The Ancient Tale","Value your heritage","5","English",
#     "Gisemba"
# )
# translator2.translate("Hispanic")

# story = Story("Children","Tales of Elephants","Elephants are great animals","2 hours long",
#     "French"
# )
# story.initial_story()

# telling = StoryTeller("Middle-aged children","Life is Golden","Take life seriously","3 hours long to listen to","English",
#     "Masian"
# )
# telling.initial_story()

# translator = Translator("Youths","Great Aspirations","Creativity is the greatest rebellion in existence","3 hours long to listen to it","French",
#     "The Great Mumbi"
# )
# translator.translate("Kimasai")



# def __init__(self, name, diet, lifespan, migration_patterns):
#        self.name = name
#        self.diet = diet
#        self.lifespan = lifespan
#        self.migration_patterns = migration_patterns
# def species_info(self):
#        return (f"{self.name} feeds on{self.diet}, it has a lifespan of {self.lifespan} and migrates {self.migration_patterns}")
# class Predator (Species):
#    def __init__(self, name, diet, lifespan, migration_patterns, hunting_method):
#        super().__init__(name, diet, lifespan, migration_patterns)
#        self.hunting_method = hunting_method
#    def species_info(self):
#        return super().species_info()
# animal1 = Predator("Cheetah", "meat", "30yrs", "North to South", "spot and stalk")
# print(animal1.species_info())
# class Prey(Species):
#    def __init__(self, name, diet, lifespan, migration_patterns, defense_mechanism):
#        super().__init__(name, diet, lifespan, migration_patterns)
#        self.defense_mechanism = defense_mechanism
#    def species_info(self):
#        return super().species_info()
# animal2 = Prey("Antellope", "grass", "20yrs", "seasonal", "lying flat on ground")
# print(animal2.species_info())



# Question4
class Artist:
    def __init__(self, name, country, music_type, instruments):
        self.name = name
        self.country = country
        self.music_type = music_type
        self.instruments = instruments
    def artist_detail(self):
        print(f"name: {self.name}, country: {self.country}, musicType: {self.music_type}, instruments: {', '.join(self.instruments)}")
class Performance(Artist):
    def __init__(self, name, country, music_type, instruments, stage_time):
        super().__init__(name, country, music_type, instruments)
        self.stage_time = stage_time
    def scheduling(self):
        print(f"name: {self.name}, musicType: {self.music_type}, time: {self.stage_time}")
    def play_instrument(self, instrument):
        if instrument in self.instruments:
            print(f"{self.name} is playing {instrument}")
        else:
            print(f"{self.name} is not playing {instrument}")
class Stage(Artist):
    def __init__(self, name, country, music_type, instruments, capacity, location):
        super().__init__(name, country, music_type, instruments)
        self.capacity = capacity
        self.location = location
    def performance(self):
        print(f"name: {self.name}, country: {self.country}, musicType: {self.music_type}, capacity: {self.capacity}, place: {self.location}")
artist = Artist("jayz", "Canada", "hiphop", instruments=["guitar", "piano"])
artist.artist_detail()
perform = Performance("sautisol", "Kenya", "bongo", instruments=["guitar", "piano"], stage_time="2 hours")
perform.scheduling()
perform.play_instrument("guitar")
stage = Stage("Bridget blue", "Kenya", "gospel", instruments=["piano", "harp", "violin"], capacity=100, location="Nakuru")
stage.performance()



# question5
class Product:
    def __init__(self, name, price, quantity):
     self.name = name
self.price = price
self.quantity = quantity
def calculate_total_value(self):
 total_value = self.price * self.quantity
print(f"Total value of {self.name}: {total_value}")
return total_value
def increase_quantity(self, amount):
 if amount > 0:
  self.quantity += amount
new_quantity = self.quantity + amount
print(f"Increased quantity of {self.name} by {amount}, making the total quantity {new_quantity}.")
 else:
 print("Invalid quantity increase amount.")
 def decrease_quantity(self, amount):
  if amount > 0 and amount <= self.quantity:
   self.quantity -= amount
 new_quantity = self.quantity + amount
 print(f"Decreased quantity of {self.name} by {amount}, making the new total quantity {new_quantity}.")
else:
print("Invalid quantity decrease amount.")
def update_price(self, new_price):
 if new_price >= 0:
  self.price = new_price
print(f"Updated price of {self.name} to {new_price}.")
else:
print("Invalid price value.")
mango = Product("mango", 30, 6)
mango.calculate_total_value()
mango.increase_quantity(3)
mango.decrease_quantity(4)
mango.update_price(10)