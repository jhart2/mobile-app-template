import { ImageSourcePropType } from 'react-native';

export enum TrainingLevel {
  EASY = 'Easy',
  MIDDLE = 'Middle',
  HARD = 'Hard',
}

export class Training {

  constructor(readonly title: string,
              readonly duration: number,
              readonly level: TrainingLevel,
              readonly image: ImageSourcePropType) {
  }

  get formattedLevel(): string {
    return `${this.level} Level`;
  }

  get formattedDuration(): string {
    return `${this.duration}`;
  }

  static chestEasy(): Training {
    return new Training(
      'Flowering Plants',
      0,
      TrainingLevel.EASY,
      require('../assets/sample-1.jpg'),
    );
  }

  static workoutEasy(): Training {
    return new Training(
      'Vegetative Plants',
      0,
      TrainingLevel.EASY,
      require('../assets/sample-2.jpg'),
    );
  }

  static personalizedEasy(): Training {
    return new Training(
      'Immature Plants',
      0,
      TrainingLevel.EASY,
      require('../assets/sample-3.jpg'),
    );
  }

  static chestMiddle(): Training {
    return new Training(
      'Vegitative Plants',
      0,
      TrainingLevel.MIDDLE,
      require('../assets/sample-1.jpg'),
    );
  }

  static bicepsMiddle(): Training {
    return new Training(
      'Biceps',
      0,
      TrainingLevel.MIDDLE,
      require('../assets/sample-2.jpg'),
    );
  }

  static personalizedMiddle(): Training {
    return new Training(
      'Personalized Training',
      0,
      TrainingLevel.MIDDLE,
      require('../assets/sample-3.jpg'),
    );
  }

  static chestHard(): Training {
    return new Training(
      'Chest',
      0,
      TrainingLevel.HARD,
      require('../assets/sample-1.jpg'),
    );
  }

  static bicepsHard(): Training {
    return new Training(
      'Biceps',
      0,
      TrainingLevel.HARD,
      require('../assets/sample-2.jpg'),
    );
  }

  static workoutHard(): Training {
    return new Training(
      'Workout',
      0,
      TrainingLevel.HARD,
      require('../assets/sample-3.jpg'),
    );
  }
}
