export enum topicEnum {
  ACTIONS = 1,
  OBJECTS = 2,
  ADVERBS = 3,
  ADJECTIVES = 4,
  HOME = 5,
  TOOLS = 6,
  MATERIALS = 7,
  FOOD = 8,
  KITCHEN = 9,
  FURNITURE = 10,
  ANIMALS = 11,
  PLANTS = 12,
  EMOTIONS = 13,
  BODY_PARTS = 14,
  LANGUAGE = 15,
  QUALITIES = 16,
  СLOTHING = 17,
  MUSIC = 18,
  ARCHITECTURA = 19,
  THE_ELEMENTS = 20,
  PHYSICS = 21,
  HISTORY = 22,
  GEOGRAPHY = 23,
  CHEMISTRY = 24,
  MATHS = 25,
  COMPUTER_SCIENCE = 26,
  TRANSPORT = 27,
  PART_OF_TRANSPORT = 28,
  PROFESSIONS = 29,
  DATE = 30,
  COUNTRIES = 31,
  SPORT = 32,
  COLORS = 33
}

export interface INavigation {
  navigation: {
    navigate: (path: string) => void
  }
}

export interface ITopic {
  topicName: string
  topicId: number
  description: string
}
