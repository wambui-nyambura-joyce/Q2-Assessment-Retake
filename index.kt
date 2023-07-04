fun main() {
    val translator2 = Translator(
        "8 to 12 years",
        "The Ancient Tale",
        "Value your heritage",
        "5",
        "English",
        "Gisemba"
    )
    translator2.translate("Hispanic")

    val story = Story(
        "Children",
        "Tales of Elephants",
        "Elephants are great animals",
        "2 hours long",
        "French"
    )
    story.initialStory()

    val telling = StoryTeller(
        "Middle-aged children",
        "Life is Golden",
        "Take life seriously",
        "3 hours long to listen to",
        "English",
        "Masian"
    )
    telling.initialStory()

    val translator = Translator(
        "Youths",
        "Great Aspirations",
        "Creativity is the greatest rebellion in existence",
        "3 hours long to listen to it",
        "French",
        "The Great Mumbi"
    )
    translator.translate("Kimasai")
}



open class Story(
    var ageGroup: String,
    var title: String,
    var moralLesson: String,
    var length: String,
    var language: String
) {
    fun initialStory() {
        println("The story $title, written in $language has its moral lesson as, $moralLesson as 'We should pray everyday'")
    }
}

open class StoryTeller(
    ageGroup: String,
    title: String,
    moralLesson: String,
    length: String,
    language: String,
    var storyteller: String
) : Story(ageGroup, title, moralLesson, length, language) {
    fun storytelling() {
        println("$title by $storyteller was narrated in $language")
    }
}

class Translator(
    ageGroup: String,
    title: String,
    moralLesson: String,
    length: String,
    language: String,
    storyteller: String
) : StoryTeller(ageGroup, title, moralLesson, length, language, storyteller) {
    fun translate(newLanguage: String) {
        val originalLanguage = language
        if (originalLanguage != newLanguage) {
            println("$originalLanguage has been translated to $newLanguage")
        } else {
            println("The story is in its original language: $language")
        }
    }
}